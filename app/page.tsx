"use client"
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";


export default function Home() {
  return (
   <div className="flex flex-col gap-y-4">
    <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />
        This is sign
      </Authenticated>
   </div>
    
  );
}
