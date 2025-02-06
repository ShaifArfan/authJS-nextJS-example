import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "../../prisma/prisma"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [ 
    Credentials({
     credentials: {
      email: {},
      password: {}
     } ,
     authorize: async (credentials) => {
      const user = await prisma.user.findUnique({
        where: {
          email: credentials?.email as string
        }
      })
       if(user?.password === credentials?.password){ 
        return user;
       }else{
        return null
       }
     }
    })
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth;
    },
  },
  session: {
    strategy: "jwt",
  },
  trustHost: true,
});
