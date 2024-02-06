// import GitHubProvider, { GithubProfile } from "next-auth/providers/github"
// import GoogleProvider, { GoogleProfile } from "next-auth/providers/google"
// import { TokenSetParameters, TokenSet, User, Session } from "next-auth"
// import { JWT } from "next-auth/jwt";

// export const options = {
//     providers: [
//         GitHubProvider({
//             profile(profile: GithubProfile, tokens: TokenSet) {
//                 console.log("Profile GitHub: ", profile)

//                 let userRole = "GitHub User"
//                 if (profile?.email == "jalesnotjaque@gmail.com") {
//                     userRole = "admin"
//                 }

//                 return {
//                     ...profile,
//                     role: userRole,
//                     id: profile.id.toString(), // Convert the id to string
//                 }
//             },
//             clientId: process.env.GITHUB_ID ?? "",
//             clientSecret: process.env.GITHUB_SECRET ?? "",
//         }),
//         GoogleProvider({
//             profile(profile: GoogleProfile, tokens: TokenSet) {
//                 console.log("Profile Google: ", profile)

//                 let userRole = "Google User"
//                 return {
//                     ...profile,
//                     id: profile.sub,
//                     role: userRole,
//                 }
//             },
//             clientId: process.env.GOOGLE_ID ?? "",
//             clientSecret: process.env.GOOGLE_SECRET ?? "",
//         }),
//     ],
//     callbacks: {
//         async jwt({ token, user }: { token: JWT, user: User | null }) {
//             if (user) token.role = (user as User & { role: string }).role
//             return token
//         },
//         async session({ session, token }: { session: Session, token: JWT }) {
//             if (session?.user) (session.user as User & { role: string }).role = token.role as string
//             return session
//         }
//     }, 
//     pages: {
//         signIn: "/auth/signin",
//         signOut: "/auth/signout",
//         error: "/auth/error",
//         verifyRequest: "/auth/verify-request",
//         newUser: null,
//     },
//     database: process.env.DATABASE_URL,
// }
