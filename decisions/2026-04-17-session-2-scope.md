# Session 2 Scope — 2026-04-17

## What was decided

- **Session 2 theme changed** from "Deeper into LLMs" to "Dev Workflow" — Session 1 only got to mid-GitHub, so Session 2 picks up from versioning and completes the foundational tooling arc before moving into LLM concepts.
- **Session 2 topics:** Versioning revision → GitHub/GitLab → GitHub Desktop → GitHub CLI → Package managers → APIs & REST (deep dive) → MCP architecture → Claude Code setup.
- **Deeper into LLMs content** pushed to Session 3.
- **Mario game moved** from `sessions/session-01/mario-game/` → `sessions/mario-game/` as a standalone personal project.
- **Mario game gitignored** from outer repo via root `.gitignore`. `git pull` on the course repo will never touch participants' local mario-game changes. The mario-game keeps its own `.git` directory — participants can commit their own history independently.
- **Claude Code setup = link to docs only** — no live install during session to avoid 45-min risk.
- **MCP session** focuses on host/client/server architecture understanding, not live Figma MCP (comes in a later session when Figma integration is the focus).

## What was rejected

- Running live `npm install` + `gh auth login` as part of the session — too risky for a 45-min slot; moved to pre-session homework.
- Deeper into LLMs in Session 2 — not ready; participants need Git/packages foundation first.

## Session count

Curriculum now 6 sessions (added one to accommodate the scope split).
