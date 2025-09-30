import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div className="p-8">
      <UserButton />
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome to your protected dashboard! If you see this, Clerk auth is working.</p>
    </div>
  );
}
