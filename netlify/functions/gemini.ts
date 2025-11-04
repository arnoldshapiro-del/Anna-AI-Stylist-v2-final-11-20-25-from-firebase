// netlify/functions/gemini.ts
// Self-contained Netlify function that calls Google's Generative Language REST API directly.
// No npm packages required. Works with GEMINI_API_KEY and optional GEMINI_MODEL env vars.

export const handler = async (event: any) => {
  try {
    const API_KEY =
      process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
    const MODEL = process.env.GEMINI_MODEL || "gemini-2.5-flash";

    if (!API_KEY) {
      return {
        statusCode: 500,
        body: JSON.stringify({
          error: "Missing GEMINI_API_KEY (set in Netlify → Site settings → Environment variables).",
        }),
      };
    }

    // read prompt from POST body
    const body = event.body ? JSON.parse(event.body) : {};
    const prompt = body.prompt || "ping";

    // Google AI Studio REST endpoint (text)
    const url = `https://generativelanguage.googleapis.com/v1/models/${MODEL}:generateContent?key=${API_KEY}`;

    const payload = {
      contents: [
        {
          role: "user",
          parts: [{ text: String(prompt) }],
        },
      ],
    };

    const resp = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await resp.json();

    if (!resp.ok) {
      // Bubble up Google error details so you can see them in the browser console
      return {
        statusCode: resp.status,
        body: JSON.stringify({
          error:
            (data && data.error && data.error.message) ||
            "Gemini request failed",
          meta: data,
        }),
      };
    }

    // Extract text safely
    const text =
      (data.candidates &&
        data.candidates[0] &&
        data.candidates[0].content &&
        Array.isArray(data.candidates[0].content.parts) &&
        data.candidates[0].content.parts
          .map((p: any) => p?.text || "")
          .join("")) ||
      "";

    return {
      statusCode: 200,
      body: JSON.stringify({ text }),
    };
  } catch (err: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: String(err) }),
    };
  }
};
