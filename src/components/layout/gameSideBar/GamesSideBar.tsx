import SideBarIcon from "./SideBarIcon"

import { IconType } from 'react-icons'


interface GamesSideBarProps {
    // icons: { icon: IconType; text: string }[]  //array of objects with both the icon and text
    icons: IconType[]   // The icons array should contain only the React components for icons(FaFire, BsPlus, etc.)
}   



export default function GamesSideBar({ icons }: GamesSideBarProps) {
  return (
    <div className="fixed top-0 left-0 h-screen w-20 m-0
                    flex flex-col items-center justify-center  
                    bg-primary bg-opacity-50 text-seconday 
                    shadow-md shadow-blue-700">

        {/* {icons.map(({ icon, text}, index) => ( <SideBarIcon key={index} icon={icon} text={text} /> ))} */}
        {icons.map((icon, index) => ( <SideBarIcon key={index} icon={icon} /> ))}
    </div>
  )
}




