import React from 'react'
import Dashboard from "@/components/layout/dashboard/Dashboard"


const games = [
  { type: 'game' as 'game', title: 'HangMan', link: '/games/hangman', image: 'https://images.pexels.com/photos/1637439/pexels-photo-1637439.jpeg?auto=compress&cs=tinysrgb&w=600', date: '2023-09-06', videoSrc: 'game-video-url', description: 'There is no game description at the moment!', reviews: 'Very Positive', reviewCount: 2912, },
  { type: 'game' as 'game', title: 'Sudoku', link: '/games/sudoku', image: 'https://images.pexels.com/photos/776092/pexels-photo-776092.jpeg?auto=compress&cs=tinysrgb&w=600', date: '2023-09-06', videoSrc: 'game-video-url', description: 'There is no game description at the moment!', reviews: 'Very Positive', reviewCount: 2912, },
  { type: 'game' as 'game', title: 'Tick Tack Toe', link: '/games/Tick-Tack-Toe', image: 'https://images.pexels.com/photos/776092/pexels-photo-776092.jpeg?auto=compress&cs=tinysrgb&w=600', date: '2023-09-06', videoSrc: 'game-video-url', description: 'There is no game description at the moment!', reviews: 'Very Positive', reviewCount: 2912, },
  { type: 'game' as 'game', title: 'Rock Paper Scizzors', link: '/games/Rock-Paper-Scizzors', image: 'https://images.pexels.com/photos/1637436/pexels-photo-1637436.jpeg?auto=compress&cs=tinysrgb&w=600', date: '2023-09-06', videoSrc: 'game-video-url', description: 'There is no game description at the moment!', reviews: 'Very Positive', reviewCount: 2912, },
  { type: 'game' as 'game', title: 'Brick Breakout', link: '/games/Brick-Breakout', image: 'https://images.pexels.com/photos/776092/pexels-photo-776092.jpeg?auto=compress&cs=tinysrgb&w=600', date: '2023-09-06', videoSrc: 'game-video-url', description: 'There is no game description at the moment!', reviews: 'Very Positive', reviewCount: 2912, },
  { type: 'game' as 'game', title: 'Card Flipper', link: '/games/Card-Flipper', image: 'https://images.pexels.com/photos/1637436/pexels-photo-1637436.jpeg?auto=compress&cs=tinysrgb&w=600', date: '2023-09-06', videoSrc: 'game-video-url', description: 'There is no game description at the moment!', reviews: 'Very Positive', reviewCount: 2912, },
  { type: 'game' as 'game', title: 'Dice Roll Simulator', link: '/games/Dice-Roll-Simulator', image: 'https://images.pexels.com/photos/1637439/pexels-photo-1637439.jpeg?auto=compress&cs=tinysrgb&w=600', date: '2023-09-06', videoSrc: 'game-video-url', description: 'There is no game description at the moment!', reviews: 'Very Positive', reviewCount: 2912, },
  
  { type: 'game' as 'game', title: 'HangMan', link: '/games/hangman', image: 'https://images.pexels.com/photos/1637439/pexels-photo-1637439.jpeg?auto=compress&cs=tinysrgb&w=600', date: '2023-09-06', videoSrc: 'game-video-url', description: 'There is no game description at the moment!', reviews: 'Very Positive', reviewCount: 2912, },
  { type: 'game' as 'game', title: 'Sudoku', link: '/games/sudoku', image: 'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=600', date: '2023-09-06', videoSrc: 'game-video-url', description: 'There is no game description at the moment!', reviews: 'Very Positive', reviewCount: 2912, },
  { type: 'game' as 'game', title: 'Tick Tack Toe', link: '/games/Tick-Tack-Toe', image: 'https://images.pexels.com/photos/1637439/pexels-photo-1637439.jpeg?auto=compress&cs=tinysrgb&w=600', date: '2023-09-06', videoSrc: 'game-video-url', description: 'There is no game description at the moment!', reviews: 'Very Positive', reviewCount: 2912, },
  { type: 'game' as 'game', title: 'Rock Paper Scizzors', link: '/games/Rock-Paper-Scizzors', image: 'https://images.pexels.com/photos/776092/pexels-photo-776092.jpeg?auto=compress&cs=tinysrgb&w=600', date: '2023-09-06', videoSrc: 'game-video-url', description: 'There is no game description at the moment!', reviews: 'Very Positive', reviewCount: 2912, },
  { type: 'game' as 'game', title: 'Brick Breakout', link: '/games/Brick-Breakout', image: 'https://images.pexels.com/photos/776092/pexels-photo-776092.jpeg?auto=compress&cs=tinysrgb&w=600', date: '2023-09-06', videoSrc: 'game-video-url', description: 'There is no game description at the moment!', reviews: 'Very Positive', reviewCount: 2912, },
  { type: 'game' as 'game', title: 'Card Flipper', link: '/games/Card-Flipper', image: 'https://images.pexels.com/photos/1637436/pexels-photo-1637436.jpeg?auto=compress&cs=tinysrgb&w=600', date: '2023-09-06', videoSrc: 'game-video-url', description: 'There is no game description at the moment!', reviews: 'Very Positive', reviewCount: 2912, },
  { type: 'game' as 'game', title: 'Dice Roll Simulator', link: '/games/Dice-Roll-Simulator', image: 'https://images.pexels.com/photos/776092/pexels-photo-776092.jpeg?auto=compress&cs=tinysrgb&w=600', date: '2023-09-06', videoSrc: 'game-video-url', description: 'There is no game description at the moment!', reviews: 'Very Positive', reviewCount: 2912, },

  { type: 'game' as 'game', title: 'HangMan', link: '/games/hangman', image: 'https://images.pexels.com/photos/1637436/pexels-photo-1637436.jpeg?auto=compress&cs=tinysrgb&w=600', date: '2023-09-06', videoSrc: 'game-video-url', description: 'There is no game description at the moment!', reviews: 'Very Positive', reviewCount: 2912, },
  { type: 'game' as 'game', title: 'Sudoku', link: '/games/sudoku', image: 'https://images.pexels.com/photos/776092/pexels-photo-776092.jpeg?auto=compress&cs=tinysrgb&w=600', date: '2023-09-06', videoSrc: 'game-video-url', description: 'There is no game description at the moment!', reviews: 'Very Positive', reviewCount: 2912, },
  { type: 'game' as 'game', title: 'Tick Tack Toe', link: '/games/Tick-Tack-Toe', image: 'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=600', date: '2023-09-06', videoSrc: 'game-video-url', description: 'There is no game description at the moment!', reviews: 'Very Positive', reviewCount: 2912, },
  { type: 'game' as 'game', title: 'Rock Paper Scizzors', link: '/games/Rock-Paper-Scizzors', image: 'https://images.pexels.com/photos/776092/pexels-photo-776092.jpeg?auto=compress&cs=tinysrgb&w=600', date: '2023-09-06', videoSrc: 'game-video-url', description: 'There is no game description at the moment!', reviews: 'Very Positive', reviewCount: 2912, },
  { type: 'game' as 'game', title: 'Brick Breakout', link: '/games/Brick-Breakout', image: 'https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=600', date: '2023-09-06', videoSrc: 'game-video-url', description: 'There is no game description at the moment!', reviews: 'Very Positive', reviewCount: 2912, },
  { type: 'game' as 'game', title: 'Card Flipper', link: '/games/Card-Flipper', image: 'https://images.pexels.com/photos/776092/pexels-photo-776092.jpeg?auto=compress&cs=tinysrgb&w=600', date: '2023-09-06', videoSrc: 'game-video-url', description: 'There is no game description at the moment!', reviews: 'Very Positive', reviewCount: 2912, },
  { type: 'game' as 'game', title: 'Dice Roll Simulator', link: '/games/Dice-Roll-Simulator', image: 'https://images.pexels.com/photos/1637436/pexels-photo-1637436.jpeg?auto=compress&cs=tinysrgb&w=600', date: '2023-09-06', videoSrc: 'game-video-url', description: 'There is no game description at the moment!', reviews: 'Very Positive', reviewCount: 2912, },
]

export default function Games() {
  return (
    <div className="p-4 sm:p-8 bg-gray-600">
        <h1 className="text-xl sm:text-2xl lg:text-3xl">This is the Games dashboard</h1>
        <hr className="border-2"/>
        <Dashboard items={games} title="Play some Games" className="bg-gray-900"/>
    </div>
  )
}
