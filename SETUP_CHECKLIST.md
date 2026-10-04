# Free LLM APIs Setup Checklist

## 1. Ollama (Local, Fastest)
- [ ] Download installer from https://ollama.com/download
- [ ] Install Ollama for your OS (macOS/Linux/Windows)
- [ ] Run `ollama serve` in terminal
- [ ] Pull a model: `ollama pull llama3.1`
- [ ] Test: `ollama run llama3.1`
- [ ] Access at: http://localhost:11434

## 2. Google AI Studio (Free Gemini)
- [ ] Go to https://aistudio.google.com
- [ ] Sign in with Google account
- [ ] Get API key from Settings
- [ ] Save API key: `GOOGLE_AI_API_KEY`
- [ ] Install SDK: `pip install google-generativeai` or `npm install @google/generative-ai`
- [ ] Test with provided examples

## 3. Groq (Fastest Free Inference)
- [ ] Go to https://console.groq.com
- [ ] Create account
- [ ] Get API key from API Keys page
- [ ] Save API key: `GROQ_API_KEY`
- [ ] Install SDK: `pip install groq` or `npm install groq-sdk`
- [ ] Available models: Llama 3.3, Mixtral, Gemma

## 4. Hugging Face (Open Models)
- [ ] Go to https://huggingface.co
- [ ] Create account
- [ ] Get API token from Settings > Access Tokens
- [ ] Save token: `HF_API_TOKEN`
- [ ] Try Inference API or Endpoints
- [ ] Popular models: mistral-7b, zephyr, falcon

## 5. OpenRouter (Multiple Models)
- [ ] Go to https://openrouter.ai
- [ ] Create account
- [ ] Get API key from Settings
- [ ] Save API key: `OPENROUTER_API_KEY`
- [ ] Browse available models and pricing
- [ ] Some models have free tier

## 6. Together AI (Open Source Focus)
- [ ] Go to https://www.together.ai
- [ ] Create account
- [ ] Get API key from dashboard
- [ ] Save API key: `TOGETHER_API_KEY`
- [ ] Popular models: Llama, Mistral, Qwen
- [ ] Free credits for new users

## 7. Replicate (Hosted Models)
- [ ] Go to https://replicate.com
- [ ] Create account with GitHub
- [ ] Get API token from Settings
- [ ] Save API key: `REPLICATE_API_TOKEN`
- [ ] Browse available models
- [ ] Free credits available

---

## Environment Setup

### Python
```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install requests  # For Ollama
pip install google-generativeai  # For Google AI
pip install groq  # For Groq
pip install huggingface-hub  # For Hugging Face
pip install openrouter  # For OpenRouter
```

### Node.js
```bash
# Initialize project
npm init -y

# Install dependencies
npm install axios  # For Ollama
npm install @google/generative-ai  # For Google AI
npm install groq-sdk  # For Groq
npm install @huggingface/inference  # For Hugging Face
```

---

## Quick Test Commands

### Ollama
```bash
ollama serve  # Terminal 1
ollama run llama3.1  # Terminal 2
```

### Python - Google AI
```python
import google.generativeai as genai
genai.configure(api_key="YOUR_KEY")
model = genai.GenerativeModel("gemini-pro")
response = model.generate_content("Hello")
print(response.text)
```

### Python - Groq
```python
from groq import Groq
client = Groq(api_key="YOUR_KEY")
response = client.chat.completions.create(
    model="llama3-70b-8192",
    messages=[{"role": "user", "content": "Hello"}]
)
print(response.choices[0].message.content)
```

### Node.js - Google AI
```javascript
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genai = new GoogleGenerativeAI("YOUR_KEY");
const model = genai.getGenerativeModel({ model: "gemini-pro" });
const result = await model.generateContent("Hello");
console.log(result.response.text());
```

---

## Rate Limits & Quotas

| Service | Free Tier | Limit |
|---------|-----------|-------|
| Ollama | Unlimited | Local only |
| Google AI | 60 RPM | Requests per minute |
| Groq | 30 RPM | Requests per minute |
| Hugging Face | Varies | Per model |
| OpenRouter | Pay-as-you-go | Model dependent |
| Together AI | $5 credits | Per month |
| Replicate | $5 credits | Per month |

---

## Best Practices

- [ ] Store API keys in `.env` file (never commit to git)
- [ ] Use environment variables for secrets
- [ ] Start with Ollama for unlimited local testing
- [ ] Use Groq for production speed
- [ ] Use Google AI for reliable Gemini access
- [ ] Monitor usage on paid APIs
- [ ] Set up alerts for quota limits
- [ ] Test with free tier before scaling

---

## Troubleshooting

### Ollama connection refused
```bash
# Check if Ollama is running
ollama serve

# Check port availability
lsof -i :11434  # macOS/Linux
netstat -ano | findstr :11434  # Windows
```

### API Key errors
- Double-check key format
- Ensure key has necessary permissions
- Check for leading/trailing spaces
- Verify key hasn't expired

### Rate limit errors
- Implement exponential backoff
- Reduce request frequency
- Upgrade to paid tier
- Use multiple API keys

---

## Next Steps

1. Start with **Ollama** for unlimited local development
2. Get **Google AI** key for free Gemini access
3. Get **Groq** key for production speed
4. Try others as needed for specific features
5. Monitor costs and adjust usage accordingly
