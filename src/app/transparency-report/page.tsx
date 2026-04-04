"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck, Database, Target, Clock, Fingerprint, Layers, Activity } from "lucide-react";

export default function TransparencyReport() {
  const reports = [
    { title: "Batch 0xA9 - NMN Purity", status: "Verified 99.9%", date: "March 2026", details: "Tested via HPLC and Mass Spectrometry at ISO 17025 accredited labs." },
    { title: "Batch 0xFB - BPC-157 Synthesis", status: "Verified 99.8%", date: "Feb 2026", details: "Confirmed peptide sequence and purity, 0.0% heavy metal trace." },
    { title: "Batch 0x3D - Resveratrol Extraction", status: "Verified 99.5%", date: "Jan 2026", details: "Organic extraction process verified for maximum bioavailability." }
  ];

  return (
    <div className="bg-white dark:bg-white dark:bg-brand-black min-h-screen text-slate-900 dark:text-white font-sans pb-32">
      <nav className="p-8"><Link href="/" className="inline-flex items-center text-brand-neon hover:text-slate-900 dark:text-white transition-colors"><ArrowLeft className="mr-2 w-5 h-5" /> Back</Link></nav>
      <main className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-12">The <span className="text-brand-neon">Transparency Report</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reports.map((report, i) => (
            <div key={i} className="bg-white/5 border border-black/10 dark:border-black/10 dark:border-white/10 p-8 rounded-2xl group hover:border-brand-neon transition-colors">
              <div className="flex justify-between items-center mb-6">
                <span className="text-brand-neon font-mono text-[10px] uppercase tracking-widest">{report.date}</span>
                <ShieldCheck className="w-6 h-6 text-brand-neon" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white uppercase mb-2 group-hover:text-brand-neon transition-colors">{report.title}</h2>
              <p className="text-brand-neon font-mono text-xs uppercase mb-6 tracking-widest">{report.status}</p>
              <p className="text-slate-900 dark:text-white/70 font-light leading-relaxed text-sm mb-6">{report.details}</p>
              <button className="w-full py-2 border border-white/20 text-slate-900 dark:text-white font-bold uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition-all rounded-sm">Download COA Data</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}