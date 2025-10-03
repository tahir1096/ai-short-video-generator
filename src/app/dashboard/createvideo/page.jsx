'use client'
import React, { useState } from "react";
import SelectTopic from './_components/SelectTopic'
function createVideo() {
  const [formData, setFormData] =useState();
  const onHandleInputChange = (fileName, fieldValue) => {

  }
  return (
    <div className='md:px-20'>
      <h2 className='font-bold text-4xl text-primary text-center'>
        Create New Video
      </h2>
      <div>
          <SelectTopic />
      </div>

    </div>

  )
}

export default createVideo