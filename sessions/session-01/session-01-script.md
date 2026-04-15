# Session 1 — Script (At a Glance)

> **Legend:** `TALK` = explain | `DEMO` = show live | `TRY` = participants do it | `PAUSE` = stop & check in

---

```
KICKOFF                                                           0:00 – 0:03
─────────────────────────────────────────────────────────────────────────────
→ TALK    Why this series. What they'll be able to do after these sessions.
→ DEMO    Show index.html in browser. "We built this today. You'll clone it."
```

```
BLOCK 1 — THE TOOLBELT                                           0:03 – 0:13
─────────────────────────────────────────────────────────────────────────────
→ DEMO    IDE & Markdown
          Open VS Code. Show file tree. Open CLAUDE.md + context.md.
          "These two files give Claude context about your project."

→ DEMO    Terminal
          Type: ls → cd sessions/session-01/demo → ls
          "No clicking. Just commands."

→ PAUSE   "Any questions on the terminal?"

→ DEMO    Local Environment
          Point to index.html already open in browser.
          Point to URL bar. "localhost = your machine. Only you see this."
```

```
BLOCK 2 — THE STACK                                              0:13 – 0:21
─────────────────────────────────────────────────────────────────────────────
→ TALK    React / Next.js / TypeScript
          "React = Figma components, but in code.
           Next.js adds routing. TypeScript = safer AI output."
          No hands-on — too complex. Conceptual only.
          https://react.dev/learn
          https://www.typescriptlang.org/docs/handbook/2/basic-types.html 
          https://www.geeksforgeeks.org/nextjs/next-js-introduction/

→ DEMO    Tailwind CSS
          Point to a card in index.html source. Show classes.
          "p-5 rounded-xl flex gap-4 — same logic as Figma Auto Layout."
```

```
BLOCK 3 — VERSION CONTROL                                        0:21 – 0:29
─────────────────────────────────────────────────────────────────────────────
→ TALK    Versioning
          "Figma version history — but for code. Nothing deleted.
           Branches = parallel versions. Experiment safely."
           https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control 

→ DEMO    Git Basics
          Terminal: git status → git add . → git commit -m "session 1"
          "4 commands = 90% of your Git usage."

→ DEMO    GitHub Desktop
          Switch to the app. Show visual diff, commit history.

→ PAUSE   "Who'd use this vs the terminal? When would you switch?"
```

```
BLOCK 4 — CONNECTIONS                                            0:29 – 0:37
─────────────────────────────────────────────────────────────────────────────
→ TALK    APIs & REST
          Waiter analogy: GET fetches, POST creates.
          Show what JSON looks like. "Every tool you use has an API."

→ DEMO    (optional) Browser DevTools → Network tab. Show a real request.

→ TALK    MCP Protocol
          "Claude's plugin system. Connects it to Figma, files, Slack."
→ DEMO    (if configured) Claude reading a local file directly.
```

```
BLOCK 5 — ACTIVITY: CLONE THE REPO                              0:37 – 0:42
─────────────────────────────────────────────────────────────────────────────
→ TRY     Everyone follows along:
          1. Open GitHub Desktop
          2. File → Clone Repository → paste repo URL
          3. Open folder in VS Code
          4. Open index.html in browser

→ PAUSE   Wait for stragglers. Help remote participants first.
          "You just ran a local environment. That's the full dev loop."
```

```
WRAP & Q&A                                                       0:42 – 0:45
─────────────────────────────────────────────────────────────────────────────
→ PAUSE   "What surprised you? What's still fuzzy?"
→ TALK    Homework: activities 1 & 2 (GitHub page + folder structure)
          Cheat sheet: sessions/session-01/cheat-sheet.md
          Preview: Session 2 — How LLMs think, Claude Code, Cursor
```

---

## If running behind

- Cut DevTools demo in Block 4 → saves ~2 min
- Cut TypeScript explanation in Block 2 to one sentence → saves ~1 min

## If running ahead

- Show Figma open in VS Code via MCP (if configured)
- Open browser DevTools and walk through a real API call live

---

> Full demo script with talking points: `plan.md`
