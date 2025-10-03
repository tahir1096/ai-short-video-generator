'use client'

import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../../components/ui/select'

function SelectDuration({ onUserSelect }) {        // 👈 accept the prop from parent
  const [selectedOption, setSelectedOption] = useState('')

  return (
    <div>
      <h2 className="font-bold text-xl text-primary">
        Duration
      </h2>
      <p className="text-gray-500">
        Select the duration of your video
      </p>

      <Select
        onValueChange={(value) => {
          setSelectedOption(value)
          onUserSelect && onUserSelect('duration', value) // ✅ call the parent handler if provided
        }}
      >
        <SelectTrigger className="w-full mt-2 p-4 text-lg">
          <SelectValue placeholder="Select Duration" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="30 Seconds">30 Seconds</SelectItem>
          <SelectItem value="60 Seconds">60 Seconds</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

export default SelectDuration
