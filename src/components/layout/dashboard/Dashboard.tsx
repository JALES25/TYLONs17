"use client";

import { ThemeContext } from '@/context/ThemeContext'
import { useState, useContext } from 'react'
import BlogsCard from '@/components/cardsUIs/blogsCard/BlogsCard'
import GameCard from '@/components/cardsUIs/gamesCard/GamesCard'
import MusicCard from '@/components/cardsUIs/musicCard/MusicCard'



interface BaseDashboardItem {
  title: string;
  link: string;
  image: string;
  date: string;
}

interface BlogItem extends BaseDashboardItem {
  type: 'blog';
  content: string;
}

interface GameItem extends BaseDashboardItem {
  type: 'game';
  videoSrc: string;
  description: string;
  reviews: string;
  reviewCount: number;
}

interface MusicItem extends BaseDashboardItem {
  type: 'music';
}

type DashboardItem = BlogItem | GameItem | MusicItem;


type DashboardProps = {
  items: DashboardItem[]
  title: string
  className?: string
}

export default function Dashboard({ items, title, className }: DashboardProps) {
  // Existing logic for search, pagination, etc.
  const [searchTerm, setSearchTerm] = useState('')
  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 7
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredItems.slice(indexOfFirstPost, indexOfLastPost)

  const totalPages = Math.ceil(filteredItems.length / postsPerPage)

  const { state } = useContext(ThemeContext)
  const isDarkMode = state.theme === 'dark'

  return (
    <div className={`p-4 bg-gray-800 ${className}`}>
      <h1 className="text-3xl text-center">{title}</ h1> 
      <div className="py-2">
        
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="mb-4 p-2 text-slate-200 bg-gray-500 w-full text-center"
        />
        
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {currentPosts.map((item, index) => (
          <div key={index}>
            {/* Conditionally render based on type */}
            {item.type === 'blog' && <BlogsCard title={item.title} date={item.date} image={item.image} content={item.content} link={item.link}  />}
            {item.type === 'game' && <GameCard title={item.title} link={item.link} image={item.image} videoSrc={item.videoSrc} description={item.description} reviews={item.reviews} reviewCount={item.reviewCount} />}
            {item.type === 'music' && <MusicCard title={item.title} link={item.link} />}
          </div>
        ))}
      </div>
      {/* Pagination buttons */}
      <div className="flex space-x-2 mt-4">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`p-2 rounded-full ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-500'}`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  )
}

