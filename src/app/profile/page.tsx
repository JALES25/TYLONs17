"use client"

import React from 'react'
import UserInfo from '@/components/profile/UserInfo'

export default function Profile() {
  return (
    <div>
        <h1>This here is your profile page</h1>
        
        <div>
          <UserInfo username={''} email={''} />
        </div>
    </div>
  )
}
