"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Database, ActivitySquare } from "lucide-react";

export default function BlogPost() {
  return (
    <div className="bg-white dark:bg-white dark:bg-brand-black min-h-screen text-slate-900 dark:text-white font-sans pt-32 pb-24 selection:bg-purple-500/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <Link href="/" className="inline-flex items-center text-purple-400 hover:text-slate-900 dark:text-white font-mono text-sm uppercase tracking-widest mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Intelligence Hub
        </Link>

        <div className="mb-12">
          <div className="flex gap-3 mb-6">
            <span className="bg-purple-500 text-slate-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full uppercase font-mono">Metabolism</span>
            <span className="border border-white/20 text-slate-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full uppercase font-mono flex items-center"><Database className="w-3 h-3 mr-1"/> Foundation Tier</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-6 leading-[0.9]">
            Beyond HbA1c: Utilizing <span className="text-purple-400">Continuous Glucose Monitors</span> for Real-Time Agility
          </h1>
          <div className="flex items-center gap-6 text-sm font-mono text-slate-900 dark:text-white/40 border-y border-black/10 dark:border-black/10 dark:border-white/10 py-4">
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2"/> 9 Min Read</span>
            <span className="flex items-center"><ActivitySquare className="w-4 h-4 mr-2"/> Biometric Tracking</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-a:text-purple-400 prose-p:text-slate-900 dark:text-white/80 prose-li:text-slate-900 dark:text-white/80">
          <p className="lead text-xl border-l-4 border-purple-500 pl-6 mb-10 font-light">
            Relying solely on fasting glucose or HbA1c is a relic of 20th-century medicine. In 2026, mapping your glycemic variability in real-time is the fundamental baseline for any longevity protocol.
          </p>

          <h2>The Danger of Glycemic Variability</h2>
          <p>
            Two individuals can have the exact same HbA1c of 5.2%. However, one might have rock-solid glucose levels fluctuating between 80-100 mg/dL, while the other experiences massive spikes to 160 mg/dL followed by hypoglycemic crashes to 60 mg/dL. 
            <strong>High glycemic variability directly causes endothelial damage, increases advanced glycation end-products (AGEs), and accelerates biological aging.</strong>
          </p>

          <h2>Hebe AI Pattern Recognition</h2>
          <p>
            By integrating your CGM data streams directly into the Hebe Omni-Agent, we can map your unique metabolic response to specific macronutrient combinations, stress levels, and sleep architectures. 
          </p>

          <div className="bg-gray-50 dark:bg-gray-50 dark:bg-black/50 border border-purple-500/20 p-8 rounded-xl my-10">
             <h3 className="text-purple-400 mb-4 mt-0">Metabolic Agility Targets</h3>
             <ul className="list-disc pl-5 space-y-2 marker:text-purple-400 text-sm font-mono">
               <li><strong>Fasting Baseline:</strong> 72 - 85 mg/dL.</li>
               <li><strong>Postprandial Peak:</strong> Never exceeding 110 mg/dL.</li>
               <li><strong>Return to Baseline:</strong> Within 90 minutes post-meal.</li>
               <li><strong>Interventions for Spikes:</strong> 10 minutes of Zone 2 walking post-meal, or pre-loading with 1 tbsp of Apple Cider Vinegar.</li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

