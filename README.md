# GotPhoto AI Workshop

6-session workshop series for designers and PMs on using AI in product management and design.

---

## Get the repo on your machine

1. Open **GitHub Desktop**
2. **File → Clone Repository** → paste this repo URL
3. Open the cloned folder in **VS Code**

---

## Set up your mario game

The mario game is your personal playground. It lives in `sessions/mario-game/` — gitignored from the course repo so your changes are yours alone.

Run the setup script once from the repo root:

```bash
./setup.sh
```

This will:
- Copy the starter game into `sessions/mario-game/` (your personal copy)
- Install all dependencies (`npm install`)
- Set up the GitHub CLI if you don't have it

Then start the game:

```bash
cd sessions/mario-game
npm run dev
```

Open `http://localhost:5173` in your browser. Use arrow keys or WASD to move, space to jump. Collect all 10 coins to win.

---

## Improve the game with Claude

The goal isn't just to play the game — it's to **use AI to change it**. Here's the workflow:

### Step 1 — Define what you want

Before asking Claude to write any code, write a spec. Open Claude (claude.ai or Claude Desktop) and describe your idea in plain language. Ask Claude to turn it into a short spec. Example prompt:

> "I want to add an enemy that walks back and forth on the platform. If the player touches it, they lose a life. They have 3 lives total. Help me write a short spec for this feature."

Claude will ask clarifying questions and produce a spec like:

```
Feature: Walking enemy + lives system
- Enemy spawns on the middle platform, walks left and right, reverses at edges
- Player starts with 3 lives (shown as hearts in the top-right corner)
- Collision with enemy deducts 1 life and resets player position
- 0 lives = game over screen with a restart button
```

Review the spec. Edit it until it describes exactly what you want. Save it as a `.md` file inside `sessions/mario-game/` — for example `spec-enemy.md`.

### Step 2 — Ask Claude to build it

Open **Claude Code** in your terminal from the mario-game folder:

```bash
cd sessions/mario-game
claude
```

Then tell Claude to execute the spec:

> "Read spec-enemy.md and implement it. The game is built with React, TypeScript, and a canvas in Game.tsx. Don't change CharacterSelect.tsx."

Claude will read the spec, find the right files, and make the changes. You'll see the browser update live via hot reload.

### Step 3 — Play, iterate, repeat

Test it. If something isn't right, describe the problem to Claude:

> "The enemy walks off the platform edge instead of reversing. Fix it."

Or add a new idea:

> "Now add a second enemy on the top platform that moves faster."

Each improvement follows the same loop: **describe → spec → build → test**.

---

## Spec tips

- **Be specific about what you can see.** "A red square that moves" is better than "an enemy".
- **Describe the rule, not the code.** "When the player touches the enemy, reset to start position" — not "modify the collision detection function".
- **One feature at a time.** Small specs are easier for Claude to implement correctly and easier for you to test.
- **Save your specs.** They're your design documentation. Future you will thank you.

---

## Repo layout

```
sessions/
  session-01/       ← Session 1 materials (plan, cheat sheet, demo page)
  session-02/       ← Session 2 materials
  mario-game/       ← YOUR personal game copy (gitignored — safe to break)
  mario-game-starter/ ← Clean template (don't edit directly)
decisions/          ← Why things were built the way they were
topics.csv          ← Full curriculum across all 6 sessions
setup.sh            ← First-time setup script
```

---

## Sessions

| # | Theme | Date |
|---|---|---|
| 1 | Intro — IDE, Terminal, Git, localhost | April 17, 2026 |
| 2 | Dev Workflow — GitHub Desktop, npm, APIs, MCP | TBD |
| 3 | Deeper into LLMs — Prompting, Cursor, v0.dev | TBD |
| 4 | Using Other People's Code — Packages, env vars, webhooks | TBD |
| 5 | Design to Implementation — Components, tokens, specs | TBD |
| 6 | Building with LLMs — RAG, Supabase, Vercel, n8n | TBD |
