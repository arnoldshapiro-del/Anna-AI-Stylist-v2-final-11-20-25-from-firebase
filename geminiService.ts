import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

if (!API_KEY) {
  console.error("❌ API Key not found! Set VITE_GEMINI_API_KEY in Netlify environment variables");
}

const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

export async function generateContent({ prompt }) {
  if (!API_KEY) {
    throw new Error("API key not configured. Please set VITE_GEMINI_API_KEY in Netlify.");
  }

  if (!genAI) {
    throw new Error("GoogleGenerativeAI not initialized");
  }

  try {
    // CORRECT MODEL NAME - NOT "gemini-1.5-flash-latest"
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash"  // ✅ THIS IS THE RIGHT ONE
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
}
