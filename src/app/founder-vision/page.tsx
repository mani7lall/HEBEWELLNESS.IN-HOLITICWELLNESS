"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Target, Heart, Zap, Globe, Brain, Shield, Activity } from "lucide-react";

export default function FounderVision() {
  return (
    <div className="bg-white dark:bg-white dark:bg-brand-black min-h-screen text-slate-900 dark:text-white font-sans pb-32">
      <nav className="p-8"><Link href="/" className="inline-flex items-center text-brand-neon hover:text-slate-900 dark:text-white transition-colors"><ArrowLeft className="mr-2 w-5 h-5" /> Back</Link></nav>
      <main className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-12">The <span className="text-brand-neon">Founder's Vision</span></h1>
        <div className="prose prose-invert prose-lg max-w-none">
          <p className="text-2xl text-slate-900 dark:text-white font-light mb-12 leading-relaxed">
            "Hebe was born from a simple realization: the most important software we will ever interact with is our own biology. Yet, we understand it less than the apps on our phones. We set out to build a platform that gives every human the tools to be their own clinical lead."
          </p>
          <div className="space-y-16">
            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white uppercase tracking-tight mb-6">Democratizing Longevity</h2>
              <p>For too long, advanced bio-optimization was the playground of the elite. We are breaking those walls. Our Hebe orchestrator is designed to be affordable, accessible, and high-signal for everyone, from senior doctors to health-conscious enthusiasts.</p>
            </section>
            <section>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white uppercase tracking-tight mb-6">The Next Phase of Evolution</h2>
              <p>We are not just extending life; we are enhancing it. Imagine a world where cognitive decline is optional, where energy levels are stable from 20 to 120, and where every cell in your body is running its optimized protocol. That is the world we are building.</p>
            </section>
            <div className="bg-brand-neon/10 border border-brand-neon/20 p-8 rounded-2xl mb-16">
               <h3 className="text-brand-neon font-black uppercase text-xl mb-4">A Note from the Team</h3>
               <p className="text-sm font-light text-slate-900 dark:text-white/70 leading-relaxed italic">
                 "We are committed to the long game. This platform will continue to evolve as the science does. Thank you for being part of this biological revolution."
               </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}