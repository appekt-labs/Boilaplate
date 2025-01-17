import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import LinkedInProvider from "next-auth/providers/linkedin";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { Users } from "@/db/schemas";
import bcrypt from 'bcryptjs';
console.log("private", process.env.GITHUB_SECRET);

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "johndoe@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password123",
        },
      },
      async authorize(credentials, req) {
        try {

          if (!credentials) {
            return null;
          }
          //check if the user exists in the database

          const checkUser = await Users.findOne({ email: credentials.email });

          if (!checkUser) {
            return null;
          }
          console.log("This is the user undercheck", checkUser)
          //check if the password is correct
          if (!checkUser.password || !bcrypt.compareSync(credentials.password, checkUser.password)) {
            return null
          }


          return {
            id: checkUser._id,
            email: checkUser.email,
            name: checkUser.name,
          }
        } catch (error) {
          console.log("This is the error", error)
          return null
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID!,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ account, profile }) {
      // pass this test if profile is crendetnials
      if (account?.provider === "credentials") {
        console.log("Credentials provider")
        //check if the user exists
        console.log("profile in the signIn function", profile)
        console.log("account being handled", account)
        const checkUser = await Users.findById(account.providerAccountId)

        console.log("Inside signIn, and this is the checkUser", checkUser)
        //if no user
        if (!checkUser) {
          return false;
        }

        return true
      }


      if (!profile?.email) {
        throw new Error("No email in the user profile");
      }
      const user = await Users.findOne({ email: profile.email });

      if (!user) {
        //  create a user
        const newUser = new Users();
        if (profile.email) newUser.email = profile.email;
        if (profile.name) newUser.name = profile.name;
        if (profile.image) newUser.image = profile.image;
        if (account?.picture) newUser.image = account.picture;
        await newUser.save();
      }

      return true;
    },
    async session({ session, token }: any) {
      session.user.id = token.id

      return session
    },
    async jwt({ token, user, account, profile }) {
      if (profile) {
        const user = await Users.findOne({
          email: profile.email,
        });
        if (!user) {
          throw new Error("No user found");
        }
        token.id = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth/signin"
  }
};

// export default NextAuth(authOptions);

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
