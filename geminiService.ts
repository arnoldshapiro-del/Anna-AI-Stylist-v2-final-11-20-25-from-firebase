import { GoogleGenerativeAI } from "@google/generative-ai";

// DIAGNOSTIC MODE - This will help us see what's happening
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Log diagnostics (will show in browser console)
console.log("=== GEMINI API DIAGNOSTICS ===");
console.log("1. Environment variable name: VITE_GEMINI_API_KEY");
console.log("2. API Key exists:", !!API_KEY);
console.log("3. API Key length:", API_KEY ? API_KEY.length : 0);
console.log("4. API Key starts with:", API_KEY ? API_KEY.substring(0, 10) + "..." : "UNDEFINED");
console.log("5. All Vite env vars:", Object.keys(import.meta.env).filter(key => key.startsWith('VITE_')));
console.log("==============================");

// Validate API key format
if (!API_KEY) {
  console.error("❌ CRITICAL: API Key is undefined or empty!");
  console.error("This means VITE_GEMINI_API_KEY is not set in environment variables");
  console.error("Check Netlify: Site Configuration > Environment Variables");
}

if (API_KEY && !API_KEY.startsWith('AIza')) {
  console.warn("⚠️ WARNING: API Key doesn't start with 'AIza' - this might not be a valid Google AI Studio key");
}

// Initialize with error handling
let genAI: GoogleGenerativeAI | null = null;

try {
  if (API_KEY) {
    genAI = new GoogleGenerativeAI(API_KEY);
    console.log("✅ GoogleGenerativeAI initialized successfully");
  } else {
    console.error("❌ Cannot initialize GoogleGenerativeAI - No API key");
  }
} catch (error) {
  console.error("❌ Error initializing GoogleGenerativeAI:", error);
}

export interface GenerateContentParams {
  prompt: string;
  temperature?: number;
  maxTokens?: number;
}

export async function generateContent({
  prompt,
  temperature = 0.7,
  maxTokens = 1024,
}: GenerateContentParams): Promise<string> {
  console.log("🚀 generateContent called");
  console.log("Prompt length:", prompt.length);
  
  if (!API_KEY) {
    const errorMsg = "API key is not configured. Please set VITE_GEMINI_API_KEY in Netlify environment variables.";
    console.error("❌", errorMsg);
    throw new Error(errorMsg);
  }

  if (!genAI) {
    const errorMsg = "GoogleGenerativeAI not initialized";
    console.error("❌", errorMsg);
    throw new Error(errorMsg);
  }

  try {
    console.log("📡 Calling Gemini API...");
    console.log("Model: gemini-1.5-flash");
    
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      generationConfig: {
        temperature: temperature,
        maxOutputTokens: maxTokens,
      },
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    console.log("✅ API call successful");
    console.log("Response length:", text.length);
    
    return text;
  } catch (error: any) {
    console.error("❌ Error in generateContent:");
    console.error("Error type:", error.constructor.name);
    console.error("Error message:", error.message);
    console.error("Full error:", error);
    
    // Enhanced error messages
    if (error.message?.includes("API key not found") || error.message?.includes("API_KEY_INVALID")) {
      throw new Error(
        "API Key Error: The API key is invalid or not found. " +
        "Please verify: 1) Key is correct in Netlify, 2) You triggered a new deploy, 3) Key starts with 'AIza'"
      );
    }
    
    if (error.message?.includes("404")) {
      throw new Error(
        "Model Not Found: The model 'gemini-1.5-flash' is not available. " +
        "This might be a regional or account issue."
      );
    }
    
    throw new Error(`Gemini API Error: ${error.message || 'Unknown error'}`);
  }
}

// Function to test API connection
export async function testConnection(): Promise<boolean> {
  console.log("🔍 Testing API connection...");
  
  if (!API_KEY) {
    console.error("❌ No API key to test");
    return false;
  }
  
  try {
    const result = await generateContent({ prompt: "Say 'API connection successful' if you can read this." });
    console.log("✅ Connection test passed:", result);
    return true;
  } catch (error) {
    console.error("❌ Connection test failed:", error);
    return false;
  }
}
