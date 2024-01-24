
import SideBarIcon from "./SideBarIcon"


import { IconType } from 'react-icons'



interface GamesSideBarProps {
    // icons: { icon: IconType; text: string }[]  //array of objects with both the icon and text
    icons: IconType[]   // The icons array should contain only the React components for icons(FaFire, BsPlus, etc.)
}   

const iconNames: { [key: string]: string } = {
  FaPersonWalkingLuggage: "Begin Trippers Walk",
  TbWorldSearch: "Explore?",
  BsFillLightningFill: "Lightning",
  FaPoo: "Useless", 
  BsGearFill: "GearGrind",
}


export default function GamesSideBar({ icons }: GamesSideBarProps) {
  console.log(icons)

  return (
    <div className="fixed top-0 left-0 h-screen w-20 m-0
                    flex flex-col items-center justify-center  
                  bg-primary bg-opacity-50 text-seconday 
                    shadow-md shadow-blue-700">

        {icons.map((icon, index) => (
          <SideBarIcon key={index} icon={icon} text={iconNames[icon.name] || ""} />
        ))}
    </div>
  )
}




