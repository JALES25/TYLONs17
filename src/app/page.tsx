import Image from 'next/image'
import GamesBar from '@/components/layout/gameSideBar/GamesBar'
import ThemeButtons from '@/components/theme/ThemeButtons'
import Card from '@/components/RandomQuote/Card'


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
       
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            This here is:{''}
            <Image
              src=""
              alt="JALESnotJAQUE"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src=""
          alt="JALESnotJAQUE Photo"
          width={180}
          height={37}
          priority
        />
      </div> 
      <div className="font-bold text-4xl">
        welcome to my personal site. <br />
        It was made to be a place i could put my skills to use that will also serve as a place to practice show my other works. <br />
        Do snooop around and see what you counld find. 
      </div>

      <Card />

      <ThemeButtons />

      <GamesBar />
      
    </main>
  )
}
