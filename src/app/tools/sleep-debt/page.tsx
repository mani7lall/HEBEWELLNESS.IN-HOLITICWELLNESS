"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Moon, ArrowLeft, Activity, RefreshCcw, Thermometer, Sun, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SleepDebtCalculator() {
  const [idealHours, setIdealHours] = useState(8);
  const [actualHours, setActualHours] = useState(6);
  const [days, setDays] = useState(7);
  const [roomTemp, setRoomTemp] = useState(72);
  const [lightExposure, setLightExposure] = useState(2); // hours before bed
  const [calculated, setCalculated] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  // Self-Improvement: Automatically verify data consistency
  useEffect(() => {
    if (actualHours > idealHours) {
      setIdealHours(actualHours);
    }
  }, [actualHours, idealHours]);

  const debt = (idealHours - actualHours) * days;
  const severe = debt > 10;
  
  const getTempAdvice = () => {
    if (roomTemp > 70) return { text: "Too Warm: High temperatures fragment deep sleep. Aim for 65-68°F.", color: "text-rose-400" };
    if (roomTemp < 60) return { text: "Too Cold: Your body may be using energy to stay warm. Aim for 65-68°F.", color: "text-blue-400" };
    return { text: "Optimal: Your room temperature supports deep metabolic recovery.", color: "text-brand-neon" };
  };

  const getLightAdvice = () => {
    if (lightExposure > 1) return { text: "High Alert: Blue light suppresses melatonin. Use amber glasses 2 hours before bed.", color: "text-rose-400" };
    return { text: "Optimal: Your low-light routine is preparing your brain for Delta-wave onset.", color: "text-brand-neon" };
  };

  return (
    <div className="bg-white dark:bg-[#0a0f0d] min-h-screen text-slate-900 dark:text-white font-sans pt-32 pb-24 transition-colors duration-500">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/tools" className="inline-flex items-center text-brand-neon hover:text-white font-bold text-xs uppercase tracking-[0.2em] mb-12 transition-all">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Health Tests
        </Link>

        <div className="text-center mb-12">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 bg-brand-neon/10 border border-brand-neon/30 rounded-3xl flex items-center justify-center mx-auto mb-8 rotate-3 hover:rotate-0 transition-transform duration-500"
          >
            <Moon className="w-10 h-10 text-brand-neon" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-6 leading-[0.8]">Sleep <br/><span className="text-brand-neon">Recovery.</span></h1>
          <p className="text-slate-600 dark:text-white/60 max-w-xl mx-auto text-lg font-light leading-relaxed">Calculate your physical sleep debt and generate a 2026 recovery action plan.</p>
        </div>

        <div className="glass-panel border border-black/5 dark:border-white/10 p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-neon/5 blur-[80px] -z-10 rounded-full"></div>
          
          {!calculated ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-6">
                  <div>
                    <label className="flex items-center gap-2 text-[10px] font-black text-brand-neon mb-4 uppercase tracking-[0.2em]">
                      <Moon className="w-3 h-3" /> Ideal Nightly Sleep
                    </label>
                    <input type="range" min="6" max="10" step="0.5" value={idealHours} onChange={(e) => setIdealHours(Number(e.target.value))} className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-neon" />
                    <div className="text-3xl font-black text-slate-900 dark:text-white mt-4">{idealHours} <span className="text-sm font-light text-white/40 uppercase tracking-widest ml-1">Hrs</span></div>
                  </div>
                  
                  <div>
                    <label className="flex items-center gap-2 text-[10px] font-black text-brand-neon mb-4 uppercase tracking-[0.2em]">
                      <Activity className="w-3 h-3" /> Actual Avg Sleep
                    </label>
                    <input type="range" min="3" max="10" step="0.5" value={actualHours} onChange={(e) => setActualHours(Number(e.target.value))} className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-neon" />
                    <div className="text-3xl font-black text-slate-900 dark:text-white mt-4">{actualHours} <span className="text-sm font-light text-white/40 uppercase tracking-widest ml-1">Hrs</span></div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="flex items-center gap-2 text-[10px] font-black text-brand-neon mb-4 uppercase tracking-[0.2em]">
                      <Thermometer className="w-3 h-3" /> Room Temp (°F)
                    </label>
                    <input type="range" min="60" max="80" value={roomTemp} onChange={(e) => setRoomTemp(Number(e.target.value))} className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-neon" />
                    <div className="text-3xl font-black text-slate-900 dark:text-white mt-4">{roomTemp}°F</div>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 text-[10px] font-black text-brand-neon mb-4 uppercase tracking-[0.2em]">
                      <Sun className="w-3 h-3" /> Blue Light (Hrs before)
                    </label>
                    <input type="range" min="0" max="4" step="0.5" value={lightExposure} onChange={(e) => setLightExposure(Number(e.target.value))} className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-neon" />
                    <div className="text-3xl font-black text-slate-900 dark:text-white mt-4">{lightExposure} <span className="text-sm font-light text-white/40 uppercase tracking-widest ml-1">Hrs</span></div>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setCalculated(true)} 
                className="w-full py-6 bg-brand-neon text-brand-black font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-white transition-all shadow-glow flex items-center justify-center gap-3 group"
              >
                Generate Recovery Plan <ArrowLeft className="w-5 h-5 rotate-180 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
              <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brand-neon mb-4 block">Analysis Complete</span>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white/60 uppercase mb-4 tracking-widest">Accumulated Debt</h2>
              <div className={`text-8xl md:text-9xl font-black mb-10 tracking-tighter ${severe ? 'text-rose-500' : 'text-brand-neon'}`}>
                {debt > 0 ? `${debt}h` : 'ZERO'}
              </div>
              
              {debt > 0 ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 bg-white/5 rounded-3xl border border-white/10 text-left hover:border-brand-neon/30 transition-colors">
                      <span className="flex items-center gap-2 text-[10px] font-black uppercase text-brand-neon mb-3">
                        <Thermometer className="w-3 h-3" /> Thermal Impact
                      </span>
                      <p className={`text-sm font-medium ${getTempAdvice().color}`}>{getTempAdvice().text}</p>
                    </div>
                    <div className="p-6 bg-white/5 rounded-3xl border border-white/10 text-left hover:border-brand-neon/30 transition-colors">
                      <span className="flex items-center gap-2 text-[10px] font-black uppercase text-brand-neon mb-3">
                        <Sun className="w-3 h-3" /> Melatonin Status
                      </span>
                      <p className={`text-sm font-medium ${getLightAdvice().color}`}>{getLightAdvice().text}</p>
                    </div>
                  </div>

                  <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 text-left">
                    <h3 className="font-black text-slate-900 dark:text-white mb-6 flex items-center uppercase tracking-widest text-sm">
                      <RefreshCcw className="w-4 h-4 mr-2 text-brand-neon animate-spin-slow"/> 2026 Recovery Action Plan
                    </h3>
                    <ul className="space-y-4">
                      {[
                        "Do not 'sleep in'—it breaks your 14-hour biological timer.",
                        `Add exactly 30 mins of sleep per night for the next ${(debt * 2).toFixed(0)} days.`,
                        "2026 Deep Sleep Stack: 200mg Magnesium + 50mg Apigenin.",
                        "Perform 20-min NSDR (Yoga Nidra) in the afternoon to clear adenosine."
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-white/70 leading-relaxed font-light">
                          <CheckCircle2 className="w-4 h-4 text-brand-neon flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="py-12">
                  <div className="w-20 h-20 bg-brand-neon/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-brand-neon" />
                  </div>
                  <p className="text-brand-neon font-black uppercase tracking-widest">Your sleep architecture is fully optimized.</p>
                </div>
              )}

              <button 
                onClick={() => setCalculated(false)} 
                className="mt-12 px-10 py-4 border border-white/10 text-white/40 hover:text-white hover:border-brand-neon rounded-full font-black uppercase tracking-widest text-[10px] transition-all"
              >
                Recalculate Biometrics
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}