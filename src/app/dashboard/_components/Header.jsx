import { Button } from '../../../components/ui/button'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function Header() {
    return (
        <div className='w-full flex items-center justify-between px-8 py-4 border-b'>
            <div className='flex items-center gap-2'>
                <Image src="/image.png" alt="Logo" width={30} height={30} />
                <h2>Generate AI Videos</h2>
            </div>
            <div className='flex items-center gap-4'>
                <Button>Dashboard</Button>
                <UserButton/>
            </div>
        </div>
    )
}

export default Header