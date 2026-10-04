# free-llm-apis-setup

Setup guides and runnable examples for local and hosted LLM APIs.

## Ollama quick start

### macOS

```bash
brew install ollama
ollama serve
```

In a second terminal:

```bash
ollama run llama3.1
```

### Linux

```bash
curl -fsSL https://ollama.com/install.sh | sh
ollama serve
```

In a second terminal:

```bash
ollama run llama3.1
```

### Windows

Download and install Ollama from:

<https://ollama.com/download/windows>

Then open PowerShell:

```powershell
ollama serve
```

In a second PowerShell window:

```powershell
ollama run llama3.1
```

## Automated helper scripts

macOS / Linux:

```bash
chmod +x scripts/install_ollama.sh
./scripts/install_ollama.sh
```

Windows PowerShell:

```powershell
.\scripts\install_ollama.ps1
```

The scripts intentionally keep `ollama serve` and `ollama run` as explicit follow-up commands so the server and interactive model session remain visible and easy to stop.

## Local API examples

Copy the environment template if you want to override the default model or endpoint:

```bash
cp .env.example .env
```

Python:

```bash
python -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install requests
python python_ollama_example.py
```

Node.js:

```bash
npm init -y
npm install axios
node nodejs_ollama_example.js
```

Default local endpoint:

```text
http://localhost:11434/api/generate
```

## Included guides

- `SETUP_CHECKLIST.md` — setup checklist for Ollama and hosted providers
- `MODELS_BY_TASK.md` — model/provider selection notes
- `python_ollama_example.py` — Python client
- `nodejs_ollama_example.js` — Node.js client
- `scripts/install_ollama.sh` — macOS/Linux install helper
- `scripts/install_ollama.ps1` — Windows install helper

## Security

Never commit real API keys. Keep hosted-provider credentials in environment variables or a local `.env` file excluded from Git.
