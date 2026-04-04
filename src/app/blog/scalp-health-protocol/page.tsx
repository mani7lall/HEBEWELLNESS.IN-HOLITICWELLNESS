"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Sparkles } from "lucide-react";

export default function BlogPost() {
  return (
    <div className="bg-white dark:bg-white dark:bg-brand-black min-h-screen text-slate-900 dark:text-white font-sans pt-32 pb-24 selection:bg-amber-500/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <Link href="/blog" className="inline-flex items-center text-amber-400 hover:text-slate-900 dark:text-white font-mono text-sm uppercase tracking-widest mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Articles
        </Link>

        <div className="mb-12">
          <div className="flex gap-3 mb-6">
            <span className="bg-amber-500 text-slate-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full uppercase font-mono">Hair</span>
            <span className="border border-white/20 text-slate-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full uppercase font-mono flex items-center"><Sparkles className="w-3 h-3 mr-1"/> Actionable Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-6 leading-tight">
            Scalp Health is Hair Health: The 2026 Protocol
          </h1>
          <div className="flex items-center gap-6 text-sm font-mono text-slate-900 dark:text-white/50 border-y border-black/10 dark:border-black/10 dark:border-white/10 py-4">
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2"/> 9 Min Read</span>
            <span>Easy to Understand • High Impact</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-a:text-amber-400 prose-p:text-slate-900 dark:text-white/90 prose-li:text-slate-900 dark:text-white/90">
                    <p className="lead text-xl border-l-4 border-amber-500 pl-6 mb-10 font-light">You cannot grow a healthy plant in toxic soil. The biggest mistake people make with hair thinning is ignoring the scalp.</p>
          <h2>The Scalp Microbiome</h2>
          <p>Just like your gut, your scalp has a microbiome. When it becomes imbalanced due to harsh shampoos, hard water, or poor diet, inflammation sets in. This inflammation chokes the hair follicle.</p>
          <h2>The Healthy Scalp Routine</h2>
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>Ditch the Sulfates:</strong> Stop using shampoos that foam aggressively. Sulfates strip the scalp of its natural protective oils, leading to overproduction of sebum and inflammation.</li>
            <li><strong>Weekly Exfoliation:</strong> Use a gentle chemical exfoliant (like a weak salicylic acid serum) on your scalp once a week to dissolve dead skin cells and unclog follicles.</li>
            <li><strong>Microneedling:</strong> Once a week, use a derma-roller (1.0mm to 1.5mm) on thinning areas. This triggers a healing cascade that floods the follicles with growth factors.</li>
          </ul>
        </div>
        
        <div className="mt-16 p-8 bg-[#121c17] border border-black/10 dark:border-black/10 dark:border-white/10 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Ready to transform your health?</h3>
            <p className="text-slate-900 dark:text-white/70 mb-6">Let the Hebe Omni-Agent build a personalized protocol based on your exact needs.</p>
            <Link href="/quiz" className="inline-block px-8 py-4 bg-amber-500 text-slate-900 dark:text-white font-bold uppercase tracking-widest rounded-sm hover:scale-105 transition-transform">
                Start Your Free Assessment
            </Link>
        </div>
      </div>
    </div>
  );
}

