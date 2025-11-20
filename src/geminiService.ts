// src/geminiService.ts
// Main service layer that connects the UI to the Gemini client.
// It ensures that all AI function calls from the UI are consistently handled.

import { generateText } from "./lib/geminiClient";

// A default user profile to use as a fallback if the UI provides no input.
const DEFAULT_PROFILE = `
- Style: Classic, modern, minimalist
- Climate: Temperate
- Budget: Mid-range ($50-$200 per item)
- Body Type: Athletic
- Preferences: Prefers natural fabrics, versatile pieces, and neutral color palettes.
`;

// Base instructions prepended to every text-based prompt to guide the AI'''s response format.
const BASE_INSTRUCTIONS = `
As a world-class AI fashion assistant, provide clear, concise, and actionable advice.
Use short, scannable bullet points. For lists, limit to 3-7 items.
Focus on describing cuts, fabrics, and features rather than specific product links.
`;

// Helper to create a consistent, structured prompt for the Gemini API.
async function ask(prompt: unknown, featureLabel: string): Promise<any> {
  const resolvedPrompt = (String(prompt).trim() || DEFAULT_PROFILE);
  const fullPrompt = `${BASE_INSTRUCTIONS}
TASK: ${featureLabel}
INPUT:
${resolvedPrompt}
`;
  return generateText(fullPrompt);
}

// Specific handler for generating fashion illustrations (SVG images).
export async function generateFashionIllustration({ prompt }: { prompt?: string }): Promise<any> {
    // This prompt is specifically crafted to trigger the SVG generation logic in the backend.
    const illustrationPrompt = `fashion illustration of ${prompt}`;
    return generateText(illustrationPrompt);
}

// --- Exported AI Functions (called by App.tsx) ---

export async function generateOutfit({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Create a complete outfit plan with reasoning (top, bottom, footwear, outer layer, 1-2 accessories).");
}

export async function analyzeStyle({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Analyze current style. Provide 3 strengths, 3 opportunities, and 5 quick upgrade suggestions.");
}

export async function suggestColorPalette({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Suggest a cohesive color palette (core + accents) and provide 3 sample outfits using it.");
}

export async function analyzeTrends({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Summarize relevant fashion trends that fit the user'''s profile and describe how to wear them minimally.");
}

export async function optimizeWardrobe({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Provide a wardrobe optimization plan (Keep / Tailor / Donate / Acquire lists) with brief reasons.");
}

export async function personalShopping({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Create a personal shopping plan by priority. For each category, list fit, fabric, and what to avoid.");
}

export async function dressForOccasion({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Suggest two outfit options for the specified occasion (Option A: conservative, Option B: stylish).");
}

export async function mixAndMatch({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Create a mix-and-match matrix: 5 tops x 3 bottoms x 2 shoes, and list 6 strong combinations.");
}

export async function suggestAccessories({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Recommend an accessory capsule (watch, belt, bag, etc.) with 1-2 options for each item.");
}

export async function styleForBodyType({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Provide body-type-aware styling guidance, including best silhouettes and fit checks.");
}

export async function suggestSustainableAlternatives({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Suggest sustainable fashion swaps, including fabrics to prefer, durability checks, and care tips.");
}

export async function vintageStyleGuide({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Create a vintage style guide, identifying key eras and 5 staple pieces with modernization tips.");
}

export async function matchCelebrityStyle({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Translate a celebrity look into accessible options, identifying 3 key elements and budget alternatives.");
}

export async function planSeasonalWardrobe({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Plan a seasonal capsule wardrobe (max 12 pieces) and show 8 outfit examples.");
}

export async function analyzeFashionWeek({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Provide insights from Fashion Week: 4 relevant trends and one practical way to try each.");
}

export async function budgetStyleAdvice({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Create a budget strategy (where to spend vs. save) and a 3-month purchasing schedule.");
}

export async function buildWorkWardrobe({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Plan a work wardrobe based on dress code, including essentials and a rotation plan.");
}

export async function packForTravel({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Create a travel packing list for a carry-on, including items and 6 complete outfits.");
}

export async function styleSpecialOccasion({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Plan a special-occasion outfit with an accessory map and an optional backup plan.");
}

export async function createCapsuleWardrobe({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Design a capsule wardrobe (max 20 items) with item roles and 10 outfit examples.");
}

export async function analyzeBrandAffinity({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "List 6 brands that match the user'''s style/budget with a one-line reason for each.");
}

export async function analyzePatternMix({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Provide rules for pattern mixing and 3 safe starter combinations.");
}

export async function estimateWardrobeCarbonFootprint({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Estimate wardrobe carbon footprint at a high level and suggest 5 reduction tactics.");
}

export async function findCelebrityStyleTwin({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Identify a celebrity style twin and suggest what to borrow from their look.");
}

export async function findThriftedAlternatives({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Provide a thrift search strategy, including keywords, fabrics, and condition checks.");
}

export async function forecastEventStyle({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Forecast event style based on season/location, providing 2 looks with weather adjustments.");
}

export async function generatePlaylistForOutfit({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Generate a music playlist (12-15 tracks) that matches the outfit'''s mood.");
}

export async function generateSeamlessPattern({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Create a brief for a seamless pattern, including motif, scale, colorway, and use-cases.");
}

export async function predictFitForProduct({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Predict the fit of a product and highlight the 3 most important measurements/return risks.");
}

export async function organizeCloset({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Provide a closet organization plan (zones, hang vs. fold) and tips for 5-minute resets.");
}

export async function rotateCloset({ prompt }: { prompt?: string }): Promise<any> {
  return ask(prompt, "Create a closet rotation schedule by season and wear frequency.");
}
