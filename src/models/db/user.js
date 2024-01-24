import { MongoClient } from 'mongodb'
import bcrypt from 'bcrypt'

export async function verifyPassword(email, password) {
  const client = await MongoClient.connect(process.env.MONGODB_URI)
  const db = client.db()

  const user = await db.collection('users').findOne({ email: email })
  if (!user) {
    return null
  }

  const isValid = await bcrypt.compare(password, user.password)
  if (!isValid) {
    return null
  }

  return { email: user.email }
}

export async function insertNewUser(email, password) {
  const client = await MongoClient.connect(process.env.MONGODB_URI)
  const db = client.db()

  const existingUser = await db.collection('users').findOne({ email: email })
  if (existingUser) {
    return null
  }

  const hashedPassword = await bcrypt.hash(password, 12)

  const result = await db.collection('users').insertOne({
    email: email,
    password: hashedPassword,
  })

  return { email: result.ops[0].email }
}