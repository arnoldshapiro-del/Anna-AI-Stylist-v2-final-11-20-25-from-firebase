import { generateText } from "./lib/geminiClient";

// Main function that all features use
export async function generateContent({ prompt }: { prompt: string }): Promise<string> {
  return generateText(prompt);
}

// All the AI functions your app needs - now using the secure wrapper
export async function generateOutfit(preferences: string): Promise<string> {
  return generateText(`Generate outfit suggestions based on: ${preferences}`);
}

export async function analyzeStyle(description: string): Promise<string> {
  return generateText(`Analyze this style: ${description}`);
}

export async function suggestColorPalette(preferences: string): Promise<string> {
  return generateText(`Suggest a color palette for: ${preferences}`);
}

export async function analyzeTrends(context: string): Promise<string> {
  return generateText(`Analyze fashion trends for: ${context}`);
}

export async function optimizeWardrobe(wardrobe: string): Promise<string> {
  return generateText(`Optimize this wardrobe: ${wardrobe}`);
}

export async function personalShopping(needs: string): Promise<string> {
  return generateText(`Personal shopping advice for: ${needs}`);
}

export async function dressForOccasion(occasion: string): Promise<string> {
  return generateText(`Dress recommendations for: ${occasion}`);
}

export async function mixAndMatch(items: string): Promise<string> {
  return generateText(`Mix and match suggestions for: ${items}`);
}

export async function suggestAccessories(outfit: string): Promise<string> {
  return generateText(`Accessory suggestions for: ${outfit}`);
}

export async function styleForBodyType(bodyType: string): Promise<string> {
  return generateText(`Style advice for body type: ${bodyType}`);
}

export async function suggestSustainableAlternatives(item: string): Promise<string> {
  return generateText(`Sustainable alternatives for: ${item}`);
}

export async function vintageStyleGuide(era: string): Promise<string> {
  return generateText(`Vintage style guide for: ${era}`);
}

export async function matchCelebrityStyle(celebrity: string): Promise<string> {
  return generateText(`Match celebrity style of: ${celebrity}`);
}

export async function planSeasonalWardrobe(season: string): Promise<string> {
  return generateText(`Plan wardrobe for season: ${season}`);
}

export async function analyzeFashionWeek(event: string): Promise<string> {
  return generateText(`Analyze fashion week: ${event}`);
}

export async function budgetStyleAdvice(budget: string): Promise<string> {
  return generateText(`Style advice for budget: ${budget}`);
}

export async function buildWorkWardrobe(profession: string): Promise<string> {
  return generateText(`Build work wardrobe for: ${profession}`);
}

export async function packForTravel(destination: string): Promise<string> {
  return generateText(`Packing advice for: ${destination}`);
}

export async function styleSpecialOccasion(occasion: string): Promise<string> {
  return generateText(`Style for special occasion: ${occasion}`);
}

export async function createCapsuleWardrobe(style: string): Promise<string> {
  return generateText(`Create capsule wardrobe for: ${style}`);
}

export async function analyzeBrandAffinity(brands: string): Promise<string> {
  return generateText(`Analyze brand affinity: ${brands}`);
}

export async function analyzePatternMix(patterns: string): Promise<string> {
  return generateText(`Analyze pattern mixing: ${patterns}`);
}

export async function estimateWardrobeCarbonFootprint(wardrobe: string): Promise<string> {
  return generateText(`Estimate carbon footprint of: ${wardrobe}`);
}

export async function findCelebrityStyleTwin(style: string): Promise<string> {
  return generateText(`Find celebrity style twin for: ${style}`);
}

export async function findThriftedAlternatives(item: string): Promise<string> {
  return generateText(`Find thrifted alternatives for: ${item}`);
}

export async function forecastEventStyle(event: string): Promise<string> {
  return generateText(`Forecast style for event: ${event}`);
}

export async function generateFashionIllustration(description: string): Promise<string> {
  return generateText(`Generate fashion illustration description for: ${description}`);
}

export async function generatePlaylistForOutfit(outfit: string): Promise<string> {
  return generateText(`Generate playlist that matches outfit: ${outfit}`);
}

export async function generateSeamlessPattern(style: string): Promise<string> {
  return generateText(`Generate seamless pattern description for: ${style}`);
}

export async function predictFitForProduct(measurements: string): Promise<string> {
  return generateText(`Predict fit for measurements: ${measurements}`);
}

export async function organizeCloset(items: string): Promise<string> {
  return generateText(`Organize closet with items: ${items}`);
}

export async function rotateCloset(season: string): Promise<string> {
  return generateText(`Rotate closet for season: ${season}`);
}


