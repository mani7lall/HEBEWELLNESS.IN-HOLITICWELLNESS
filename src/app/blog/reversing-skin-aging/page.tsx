"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Sparkles } from "lucide-react";

export default function BlogPost() {
  return (
    <div className="bg-brand-black min-h-screen text-brand-cream font-sans pt-32 pb-24 selection:bg-rose-500/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <Link href="/blog" className="inline-flex items-center text-rose-400 hover:text-white font-mono text-sm uppercase tracking-widest mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Articles
        </Link>

        <div className="mb-12">
          <div className="flex gap-3 mb-6">
            <span className="bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase font-mono">Skin</span>
            <span className="border border-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase font-mono flex items-center"><Sparkles className="w-3 h-3 mr-1"/> Actionable Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">
            Reversing Skin Aging: The Inside-Out Approach for 2026
          </h1>
          <div className="flex items-center gap-6 text-sm font-mono text-brand-cream/50 border-y border-white/10 py-4">
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2"/> 12 Min Read</span>
            <span>Easy to Understand • High Impact</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-a:text-rose-400 prose-p:text-brand-cream/90 prose-li:text-brand-cream/90">
                    <p className="lead text-xl border-l-4 border-rose-500 pl-6 mb-10 font-light">Aging skin isn't just about losing collagen; it's about cellular energy. If your cells are tired, your skin looks tired.</p>
          <h2>Why Your Skin Actually Ages</h2>
          <p>As we age, the mitochondria (the powerhouses) in our skin cells produce less energy. At the same time, 'zombie cells' (senescent cells) build up and release inflammatory toxins that degrade surrounding healthy tissue.</p>
          <h2>The Inside-Out Protocol</h2>
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>Fasting for Autophagy:</strong> Intermittent fasting (like a 16-hour fast) triggers 'autophagy'—your body's cellular recycling program. It literally eats up the old, damaged skin cells and makes room for new ones.</li>
            <li><strong>Vitamin C and Amino Acids:</strong> You cannot build collagen without Vitamin C. Pair a high-quality Vitamin C supplement with complete proteins (like grass-fed beef or essential amino acids) daily.</li>
            <li><strong>Hydration is Not Just Water:</strong> Drinking water isn't enough if your cells can't hold onto it. Add a pinch of high-quality sea salt or electrolytes to your morning water to pull hydration directly into your skin cells.</li>
          </ul>
        </div>
        
        <div className="mt-16 p-8 bg-[#121c17] border border-white/10 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to transform your health?</h3>
            <p className="text-brand-cream/70 mb-6">Let the Hebe Omni-Agent build a personalized protocol based on your exact needs.</p>
            <Link href="/quiz" className="inline-block px-8 py-4 bg-rose-500 text-white font-bold uppercase tracking-widest rounded-sm hover:scale-105 transition-transform">
                Start Your Free Assessment
            </Link>
        </div>
      </div>
    </div>
  );
}


