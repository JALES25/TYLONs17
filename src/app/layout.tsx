import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
import Navigation from '@/components/navigation'
// import Footer from '@/components/layout/Footer'
import GamesBar from '@/components/layout/gameSideBar/GamesBar'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TYLONs17™',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode
  session: Session 
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
          <ThemeProvider>
            <div >
              {/* <SessionProvider session={session}> */}
                <Navigation />
              {/* </SessionProvider> */}
              <div className="ml-20 p-4">{children}</div>
              <GamesBar />
              {/* <Footer  /> */}
            </div>
          </ThemeProvider>
          
      </body>
    </html>
  )
}
