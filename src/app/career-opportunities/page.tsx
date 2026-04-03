"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Target, Brain, Microscope, Globe, Zap, Heart, Activity } from "lucide-react";

export default function CareerOpportunities() {
  const jobs = [
    { title: "Senior Bio-informatician", location: "Remote / SF", description: "Design next-gen Hebe agents for epigenetic data orchestration and Horvath clock calibration." },
    { title: "Clinical Longevity Physician", location: "Global / Telehealth", description: "Lead patient clinical protocols and integrate multi-omic data for holistic optimization." },
    { title: "Quantum Cryptography Lead", location: "Zug, Switzerland", description: "Architect zero-knowledge proof protocols for decentralized biological data storage." },
    { title: "Systems Biology Architect", location: "Remote", description: "Model complex physiological interactions for personalized supplement stacking." }
  ];

  return (
    <div className="bg-brand-black min-h-screen text-brand-cream font-sans pb-32">
      <nav className="p-8"><Link href="/" className="inline-flex items-center text-brand-neon hover:text-white transition-colors"><ArrowLeft className="mr-2 w-5 h-5" /> Back</Link></nav>
      <main className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-12">The <span className="text-brand-neon">Future Workforce</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {jobs.map((job, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-2xl group hover:border-brand-neon transition-colors">
              <h2 className="text-3xl font-bold text-white uppercase mb-2 group-hover:text-brand-neon transition-colors">{job.title}</h2>
              <p className="text-brand-neon font-mono text-xs uppercase mb-6 tracking-widest">{job.location}</p>
              <p className="text-brand-cream/70 font-light leading-relaxed text-sm mb-6">{job.description}</p>
              <button className="w-full py-2 border border-brand-neon text-brand-neon font-bold uppercase text-[10px] tracking-widest hover:bg-brand-neon hover:text-black transition-all rounded-sm">Apply Now</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
