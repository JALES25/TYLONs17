"use client"

import { ThemeContext } from "@/context/ThemeContext"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";

export default function Sidebar({ isOpen, toggle}: { isOpen: boolean; toggle: () => void; }): JSX.Element {
    const { state, dispatch } = useContext(ThemeContext)
    const { currentPage } = state

    const pathname = usePathname()

    useEffect(() => {
        dispatch({ type: 'SET_CURRENT_PAGE', currentPage: pathname })
    }, [pathname, dispatch])

    return (
        <div className={`sidebar-container fixed w-full h-full overflow-hidden justify-center grid pt-[120px] left-0 z-10 bg-sidebar-img bg-cover bg-center bg-no-repeat bg-opacity-50 ${isOpen ? 'opacity-100' : 'opacity-0'} ${isOpen ? 'top-0' : 'top-full'}`}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <button className="absolute right-0 p-5" onClick={toggle}>
                {/* Close icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"> 
                    <path
                    fill="currentColor"
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    />
                </svg>
            </button>

            <ul className="sidebar-nav text-center leading-relaxed text-xl">
                <li>
                    <Link href="/about" >
                        <p onClick={toggle} className={`hover:text-blue-700 active:text-cyan-400 custom-text-shadow  ${currentPage === "/about" ? "text-blue-400 font-semibold  " : " opacity-90 hover:opacity-100" } `}>
                            About Me
                        </p>
                    </Link>
                </li>
                <li>
                    <Link href="/games" >
                        <p onClick={toggle} className={`hover:text-blue-700 active:text-cyan-400 custom-text-shadow  ${currentPage === "/games" ? "text-blue-400 font-semibold  " : " opacity-90 hover:opacity-100" } `}>
                            My Games
                        </p>
                    </Link>
                </li>
                <li>
                    <Link href="/music" >
                        <p onClick={toggle} className={`hover:text-blue-700 active:text-cyan-400 custom-text-shadow  ${currentPage === "/music" ? "text-blue-400 font-semibold  " : " opacity-90 hover:opacity-100" } `}>
                            My Music
                        </p>
                    </Link>
                </li>
                <li>
                    <Link href="/blogs" >
                        <p onClick={toggle} className={`hover:text-blue-700 active:text-cyan-400 custom-text-shadow  ${currentPage === "/blogs" ? "text-blue-400 font-semibold  " : " opacity-90 hover:opacity-100" } `}>
                            My Blogs
                        </p>
                    </Link>
                </li>
                <li>
                    <Link href="/contact" >
                        <p onClick={toggle} className={`hover:text-blue-700 active:text-cyan-400 custom-text-shadow  ${currentPage === "/contact" ? "text-blue-400 font-semibold  " : " opacity-90 hover:opacity-100" } `}>
                            My Contacts
                        </p>
                    </Link>
                </li>
            </ul>
        </div>
    )
}




