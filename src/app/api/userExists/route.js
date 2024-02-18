import { connectToMongoDB } from '@/libs/mongodb'
import Usermodel from '@/models/db/user'
import { NextResponse } from 'next/server'

export default async function POST(req) {
    try {
        await connectToMongoDB()

        const { email } = await req.json()
        const userExists = await Usermodel.findOne({ email }).select("_id")
        console.log("user: ",userExists)

        return NextResponse.json({ userExists })

    } catch (error) {
        console.log(error)
    }
}