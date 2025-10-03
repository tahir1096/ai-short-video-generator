import React, { useState } from "react"; 
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "../../../../components/ui/select" 
import { Textarea } from "../../../../components/ui/textarea" 
import { Placeholder } from 'drizzle-orm' 
function SelectTopic({ oneUserSelect }) {   // 👈 accept the prop here
  const options = ['Custom Prompt', 'Random AI Story', 'Scary Story', 'Historical Facts', 'Bed Time Story', 'Motivational','Fun Facts']
  const [selectedOption, setSelectedOption] = useState('')

  return (
    <div>
      <h2 className='font-bold text-xl text-primary'>  {/* fixed textxl → text-xl */}
        Content
      </h2>
      <p className='text-gray-500'>Select the topic of your video</p>

      <Select
        onValueChange={(value) => {
          setSelectedOption(value)
          if (value !== 'Custom Prompt') {
            oneUserSelect('topic', value)   // ✅ call the correct prop
          }
        }}
      >
        <SelectTrigger className="w-full mt-2 p-4 text-lg">
          <SelectValue placeholder="Select Content Type" />
        </SelectTrigger>

        <SelectContent>
          {options.map((item, index) => (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedOption === 'Custom Prompt' && (
        <Textarea className="mt-3" placeholder="Write prompt" />
      )}
    </div>
  )
}

export default SelectTopic
