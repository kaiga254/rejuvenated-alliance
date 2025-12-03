import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY;
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
} else {
  console.warn("GEMINI_API_KEY is not set. AI assistant will be disabled.");
}

const SYSTEM_INSTRUCTION = `
You are the virtual assistant for the "Rejuvenated Seniors Alliance". 
Your tone should be warm, respectful, patient, and formal yet accessible. 
Your goal is to assist seniors and their families in understanding the services offered by the alliance.

Key Services to know about:
1. Health & Wellness: Yoga, nutrition workshops, and mobility screenings.
2. Digital Literacy: Classes on using smartphones, tablets, and staying safe online.
3. Legal Advocacy: Help with wills, healthcare directives, and housing rights.
4. Social Events: Weekly tea gatherings, book clubs, and nature walks.

If you do not know an answer, kindly suggest they contact the main office at (555) 123-4567.
Keep answers concise (under 100 words) unless asked for detailed explanations.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!ai) {
    return "The assistant is offline right now because its API key is missing.";
  }
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    if (response.text) {
      return response.text;
    } else {
      return "I apologize, I couldn't generate a response at this moment.";
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Unable to connect to the assistant. Please try again later.");
  }
};