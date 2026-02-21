import { NextResponse } from "next/server";
import OpenAI from "openai";

export const dynamic = 'force-dynamic';
export async function POST(req: Request) {
  try {
    // Inisialisasi di dalam fungsi untuk memastikan apiKey terbaca
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY, 
    });

    const { prompt } = await req.json();

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "You are a helpful assistant for Persona 3 Reload guide." },
        { role: "user", content: prompt },
      ],
    });

    return NextResponse.json({ answer: response.choices[0].message.content });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "API Key or Connection Error" }, { status: 500 });
  }
}