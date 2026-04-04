"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Beaker, Zap, Moon, Sun, ArrowRight, Brain, Heart, Shield, Plus, Mail } from "lucide-react";
import Link from "next/link";

export default function StackBuilder() {
  const [goal, setGoal] = useState<string | null>(null);
  const [budget, setBudget] = useState(100);

  const stacks = {
    Performance: { AM: ["NMN 500mg", "Alpha-GPC 300mg", "Caffeine + L-Theanine"], PM: ["Magnesium Glycinate", "Zinc"], cost: 85 },
    Longevity: { AM: ["Resveratrol 500mg", "TMG 500mg", "Vitamin D3+K2"], PM: ["Apigenin", "Spermidine"], cost: 120 },
    Cognition: { AM: ["Lion's Mane 1g", "Bacopa Monnieri", "Tyrosine"], PM: ["Phosphatidylserine"], cost: 95 }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-white dark:bg-brand-black text-slate-900 dark:text-white py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Beaker className="w-16 h-16 text-brand-neon-cyan mx-auto mb-6"/>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">Custom <span className="text-brand-neon-cyan">Stack Builder.</span></h1>
          <p className="text-xl font-light text-slate-900 dark:text-white/60">Architect your AM/PM biological support system based on outcome and budget.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {Object.keys(stacks).map((s) => (
             <button 
               key={s} 
               onClick={() => setGoal(s)}
               className={`p-10 rounded-[2.5rem] border transition-all text-center group ${goal === s ? 'bg-brand-neon-cyan text-brand-black border-brand-neon-cyan shadow-glow' : 'bg-white/5 border-black/10 dark:border-black/10 dark:border-white/10 hover:border-brand-neon-cyan/50'}`}
             >
               <h3 className="text-2xl font-black uppercase mb-2">{s}</h3>
               <p className="text-xs font-bold opacity-60">Focus on {s === 'Performance' ? 'ATP Production' : s === 'Longevity' ? 'NAD+ precursors' : 'Neurogenesis'}</p>
             </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {goal ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <div className="bg-white/5 border border-black/10 dark:border-black/10 dark:border-white/10 p-12 rounded-[3rem]">
                 <div className="flex items-center gap-4 mb-8">
                    <Sun className="w-10 h-10 text-yellow-400"/>
                    <h3 className="text-3xl font-black uppercase">AM Support</h3>
                 </div>
                 <ul className="space-y-6">
                    {stacks[goal as keyof typeof stacks].AM.map((item, i) => (
                       <li key={i} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-50 dark:bg-black/40 border border-black/5 dark:border-black/5 dark:border-white/5 rounded-2xl">
                          <span className="font-bold text-lg">{item}</span>
                          <Plus className="w-5 h-5 text-brand-neon-cyan opacity-40"/>
                       </li>
                    ))}
                 </ul>
              </div>

              <div className="bg-white/5 border border-black/10 dark:border-black/10 dark:border-white/10 p-12 rounded-[3rem]">
                 <div className="flex items-center gap-4 mb-8">
                    <Moon className="w-10 h-10 text-brand-neon-cyan"/>
                    <h3 className="text-3xl font-black uppercase">PM Reset</h3>
                 </div>
                 <ul className="space-y-6">
                    {stacks[goal as keyof typeof stacks].PM.map((item, i) => (
                       <li key={i} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-50 dark:bg-black/40 border border-black/5 dark:border-black/5 dark:border-white/5 rounded-2xl">
                          <span className="font-bold text-lg">{item}</span>
                          <Plus className="w-5 h-5 text-brand-neon-cyan opacity-40"/>
                       </li>
                    ))}
                 </ul>
              </div>

              <div className="md:col-span-2 bg-brand-neon-cyan/10 border border-brand-neon-cyan/40 p-12 rounded-[3rem] text-center">
                 <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Total Estimated Monthly Cost: <span className="text-brand-neon-cyan">${stacks[goal as keyof typeof stacks].cost}/mo</span></h3>
                 <p className="text-slate-900 dark:text-white/60 mb-10 font-light italic">"These dosages are peer-reviewed for a 75kg baseline subject."</p>
                 
                 <div className="max-w-2xl mx-auto p-10 bg-gray-50 dark:bg-gray-50 dark:bg-black/40 rounded-3xl border border-black/10 dark:border-black/10 dark:border-white/10">
                    <Mail className="w-12 h-12 text-brand-neon-cyan mx-auto mb-6"/>
                    <h4 className="text-2xl font-black text-slate-900 dark:text-white mb-2 uppercase">Unlock Sourcing Guide</h4>
                    <p className="text-sm text-slate-900 dark:text-white/50 mb-8 font-light">Enter your email to receive our vetted whitelist of 3rd party batch-tested suppliers for this exact stack.</p>
                    <form className="flex flex-col sm:flex-row gap-4">
                       <input type="email" placeholder="Sourcing Dispatch Email" className="flex-1 bg-gray-50 dark:bg-gray-50 dark:bg-black border border-black/10 dark:border-black/10 dark:border-white/10 rounded-xl px-6 py-4 text-slate-900 dark:text-white outline-none focus:border-brand-neon-cyan" />
                       <button type="button" className="bg-brand-neon-cyan text-brand-black px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all">Send Guide</button>
                    </form>
                 </div>
              </div>
            </motion.div>
          ) : (
            <div className="h-96 flex items-center justify-center border-2 border-dashed border-black/10 dark:border-black/10 dark:border-white/10 rounded-[3rem] text-slate-900 dark:text-white/20 font-black uppercase tracking-widest text-2xl">
              Selection Required
            </div>
          )}
        </AnimatePresence>

        <div className="mt-16 text-center">
           <Link href="/" className="text-slate-900 dark:text-white/40 hover:text-brand-neon-cyan transition-colors text-xs font-bold uppercase tracking-[0.2em] flex justify-center items-center gap-3">
             Exit Architect <ArrowRight className="w-4 h-4"/>
           </Link>
        </div>
      </div>
    </div>
  );
}