"use client"

import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa'

export default function LoginForm() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')  
    const [password, setPassword] = useState('')
    // const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState<string[]>([]) 

    const router = useRouter()

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        
        if (!username || !email || !password) {
            setErrors(['Please fill in all fields']);
            return
        }

        try {
            const res = await signIn('credentials', {
                username,
                email,
                password,
                // passwordConfirmation,
                redirect: false,
            })

            if (res && res.error) {
                let errorMessage = ''
                switch (res.error) {
                    case 'CredentialsSignin':
                        errorMessage = 'Invalid username or password'
                        break
                    case 'Server':
                        errorMessage = 'Server error, please try again later'
                        break
                    default:
                        errorMessage = 'An unknown error occurred'
                        
                }
                setErrors([errorMessage])
                return
            }

            router.replace('/profile')

        } catch (error) {
            
        }
        
    }

    return (
        <div className="grid place-items-center h-[80vh] sm:h-[90vh] lg:h-[100vh] ">
            <div className="shadow-md shadow-blue-800 hover:shadow-lg hover:shadow-blue-500 p-5 rounded-lg border-t-4 border-t-blue-500 bg-gray-900 sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold my-4">Enter Sign-In details</h1>

                <form onSubmit={handleSubmit} action="" className="flex flex-col gap-3 items-center">
                    {/* Username */}
                    <div className="relative w-full">
                        <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <input
                        onChange={(e) => setUsername(e.target.value)}
                        className="login-input pl-10 w-full py-2 px-4 bg-gray-800 border border-gray-500 rounded-md focus:outline-none focus:border-blue-500 text-white"
                        type="text"
                        placeholder="User Name"
                        />
                    </div>

                    {/* Email */}
                    <div className="relative w-full">
                        <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="login-input pl-10 w-full py-2 px-4 bg-gray-800 border border-gray-500 rounded-md focus:outline-none focus:border-blue-500 text-white"
                        type="text"
                        placeholder="Email"
                        />
                    </div>

                    {/* Password */}
                    <div className="relative w-full">
                        <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="login-input pl-10 w-full py-2 px-4 bg-gray-800 border border-gray-500 rounded-md focus:outline-none focus:border-blue-500 text-white"
                        type="password"
                        placeholder="Password"
                        />
                    </div>
                    
                    {/* Sign in Button */}
                    <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 hover:text-slate-300 border border-blue-700 active:opacity-30 text-white font-bold cursor-pointer px-6 py-2 rounded-lg">
                        Sign in
                    </button>

                    {/* Error messages */}
                    {errors && (
                        errors.map((error, index) => ( 
                            <div key={index} className="text-red-500 w-fit text-sm py-1 px-3 rounded-md mt-2">{error}</div>
                        )
                    )
                    )}

                    {/* <div className="text-red-500 w-fit text-sm py-1 px-3 rounded-md mt-2">User not found! Please fill in the correct details</div> */}


                    <Link href="/profile/forgot-password" className="text-sm mt-3 text-right text-blue-500 hover:underline">
                        Forgot password?
                    </Link>

                    <Link legacyBehavior href="/profile/register" >
                        <span className="text-sm mt-3 text-right">Don&apos;t have an account? <a className="text-blue-500 hover:underline cursor-pointer"> Register</a></span>
                    </Link>
                </form>
            </div>
        </div>
    )
}
