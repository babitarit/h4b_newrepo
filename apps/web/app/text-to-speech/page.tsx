"use client";
import axios from "axios";
import React, { ChangeEvent, FormEvent, useState } from "react";

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null | undefined>(null);
  const [audioData, setAudioData] = useState<string>("");

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

        `${process.env.NEXT_PUBLIC_BACKENDURL}/api/v0.1/upload`,

        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );


      const { audioContent } = response.data;


      const audioBlob = new Blob(
        [new Uint8Array(Buffer.from(audioContent, "base64"))],
        { type: "audio/mp3" }
      );
      const audioUrl = URL.createObjectURL(audioBlob);

      setAudioData(audioUrl);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (

    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleFileUpload} className="border p-8 rounded-md">
        <input type="file" onChange={handleFileChange} />
        <button type="submit" className="border p-2 rounded-md  bg-indigo-600  text-white hover:bg-indigo-700">Upload</button>
      </form>
      {audioData && (
        <audio controls src={audioData} />
      )}
    </div>
  );
};

export default FileUpload;
