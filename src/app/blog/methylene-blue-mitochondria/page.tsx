"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Database, Flame, Zap } from "lucide-react";

export default function BlogPost() {
  return (
    <div className="bg-brand-black min-h-screen text-brand-cream font-sans pt-32 pb-24 selection:bg-blue-500/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <Link href="/" className="inline-flex items-center text-blue-400 hover:text-white font-mono text-sm uppercase tracking-widest mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Intelligence Hub
        </Link>

        <div className="mb-12">
          <div className="flex gap-3 mb-6">
            <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase font-mono">Cellular Energy</span>
            <span className="border border-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase font-mono flex items-center"><Database className="w-3 h-3 mr-1"/> Advanced Tier</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6 leading-[0.9]">
            Methylene Blue: Modulating <span className="text-blue-400">Mitochondrial Efficiency</span>
          </h1>
          <div className="flex items-center gap-6 text-sm font-mono text-brand-cream/40 border-y border-white/10 py-4">
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2"/> 15 Min Read</span>
            <span className="flex items-center"><Zap className="w-4 h-4 mr-2"/> ATP Optimization</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-a:text-blue-400 prose-p:text-brand-cream/80 prose-li:text-brand-cream/80">
          <p className="lead text-xl border-l-4 border-blue-500 pl-6 mb-10 font-light">
            Once used purely as a biological dye and malaria treatment, pharmaceutical-grade Methylene Blue (MB) has emerged as one of the most potent cognitive enhancers and mitochondrial modulators of 2026.
          </p>

          <h2>Bypassing Mitochondrial Dysfunction</h2>
          <p>
            At low doses, Methylene Blue acts as an alternative electron carrier in the mitochondrial electron transport chain (ETC). It can accept electrons from NADH (Complex I) and transfer them directly to Cytochrome C (Complex III). This effectively bypasses sites of electron leakage, dramatically reducing reactive oxygen species (ROS) production while simultaneously increasing ATP yield.
          </p>

          <h2>Photobiomodulation Synergy</h2>
          <p>
            MB exhibits peak absorption in the red (~660nm) and near-infrared spectrum. When combined with targeted red light therapy (photobiomodulation) applied to the cranium, MB acts as a photosensitizer, massively amplifying the activation of Cytochrome C Oxidase (Complex IV). 
          </p>

          <div className="bg-black/50 border border-blue-500/20 p-8 rounded-xl my-10">
            <h3 className="text-blue-400 mb-4 mt-0">Hebe Advanced Cognitive Protocol</h3>
            <ul className="list-disc pl-5 space-y-2 marker:text-blue-400 text-sm font-mono">
              <li><strong>Dosage:</strong> 0.5mg to 1mg per kg of body weight of USP-grade Methylene Blue, taken sublingually in the morning.</li>
              <li><strong>Synergy Stack:</strong> Co-administer with 1g Ascorbic Acid (Vitamin C) to maintain MB in its reduced (leuco) state for enhanced blood-brain barrier penetration.</li>
              <li><strong>Light Activation:</strong> 15 minutes of 850nm transcranial near-infrared light exposure 30 minutes post-ingestion.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}


