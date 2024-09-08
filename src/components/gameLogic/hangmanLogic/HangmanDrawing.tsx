import React from 'react'

const HEAD = (
    <div className="h-10 w-10 sm:h-24 sm:w-24 rounded-full border-4 sm:border-8 border-white absolute top-12 sm:top-12 right-[21.4rem] sm:right-[-0.68rem]"/>
)

const BODY = (
    <div className="h-20 w-2 sm:h-[7.9rem] sm:w-4 bg-white absolute top-[5.4rem] sm:top-[8.5rem] right-[22.4rem] sm:right-[1.8rem]"/>
)

const RIGHT_ARM = (
    <div className="h-2 w-14 sm:w-32 bg-white absolute top-[6.5rem] sm:top-[12.2rem] right-[18.8rem] sm:right-[-6rem] rotate-[-30deg] origin-bottom-left"/>
)

const LEFT_ARM = (
    <div className="h-2 w-14 sm:w-32 bg-white absolute top-[6.5rem] sm:top-[12.2rem] right-[22.8rem] sm:right-[2.6rem] rotate-[30deg] origin-bottom-right"/>
)

const RIGHT_LEG = (
    <div className="h-2 w-20 sm:w-40 bg-white absolute top-[8.5rem] sm:top-[14.5rem] right-[18.1rem] sm:right-[-7.2rem] rotate-[60deg] origin-bottom-left"/>
)

const LEFT_LEG = (
    <div className="h-2 w-20 sm:w-40 bg-white absolute top-[8.5rem] sm:top-[14.5rem] right-[22.1rem] sm:right-[2rem] rotate-[-60deg] origin-bottom-right"/>
)

const BODY_PARTS = [ HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export default function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="relative  md:mt-3 ">
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div className="h-12 w-1 sm:w-3 bg-white absolute top-0 right-[22.5rem] lg:right-[2rem]"/>
        <div className="h-1 w-28 sm:w-[12rem] bg-white ml-28 sm:ml-[4rem] sm:mr-8"/>
        <div className="h-60 sm:h-96 w-1 sm:w-2 bg-white ml-28 sm:ml-[4rem]"/>
        <div className="h-2 lg:h-8 w-60 sm:w-72 bg-white " />
    </div>
  )
}