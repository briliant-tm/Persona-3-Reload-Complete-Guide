import { NextResponse } from "next/server";
import OpenAI from "openai";

// Inisialisasi client dengan API Key dari environment variable
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    // Memanggil API Publik OpenAI secara dinamis [cite: 23]
    const response = await openai.chat.completions.create({
      model: "gpt-4o", // Gunakan model stabil gpt-4o atau gpt-3.5-turbo
      messages: [
        { role: "system", content: "Your helpful assistant for Persona 3 Reload guide." },
        { role: "user", content: prompt },
      ],
    });

    return NextResponse.json({ answer: response.choices[0].message.content });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch AI data" }, { status: 500 });
  }
}