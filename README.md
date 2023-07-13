# AI-Powered CLI Application

This project is developed as part of a course I took on edX. It's a Command Line Interface (CLI) application that allows users to ask questions about JavaScript concepts and get answers from an AI.

## Features

- **Translation**: Allows users to translate texts into different languages.
- **Summary Generation**: Allows users to generate summaries of given texts.

## Installation

1. Clone the repository to your local machine.
   ```
   git clone https://github.com/yourusername/your-repo-name.git
   ```
2. Navigate to the project directory.
   ```
   cd your-repo-name
   ```
3. Install the necessary packages.
   ```
   npm install
   ```
4. Change the  `.env` file and add your OpenAI API key.
   ```
   OPENAI_API_KEY=your-api-key
   ```

## Usage

To run the application, use the following command in your terminal:

```
node script.mjs
```

You will be prompted to choose a task (Translation or Summary Generation) and then to input the text you want to process. The AI will then return a response based on your input.

## Future Improvements

This project can be extended to include more features such as a news app and a weather forecast feature. The quality of the AI's responses heavily depends on the quality of the prompts given to it. As emphasized in Microsoft's Prompt Engineering course, crafting effective prompts is crucial in obtaining useful responses from the AI.
