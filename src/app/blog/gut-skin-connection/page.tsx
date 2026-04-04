"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Sparkles } from "lucide-react";

export default function BlogPost() {
  return (
    <div className="bg-white dark:bg-white dark:bg-brand-black min-h-screen text-slate-900 dark:text-white font-sans pt-32 pb-24 selection:bg-rose-500/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <Link href="/blog" className="inline-flex items-center text-rose-400 hover:text-slate-900 dark:text-white font-mono text-sm uppercase tracking-widest mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Articles
        </Link>

        <div className="mb-12">
          <div className="flex gap-3 mb-6">
            <span className="bg-rose-500 text-slate-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full uppercase font-mono">Skin</span>
            <span className="border border-white/20 text-slate-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full uppercase font-mono flex items-center"><Sparkles className="w-3 h-3 mr-1"/> Actionable Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-6 leading-tight">
            The Gut-Skin Connection: Why Your Microbiome Dictates Your Glow
          </h1>
          <div className="flex items-center gap-6 text-sm font-mono text-slate-900 dark:text-white/50 border-y border-black/10 dark:border-black/10 dark:border-white/10 py-4">
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2"/> 8 Min Read</span>
            <span>Easy to Understand • High Impact</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-a:text-rose-400 prose-p:text-slate-900 dark:text-white/90 prose-li:text-slate-900 dark:text-white/90">
                    <p className="lead text-xl border-l-4 border-rose-500 pl-6 mb-10 font-light">In 2026, the beauty industry's biggest secret is out: topical creams can only do so much. If you want truly radiant, clear, and youthful skin, you have to look at your gut.</p>
          <h2>The Gut-Skin Axis Explained Simply</h2>
          <p>Think of your gut and your skin as two ends of a walkie-talkie. When your gut is inflamed (from poor diet, stress, or antibiotics), it shouts a warning signal to your skin. Your skin responds by breaking out in acne, eczema, rosacea, or premature wrinkles.</p>
          <h2>How to Eat for Glowing Skin</h2>
          <p>Healing your skin from the inside out is the most powerful anti-aging tool you have. Here is the protocol:</p>
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>Diversity is Key:</strong> Aim to eat 30 different types of plants (vegetables, fruits, nuts, seeds, herbs) every week. This feeds a diverse army of good bacteria in your gut, which instantly lowers skin inflammation.</li>
            <li><strong>Bone Broth and Collagen:</strong> The lining of your gut and the structure of your skin are made of the same building blocks. High-quality collagen repairs a 'leaky gut' while simultaneously plumping your skin.</li>
            <li><strong>Cut the Sugar Spikes:</strong> Sugar binds to collagen in your skin and makes it stiff and brittle (a process called glycation). Stabilizing your blood sugar is the ultimate wrinkle-prevention strategy.</li>
          </ul>
          <h2>The Hebe 2026 Verdict</h2>
          <p>Your skin is a window into your digestive health. Before you buy another  serum, invest in your gut microbiome.</p>
        </div>
        
        <div className="mt-16 p-8 bg-[#121c17] border border-black/10 dark:border-black/10 dark:border-white/10 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Ready to transform your health?</h3>
            <p className="text-slate-900 dark:text-white/70 mb-6">Let the Hebe Omni-Agent build a personalized protocol based on your exact needs.</p>
            <Link href="/quiz" className="inline-block px-8 py-4 bg-rose-500 text-slate-900 dark:text-white font-bold uppercase tracking-widest rounded-sm hover:scale-105 transition-transform">
                Start Your Free Assessment
            </Link>
        </div>
      </div>
    </div>
  );
}

