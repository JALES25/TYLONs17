import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import Button from './Button'

export default function Navbar({ toggle }: { toggle: () => void }) {
  return (
    <nav>
      <div className="z-10 w-full h-20 bg-primary sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className="hidden md:flex gap-x-6 text-white text-2xl">
              <li>
                <Link className="hover:text-blue-700" href="/about">
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link className="hover:text-blue-700" href="/services">
                  <p>Games</p>
                </Link>
              </li>
              <li>
                <Link className="hover:text-blue-700" href="/services">
                  <p>Music</p>
                </Link>
              </li>
              <li>
                <Link className="hover:text-blue-700" href="/services">
                  <p>Blogs</p>
                </Link>
              </li>
              <li>
                <Link className="hover:text-blue-700" href="/contact">
                  <p>Contact</p>
                </Link>
              </li>
            </ul>
            
            <div className="">
              <button className="h-12 rounded-lg border-b-cyan-500 border-t-neutral-500 border-2 font-bold px-5 mr-2 text-blue-700 hover:text-white hover:bg-blue-900 hover:shadow-md hover:shadow-blue-300 ">
                register
              </button>
              <Button />  
            </div>
            <button type="button" className="inline-flex items-center md:hidden" onClick={toggle}>
                {/* Menu icon */}
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24">
                    <path fill="#fff"
                        d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
                </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
