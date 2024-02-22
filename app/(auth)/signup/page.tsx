import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export default function SignUp() {
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
          <Button className="w-full bg-[#]">Get Started</Button>
        </div>
      </form>
    </div>
  );
}
