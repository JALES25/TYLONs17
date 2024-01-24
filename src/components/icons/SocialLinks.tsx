import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa"
// import { TfiYoutube } from "react-icons/tfi"

export default function SocialLinks() {
  return (
    <div className="flex justify-center items-center gap-6 my-6">
        <a className="hover:text-blue-500 text-blue-800 scale-150 hover:scale-125"  aria-label="Visit github.com/JALES25" href="https://github.com/JALES25"
            target="_blank">
            <FaGithub className="text-2xl" />
        </a>
        <a className="hover:text-blue-500 text-blue-800 scale-150 hover:scale-125 active:text-cyan-400"  aria-label="Visit Joshua Ngoako Modiba LinkedIn" href="https://www.linkedin.com/in/joshua-modiba-kami16?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank">
            <FaLinkedin className="text-2xl"/>
        </a>
        <a className="hover:text-blue-500 text-blue-800 scale-150 hover:scale-125 active:text-cyan-400"  aria-label="Visit JALESnotJAQUE YouTube" href="https://youtube.com/jalesnotjaque@gmail.com"
            target="_blank">
            <FaYoutube className="text-2xl"/>
        </a>
        <a className="hover:text-blue-500 text-blue-800 scale-150 hover:scale-125 active:text-cyan-400"  aria-label="Visit Joshua Ngoako Modiba Facebook" href="https://facebook.com/Josue_mdb"
            target="_blank">
            <FaFacebook className="text-2xl"/>
        </a>
        <a className="hover:text-blue-500 text-blue-800 scale-150 hover:scale-125 active:text-cyan-400"  aria-label="Visit TYLONs17 Instagram" href="https://instagram.com/tylons_mdb"
            target="_blank">
            <FaInstagram className="text-2xl"/>
        </a>
        <a className="hover:text-blue-500 text-blue-800 scale-150 hover:scale-125 active:text-cyan-400"  aria-label="Visit Josue_mdb Twitter" href="https://twitter.com/Josue_mdb"
            target="_blank">
            <FaTwitter className="text-2xl"/>
        </a>
    </div>
  )
}
