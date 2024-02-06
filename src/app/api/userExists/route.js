import { connectMongoDB } from '@/libs/mongoDB'
import User from '@/models/User'
import { NextResponse } from 'next/server'

export default async function POST(req) {
    try {
        await connectMongoDB()

        const { email } = await req.json()
        const userExists = await User.findOne({ email }).select("_id")
        console.log("user: ",userExists)

        return NextResponse.json({ userExists })

    } catch (error) {
        console.log(error)
    }
}