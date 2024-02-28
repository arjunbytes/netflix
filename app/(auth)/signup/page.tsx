import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Google from "../../../public/google.svg";
import Github from "../../../public/github.svg";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";

export default async function SignUp() {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/home");
  } else {
    return (
      <div className="mt-24 rounded bg-black/75 px-6 py-10 md:mt-0 md:max-w-sm md:px-14">
        <form action="#" method="post">
          <h1 className="text-3xl font-semibold text-white">
            Unlimited movies, TV shows and more
          </h1>
          <h1 className="mt-3 text-3l font-light text-white">
            Watch anywhere. Cancel anytime.
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
              Get Started
            </Button>
          </div>
        </form>
        <p className="text-sm mt-5 text-gray-500">
          Already Have an Account?{" "}
          <Link className="text-white hover:underline" href="/login">
            Login Now
          </Link>
        </p>
        <div className="flex w-full justify-center items-center gap-x-3 mt-6">
          <Button variant="outline" size="icon">
            <Image src={Google} alt="Google Icon" />
          </Button>
          <Button variant="outline" size="icon">
            <Image src={Github} alt="Google Icon" />
          </Button>
        </div>
      </div>
    );
  }
}
