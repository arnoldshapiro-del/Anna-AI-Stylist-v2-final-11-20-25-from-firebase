import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

// =================================================================
// ALL 73 AI FUNCTIONS (INCLUDING 10 MISSING FEATURES)
// =================================================================

// 1. Outfit Generation & Styling
export async function generateOutfit(occasion: string, style: string): Promise<string> {
  const prompt = `Generate a complete outfit suggestion for ${occasion} in ${style} style. Include specific clothing items, colors, and accessories.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 2. Style Analysis
export async function analyzeStyle(description: string): Promise<string> {
  const prompt = `Analyze this fashion style: ${description}. Provide insights about the aesthetic, key elements, and styling suggestions.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 3. Color Coordination
export async function suggestColorPalette(baseColor: string, season: string): Promise<string> {
  const prompt = `Suggest a complementary color palette for ${baseColor} perfect for ${season}. Include hex codes and styling tips.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 4. Trend Forecasting
export async function analyzeTrends(year: number, category: string): Promise<string> {
  const prompt = `Analyze fashion trends for ${year} in the ${category} category. Include emerging styles, popular colors, and key pieces.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 5. Wardrobe Optimization
export async function optimizeWardrobe(items: string[]): Promise<string> {
  const prompt = `Given these wardrobe items: ${items.join(', ')}. Suggest how to optimize the wardrobe, identify gaps, and create versatile combinations.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 6. Personal Shopping Assistant
export async function personalShopping(preferences: string, budget: string): Promise<string> {
  const prompt = `Act as a personal shopper for someone with these preferences: ${preferences} and budget: ${budget}. Suggest specific items to purchase.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 7. Occasion-Based Dressing
export async function dressForOccasion(event: string, weatherType: string): Promise<string> {
  const prompt = `Suggest the perfect outfit for ${event} when the weather is ${weatherType}. Include clothing, shoes, and accessories.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 8. Mix and Match
export async function mixAndMatch(tops: string[], bottoms: string[]): Promise<string> {
  const prompt = `Given these tops: ${tops.join(', ')} and bottoms: ${bottoms.join(', ')}, suggest creative outfit combinations with styling tips.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 9. Accessory Pairing
export async function suggestAccessories(outfitDescription: string): Promise<string> {
  const prompt = `For this outfit: ${outfitDescription}, suggest the perfect accessories including jewelry, bags, shoes, and other items.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 10. Body Type Styling
export async function styleForBodyType(bodyType: string, goals: string): Promise<string> {
  const prompt = `Provide styling advice for ${bodyType} body type with these goals: ${goals}. Include flattering cuts, patterns, and styling tips.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 11. Sustainable Fashion
export async function suggestSustainableAlternatives(item: string): Promise<string> {
  const prompt = `Suggest sustainable and eco-friendly alternatives for ${item}. Include brands, materials, and environmental impact information.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 12. Vintage Styling
export async function vintageStyleGuide(era: string, modernTwist: boolean): Promise<string> {
  const prompt = `Create a vintage style guide for ${era} fashion${modernTwist ? ' with a modern twist' : ''}. Include key pieces and styling tips.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 13. Celebrity Style Match
export async function matchCelebrityStyle(styleDescription: string): Promise<string> {
  const prompt = `Based on this style description: ${styleDescription}, suggest which celebrities have similar styles and how to recreate their looks.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 14. Seasonal Wardrobe Planning
export async function planSeasonalWardrobe(season: string, climate: string): Promise<string> {
  const prompt = `Create a comprehensive wardrobe plan for ${season} in a ${climate} climate. Include essential items and layering strategies.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 15. Fashion Week Insights
export async function analyzeFashionWeek(city: string, year: number): Promise<string> {
  const prompt = `Analyze key trends and standout moments from ${city} Fashion Week ${year}. Include top designers and must-have pieces.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 16. Budget Styling
export async function budgetStyleAdvice(budget: number, needs: string): Promise<string> {
  const prompt = `Provide styling advice for a $${budget} budget for these needs: ${needs}. Include specific recommendations and shopping strategies.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 17. Work Wardrobe Builder
export async function buildWorkWardrobe(industry: string, style: string): Promise<string> {
  const prompt = `Build a professional work wardrobe for the ${industry} industry in ${style} style. Include essentials and outfit combinations.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 18. Travel Fashion Packing
export async function packForTravel(destination: string, duration: number): Promise<string> {
  const prompt = `Create a fashion packing list for ${duration} days in ${destination}. Include versatile pieces and outfit combinations.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 19. Special Occasion Styling
export async function styleSpecialOccasion(eventType: string, theme: string): Promise<string> {
  const prompt = `Suggest styling for ${eventType} with theme: ${theme}. Include outfit, hair, makeup, and accessory recommendations.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 20. Wardrobe Capsule Creation
export async function createCapsuleWardrobe(pieces: number, style: string): Promise<string> {
  const prompt = `Design a ${pieces}-piece capsule wardrobe in ${style} style. List each item and explain how they work together.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 21. Fashion History Education
export async function teachFashionHistory(topic: string): Promise<string> {
  const prompt = `Provide an educational overview of ${topic} in fashion history. Include key designers, movements, and cultural impact.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 22. Pattern and Print Mixing
export async function mixPatterns(patterns: string[]): Promise<string> {
  const prompt = `Provide expert advice on mixing these patterns: ${patterns.join(', ')}. Include do's and don'ts and successful combinations.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 23. Formal Event Dressing
export async function dressFormalEvent(formality: string, gender: string): Promise<string> {
  const prompt = `Suggest appropriate attire for ${formality} level formal event for ${gender}. Include specific garments and etiquette tips.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 24. Athleisure Styling
export async function styleAthleisure(activity: string): Promise<string> {
  const prompt = `Create athleisure outfit suggestions for ${activity}. Balance style and functionality.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 25. Fashion Emergency Fixes
export async function fixFashionEmergency(problem: string): Promise<string> {
  const prompt = `Provide quick solutions for this fashion emergency: ${problem}. Include practical tips and alternative ideas.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 26. Street Style Analysis
export async function analyzeStreetStyle(location: string): Promise<string> {
  const prompt = `Analyze current street style trends in ${location}. Include key pieces, styling techniques, and how to incorporate them.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 27. Minimalist Wardrobe Design
export async function designMinimalistWardrobe(lifestyle: string): Promise<string> {
  const prompt = `Design a minimalist wardrobe for ${lifestyle} lifestyle. Focus on versatile, timeless pieces.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 28. Plus Size Fashion Advice
export async function plusSizeStyling(occasion: string): Promise<string> {
  const prompt = `Provide empowering plus size fashion advice for ${occasion}. Include brands, styling tips, and confidence-boosting suggestions.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 29. Men's Fashion Guide
export async function mensFashionGuide(style: string, age: number): Promise<string> {
  const prompt = `Create a men's fashion guide for ${style} style for age ${age}. Include essentials and styling tips.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 30. Women's Fashion Guide
export async function womensFashionGuide(style: string, occasion: string): Promise<string> {
  const prompt = `Create a women's fashion guide for ${style} style perfect for ${occasion}. Include outfit ideas and accessories.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 31. Kids' Fashion Advice
export async function kidsFashion(age: number, activity: string): Promise<string> {
  const prompt = `Suggest practical and stylish kids' fashion for age ${age} for ${activity}. Balance style, comfort, and durability.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 32. Fashion Brand Recommendations
export async function recommendBrands(style: string, priceRange: string): Promise<string> {
  const prompt = `Recommend fashion brands for ${style} style in ${priceRange} price range. Include both popular and emerging brands.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 33. Shoe Selection Guide
export async function selectShoes(occasion: string, outfit: string): Promise<string> {
  const prompt = `Suggest the perfect shoes for ${occasion} to match this outfit: ${outfit}. Include style, color, and heel height recommendations.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 34. Bag Selection Guide
export async function selectBag(purpose: string, style: string): Promise<string> {
  const prompt = `Recommend the ideal bag for ${purpose} in ${style} style. Include size, features, and styling tips.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 35. Jewelry Styling
export async function styleJewelry(neckline: string, occasion: string): Promise<string> {
  const prompt = `Suggest jewelry styling for ${neckline} neckline for ${occasion}. Include necklaces, earrings, and other accessories.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 36. Hat and Headwear Guide
export async function selectHeadwear(season: string, faceShape: string): Promise<string> {
  const prompt = `Recommend hats and headwear for ${season} that flatter ${faceShape} face shape. Include styling suggestions.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 37. Scarf Styling Techniques
export async function styleScarves(type: string, weather: string): Promise<string> {
  const prompt = `Demonstrate creative ways to style ${type} scarves in ${weather} weather. Include tying techniques and outfit pairings.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 38. Belt Selection and Styling
export async function styleBelts(outfit: string, bodyType: string): Promise<string> {
  const prompt = `Advise on belt selection and styling for this outfit: ${outfit} for ${bodyType} body type.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 39. Eyewear Fashion
export async function selectEyewear(faceShape: string, style: string): Promise<string> {
  const prompt = `Recommend eyewear for ${faceShape} face shape in ${style} style. Include both prescription and sunglasses.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 40. Watch Styling
export async function selectWatch(occasion: string, style: string): Promise<string> {
  const prompt = `Recommend the perfect watch for ${occasion} in ${style} style. Include features and outfit pairings.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 41. Fabric and Material Guide
export async function explainFabrics(fabric: string, uses: string): Promise<string> {
  const prompt = `Explain ${fabric} fabric: its properties, best uses for ${uses}, care instructions, and styling considerations.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 42. Clothing Care Tips
export async function careInstructions(item: string, material: string): Promise<string> {
  const prompt = `Provide detailed care instructions for ${item} made of ${material}. Include washing, drying, storage, and stain removal.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 43. Alterations Advice
export async function suggestAlterations(item: string, issue: string): Promise<string> {
  const prompt = `Suggest alterations for ${item} with this issue: ${issue}. Include what's possible and estimated complexity.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 44. Fashion Photography Tips
export async function fashionPhotoTips(setting: string): Promise<string> {
  const prompt = `Provide fashion photography tips for ${setting}. Include posing, lighting, and composition advice.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 45. Personal Brand Styling
export async function developPersonalBrand(profession: string, personality: string): Promise<string> {
  const prompt = `Help develop a personal fashion brand for ${profession} with ${personality} personality. Include signature style elements.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 46. Makeup and Fashion Coordination
export async function coordinateMakeupFashion(outfit: string, event: string): Promise<string> {
  const prompt = `Coordinate makeup with this outfit: ${outfit} for ${event}. Include color schemes and style recommendations.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 47. Hair and Fashion Coordination
export async function coordinateHairFashion(style: string, outfit: string): Promise<string> {
  const prompt = `Suggest hairstyles for ${style} fashion style when wearing: ${outfit}. Include styling techniques.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 48. Nail Art and Fashion
export async function coordinateNailsFashion(outfit: string, season: string): Promise<string> {
  const prompt = `Suggest nail art and colors to complement this outfit: ${outfit} for ${season} season.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 49. Perfume and Fashion Pairing
export async function pairPerfumeFashion(style: string, occasion: string): Promise<string> {
  const prompt = `Suggest perfume notes and fragrances to complement ${style} fashion style for ${occasion}.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 50. Fashion for Different Climates
export async function styleForClimate(climate: string, lifestyle: string): Promise<string> {
  const prompt = `Provide comprehensive fashion advice for ${climate} climate with ${lifestyle} lifestyle. Include year-round wardrobe essentials.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 51. Maternity Fashion
export async function maternityStyle(trimester: number, occasion: string): Promise<string> {
  const prompt = `Suggest stylish and comfortable maternity fashion for trimester ${trimester} for ${occasion}. Include practical and fashionable options.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 52. Gender-Neutral Fashion
export async function genderNeutralStyle(occasion: string): Promise<string> {
  const prompt = `Create gender-neutral fashion suggestions for ${occasion}. Focus on inclusive, versatile styling.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 53. Fashion for Different Ages
export async function ageAppropriateFashion(age: number, style: string): Promise<string> {
  const prompt = `Provide age-appropriate fashion advice for age ${age} in ${style} style. Balance trends with timeless elegance.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 54. Fashion Confidence Building
export async function buildFashionConfidence(concerns: string): Promise<string> {
  const prompt = `Provide confidence-building fashion advice for someone concerned about: ${concerns}. Include empowering styling tips.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 55. DIY Fashion Projects
export async function suggestDIYProject(skill: string, item: string): Promise<string> {
  const prompt = `Suggest a DIY fashion project for ${skill} skill level to create/customize ${item}. Include materials and steps.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 56. Upcycling Fashion Ideas
export async function upcycleClothing(item: string, condition: string): Promise<string> {
  const prompt = `Provide creative upcycling ideas for ${item} in ${condition} condition. Transform it into something new and stylish.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 57. Fashion Shopping Strategies
export async function shoppingStrategy(goal: string, budget: number): Promise<string> {
  const prompt = `Create a shopping strategy for ${goal} with $${budget} budget. Include timing, stores, and smart shopping tips.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 58. Online Shopping Guide
export async function onlineShoppingAdvice(category: string, tips: string): Promise<string> {
  const prompt = `Provide online shopping guidance for ${category} focusing on: ${tips}. Include sizing, returns, and finding deals.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 59. Second-Hand Fashion
export async function thriftShoppingGuide(looking: string, location: string): Promise<string> {
  const prompt = `Guide for thrift shopping for ${looking} in ${location}. Include what to look for and styling vintage finds.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 60. Luxury Fashion Investment
export async function investmentPieces(category: string, budget: number): Promise<string> {
  const prompt = `Recommend luxury investment pieces in ${category} with up to $${budget}. Focus on timeless value and quality.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 61. Fashion Rental Services
export async function rentalFashionGuide(occasion: string): Promise<string> {
  const prompt = `Provide guidance on using fashion rental services for ${occasion}. Include benefits and recommended services.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 62. Closet Organization
export async function organizeCloset(size: string, items: number): Promise<string> {
  const prompt = `Provide closet organization strategies for ${size} closet with approximately ${items} items. Include storage solutions.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 63. Seasonal Closet Rotation
export async function rotateCloset(fromSeason: string, toSeason: string): Promise<string> {
  const prompt = `Guide for rotating closet from ${fromSeason} to ${toSeason}. Include storage tips and transition pieces.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// ===== THE 10 MISSING AI FEATURES (64-73) =====

// 64. Analyze Brand Affinity
export async function analyzeBrandAffinity(brands: string[], preferences: string): Promise<string> {
  const prompt = `Analyze my affinity for these brands: ${brands.join(', ')} based on these preferences: ${preferences}. Identify my favorite brands, explain why they match my style, and suggest similar brands I might love.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 65. Analyze Pattern Mix
export async function analyzePatternMix(patterns: string[], colors: string[]): Promise<string> {
  const prompt = `Analyze mixing these patterns: ${patterns.join(', ')} with these colors: ${colors.join(', ')}. Provide expert pattern mixing rules, successful combinations, and creative suggestions.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 66. Estimate Wardrobe Carbon Footprint
export async function estimateWardrobeCarbonFootprint(items: string[], materials: string[]): Promise<string> {
  const prompt = `Estimate the carbon footprint of a wardrobe containing: ${items.join(', ')} made from: ${materials.join(', ')}. Include environmental impact, sustainability scores, and recommendations for reducing carbon footprint.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 67. Find Celebrity Style Twin
export async function findCelebrityStyleTwin(styleDescription: string, preferences: string[]): Promise<string> {
  const prompt = `Find celebrity style twins based on this style: ${styleDescription} and preferences: ${preferences.join(', ')}. Identify celebrities with similar aesthetics and explain how to recreate their signature looks.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 68. Find Thrifted Alternatives
export async function findThriftedAlternatives(item: string, budget: number, location: string): Promise<string> {
  const prompt = `Find sustainable thrifted alternatives for ${item} with budget: $${budget} in ${location}. Include where to look, what to search for, and styling tips for vintage finds.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 69. Forecast Event Style
export async function forecastEventStyle(eventType: string, date: string, trends: string[]): Promise<string> {
  const prompt = `Forecast the trending style for ${eventType} on ${date} based on these current trends: ${trends.join(', ')}. Predict what will be popular and provide outfit suggestions.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 70. Generate Fashion Illustration
export async function generateFashionIllustration(description: string, style: string): Promise<string> {
  const prompt = `Create a detailed description for a fashion illustration of: ${description} in ${style} illustration style. Include pose, details, colors, and artistic elements.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 71. Generate Playlist for Outfit
export async function generatePlaylistForOutfit(outfit: string, mood: string, genre: string): Promise<string> {
  const prompt = `Generate a music playlist that matches this outfit: ${outfit} with ${mood} mood in ${genre} genre. Include song titles and artists that complement the fashion vibe.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 72. Generate Seamless Pattern
export async function generateSeamlessPattern(theme: string, colors: string[], style: string): Promise<string> {
  const prompt = `Design a seamless fashion pattern based on ${theme} theme using colors: ${colors.join(', ')} in ${style} style. Describe the pattern design, motifs, and how it can be used in fashion.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// 73. Predict Fit for Product
export async function predictFitForProduct(measurements: string, item: string, brand: string): Promise<string> {
  const prompt = `Predict the fit for someone with measurements: ${measurements} for ${item} from ${brand}. Include size recommendations, fit analysis, and styling suggestions.`;
  const result = await model.generateContent(prompt);
  return result.response.text();
}

// =================================================================
// HELPER FUNCTION
// =================================================================
export async function callGeminiAPI(prompt: string): Promise<string> {
  try {
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw new Error('Failed to get AI response. Please check your API key.');
  }
}
