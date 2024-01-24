"use client"

import { useState } from "react"
import SocialLinks from "../icons/SocialLinks"


export default function Resume() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalOpacity, setModalOpacity] = useState(0)

    const openModal = () => {
        setIsModalOpen(true)
        setTimeout(() => setModalOpacity(1), 0)
    }

    const closeModal = () => {
        setModalOpacity(0)
        setTimeout(() => setIsModalOpen(false), 500)
    }

    return (
        <div className="bg-gray-500 bg-opacity-60">
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                    <div className="col-span-4 sm:col-span-3">
                        <div className="bg-gray-600 bg-opacity-70 shadow rounded-lg p-6">
                            <div className="flex flex-col items-center">
                                <img onClick={openModal} src="./images/20230914_133438-JALES.jpg" className="w-32 h-32 bg-blue-300 rounded-full mb-4 object-cover cursor-pointer"/>

                                {isModalOpen && (
                                    <div onClick={closeModal} className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-500 ease-in-out">
                                        <img src="./images/20230914_133438-JALES.jpg" className="max-h-full max-w-full" />
                                    </div>
                                )}

                                <h1 className="text-xl font-bold">Joshua Ngoako Modiba</h1>
                                <p className="text-blue-500">Software/Front-End Developer </p>
                                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                    <a href="/contact" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contact</a>
                                    <a href="public/images/CV Dec23-ME.pdf" target="_blank" className="bg-gray-300 hover:bg-gray-400 text-blue-500 py-2 px-4 rounded">Resume</a>
                                </div>
                            </div>
                            <hr className="my-6 border-t border-blue-700" />
                            <div className="flex flex-col">
                                <span className="text-blue-500 uppercase font-bold tracking-wider mb-2">Front-End Skills</span>
                                <ul>
                                    <li className="mb-2">JavaScript</li>
                                    <li className="mb-2">React / Next.js</li>
                                    <li className="mb-2">Node.js</li>
                                    <li className="mb-2">HTML/CSS</li>
                                    <li className="mb-2">Sass Scss</li>
                                    <li className="mb-2">Tailwind Css</li>
                                    <li className="mb-2">Boodstrap Css</li>
                                </ul>
                            </div>

                            <div className="flex flex-col">
                                <span className="text-blue-500 uppercase font-bold tracking-wider mb-2">Extra Skills</span>
                                <ul>
                                    <li className="mb-2">C#</li>
                                    <li className="mb-2">ASP.NET Core MVC</li>
                                    <li className="mb-2">ASP.NET Core Blazor</li>
                                    <li className="mb-2">PYTHON</li>
                                    <li className="mb-2">JAVA</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 sm:col-span-9">
                        <div className="bg-gray-600 bg-opacity-70 shadow rounded-lg p-6">
                            <h2 className="text-xl font-bold mb-4">About Me - <span className="text-sm text-blue-500">A student self learning Web Delopment while studying a computer networking Uni course</span></h2>
                            <p className="text-blue-500">
                                <span className="font-bold">Here's a quick reflecton of my  personality and aspirations </span>
                                <br />
                                <span>
                                    --- <br />

                                    Hello there! I go by <i className="font-bold">TYLONs</i>. <br />
                                    I'm a passionate computer networking student with a keen interest in mastering the intricacies of JavaScript, C#, Python, and Java. <br /> 
                                    My journey into the world of programming doesn't stop there – I'm also delving into the realms of web development with HTML, CSS, and React, with a particular focus on the Next.js Framework.

                                    Recently, I made the exciting discovery of going into Cyber-Security and a turn to Ubuntu as my operating system, and I've come to appreciate the power and efficiency of the terminal and all the easily accessable Networking and PenTesting tools available at a mere command. 
                                    <br />
                                    It's not just a change in a hobby or OS; it's a shift in perspective.

                                    <br />
                                    <br />
                                    When I'm not immersed in lines of code, you can find me Lyric writing or doing Muai Thai at the gym and sometimes exploring the latest trends in technology, always eager to apply myself, learn and adapt. Join me on this digital adventure as I navigate the vast landscapes of Programming, Networking and Cyber-Security.
                                    <br />
                                    <br />
                                    Let's connect and build something amazing together! <br />

                                    ---
                                </span>

                            </p>

                            <hr className="my-6 border-t border-blue-700" />

                            <h3 className="font-semibold text-center mt-3 -mb-2">
                                Find me on
                            </h3>
                            
                            <SocialLinks />

                            <hr className="my-6 border-t border-blue-700" />


                            {/* <h2 className="text-xl font-bold mt-6 mb-4">Experience</h2>
                            <div className="mb-6">
                                <div className="flex justify-between flex-wrap gap-2 w-full">
                                    <span className="text-blue-500 font-bold">Web Developer</span>
                                    <p>
                                        <span className="text-blue-500 mr-2">at ABC Company</span>
                                        <span className="text-blue-500">2017 - 2019</span>
                                    </p>
                                </div>
                                <p className="mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                                    tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                    suscipit.
                                </p>
                            </div>
                            <div className="mb-6">
                                <div className="flex justify-between flex-wrap gap-2 w-full">
                                    <span className="text-blue-500 font-bold">Web Developer</span>
                                    <p>
                                        <span className="text-blue-500 mr-2">at ABC Company</span>
                                        <span className="text-blue-500">2017 - 2019</span>
                                    </p>
                                </div>
                                <p className="mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                                    tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                    suscipit.
                                </p>
                            </div>
                            <div className="mb-6">
                                <div className="flex justify-between flex-wrap gap-2 w-full">
                                    <span className="text-blue-500 font-bold">Web Developer</span>
                                    <p>
                                        <span className="text-blue-500 mr-2">at ABC Company</span>
                                        <span className="text-blue-500">2017 - 2019</span>
                                    </p>
                                </div>
                                <p className="mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                                    tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                    suscipit.
                                </p>
                            </div> */}




                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
