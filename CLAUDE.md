# AI Education — Team workshops (design & product)

## Purpose

Run a **series of workshops** for designers and product people on **using AI in product management and design**. Sessions should connect concepts to **how code is structured and how tools actually work**, not only high-level theory.

## Outcomes (end of the course)

Participants should:

- Feel **empowered and excited** to use AI in daily work.
- Be comfortable with **IDEs** and **Claude Code** for writing **PRDs**, **design docs**, and similar artifacts.
- Be comfortable using **Claude with Figma** via **MCP**.
- Be able to **run a local development environment** on their own machines.

## Source material in this folder

| File | Role |
| --- | --- |
| `topics.csv` | Full topic list by category and session (curriculum spine). |
| `First_session.md` | Deep dive for **Session 1**: IDE & Markdown, terminal, React/Next/TS/Python, Tailwind, localhost, versioning, Git, GitHub Desktop, APIs/REST, MCP, plus activities (GitHub Page, folder structure with `CLAUDE.md` + `context.md`, clone a repo). |

## How you should work on this project

1. **Do not produce everything in one shot.** Prefer a short discovery phase first.
2. **Ask clarifying questions** until constraints, audience, and success criteria are clear.
3. **Propose** session structures, content types (demos, walkthroughs, discussion blocks), and **timeboxing** before locking a plan.
4. **Agree on a teaching plan** (objectives per block, live demo vs hands-on vs discussion).
5. **Draft skill files or small artifacts** (e.g. per-topic or per-session helpers) for **human review** before expanding into full slide decks, long docs, or large repo scaffolding.
6. When listing external resources (sites, repos, decks), favor **accurate links and short annotations** over long copy-paste dumps.

## Content types to consider

- Live demos and **walkthroughs** (IDE, terminal, localhost, GitHub Desktop, MCP in Figma).
- **Discussion prompts** and time for Q&A.
- **Hands-on activities** aligned with `First_session.md` where applicable.
- Optional: links to official docs, known-good tutorials, and internal examples the team already trusts.

## Tone and audience

- Primary audience: **designers and PMs** moving toward technical collaboration; explain jargon when it first appears.
- Prefer **clarity and scaffolding** over depth-first rabbit holes unless the plan explicitly calls for depth.

## Project tracking layout (for you, Claude)

**Suggest and implement** a folder structure that fits this repo and makes it easy for **AI** to see **decisions**, **assets produced**, and **progress** at a glance. The structure should be:

- **Discoverable**: a small number of top-level buckets (or a root index file) so a quick tree read or search surfaces “where things live.”
- **Decision-friendly**: a dedicated place for dated or titled decision notes (what was chosen, why, what was rejected) so context does not live only in chat history.
- **Asset-friendly**: separate deliverables (slides, exports, demo scripts, skill files, links lists) from planning drafts when volume grows; use consistent naming (`session-01-...`, `YYYY-MM-DD-...`, etc.) where helpful.
- **Progress-friendly**: a single lightweight **status** view (e.g. one markdown table or checklist file) updated as sessions or artifacts move from planned → drafted → reviewed → done.

When the project is still small, prefer **minimal folders** plus one `PROGRESS.md` (or similar) over deep nesting. As output grows, **refine** the layout and move files rather than letting the root become a flat dump. If you add new conventions, **document them in one line** at the top of the index or progress file so the next session picks them up immediately.