"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Users, ShieldCheck, Heart, Globe, Target, Activity, Zap } from "lucide-react";

export default function CommunityStandards() {
  const standards = [
    { title: "Empirical Discourse", icon: <Target className="w-10 h-10 text-brand-neon" />, description: "All claims must be backed by clinical research or verified biomarker data. No anecdotal-only advice." },
    { title: "Respect for Sovereignty", icon: <ShieldCheck className="w-10 h-10 text-blue-400" />, description: "Every user has the right to choose their biological path. We provide tools, not demands." },
    { title: "Privacy First", icon: <Globe className="w-10 h-10 text-purple-400" />, description: "Never share sensitive biological data of others. Maintain zero-knowledge standards." },
    { title: "Continuous Learning", icon: <Zap className="w-10 h-10 text-brand-neon" />, description: "The longevity field evolves daily. Stay open to new research and protocol updates." }
  ];

  return (
    <div className="bg-white dark:bg-white dark:bg-brand-black min-h-screen text-slate-900 dark:text-white font-sans pb-32">
      <nav className="p-8"><Link href="/" className="inline-flex items-center text-brand-neon hover:text-slate-900 dark:text-white transition-colors"><ArrowLeft className="mr-2 w-5 h-5" /> Back</Link></nav>
      <main className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-12">The <span className="text-brand-neon">Community Standards</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {standards.map((std, i) => (
            <div key={i} className="bg-white/5 border border-black/10 dark:border-black/10 dark:border-white/10 p-10 rounded-2xl group hover:border-brand-neon transition-colors">
              <div className="mb-6 group-hover:scale-110 transition-transform">{std.icon}</div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white uppercase mb-4 group-hover:text-brand-neon transition-colors">{std.title}</h2>
              <p className="text-slate-900 dark:text-white/70 font-light leading-relaxed">{std.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}