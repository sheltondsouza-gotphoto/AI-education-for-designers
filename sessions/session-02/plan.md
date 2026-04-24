# Session 2 — Plan

**Date:** TBD
**Duration:** 45 minutes
**Format:** Hybrid
**Audience:** 5 designers/PMs, beginner level
**Theme:** Dev Workflow — GitHub Desktop, Clone, Package Managers, APIs, MCP

---

## Objectives

By end of session participants can:

1. Install GitHub Desktop, create a branch, make a commit, and push to GitHub
2. Clone the course repo properly via GitHub Desktop (completing the skipped S1 activity)
3. Explain what npm is and what `npm run dev` actually does
4. Run the mario game locally at `localhost:5173`
5. Describe the request/response cycle of a REST API and read a Network tab
6. Explain MCP host/client/server architecture and how Claude connects to Figma

---

## Blocks

| Block | Topic | Format | Time |
|---|---|---|---|
| 1 | Kickoff + S1 recap | Discussion | 3 min |
| 2 | GitHub Desktop — install, diff, push | Demo | 7 min |
| 3 | Clone the Repo activity | Hands-on | 5 min |
| 4 | Package managers + mario game | Demo | 10 min |
| 5 | APIs & REST | Demo + DevTools | 7 min |
| 6 | MCP + Figma connection | Whiteboard / walkthrough | 7 min |
| 7 | Q&A + wrap | Discussion | 3 min |

---

## Pre-session checklist

- [ ] GitHub Desktop open with this repo, logged in
- [ ] mario game running: `cd sessions/mario-game && npm run dev` → confirm at localhost:5173
- [ ] `sessions/mario-game/package.json` open in VS Code
- [ ] Browser DevTools open on Network tab
- [ ] Claude Desktop open with filesystem MCP configured (for MCP demo)
- [ ] Screen share active for remote participants
- [ ] Pre-session message sent: "Install GitHub Desktop and sign in before Friday"

---

## Block 1 — Kickoff (3 min)

**Say:**

> "Last session we covered a lot of ground fast — IDE, terminal, React, Tailwind, Git basics, localhost. We ran out of time before we got to GitHub Desktop, clone, APIs, and MCP. Today we finish those and get you all running a real app on your own machine."

**Ask:** "Did anyone try the async activities — GitHub Page or folder structure?"

---

## Block 2 — GitHub Desktop (7 min)

### Install walkthrough (2 min)

**Show:** `desktop.github.com` in browser.

**Say:**

> "GitHub Desktop is Git with a visual interface. You download it, sign in with your GitHub account, and it gives you a UI that shows exactly what changed, in which file, on which line. You don't need to remember any terminal commands for the day-to-day loop."

Walk through: Download → Install → Sign in → Authorise in browser → GitHub Desktop opens.

### Visual diff + commit + push (5 min)

**Show:** GitHub Desktop with this repo open. Point out the sidebar — repositories, current branch, recent commits.

**Make a tiny change:** Open `README.md` in VS Code, add a space or a blank line. Switch back to GitHub Desktop.

**Point out:**
- The file appears in "Changes" on the left
- The right panel shows the diff — red = removed, green = added
- The commit summary field at the bottom

**Say:**

> "This is the diff view — every change highlighted line by line. This is what your engineers see when they review your work. Write a commit message in the summary box — then hit 'Commit to main'. That saves the snapshot locally. Hit 'Push to origin' — that uploads it to GitHub."

**Do it live:** Write `"test commit"`, commit, push. Show the repo on GitHub to confirm the commit landed.

**Say:**

> "Four steps: make a change → stage → commit → push. GitHub Desktop makes all four visible. The terminal version is the same four steps: `git add`, `git commit`, `git push` — GitHub Desktop just shows you what's happening."

---

## Block 3 — Clone the Repo Activity (5 min)

**This is the activity from Session 1 that we skipped.**

**Walk through together:**

1. In GitHub Desktop: **File → Clone Repository**
2. Select "URL" tab → paste the course repo URL
3. Choose a local path → **Clone**
4. GitHub Desktop asks "How are you planning to use this fork?" → select "For my own purposes"
5. In VS Code: **File → Open Folder** → select the cloned folder
6. Open `sessions/session-01/demo/index.html` in browser

**Say:**

> "You now have a local copy of the entire course repo. Any time Shelton pushes an update, you pull it in GitHub Desktop and your local copy is up to date. This is the full dev loop: clone → edit → commit → push. Or in your case: clone → pull when something changes."

**Then:**

7. Open terminal in the repo root
8. Run `./setup.sh`
9. Follow the GitHub login prompt (if not already authenticated)

**Say:**

> "This script does three things: copies the mario game starter into your own personal folder, runs `npm install` to download its dependencies, and sets up the GitHub CLI. Your mario game is now ready."

---

## Block 4 — Package Managers + Mario Game (10 min)

### What is a package manager? (3 min)

**Show:** `sessions/mario-game/package.json` in VS Code.

**Say:**

> "A package manager is a tool that installs and manages code other people have written. npm — Node Package Manager — is the one used for JavaScript projects. When you run `npm install`, it reads this file, downloads everything listed under dependencies and devDependencies, and puts it in a folder called `node_modules`. You never edit that folder. You never commit it. It can have 10,000 files — it's in `.gitignore`."

**Point to the two sections:**

- `dependencies` → shipped to users (React, etc.)
- `devDependencies` → build tools only, never reach users (Vite, TypeScript, Tailwind)

### What does `npm run dev` do? (3 min)

**Show:** The `scripts` section in `package.json`:

```json
"scripts": {
  "dev": "vite"
}
```

**Say:**

> "When you type `npm run dev`, npm looks in this file, finds the `dev` entry, and runs whatever's there. In this project it's `vite`. Vite is a build tool that starts a local server with hot reload — save a file and the browser updates instantly without refreshing. `npm run build` compiles everything into optimised files in a `dist/` folder for production."

### Run the mario game (4 min)

**Type in terminal:**

```bash
cd sessions/mario-game
npm run dev
```

**Show:** Browser opens at `localhost:5173`. Play for 10 seconds.

**Then:** Open `src/components/CharacterSelect.tsx` in VS Code. Change the title text. Save. Watch the browser update live.

**Say:**

> "This is hot reload — Vite recompiles only the changed file and updates the browser instantly. This is your personal copy — it's gitignored from the course repo. You can break it, experiment, ask Claude to add features. Nobody else can see it."

---

## Block 5 — APIs & REST (7 min)

### The request/response cycle (4 min)

**Open:** Chrome DevTools → Network tab.

**Navigate to:** `https://jsonplaceholder.typicode.com/posts/1` in browser.

**Show:** The Network tab entry. Click it — show Headers, then Response.

**Say:**

> "Every time you visit a URL, your browser sends a GET request. The server responds with data — in this case JSON. Headers carry metadata: content type, status code, auth token. The body is the actual data. This exact exchange is what happens when Claude processes your message: your app sends a POST to Anthropic's API with your text, gets JSON back."

**Point to the JSON response:**

```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere...",
  "body": "quia et suscipit..."
}
```

**Say:**

> "JSON is just structured text. Key-value pairs. This is the language that every API on the internet speaks — Figma, Slack, GotPhoto, Claude. Once you can read JSON you can understand any API."

### Status codes (2 min)

**Say:**

> "Status codes are the server's mood. 200 = all good. 201 = thing was created. 400 = you sent bad data. 401 = you're not logged in. 404 = doesn't exist. 500 = server crashed. If you see a red request in DevTools, the status code tells you immediately what went wrong."

### GET vs POST (1 min)

**Say:**

> "GET fetches data without changing anything. POST sends data to create or update something. When you load a page — GET. When you submit a form or send a message — POST. DELETE removes something. That's 90% of what you'll see."

---

## Block 6 — MCP + Figma Connection (7 min)

### Host / Client / Server (4 min)

**Draw or show:**

```
HOST (Claude Desktop / Claude Code)
  └── MCP Client ──── [MCP Protocol] ──── MCP Server
                                           (Figma / Slack / filesystem / your tool)
```

**Say:**

> "MCP — Model Context Protocol — is Claude's plugin system. The host is the app running Claude: Claude Desktop or Claude Code. Inside the host is a client that knows how to speak MCP. The server is a small program that exposes tools — 'here are the files I can read', 'here are the actions I can take'. Claude calls those tools at runtime. One host can connect to many servers at once."

**Say:**

> "Without MCP, Claude only knows what you paste into the chat. With MCP, Claude can read your Figma file directly, search your codebase, write to your file system, send Slack messages. The protocol is standardised — build a server once and any MCP-compatible host can use it."

### Figma connection demo (3 min)

**Show:** Claude Desktop with the filesystem MCP already configured. Open a conversation.

**Say:**

> "I've already set up the filesystem MCP — it's a JSON config file that tells Claude Desktop: 'when you start, also launch this small server that can read files on my Desktop'. You can see the tools icon in the UI — that's Claude telling you what it can do."

**Type in Claude:**

> "Read the README.md in my Desktop/AI_education folder and tell me what the first session covered."

**Show:** Claude reading the file directly without you copying anything.

**Say:**

> "The Figma MCP works the same way. A Figma MCP server connects to your Figma account via the Figma API. Once configured, you can ask Claude to read your design file, describe a specific frame, list all components — without screenshotting or copy-pasting. That's what we'll set up in a later session."

---

## Block 7 — Q&A / Wrap (3 min)

**Ask:** "What clicked today? What's still fuzzy?"

**Homework:**

- Install Claude Code: `npm install -g @anthropic-ai/claude-code` (docs: `docs.anthropic.com/en/docs/claude-code/getting-started`)
- Add the filesystem MCP to Claude Desktop config (instructions in cheat sheet)
- Play with the mario game — ask Claude to change something

**Remind:**

- Your mario game (`sessions/mario-game/`) is yours — gitignored, safe to break
- Cheat sheet at `sessions/session-02/cheat-sheet.md`
- Session 3: How LLMs think — tokenization, context windows, prompting strategies, Cursor, v0.dev

---

## Facilitator notes

- **Block 2:** If GitHub Desktop isn't installed on participant machines, walk through install live — it's 3 min and shows that installing tools is normal.
- **Block 3:** Clone activity is the one thing everyone must complete today — it unlocks the mario game. Pause and wait for stragglers before moving on.
- **Block 4:** The mario game hot reload demo is the most concrete moment — make sure it runs before the session.
- **Block 5:** Call out the exact parallel: "when Claude responds to your message, your browser sent a POST to Anthropic's API". Makes REST concrete.
- **Block 6:** The Figma MCP explanation is the payoff for explaining MCP architecture — name Figma early and return to it.
- **If behind:** Cut Block 5 status codes to 30 seconds. Skip the `CharacterSelect.tsx` live edit in Block 4.
- **If ahead:** Show a live API call from terminal: `curl https://jsonplaceholder.typicode.com/posts/1 | python3 -m json.tool`
- **Remote participants:** Confirm screen share shows DevTools Network tab clearly before Block 5.
