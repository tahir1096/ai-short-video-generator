import React from 'react'
import Header from './_components/Header'
import Sidebar from './_components/Sidebar'

function Layout({ children }) {
  return (
    <div className="h-screen flex flex-col">
      <Header />


      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
