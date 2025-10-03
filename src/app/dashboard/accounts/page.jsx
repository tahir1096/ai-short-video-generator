'use client'

import { useUser, UserButton } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'

export default function AccountPage() {
  const { user, isLoaded } = useUser()
  const [profileData, setProfileData] = useState(null)

  useEffect(() => {
    if (user) {
      // Example: Fetch additional user info from your Neon DB via an API route
      const fetchUserData = async () => {
        try {
          const res = await fetch(`/api/user/${user.id}`)
          if (res.ok) {
            const data = await res.json()
            setProfileData(data)
          }
        } catch (err) {
          console.error('Failed to fetch profile data:', err)
        }
      }
      fetchUserData()
    }
  }, [user])

  if (!isLoaded) return <div className="p-10 text-center">Loading...</div>

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-6 py-10">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 border">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-primary">My Account</h1>
          {/* Clerk's built-in user menu */}
          <UserButton afterSignOutUrl="/" />
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-gray-500 text-sm">Full Name</p>
            <p className="font-semibold text-lg">
              {user.fullName || 'No name set'}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Email Address</p>
            <p className="font-semibold text-lg">
              {user.primaryEmailAddress?.emailAddress || 'No email found'}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">User ID</p>
            <p className="font-mono text-sm">{user.id}</p>
          </div>

          {profileData && (
            <div>
              <p className="text-gray-500 text-sm">Plan</p>
              <p className="font-semibold text-lg">{profileData.plan}</p>
            </div>
          )}
        </div>

        <a
          href="/account/manage"
          className="block mt-8 bg-primary text-white text-center py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
        >
          Manage Account
        </a>
      </div>
    </div>
  )
}
