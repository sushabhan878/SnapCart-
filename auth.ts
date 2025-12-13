import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import connectDb from "./lib/db"
import User from "./models/user.model"
import bcrypt from "bcryptjs"
import Google from "next-auth/providers/google"
export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password"}
            },
            async authorize(credentials, request) {
                    await connectDb()
                    const email = credentials?.email
                    const password = credentials?.password as string
                    const user = await User.findOne({ email })
                    if (!user) {
                        throw new Error("No user found with the given email")
                    }
                    const isPassMatch = await bcrypt.compare(password, user.password)
                    if (!isPassMatch) {
                        throw new Error("Incorrect password")
                    }
                    
                    return {
                        id: user._id.toString(),
                        email: user.email,
                        name: user.name,
                        role: user.role,
                    }
            }
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === "google") {
                await connectDb()
                let dbUser = await User.findOne({ email: user.email })
                if (!dbUser) {
                    dbUser = await User.create({
                        name: user.name,
                        email: user.email,
                        image: user.image,
                    })
                }
                user.role = dbUser.role,
                user.id = dbUser._id.toString()
            }
            return true
        },
        jwt({token, user}) {
            if(user){
                token.id = user.id;
                token.email = user.email;
                token.name = user.name;
                token.role = user.role;
            }
            return token;
        },
        session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string;
                session.user.name = token.name as string;
                session.user.email = token.email as string;
                session.user.role = token.role as string;
            }
            return session;
        }
    },
    pages: {
        signIn: "/login",
        error: "/login"
    },
    session: {
        strategy: "jwt",
        maxAge: 10*24*60*60*1000, // 10 days
    },
    secret: process.env.AUTH_SECRET,
    
})