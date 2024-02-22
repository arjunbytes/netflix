import Image from "next/image";
import React, { ReactNode } from "react";
import AuthBackground from "../../public/authbackground.jpg";
import Logo from "../../public/logo.svg";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={AuthBackground}
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        alt="Background Image"
        priority
        fill
      />
      <Image
        src={Logo}
        width={120}
        height={120}
        className="absolute left-4 top-4 object-contain md:left-10 md:top-6"
        priority
        alt="Logo"
      />
      {children}
    </div>
  );
}
