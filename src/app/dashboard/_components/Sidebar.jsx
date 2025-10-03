'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {
  LayoutDashboard,
  Video,
  CircleUserRound,
  ArrowUpRightSquare
} from 'lucide-react'
function Sidebar() {
  const MenuOption = [
    { id: 1, name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { id: 2, name: 'Create Video', path: '/dashboard/createvideo', icon: Video },
    { id: 3, name: 'Upgrade', path: '/dashboard/upgrade', icon: ArrowUpRightSquare },
    { id: 4, name: 'Account', path: '/dashboard/accounts', icon: CircleUserRound }
  ]

  const path = usePathname()

  return (
    <div className="w-60 h-full bg-gradient-to-b from-indigo-700 via-indigo-800 to-indigo-900 text-white shadow-xl p-5 hidden md:block">
      <div className="grid gap-2">
        {MenuOption.map(item => {
          const Icon = item.icon
          const isActive = path === item.path

          return (
            <Link href={item.path} key={item.id}>
              <div
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200
                  ${
                    isActive
                      ? 'bg-indigo-500 text-white shadow-md'
                      : 'hover:bg-indigo-600 hover:text-white text-indigo-100'
                  }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Sidebar
