# Mario Game

A simple side-scrolling platform game built with React, TypeScript, and Tailwind CSS.
Used in the GotPhoto AI Workshop — Session 1 — to demonstrate how a modern web app is structured.

## How to run

```bash
npm install
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## Project structure

```
mario-game/
│
├── index.html                  ← HTML shell — the single page the browser loads
│
├── public/
│   └── characters/             ← Static assets (SVG character images)
│       ├── mario-1.svg         ← Mario  (red hat)
│       ├── mario-2.svg         ← Luigi  (green hat)
│       ├── mario-3.svg         ← Wario  (yellow hat)
│       ├── mario-4.svg         ← Toad   (blue mushroom cap)
│       └── mario-5.svg         ← Waluigi (purple hat)
│
├── src/
│   ├── main.tsx                ← Entry point — mounts React into index.html
│   ├── App.tsx                 ← Root component — controls which screen shows
│   ├── index.css               ← Tailwind imports
│   ├── types.ts                ← Shared TypeScript types (Character, Screen)
│   │
│   └── components/
│       ├── CharacterSelect.tsx ← Screen 1: pick one of 5 characters
│       └── Game.tsx            ← Screen 2: the canvas game
│
├── package.json                ← Dependencies and scripts
├── vite.config.ts              ← Build tool config (Vite)
├── tailwind.config.js          ← Tailwind CSS config
├── tsconfig.json               ← TypeScript compiler config
└── postcss.config.js           ← PostCSS config (required by Tailwind)
```

---

## How it works

### Screens
`App.tsx` tracks one of two screens: `'select'` or `'playing'`. When you pick a character, it switches to the game.

### Character selection (`CharacterSelect.tsx`)
- Renders 5 character cards from a hardcoded array
- Tracks which is selected with `useState`
- Passes the chosen character up to `App` via a callback prop (`onSelect`)

### The game (`Game.tsx`)
- Draws everything on an HTML `<canvas>` element
- Uses `requestAnimationFrame` inside a `useEffect` for the game loop
- Stores fast-changing game state (player position, coins) in `useRef` — not `useState` — so updates don't trigger re-renders every frame
- Uses `useState` only for score, win, and game-over (things the UI needs to react to)
- Keyboard input tracked via a `Set<string>` ref — multiple keys work simultaneously

### TypeScript concepts shown
- `interface` for typed objects (`Character`, `Player`, `Coin`)
- `useState<Type>` for typed React state
- `useRef<Type>` for mutable values that don't trigger re-renders
- Function props typed with an `interface Props`

### Tailwind concepts shown
- Utility classes for layout (`flex`, `gap-4`, `items-center`)
- Conditional classes via template literals
- Responsive sizing (`w-10`, `h-10`, `rounded-xl`)

---

## Controls

| Key | Action |
|---|---|
| `←` / `A` | Move left |
| `→` / `D` | Move right |
| `Space` / `↑` / `W` | Jump |

Collect all 10 coins to win. Fall off the edge — game over.
