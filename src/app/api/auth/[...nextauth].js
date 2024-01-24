import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import bcrypt from 'bcrypt'
import { verifyPassword, insertNewUser } from '../../../db/user'

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const user = await verifyPassword(credentials.email, credentials.password)
        if (!user) {
          throw new Error('No user found')
        }
        return { email: user.email }
      },
    }),
  ],
})