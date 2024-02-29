"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import React from "react";
import { signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserNavigation() {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="ghost" className="relative h-10 w-10 rounded-sm">
            <Avatar className="h-10 w-10 rounded-sm">
              <AvatarImage src="https://gotapqnqjblaxnfdwojq.supabase.co/storage/v1/object/public/user%20profile/profile.png" />
              <AvatarFallback className="rounded-sm">Profile</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          {/* Adjusted usage of DropdownMenuLabel with sample props */}
          <DropdownMenuLabel>
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">User</p>
              <p className="text-xs leading-none text-muted-foreground">
                user@gmail.com
              </p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut()}>
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
