"use client"

import React from 'react'
import { FaAngleDoubleRight } from "react-icons/fa"   
import '@/styles/AnimatedRight.css'

interface AnimatedRightProps {
  className?: string;
}

const AnimatedRight: React.FC<AnimatedRightProps> = ({ className }) => {
    function handleScrollTo() {
        window.scrollTo({ top: document.getElementById('downloadButton')?.offsetTop, behavior: 'smooth' });
    }

    return (
        <div className={`cta-container ${className}`}>
          <div className="arrow-container relative" >
            <FaAngleDoubleRight className="arrow  text-red-500 absolute left-[-6em] top-[-1em]" />
          </div>
          {/* <p className="cta-text">To Your Right</p> */}
        </div>
    )
}

export default AnimatedRight