import React, { ReactNode } from 'react'

interface BackgroundProps {
    children: ReactNode;
  }

export default function DBackground ({children} : BackgroundProps) {



  return (
    <div className="dbg-body">
        <section className="dbg-section">
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            <span className="star"></span>
            
        </section>
        <div className=" ">{children}</div>
    </div>
  )
}


