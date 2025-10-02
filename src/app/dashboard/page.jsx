'use client'
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import { Button } from "../../components/ui/button";
import Link from "next/link";
import { useState } from "react";
import EmptyState from "./EmptyState";
export default function DashboardPage() {
const [videoList] = useState([]);

  return (
    <>
      <SignedIn>
      <div className="w-full flex items-center justify-between px-8 py-4 border-b">
        <h2 className="font-bold text-2xl text-primary">Dashboard</h2>
       <Link href="/dashboard/createvideo">
        <Button>
          + Create New
        </Button>
       </Link>
      </div>
      {videoList?.length === 0 && <div>
        <EmptyState/></div>}
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
