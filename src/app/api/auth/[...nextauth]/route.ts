import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions: any = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        // Login: { label: "Username", type: "text", placeholder: "jsmith" },
        // Password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        // Add logic here to look up the user from the credentials supplied

        // if (!credentials.password || !credentials.username) {
        //   return null;
        // }

        const user: any = await prisma.tAdmin.findFirst({
          where: {
            Login: credentials.Login,
            Password: credentials.Password,
          },
          select: {
            ID: true,
            StaffCode: true,
            StaffFName: true,
            StaffLName: true,
            Login: true,
            Password: true,
            UserLevel: true,
            UserType: true,
            UserActivate: true,
            UserDate: true,
            BoardStaff: true,
            MemberID: true,
          },
        });

        //const user: any= { id: 1, name: "J Smith", email: "jsmith@example.com" };
        console.log("user==", user);

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
          // return {
          //   id: "1",

          //   Login: "smith",
          //   name: "tom",
          //   email: "smith@example.com",

          //   password: "123456",
          // };
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return Promise.resolve(null);

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
        return null;
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      //session.id = token.id;
      session.jwt = token.jwt;
      session.user.Login = token.Login; /* added */
      session.user.ID = token.ID; /* added */
      session.user.StaffFName = token.StaffFName; /* added */
      session.user.StaffLName = token.StaffLName; /* added */
      session.user.Login = token.Login; /* added */
      session.user.Password = token.Password; /* added */
      session.user.UserLevel = token.UserLevel; /* added */
      session.user.MemberID = token.MemberID; /* added */
      return Promise.resolve(session);
    },
    jwt: async ({ token, user }) => {
      if (user) {
        //token.id = user.id;
        token.jwt = user.jwt;
        token.ID = user.ID; /* added */
        token.Login = user.Login; /* added */
        token.StaffFName = user.StaffFName; /* added */
        token.StaffLName = user.StaffLName; /* added */
        token.Password = user.Password; /* added */
        token.UserLevel = user.UserLevel; /* added */
        token.MemberID = user.MemberID; /* added */
      }
      return Promise.resolve(token);
    },
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
