import { useState } from 'react'
import { Character } from '../types'

// ── The 6 playable characters ─────────────────────────────────────
const CHARACTERS: Character[] = [
  { id: 1, name: 'Alice',   color: '#CC0000', image: '/characters/Alice.svg' },
  { id: 2, name: 'Chloe',   color: '#E91E8C', image: '/characters/Chloe.svg' },
  { id: 3, name: 'Nils',    color: '#228B22', image: '/characters/Nils.svg' },
  { id: 4, name: 'Siavash', color: '#4169E1', image: '/characters/Siavash.svg' },
  { id: 5, name: 'Shelton', color: '#DAA520', image: '/characters/shelton.svg' },
  { id: 6, name: 'Usama',   color: '#800080', image: '/characters/usama.svg' },
]

// ── Props ─────────────────────────────────────────────────────────
interface Props {
  onSelect: (character: Character) => void
}

export default function CharacterSelect({ onSelect }: Props) {
  const [selected, setSelected] = useState<Character | null>(null)

  return (
    <div className="bg-white rounded-2xl p-8 shadow-2xl w-full max-w-md">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-1">
        🍄 Mario Game
      </h1>
      <p className="text-gray-400 text-center text-sm mb-8">
        Choose your character to start
      </p>

      {/* Character grid */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {CHARACTERS.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelected(c)}
            className={[
              'flex flex-col items-center gap-2 p-3 rounded-xl border-2 transition-all duration-150 cursor-pointer',
              selected?.id === c.id
                ? 'border-blue-500 bg-blue-50 scale-105 shadow-md'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50',
            ].join(' ')}
          >
            <img
              src={c.image}
              alt={c.name}
              className="w-14 h-14"
            />
            <span className="text-xs font-semibold text-gray-600">{c.name}</span>
          </button>
        ))}
      </div>

      {/* Play button */}
      <button
        onClick={() => selected && onSelect(selected)}
        disabled={!selected}
        className={[
          'w-full py-3 rounded-xl font-bold text-lg text-white transition-colors duration-150 cursor-pointer',
          selected
            ? 'bg-red-500 hover:bg-red-600 shadow-lg'
            : 'bg-gray-300 cursor-not-allowed',
        ].join(' ')}
      >
        {selected ? `Play as ${selected.name}!` : 'Select a character first'}
      </button>
    </div>
  )
}
