"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, ArrowRight, Hourglass, Zap, Shield } from "lucide-react";
import Link from "next/link";

export default function LongevityCalculator() {
  const [age, setAge] = useState<number>(35);
  const [metrics, setMetrics] = useState({
    fasting: false,
    sauna: false,
    vo2High: false,
    sleepOptimized: false,
    rapamycin: false
  });
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    let baseLifespan = 82; // General optimistic baseline
    
    // Simplistic additive model for demo purposes
    if (metrics.fasting) baseLifespan += 2.5;
    if (metrics.sauna) baseLifespan += 1.8;
    if (metrics.vo2High) baseLifespan += 4.5; // High VO2 max is massively correlative
    if (metrics.sleepOptimized) baseLifespan += 3.0;
    if (metrics.rapamycin) baseLifespan += 5.0; // MTOR inhibition hypothetical

    // Penalty for current age progression relative to theoretical max
    const actuarialAdjustment = baseLifespan - ((age - 30) * 0.1);
    
    setResult(parseFloat(actuarialAdjustment.toFixed(1)));
  };

  const toggleMetric = (key: keyof typeof metrics) => {
    setMetrics(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen pt-40 pb-32 px-6 max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-12">
      
      {/* Visualizer Abstract Representation */}
      <div className="lg:w-1/2 relative flex items-center justify-center min-h-[500px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,245,155,0.05)_0px,transparent_70%)] rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 w-full flex flex-col items-center justify-center gap-8">
          <div className="text-center absolute top-0 left-0">
            <span className="text-brand-neon font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block"><Hourglass className="inline w-3 h-3 mr-2" /> Actuarial Velocity</span>
            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase leading-[0.9]">
              Longevity <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-light-emerald">Estimator.</span>
            </h1>
          </div>

          <div className="mt-40 w-full max-w-lg glass-card p-10 rounded-[3rem] border border-brand-neon/20 relative shadow-[0_0_50px_rgba(0,245,155,0.05)]">
            
            <div className="space-y-6 mb-10 text-left">
              <div>
                 <label className="text-xs uppercase tracking-widest text-brand-cream/60 font-bold block mb-4">Current Chronological Age</label>
                 <div className="flex items-center gap-4">
                   <input type="range" min="18" max="90" value={age} onChange={(e) => setAge(parseInt(e.target.value))} className="w-full accent-brand-neon"/>
                   <span className="text-white font-mono font-bold w-8">{age}</span>
                 </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                 <label className="text-xs uppercase tracking-widest text-[#00F0FF] font-black mb-6 flex items-center gap-2"><Zap className="w-3 h-3"/> Active Molecular Regimens</label>
                 <div className="space-y-3">
                   {[
                     { k: "vo2High", label: "Top 10% VO2 Max Classification" },
                     { k: "fasting", label: "Intermittent Fasting (16:8) + Autophagy" },
                     { k: "sauna", label: "Hyperthermic Conditioning (Sauna 4x/wk)" },
                     { k: "sleepOptimized", label: "Optimized Delta-Wave Sleep (90+ min)" },
                     { k: "rapamycin", label: "mTOR Inhibition (Rapamycin Protocol)" }
                   ].map((item) => (
                      <button 
                        key={item.k} 
                        onClick={() => toggleMetric(item.k as keyof typeof metrics)}
                        className={`w-full text-left p-4 rounded-xl text-sm font-bold uppercase tracking-widest transition-all border ${metrics[item.k as keyof typeof metrics] ? 'bg-brand-neon/10 border-brand-neon text-brand-neon cursor-default' : 'bg-black/40 border-white/10 text-white/40 hover:border-white/30'}`}
                      >
                         {item.label}
                      </button>
                   ))}
                 </div>
              </div>
            </div>

            <button 
              onClick={calculate}
              className="w-full bg-brand-neon text-black font-black uppercase tracking-widest text-sm py-4 rounded-full hover:bg-white transition-all shadow-glow"
            >
              Calculate Projected Lifespan
            </button>
          </div>
        </div>
      </div>

      {/* Target Data Panel */}
      <div className="lg:w-1/2 relative min-h-[600px] flex items-center">
        <AnimatePresence mode="wait">
          {result ? (
            <motion.div 
              key={result}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="glass-card p-10 md:p-14 rounded-[3rem] border border-white/10 w-full relative overflow-hidden bg-brand-dark"
            >
              <div className="relative z-10">
                <span className="text-[10px] tracking-[0.3em] text-brand-cream/40 uppercase font-black block mb-4 border-b border-white/10 pb-4">Theoretical Maximum Output</span>
                <span className="text-8xl font-black text-white block mb-2">{result}</span>
                <span className="text-xl text-brand-neon font-black tracking-widest uppercase mb-10 block">Estimated Lifespan</span>

                <div className="mb-10 text-brand-cream/60 font-light leading-relaxed">
                  <p className="mb-4">This projection assumes the rigid continuation of the selected biophysical regimens without systemic catastrophic failure.</p>
                  <p>In 2026, longevity is not a roll of the genetic dice. It is a strictly mathematical output based on the precise suppression of inflammation, the optimization of mitochondrial electron transport, and clinical cardiovascular training.</p>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-white mb-6 block border-t border-white/10 pt-6">Recommended Intelligence Upgrades</span>
                  <div className="space-y-4">
                     <Link href="/blog/rapamycin-mtor-inhibition" className="block p-4 rounded-2xl group transition-all border border-brand-neon/20 hover:bg-brand-neon hover:text-black">
                        <h4 className="font-bold mb-1 flex justify-between items-center">
                          Study the mTOR Pathway
                          <span className="text-[9px] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">Execute <ArrowRight className="inline w-3 h-3"/></span>
                        </h4>
                        <p className="text-sm font-light opacity-70">The most powerful life-extension pharmacological intervention currently known.</p>
                      </Link>
                  </div>
                </div>

              </div>
            </motion.div>
          ) : (
             <motion.div 
               key="empty"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="w-full h-full flex flex-col items-center justify-center text-center p-12 glass border border-dashed border-white/10 rounded-[3rem]"
             >
               <div className="w-24 h-24 border border-white/10 rounded-full flex items-center justify-center mb-8 relative">
                 <div className="absolute inset-0 bg-brand-neon/5 rounded-full animate-ping"></div>
                 <Activity className="w-8 h-8 text-white/20" />
               </div>
               <h3 className="text-2xl font-bold text-white mb-2">Awaiting Variables</h3>
               <p className="text-brand-cream/50 font-light">Input your current regimen density to theoretically project your actuarial escape velocity.</p>
             </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
