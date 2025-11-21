// netlify/functions/gemini.ts
// Multi-purpose Gemini function:
// - Uses gemini-3-pro-preview for high-quality text.
// - Detects "illustration" prompts and returns a generated SVG image string.
// - Returns a standard JSON object { text, isSvg }

const SVG_INSTRUCTIONS = `
TASK: Generate a complete, valid, single-file SVG representing the user\'s prompt.
RULES:
- Return ONLY the SVG code itself.
- DO NOT include the string "svg" anywhere before the opening tag.
- DO NOT wrap the output in Markdown backticks or any other text.
- The SVG should be a single, self-contained file.
- Use a square aspect ratio (e.g., viewBox="0 0 512 512").
- The design should be modern, clean, and visually appealing.
- Embed styles directly in a <style> tag within the SVG.
- Use a rich but tasteful color palette.
- The illustration should be detailed and high-quality.
`;

const TEXT_INSTRUCTIONS = `
You are a world-class AI fashion assistant (Gemini 3 Pro).
Return clear, actionable results. Be concise and use short, scannable bullets.
`;

export const handler = async (event: any) => {
  try {
    const API_KEY =
      process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
    const MODEL = "gemini-3-pro-preview";

    if (!API_KEY) {
      throw new Error(
        "Missing GEMINI_API_KEY. Please set it in your environment variables."
      );
    }

    // Read prompt from POST body
    if (!event.body) {
      throw new Error("Missing request body.");
    }
    const body = JSON.parse(event.body);
    const prompt = body.prompt || "ping";

    // Determine if this is a request for an image or text
    const isImageRequest = String(prompt)
      .toLowerCase()
      .includes("fashion illustration");

    const instructions = isImageRequest ? SVG_INSTRUCTIONS : TEXT_INSTRUCTIONS;
    const fullPrompt = `${instructions}

PROMPT: ${prompt}`;

    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

    const payload = {
      contents: [{ parts: [{ text: fullPrompt }] }],
      generationConfig: {
        // Ensure the output is not prematurely cut off
        maxOutputTokens: 8192,
      },
    };

    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      const errorData = await resp.json();
      const errorMessage =
        errorData?.error?.message || "Gemini API request failed.";
      throw new Error(`[${resp.status}] ${errorMessage}`);
    }

    const data = await resp.json();

    const text =
      data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "// Gemini returned no content.";

    // For SVGs, do a basic check and cleanup
    if (isImageRequest && !text.startsWith("<svg")) {
        // The model failed to follow instructions; return an error SVG
        const errorSvg = `<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><style>text{font-family:sans-serif;font-size:16px;fill:red;text-anchor:middle;dominant-baseline:middle;}</style><text x="256" y="256">Error: AI failed to generate a valid SVG.</text></svg>`;
        return {
            statusCode: 200,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: errorSvg, isSvg: true }),
        };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, isSvg: isImageRequest }),
    };

  } catch (err: any) {
    // Return a structured JSON error that the client can parse
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: `Server error: ${err.message}`,
      }),
    };
  }
};
