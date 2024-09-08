import React from 'react'

import styles from "./keyboard.module.css"

const KEYS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const KEYS0 = KEYS.map((letter) => letter.toLocaleLowerCase())
// console.log(KEYS0)
type KeyboardProps = {
  activeLetters: string[]
  inactiveLetters: string[]
  addGuessedLetter: (letter: string) => void
  disabled?: boolean
}

export default function Keyboard({ activeLetters, inactiveLetters, addGuessedLetter, disabled=false}: KeyboardProps) {
  return (
    <div className="grid grid-cols-8 lg:grid-cols-9 gap-2">
        {KEYS0.map( key => {
          const isActive = activeLetters.includes(key)
          const isInactive = inactiveLetters.includes(key)
            return (
                // <button className={`hangman-btn btn-hovered-focused ${isActive ? 'btn-active' : ''} ${isInactive ? 'btn-inactive' : ''}`} key={key}
                // disabled={isActive || isInactive || disabled} 
                //   onClick={() => addGuessedLetter(key)}
                // >
                //     {key}
                // </button> 

                <button className={`${styles.btn} ${isActive ? styles.active : ''} ${isInactive ? styles.inactive : ''}`} key={key}
                disabled={isActive || isInactive || disabled} 
                  onClick={() => addGuessedLetter(key)}
                >
                    {key}
                </button> 
            )
        })}
    </div>
  )
}




