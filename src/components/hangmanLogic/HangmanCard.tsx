import React from 'react'

export default function HangmanCard() {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">HangmanCard</h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4">
          This a version of the classic game of Hangman in which you try to guess the word or phrase before &quot;The Ripper&quot; comes.
        </p>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4">
            Click on the letters to try and reveal the word. If the word contains the letter, <br />
            then it is revealed, <br />
            but if the word doesn&apos;t contain the letter then the ripper encroches and a part of the Hangman picture is drawn. <br />
            when the picture is fully drawn the Ripper comes and a man is hung and then... <br />
            THE GAME ENDs?
        </p>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4">
          This game is one of the few games i used as a resource to practice my web building skills using Next.js
        </p>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl mt-4">
          by <span>TYLONs17&trade;</span>
        </p>
    </div>
  )
}
