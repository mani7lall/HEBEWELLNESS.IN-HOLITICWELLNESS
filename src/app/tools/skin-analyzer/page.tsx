"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Zap, Shield, Brain, Activity, Target, RefreshCw, ChevronRight, Droplets, Sun, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CellularSkinAnalyzer() {
  const [hydration, setHydration] = useState(50);
  const [uvExposure, setUvExposure] = useState(50);
  const [sugarIntake, setSugarIntake] = useState(50);
  const [age, setAge] = useState(30);

  const calculateIndex = () => {
    // 2026 Skin Vitality Algorithm
    const base = 100 - (age * 0.5);
    const hydFactor = (hydration - 50) * 0.2;
    const uvFactor = (50 - uvExposure) * 0.4;
    const sugarFactor = (50 - sugarIntake) * 0.3;
    return Math.max(0, Math.min(100, base + hydFactor + uvFactor + sugarFactor));
  };

  const vitalityIndex = calculateIndex();

  const getRecommendation = () => {
    if (vitalityIndex < 40) return "Immediate intervention: Spermidine (cellular renewal), High-dose Collagen, and Strict UV shielding.";
    if (vitalityIndex < 70) return "Maintain: Hyaluronic Acid, Retinol-v2, and optimized hydration cycles.";
    return "Peak Vitality: Continue current epigenetic maintenance. Occasional infrared therapy.";
  };

  return (
    <div className="bg-brand-black min-h-screen text-brand-cream font-sans pb-32">
      <nav className="p-8"><Link href="/tools" className="inline-flex items-center text-brand-neon hover:text-white transition-colors"><ArrowLeft className="mr-2 w-5 h-5" /> Back</Link></nav>
      
      <main className="max-w-4xl mx-auto px-6 pt-20">
        <div className="text-center mb-16">
           <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">Cellular <span className="text-blue-400">Skin Analyzer</span></h1>
           <p className="text-brand-cream/60 font-mono text-sm uppercase tracking-widest">Dermal Epigenetic Index v1.4</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
           <div className="bg-white/5 border border-white/10 p-10 rounded-3xl space-y-10">
              <div className="space-y-4">
                 <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-xs uppercase text-blue-400">Hydration Levels</span>
                    <span className="font-bold text-white">{hydration}%</span>
                 </div>
                 <input type="range" min="0" max="100" value={hydration} onChange={(e) => setHydration(Number(e.target.value))} className="w-full accent-blue-400" />
              </div>

              <div className="space-y-4">
                 <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-xs uppercase text-orange-400">UV Exposure (Annual Avg)</span>
                    <span className="font-bold text-white">{uvExposure}%</span>
                 </div>
                 <input type="range" min="0" max="100" value={uvExposure} onChange={(e) => setUvExposure(Number(e.target.value))} className="w-full accent-orange-400" />
              </div>

              <div className="space-y-4">
                 <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-xs uppercase text-red-400">Glycation (Sugar Intake)</span>
                    <span className="font-bold text-white">{sugarIntake}%</span>
                 </div>
                 <input type="range" min="0" max="100" value={sugarIntake} onChange={(e) => setSugarIntake(Number(e.target.value))} className="w-full accent-red-400" />
              </div>
           </div>

           <div className="bg-white/5 border border-blue-500/30 p-10 rounded-3xl text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-xl"></div>
              <h3 className="text-xl font-bold text-white uppercase mb-8">Skin Vitality Index</h3>
              <div className="relative inline-block mb-10">
                 <svg className="w-48 h-48 transform -rotate-90">
                    <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-white/5" />
                    <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" strokeDasharray="552.9" strokeDashoffset={552.9 - (552.9 * vitalityIndex) / 100} className="text-blue-500 transition-all duration-1000" />
                 </svg>
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-black text-white">{Math.round(vitalityIndex)}</span>
                    <span className="text-[10px] uppercase font-mono text-brand-cream/40">v-Index</span>
                 </div>
              </div>
              <p className="text-brand-cream/80 font-light leading-relaxed text-sm mb-10">{getRecommendation()}</p>
              <Link href="/protocols/longevity" className="block w-full py-4 bg-blue-600 text-white font-black uppercase tracking-widest text-sm rounded-sm hover:scale-105 transition-transform">Get Protocol</Link>
           </div>
        </div>
      </main>
    </div>
  );
}
