# Session 2 — Script (At a Glance)

> **Legend:** `TALK` = explain | `DEMO` = show live | `TRY` = participants do it | `PAUSE` = stop & check in

---

```
KICKOFF                                                           0:00 – 0:03
─────────────────────────────────────────────────────────────────────────────
→ TALK    Recap S1 (IDE, terminal, React, Tailwind, Git, localhost).
          "Today: finish GitHub Desktop, clone, npm, APIs, MCP."
→ PAUSE   "Did anyone try the async activities?"
```

```
BLOCK 1 — GITHUB DESKTOP                                         0:03 – 0:10
─────────────────────────────────────────────────────────────────────────────
→ DEMO    Install walkthrough
          desktop.github.com → Download → Install → Sign in → Authorise

→ DEMO    Visual diff + commit + push
          Make tiny change in README.md. Switch to GitHub Desktop.
          Point: diff view, changes panel, commit summary field.
          Write commit message → "Commit to main" → "Push to origin"
          Open GitHub.com — confirm commit landed.

→ TALK    "4 steps: change → stage → commit → push.
           Terminal = same steps, no GUI. GH Desktop shows you what's happening."

→ PAUSE   "Anyone confused by the push vs commit difference?"
```

```
BLOCK 2 — CLONE THE REPO (S1 MAKEUP)                            0:10 – 0:15
─────────────────────────────────────────────────────────────────────────────
→ TRY     Everyone follows along:
          1. GitHub Desktop: File → Clone Repository → URL tab
          2. Paste course repo URL → choose local path → Clone
          3. VS Code: File → Open Folder → open cloned folder
          4. Open sessions/session-01/demo/index.html in browser

→ PAUSE   Wait for everyone. Help remote participants. "You just cloned a repo."

→ TRY     In terminal at repo root: ./setup.sh
          Follow GitHub login prompt if prompted.
          Confirm: "sessions/mario-game/ created. npm install done."
```

```
BLOCK 3 — PACKAGE MANAGERS + MARIO GAME                         0:15 – 0:25
─────────────────────────────────────────────────────────────────────────────
→ DEMO    What is npm?
          Open sessions/mario-game/package.json in VS Code.
          Point: dependencies (ships to users), devDependencies (build tools only).
          "npm install reads this, downloads everything into node_modules/.
           That folder has 10,000 files. Never commit it — it's in .gitignore."

→ DEMO    What does npm run dev do?
          Show scripts: { "dev": "vite" }
          "npm run dev → finds 'dev' in scripts → runs 'vite'.
           Vite starts a local server with hot reload."

→ DEMO    Run the game
          Terminal: cd sessions/mario-game && npm run dev
          Browser opens at localhost:5173. Play briefly.
          Edit CharacterSelect.tsx title text → save → browser updates live.
          "Hot reload. Only you can see this. Your personal copy — safe to break."

→ PAUSE   "Open your own package.json — what does the build script run?"
```

```
BLOCK 4 — APIS & REST                                            0:25 – 0:32
─────────────────────────────────────────────────────────────────────────────
→ DEMO    Request/response cycle
          Open DevTools → Network tab.
          Navigate to jsonplaceholder.typicode.com/posts/1
          Click the Network entry → show Headers, then Response (JSON).
          "GET request → server responds with JSON.
           Same exchange when Claude responds: POST to Anthropic → JSON back."

→ TALK    Status codes: 200 OK · 201 Created · 400 Bad req · 401 Unauth ·
          404 Not found · 500 Server error.
          "Red request in DevTools → look at the status code first."

→ TALK    GET vs POST: "GET reads. POST creates. DELETE removes."
```

```
BLOCK 5 — MCP + FIGMA CONNECTION                                 0:32 – 0:39
─────────────────────────────────────────────────────────────────────────────
→ TALK    MCP architecture (draw diagram):
          HOST (Claude Desktop) → MCP Client → [MCP Protocol] → MCP Server
          "Server = Figma, Slack, filesystem, your own tool."
          "Without MCP: only what you paste. With MCP: Claude reads Figma directly."

→ DEMO    Filesystem MCP live
          Claude Desktop already configured. Show tools icon.
          Type: "Read the README.md in my Desktop/AI_education folder."
          Watch Claude read file directly. No copy-paste.

→ TALK    Figma MCP (explain, don't demo yet)
          "Figma MCP connects via the Figma API. Configure once, then ask Claude to
           describe a frame, list components, compare screens. We'll set it up in
           a later session when Figma is the focus."
```

```
WRAP & Q&A                                                       0:39 – 0:42
─────────────────────────────────────────────────────────────────────────────
→ PAUSE   "What clicked? What's still fuzzy?"
→ TALK    Homework:
          - Install Claude Code (link in cheat sheet)
          - Add filesystem MCP to Claude Desktop config
          - Play with the mario game — ask Claude to change something
→ TALK    Preview: Session 3 — How LLMs think, prompting strategies, Cursor, v0.dev
```

---

## If running behind

- Block 1: Skip the install walkthrough if everyone already has GitHub Desktop → save 2 min
- Block 4: Cut status codes to one sentence → save 1 min
- Block 5: Skip the live filesystem MCP demo, describe it only → save 2 min

## If running ahead

- Show a curl command from terminal: `curl https://jsonplaceholder.typicode.com/posts/1 | python3 -m json.tool`
- Open GitHub Desktop history view — show the full commit graph

---

> Full demo script with all talking points: `plan.md`
