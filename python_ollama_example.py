#!/usr/bin/env python3
"""
Python script to call Ollama locally
Requires: pip install requests
"""

import requests
import json

# Configuration
OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL = "llama3.1"  # Change to your model: mistral, qwen2.5, phi3, etc.

def call_ollama(prompt, stream=False):
    """
    Call Ollama with a prompt
    
    Args:
        prompt (str): The input prompt
        stream (bool): Whether to stream the response
    
    Returns:
        str: The model's response
    """
    payload = {
        "model": MODEL,
        "prompt": prompt,
        "stream": stream
    }
    
    try:
        response = requests.post(OLLAMA_URL, json=payload)
        response.raise_for_status()
        
        if stream:
            # Handle streaming response
            full_response = ""
            for line in response.iter_lines():
                if line:
                    data = json.loads(line)
                    full_response += data.get("response", "")
            return full_response
        else:
            # Handle non-streaming response
            data = response.json()
            return data.get("response", "")
    
    except requests.exceptions.ConnectionError:
        return "Error: Could not connect to Ollama. Make sure to run 'ollama serve' first."
    except Exception as e:
        return f"Error: {str(e)}"

def main():
    print("=" * 60)
    print("Ollama Python Client Example")
    print("=" * 60)
    print(f"Model: {MODEL}")
    print(f"Endpoint: {OLLAMA_URL}")
    print("=" * 60)
    
    # Example 1: Simple prompt
    print("\n[Example 1] Simple prompt:")
    prompt1 = "What is the capital of France?"
    print(f"Prompt: {prompt1}")
    response1 = call_ollama(prompt1)
    print(f"Response: {response1}\n")
    
    # Example 2: Code generation
    print("[Example 2] Code generation:")
    prompt2 = "Write a Python function to calculate factorial"
    print(f"Prompt: {prompt2}")
    response2 = call_ollama(prompt2)
    print(f"Response: {response2}\n")
    
    # Example 3: Explanation
    print("[Example 3] Explanation:")
    prompt3 = "Explain quantum computing in simple terms"
    print(f"Prompt: {prompt3}")
    response3 = call_ollama(prompt3)
    print(f"Response: {response3}\n")
    
    # Example 4: Interactive mode
    print("[Example 4] Interactive mode:")
    print("Type 'quit' to exit")
    while True:
        user_input = input("\nYou: ").strip()
        if user_input.lower() == 'quit':
            break
        if user_input:
            response = call_ollama(user_input)
            print(f"Assistant: {response}")

if __name__ == "__main__":
    main()
