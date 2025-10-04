"use client";
import { useState } from "react";

export default function CreateScript() {
  const [topic, setTopic] = useState("");
  const [style, setStyle] = useState("");
  const [duration, setDuration] = useState("");
  const [script, setScript] = useState("");
  const [loading, setLoading] = useState(false);

  const generateScript = async () => {
    setLoading(true);
    setScript("");

    const res = await fetch("/api/generate-script", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic, style, duration }),
    });

    const data = await res.json();
    setScript(data.script);
    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Script Generator</h1>

      <input
        type="text"
        placeholder="Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        className="border p-2 w-full mb-3"
      />

      <input
        type="text"
        placeholder="Style (e.g., funny, serious, educational)"
        value={style}
        onChange={(e) => setStyle(e.target.value)}
        className="border p-2 w-full mb-3"
      />

      <input
        type="text"
        placeholder="Duration (e.g., 2 minutes)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        className="border p-2 w-full mb-3"
      />

      <button
        onClick={generateScript}
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Script"}
      </button>

      {script && (
        <div className="mt-6 bg-gray-100 p-4 rounded">
          <h2 className="font-bold mb-2">Generated Script:</h2>
          <pre className="whitespace-pre-wrap">{script}</pre>
        </div>
      )}
    </div>
  );
}
