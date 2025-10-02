import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import { Button } from "../../components/ui/button";
import Link from "next/link";
export default function DashboardPage() {
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
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
