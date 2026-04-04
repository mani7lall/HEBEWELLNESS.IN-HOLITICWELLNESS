"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Activity, ArrowRight, Shield, Dumbbell } from "lucide-react";
import Link from "next/link";

export default function VO2MaxCalculator() {
  const [age, setAge] = useState<number>(35);
  const [restingHr, setRestingHr] = useState<number>(60);
  const [maxHr, setMaxHr] = useState<number>(185);
  const [vo2, setVo2] = useState<number | null>(null);

  const calculate = () => {
    // Uth-Sørensen-Overgaard-Pedersen estimation: VO2max = 15.3 x (HRmax / HRrest)
    const result = 15.3 * (maxHr / restingHr);
    setVo2(parseFloat(result.toFixed(1)));
  };

  const getPercentile = (score: number) => {
    if (score > 55) return "Top 1% (Elite Athletic)";
    if (score > 48) return "Top 5% (Superior)";
    if (score > 43) return "Top 20% (Excellent)";
    if (score > 38) return "Top 50% (Good)";
    return "Below Average (High Mortality Risk)";
  };

  return (
    <div className="min-h-screen pt-40 pb-32 px-6 max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-12">
      
      {/* Visualizer Abstract Representation */}
      <div className="lg:w-1/2 relative flex items-center justify-center min-h-[500px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.1)_0px,transparent_70%)] rounded-full blur-[100px] pointer-events-none"></div>

        <div className="relative z-10 w-full flex flex-col items-center justify-center gap-8">
          <div className="text-center absolute top-0 left-0">
            <span className="text-rose-500 font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block"><Heart className="inline w-3 h-3 mr-2" /> Cardiopulmonary Engine</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter uppercase leading-[0.9]">
              VO2 Max <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-red-800">Estimator.</span>
            </h1>
          </div>

          <div className="mt-40 w-full max-w-sm glass-card p-10 rounded-[3rem] border border-rose-500/20 relative shadow-[0_0_50px_rgba(244,63,94,0.1)]">
            <Activity className="w-16 h-16 text-rose-500 mb-6 mx-auto animate-pulse"/>
            
            <div className="space-y-6 mb-10 text-left">
              <div>
                 <label className="text-xs uppercase tracking-widest text-slate-900 dark:text-white/60 font-bold block mb-2">Age (Years)</label>
                 <div className="flex items-center gap-4">
                   <input type="range" min="18" max="90" value={age} onChange={(e) => setAge(parseInt(e.target.value))} className="w-full accent-rose-500"/>
                   <span className="text-slate-900 dark:text-white font-mono font-bold w-8">{age}</span>
                 </div>
              </div>
              <div>
                 <label className="text-xs uppercase tracking-widest text-slate-900 dark:text-white/60 font-bold block mb-2">Resting Heart Rate (BPM)</label>
                 <div className="flex items-center gap-4">
                   <input type="range" min="35" max="100" value={restingHr} onChange={(e) => setRestingHr(parseInt(e.target.value))} className="w-full accent-rose-500"/>
                   <span className="text-slate-900 dark:text-white font-mono font-bold w-8">{restingHr}</span>
                 </div>
              </div>
              <div>
                 <label className="text-xs uppercase tracking-widest text-slate-900 dark:text-white/60 font-bold block mb-2">Max Heart Rate (BPM)</label>
                 <div className="flex items-center gap-4">
                   <input type="range" min="140" max="220" value={maxHr} onChange={(e) => setMaxHr(parseInt(e.target.value))} className="w-full accent-rose-500"/>
                   <span className="text-slate-900 dark:text-white font-mono font-bold w-8">{maxHr}</span>
                 </div>
              </div>
            </div>

            <button 
              onClick={calculate}
              className="w-full bg-rose-500 text-slate-900 dark:text-white font-black uppercase tracking-widest text-sm py-4 rounded-full hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(244,63,94,0.4)]"
            >
              Calculate Aerobic Capacity
            </button>
          </div>
        </div>
      </div>

      {/* Target Data Panel */}
      <div className="lg:w-1/2 relative min-h-[600px] flex items-center">
        <AnimatePresence mode="wait">
          {vo2 ? (
            <motion.div 
              key={vo2}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="glass-card p-10 md:p-14 rounded-[3rem] border border-black/10 dark:border-black/10 dark:border-white/10 w-full relative overflow-hidden"
            >
              <div className="relative z-10">
                <span className="text-[10px] tracking-widest text-slate-900 dark:text-white/40 uppercase font-black block mb-4 border-b border-black/10 dark:border-black/10 dark:border-white/10 pb-4">Diagnostic Result</span>
                <span className="text-7xl font-black text-slate-900 dark:text-white block mb-2">{vo2}</span>
                <span className="text-xl text-slate-900 dark:text-white/70 font-light mb-10 block">mL/(kg·min)</span>

                <div className="mb-10 p-6 bg-gray-50 dark:bg-gray-50 dark:bg-black/40 rounded-2xl border border-black/5 dark:border-black/5 dark:border-white/5">
                  <span className="text-xs uppercase tracking-widest font-bold text-rose-500 mb-2 block flex items-center gap-2"><Activity className="w-4 h-4"/> Statistical Cohort</span>
                  <div className="text-lg text-slate-900 dark:text-white font-bold">{getPercentile(vo2)}</div>
                  <p className="text-sm text-slate-900 dark:text-white/50 mt-2 font-light">
                    VO2 Max is the single greatest predictor of all-cause mortality, outperforming smoking status, diabetes, and hypertension combined.
                  </p>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-[#14B897] mb-6 block border-t border-black/10 dark:border-black/10 dark:border-white/10 pt-6">Hebe Cardiovascular Interventions</span>
                  <div className="space-y-4">
                     <Link href="/blog/methylene-blue-mitochondria" className="block bg-gray-50 dark:bg-gray-50 dark:bg-black/40 border border-black/5 dark:border-black/5 dark:border-white/5 hover:border-[#14B897]/50 p-4 rounded-2xl group transition-all">
                        <h4 className="text-slate-900 dark:text-white font-bold mb-1 flex justify-between items-center">
                          Mitochondrial ATP Bypass
                          <span className="text-[9px] text-[#14B897] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">Execute <ArrowRight className="inline w-3 h-3"/></span>
                        </h4>
                        <p className="text-sm font-light text-slate-900 dark:text-white/50">Utilize Methylene Blue to drive systemic oxygen respiration efficiently.</p>
                      </Link>
                      <Link href="/protocols" className="block bg-gray-50 dark:bg-gray-50 dark:bg-black/40 border border-black/5 dark:border-black/5 dark:border-white/5 hover:border-[#14B897]/50 p-4 rounded-2xl group transition-all">
                        <h4 className="text-slate-900 dark:text-white font-bold mb-1 flex justify-between items-center">
                          Zone 2 Endurance Protocol
                          <span className="text-[9px] text-[#14B897] opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">Execute <ArrowRight className="inline w-3 h-3"/></span>
                        </h4>
                        <p className="text-sm font-light text-slate-900 dark:text-white/50">Clinical cycling parameters designed to physically expand the left ventricle.</p>
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
               className="w-full h-full flex flex-col items-center justify-center text-center p-12 glass border border-dashed border-black/10 dark:border-black/10 dark:border-white/10 rounded-[3rem]"
             >
               <div className="w-24 h-24 border border-black/10 dark:border-black/10 dark:border-white/10 rounded-full flex items-center justify-center mb-8 relative">
                 <div className="absolute inset-0 bg-rose-500/5 rounded-full animate-ping"></div>
                 <Dumbbell className="w-8 h-8 text-slate-900 dark:text-white/20" />
               </div>
               <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Awaiting Parameters</h3>
               <p className="text-slate-900 dark:text-white/50 font-light">Input your resting and maximum heart rates to immediately calculate your aerobic capacity and mortality percentile grouping.</p>
             </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}