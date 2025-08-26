import { GoogleGenAI } from "@google/genai";
import type { ChatMessage } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });
const model = 'gemini-2.5-flash';

const systemInstruction = "Eres un coach virtual amigable, motivador y experto en recuperación física. Tu usuario tiene un historial de discopatía lumbar (L5-S1). Tu objetivo es dar ánimo y responder preguntas sobre su plan de entrenamiento. NUNCA des consejos médicos. Si el usuario describe un dolor fuerte (más de 4/10), aconséjale que pare y consulte a un profesional. Mantén tus respuestas concisas, positivas y de apoyo. Usa emojis para ser más cercano.";

export async function getGeminiResponse(history: ChatMessage[], newMessage: string): Promise<string> {
    const userMessage: ChatMessage = { role: "user", parts: [{ text: newMessage }] };
    
    // Create the full content history for the API call
    const contents = [...history, userMessage];

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: contents,
            config: {
                systemInstruction,
                temperature: 0.7,
                maxOutputTokens: 250,
            },
        });
        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        return "He tenido un problema de conexión. ¿Podrías intentarlo de nuevo?";
    }
}

export async function analyzeSensationWithGemini(sensation: string): Promise<string> {
    const prompt = `Como asistente virtual de fisioterapia, un usuario con discopatía lumbar describe una sensación: "${sensation}". Tu tarea es ofrecer una sugerencia de apoyo, segura y no médica. Puedes sugerir enfocarte en la técnica, reducir el peso, realizar un calentamiento específico (como Gato-Camello), o recordar la regla de 'dolor por debajo de 3/10'. No diagnostiques. Enmarca tu respuesta como un consejo útil a considerar. Sé breve (máx 60 palabras) y usa un tono tranquilizador.`;

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
             config: {
                temperature: 0.7,
                maxOutputTokens: 150
            },
        });
        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API for sensation analysis:", error);
        return "He tenido un problema de conexión. ¿Podrías intentarlo de nuevo?";
    }
}
