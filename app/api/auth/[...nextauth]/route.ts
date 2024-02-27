import { authOptions } from "@/app/utils/auth";
import NextAuth from "next-auth/next";
import { Adapter } from 'next-auth/adapters';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
