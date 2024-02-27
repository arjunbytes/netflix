"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Google from "../../public/google.svg";
import Image from "next/image";

export default function GoogleSignInButton() {
  return (
    <Button onClick={() => signIn("google")} variant="outline" size="icon">
      <Image src={Google} alt="Google Icon" />
    </Button>
  );
}
