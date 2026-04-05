"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DollarSign, ArrowLeft, TrendingUp, ShieldCheck, Sparkles, CheckCircle2, PieChart } from "lucide-react";
import Link from "next/link";

export default function SupplementROICalculator() {
  const [monthlySpend, setMonthlySpend] = useState(150);
  const [essentialCount, setEssentialCount] = useState(3);
  const [experimentalCount, setEssentialExperimentalCount] = useState(2);
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const score = Math.max(0, 100 - (experimentalCount * 15) + (essentialCount * 10));
    const annualSpend = monthlySpend * 12;
    setResult({ score, annualSpend });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0f0d] text-slate-900 dark:text-white py-32 px-6 transition-all duration-500">
      <div className="max-w-3xl mx-auto">
        <Link href="/tools" className="inline-flex items-center text-brand-neon hover:text-white font-bold text-xs uppercase tracking-[0.2em] mb-12 transition-all">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Health Tests
        </Link>

        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <span className="bg-brand-neon/10 text-brand-neon text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-brand-neon/20 flex items-center gap-2">
              <Sparkles className="w-3 h-3" /> Autonomous Asset Audit
            </span>
          </div>
          <DollarSign className="w-20 h-20 text-brand-neon mx-auto mb-8 opacity-80"/>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-[0.8]">Stack <br/><span className="text-brand-neon">ROI.</span></h1>
          <p className="text-xl font-light text-slate-600 dark:text-white/60 max-w-xl mx-auto leading-relaxed">Analyze the cost-to-benefit ratio of your current supplement protocol.</p>
        </div>

        <div className="glass-panel p-10 rounded-[2.5rem] border border-black/5 dark:border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-neon/5 blur-[100px] -z-10 rounded-full"></div>
          
          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-neon mb-4 block">Monthly Spend ($)</label>
                  <input type="range" min="0" max="1000" step="10" value={monthlySpend} onChange={(e) => setMonthlySpend(Number(e.target.value))} className="w-full h-1.5 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-neon" />
                  <div className="text-3xl font-black mt-4">${monthlySpend}</div>
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-neon mb-4 block">Core Essentials (Vitamin D, Omega-3, etc)</label>
                  <input type="range" min="0" max="10" value={essentialCount} onChange={(e) => setEssentialCount(Number(e.target.value))} className="w-full h-1.5 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-neon" />
                  <div className="text-3xl font-black mt-4">{essentialCount}</div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-neon mb-4 block">Experimental Compounds (NMN, Rapamycin, etc)</label>
                  <input type="range" min="0" max="10" value={experimentalCount} onChange={(e) => setEssentialExperimentalCount(Number(e.target.value))} className="w-full h-1.5 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-neon" />
                  <div className="text-3xl font-black mt-4">{experimentalCount}</div>
                </div>
              </div>
            </div>

            <button onClick={calculate} className="w-full py-6 bg-brand-neon text-brand-black font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-white transition-all shadow-glow flex justify-center items-center gap-3">
              <PieChart className="w-5 h-5"/> Calculate Stack Efficiency
            </button>
          </div>
        </div>

        <AnimatePresence>
          {result && (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mt-12 p-12 bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-brand-neon/20 rounded-[3rem] text-center relative overflow-hidden">
              <div className="relative inline-block mb-8">
                <div className="w-40 h-40 rounded-full border-[10px] border-brand-neon flex items-center justify-center text-5xl font-black shadow-glow">
                  {result.score}%
                </div>
                <TrendingUp className="absolute -top-4 -right-4 w-12 h-12 text-brand-neon animate-pulse"/>
              </div>
              <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">Efficiency Score</h2>
              <p className="text-lg font-light text-slate-600 dark:text-white/60 mb-10 max-w-lg mx-auto">
                Your annual biological investment is <span className="text-brand-neon font-bold">${result.annualSpend}</span>. 
                {result.score > 80 ? " You have a highly optimized stack with low waste." : " You may be over-investing in low-certainty experimental compounds."}
              </p>
              
              <div className="bg-brand-neon/5 p-8 rounded-3xl border border-brand-neon/10 text-left">
                <h3 className="font-black mb-4 flex items-center gap-2 uppercase tracking-widest text-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-neon"/> Financial Optimization
                </h3>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-white/60 font-light">
                  <li>• Prioritize core deficiencies identified in blood work over trending compounds.</li>
                  <li>• Use pulsed protocols for high-cost longevity drugs to reduce metabolic load and cost.</li>
                  <li>• Subscribe to Hebe's group-buy program to reduce annual spend by 25%.</li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
