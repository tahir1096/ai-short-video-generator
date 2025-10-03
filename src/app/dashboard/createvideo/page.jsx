'use client'
import React, { useState } from "react";
import SelectTopic from './_components/SelectTopic';
import SelectStyle from "./_components/SelectStyle";
import SelectDuration from "./_components/SelectDuration";

function CreateVideo() {
  const [formData, setFormData] = useState({
    topic: "",
    style: "",
    duration: ""
  });

  // ✅ Update formData when user selects options
  const onHandleInputChange = (fieldName, fieldValue) => {
    setFormData(prev => ({ ...prev, [fieldName]: fieldValue }));
  };
  const GetVideoScript=()=> {
    // const result = await axios.post('/api/generate-script')
  }
  // ✅ Create Video handler (Gemini API call)
  const handleCreateVideo = async () => {
    try {
      const res = await fetch("/api/generate-script", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        console.log("Generated script:", data.script);
        alert(`✅ Script Generated:\n\n${data.script}`);
      } else {
        alert(`❌ Error: ${data.error}`);
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Failed to generate script");
    }
  };

  return (
    <div className='md:px-20'>
      <h2 className='font-bold text-4xl text-primary text-center'>
        Create New Video
      </h2>

      <div className='space-y-6'>
        {/* Pass callback so each select updates formData */}
        <SelectTopic oneUserSelect={onHandleInputChange} />
        <SelectStyle oneUserSelect={onHandleInputChange} />
        <SelectDuration oneUserSelect={onHandleInputChange} />

        {/* ✅ Create Video Button */}
        <button
          onClick={handleCreateVideo}
          className='bg-primary text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-primary/90 transition'
        >
          Create Video
        </button>
      </div>
    </div>
  );
}

export default CreateVideo;
