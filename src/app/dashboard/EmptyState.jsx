import Link from 'next/link'
import React from 'react'
import { Button } from "../../components/ui/button";

function EmptyState() {
  return (
    <div className='p-5 py-24 flex items-center justify-center flex-col gap-4'>
        <h2>
            You don't have any videos yet. Click on "Create New" to make your first video!
        </h2>
        <Link href="/dashboard/createvideo">
        <Button>Create New</Button>
        </Link>
    </div>
  )
}

export default EmptyState