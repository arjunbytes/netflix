"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.svg";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import UserNavigation from "./UserNavigation";

interface navlinkProps {
  name: string;
  href: string;
}

const navlinks: navlinkProps[] = [
  { name: "Home", href: "/home" },
  { name: "Movies", href: "/home/movies" },
  { name: "TV Shows", href: "/home/tvshows" },
  { name: "Recently Added", href: "/home/recent" },
  { name: "My List", href: "/home/user/list" },
];

export default function Navbar() {
  const pathName = usePathname();
  return (
    <div className="w-full flex max-w-7xl mx-auto items-center justify-between px-5 sm:px-6 lg:px-8 py-5">
      <div className="flex items-center">
        <Link href="/home" className="w-32">
          <Image src={Logo} alt="Netflix" priority />
        </Link>
        <ul className="lg:flex gap-x-4 ml-14 hidden">
          {navlinks.map((link, idx) => (
            <div key={idx}>
              {pathName === link.href ? (
                <li>
                  <Link
                    href={link.href}
                    className="text-sm text-white font-semibold underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    className="text-gray-300 font-normal text-sm"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-x-8">
        <Search className="w-5 h-5 text-gray-300 cursor-pointer" />
        <Bell className="w-5 h-5 text-gray-300 cursor-pointer" />
        <UserNavigation />
      </div>
    </div>
  );
}
