export interface Character {
  id: number
  name: string
  color: string       // fallback color if SVG fails to load
  image: string       // path to SVG in /public/characters/
}

export type Screen = 'select' | 'playing'
