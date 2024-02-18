import { connectToMongoDB } from '@/libs/mongodb'
import Usermodel from '@/models/db/user'

export default async function(req, res) {
    try {
        await connectToMongoDB()

        const { email } = await req.json()
        const userExists = await Usermodel.findOne({ email }).select("_id")
        console.log("user: ",userExists)

        res.status(200).json({ userExists })

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'An error occurred.' })
    }
}