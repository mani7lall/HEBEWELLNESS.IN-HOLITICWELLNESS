import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const topics = [
  "How Quality Sleep Enhances Cellular Repair",
  "The Benefits of Morning Sunlight on the Circadian Rhythm",
  "Simple Daily Habits for Long-Term Heart Health",
  "Understanding the Basics of Muscle Hypertrophy",
  "Why Hydration is the Simplest Form of Biohacking",
  "The Science of Stress Reduction and Vagal Tone",
  "Nutritional Foundations: Beyond Vitamins",
  "The Importance of Mobility as We Age",
  "Mitochondrial Dysfunction and How to Reverse It",
  "The Role of Autophagy in Cellular Longevity",
  "ApoB vs LDL: The Real Marker of Heart Health",
  "Heat Shock Proteins: The Benefit of Sauna"
];

async function generateWithNvidia(prompt) {
  const apiKey = process.env.NVIDIA_API_KEY;
  if (!apiKey) return null;

  try {
    const response = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "meta/llama-3.1-405b-instruct",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.2,
        top_p: 0.7,
        max_tokens: 2048
      })
    });
    const data = await response.json();
    return data.choices[0].message.content;
  } catch (e) {
    console.error("NVIDIA API Error:", e);
    return null;
  }
}

async function generateWithGemini(prompt) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return null;

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${apiKey}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.7 }
      })
    });
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (e) {
    console.error("Gemini API Error:", e);
    return null;
  }
}

async function generateBlog() {
  const randomTopic = topics[Math.floor(Math.random() * topics.length)];
  const systemPrompt = `You are a Senior Expert SEO Copywriter and Medical Journalist. 
Write a 2,000-word, highly valuable MDX blog post about: "${randomTopic}".

CORE REQUIREMENTS:
1. TONE: Authoritative, expert, yet easy for a layperson to understand. No "AI-isms".
2. DEPTH: Include specific biological mechanisms (e.g., mTOR, autophagy, vagal tone).
3. IMAGES: Include 3-4 high-quality image placeholders using Unsplash URLs.
   Format: ![Description](https://images.unsplash.com/photo-XXXXX?auto=format&fit=crop&q=80)
   Select images that represent: Clinical science, nature, technology, or wellness.
4. STRUCTURE: 
   - H1 Title that hooks the reader.
   - 3-sentence "TL;DR" Summary.
   - H2/H3 headings for logical flow.
   - "The Clinical Protocol": A clear, bulleted list of actionable steps.
   - "The Evidence": Mention that this is based on current clinical literature (e.g., PubMed).
5. SEO: Use semantic keywords related to "${randomTopic}".

Format with frontmatter:
---
title: "[The Title]"
date: "${new Date().toISOString().split('T')[0]}"
author: "Hebe Medical Editorial"
---`;

  console.log(`Researching: ${randomTopic}`);
  
  // Try NVIDIA first (Higher quality Llama 3.1 405B), then fallback to Gemini
  let text = await generateWithNvidia(systemPrompt);
  if (!text) {
    console.log("Switching to Gemini for generation...");
    text = await generateWithGemini(systemPrompt);
  }

  if (!text) {
    console.error("Critical: No API response from NVIDIA or Gemini.");
    process.exit(1);
  }

  text = text.replace(/^```(mdx|md|markdown)?\n/i, "").replace(/\n```$/i, "");

  const slug = randomTopic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const outPath = path.join(__dirname, '..', 'src', 'content', 'blog', `${slug}.mdx`);
  
  const dir = path.dirname(outPath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  fs.writeFileSync(outPath, text, 'utf-8');
  console.log(`Generated: ${outPath}`);

  // Auto-commit
  try {
    execSync('git add .', { cwd: path.join(__dirname, '..') });
    execSync(`git commit -m "Autoblog Sync: ${randomTopic}"`, { cwd: path.join(__dirname, '..') });
    console.log("Git sync successful.");
  } catch (e) {
    console.log("Git sync skipped (no changes or not a repo).");
  }
}

generateBlog();
