import React from 'react'

type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean 
}

export default function HangmanWord({ guessedLetters, wordToGuess, reveal=false}: HangmanWordProps) {
   
  return (
    <div className="flex gap-1 text-8xl font-bold uppercase font-mono">
        {wordToGuess.split("").map((letter, index) => (
            <span className="border-b-[1rem] border-white" key={index}>
                <span className={`${guessedLetters.includes(letter) || reveal? "visible" : "opacity-5"} ${!guessedLetters.includes(letter) && reveal? "text-red-500" : "text-white"}`}>
                    {letter}
                </span>
            </span>
        ))}
    </div>
  )
}




