"use client";
import { UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <div>
      <h1>Welcome to the dashboard</h1>
      <UserButton />
    </div>
  );
}
