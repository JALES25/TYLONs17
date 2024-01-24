"use client"

import React from 'react'

interface ProjectCardProps {
    title: string
    description: string
    imageUrl: string
    linkUrl: string
    liveDemo: string
}

export default function ProjectCard ({ title, description, imageUrl, linkUrl, liveDemo }: ProjectCardProps) {
  const handleGitHubClick = () => {
    window.open(linkUrl, '_blank')
  }

  const handleLiveDemoClick = () => {
     window.open(liveDemo, '_blank')
  }

  return (
      <div className="p-4 flex flex-col justify-center items-center border-4 border-blue-600 rounded-2xl shadow-lg hover:shadow-blue-500 transition-all duration-300 sm:p-6 md:p-8 w-[23em] h-[28em] hover:w-[24em] hover:h-[30em]">
          <img src={imageUrl} alt={title} className="w-full h-64 object-cover rounded sm:h-72 md:h-80" />
          <h3 className="text-2xl font-bold mt-2 sm:text-3xl md:text-4xl">{title}</h3>
          <p className="text-blue-500 mt-1 sm:text-lg md:text-xl">{description}</p>
          <div className="flex mt-4">
              <button onClick={handleGitHubClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full sm:py-3 sm:px-6 md:py-4 md:px-8">GitHub</button>
              <button onClick={handleLiveDemoClick} className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-full ml-4 sm:py-3 sm:px-6 md:py-4 md:px-8 sm:ml-6 md:ml-8">Live Demo</button>
          </div>
      </div>
  )
}


// TODO
  //- on initail load it shows the minified image then onclick of the the image it responsively ajdusts its width and height for better view   
  //- make card responsive
  //- need better image card component
