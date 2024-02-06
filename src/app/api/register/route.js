import { NextResponse } from 'next/server'
import { connectMongoDB } from '@/libs/mongodb'
import User from '@/models/db/user'
import bcrypt from 'bcryptjs'


export async function POST(req) {
   try {
        const { name, email, password } = await req.json()

        const hashedPassword = await bcrypt.hash(password, 12)

        await connectMongoDB()

        await User.create({ name, email, password: hashedPassword })

        return NextResponse.json({ message: "User registered."}, { status: 201}).redirect('/login')
    
   } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Something went wrong."}, { status: 500})
    } 
}