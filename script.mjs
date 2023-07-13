// Import necessary packages
import inquirer from 'inquirer';
import { config } from 'dotenv';
import { OpenAI } from 'langchain/llms/openai';
import { PromptTemplate } from 'langchain/prompts';
import { StructuredOutputParser } from 'langchain/output_parsers';
config();

// LangChain settings
const model = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY, 
  temperature: 0,
  model: 'gpt-3.5-turbo'
});

// Structured output parser
const parser = StructuredOutputParser.fromNamesAndDescriptions({
    code: "Javascript code that answers the user's question",
    explanation: "Detailed explanation of the example code provided",
});
const formatInstructions = parser.getFormatInstructions();

// Prompt templates
const translationPrompt = new PromptTemplate({
  template: "You are a multi-linguistic translator and will translate the user's text as accurately as possible.\n{format_instructions}\n{question}",
  inputVariables: ["question"],
  partialVariables: { format_instructions: formatInstructions }
});

const summaryPrompt = new PromptTemplate({
  template: "You are a linguistic professor and will summarize the user's text as succinctly as possible.\n{format_instructions}\n{question}",
  inputVariables: ["question"],
  partialVariables: { format_instructions: formatInstructions }
});

// Main function
const main = async () => {
  const { taskType } = await inquirer.prompt({
    type: 'list',
    name: 'taskType',
    message: 'Which task do you want to perform?',
    choices: ['Translation', 'Summary Generation'],
  });

  const { text } = await inquirer.prompt({
    type: 'input',
    name: 'text',
    message: 'Please input the text you want to process',
  });

  let response;
  switch (taskType) {
    case 'Translation':
      // Perform translation using LangChain API
      response = await model.complete(translationPrompt.format({ question: `Translate the following English text to French: "${text}"` }));
      break;
    case 'Summary Generation':
      // Perform summary generation using LangChain API
      response = await model.complete(summaryPrompt.format({ question: `Write a summary for the following text: "${text}"` }));
      break;
  }

  // Parse and print the response
  console.log(await parser.parse(response.data.choices[0].text.trim()));
};

// Run the main function
main();
