// import { IconType } from "react-icons"
import GamesSideBar from "./GamesSideBar"

// import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs'
// import { FaFire, FaPoo } from 'react-icons/fa'
// import { FaPersonWalkingLuggage } from "react-icons/fa6"
// import { TbWorldSearch } from "react-icons/tb"

// const gameIcons: IconType[] = [
//   FaPersonWalkingLuggage,
//   TbWorldSearch,
//   BsFillLightningFill,
//   FaPoo,
//   BsGearFill,
// ]


const gameIconNames: string[] = [
  'FaPersonWalkingLuggage',
  'TbWorldSearch',
  'BsFillLightningFill',
  'FaPoo',
  'BsGearFill',
]



export default function GamesBar() {
  return (
    <div className="flex">
        <GamesSideBar iconNames={gameIconNames} /> 
        
    </div>
  )
}


