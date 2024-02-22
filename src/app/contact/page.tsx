"use client"

import Chatbox from '@/components/icons/Chatbox'
import SocialLinks from '@/components/icons/SocialLinks'

import React from 'react'
import { FaEnvelope, FaMapMarker, FaPhone } from 'react-icons/fa'

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // clearing form fields
    // e.target.elements.name.value = ''
    // e.target.elements.email.value = ''
    // e.target.elements.message.value = ''
  }

  return (
    <section className="border-t-2 border-blue-700 pb-8 bg-gray-900 bg-opacity-50 max-h-full max-w-full" id="contact">
      {/* <h1 className="text-center m-auto py-[2.5em] px-0 font-[300] text-6xl text-blue-600 uppercase tracking-wider">Contact</h1> */}
      <div className="flex flex-col lg:flex-row justify-between mx-auto p-8 relative max-w-7xl ">
        {/* Left contact page */}
        <div className=" text-white text-center mb-8 md:mb-0">
          <p className="text-2xl text-gray-400">
            Have a question or want to get in touch? Feel free to reach out!
          </p>

          <iframe className="absolute top-20 left-0 inset-0 z-[-1]" width="100%" height="100%" frameBorder={0} title="map" marginHeight={0} marginWidth={0} scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Bloemfontein%20Central,%20South%20Africa&ie=UTF8&t=&z=14&iwloc=B&output=embed" 
            style={{filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }} />


          <Chatbox /> 
        </div>

        {/* Right contact page */}
        <div className="max-w-[25em] mx-auto md:mx-0 ">
          <ul className="list-none ml-[-2em] pr-20">
            <li className="leading-4 text-xl flex items-center"><FaMapMarker className="hover:text-blue-500 text-blue-800 scale-150 hover:scale-125 active:text-cyan-400 mb-2" /><span className="font-[300] text-[1em] ml-[2em]">818 Into The Sky</span></li>

            <li className="leading-4 text-xl flex items-center"><FaPhone className="hover:text-blue-500 text-blue-800 scale-150 hover:scale-125 active:text-cyan-400 my-2" /><span className="font-[300] text-[1em] leading-4 ml-[2.2em]"><a className="text-gray-500 hover:text-gray-400" href="tel:0684443922" title="Give me a call">(+27 68) 444-3922</a></span></li>

            <li className="leading-4 text-xl flex items-center"><FaEnvelope className="hover:text-blue-500 text-blue-800 scale-150 hover:scale-125 active:text-cyan-400 my-2" /><span className="font-[300] text-[1em] leading-4 ml-[2.4em]"><a className="text-gray-500 hover:text-gray-400" href="mailto:jalesnotjaque@gmail.com" title="Send me an email">jalesnotjaque@gmail.com</a></span></li>

          </ul>

          <hr className="border-t  border-blue-700 border-opacity-60 my-4" />

          {/* Social Media Icons */}
          <div className="social-media-list relative text-center w-full mx-auto py-4 text-2xl">
            <SocialLinks />
          </div>

          <hr className="border-t  border-blue-700 border-opacity-60"/>

          <div className="copyright p-4 text-center font-bold text-[1.2em] text-blue-600 tracking-wider ">&copy; 2023 TYLONs17&trade;</div>
        </div>
      </div>

      
    </section>
  )
}
