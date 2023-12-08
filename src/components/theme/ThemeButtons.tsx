"use client"

import { ThemeContext } from "@/context/ThemeContext"
import React, { useContext } from "react"


  

export default function ThemeButtons() {
    const { state, dispatch} = useContext(ThemeContext)

  return (
    <div>
        {/* <h3>ThemeButtons</h3>
        <br /> */}
        <div className="flex items-center justify-center">
            <button className="border-blue-600 border-2 rounded-full m-10 p-4 hover:border-blue-900 hover:text-cyan-400 transition-all ease-linear" onClick={() => dispatch({ type: "CHANGE_THEME"})}>Change Theme</button>
            <button className="border-blue-600 border-2 rounded-full m-10 p-4 hover:border-blue-900 hover:text-cyan-400 transition-all ease-linear" onClick={() => dispatch({ type: "CHANGE_FONTSIZE", payload:20})}>Change Font Size</button>
        </div>
    </div>
  )
}
