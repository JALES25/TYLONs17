"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import Button from "./Button"
import TYLONsLogo from "@/components/icons/TYLONsLogo"

export default function Logo() {
  const [width, setWidth] =  useState(0)

  const updateWidth = () => {
    const newWidth = window.innerWidth
    setWidth(newWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", updateWidth)
    updateWidth
  }, [])

  const [showButton, setShowButton] = useState(false)

  const changeNavButton = () => {
    if (window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNavButton)
  }, [])

  

  return (
    <div>
      <Link href="/" style={{ display: showButton ? "none" : "block" }}>
        {/* <Image src="" alt="Logo" width={width < 1024 ? "150" : "250"} height={width < 1024 ? "45" : "74"} className="relative" /> */}
        <TYLONsLogo />
      </Link>

      <div style={{ display: showButton ? "block" : "none"}}>
          <Button />
      </div> 
    </div>
  )
}
