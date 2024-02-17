"use client"

import Logo from './Logo'
import Link from 'next/link'
// import Button from './Button'

import { ThemeContext } from "@/context/ThemeContext"
import React, { useContext, useEffect, useState } from "react"
import { usePathname } from 'next/navigation'


import { signIn, signOut, useSession } from 'next-auth/react'
import Modal from "@/components/utils/Modal"
import { Session, getServerSession } from 'next-auth'
// import { options } from '@/app/api/auth/[...nextauth]'




export default function Navbar({ toggle }: { toggle: () => void }) {
  const { state, dispatch } = useContext(ThemeContext)
  const { currentPage } = state

  // const router = useRouter()

  const toggleTheme = () => {
    dispatch( { type: 'CHANGE_THEME' })
    const newTheme = state.theme === 'dark' ? 'light' : 'dark'
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme)
    }
  }

  const pathname = usePathname()

  useEffect(() => {
      dispatch({ type: 'SET_CURRENT_PAGE', currentPage: pathname })
  }, [pathname])

  // // Authentication
  // // const session = await getServerSession(options)

  // // const session: Session | null = useSession()?.data ?? null
  // const loading: boolean = session === null
  // const [isSignIOpen, setIsSignInOpen] = useState(false)
  // const [isRegisterOpen, setIsRegisterOpen] = useState(false)
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  

  // const handleSignIn = async (e: { preventDefault: () => void }) => {
  //   e.preventDefault()
  //   const result = await signIn('credentials', { email, password, redirect: false })
  //   if (result?.error) {
  //     alert(result.error)
  //   } else {
  //     setIsSignInOpen(false)
  //   }
  // }

  const handleSignIn = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // handle sign in
  }

  const handleRegister = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    // handle register
  }

  return (
    <nav>
      <div className={`z-10 w-full h-20 sticky top-0 bg-opacity-95  ${state.theme === 'dark' ? 'bg-primary' : 'bg-gray-400'} `}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <Logo />
            <ul className={`hidden md:flex gap-x-6 text-2xl ${state.theme === 'dark' ? 'text-white' : 'text-primary' }`}>
              <li>
              {/* ${router.pathname === "/contact" ? "bg-blue-600 bg-opacity-70" : "" } */}
                <Link className={`hover:text-blue-700 active:text-cyan-400 custom-text-shadow  ${currentPage === "/about" ? "text-blue-400 font-semibold  " : " opacity-90 hover:opacity-100" } `} href="/about">
                  <p>About</p>
                </Link>
              </li>
              <li>
                <Link className={`hover:text-blue-700 active:text-cyan-400 custom-text-shadow  ${currentPage === "/games" ? "text-blue-400 font-semibold  " : " opacity-90 hover:opacity-100" } `} href="/games">
                  <p>Games</p>
                </Link>
              </li>
              <li>
                <Link className={`hover:text-blue-700 active:text-cyan-400 custom-text-shadow  ${currentPage === "/music" ? "text-blue-400 font-semibold  " : " opacity-90 hover:opacity-100" } `} href="/music">
                  <p>Music</p>
                </Link>
              </li>
              <li>
                <Link className={`hover:text-blue-700 active:text-cyan-400 custom-text-shadow  ${currentPage === "/blogs" ? "text-blue-400 font-semibold  " : " opacity-90 hover:opacity-100" } `} href="/blogs">
                  <p>Blogs</p>
                </Link>
              </li>
              <li>
                <Link className={`hover:text-blue-700 active:text-cyan-400 custom-text-shadow  ${currentPage === "/contact" ? "text-blue-400 font-semibold  " : " opacity-90 hover:opacity-100" } `} href="/contact">
                  <p>Contact</p>
                </Link>
              </li>
            </ul>

            {/* /Theme Button/ */}
            {/* <div className={`border-2 rounded-full ${state.theme === 'dark' ? 'border-blue-400' : 'border-blue-600' }`}>
              <button onClick={toggleTheme} className="hover:text-blue-500 hover:bg-slate-600 bg-gray-700 rounded-full p-2 active:opacity-30">Theme</button>
              
            </div> */}
            {/* /End Theme Button/ */}

            {/* <div className="">
              {!session && (
                <>
                  <button onClick={() => setIsSignInOpen(true)} className={`h-12 border-2 rounded-lg bg-white font-bold px-5 text-blue-700 hover:text-white hover:bg-primary hover:shadow-md hover:shadow-blue-300 active:opacity-30 ${state.theme === 'dark' ? 'border-blue-400' : 'border-blue-800' } `}>Sign in</button>
                  <Modal isOpen={isSignIOpen} onClose={() => setIsSignInOpen(false)}>
                    <form onSubmit={handleSignIn}>
                      <div className="flex flex-col gap-y-2">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required />
                      </div>
                      <div className="flex flex-col gap-y-2">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required />
                      </div>
                      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign in</button>
                    </form>
                  </Modal>
                  <button onClick={() => signIn('credentials')} className={`h-12 rounded-lg border-b-cyan-500 border-t-neutral-500 border-2 font-bold px-5 mr-2 text-blue-700 hover:text-white hover:bg-blue-900 hover:shadow-md hover:shadow-blue-300 active:opacity-30 ${state.theme === 'dark' ? '' : 'bg-blue-900 text-white hover:bg-primary border-blue-800'} `}>Register</button>
                </>
              )}
              {session && <button onClick={() => signOut()} className={`h-12 border-2 rounded-lg bg-white font-bold px-5 text-blue-700 hover:text-white hover:bg-primary hover:shadow-md hover:shadow-blue-300 active:opacity-30 ${state.theme === 'dark' ? 'border-blue-400' : 'border-blue-800' } `}>Sign out</button>}
            </div> */}
            
            <div className="">
              <button className={`h-12 rounded-lg border-b-cyan-500 border-t-neutral-500 border-2 font-bold px-5 mr-2 text-blue-700 hover:text-white hover:bg-blue-900 hover:shadow-md hover:shadow-blue-300 active:opacity-30 ${state.theme === 'dark' ? '' : 'bg-blue-900 text-white hover:bg-primary border-blue-800'} `} 
                      onClick={handleRegister}>
                <Link href="/profile/register">Register</Link>
              </button>
              <button className={`h-12 border-2 rounded-lg bg-white font-bold px-5 text-blue-700 hover:text-white hover:bg-primary hover:shadow-md hover:shadow-blue-300 active:opacity-30 ${state.theme === 'dark' ? 'border-blue-400' : 'border-blue-800' } `}
                      onClick={handleSignIn}>
                <Link href="/profile/login">Sing-In</Link>
              </button> 
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





 
    
