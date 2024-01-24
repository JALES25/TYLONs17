"use client"

import React, { useState } from 'react'
import Link from 'next/link'

export default function RegisterForm() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // Perform registration logic here
    }

    return (
        <div className="grid place-items-center h-[80vh]">
            <div className="shadow-md shadow-blue-400 hover:shadow-lg hover:shadow-blue-500 p-5 rounded-lg border-t-4 border-t-blue-500 bg-gray-900">
                <h1 className="text-xl font-bold my-4">Register</h1>

                <form action="" className="flex flex-col gap-3">
                    <input className="login-input" type="text" placeholder="User Name" />
                    <input className="login-input" type="text" placeholder="Email" />
                    <input className="login-input" type="password" placeholder="Password" />
                    <button  className="bg-blue-600 hover:bg-blue-700 hover:text-slate-300 border border-blue-700 active:opacity-30 text-white font-bold cursor-pointer px-6 py-2 rounded-lg " >Register</button>

                    <div className="text-red-500 w-fit text-sm py-1 px-3 rounded-md mt-2">User already exists!</div>
                    
                    {/* <Link href="/profile/forgot-password" className="text-sm mt-3 text-right text-blue-500 hover:underline">
                        Forgot password?
                    </Link> */}

                    <Link legacyBehavior href="/profile/login" >
                        <span className="text-sm mt-3 text-right">Already have an account? <a className="text-blue-500 hover:underline"> Sign-In</a></span>
                    </Link>
                </form>
            </div>
        </div>
    )
}

