import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import GithubSignInButton from "@/app/components/GithubSignInButton";
import GoogleSignInButton from "@/app/components/GoogleSignInButton";

export default function Login() {
  return (
    <div className="mt-24 rounded bg-black/75 px-6 py-10 md:mt-0 md:max-w-sm md:px-14">
      <form action="#" method="post">
        <h1 className="text-3xl font-semibold text-white">Login</h1>
        <h1 className="mt-3 text-3l font-light text-white">
          Watch TV Shows Online, Watch Movies Online.
        </h1>
        <div className="space-y-4 mt-5">
          <Input
            type="email"
            className="bg-[#222222] placeholder:text-gray-500 w-full inline-block"
            name="email"
            placeholder="Email"
          />
          <Button
            className="w-full bg-[#e50914]"
            variant="destructive"
            type="submit"
          >
            Log In
          </Button>
        </div>
      </form>
      <p className="text-sm mt-5 text-gray-500">
        Don't Have an Account?{" "}
        <Link className="text-white hover:underline" href="/signup">
          Signup Now
        </Link>
      </p>
      <div className="flex w-full justify-center items-center gap-x-3 mt-6">
      </div>
    </div>
  );
}
