"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Beaker, Microscope, Target, LineChart, Activity, Zap, Layers } from "lucide-react";

export default function LabTestingMethodology() {
  const steps = [
    { title: "HPLC Purity Verification", icon: <Beaker className="w-10 h-10 text-brand-neon" />, description: "Confirming chemical identity and quantity of target compounds with 99.9% precision." },
    { title: "Mass Spectrometry Analysis", icon: <Microscope className="w-10 h-10 text-blue-400" />, description: "Analyzing molecular weight and fragmentation to ensure no contaminants or impurities." },
    { title: "Heavy Metal Testing", icon: <Target className="w-10 h-10 text-purple-400" />, description: "Zero-tolerance policy for Lead, Arsenic, Cadmium, and Mercury. Verified below detection limits." },
    { title: "Microbiological Screening", icon: <Activity className="w-10 h-10 text-brand-neon" />, description: "Testing for mold, yeast, and pathogens to ensure absolute clinical safety." }
  ];

  return (
    <div className="bg-white dark:bg-white dark:bg-brand-black min-h-screen text-slate-900 dark:text-white font-sans pb-32">
      <nav className="p-8"><Link href="/" className="inline-flex items-center text-brand-neon hover:text-slate-900 dark:text-white transition-colors"><ArrowLeft className="mr-2 w-5 h-5" /> Back</Link></nav>
      <main className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-12">The <span className="text-brand-neon">Testing Methodology</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-white/5 border border-black/10 dark:border-black/10 dark:border-white/10 p-10 rounded-2xl group hover:border-brand-neon transition-colors">
              <div className="mb-6 group-hover:scale-110 transition-transform">{step.icon}</div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white uppercase mb-4 group-hover:text-brand-neon transition-colors">{step.title}</h2>
              <p className="text-slate-900 dark:text-white/70 font-light leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}