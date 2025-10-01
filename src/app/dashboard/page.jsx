"use client";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <div>
      <SignedIn>
        <div>Welcome to your dashboard!</div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
}
