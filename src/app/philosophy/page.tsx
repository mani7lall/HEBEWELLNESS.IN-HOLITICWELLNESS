"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, Target, Activity, Brain, Shield, Zap, Heart } from "lucide-react";

export default function PhilosophyExtended() {
  return (
    <div className="bg-brand-black min-h-screen text-brand-cream font-sans pb-32">
      <nav className="p-8">
        <Link href="/" className="inline-flex items-center text-brand-neon hover:text-white transition-colors group">
          <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Intelligence Hub
        </Link>
      </nav>

      <main className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">
            The 2026 <br/>
            <span className="text-brand-neon">Biological Mandate</span>
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-brand-cream/80 leading-relaxed mb-12 italic border-l-4 border-brand-neon pl-8 py-4 bg-brand-neon/5">
              "We no longer accept biological decay as a certainty. In 2026, aging is a technical problem with an engineering solution. The Hebe mandate is simple: Rewrite the software of life."
            </p>

            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white uppercase tracking-tight flex items-center gap-3 mb-6">
                <Target className="text-brand-neon w-8 h-8"/> 01. Precision Orchestration
              </h2>
              <p>Standard medicine operates on averages. Hebe operates on *you*. By utilizing the Hebe orchestration layer, we continuously map your multi-omic data against current clinical research, creating a dynamic, real-time feedback loop that eliminates guesswork.</p>
            </section>

            <section className="mb-16">
               <h2 className="text-3xl font-bold text-white uppercase tracking-tight flex items-center gap-3 mb-6">
                <Activity className="text-blue-400 w-8 h-8"/> 02. Systems-Level Resilience
              </h2>
              <p>We do not treat symptoms; we optimize systems. Whether it's mitochondrial efficiency, glymphatic clearance, or autonomic nervous system balance, our protocols target the fundamental pillars of human performance to ensure long-term structural integrity.</p>
            </section>

            <section className="mb-16">
               <h2 className="text-3xl font-bold text-white uppercase tracking-tight flex items-center gap-3 mb-6">
                <Shield className="text-purple-400 w-8 h-8"/> 03. Radical Transparency
              </h2>
              <p>The era of "proprietary blends" is over. Every compound, every dose, and every mechanism of action is laid bare. We provide the research, the clinical trials, and the raw data, empowering you to be the sovereign architect of your own biology.</p>
            </section>

            <div className="bg-brand-neon/10 border border-brand-neon/20 p-8 rounded-2xl mb-16">
               <h3 className="text-brand-neon font-black uppercase text-xl mb-4 flex items-center gap-2">
                 <Zap className="w-6 h-6"/> The Future of Human Evolution
               </h3>
               <p className="text-sm font-light text-brand-cream/70 leading-relaxed">
                 By bridging the gap between bioinformatics and holistic intervention, we are not just extending lifespan—we are expanding the horizons of human potential. The 2026 shift is here. Welcome to the era of optimized existence.
               </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
