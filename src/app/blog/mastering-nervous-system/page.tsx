"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Sparkles } from "lucide-react";

export default function BlogPost() {
  return (
    <div className="bg-brand-black min-h-screen text-brand-cream font-sans pt-32 pb-24 selection:bg-emerald-500/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <Link href="/blog" className="inline-flex items-center text-emerald-400 hover:text-white font-mono text-sm uppercase tracking-widest mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Articles
        </Link>

        <div className="mb-12">
          <div className="flex gap-3 mb-6">
            <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase font-mono">Stress</span>
            <span className="border border-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase font-mono flex items-center"><Sparkles className="w-3 h-3 mr-1"/> Actionable Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">
            Mastering Your Nervous System: How to Turn Off 'Fight or Flight'
          </h1>
          <div className="flex items-center gap-6 text-sm font-mono text-brand-cream/50 border-y border-white/10 py-4">
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2"/> 9 Min Read</span>
            <span>Easy to Understand • High Impact</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-a:text-emerald-400 prose-p:text-brand-cream/90 prose-li:text-brand-cream/90">
                    <p className="lead text-xl border-l-4 border-emerald-500 pl-6 mb-10 font-light">You are likely living in a constant, low-grade state of panic. It's destroying your sleep, your digestion, and your aging process. Here is how to take control back.</p>
          <h2>The 'Fight or Flight' Trap</h2>
          <p>Your nervous system has two main gears: Sympathetic (Fight or Flight) and Parasympathetic (Rest and Digest). In the modern world, emails, traffic, and news keep us stuck in 'Fight or Flight'. When you are stuck here, your body physically cannot heal.</p>
          <h2>The Instant Reset Protocol</h2>
          <p>You can hack your nervous system and force it to calm down in under two minutes using your breath. It's biology, not magic.</p>
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>The Physiological Sigh:</strong> Take two quick inhales through the nose, followed by one long, slow exhale through the mouth. Repeat this 3-5 times. This instantly lowers your heart rate and signals safety to your brain.</li>
            <li><strong>Morning Sunlight:</strong> Getting sunlight in your eyes within 30 minutes of waking up sets your cortisol rhythm for the day, preventing evening anxiety spikes.</li>
            <li><strong>Digital Boundaries:</strong> Your brain cannot distinguish between a real threat and a stressful email. Stop looking at your phone within the first hour of waking and the last hour before bed.</li>
          </ul>
          <h2>The Hebe 2026 Verdict</h2>
          <p>Stress is inevitable, but staying stressed is a choice. Use your breath as a remote control for your brain.</p>
        </div>
        
        <div className="mt-16 p-8 bg-[#121c17] border border-white/10 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to transform your health?</h3>
            <p className="text-brand-cream/70 mb-6">Let the Hebe Omni-Agent build a personalized protocol based on your exact needs.</p>
            <Link href="/quiz" className="inline-block px-8 py-4 bg-emerald-500 text-white font-bold uppercase tracking-widest rounded-sm hover:scale-105 transition-transform">
                Start Your Free Assessment
            </Link>
        </div>
      </div>
    </div>
  );
}


