import { useState } from 'react'
import CharacterSelect from './components/CharacterSelect'
import Game from './components/Game'
import { Character, Screen } from './types'

export default function App() {
  const [screen, setScreen] = useState<Screen>('select')
  const [character, setCharacter] = useState<Character | null>(null)

  function handleSelect(c: Character) {
    setCharacter(c)
    setScreen('playing')
  }

  function handleReset() {
    setScreen('select')
    setCharacter(null)
  }

  return (
    <div className="min-h-screen bg-[#5C94FC] flex items-center justify-center p-6">
      {screen === 'select' && (
        <CharacterSelect onSelect={handleSelect} />
      )}
      {screen === 'playing' && character && (
        <Game character={character} onReset={handleReset} />
      )}
    </div>
  )
}
