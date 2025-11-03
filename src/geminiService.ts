import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = API_KEY ? new GoogleGenerativeAI(API_KEY) : null;

export async function generateContent({ prompt }: { prompt: string }): Promise<string> {
  if (!API_KEY || !genAI) {
    throw new Error("API key not configured");
  }

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

// All the AI functions your app needs
export async function generateOutfit(preferences: string): Promise<string> {
  return generateContent({ prompt: `Generate outfit suggestions based on: ${preferences}` });
}

export async function analyzeStyle(description: string): Promise<string> {
  return generateContent({ prompt: `Analyze this style: ${description}` });
}

export async function suggestColorPalette(preferences: string): Promise<string> {
  return generateContent({ prompt: `Suggest a color palette for: ${preferences}` });
}

export async function analyzeTrends(context: string): Promise<string> {
  return generateContent({ prompt: `Analyze fashion trends for: ${context}` });
}

export async function optimizeWardrobe(wardrobe: string): Promise<string> {
  return generateContent({ prompt: `Optimize this wardrobe: ${wardrobe}` });
}

export async function personalShopping(needs: string): Promise<string> {
  return generateContent({ prompt: `Personal shopping advice for: ${needs}` });
}

export async function dressForOccasion(occasion: string): Promise<string> {
  return generateContent({ prompt: `Dress recommendations for: ${occasion}` });
}

export async function mixAndMatch(items: string): Promise<string> {
  return generateContent({ prompt: `Mix and match suggestions for: ${items}` });
}

export async function suggestAccessories(outfit: string): Promise<string> {
  return generateContent({ prompt: `Accessory suggestions for: ${outfit}` });
}

export async function styleForBodyType(bodyType: string): Promise<string> {
  return generateContent({ prompt: `Style advice for body type: ${bodyType}` });
}

export async function suggestSustainableAlternatives(item: string): Promise<string> {
  return generateContent({ prompt: `Sustainable alternatives for: ${item}` });
}

export async function vintageStyleGuide(era: string): Promise<string> {
  return generateContent({ prompt: `Vintage style guide for: ${era}` });
}

export async function matchCelebrityStyle(celebrity: string): Promise<string> {
  return generateContent({ prompt: `Match celebrity style of: ${celebrity}` });
}

export async function planSeasonalWardrobe(season: string): Promise<string> {
  return generateContent({ prompt: `Plan wardrobe for season: ${season}` });
}

export async function analyzeFashionWeek(event: string): Promise<string> {
  return generateContent({ prompt: `Analyze fashion week: ${event}` });
}

export async function budgetStyleAdvice(budget: string): Promise<string> {
  return generateContent({ prompt: `Style advice for budget: ${budget}` });
}

export async function buildWorkWardrobe(profession: string): Promise<string> {
  return generateContent({ prompt: `Build work wardrobe for: ${profession}` });
}

export async function packForTravel(destination: string): Promise<string> {
  return generateContent({ prompt: `Packing advice for: ${destination}` });
}

export async function styleSpecialOccasion(occasion: string): Promise<string> {
  return generateContent({ prompt: `Style for special occasion: ${occasion}` });
}

export async function createCapsuleWardrobe(style: string): Promise<string> {
  return generateContent({ prompt: `Create capsule wardrobe for: ${style}` });
}

export async function analyzeBrandAffinity(brands: string): Promise<string> {
  return generateContent({ prompt: `Analyze brand affinity: ${brands}` });
}

export async function analyzePatternMix(patterns: string): Promise<string> {
  return generateContent({ prompt: `Analyze pattern mixing: ${patterns}` });
}

export async function estimateWardrobeCarbonFootprint(wardrobe: string): Promise<string> {
  return generateContent({ prompt: `Estimate carbon footprint of: ${wardrobe}` });
}

export async function findCelebrityStyleTwin(style: string): Promise<string> {
  return generateContent({ prompt: `Find celebrity style twin for: ${style}` });
}

export async function findThriftedAlternatives(item: string): Promise<string> {
  return generateContent({ prompt: `Find thrifted alternatives for: ${item}` });
}

export async function forecastEventStyle(event: string): Promise<string> {
  return generateContent({ prompt: `Forecast style for event: ${event}` });
}

export async function generateFashionIllustration(description: string): Promise<string> {
  return generateContent({ prompt: `Generate fashion illustration description for: ${description}` });
}

export async function generatePlaylistForOutfit(outfit: string): Promise<string> {
  return generateContent({ prompt: `Generate playlist that matches outfit: ${outfit}` });
}

export async function generateSeamlessPattern(style: string): Promise<string> {
  return generateContent({ prompt: `Generate seamless pattern description for: ${style}` });
}

export async function predictFitForProduct(measurements: string): Promise<string> {
  return generateContent({ prompt: `Predict fit for measurements: ${measurements}` });
}

export async function organizeCloset(items: string): Promise<string> {
  return generateContent({ prompt: `Organize closet with items: ${items}` });
}

export async function rotateCloset(season: string): Promise<string> {
  return generateContent({ prompt: `Rotate closet for season: ${season}` });
}







