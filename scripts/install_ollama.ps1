$ErrorActionPreference = "Stop"

$model = if ($env:OLLAMA_MODEL) { $env:OLLAMA_MODEL } else { "llama3.1" }

if (-not (Get-Command ollama -ErrorAction SilentlyContinue)) {
    Write-Host "Ollama is not installed."
    Write-Host "Opening the official Windows download page..."
    Start-Process "https://ollama.com/download/windows"
    Write-Host "Install Ollama, open a new PowerShell window, and rerun this script."
    exit 1
}

Write-Host ""
Write-Host "Ollama is installed."
Write-Host "Start the server in one PowerShell window:"
Write-Host "  ollama serve"
Write-Host ""
Write-Host "Then, in a second PowerShell window, run:"
Write-Host "  ollama run $model"
