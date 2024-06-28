import { Request, Response } from "express";
import fs from "fs";
import pdfParse from "pdf-parse";
import dataUri from "../lib/dataUri";
import { exec } from "child_process"; // Not used in this function
import axios from "axios";

const decodeBase64 = (text: string) => {
  const prefix = "data:text/plain;base64,";
  if (text.startsWith(prefix)) {
    const base64String = text.substring(prefix.length);
    const decodedString = atob(base64String);
    return decodedString;
  } else {
    return "Ok";
  }
};

export const uploadFiles = async (req: Request, res: Response) => {
  // Check if a file is uploaded
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  const file = req.file;
  const fileUri = dataUri(file); // Assuming dataUri returns the correct object

  if (!fileUri.buffer) {
    return res.status(400).send("Invalid file buffer.");
  }

  let text = "";

  if (file.mimetype === "application/pdf") {
    const pdfText = await pdfParse(fileUri.buffer);
    text = pdfText.text;
  } else if (file.mimetype === "text/plain") {
    if (fileUri.content) {
      text = decodeBase64(fileUri.content);
    }
  } else {
    return res.status(400).send("Unsupported file type.");
  }

  console.log("Data - ", text);

  // Consider using environment variables for API keys
  const apiKey = 'AIzaSyD7ES3IQmg8yROQE9LSkolPGzvr2XPFfJE'; // Replace with your actual environment variable name
  const endpoint = `https://texttospeech.googleapis.com/v1beta1/text:synthesize?key=${apiKey}`;
  const payload = {
    audioConfig: {
      audioEncoding: "MP3",
      effectsProfileId: ["small-bluetooth-speaker-class-device"],
      pitch: 0,
      speakingRate: 1,
    },
    input: {
      "text":text,
    },
    voice: {
      languageCode: "en-US",
      name: "en-US-Journey-F",
    },
  };

  const response = await axios.post(endpoint, payload);

  res.status(200).json(response.data);
};