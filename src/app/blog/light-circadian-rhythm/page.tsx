"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Sparkles } from "lucide-react";

export default function BlogPost() {
  return (
    <div className="bg-white dark:bg-white dark:bg-brand-black min-h-screen text-slate-900 dark:text-white font-sans pt-32 pb-24 selection:bg-blue-500/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <Link href="/blog" className="inline-flex items-center text-blue-400 hover:text-slate-900 dark:text-white font-mono text-sm uppercase tracking-widest mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Articles
        </Link>

        <div className="mb-12">
          <div className="flex gap-3 mb-6">
            <span className="bg-blue-500 text-slate-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full uppercase font-mono">Sleep</span>
            <span className="border border-white/20 text-slate-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full uppercase font-mono flex items-center"><Sparkles className="w-3 h-3 mr-1"/> Actionable Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-6 leading-tight">
            How Light Shapes Your Sleep: The Circadian Rhythm Hack
          </h1>
          <div className="flex items-center gap-6 text-sm font-mono text-slate-900 dark:text-white/50 border-y border-black/10 dark:border-black/10 dark:border-white/10 py-4">
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2"/> 7 Min Read</span>
            <span>Easy to Understand • High Impact</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-a:text-blue-400 prose-p:text-slate-900 dark:text-white/90 prose-li:text-slate-900 dark:text-white/90">
                    <p className="lead text-xl border-l-4 border-blue-500 pl-6 mb-10 font-light">You can take all the sleep supplements in the world, but if your light environment is wrong, you will never sleep well. Light is the master switch for your brain.</p>
          <h2>The Problem with Modern Lighting</h2>
          <p>For millions of years, humans only saw bright light during the day and firelight at night. Today, we stare at bright LED screens until the moment we close our eyes. This tricks your brain into thinking it is noon, completely shutting down melatonin production.</p>
          <h2>The 2026 Light Protocol</h2>
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>Morning Sunlight:</strong> Within 30 minutes of waking, step outside and get natural sunlight in your eyes for 10-15 minutes. This starts a biological timer that helps you fall asleep 14-16 hours later.</li>
            <li><strong>The Sunset Rule:</strong> After sunset, turn off all overhead lights. Use only lamps with warm, amber, or red bulbs. This mimics firelight and allows melatonin to flow.</li>
            <li><strong>Blue Blockers:</strong> If you must look at screens after dark, wear high-quality blue-light-blocking glasses.</li>
          </ul>
        </div>
        
        <div className="mt-16 p-8 bg-[#121c17] border border-black/10 dark:border-black/10 dark:border-white/10 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Ready to transform your health?</h3>
            <p className="text-slate-900 dark:text-white/70 mb-6">Let the Hebe Omni-Agent build a personalized protocol based on your exact needs.</p>
            <Link href="/quiz" className="inline-block px-8 py-4 bg-blue-500 text-slate-900 dark:text-white font-bold uppercase tracking-widest rounded-sm hover:scale-105 transition-transform">
                Start Your Free Assessment
            </Link>
        </div>
      </div>
    </div>
  );
}

