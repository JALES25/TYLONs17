import React from 'react'
import Image from 'next/image'
import { useSession, signOut } from "next-auth/react"
import { FaUserCircle } from 'react-icons/fa'

interface UserInfoProps {
    username: string
    email: string
}

export default function UserInfo ({ username, email } : UserInfoProps)  {
    const { data: session } = useSession() 

    return (
        <div className="grid place-items-center h-screen sm:h-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl">User Info</h2>
            <div className="shodow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6 sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
                <div className="flex items-center justify-center">
                    {session?.user?.image ? (
                        <Image src={session?.user?.image ?? ''} alt={session?.user?.name ?? ''} width={80} height={80} className="rounded-full" />
                    ) : (
                        <FaUserCircle className="h-20 w-20 text-gray-500 sm:h-24 sm:w-24 md:h-28 md:w-28" />
                    )}
                </div>
                <div>
                    <p className="text-sm sm:text-base md:text-lg">Username: <span className="font-bold">{session?.user?.name}</span></p>
                </div>
                <div>
                    <p className="text-sm sm:text-base md:text-lg">Email: <span className="font-bold">{session?.user?.email}</span></p>
                </div>
                <button onClick={() => signOut()} className="bg-red-500 text-white font-bold px-6 py-2 mt-3 ">Log Out</button>
            </div>
        </div>
    )
}
