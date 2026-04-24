import { useEffect, useRef, useState } from 'react'
import { Character } from '../types'

// ── Canvas size ───────────────────────────────────────────────────
const W = 800
const H = 400

// ── Physics constants ─────────────────────────────────────────────
const GRAVITY    = 0.55
const JUMP_FORCE = -12
const MOVE_SPEED = 4.5

// ── Types ─────────────────────────────────────────────────────────
interface Player {
  x: number; y: number
  vx: number; vy: number
  w: number; h: number
  onGround: boolean
  facing: 'left' | 'right'
}

interface Platform {
  x: number; y: number; w: number; h: number
  kind: 'ground' | 'brick'
}

interface Coin {
  x: number; y: number
  collected: boolean
}

// ── Level layout ──────────────────────────────────────────────────
const PLATFORMS: Platform[] = [
  { x: 0,   y: H - 32, w: W,   h: 32, kind: 'ground' },
  { x: 140, y: H - 130, w: 110, h: 16, kind: 'brick'  },
  { x: 360, y: H - 200, w: 110, h: 16, kind: 'brick'  },
  { x: 570, y: H - 150, w: 110, h: 16, kind: 'brick'  },
]

const INIT_COINS: Omit<Coin, 'collected'>[] = [
  { x: 165, y: H - 158 }, { x: 200, y: H - 158 }, { x: 235, y: H - 158 },
  { x: 385, y: H - 228 }, { x: 415, y: H - 228 }, { x: 445, y: H - 228 },
  { x: 595, y: H - 178 }, { x: 625, y: H - 178 },
  { x: 80,  y: H - 60  }, { x: 720, y: H - 60  },
]

const TOTAL_COINS = INIT_COINS.length

// ── Helpers ───────────────────────────────────────────────────────
function freshPlayer(): Player {
  return { x: 50, y: H - 80, vx: 0, vy: 0, w: 36, h: 36, onGround: false, facing: 'right' }
}

function freshCoins(): Coin[] {
  return INIT_COINS.map(c => ({ ...c, collected: false }))
}

function drawCloud(ctx: CanvasRenderingContext2D, x: number, y: number, r: number) {
  ctx.beginPath()
  ctx.arc(x,       y,       r,        0, Math.PI * 2)
  ctx.arc(x + r,   y - r * 0.3, r * 0.7, 0, Math.PI * 2)
  ctx.arc(x + r * 1.6, y,   r * 0.8, 0, Math.PI * 2)
  ctx.fill()
}

// ── Component ─────────────────────────────────────────────────────
interface Props {
  character: Character
  onReset: () => void
}

export default function Game({ character, onReset }: Props) {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const rafRef     = useRef<number>(0)
  const keysRef    = useRef(new Set<string>())
  const playerRef  = useRef<Player>(freshPlayer())
  const coinsRef   = useRef<Coin[]>(freshCoins())
  const imgRef     = useRef<HTMLImageElement | null>(null)

  const [score,    setScore]    = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [win,      setWin]      = useState(false)
  const [gameKey,  setGameKey]  = useState(0)  // increment to restart loop

  // Load character image once
  useEffect(() => {
    const img = new Image()
    img.src = character.image
    img.onload = () => { imgRef.current = img }
  }, [character.image])

  // Game loop — re-runs on restart (gameKey) or character change
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const keys = keysRef.current
    let stopped = false

    const onKeyDown = (e: KeyboardEvent) => {
      if (['ArrowUp','ArrowDown','ArrowLeft','ArrowRight',' '].includes(e.key)) {
        e.preventDefault()
      }
      keys.add(e.key)
    }
    const onKeyUp = (e: KeyboardEvent) => keys.delete(e.key)
    window.addEventListener('keydown', onKeyDown)
    window.addEventListener('keyup',   onKeyUp)

    // ── Update ──────────────────────────────────────────────────
    function update(): 'ok' | 'gameover' | 'win' {
      const p     = playerRef.current
      const coins = coinsRef.current

      // Horizontal input
      if      (keys.has('ArrowLeft')  || keys.has('a')) { p.vx = -MOVE_SPEED; p.facing = 'left'  }
      else if (keys.has('ArrowRight') || keys.has('d')) { p.vx =  MOVE_SPEED; p.facing = 'right' }
      else p.vx = 0

      // Jump
      if ((keys.has('ArrowUp') || keys.has(' ') || keys.has('w')) && p.onGround) {
        p.vy = JUMP_FORCE
        p.onGround = false
      }

      // Apply physics
      p.vy += GRAVITY
      p.x  += p.vx
      p.y  += p.vy
      p.x   = Math.max(0, Math.min(W - p.w, p.x))
      p.onGround = false

      // Platform collisions (landing from above only)
      for (const plat of PLATFORMS) {
        const xOverlap = p.x + p.w > plat.x && p.x < plat.x + plat.w
        if (!xOverlap) continue

        if (p.vy >= 0) {
          const prevBottom = p.y + p.h - p.vy
          if (prevBottom <= plat.y + 2 && p.y + p.h >= plat.y) {
            p.y        = plat.y - p.h
            p.vy       = 0
            p.onGround = true
          }
        } else {
          // Hit underside of platform
          const prevTop = p.y - p.vy
          if (prevTop >= plat.y + plat.h - 2 && p.y <= plat.y + plat.h) {
            p.y  = plat.y + plat.h
            p.vy = 0
          }
        }
      }

      // Fell off bottom
      if (p.y > H + 80) return 'gameover'

      // Coin collection
      let collected = 0
      for (const coin of coins) {
        if (!coin.collected) {
          const dx = (p.x + p.w / 2) - coin.x
          const dy = (p.y + p.h / 2) - coin.y
          if (Math.hypot(dx, dy) < 22) coin.collected = true
        }
        if (coin.collected) collected++
      }
      setScore(collected)

      return collected === TOTAL_COINS ? 'win' : 'ok'
    }

    // ── Draw ────────────────────────────────────────────────────
    function draw() {
      const p     = playerRef.current
      const coins = coinsRef.current

      // Sky
      ctx.fillStyle = '#5C94FC'
      ctx.fillRect(0, 0, W, H)

      // Clouds
      ctx.fillStyle = 'rgba(255,255,255,0.8)'
      drawCloud(ctx, 80,  60, 36)
      drawCloud(ctx, 340, 45, 28)
      drawCloud(ctx, 620, 65, 32)

      // Platforms
      for (const plat of PLATFORMS) {
        if (plat.kind === 'ground') {
          ctx.fillStyle = '#228B22'
          ctx.fillRect(plat.x, plat.y, plat.w, plat.h)
          ctx.fillStyle = '#6AAF2E'
          ctx.fillRect(plat.x, plat.y, plat.w, 8)
        } else {
          ctx.fillStyle = '#C84B11'
          ctx.fillRect(plat.x, plat.y, plat.w, plat.h)
          ctx.fillStyle = '#9E3900'
          // brick grid lines
          for (let bx = plat.x; bx < plat.x + plat.w; bx += 22) {
            ctx.fillRect(bx, plat.y, 1, plat.h)
          }
          ctx.fillRect(plat.x, plat.y + plat.h / 2, plat.w, 1)
        }
      }

      // Coins
      for (const coin of coins) {
        if (coin.collected) continue
        ctx.fillStyle = '#FFD700'
        ctx.beginPath()
        ctx.arc(coin.x, coin.y, 9, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = '#FFA500'
        ctx.beginPath()
        ctx.arc(coin.x, coin.y, 7, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = 'rgba(255,255,180,0.9)'
        ctx.beginPath()
        ctx.arc(coin.x - 2, coin.y - 2, 3, 0, Math.PI * 2)
        ctx.fill()
      }

      // Player (flip horizontally when facing left)
      if (imgRef.current) {
        ctx.save()
        if (p.facing === 'left') {
          ctx.scale(-1, 1)
          ctx.drawImage(imgRef.current, -p.x - p.w, p.y, p.w, p.h)
        } else {
          ctx.drawImage(imgRef.current, p.x, p.y, p.w, p.h)
        }
        ctx.restore()
      } else {
        // Fallback: colored square
        ctx.fillStyle = character.color
        ctx.fillRect(p.x, p.y, p.w, p.h)
      }
    }

    // ── Loop ────────────────────────────────────────────────────
    function loop() {
      if (stopped) return
      const result = update()
      draw()
      if (result === 'gameover') { setGameOver(true); return }
      if (result === 'win')      { setWin(true);      return }
      rafRef.current = requestAnimationFrame(loop)
    }

    rafRef.current = requestAnimationFrame(loop)

    return () => {
      stopped = true
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('keydown', onKeyDown)
      window.removeEventListener('keyup',   onKeyUp)
    }
  }, [character.color, gameKey])

  function restart() {
    playerRef.current = freshPlayer()
    coinsRef.current  = freshCoins()
    setScore(0)
    setGameOver(false)
    setWin(false)
    setGameKey(k => k + 1)
  }

  return (
    <div className="flex flex-col items-center gap-4">

      {/* HUD */}
      <div className="flex items-center justify-between w-[800px]">
        <div className="flex items-center gap-3">
          <img
            src={character.image}
            alt={character.name}
            className="w-10 h-10 rounded-full border-2 border-white/50"
          />
          <span className="text-white font-bold text-lg drop-shadow">
            {character.name}
          </span>
        </div>
        <div className="flex items-center gap-5">
          <span className="text-white font-bold drop-shadow">
            🪙 {score} / {TOTAL_COINS}
          </span>
          <button
            onClick={onReset}
            className="text-white/60 hover:text-white text-sm underline cursor-pointer transition-colors"
          >
            Change character
          </button>
        </div>
      </div>

      {/* Canvas */}
      <div className="relative">
        <canvas
          ref={canvasRef}
          width={W}
          height={H}
          className="rounded-xl shadow-2xl block"
        />

        {/* Overlay: game over / win */}
        {(gameOver || win) && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 rounded-xl">
            <p className="text-5xl mb-3">{win ? '🎉' : '💀'}</p>
            <p className="text-3xl font-bold text-white mb-1">
              {win ? 'You Win!' : 'Game Over'}
            </p>
            <p className="text-white/60 mb-7 text-sm">
              {score} of {TOTAL_COINS} coins collected
            </p>
            <div className="flex gap-3">
              <button
                onClick={restart}
                className="px-7 py-2.5 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl cursor-pointer transition-colors shadow-lg"
              >
                Play Again
              </button>
              <button
                onClick={onReset}
                className="px-7 py-2.5 bg-white/15 hover:bg-white/25 text-white font-bold rounded-xl cursor-pointer transition-colors"
              >
                Change Character
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Controls hint */}
      <p className="text-white/60 text-sm">
        ← → or A D to move &nbsp;·&nbsp; Space or ↑ or W to jump &nbsp;·&nbsp;
        Collect all {TOTAL_COINS} coins to win
      </p>

    </div>
  )
}
