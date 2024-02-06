"use client"

import { metadata } from '@/libs/metadata'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider, ThemeContext } from '@/context/ThemeContext'
import Navigation from '@/components/navigation'
// import Footer from '@/components/layout/Footer'
import GamesBar from '@/components/layout/gameSideBar/GamesBar'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'
import { useContext, useEffect } from 'react'
import { AuthProvider } from './Providers'
import DBackground from '@/components/theme/DBackground'


const inter = Inter({ subsets: ['latin'] })

export const {
  title: siteTitle,
  description: siteDescription,
  keywords: siteKeywords,
  author: siteAuthor,
  image: siteImage,
  url: siteUrl
} = metadata;


export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode
  session: Session 
}) {
  const { state } = useContext(ThemeContext)

  useEffect(() => {
    // Updates the class of the body element when state.theme changes
    document.body.className = ` ${state.theme == 'dark' ? 'bg-blue-700' : 'bg-blue-500'}`;
  }, [state.theme]);

  return (
    <html lang="en">
      <ThemeProvider>
      {/* bg-black bg-opacity-[98%] */}
        <body className={`${inter.className} `}>
          <AuthProvider >
              {/* <div > */}
                {/* <SessionProvider session={session}> */}
                  <Navigation />
                {/* </SessionProvider> */}
                <DBackground>
                  <div className="ml-20 p-4 ">{children}</div>
                </DBackground>
                <GamesBar />
                {/* <Footer  /> */}
              {/* </div> */}
          </AuthProvider> 
        </body>
      </ThemeProvider>
    </html>
  )
}
