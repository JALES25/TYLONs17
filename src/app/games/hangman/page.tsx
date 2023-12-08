"use client"

import HangmanDrawing from "@/components/hangmanLogic/HangmanDrawing"
import HangmanWord from "@/components/hangmanLogic/HangmanWord"
import Keyboard from "@/components/hangmanLogic/Keyboard"
import { useCallback, useEffect, useState } from "react"



function getWord() {
  const wordList = require('word-list-json')
  return wordList[Math.floor(Math.random() * wordList.length)]
}

export default function Hangman() {
    
    
    const [ wordToGuess, setWordToGuess ] = useState(getWord)

    const  [ guessedLetters, setGuessedLetters ] = useState<string[]> ([])

    const incorrectLetters = guessedLetters.filter(
      letter => !wordToGuess.includes(letter)
    )

    const isLooser = incorrectLetters.length >= 6
    const iswinner = wordToGuess.split("").every((letter: string) => guessedLetters.includes(letter))

    const addGuessedLetter = useCallback((letter: string) => {
      if (guessedLetters.includes(letter) || isLooser ||iswinner)   return

      setGuessedLetters(currentLetters => [...currentLetters, letter])
    }, [guessedLetters, isLooser, iswinner])

    useEffect(() => {
      const handler = (e: KeyboardEvent) => {
        const key = e.key
        if (!key.match(/^[a-z]$/)) return

        e.preventDefault()
        addGuessedLetter(key)
      }

      document.addEventListener('keypress', handler)

      return () => {
        document.removeEventListener('keypress', handler)
      }
    }, [guessedLetters])


    useEffect(() => {
      const handler = (e: KeyboardEvent) => {
        const key = e.key
        if (key !== "Enter") return

        e.preventDefault()
        setGuessedLetters([])
        setWordToGuess(getWord())
      }

      document.addEventListener('keypress', handler)

      return () => {
        document.removeEventListener('keypress', handler)
      }
    }, [guessedLetters])
    

  return (
    <div className="flex flex-col items-center max-w-4xl gap-8 m-auto">
      <h1>Hangman</h1>
      <h4>Guess the letters in the secret word to solve the puzzle.</h4>
      <div className="text-2xl text-center">
        {iswinner && "CONGRATULATIONS!!! You Survived the nignt.  Press Enter TO TRY AGAIN"} 
        {isLooser && "OH NO!!! You couldn't make it in time.  Press Enter TO TRY AGAIN"} 
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} reveal={isLooser} />
      <div style={{ alignSelf: "stretch"}}>
        <Keyboard 
          activeLetters={guessedLetters.filter(letter => wordToGuess.includes(letter))}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
          disabled={iswinner || isLooser}
        />
      </div>
    </div>
  )
}
