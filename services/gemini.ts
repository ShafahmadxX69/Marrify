
import { GoogleGenAI } from "@google/genai";

// Fixed: Correctly initialize GoogleGenAI with named parameter apiKey from process.env
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export class GeminiService {
  /**
   * Suggests songs based on a theme and mood using Gemini 3 Flash.
   */
  async suggestSong(theme: string, mood: string): Promise<string> {
    try {
      // Fixed: Use ai instance with direct model and content parameter
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `I'm attending Alex and Sam's wedding. I want to suggest a song that fits the theme "${theme}" and the mood "${mood}". Give me 3 song recommendations in a conversational tone.`,
        config: {
          temperature: 0.7,
        },
      });
      // Fixed: response.text is a property, not a method
      return response.text || "Sorry, I couldn't come up with suggestions right now.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "The AI DJ is currently taking a break. Please try again later!";
    }
  }

  /**
   * Generates a heartfelt wedding wish.
   */
  async generateWeddingWish(name: string, relationship: string): Promise<string> {
    try {
      // Fixed: Use ai instance with direct model and content parameter
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Write a short, heart-felt wedding message for Alex and Sam from their ${relationship}, ${name}. Keep it sweet and musical-themed.`,
      });
      // Fixed: response.text is a property, not a method
      return response.text || "Best wishes to the happy couple!";
    } catch (error) {
       console.error("Gemini Error:", error);
       return "Wishing you a lifetime of happiness!";
    }
  }
}

export const geminiService = new GeminiService();
