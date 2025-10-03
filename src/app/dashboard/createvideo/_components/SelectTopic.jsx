'use client'

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select"
import { Textarea } from "../../../../components/ui/textarea"
import { Placeholder } from 'drizzle-orm'
function SelectTopic() {
  const options = ['Custom Prompt', 'Random AI Story', 'Scary Story', 'HIstorical Facts', 'Bed Time Story', 'Motivational','Fun Facts']
  const [selectedOption, setSelectedOption] = useState('')
  return (
    <div>
      <h2 className='font-bold textxl text-primary'>
        Content
      </h2>
      <p className='text-gray-500'>Select the topic of your video </p>
      <Select onValueChange={(value)=> {
        setSelectedOption(value)
        value != 'Custom Prompt' && onUserSelect('topic', value)
      }}>
        <SelectTrigger className="w-full mt-2 p-4 text-lg">
          <SelectValue placeholder="Select Content Type" />
        </SelectTrigger>
        <SelectContent>
          {options.map((items, index)=> (
            <SelectItem key={index} value={items}>{items}</SelectItem>))}
        </SelectContent>
      </Select>
      {selectedOption == 'Custom Prompt'&& 
      <Textarea className="mt-3 " 
      placeholder= 'Write prompt ' />
      }
    </div>
  )
}

export default SelectTopic