import { connectToMongoDB } from "@/libs/mongodb"
import User from "@/models/db/user"
import { register } from "module"
import NextAuth from "next-auth/next"
import CredentialsProvider  from "next-auth/providers/credentials"
import { SessionStrategy } from "next-auth"
import bcrypt from "bcryptjs"
import NewUser from "@/app/profile/newUser/page"




export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials, req) {
                // const user = { id: "1" }
                const { email, password } = credentials as { email: string, password: string }

                try {
                    await connectToMongoDB()
                    const user = await User.findOne({ email, password })

                    if (!user) {
                        return null
                    }

                    const isPasswordValid = await bcrypt.compare(password, user.password)

                    if (!isPasswordValid) {
                        return null
                    }

                    return user

                } catch (error) {
                    console.log("Error: ", error)
                }
            },
        }),
    ],
    session: {
        strategy: "jwt" as SessionStrategy,
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/profile/login",
        signOut: "/profile",
        error: "/auth/error",
        // verifyRequest: "/auth/verify-request",
        register: "/profile/register",
        NewUser: "/profile/newUser",
    },
}


const handler = NextAuth({
    ...authOptions,
    session: {
        strategy: "jwt" as SessionStrategy,
    },
})
export { handler as GET, handler as POST }