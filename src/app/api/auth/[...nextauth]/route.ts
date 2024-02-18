import NextAuth from "next-auth/next"
import { SessionStrategy } from "next-auth"
import { authOptions } from "./options"



const handler = NextAuth({
    ...authOptions,
    session: {
        strategy: "jwt" as SessionStrategy,
    },
})
export { handler as GET, handler as POST }