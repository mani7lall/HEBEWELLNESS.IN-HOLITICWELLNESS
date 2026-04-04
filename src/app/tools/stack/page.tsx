"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Check, Shield, Activity, Droplet, ArrowRight, X } from "lucide-react";

export default function StackArchitect() {
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  
  const compounds = [
    { id: "sv_16", name: "Supreme Vitality 1:6", type: "Full Spectrum Extract", icon: <Droplet/>, desc: "Basal metabolic homeostasis and extreme neuro-inflammation suppression.", req: "Foundational" },
    { id: "nf_lth", name: "Neural Focus Matrix", type: "Nootropic CBD + L-Theanine", icon: <Activity/>, desc: "Alpha-wave induction for sustained, jitter-free flow state.", req: "Cognitive" },
    { id: "rm_glc", name: "Recovery Matrix Balm", type: "Transdermal Cascade", icon: <Shield/>, desc: "Targeted myo-fascial suppression of delayed onset muscle soreness (DOMS).", req: "Physical" },
    { id: "nad_pt", name: "NAD+ Precursors", type: "Metabolic Catalyst", icon: <Activity/>, desc: "Mitochondrial ATP upregulation. Amplifies the uptake of CBD by 2x.", req: "Cellular" },
  ];

  const toggleCompound = (id: string) => {
    setSelectedTools(prev => prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]);
  };

  const calculateEfficacy = () => {
    let score = selectedTools.length * 25;
    if (selectedTools.includes("sv_16") && selectedTools.includes("nad_pt")) score += 15; // Synergy bonus
    return Math.min(score, 100);
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center">
      
      <div className="text-center mb-16 relative z-10 w-full">
        <span className="text-brand-neon font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-6 block border border-brand-neon/20 px-4 py-1.5 rounded-full inline-block bg-brand-neon/5 shadow-glow">Advanced Pharmacokinetics</span>
        <h1 className="text-5xl md:text-8xl font-black tracking-tight text-slate-900 dark:text-white mb-6 uppercase block max-w-5xl mx-auto leading-none">
          Construct Your <br/><span className="text-gradient-neon">Longevity Stack.</span>
        </h1>
        <p className="text-xl text-slate-900 dark:text-white/60 max-w-2xl mx-auto font-light mb-12">
          Modular cellular architecture. Select your biological imperatives below and generate your optimal hyper-absorbable protocol.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 w-full relative z-10">
        
        {/* Selection Area */}
        <div className="lg:w-2/3 space-y-4">
          <h3 className="text-slate-900 dark:text-white text-sm tracking-widest uppercase font-bold mb-6 flex items-center gap-3"><Activity className="text-brand-neon"/> Available Compounds</h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            {compounds.map(c => (
              <div 
                key={c.id} 
                onClick={() => toggleCompound(c.id)}
                className={`glass border rounded-2xl p-6 cursor-pointer transition-all duration-300 magnetic-button relative overflow-hidden group ${selectedTools.includes(c.id) ? 'border-brand-neon shadow-glow bg-brand-neon/5' : 'border-black/10 dark:border-black/10 dark:border-white/10 hover:border-white/30 hover:bg-white/5'}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl ${selectedTools.includes(c.id) ? 'bg-brand-neon text-brand-black' : 'bg-gray-50 dark:bg-gray-50 dark:bg-black/50 text-slate-900 dark:text-white'}`}>
                    {c.icon}
                  </div>
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${selectedTools.includes(c.id) ? 'bg-brand-neon border-brand-neon text-brand-black' : 'border-white/20 text-transparent'}`}>
                    <Check className="w-4 h-4" />
                  </div>
                </div>
                <span className="text-[10px] tracking-widest text-brand-neon font-bold uppercase mb-1 block">{c.type}</span>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{c.name}</h4>
                <p className="text-sm text-slate-900 dark:text-white/50 leading-relaxed font-light">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Synergistic Readout */}
        <div className="lg:w-1/3">
          <div className="sticky top-32 glass-panel p-8 rounded-3xl border border-black/10 dark:border-black/10 dark:border-white/10 mt-14 lg:mt-0">
            <h3 className="text-slate-900 dark:text-white text-sm tracking-widest uppercase font-bold mb-8 border-b border-black/10 dark:border-black/10 dark:border-white/10 pb-4">Architectural Readout</h3>
            
            <div className="mb-12">
              <div className="flex justify-between items-end mb-4">
                <span className="text-slate-900 dark:text-white/60 text-sm">Target Efficacy</span>
                <span className="text-3xl font-black text-brand-neon glow-text">{calculateEfficacy()}%</span>
              </div>
              <div className="w-full bg-gray-50 dark:bg-gray-50 dark:bg-black/50 rounded-full h-2 relative overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${calculateEfficacy()}%` }}
                  transition={{ type: "spring", bounce: 0.1 }}
                  className="absolute top-0 left-0 h-full bg-brand-neon shadow-[0_0_10px_#00EDA5]"
                />
              </div>
            </div>

            <div className="space-y-4 mb-12">
              <AnimatePresence>
                {selectedTools.map(id => {
                  const comp = compounds.find(c => c.id === id);
                  return (
                    <motion.div 
                      key={id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20, height: 0 }}
                      className="flex justify-between items-center bg-gray-50 dark:bg-gray-50 dark:bg-black/40 p-3 rounded-lg border border-black/5 dark:border-black/5 dark:border-white/5"
                    >
                      <span className="text-slate-900 dark:text-white text-sm font-medium">{comp?.name}</span>
                      <button onClick={(e) => { e.stopPropagation(); toggleCompound(id); }} className="text-slate-900 dark:text-white/40 hover:text-brand-neon">
                        <X className="w-4 h-4" />
                      </button>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              {selectedTools.length === 0 && (
                <div className="text-slate-900 dark:text-white/30 text-sm italic py-4 text-center border border-dashed border-black/10 dark:border-black/10 dark:border-white/10 rounded-lg">
                  No vectors selected. Protocol inactive.
                </div>
              )}
            </div>

            <button 
              disabled={selectedTools.length === 0}
              className={`w-full py-5 rounded-full text-xs tracking-widest uppercase font-black transition-all flex items-center justify-center gap-2 ${selectedTools.length > 0 ? 'bg-brand-neon text-brand-black hover:bg-white shadow-glow-strong' : 'bg-white/5 text-slate-900 dark:text-white/30 cursor-not-allowed border border-black/5 dark:border-black/5 dark:border-white/5'}`}
            >
              Initialize Synthesis <ArrowRight className="w-4 h-4"/>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}