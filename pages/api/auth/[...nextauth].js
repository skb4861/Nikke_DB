import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'a20aa06347c9188a7684', 
      clientSecret: 'd47902884006792a2f6c53cf19ee5dc4a066b9e8',
    }),
  ],
  secret : 'skb113028',
  adapter : MongoDBAdapter(connectDB)
};
export default NextAuth(authOptions); 