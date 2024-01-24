
import React from 'react'
import "@/styles/RainThunder.css"

const RainThunder: React.FC = () => {
  const raindrops = Array.from({ length: 100 }, (_, index) => (
    <div key={index} className="raindrop" style={{ left: `${Math.random() * 100}vw`, animationDuration: `${Math.random() * 1 + 1.5}s` }}></div>
  ))

  // const flashes = Array.from({ length: 5 }, (_, index) => (
  //   <div key={index} className="flash" style={{ animationDuration: `${Math.random() * 2 + 1}s`, animationDelay: `${Math.random() * 5}s` }}></div>
  // ))

  return (
    <div className="rain-thunder-container">    
      {raindrops}
      <div className="thunder">
        <div className="lightning"></div>
      </div>
      {/* {flashes} */}
    </div>
  )
}

export default RainThunder
