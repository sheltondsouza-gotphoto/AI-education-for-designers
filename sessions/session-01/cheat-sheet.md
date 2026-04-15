# Session 1 Cheat Sheet

> AI Workshop Series · GotPhoto · April 2026

---

## Topics at a Glance

| Topic | What it is | Remember |
|---|---|---|
| **IDE** | Smart code editor (VS Code) | Your workspace |
| **Markdown** | Plain text with light formatting (.md) | AI reads natively |
| **Terminal** | Text interface to your computer | Faster than clicking |
| **React** | UI built from reusable components | Like Figma components |
| **Next.js** | React + routing + server features | Full-stack framework |
| **TypeScript** | JavaScript with type safety | Safer AI code |
| **Tailwind CSS** | Design via utility classes in HTML | `p-4 rounded-xl` |
| **Localhost** | Your private preview server | `localhost:3000` |
| **Versioning** | Full history of your project | Time machine for code |
| **Git** | Version control engine | Commit / Push |
| **GitHub Desktop** | Git with a visual interface | No terminal needed |
| **APIs & REST** | How apps exchange data | GET / POST / JSON |
| **MCP** | Claude's plugin / connection system | Claude + Figma |

---

## Terminal Commands

### Navigation

| Command | What it does |
|---|---|
| `cd folder` | Enter a folder |
| `cd ..` | Go up one level |
| `ls` | List files in current folder |
| `pwd` | Show current path |
| `mkdir name` | Create new folder |

### Git

| Command | What it does |
|---|---|
| `git status` | What changed? |
| `git add .` | Stage all changes |
| `git commit -m "message"` | Save a snapshot |
| `git push` | Upload to GitHub |
| `git pull` | Download latest from GitHub |
| `git clone URL` | Download a repo |

---

## Tailwind Quick Reference

```html
<!-- Layout -->
<div class="flex gap-4 items-center">     <!-- flexbox row, 16px gap -->
<div class="grid grid-cols-3 gap-4">      <!-- 3-column grid -->

<!-- Spacing -->
<div class="p-4">                         <!-- 16px padding all sides -->
<div class="px-6 py-3">                  <!-- 24px horizontal, 12px vertical -->
<div class="mt-8 mb-4">                  <!-- margin top 32px, bottom 16px -->

<!-- Typography -->
<p class="text-sm text-slate-400">       <!-- small grey text -->
<h1 class="text-4xl font-bold">          <!-- large heading -->

<!-- Visual -->
<div class="bg-white rounded-xl shadow"> <!-- card style -->
<div class="border border-gray-200">     <!-- subtle border -->
```

---

## Key Concepts

**Localhost:** Your machine acts as a server. URL is `localhost:PORT`. Only visible to you until you deploy to a service like GitHub Pages or Vercel.

**API (REST):** A set of URLs you call to get or send data.
- `GET /photos` — fetch a list of photos
- `POST /photos` — upload a new photo
- Response is usually **JSON**

**JSON:** The data format APIs use.
```json
{
  "id": 1,
  "name": "Wedding Album",
  "published": true
}
```

**Branch:** A parallel version of your project. Main stays safe while you experiment. Merge into main when ready.

**MCP:** Model Context Protocol. Lets Claude connect to tools (Figma, local files, Slack) via a standard protocol. Write an MCP server once → Claude can read your data directly.

---

## Activities

| # | Activity | When | Steps |
|---|---|---|---|
| 1 | Create GitHub Page | Async | Create `username.github.io` repo → add `index.html` → enable Pages in Settings |
| 2 | Folder Structure | Async | New folder in VS Code → `CLAUDE.md` (describe project) → `context.md` (your notes) |
| 3 | Clone This Repo | Live — today | GitHub Desktop → File → Clone → open in VS Code → open `index.html` in browser |

---

*Next session: How LLMs Think · Claude Code · Cursor · v0.dev · Prompting Strategies*
