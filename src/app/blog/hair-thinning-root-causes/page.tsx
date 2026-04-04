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
            The Root Cause of Hair Thinning: Hormones, Stress, and Solutions
          </h1>
          <div className="flex items-center gap-6 text-sm font-mono text-slate-900 dark:text-white/50 border-y border-black/10 dark:border-black/10 dark:border-white/10 py-4">
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2"/> 11 Min Read</span>
            <span>Easy to Understand • High Impact</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-a:text-amber-400 prose-p:text-slate-900 dark:text-white/90 prose-li:text-slate-900 dark:text-white/90">
                    <p className="lead text-xl border-l-4 border-amber-500 pl-6 mb-10 font-light">Losing hair can be devastating, but the old advice of 'it's just genetics' is outdated. In 2026, we know that hair thinning is almost always a symptom of systemic imbalance.</p>
          <h2>Why is Your Hair Falling Out?</h2>
          <p>Your hair follicles are incredibly sensitive barometers of your overall health. They are the first things your body shuts down when it feels threatened. The three biggest culprits are:</p>
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>Chronic Stress (Cortisol):</strong> High stress pushes your hair follicles into a resting phase prematurely. Months after a stressful event, the hair simply falls out.</li>
            <li><strong>Nutrient Deficiencies:</strong> If you are low in Vitamin D, Iron, or Ferritin (stored iron), your body literally cannot build the hair shaft.</li>
            <li><strong>Hormonal Chaos:</strong> Insulin resistance and thyroid issues directly impact the thickness and lifespan of your hair.</li>
          </ul>
          <h2>The 2026 Hair Restoration Protocol</h2>
          <p>Do not panic. Hair follicles can be reactivated. Here is where to start:</p>
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>Optimize Your Minerals:</strong> Get bloodwork done and ensure your Ferritin is over 50 and your Vitamin D is between 50-80 ng/mL.</li>
            <li><strong>Scalp Blood Flow:</strong> Daily scalp massages (using your fingers or a specialized tool) for 5 minutes increase blood flow and thickness. Pair this with Rosemary oil, which studies show can be as effective as traditional hair loss drugs without the side effects.</li>
            <li><strong>Stress Management:</strong> You cannot out-supplement chronic stress. Daily deep breathing exercises are mandatory for hair health.</li>
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

