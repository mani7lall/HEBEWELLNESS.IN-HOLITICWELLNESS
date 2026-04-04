"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Sparkles } from "lucide-react";

export default function BlogPost() {
  return (
    <div className="bg-white dark:bg-white dark:bg-brand-black min-h-screen text-slate-900 dark:text-white font-sans pt-32 pb-24 selection:bg-emerald-500/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <Link href="/blog" className="inline-flex items-center text-emerald-400 hover:text-slate-900 dark:text-white font-mono text-sm uppercase tracking-widest mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Articles
        </Link>

        <div className="mb-12">
          <div className="flex gap-3 mb-6">
            <span className="bg-emerald-500 text-slate-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full uppercase font-mono">Stress</span>
            <span className="border border-white/20 text-slate-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full uppercase font-mono flex items-center"><Sparkles className="w-3 h-3 mr-1"/> Actionable Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-6 leading-tight">
            Adaptogens 101: Nature's Answer to Burnout
          </h1>
          <div className="flex items-center gap-6 text-sm font-mono text-slate-900 dark:text-white/50 border-y border-black/10 dark:border-black/10 dark:border-white/10 py-4">
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2"/> 8 Min Read</span>
            <span>Easy to Understand • High Impact</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-a:text-emerald-400 prose-p:text-slate-900 dark:text-white/90 prose-li:text-slate-900 dark:text-white/90">
                    <p className="lead text-xl border-l-4 border-emerald-500 pl-6 mb-10 font-light">When lifestyle changes aren't enough, adaptogens are the herbs and mushrooms that help your body 'adapt' to and resist stress.</p>
          <h2>The Big Three Adaptogens</h2>
          <p>Not all adaptogens do the same thing. Here is how to use them:</p>
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>Ashwagandha:</strong> Best for high anxiety and feeling 'wired but tired.' It directly lowers cortisol levels. Best taken in the late afternoon or evening.</li>
            <li><strong>Rhodiola Rosea:</strong> Best for physical and mental burnout. It helps you endure stress without crashing. Excellent for busy professionals.</li>
            <li><strong>Lion's Mane Mushroom:</strong> Best for brain fog caused by stress. It stimulates the growth of new brain cells and protects the nervous system.</li>
          </ul>
        </div>
        
        <div className="mt-16 p-8 bg-[#121c17] border border-black/10 dark:border-black/10 dark:border-white/10 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Ready to transform your health?</h3>
            <p className="text-slate-900 dark:text-white/70 mb-6">Let the Hebe Omni-Agent build a personalized protocol based on your exact needs.</p>
            <Link href="/quiz" className="inline-block px-8 py-4 bg-emerald-500 text-slate-900 dark:text-white font-bold uppercase tracking-widest rounded-sm hover:scale-105 transition-transform">
                Start Your Free Assessment
            </Link>
        </div>
      </div>
    </div>
  );
}

