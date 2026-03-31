import fs from 'fs';
import path from 'path';

// The Hebe Wellness Autonomous Intelligence Engine
// Powered by the Google Gemini API (Configurable)

async function writeNewArticle() {
  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
  if (!GEMINI_API_KEY) {
    console.error("CRITICAL: GEMINI_API_KEY environment variable is missing.");
    process.exit(1);
  }

  console.log("Wake up sequence initiated. Establishing connection to LLM Engine...");

  const prompt = `
    You are the Chief Editorial Engine for Hebe Wellness, a premier modern health authority.
    Your task is to write a single, completely unique, extremely beginner-friendly MDX blog post about a trending health topic.
    Topics could include: Cold Plunging, Zone 2 Cardio, The Microbiome, Heat Shock Proteins, Caffeine Timing, Step Counts, etc.
    Pick only ONE topic at random that would provide massive value to an everyday person.
    
    The content MUST be incredibly easy to understand, have zero confusing medical jargon, and be highly actionable.
    
    Return the response strictly in JSON format:
    {
      "slug": "the-topic-slug-here",
      "mdx_content": "---\ntitle: ...\ndate: ...\nauthor: Hebe Precision Health Board\ncategory: Beginner Track\nexcerpt: ...\nfeaturedImage: /cbd-bottle.png\nreadTime: 4 min read\ntags: [...]\n---\n\n# Your extremely simple, catchy title here\n\nYour amazing simple markdown content here..."
    }
  `;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: { responseMimeType: "application/json" }
      })
    });

    const data = await response.json();
    if (data.error) throw new Error(data.error.message);

    const jsonText = data.candidates[0].content.parts[0].text;
    const result = JSON.parse(jsonText);

    // 1. Resolve to the Next.js App Router MDX folder
    const targetDir = path.join(process.cwd(), 'src', 'app', 'blog', result.slug);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // 2. Write the new Next.js Page Route
    const filePath = path.join(targetDir, 'page.mdx');
    fs.writeFileSync(filePath, result.mdx_content, 'utf8');

    console.log(`[SUCCESS] Autonomous Engine wrote new intelligence dossier: ${result.slug}`);
    
  } catch (error) {
    console.error("[FATAL] Autonomous Engine execution failed:", error);
    process.exit(1);
  }
}

writeNewArticle();
