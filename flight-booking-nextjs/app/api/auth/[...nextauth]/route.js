import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import Api from "@/Common/Api";
import { use } from "react";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        //   let user = {
        //     "token": "143|7lWV6a152Eqyun9AgTGGjL69vidsNT8fCVlUwOSfcf1dd3b5",
        //     "id": 5,
        //     "user_id": 5,
        //     "name": "krishna ",
        //     "email": "k@gmail.com",
        // };
        // return user

        try {
          const response = await axios.post(Api.Login, {
            email: credentials.email,
            password: credentials.password,
          });

          if (response.data.status === "OK") {
            const user = response.data.data;
            // console.log(user);
            // return user;
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              nsid: user.nsid,
              image: user.image,
              location: user.location,
              token: user.token,
            };
          } else {
            return null;
          }
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (user) {
        return true;
      }
      return false;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.token = token.token;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.token = user.token;
      }
      return token;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) return url;
      else if (url.startsWith("/")) return new URL(url, baseUrl).toString();
      return baseUrl;
    },
  },

  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     console.log("userrrrr", user);
  //     if (user) {
  //       return true;
  //     }
  //     return false;
  //   },
  //   async session({ session, token, user }) {
  //     if (token) {
  //       session.user.id = token.id;
  //       session.user.token = token.token;
  //     }
  //     return session;
  //   },
  //   async jwt({ token, user, account, profile, isNewUser }) {
  //     if (user) {
  //       token.id = user.id;
  //       token.token = user.token;
  //     }

  //     return token;
  //   },
  // },
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
