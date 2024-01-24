"use client"

import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
// import { Button, TextField } from '@material-ui/core';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // TODO: Implement forgot password logic
    };

    return (
        <div className="flex justify-center  gap-4 bg-gray-700 p-4">
            <h1>Forgot Password</h1>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
                <Button type="submit" variant="contained" color="primary">
                    Reset Password
                </Button>
            </form>
        </div>
    );
};
