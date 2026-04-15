# Session 1 — Demo Script

**Date:** Friday, April 17, 2026 **Duration:** 45 minutes **Format:** Hybrid **Audience:** 5 designers/PMs, beginner level

---

## Pre-session checklist

- [ ] VS Code open with this repo

- [ ] Terminal open (inside VS Code or separate)

- [ ] GitHub Desktop open

- [ ] `sessions/session-01/demo/index.html` open in browser

- [ ] Screen share active for remote participants

- [ ] Pre-session message sent (install VS Code + GitHub Desktop, create GitHub account)

---

## Block 1 — Kickoff (3 min)

**Say:**

> "We're running 5 sessions to help you get comfortable using AI in daily work — writing PRDs, design docs, and eventually running code on your own machines. This isn't about becoming an engineer. It's about removing the mystery so you can work better with AI and with the dev team."

**Show:** The `index.html` page in the browser.

> "This is what we built to host this session — a simple HTML file styled with Tailwind CSS. You'll clone it today."

---

## Block 2 — The Toolbelt (10 min)

### IDE & Markdown (3 min)

**Show:** VS Code with this repo open.

- Point out the file tree (left sidebar)
- Open `CLAUDE.md` → "This tells Claude what the project is about"
- Open `sessions/session-01/demo/context.md` → "This is your notes file, for humans"
- Point to the integrated terminal at the bottom

**Say:**

> "An IDE is a smart text editor. VS Code understands code, connects to AI, and has a terminal built in. Markdown files (.md) are plain text with light formatting — asterisks for bold, hashes for headings. AI reads these natively."

### Terminal (3 min)

**Type in terminal:**

```
ls
cd sessions/session-01/demo
ls
```

**Say:**

> "The terminal lets you talk to your computer without clicking. `ls` lists files. `cd` moves into a folder. `cd ..` goes back up. Six commands cover most of what you'll need day-to-day."

### Local Environment & Localhost (4 min)

**Show:** `index.html` already open in browser. Point to the URL bar.

**Say:**

> "Localhost means your machine. This page lives on your computer — only you can see it. When you deploy to GitHub Pages or Vercel, the world can see it. A local environment is your private development preview before you ship."

---

## Block 3 — The Stack (8 min)

### React / Next.js / TypeScript (4 min)

**Say:**

> "React builds UIs from small, reusable pieces called components. Think Figma components — but in code. Next.js adds routing and server features on top. TypeScript adds type-checking so AI generates safer, more predictable code."

**Key analogy:** Figma component = React component

### Tailwind CSS (4 min)

**Show:** Point to the `index.html` source. Show a card element:

```html
<div class="bg-navy-700 border border-white/10 rounded-xl p-5">
```

**Say:**

> "Tailwind is like writing Figma's Auto Layout constraints directly in HTML. `p-5` is padding. `rounded-xl` is corner radius. `flex gap-4` is Auto Layout with a 16px gap. Designers often pick this up faster than engineers."

---

## Block 4 — Version Control (8 min)

### Versioning (2 min)

**Say:**

> "Every commit is a saved state of the project. Nothing is truly deleted — you can always go back. Branches let you try things without breaking the main version. It's Figma's version history, but for code."

### Git Basics (3 min)

**Type in terminal:**

```
git status
git add .
git commit -m "add session 1 demo page"
git push
```

**Say:**

> "Four commands, 90% of Git. Status = what changed. Add = stage it. Commit = save a snapshot with a message. Push = upload to GitHub."

### GitHub Desktop (3 min)

**Show:** GitHub Desktop app. Point to the visual diff.

**Say:**

> "GitHub Desktop gives you all of Git without the terminal. Every change is highlighted, you write a commit message, and push — all from a UI that looks closer to a design tool."

---

## Block 5 — Connections (8 min)

### APIs & REST (4 min)

**Say:**

> "An API is how apps talk to each other. When Claude responds to your message, your browser sent a POST request to Anthropic's servers. The server sent back JSON — structured text that code can read. Every tool you use — Figma, Slack, GotPhoto — has an API."

**Optional:** Open browser DevTools → Network tab. Show a real request/response.

### MCP Protocol (4 min)

**Say:**

> "MCP is Claude's plugin system. It connects Claude to local files, Figma, Slack, databases — anything with an MCP server. Write it once and Claude can read your design files directly without copy-pasting. We'll use this with Figma in Session 2."

---

## Block 6 — Activity: Clone the Repo (5 min)

**Walk through together:**

1. Open GitHub Desktop
2. File → Clone Repository → paste this repo URL
3. Open the cloned folder in VS Code
4. Open `sessions/session-01/demo/index.html` in browser

**Say:**

> "You just cloned a repo, opened it locally, and viewed it in your browser. That's the full dev loop — download, edit, preview."

---

## Block 7 — Q&A / Wrap (3 min)

**Ask:** "What surprised you? What's still unclear?"

**Remind:**

- Activities 1 & 2 are async homework (GitHub Page + folder structure)
- Cheat sheet lives at `sessions/session-01/cheat-sheet.md`
- Session 2: How LLMs think, Claude Code, Cursor, prompting strategies

---

## Facilitator notes

- **Hybrid:** Check remote participants can see screen before each demo block. Call them by name during activities.
- **If behind:** Cut the TypeScript explanation in Block 3. Skip the network tab demo in APIs.
- **If ahead:** Show Figma open in VS Code via MCP (if configured).
- **Terminal demos:** Speak slowly. People who've never typed commands need extra time to follow.