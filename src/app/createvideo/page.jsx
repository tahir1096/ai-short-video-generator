import React from 'react'
import Header from '../dashboard/_components/Header'

function createVideo() {
  return (
    <div>
        <Header/>
                <div className='flex items-center justify-center h-[80vh]'>
            <h1 className='text-3xl font-bold'>Create New Video</h1>
    </div>
    </div>
  )
}

export default createVideo