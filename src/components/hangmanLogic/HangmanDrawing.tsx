import React from 'react'


const HEAD = (
    <div className="h-[100px] w-[100px] rounded-full border-[10px] border-white absolute top-[50px] right-[-45px]"/>
)

const BODY = (
    <div className="h-[150px] w-[10px] bg-white absolute top-[160px] right-0"/>
)

const RIGHT_ARM = (
    <div className="h-[10px] w-[100px] bg-white absolute top-[180px] right-[-110px] rotate-[-30deg] origin-bottom-left"/>
)

const LEFT_ARM = (
    <div className="h-[10px] w-[100px] bg-white absolute top-[180px] right-[20px] rotate-[30deg] origin-bottom-right"/>
)

const RIGHT_LEG = (
    <div className="h-[10px] w-[120px] bg-white absolute top-[290px] right-[-110px] rotate-[60deg] origin-bottom-left"/>
)

const LEFT_LEG = (
    <div className="h-[10px] w-[120px] bg-white absolute top-[290px] right-[0px] rotate-[-60deg] origin-bottom-right"/>
)

const BODY_PARTS = [ HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export default function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div className="relative">
        {BODY_PARTS.slice(0, numberOfGuesses)}
        <div className="h-[50px] w-[10px] bg-white absolute top-0 right-0"/>
        <div className="h-[10px] w-[200px] bg-white ml-[120px]"/>
        <div className="h-[800px] w-[10px] bg-white ml-[120px]"/>
        <div className="h-[10px] w-[250px] bg-white " />
    </div>
  )
}
