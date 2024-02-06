"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function RegisterForm() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')  
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState<string[]>([]) 

    const router = useRouter()


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        let errors = []
        
        if (username === '' || email === '' || password === '' || passwordConfirmation === '') {
            errors.push('Please fill in all fields')
        }

        if (username.length < 3) {
            errors.push('Username must be at least 8 charecters long')
        }

        if (email.length < 8 || !email.includes('@') || !email.includes('.')) {
            errors.push('Enter a valid email address')
        }

        if (password.length < 8) {
            errors.push('Password must be at least 8 characters long')
        }

        if (password !== passwordConfirmation) {
            errors.push('Passwords do not match')
        }

        if (errors.length > 0) {
            setErrors(errors)
            return
        }

        try {

            const resUserExists = await fetch('/api/auth/userExists', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email })
            })

            const { userExists } = await resUserExists.json()

            if (userExists) {
                setErrors(['User already exists'])
                return
            }


            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password, passwordConfirmation })
            })

            if (!res.ok) {
                const data = await res.json()
                setErrors([data.message])

                router.push('/profile/login')
            }
        } catch (error) {
            setErrors(['An error occurred. Please try again.'])
            console.log("Error occured during registration: ", error)
        }
    }

    return (
        <div className="grid place-items-center h-[80vh]">
            <div className="shadow-md shadow-blue-400 hover:shadow-lg hover:shadow-blue-500 p-5 rounded-lg border-t-4 border-t-blue-500 bg-gray-900">
                <h1 className="text-xl font-bold my-4">Register</h1>

                <form onSubmit={handleSubmit} action="" className="flex flex-col gap-3">
                    <input onChange={(e) => setUsername(e.target.value)} className="login-input" type="text" placeholder="User Name" />
                    <input onChange={e => setEmail(e.target.value)} className="login-input" type="text" placeholder="Email" />
                    <input onChange={(e) => setPassword(e.target.value)} className="login-input" type="password" placeholder="Password" />
                    <input onChange={e => setPasswordConfirmation(e.target.value)} className="login-input" type="password" placeholder="Confirm Password" />
                    <button  className="bg-blue-600 hover:bg-blue-700 hover:text-slate-300 border border-blue-700 active:opacity-30 text-white font-bold cursor-pointer px-6 py-2 rounded-lg " >Register</button>

                    {errors.length > 0 && (
                        <div className="text-red-500 w-fit text-sm py-1 px-3 rounded-md mt-2">
                            {errors.map((error, index) => (
                                <div key={index}>{error}</div>
                            ))}
                        </div>
                    )}

                    {/* {errors && (
                        errors.map((error, index) => ( 
                            <div key={index} className="text-red-500 w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>
                        ))
                    )} */}


                    <Link legacyBehavior href="/profile/login" >
                        <span className="text-sm mt-3 text-right">Already have an account? <a className="text-blue-500 hover:underline"> Sign-In</a></span>
                    </Link>
                </form>
            </div>
        </div>
    )
}

