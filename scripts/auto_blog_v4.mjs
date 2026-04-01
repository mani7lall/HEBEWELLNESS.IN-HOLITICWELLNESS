import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CATEGORIES = ["sleep", "stress", "hair", "skin"];
const TOPICS = {
  sleep: [
    "The Role of Glymphatic Cleansing in Alzheimer's Prevention",
    "Magnesium L-Threonate: Crossing the Blood-Brain Barrier for Neuro-Relaxation",
    "Temperature Regulation: Why 65 Degrees is the Clinical Standard for Deep Sleep"
  ],
  stress: [
    "Vagus Nerve Stimulation: Botanical Modulators for Parasympathetic Tone",
    "Ashwagandha Shoden: The Science of 35% Glycoside Concentration",
    "Cortisol Carbonylation: How Chronic Stress Ages Your Proteins"
  ],
  hair: [
    "DHT Pathway Inhibition: A Clinical Review of Saw Palmetto and Pumpkin Seed Oil",
    "Micronutrient Delivery to the Follicular Matrix: Beyond Biotin",
    "Autophagy in Scalp Health: Cellular Recycling for Hair Density"
  ],
  skin: [
    "Collagen Synthesis: The Synergistic Role of Vitamin C and Copper Peptides",
    "Hyaluronic Acid Weight Distribution: Deep Dermal Hydration vs Surface Barrier",
    "UV-Induced Photoaging: Molecular Defense Strategies"
  ]
};

async function generateWithNIM(prompt, system) {
  const apiKey = process.env.NVIDIA_API_KEY;
  if (!apiKey) throw new Error("NVIDIA_API_KEY missing");

  const response = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "meta/llama-3.1-405b-instruct",
      messages: [
        { role: "system", content: system },
        { role: "user", content: prompt }
      ],
      temperature: 0.3,
      max_tokens: 4096
    })
  });
  const data = await response.json();
  return data.choices[0].message.content;
}

async function runAutonomousLoop() {
  for (const cat of CATEGORIES) {
    const topic = TOPICS[cat][Math.floor(Math.random() * TOPICS[cat].length)];
    console.log(`[OMO-RESEARCH] Category: ${cat} | Topic: ${topic}`);

    try {
      // STEP 1: RESEARCH & DRAFT
      const researcherSystem = "You are a PhD Clinical Researcher. Write a 1,500-word technical yet accessible clinical paper. Use H2/H3 attributes. Cite mechanisms.";
      const draft = await generateWithNIM(`Research and draft a comprehensive clinical paper on: ${topic}`, researcherSystem);
      
      // STEP 2: HUMANIZER & CRITIQUE (TRIPLE LOOP)
      const humanizerSystem = "You are a world-class health journalist (analogous to top NYT/Atlantic science writers). Rewrite the following text to BE INDISTINGUISHABLE FROM HUMAN WRITING. Remove AI-isms like 'delve', 'unlock', 'comprehensive'. Use complex sentence structures and personal authority.";
      const finalContent = await generateWithNIM(`Rewrite this draft to pass 100% human detection and maximize value: \n\n${draft}`, humanizerSystem);

      // STEP 3: FORMAT & SAVE
      const mdx = `---
title: "${topic}"
date: "${new Date().toISOString().split('T')[0]}"
author: "Hebe Clinical Board"
category: "${cat}"
---

${finalContent}`;

      const slug = topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      const outPath = path.join(__dirname, '..', 'src', 'content', 'blog', cat, `${slug}.mdx`);
      
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, mdx, 'utf-8');
      console.log(`[DONE] Published to: ${outPath}`);

      // Auto-commit
      execSync('git add .', { cwd: path.join(__dirname, '..') });
      execSync(`git commit -m "OMO-Auto-Research: ${topic}"`, { cwd: path.join(__dirname, '..') });
    } catch (e) {
      console.error(`[ERROR] category ${cat}:`, e.message);
    }
  }
}

runAutonomousLoop();
