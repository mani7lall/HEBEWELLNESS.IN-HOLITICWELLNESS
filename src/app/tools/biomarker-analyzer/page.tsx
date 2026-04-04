"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Microscope, Activity, ArrowRight, Dna, Info, Save, Mail } from "lucide-react";
import Link from "next/link";

export default function BiomarkerAnalyzer() {
  const [markers, setMarkers] = useState({
    apob: 90,
    hscrp: 1.5,
    homa_ir: 2.0,
    vitamin_d: 40
  });

  const [score, setScore] = useState<number | null>(null);

  const calculateScore = () => {
    // Highly simplified biological optimization scoring logic
    let s = 100;
    if (markers.apob > 80) s -= (markers.apob - 80);
    if (markers.hscrp > 1.0) s -= (markers.hscrp - 1.0) * 10;
    if (markers.homa_ir > 1.5) s -= (markers.homa_ir - 1.5) * 15;
    if (markers.vitamin_d < 50) s -= (50 - markers.vitamin_d);
    setScore(Math.max(0, Math.min(100, Math.round(s))));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-white dark:bg-brand-black text-slate-900 dark:text-white py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Microscope className="w-16 h-16 text-brand-neon mx-auto mb-6"/>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">Biomarker <span className="text-brand-neon">Analyzer.</span></h1>
          <p className="text-xl font-light text-slate-900 dark:text-white/60">Input your clinical markers for an instant biological optimization score.</p>
        </div>

        <div className="glass-card p-10 rounded-[3rem] border border-black/10 dark:border-black/10 dark:border-white/10 shadow-2xl mb-12">
          <div className="grid md:grid-cols-2 gap-10 mb-10">
            <div className="space-y-6">
              <div>
                <label className="text-xs font-black uppercase tracking-widest text-[#00F59B] mb-2 block flex items-center gap-2">
                  ApoB (mg/dL) <Info className="w-3 h-3 opacity-50"/>
                </label>
                <input 
                  type="number" 
                  value={markers.apob} 
                  onChange={(e) => setMarkers({...markers, apob: Number(e.target.value)})}
                  className="w-full bg-white/5 border border-black/10 dark:border-black/10 dark:border-white/10 rounded-xl py-4 px-6 text-slate-900 dark:text-white text-xl font-bold focus:border-brand-neon outline-none"
                />
                <p className="text-[10px] text-slate-900 dark:text-white/40 mt-2">Optimal range: Below 60-80 mg/dL</p>
              </div>
              <div>
                <label className="text-xs font-black uppercase tracking-widest text-[#00F59B] mb-2 block">hs-CRP (mg/L)</label>
                <input 
                  type="number" 
                  step="0.1"
                  value={markers.hscrp} 
                  onChange={(e) => setMarkers({...markers, hscrp: Number(e.target.value)})}
                  className="w-full bg-white/5 border border-black/10 dark:border-black/10 dark:border-white/10 rounded-xl py-4 px-6 text-slate-900 dark:text-white text-xl font-bold focus:border-brand-neon outline-none"
                />
                <p className="text-[10px] text-slate-900 dark:text-white/40 mt-2">Optimal range: Below 1.0 mg/L</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <label className="text-xs font-black uppercase tracking-widest text-[#00F59B] mb-2 block">HOMA-IR</label>
                <input 
                  type="number" 
                  step="0.1"
                  value={markers.homa_ir} 
                  onChange={(e) => setMarkers({...markers, homa_ir: Number(e.target.value)})}
                  className="w-full bg-white/5 border border-black/10 dark:border-black/10 dark:border-white/10 rounded-xl py-4 px-6 text-slate-900 dark:text-white text-xl font-bold focus:border-brand-neon outline-none"
                />
                <p className="text-[10px] text-slate-900 dark:text-white/40 mt-2">Optimal range: Below 1.5</p>
              </div>
              <div>
                <label className="text-xs font-black uppercase tracking-widest text-[#00F59B] mb-2 block">Vitamin D (ng/mL)</label>
                <input 
                  type="number" 
                  value={markers.vitamin_d} 
                  onChange={(e) => setMarkers({...markers, vitamin_d: Number(e.target.value)})}
                  className="w-full bg-white/5 border border-black/10 dark:border-black/10 dark:border-white/10 rounded-xl py-4 px-6 text-slate-900 dark:text-white text-xl font-bold focus:border-brand-neon outline-none"
                />
                <p className="text-[10px] text-slate-900 dark:text-white/40 mt-2">Optimal range: 50-80 ng/mL</p>
              </div>
            </div>
          </div>

          <button 
            onClick={calculateScore}
            className="w-full bg-brand-neon text-brand-black font-black uppercase tracking-[0.2em] py-6 rounded-2xl hover:bg-white transition-all shadow-glow flex justify-center items-center gap-3"
          >
            <Activity className="w-6 h-6"/> Generate Optimization Report
          </button>
        </div>

        <AnimatePresence>
          {score !== null && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white/5 border border-brand-neon/30 p-12 rounded-[3.5rem] text-center"
            >
              <div className="relative inline-block mb-8">
                 <div className="w-40 h-40 rounded-full border-[10px] border-brand-neon flex items-center justify-center text-5xl font-black text-slate-900 dark:text-white shadow-glow">
                   {score}
                 </div>
                 <Dna className="absolute -top-4 -right-4 w-12 h-12 text-brand-neon opacity-50"/>
              </div>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">Optimization Score: {score < 70 ? 'Action Required' : 'Elite Status'}</h2>
              <p className="text-slate-900 dark:text-white/60 max-w-xl mx-auto mb-10 font-light leading-relaxed">
                Based on your markers, your cellular architecture is currently {score}% optimized for long-term longevity. We have generated a custom protocol to address your deficits.
              </p>
              
              <div className="bg-brand-neon/10 p-10 rounded-3xl border border-brand-neon/20 mb-10">
                 <Mail className="w-10 h-10 text-brand-neon mx-auto mb-4"/>
                 <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Get Your Clinical PDF Report</h3>
                 <p className="text-xs text-slate-900 dark:text-white/50 mb-6 font-light">Download the full 15-page biological deep-dive including exact reference studies.</p>
                 <form className="flex flex-col sm:flex-row gap-4">
                    <input type="email" placeholder="Enter Email for PDF" className="flex-1 bg-gray-50 dark:bg-gray-50 dark:bg-black/50 border border-black/10 dark:border-black/10 dark:border-white/10 rounded-xl px-6 py-4 text-slate-900 dark:text-white outline-none focus:border-brand-neon" />
                    <button type="button" className="bg-white text-brand-black px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-brand-neon transition-colors">Send Report</button>
                 </form>
              </div>
              
              <Link href="/" className="text-slate-900 dark:text-white/40 hover:text-brand-neon text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2">
                Return to Master Directory <ArrowRight className="w-4 h-4"/>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}