// index.js

// Load environment variables from .env.local
require('dotenv').config({ path: '.env.local' });

const { GoogleGenerativeAI } = require('@google/generative-ai');

// Access your API key from the environment variable
// The name (e.g., GEMINI_API_KEY) must match what's in your .env.local file
const API_KEY = process.env.GEMINI_API_KEY;

// Check if the API key is loaded
if (!API_KEY) {
  console.error("Error: GEMINI_API_KEY is not set in your .env.local file.");
  process.exit(1); // Exit the process if the key is missing
}

async function run() {
  const genAI = new GoogleGenerativeAI(API_KEY);

  // For text-only input:
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = "Write a short, engaging story about a futuristic cat.";

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  } catch (error) {
    console.error("Error generating content:", error);
  }
}

// Call the function to run the Gemini request
run();