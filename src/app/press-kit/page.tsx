"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Image, FileText, Globe, Target, Activity, Zap } from "lucide-react";

export default function PressKit() {
  const assets = [
    { title: "Hebe Logo Package", type: "SVG / PNG / AI", icon: <Image className="w-10 h-10 text-brand-neon" />, description: "Complete brand assets for high-fidelity publication." },
    { title: "Founder Portraits", type: "High Res JPG", icon: <Image className="w-10 h-10 text-blue-400" />, description: "Official photography for media and conference use." },
    { title: "2026 Shift Whitepaper", type: "PDF", icon: <FileText className="w-10 h-10 text-purple-400" />, description: "Detailed clinical and bioinformatics architecture." },
    { title: "Clinical Standards Guide", type: "PDF", icon: <FileText className="w-10 h-10 text-brand-neon" />, description: "Standard operating procedures for our clinical network." }
  ];

  return (
    <div className="bg-brand-black min-h-screen text-brand-cream font-sans pb-32">
      <nav className="p-8"><Link href="/" className="inline-flex items-center text-brand-neon hover:text-white transition-colors"><ArrowLeft className="mr-2 w-5 h-5" /> Back</Link></nav>
      <main className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-12">The <span className="text-brand-neon">Press Kit</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {assets.map((asset, i) => (
            <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-2xl group hover:border-brand-neon transition-colors">
              <div className="mb-6 group-hover:scale-110 transition-transform">{asset.icon}</div>
              <h2 className="text-3xl font-bold text-white uppercase mb-2 group-hover:text-brand-neon transition-colors">{asset.title}</h2>
              <p className="text-brand-neon font-mono text-[10px] uppercase mb-4 tracking-widest">{asset.type}</p>
              <p className="text-brand-cream/70 font-light leading-relaxed text-sm mb-6">{asset.description}</p>
              <button className="w-full py-2 border border-white/20 text-white font-bold uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition-all rounded-sm flex items-center justify-center gap-2">
                <Download className="w-4 h-4" /> Download Assets
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
