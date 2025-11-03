import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  console.error("❌ API Key not found!");
}

const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

export async function generateContent({ prompt }) {
  if (!API_KEY || !genAI) {
    throw new Error("API key not configured");
  }

  try {
    // Using gemini-pro - the most basic and stable model
    const model = genAI.getGenerativeModel({ 
      model: "gemini-pro"
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}
