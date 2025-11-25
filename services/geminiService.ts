import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { Product } from '../types';

const apiKey = process.env.API_KEY || '';
// Initialize once. In a real app, handle missing key gracefully.
const ai = new GoogleGenAI({ apiKey });

export const getStylingAdvice = async (product: Product, query: string): Promise<string> => {
  if (!apiKey) {
    return "AI styling service is currently unavailable (API Key missing).";
  }

  try {
    const modelId = 'gemini-2.5-flash';
    const prompt = `
      You are an expert high-end fashion stylist for Lumina Apparel.
      The user is looking at a product named "${product.name}".
      Description: ${product.description}.
      Category: ${product.category}.
      
      User Question: ${query}
      
      Provide a concise, sophisticated, and helpful answer (under 80 words). 
      Suggest what to wear it with or when to wear it. 
      Tone: Professional, chic, minimal, like a luxury store assistant.
    `;

    const response: GenerateContentResponse = await ai.models.generateContent({
      model: modelId,
      contents: prompt,
    });

    return response.text || "I couldn't generate advice at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the styling server right now.";
  }
};
