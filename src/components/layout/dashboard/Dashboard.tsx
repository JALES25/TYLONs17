"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'

import { AiOutlineLoading } from "react-icons/ai"

import { FaBlogger, FaBloggerB } from "react-icons/fa" 
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'



type DashboardItem = {
  title: string
  link: string
}

type DashboardProps = {
  items: DashboardItem[]
  title: string
  className?: string
}

export default function Dashboard({ items, title, className }: DashboardProps) {
    //Search
    const [searchTerm, setSearchTerm] = useState('')

    const filteredItems = items.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    //Pagination
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 6

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost)

    const totalPages = Math.ceil(items.length / postsPerPage)

    //Loading
    const [loading, setLoading] = useState(true)
    //TODO: fetch blog posts
    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false)
      }, 1000)

    // cleanup function to clear the timeout it the component unmounts before the timeout finishes
    return () => clearTimeout(timer)
    }, []) // Empty dependency array so this effect only runs once on mount

    
    


    //Theme
    const { state } = useContext(ThemeContext)
    const isDarkMode = state.theme === "dark"
    

  return (
    <div className={`p-4 bg-gray-800 ${className}`}>
      <h1 className="text-2xl sm:text-3xl md:text-4xl">{title}</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="mb-4 p-2 text-slate-200 bg-gray-500 w-full sm:w-1/2 md:w-1/3"
      />
      {loading ? (
        <AiOutlineLoading /> //TODO: Add loading spinner
      ) : (
        <div className="grid grid-rows-2">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* filteredItems */}
            {currentPosts.map((item, index) => (
              <li key={index} className="my-2 flex items-center">
                {/* <img src="/path/to/icon.png" alt="icon" className="mr-2" /> */}
                {isDarkMode ? <FaBloggerB className="mr-2" /> : <FaBlogger className="mr-2" />}
                <Link href={item.link} legacyBehavior>
                  <a className="text-white hover:text-blue-500" title={item.title}>{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>  
      )}
      <div className="bg-gray-500 rounded-lg w-20 p-1">
        {Array.from({length: totalPages}, (_, i) => i + 1).map(page => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`hover:bg-blue-500 hover:text-primary p-2 rounded-full ${page === currentPage ? 'active' : ''}`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  )
}
