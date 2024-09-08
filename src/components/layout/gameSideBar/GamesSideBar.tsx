"use client"

import { ThemeContext } from "@/context/ThemeContext"
import { useContext } from "react"
import SideBarIcon from "./SideBarIcon"

import { IconType } from 'react-icons'
import { BsFillLightningFill, BsPlus, } from 'react-icons/bs'
import { FaGamepad, FaPoo } from 'react-icons/fa'
import { FaPersonWalkingLuggage } from "react-icons/fa6"
import { TbWorldSearch } from "react-icons/tb"



interface GamesSideBarProps {
    // icons: { icon: IconType; text: string }[]  //array of objects with both the icon and text
    // icons: IconType[]   // The icons array should contain only the React components for icons(FaFire, BsPlus, etc.)

    iconNames: string[]     // Contains string names of the icons 
}   

const iconTexts: { [key: string]: string } = {
  FaPersonWalkingLuggage: "Begin Trippers Walk",
  TbWorldSearch: "Explore?",
  BsFillLightningFill: "Lightning",
  FaPoo: "Useless", 
  FaGamepad: "Play Games",
}



export default function GamesSideBar({ iconNames }: GamesSideBarProps) {
  // console.log(icons)

  const { state, dispatch } = useContext(ThemeContext)

  return (
    <div className={`fixed top-0 left-0 h-screen w-20 m-0
                      flex flex-col items-center justify-center  
                      ${state.theme === 'dark' ? 'bg-primary' : 'bg-gray-400'}
                      bg-opacity-50 text-seconday shadow-md shadow-blue-700`}>

        {/* {icon.map((icon, index) => (
          <SideBarIcon key={index} iconName={icon} text={iconNames[icon.name] || ""} />
        ))} */}

        {iconNames.map((iconName, index) => {
          // const Icon = getIconByName(iconName);  
          return <SideBarIcon key={index} iconName={iconName} text={iconTexts[iconName] || ""} />
        })}
    </div>
  )
}




