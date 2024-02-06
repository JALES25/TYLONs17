"use client"

import { ThemeContext } from "@/context/ThemeContext"
import { useContext } from 'react'
// import { IconType } from 'react-icons'
import { BsFillLightningFill, BsPlus, BsGearFill } from 'react-icons/bs'
import { FaPoo } from 'react-icons/fa'
import { FaPersonWalkingLuggage } from "react-icons/fa6"
import { TbWorldSearch } from "react-icons/tb"

interface SideBarIconProps {
    // icon: IconType  // Use IconType from react-icons for specifying icon type
    iconName: string
    text?: string 
}

function getIconByName(name: string) {
    switch (name) {
        case 'BsFillLightningFill':
            return BsFillLightningFill;
        case 'TbWorldSearch':
            return TbWorldSearch;
        case 'BsGearFill':
            return BsGearFill;
        case 'FaPersonWalkingLuggage':
            return FaPersonWalkingLuggage;
        case 'FaPoo':
            return FaPoo;
        default:
            return FaPersonWalkingLuggage;  
    }
}

export default function SideBarIcon({ iconName, text = 'tooltip ?' }: SideBarIconProps) {
    const Icon = getIconByName(iconName)
    
    const { state, dispatch} = useContext(ThemeContext)

    const toggleTheme = () => {
        if (Icon === BsFillLightningFill) {
            dispatch( { type: 'CHANGE_THEME' })
            const newTheme = state.theme === 'dark' ? 'light' : 'dark'
            if (typeof window !== 'undefined') {
                localStorage.setItem('theme', newTheme)
            }
        }
    }
    


    return (
        <div onClick={toggleTheme} className={`sidebar-icon group ${iconName === 'BsFillLightningFill' ? 'border border-blue-500 glowing-effect' : ''}`}>
            <Icon />

            <span className="sidebar-tooltip group-hover:scale-100 ">
                {text}
            </span>
        </div>
    )
}