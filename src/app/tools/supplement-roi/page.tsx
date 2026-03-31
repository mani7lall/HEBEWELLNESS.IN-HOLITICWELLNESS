"use client";

import { useState } from "react";
import { DollarSign, ShieldAlert, BadgeCheck, Beaker } from "lucide-react";
import Link from 'next/link';

export default function SupplementROI() {
  const [budget, setBudget] = useState(100);

  const determineStack = () => {
    if (budget < 50) return [
      { name: "Magnesium Glycinate", cost: 15, roi: "Extreme", reason: "Fixes sleep, reduces cortisol for pennies a day." },
      { name: "Vitamin D3 + K2", cost: 12, roi: "Extreme", reason: "Crucial hormonal baseline." },
      { name: "Creatine Monohydrate", cost: 20, roi: "High", reason: "Cheap neuro-protection and cellular hydration." }
    ];
    if (budget < 150) return [
      { name: "Magnesium Glycinate", cost: 15, roi: "Extreme", reason: "Baseline necessity." },
      { name: "Vitamin D3 + K2", cost: 12, roi: "Extreme", reason: "Hormonal baseline." },
      { name: "Premium Omega-3 (EPA/DHA)", cost: 45, roi: "High", reason: "Massive systemic inflammation reduction." },
      { name: "High-Bioavailability Curcumin", cost: 35, roi: "High", reason: "Joint protection and brain fog clearance." },
      { name: "L-Theanine", cost: 15, roi: "Medium", reason: "Pairs with caffeine for smooth executive function." }
    ];
    return [
      { name: "NMN or NR (NAD+ Precursor)", cost: 80, roi: "Medium", reason: "Direct mitochondrial energy up-regulation." },
      { name: "Premium Omega-3", cost: 45, roi: "High", reason: "Systemic inflammation reduction." },
      { name: "Magnesium L-Threonate", cost: 40, roi: "High", reason: "Crosses blood-brain barrier for severe neuro-optimization." },
      { name: "Apigenin", cost: 30, roi: "Medium", reason: "Prostate health and deep sleep architecture." },
      { name: "Spermidine", cost: 60, roi: "Medium/High", reason: "Heavy cellular autophagy inducer." },
      { name: "Methylene Blue (Pharma Grade)", cost: 40, roi: "Extreme", reason: "Ultimate mitochondrial electron transport chain enhancer." }
    ];
  };

  const stack = determineStack();
  const totalCost = stack.reduce((acc, curr) => acc + curr.cost, 0);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-black px-6 max-w-4xl mx-auto">
      <Link href="/tools" className="text-brand-cream/50 text-xs font-bold uppercase tracking-widest hover:text-brand-neon mb-8 inline-block">&larr; Back to Tools</Link>

      <div className="text-center mb-16">
        <DollarSign className="w-16 h-16 text-[#00F59B] mx-auto mb-6 opacity-80"/>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-4">Supplement <br/><span className="text-[#00F59B]">ROI Analyzer.</span></h1>
        <p className="text-lg md:text-xl text-brand-cream/60 font-light max-w-2xl mx-auto leading-relaxed">
          Stop wasting money on marketing hype. Enter your monthly budget, and we will algorithmically generate the highest biological return-on-investment stack.
        </p>
      </div>

      <div className="glass-card p-10 lg:p-14 rounded-[3rem] border border-[#00F59B]/20 mb-16 shadow-[0_0_50px_rgba(0,245,155,0.05)] text-center">
        <label className="text-xs lg:text-sm font-bold uppercase tracking-widest text-[#00F59B] mb-8 block">My Maximum Monthly Budget</label>
        <div className="flex items-center justify-center gap-4 mb-8">
           <span className="text-4xl text-white/50">$</span>
           <span className="text-7xl lg:text-9xl font-black text-white tracking-tighter drop-shadow-2xl">{budget}</span>
        </div>
        <input 
          type="range" 
          min="30" max="300" step="10" 
          value={budget} 
          onChange={(e) => setBudget(Number(e.target.value))} 
          className="w-full max-w-lg mx-auto accent-[#00F59B] h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div className="mb-8 flex justify-between items-end border-b border-white/10 pb-4">
        <h2 className="text-2xl font-black text-white uppercase tracking-wide">Allocated Matrix</h2>
        <span className="text-sm font-bold text-[#00F59B] uppercase tracking-widest bg-[#00F59B]/10 px-4 py-2 rounded-lg">Estimated: ${totalCost}/mo</span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
         {stack.map((item, i) => (
           <div key={i} className="bg-black/40 border border-white/5 p-8 rounded-3xl hover:border-[#00F59B]/30 hover:bg-white/5 transition-all group relative overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                 <h3 className="text-xl font-bold text-white group-hover:text-[#00F59B] transition-colors pr-8">{item.name}</h3>
                 <span className="font-mono text-lg font-black text-white/80">${item.cost}</span>
              </div>
              <p className="text-brand-cream/60 text-sm font-light leading-relaxed mb-6 h-12">{item.reason}</p>
              
              <div className="flex items-center gap-2 mt-auto">
                 {item.roi === "Extreme" && <BadgeCheck className="w-5 h-5 text-[#00F59B]"/>}
                 {item.roi === "High" && <Beaker className="w-5 h-5 text-brand-neon-cyan"/>}
                 {item.roi === "Medium" && <ShieldAlert className="w-5 h-5 text-yellow-400"/>}
                 <span className="text-[10px] uppercase font-bold tracking-widest text-brand-cream/80">{item.roi} Clinical Yield</span>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
}
