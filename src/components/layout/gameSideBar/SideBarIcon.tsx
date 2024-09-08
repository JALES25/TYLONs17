"use client"

import { ThemeContext } from "@/context/ThemeContext"
import { useContext, useState } from 'react'
import { useRouter } from 'next/navigation'

// import { IconType } from 'react-icons'
import { BsFillLightningFill, } from 'react-icons/bs'
import { FaPoo, FaGamepad } from 'react-icons/fa'
import { FaPersonWalkingLuggage } from "react-icons/fa6"
import { TbWorldSearch } from "react-icons/tb"

import PopUpModal from "@/components/utils/PopUpModal"

interface SideBarIconProps {
    // icon: IconType  // Use IconType from react-icons for specifying icon type
    iconName: string
    text?: string 
}

function getIconByName(name: string) {
    switch (name) {
        case 'FaPersonWalkingLuggage':
            return FaPersonWalkingLuggage;
        case 'TbWorldSearch':
            return TbWorldSearch;
        case 'BsFillLightningFill':
            return BsFillLightningFill;       
        case 'FaPoo':
            return FaPoo;
        case 'FaGamepad':
            return FaGamepad;
        default:
            return FaPersonWalkingLuggage;  
    }
}

export default function SideBarIcon({ iconName, text = 'tooltip ?' }: SideBarIconProps) {
    const Icon = getIconByName(iconName)
    const { state, dispatch} = useContext(ThemeContext)
    const router = useRouter()
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    const handleIconClick = () => {
        switch (Icon) {
            case FaPersonWalkingLuggage:
                router.push('/music'); 
                break;
            
            case TbWorldSearch:
                router.push('/blogs'); 
                break;

            case BsFillLightningFill:
                dispatch({ type: 'CHANGE_THEME' }) 
                const newTheme = state.theme === 'dark' ? 'light' : 'dark'
                if (typeof window !== 'undefined') {
                    localStorage.setItem('theme', newTheme) // Save theme to local storage
                }
                break;

            case FaPoo:
                openModal()
                break;

            case FaGamepad:
                router.push('/games');
                break;

            default:
                break;
        }
    }
    


    return (
        <div onClick={handleIconClick} className={`sidebar-icon group ${iconName === 'BsFillLightningFill' ? 'border border-blue-500 glowing-effect' : ''}`}>
            <Icon />

            <span className="sidebar-tooltip group-hover:scale-100 ">
                {text}
            </span>

            <PopUpModal isVisible={isModalOpen} onClose={closeModal} autoCloseDelay={5000}>
                <div className="p-4">
                    <h2 className="text-xl font-bold">Oh it&apos;s you! huh?</h2>
                    <hr className="border-blue-300 mt-1"/>
                    <div className="mt-2">W hy did you click that? 👁👁 </div>
                    <p>Is your curiosity so high that you couldn&apos;t help but click a button that clearly says &quot;Useless&quot;</p>
                </div>
            </PopUpModal>
        </div>
    )
}