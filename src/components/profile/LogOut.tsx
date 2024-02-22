"use client"

import { signOut } from 'next-auth/react'


export default function LogOut() {



    return (
        <div className="grid place-items-center h-[80vh] sm:h-[90vh] lg:h-[100vh]">
            <div className="shadow-lg shadow-blue-500 p-8 bg-zinc-300/10 flex flex-col gap-2 my-6 sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
                <div>
                    Name: <span className="text-blue-500">Anonymous</span>
                </div>
                <div>
                    Email: <span className="text-blue-500">Anonymous@email.com</span>
                </div>
                <button onClick={() => signOut()} className="bg-red-500 active:opacity-30">Log Out</button>
            </div>

        </div>
    )
}