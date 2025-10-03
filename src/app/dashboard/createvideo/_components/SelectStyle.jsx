'use client'
import Image from 'next/image'
import React, { useState } from 'react'

function SelectStyle({oneUserSelect}) {
    const styleOptions = [
        { name: 'Realistic', image: '/image1.jpg' },
        { name: 'WaterColor', image: '/watercolor.jpg' },
        { name: 'Comic', image: '/comic.jpeg' },
        { name: 'GTA', image: '/gta.jpeg' },
        { name: 'Cartoon', image: '/cartoon.jpeg' },
    ]

    const [selectedOption, setSelectedOption] = useState('')

    return (
        <div className='mt-7'>
            <h2 className='font-bold text-2xl text-primary'>Style</h2>
            <p className='text-gray-500'>Select style for your video</p>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 mt-3'>
                {styleOptions.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => setSelectedOption(item.name)}
                        className={`relative hover:scale-105 transition-transform cursor-pointer rounded-lg overflow-hidden ${selectedOption === item.name ? 'border-4 border-blue-500' : ''
                            }`}
                    >
                        <Image
                            src={item.image}
                            alt={`Preview of ${item.name} style`}
                            width={300}
                            height={200}
                            className="rounded-lg w-full h-48 object-cover"
                        />
                        onClick={() => {

                            setSelectedOption(item.name)
                            onUserSelect('imageStyle', item.name)
                        }}
                        <h2 className='absolute p-1 bg-black bottom-0 w-full text-white text-center'>
                            {item.name}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SelectStyle
