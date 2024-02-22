"use client"

import React from 'react'
import UserInfo from '@/components/profile/UserInfo'

export default function Profile() {
  return (
    <div className="flex flex-col items-center justify-center h-screen sm:h-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl">This here is your profile page</h1>
        
        <div className="w-full sm:w-3/4 lg:w-1/2 xl:w-1/3">
          <UserInfo username={''} email={''} />
        </div>
    </div>
  )
}