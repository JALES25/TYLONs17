"use client"

import Image from 'next/image'
// import ThemeButtons from '@/components/theme/ThemeButtons'
// import Card from '@/components/RandomQuote/Card'

import '@fortawesome/fontawesome-free/css/all.css'
import RainThunder from '@/components/theme/RainThunder'
import AnimatedRight from '@/components/icons/AnimatedRight'

import RippleButton from '@/components/utils/RippleButton'
import { ThemeContext } from '@/context/ThemeContext'
import { useContext } from 'react'
import WaveRipples from '@/components/utils/WaveRipples'




export default function Home() {
  const { state, dispatch } = useContext(ThemeContext)

  function getCV() {
    window.open("/images/CV Dec23-ME.pdf", '_blank')
  }
  function showWorks() {
    window.open("/about#projects", '_blank')
  }

  function showMyself() {
    window.open("/about", '_blank')
  }
  

  function doNothing(): void {
    console.log("I did nothing")
  }

  return (
    <main className="flex max-h-screen flex-col items-center justify-between p-10 ">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto  lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://github.com/JALES25"
            target="_blank"
            rel="noopener noreferrer"
          >
            This here is:
              <Image
                src="/images/JALESnotJAQUE.png"
                alt="JALESnotJAQUE"
                className="rounded-[2em] do-ripple"
                width={100}
                height={24}
                priority
              />

            {'JALESnotJAQUE'}
          </a>
        </div>
      </div>
      <RainThunder />
      <div className="hidden relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert "
          src=""
          alt="JALESnotJAQUE Photo"
          width={100}
          height={100}
          priority
          />
      </div> 
      <div className="">
        <h2 className="font-bold text-4xl">
          <i className="fas fa-quote-left"></i>
          welcome to my personal site.
        </h2>
        <hr /><br />
        <p className=" text-4xl">
          It was made to be a place i could put my skills to use, it will also serve as a place to practice and show my other works. <br />
          Do snooop around and see what you could find. 
        </p>
      </div>

      {/* <Card /> */}

      {/* <ThemeButtons /> */}

      <div className="flex items-center justify-center ">
        <h4 className="absolute left-[6rem] ">Looking to hire me? </h4>
        <AnimatedRight />
        <div>
          <RippleButton onClick={getCV}  id="downloadButton">Download CV</RippleButton>
          <RippleButton onClick={showWorks} >Checkout My Works</RippleButton>

          <RippleButton onClick={showMyself}>TYLONs</RippleButton>
          
          
        </div>
      </div>
      
    </main>
  )
}
