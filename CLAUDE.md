# GotPhoto AI Workshop — Master Context

> Read this file first in any new session. It tells you what this project is, why it exists, who it's for, and exactly where to look for specific work.

---

## What this project is

A **6-session workshop series** called the *GotPhoto AI Workshop*, designed to teach designers and product managers how to use AI confidently in their daily product work. Sessions run ~45 minutes each in a hybrid format (in-person + remote). The series uses a hands-on, demo-first approach: participants learn by watching live demos, cloning repos, and running code on their own machines — not by reading theory.

The project lives in this git repo. Every session has its own folder with a plan, a cheat sheet, and a demo `index.html` participants open in their browser. The `index.html` is the primary on-screen artifact during sessions — it must include clickable external links to reference sites so the facilitator can open them directly during screen share.

The curriculum spine is `topics.csv`. The status of all sessions and artifacts is `PROGRESS.md`.

---

## Why it's being done

Designers and PMs at GotPhoto regularly interact with AI tools (Claude, Cursor, v0.dev, Figma MCP) but lack the technical grounding to use them effectively. They don't know what a terminal is, what `npm run dev` does, or how MCP connects Claude to Figma. This limits how deeply they can prompt, how well they can collaborate with engineers, and how much they can do independently.

The goal is to **remove the mystery** — not to turn designers into engineers, but to give them enough working knowledge that AI becomes a genuine daily tool rather than a black box.

---

## Who it's for

| Role | Person / Group | Detail |
|---|---|---|
| **Participants** | ~5 designers and PMs at GotPhoto | Beginner level; assume no prior terminal or git experience |
| **Facilitator** | Shelton D'Souza | `shelton.dsouza@fotograf.de` — plans sessions, runs demos, produces materials |
| **Company** | GotPhoto / fotograf.de | Photography studio workflow software |

**Session format:** 45 min, hybrid (1–2 in-person + remote on Google Meet). Demos must be smooth and pre-tested. Avoid live installs or anything that can break during a session.

**End-of-series outcomes for participants:**
- Comfortable using VS Code and Claude Code for PRDs, design docs, and specs
- Able to run a local development environment on their own machine
- Able to use Claude with Figma via MCP
- Understand enough about how code and AI tools work to prompt intelligently and collaborate with engineers

---

## Curriculum — 6 Sessions

| # | Theme | Status | Key topics |
|---|---|---|---|
| 1 | Intro | done (Apr 17, 2026) | IDE, Markdown, Terminal, React/TS/Next.js, Tailwind, Localhost, Git basics, Versioning |
| 2 | Dev Workflow | planned | GitHub Desktop, `git push`, clone activity, APIs & REST, MCP architecture, Package managers, Claude Code |
| 3 | Deeper into LLMs | planned | How LLMs think, tokenization, context windows, agent stack, Cursor, v0.dev, prompting |
| 4 | Using Other People's Code | planned | Package management, env vars, webhooks, merge conflicts, data schema, JSON |
| 5 | Design to Implementation | planned | Component thinking, design tokens, separation of concerns, spec-driven dev, CI/CD |
| 6 | Building with LLMs | planned | n8n, RAG, vector DBs, Supabase, Vercel, Docker, serverless |

For the authoritative topic list with technical explanations, see `topics.csv`.

**Important:** Check `PROGRESS.md → Topics covered per session` before planning any session. Topics listed there as covered must NOT be repeated. Topics listed as "NOT covered" for a session must carry forward.

---

## Folder map — where everything lives

### Root `/`

| File / Folder | What it is | Read it when… |
|---|---|---|
| `CLAUDE.md` | This file — master context | Every new session, read first |
| `PROGRESS.md` | Session status + covered/uncovered topics + artifact checklist | Planning any session; checking what to carry forward |
| `README.md` | Participant-facing intro — install prereqs, how to use the repo | Editing the public-facing entry point |
| `topics.csv` | Full curriculum: all 6 sessions × all topics with technical explanations | Scoping a session's content, checking topic definitions |
| `setup.sh` | First-time setup script for participants — copies mario-game-starter, runs npm install, installs gh CLI, runs gh auth login | Modifying participant onboarding; debugging setup |
| `First_session.md` | Shelton's raw planning notes for Session 1 — original topic wishlist and activity ideas | Understanding original intent for Session 1 |
| `Second_session.md` | Shelton's raw planning notes for Session 2 — topics to cover, picking up from Session 1 | Understanding original intent for Session 2 |
| `prompt.md` | The very first prompt Shelton gave Claude to start this project | Understanding the original project ask |
| `first-prompt-claude-code.md` | A ready-to-paste starter prompt for a fresh Claude Code session on this project | Starting a new Claude Code session from scratch |
| `figma_prompt.md` | A Figma UI feedback prompt (unrelated to workshops — personal Shelton work) | Do not use for workshop planning |

### `decisions/`

Dated decision logs: what was chosen, why, what was rejected. These are the authoritative record of constraints and trade-offs made during planning.

| File | What it records |
|---|---|
| `2026-04-14-session-structure.md` | Format decisions (45 min, hybrid, clone activity as only live hands-on, 1 cheat sheet per session, pre-session installs as prereqs) |
| `2026-04-17-session-2-scope.md` | Why Session 2 theme changed from "LLMs" to "Dev Workflow"; mario-game move; Claude Code as docs-link-only (no live install); MCP = architecture only in S2 |

**Read decisions/ whenever:**
- Designing a new session — to avoid violating existing constraints
- Something seems like it was already decided — check here first before re-opening it

### `sessions/`

All session deliverables. Each session folder follows the same structure.

#### `sessions/session-01/`

Session 1: Intro (completed April 17, 2026).

| File | What it is |
|---|---|
| `plan.md` | Full facilitator demo script with talking points, terminal commands to type, and time blocks |
| `session-01-script.md` | At-a-glance TALK/DEMO/TRY/PAUSE script — **this is what Shelton actually had open during S1**. Includes inline links to external reference sites (react.dev, typescriptlang.org, etc.) that were opened and screen-shared with the team. |
| `cheat-sheet.md` | Participant reference card covering all S1 topics + terminal commands + Tailwind quick ref + activity steps |
| `call_transcript.md` | Auto-generated Google Meet transcript summary from the actual session (large file — use grep, don't read whole) |
| `demo/index.html` | The HTML page shown in browser and shared on screen during the session |
| `demo/CLAUDE.md` | Claude context for the demo sub-project |
| `demo/context.md` | Human-readable notes file shown as an example of project context |

**What was actually used in S1:** `session-01-script.md` (open on a second screen) + external links from it opened in browser + `demo/index.html` shared on screen with participants. The `plan.md` is background prep, not used live.

**Read session-01 when:** Planning the next session (to understand what was covered, what format worked, and which external links were used).

#### `sessions/session-02/`

Session 2: Dev Workflow (planned, not yet run).

| File | What it is |
|---|---|
| `plan.md` | Full facilitator demo script — all blocks with talking points, terminal commands, time |
| `cheat-sheet.md` | Participant reference covering all S2 topics, npm/package.json anatomy, MCP diagram, Claude Code homework |
| `demo/index.html` | **Primary on-screen artifact** — shared with participants during the session. Must contain external reference links for each topic so Shelton can click through them live. |
| `demo/CLAUDE.md` | Claude context for the S2 demo sub-project |
| `demo/context.md` | Human-readable notes for S2 demo |

> `session-02-script.md` exists but is not needed. Do not create `session-NN-script.md` files for future sessions — the at-a-glance format is only useful if it contains external links, which belong in `index.html` instead.

**Read session-02 when:** Running or refining Session 2; using as template for Session 3 plan.

#### `sessions/mario-game/`

The **personal copy** of the game each participant runs on their own machine. This folder is:
- **Gitignored** from the course repo — `git pull` never touches it
- Has its own `.git` directory — participants can commit their own game history independently
- Created by `setup.sh` copying `mario-game-starter/`

Stack: React + TypeScript + Tailwind CSS + Vite. Run with `npm install && npm run dev` → opens at `localhost:5173`.

| File / Folder | What it is |
|---|---|
| `README.md` | How to run the game, full project structure explanation, TypeScript and Tailwind concepts shown |
| `src/App.tsx` | Root component — controls which screen shows (`select` or `playing`) |
| `src/types.ts` | Shared TypeScript interfaces (`Character`, `Player`, `Coin`) |
| `src/components/CharacterSelect.tsx` | Screen 1 — pick one of 5 characters |
| `src/components/Game.tsx` | Screen 2 — canvas-based game loop with `requestAnimationFrame` |
| `public/characters/` | SVG assets for 5 characters (Mario, Luigi, Wario, Toad, Waluigi) |
| `package.json` | Dependencies and scripts — used as a teaching artifact in Session 2 |

**Read mario-game when:** Modifying or extending the game; preparing the Block 3 demo in Session 2 (package.json walkthrough + `npm run dev` demo).

#### `sessions/mario-game-starter/`

The **tracked template** — the clean, unmodified source of truth that `setup.sh` copies to create each participant's personal `mario-game/`. Identical structure to `mario-game/` but committed to the course repo.

**Never modify `mario-game-starter/` lightly** — changes here propagate to all future `setup.sh` runs (new participants). Only update it to fix bugs or add features that all participants should start with.

**Read mario-game-starter when:** Making improvements to the base game that all participants should receive; debugging setup.sh failures.

---

## File naming conventions

| Convention | Example | Used for |
|---|---|---|
| `session-NN/` | `session-02/` | All session folders |
| `YYYY-MM-DD-topic.md` | `2026-04-17-session-2-scope.md` | Decision logs |
| `plan.md` | `sessions/session-02/plan.md` | Full demo script per session (background prep, not used live) |
| `cheat-sheet.md` | `sessions/session-02/cheat-sheet.md` | Participant reference card |
| `demo/index.html` | `sessions/session-02/demo/index.html` | **Primary live artifact** — open on screen share, must have external links |

> Do NOT create `session-NN-script.md` for new sessions. That file type is retired — external links belong in `index.html`.

---

## How to work on this project

1. **Check `PROGRESS.md` first.** It tells you what's been covered, what sessions are planned vs done, and what artifacts exist.
2. **Check `decisions/` before re-opening past decisions.** The record is there; don't contradict it without a reason.
3. **Don't produce everything in one shot.** Propose → align → draft → review → expand.
4. **Ask before assuming scope.** Session duration is 45 min. Hybrid format. Beginner audience. These constraints are fixed.
5. **Small reviewable pieces first** — outlines before full scripts.
6. **Use `topics.csv` as the curriculum source of truth** — it has technical explanations for every topic.
7. **When building session N materials**, read session N-1 artifacts first to match the style and pick up correctly from where things left off.
8. **Do not create `session-NN-script.md` files.** That format is retired. The at-a-glance script is not a separate artifact.
9. **`demo/index.html` is the live session artifact.** For every technical topic in the session, embed a clickable external link to a good reference page (official docs, a trusted explainer). The facilitator opens these during screen share instead of searching live. Session 1 examples: `react.dev/learn`, `typescriptlang.org/docs/handbook/2/basic-types.html`, `geeksforgeeks.org/nextjs`.
10. **Teaching method for technical topics:** open the actual reference page in browser, share screen, read and discuss with the team. Do not copy-paste long explanations into the HTML — link out instead.

---

## Content types in use

| Type | File | Purpose | Used live? |
|---|---|---|---|
| Demo script (full) | `plan.md` | All talking points, terminal commands, time blocks — background prep | No — prep only |
| **Demo page** | **`demo/index.html`** | **Primary on-screen artifact. Topics + external reference links + activities. No build step, Tailwind via CDN.** | **Yes — screen shared** |
| Participant reference | `cheat-sheet.md` | During + after session; all topics, commands, and quick refs on one page | Given to participants |
| Decision log | `decisions/YYYY-MM-DD-topic.md` | Permanent record of what was decided, why, what was rejected | No |
| Session transcript | `call_transcript.md` | Auto-generated meeting notes — source of truth for what actually happened | No |
| Setup automation | `setup.sh` | One-shot participant machine setup | Participants run it |
| Curriculum spine | `topics.csv` | All topics × sessions × technical definitions | No |
| Progress tracker | `PROGRESS.md` | Session status, artifact checklist, covered/uncovered topic log | No |

> `session-NN-script.md` is a retired format. Do not produce it for new sessions.
