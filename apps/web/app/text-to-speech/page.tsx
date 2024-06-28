"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null | undefined>(null);
  const [audioData, setAudioData] = useState<string>(""); // Store audio URL as a string

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleFileUpload = async (e: FormEvent) => {
    e.preventDefault();
    console.log("Starting...");

    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:5050/api/v0.1/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Assuming your API endpoint returns the audio data directly
      const { audioContent } = response.data;

      // Create a Blob URL for the audio content
      const audioBlob = new Blob(
        [new Uint8Array(Buffer.from(audioContent, "base64"))],
        { type: "audio/mp3" }
      );
      const audioUrl = URL.createObjectURL(audioBlob);

      setAudioData(audioUrl); // Update state with the audio URL
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleFileUpload}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {audioData && ( // Check if audioData exists
        <audio controls src={audioData} />
      )}
    </div>
  );
};

export default FileUpload;
