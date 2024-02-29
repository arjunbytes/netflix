"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Facebook from "../../public/facebook.svg";
import Image from "next/image";

export default function FacebookSignInButton() {
  return (
    <Button onClick={() => signIn("facebook")} variant="outline" size="icon">
      <Image src={Facebook} alt="Facebook Icon" />
    </Button>
  );
}
