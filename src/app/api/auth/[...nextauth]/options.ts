import GitHubProvider, { GithubProfile } from "next-auth/providers/github"
import GoogleProvider, { GoogleProfile } from "next-auth/providers/google"
// TokenSetParameters
import { TokenSet, User, Session } from "next-auth"
import { JWT } from "next-auth/jwt"


import { connectToMongoDB } from "@/libs/mongodb"
import Usermodel from "@/models/db/user"
import CredentialsProvider  from "next-auth/providers/credentials"
import { SessionStrategy } from "next-auth"
import bcrypt from "bcryptjs"


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
                    const user = await Usermodel.findOne({ email, password })

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

        GitHubProvider({
            profile(profile: GithubProfile, tokens: TokenSet) {
                console.log("Profile GitHub: ", profile)

                let userRole = "GitHub User"
                if (profile?.email == "jalesnotjaque@gmail.com") {
                    userRole = "admin"
                }

                return {
                    ...profile,
                    role: userRole,
                    id: profile.id.toString(), 
                }
            },
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
        GoogleProvider({
            profile(profile: GoogleProfile, tokens: TokenSet) {
                console.log("Profile Google: ", profile)

                let userRole = "Google User"
                return {
                    ...profile,
                    id: profile.sub,
                    role: userRole,
                }
            },
            clientId: process.env.GOOGLE_ID ?? "",
            clientSecret: process.env.GOOGLE_SECRET ?? "",
        }),
    ],
    session: {
        strategy: "jwt" as SessionStrategy,
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user }: { token: JWT, user: User | null }) {
            if (user) token.role = (user as User & { role: string }).role
            return token
        },
        async session({ session, token }: { session: Session, token: JWT }) {
            if (session?.user) (session.user as User & { role: string }).role = token.role as string
            return session
        }
    }, 
    pages: {
        signIn: "/profile/login",
        signOut: "/profile",
        error: "/profile/error",
        // verifyRequest: "/auth/verify-request",
        register: "/profile/register",
        NewUser: "/profile/newUser",
    },
    database: process.env.DATABASE_URL,
}