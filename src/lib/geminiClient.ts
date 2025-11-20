// This client handles communication with the Netlify serverless function.
export async function generateText(prompt: string): Promise<{ text: string; isSvg: boolean }> {
  const res = await fetch("/.netlify/functions/gemini", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt })
  });

  // The server now returns a JSON object with an `error` field if something went wrong.
  if (!res.ok) {
    const errorData = await res.json().catch(() => null); // Gracefully handle non-JSON responses
    const errorMessage = errorData?.error || `HTTP error! status: ${res.status}`;
    throw new Error(errorMessage);
  }

  const data = await res.json();
  // The server returns { text, isSvg } on success.
  return {
    text: data.text || "",
    isSvg: data.isSvg || false,
  };
}
