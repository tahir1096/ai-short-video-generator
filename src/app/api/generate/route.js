import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { writeFile } from 'fs/promises';
import path from 'path';
import mime from 'mime';

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY, // keep it secret
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const config = { responseModalities: ['IMAGE', 'TEXT'] };
    const model = 'gemini-2.5-flash-image';

    const contents = [
      { role: 'user', parts: [{ text: prompt }] },
    ];

    const response = await ai.models.generateContentStream({
      model,
      config,
      contents,
    });

    let fileUrl: string | null = null;
    let textOutput: string | null = null;
    let fileIndex = 0;

    for await (const chunk of response) {
      const parts = chunk?.candidates?.[0]?.content?.parts;
      if (!parts) continue;

      const inlineData = parts[0]?.inlineData;

      if (inlineData) {
        const buffer = Buffer.from(inlineData.data || '', 'base64');
        const ext = mime.getExtension(inlineData.mimeType || 'png');
        const fileName = `gemini_${Date.now()}_${fileIndex++}.${ext}`;

        const filePath = path.join(process.cwd(), 'public', 'generated', fileName);
        await writeFile(filePath, buffer);

        fileUrl = `/generated/${fileName}`;
      } else if (parts[0]?.text) {
        textOutput = parts[0].text;
      }
    }

    return NextResponse.json({ fileUrl, textOutput });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to generate content' }, { status: 500 });
  }
}
