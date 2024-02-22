import React from 'react'
import Dashboard from "@/components/layout/dashboard/Dashboard"


const games = [
  { title: 'HangMan', link: '/games/hangman' },
  { title: 'Sudoku', link: '/games/sudoku' },
  { title: 'Tick Tack Toe', link: '/games/Tick-Tack-Toe' },
  { title: 'Rock Paper Scizzors', link: '/games/Rock-Paper-Scizzors' },
  { title: 'Brick Breakout', link: '/games/Brick-Breakout' },
  { title: 'Card Flipper', link: '/games/Card-Flipper' },
  { title: 'Dice Roll Simulator', link: '/games/Dice-Roll-Simulator' },
  
]

export default function Games() {
  return (
    <div className="p-4 sm:p-8 bg-gray-600">
        <h1 className="text-xl sm:text-2xl lg:text-3xl">This is the Games dashboard</h1>
        <hr />
        <Dashboard items={games} title="Play some Games" className="bg-gray-900"/>
    </div>
  )
}
