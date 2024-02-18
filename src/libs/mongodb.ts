import mongoose from 'mongoose'
import { MongoClient } from 'mongodb'


export async function connectToMongoDB() {
    const uri = process.env.MONGODB_URI
    const client = new MongoClient(uri ?? '')

    try {
        await client.connect()
        console.log('Connected to MongoDB')



        // Perform database operations here

        // res.status(200).json({ message: 'Connected to MongoDB' })

    } catch (error) {
        console.error('Error connecting to MongoDB:', error)
        // res.status(500).json({ message: 'Error connecting to MongoDB' })
    } finally {
        await client.close()
        console.log('Disconnected from MongoDB')
    }
}

// connectToMongoDB()
