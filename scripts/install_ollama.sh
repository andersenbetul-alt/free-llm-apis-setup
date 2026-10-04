#!/usr/bin/env bash
set -euo pipefail

MODEL="${OLLAMA_MODEL:-llama3.1}"

case "$(uname -s)" in
  Darwin)
    if ! command -v brew >/dev/null 2>&1; then
      echo "Homebrew is required. Install it from https://brew.sh, then rerun this script."
      exit 1
    fi
    brew install ollama
    ;;
  Linux)
    curl -fsSL https://ollama.com/install.sh | sh
    ;;
  *)
    echo "Unsupported OS. On Windows use scripts/install_ollama.ps1."
    exit 1
    ;;
esac

echo
echo "Ollama installed."
echo "Start the server in one terminal:"
echo "  ollama serve"
echo
echo "Then, in a second terminal, run:"
echo "  ollama run ${MODEL}"
