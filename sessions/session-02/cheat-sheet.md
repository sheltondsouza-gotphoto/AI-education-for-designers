# Session 2 Cheat Sheet

> AI Workshop Series · GotPhoto · 2026

---

## Topics at a Glance

| Topic | What it is | Remember |
|---|---|---|
| **GitHub Desktop** | Visual Git UI | Install → sign in → diff → commit → push |
| **Clone** | Download a remote repo to your machine | GitHub Desktop: File → Clone Repository |
| **git push** | Upload local commits to GitHub | After committing, hit "Push to origin" |
| **Package Managers** | Tools that install code libraries | `npm`, `bun`, `pip` |
| **`npm run dev`** | Runs the `dev` script in `package.json` | Starts your local dev server (Vite) |
| **APIs & REST** | How apps exchange data | GET reads · POST creates · response is JSON |
| **MCP** | Claude's plugin architecture | Host → Client → Server |

---

## GitHub Desktop — The Workflow

1. **Make a change** in any file (VS Code, Finder, anywhere)
2. **Open GitHub Desktop** — your file appears under "Changes"
3. **Review the diff** — green = added, red = removed
4. **Write a commit message** in the Summary box at bottom-left
5. Click **Commit to main**
6. Click **Push to origin** (top bar)

### Clone a repo

1. **File → Clone Repository**
2. Select the **URL** tab
3. Paste the repo URL
4. Choose a local path → **Clone**
5. Open the folder in VS Code

---

## Git Commands (Terminal Reference)

| Command | What it does |
|---|---|
| `git status` | What changed locally? |
| `git add .` | Stage all changes |
| `git commit -m "message"` | Save a snapshot |
| `git push` | Upload to GitHub |
| `git pull` | Download latest from GitHub |
| `git branch name` | Create a branch |
| `git checkout name` | Switch to a branch |
| `git log --oneline` | Compact history view |

---

## Package Managers & npm

### What is npm?

npm (Node Package Manager) downloads and manages code libraries for JavaScript projects. Every project has a `package.json` that lists what it needs.

### `package.json` anatomy

```json
{
  "name": "mario-game",
  "scripts": {
    "dev": "vite",           ← what npm run dev runs
    "build": "vite build",   ← compiles for production
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0"       ← runtime code shipped to users
  },
  "devDependencies": {
    "vite": "^4.4.5"         ← build tools, never shipped to users
  }
}
```

### Common commands

| Command | What it does |
|---|---|
| `npm install` | Download all dependencies listed in `package.json` |
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Compile for production → `dist/` folder |
| `npm install package-name` | Add a new dependency |

> `node_modules/` = downloaded libraries. Never edit it. Never commit it (it's in `.gitignore`). Delete and re-run `npm install` to reset it.

---

## APIs & REST

### Anatomy of a request

```
GET   https://api.gotphoto.de/albums/123
 ↑           ↑                  ↑
method    base URL           endpoint
```

### HTTP methods

| Method | Use |
|---|---|
| `GET` | Read / fetch data (no side effects) |
| `POST` | Create new data |
| `PUT` / `PATCH` | Update existing data |
| `DELETE` | Remove data |

### Status codes

| Code | Meaning |
|---|---|
| `200` | OK — success |
| `201` | Created — new resource made |
| `400` | Bad request — your data was wrong |
| `401` | Unauthorised — missing or invalid auth token |
| `404` | Not found |
| `500` | Server error — not your fault |

### JSON — the data format all APIs use

```json
{
  "id": 42,
  "name": "Wedding Album",
  "photos": 87,
  "published": true
}
```

> **DevTools tip:** Chrome → DevTools → Network tab → refresh → click any request → Headers (metadata) + Response (data).

---

## MCP Architecture

```
┌─────────────────────────────────────────┐
│   HOST  (Claude Desktop / Claude Code)  │
│                                         │
│  ┌──────────┐       ┌───────────────┐   │
│  │  Claude  │◄─────►│  MCP Client  │   │
│  │  (LLM)   │       │  (connector) │   │
│  └──────────┘       └──────┬────────┘   │
└─────────────────────────── │ ───────────┘
                              │  MCP protocol
                    ┌─────────▼──────────┐
                    │    MCP Server       │
                    │  Figma · Slack ·    │
                    │  filesystem ·       │
                    │  your own tool      │
                    └────────────────────┘
```

- **Host** — app running Claude (Claude Desktop, Claude Code)
- **Client** — lives inside the host, speaks MCP protocol
- **Server** — small program exposing tools and resources Claude can call

One server can serve many tools. One host can connect to many servers.

---

## Session 2 Activities

| # | Activity | When | Steps |
|---|---|---|---|
| 1 | Clone the course repo | Live — today | GitHub Desktop → File → Clone → open in VS Code |
| 2 | Run setup script | Live — today | Terminal: `./setup.sh` → follow prompts |
| 3 | Run mario game | Live — today | `cd sessions/mario-game && npm run dev` → localhost:5173 |
| 4 | Claude Code + filesystem MCP | Async homework | See steps below |

### Homework: Install Claude Code + filesystem MCP

```bash
# Install Claude Code (requires Node 18+)
npm install -g @anthropic-ai/claude-code

# Launch in any project folder
claude
```

**Add filesystem MCP to Claude Desktop** (`~/.claude/claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/YOUR_NAME/Desktop"
      ]
    }
  }
}
```

Restart Claude Desktop → Claude can now read and write Desktop files.

Full Claude Code docs: `https://docs.anthropic.com/en/docs/claude-code/getting-started`

---

> `sessions/mario-game/` is gitignored — `git pull` will never touch your changes there.
> `sessions/mario-game-starter/` is the tracked template. Never edit the starter directly.

*Next session: How LLMs Think — tokenization, context windows, prompting strategies, Cursor, v0.dev*
