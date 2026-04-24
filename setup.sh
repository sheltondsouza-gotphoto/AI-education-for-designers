#!/bin/bash
# setup.sh — GotPhoto AI Workshop first-time setup
# Safe to re-run: each step checks before acting.

set -e

BOLD="\033[1m"
GREEN="\033[0;32m"
YELLOW="\033[0;33m"
RESET="\033[0m"

echo ""
echo -e "${BOLD}GotPhoto AI Workshop — Setup${RESET}"
echo "────────────────────────────────────"
echo ""

# ── 1. Mario game personal copy ──────────────────────────────────────────────
echo -e "${BOLD}1. Mario game${RESET}"

if [ -d "sessions/mario-game" ]; then
  echo -e "   ${GREEN}✓${RESET} sessions/mario-game/ already exists — skipping copy"
else
  cp -r sessions/mario-game-starter sessions/mario-game
  echo -e "   ${GREEN}✓${RESET} Copied starter → sessions/mario-game/"
fi

echo "   Installing dependencies..."
(cd sessions/mario-game && npm install --silent)
echo -e "   ${GREEN}✓${RESET} npm install done"
echo "   To start: cd sessions/mario-game && npm run dev"
echo ""

# ── 2. GitHub CLI ─────────────────────────────────────────────────────────────
echo -e "${BOLD}2. GitHub CLI (gh)${RESET}"

if command -v gh &> /dev/null; then
  echo -e "   ${GREEN}✓${RESET} gh already installed ($(gh --version | head -1))"
else
  if command -v brew &> /dev/null; then
    echo "   Installing via Homebrew..."
    brew install gh
    echo -e "   ${GREEN}✓${RESET} gh installed"
  else
    echo -e "   ${YELLOW}⚠${RESET}  Homebrew not found."
    echo "   Install manually: https://cli.github.com"
  fi
fi

echo ""
echo -e "${BOLD}3. GitHub authentication${RESET}"

if gh auth status &> /dev/null 2>&1; then
  echo -e "   ${GREEN}✓${RESET} Already authenticated"
else
  echo "   Launching GitHub login..."
  gh auth login
fi

echo ""
echo "────────────────────────────────────"
echo -e "${GREEN}${BOLD}All done.${RESET} You're ready for the workshop."
echo ""
echo "Quick start:"
echo "  cd sessions/mario-game && npm run dev   ← start your game"
echo "  gh repo view --web                      ← open this repo on GitHub"
echo ""
