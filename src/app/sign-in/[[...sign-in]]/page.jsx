'use client';

import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-white to-gray-100">
      {/* Card */}
      <div className="w-full max-w-4xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Left: Image */}
      <div className="hidden md:flex w-1/2 bg-gray-50 items-center justify-center">
          <Image
            src="/login.png"
            alt="Login illustration"
            width={400}
            height={400}
            className="rounded-xl object-contain"
            priority
          />
        </div>

        {/* Right: Sign-In Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Welcome 👋
          </h1>
          <p className="text-gray-500 mb-6 text-center">
            Sign in to access your dashboard
          </p>
          <div className="flex justify-center">
            <SignIn
              appearance={{
                elements: {
                  formButtonPrimary:
                    'bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg',
                  formFieldInput:
                    'rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-400',
                },
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
