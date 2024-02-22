"use client"

import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('')

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        // TODO: Implement forgot password logic
    }

    return (
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 bg-gray-700 p-4 sm:p-6 md:p-8 lg:p-10">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Forgot Password</h1>
            <form onSubmit={handleSubmit} className="w-full sm:w-auto">
                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    fullWidth
                />
                <Button type="submit" variant="contained" color="primary" className="mt-4 w-full sm:w-auto">
                    Reset Password
                </Button>
            </form>
        </div>
    )
}