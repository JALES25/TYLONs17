import React from 'react'

const HEAD = (
    <div className="h-24 w-24 sm:h-32 sm:w-32 rounded-full border-4 sm:border-8 border-white absolute top-12 sm:top-16 right-[-11rem] sm:right-[-12rem]"/>
)

const BODY = (
    <div className="h-36 w-2 sm:h-48 sm:w-4 bg-white absolute top-40 sm:top-48 right-0"/>
)

const RIGHT_ARM = (
    <div className="h-2 w-24 sm:w-32 bg-white absolute top-44 sm:top-56 right-[-28rem] sm:right-[-30rem] rotate-[-30deg] origin-bottom-left"/>
)

const LEFT_ARM = (
    <div className="h-2 w-24 sm:w-32 bg-white absolute top-44 sm:top-56 right-5 sm:right-8 rotate-[30deg] origin-bottom-right"/>
)

const RIGHT_LEG = (
    <div className="h-2 w-28 sm:w-36 bg-white absolute top-72 sm:top-96 right-[-28rem] sm:right-[-30rem] rotate-[60deg] origin-bottom-left"/>
)

const LEFT_LEG = (
    <div className="h-2 w-28 sm:w-36 bg-white absolute top-72 sm:top-96 right-0 rotate-[-60deg] origin-bottom-right"/>
)

const BODY_PARTS = [ HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export default function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="relative">
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div className="h-12 w-1 sm:w-2 bg-white absolute top-0 right-0"/>
        <div className="h-1 w-48 sm:w-60 bg-white ml-28 sm:ml-36"/>
        <div className="h-72 sm:h-96 w-1 sm:w-2 bg-white ml-28 sm:ml-36"/>
        <div className="h-1 w-60 sm:w-72 bg-white " />
    </div>
  )
}