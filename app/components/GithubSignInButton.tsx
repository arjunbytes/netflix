"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Github from "../../public/github.svg";
import Image from "next/image";

export default function GithubSignInButton() {
  return (
    <Button onClick={() => signIn("github")} variant="outline" size="icon">
      <Image src={Github} alt="Google Icon" />
    </Button>
  );
}
