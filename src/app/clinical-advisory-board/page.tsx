"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Users, Stethoscope, Microscope, Beaker, Brain, Heart, Globe } from "lucide-react";

export default function ClinicalAdvisoryBoard() {
  const members = [
    { name: "Dr. Elena Vance", role: "Neuro-Informatics Lead", bio: "Former Stanford Researcher specializing in Hebe-driven cognitive stacks and glymphatic clearance." },
    { name: "Dr. Marcus Thorne", role: "Endocrinology Specialist", bio: "20 years of experience in advanced peptide therapy and systemic hormonal optimization." },
    { name: "Dr. Julianne Gray", role: "Longevity Bioinformatician", bio: "Leading expert in epigenetic age reversal and Horvath-v2 clock calibration." },
    { name: "Dr. Samuel Park", role: "Metabolic Resilience Specialist", bio: "Expert in continuous glucose monitoring and insulin sensitivity architecture." }
  ];

  return (
    <div className="bg-white dark:bg-white dark:bg-brand-black min-h-screen text-slate-900 dark:text-white font-sans pb-32">
      <nav className="p-8"><Link href="/" className="inline-flex items-center text-brand-neon hover:text-slate-900 dark:text-white transition-colors"><ArrowLeft className="mr-2 w-5 h-5" /> Back</Link></nav>
      <main className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-12">The <span className="text-brand-neon">Clinical Advisory Board</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {members.map((member, i) => (
            <div key={i} className="bg-white/5 border border-black/10 dark:border-black/10 dark:border-white/10 p-8 rounded-2xl group hover:border-brand-neon transition-colors">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white uppercase mb-2 group-hover:text-brand-neon transition-colors">{member.name}</h2>
              <p className="text-brand-neon font-mono text-xs uppercase mb-6 tracking-widest border border-brand-neon/30 px-3 py-1 rounded-full inline-block">{member.role}</p>
              <p className="text-slate-900 dark:text-white/70 font-light leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}