#!/usr/bin/env node

/**
 * Node.js script to call Ollama locally
 * Requires: npm install axios
 */

const axios = require('axios');
const readline = require('readline');

// Configuration
const OLLAMA_URL = 'http://localhost:11434/api/generate';
const MODEL = 'llama3.1'; // Change to your model: mistral, qwen2.5, phi3, etc.

/**
 * Call Ollama with a prompt
 * @param {string} prompt - The input prompt
 * @param {boolean} stream - Whether to stream the response
 * @returns {Promise<string>} - The model's response
 */
async function callOllama(prompt, stream = false) {
  try {
    const response = await axios.post(OLLAMA_URL, {
      model: MODEL,
      prompt: prompt,
      stream: stream
    });

    if (stream) {
      // Handle streaming response
      let fullResponse = '';
      const lines = response.data.split('\n');
      for (const line of lines) {
        if (line.trim()) {
          const data = JSON.parse(line);
          fullResponse += data.response || '';
        }
      }
      return fullResponse;
    } else {
      // Handle non-streaming response
      return response.data.response || '';
    }
  } catch (error) {
    if (error.code === 'ECONNREFUSED') {
      return 'Error: Could not connect to Ollama. Make sure to run "ollama serve" first.';
    }
    return `Error: ${error.message}`;
  }
}

async function main() {
  console.log('='.repeat(60));
  console.log('Ollama Node.js Client Example');
  console.log('='.repeat(60));
  console.log(`Model: ${MODEL}`);
  console.log(`Endpoint: ${OLLAMA_URL}`);
  console.log('='.repeat(60));

  // Example 1: Simple prompt
  console.log('\n[Example 1] Simple prompt:');
  const prompt1 = 'What is the capital of France?';
  console.log(`Prompt: ${prompt1}`);
  const response1 = await callOllama(prompt1);
  console.log(`Response: ${response1}\n`);

  // Example 2: Code generation
  console.log('[Example 2] Code generation:');
  const prompt2 = 'Write a JavaScript function to calculate factorial';
  console.log(`Prompt: ${prompt2}`);
  const response2 = await callOllama(prompt2);
  console.log(`Response: ${response2}\n`);

  // Example 3: Explanation
  console.log('[Example 3] Explanation:');
  const prompt3 = 'Explain machine learning in simple terms';
  console.log(`Prompt: ${prompt3}`);
  const response3 = await callOllama(prompt3);
  console.log(`Response: ${response3}\n`);

  // Example 4: Interactive mode
  console.log('[Example 4] Interactive mode:');
  console.log('Type "quit" to exit\n');

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  const askQuestion = () => {
    rl.question('You: ', async (input) => {
      if (input.toLowerCase() === 'quit') {
        rl.close();
        return;
      }
      if (input.trim()) {
        const response = await callOllama(input);
        console.log(`Assistant: ${response}\n`);
      }
      askQuestion();
    });
  };

  askQuestion();
}

main().catch(console.error);
