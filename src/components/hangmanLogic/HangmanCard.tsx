import React from 'react'

export default function HangmanCard() {
  return (
    <div>
        <h1>HangmanCard</h1>
        

        <p>This a version of the classic game of Hangman in which you try to guess the word or phrase before "The Ripper" comes.</p>
        <p>
            To play you click on the letters to try and reveal the word. If the word contains the letter, <br />
            then it is revealed, <br />
            but if the word doesn't contain the letter then a part of the Hangman picture is drawn. <br />
            when the picture is drawn then the man is hung and... <br />
            THE GAME ENDs?
        </p>

        <p>This game is one of the few games i used as a resource to practice my web building skills using Next.js</p>

        <p>by <span>TYLONs17&trade;</span></p>
    </div>
  )
}
