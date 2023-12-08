import { IconType } from "react-icons"
import GamesSideBar from "./GamesSideBar"

import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs'
import { FaFire, FaPoo } from 'react-icons/fa'

const gameIcons: IconType[] = [
    FaFire,
    BsPlus,
    BsFillLightningFill,
    FaPoo,
    BsGearFill,
]

const gameIconsWithText = [
    { icon: FaFire, text: "Fire" },
    { icon: BsPlus, text: "Plus" },
    { icon: BsFillLightningFill, text: "Lightning" },
    { icon: FaPoo, text: "Useless" },
    { icon: BsGearFill, text: "GearGrind" },
]


export default function GamesBar() {
  return (
    <div className="flex">
        <GamesSideBar icons={gameIcons} />
    </div>
  )
}

