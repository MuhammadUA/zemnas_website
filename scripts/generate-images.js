import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function generateImage(prompt, filename) {
  try {
    console.log(`Generating ${filename}...`);
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }],
      },
    });
    
    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        const buffer = Buffer.from(part.inlineData.data, 'base64');
        fs.writeFileSync(path.join(process.cwd(), 'public', filename), buffer);
        console.log(`Saved ${filename}`);
        return;
      }
    }
  } catch (e) {
    console.error(`Failed to generate ${filename}:`, e);
  }
}

async function main() {
  const dir = path.join(process.cwd(), 'public', 'images');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  await Promise.all([
    generateImage("Abstract brutalist 3D structural design, black and white with vibrant blue accents, clean, modern creative agency, high quality, 16:9", "images/hero.png"),
    generateImage("Modern B2B SaaS dashboard interface, clean UI, brutalist design elements, blue accents, high quality, 4:3", "images/work-1.png"),
    generateImage("Marketing funnel visualization, abstract 3D, modern, clean, blue and white, high quality, 4:3", "images/work-2.png"),
    generateImage("Creative brand identity presentation, modern editorial style, black and white, high quality, 4:3", "images/work-3.png"),
    generateImage("Abstract representation of artificial intelligence and marketing, modern, clean, high quality, 4:3", "images/insight-1.png"),
    generateImage("Abstract geometric shapes, brutalist architecture style, blue and white, high quality, 4:3", "images/insight-2.png")
  ]);
  
  console.log("All images generated.");
}

main();
