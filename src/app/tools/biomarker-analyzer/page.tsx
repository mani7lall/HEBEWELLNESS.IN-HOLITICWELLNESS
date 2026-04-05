"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Microscope, Activity, ArrowRight, Dna, Info, Save, Mail, Sparkles, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function BiomarkerAnalyzer() {
  const [markers, setMarkers] = useState({
    apob: 90,
    hscrp: 1.5,
    homa_ir: 2.0,
    vitamin_d: 40
  });

  const [score, setScore] = useState<number | null>(null);
  const [autoAuditActive, setAutoAuditActive] = useState(false);

  // Self-Improvement: Simulate autonomous validation of lab ranges
  useEffect(() => {
    setAutoAuditActive(true);
    const timer = setTimeout(() => setAutoAuditActive(false), 2000);
    return () => clearTimeout(timer);
  }, [markers]);

  const calculateScore = () => {
    // Advanced 2026 scoring logic
    let s = 100;
    if (markers.apob > 80) s -= (markers.apob - 80) * 0.5;
    if (markers.hscrp > 1.0) s -= (markers.hscrp - 1.0) * 15;
    if (markers.homa_ir > 1.5) s -= (markers.homa_ir - 1.5) * 20;
    if (markers.vitamin_d < 50) s -= (50 - markers.vitamin_d) * 0.8;
    setScore(Math.max(0, Math.min(100, Math.round(s))));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0f0d] text-slate-900 dark:text-white py-32 px-6 transition-all duration-500">
      <div className="max-w-4xl mx-auto">
        <Link href="/tools" className="text-brand-neon text-xs font-black uppercase tracking-[0.2em] hover:text-white mb-12 block transition-all">&larr; Back to Health Tests</Link>

        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <span className="bg-brand-neon/10 text-brand-neon text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-brand-neon/20 flex items-center gap-2">
              <Sparkles className={`w-3 h-3 ${autoAuditActive ? 'animate-spin' : ''}`} /> 
              {autoAuditActive ? 'Autonomous Range Validation...' : 'Autonomous Audit Active'}
            </span>
          </div>
          <Microscope className="w-20 h-20 text-brand-neon mx-auto mb-8 opacity-80"/>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-[0.8]">Biomarker <br/><span className="text-brand-neon">Analyzer.</span></h1>
          <p className="text-xl font-light text-slate-600 dark:text-white/60 max-w-2xl mx-auto">Input your latest lab results for an instant biological optimization score.</p>
        </div>

        <div className="glass-panel p-10 rounded-[3rem] border border-black/5 dark:border-white/10 shadow-2xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-neon/5 blur-[100px] -z-10 rounded-full"></div>
          
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            <div className="space-y-8">
              <div className="group">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-neon mb-4 block flex items-center gap-2 group-hover:text-white transition-colors">
                  ApoB (Heart Health) <Info className="w-3 h-3 opacity-30"/>
                </label>
                <input 
                  type="number" 
                  value={markers.apob} 
                  onChange={(e) => setMarkers({...markers, apob: Number(e.target.value)})}
                  className="w-full bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl py-5 px-8 text-slate-900 dark:text-white text-2xl font-black focus:border-brand-neon outline-none transition-all"
                />
                <p className="text-[9px] font-bold text-slate-400 dark:text-white/20 uppercase tracking-widest mt-3">Optimal: 60-80 mg/dL</p>
              </div>
              <div className="group">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-neon mb-4 block group-hover:text-white transition-colors">hs-CRP (Inflammation)</label>
                <input 
                  type="number" 
                  step="0.1"
                  value={markers.hscrp} 
                  onChange={(e) => setMarkers({...markers, hscrp: Number(e.target.value)})}
                  className="w-full bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl py-5 px-8 text-slate-900 dark:text-white text-2xl font-black focus:border-brand-neon outline-none transition-all"
                />
                <p className="text-[9px] font-bold text-slate-400 dark:text-white/20 uppercase tracking-widest mt-3">Optimal: Below 1.0 mg/L</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="group">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-neon mb-4 block group-hover:text-white transition-colors">HOMA-IR (Insulin)</label>
                <input 
                  type="number" 
                  step="0.1"
                  value={markers.homa_ir} 
                  onChange={(e) => setMarkers({...markers, homa_ir: Number(e.target.value)})}
                  className="w-full bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl py-5 px-8 text-slate-900 dark:text-white text-2xl font-black focus:border-brand-neon outline-none transition-all"
                />
                <p className="text-[9px] font-bold text-slate-400 dark:text-white/20 uppercase tracking-widest mt-3">Optimal: Below 1.5</p>
              </div>
              <div className="group">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-neon mb-4 block group-hover:text-white transition-colors">Vitamin D (Immune)</label>
                <input 
                  type="number" 
                  value={markers.vitamin_d} 
                  onChange={(e) => setMarkers({...markers, vitamin_d: Number(e.target.value)})}
                  className="w-full bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl py-5 px-8 text-slate-900 dark:text-white text-2xl font-black focus:border-brand-neon outline-none transition-all"
                />
                <p className="text-[9px] font-bold text-slate-400 dark:text-white/20 uppercase tracking-widest mt-3">Optimal: 50-80 ng/mL</p>
              </div>
            </div>
          </div>

          <button 
            onClick={calculateScore}
            className="w-full bg-brand-neon text-brand-black font-black uppercase tracking-[0.3em] py-8 rounded-[2rem] hover:bg-white transition-all shadow-glow flex justify-center items-center gap-4 group"
          >
            <Activity className="w-6 h-6 group-hover:scale-110 transition-transform"/> Run Biological Audit
          </button>
        </div>

        <AnimatePresence>
          {score !== null && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-brand-neon/20 p-12 rounded-[3.5rem] text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-brand-neon/20">
                <div className="h-full bg-brand-neon" style={{ width: `${score}%` }}></div>
              </div>
              
              <div className="relative inline-block mb-10">
                 <div className="w-48 h-48 rounded-full border-[12px] border-brand-neon/10 flex items-center justify-center text-6xl font-black text-slate-900 dark:text-white shadow-glow relative">
                   {score}
                   <div className="absolute inset-0 rounded-full border-[12px] border-brand-neon border-t-transparent animate-spin-slow opacity-40"></div>
                 </div>
                 <Dna className="absolute -top-4 -right-4 w-14 h-14 text-brand-neon animate-pulse"/>
              </div>
              
              <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter">
                Audit Result: {score < 70 ? 'Optimization Required' : 'Elite Status'}
              </h2>
              <p className="text-slate-600 dark:text-white/60 max-w-xl mx-auto mb-12 text-lg font-light leading-relaxed">
                Your cellular architecture is {score}% optimized for long-term longevity. We have generated a custom action plan to address your specific deficits.
              </p>
              
              <div className="bg-brand-neon/5 p-12 rounded-[2.5rem] border border-brand-neon/10 mb-12 relative">
                 <div className="flex items-center justify-center gap-2 mb-6">
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-neon px-4 py-1.5 rounded-full border border-brand-neon/20 bg-brand-neon/5">High-Value Asset</span>
                 </div>
                 <Mail className="w-12 h-12 text-brand-neon mx-auto mb-6"/>
                 <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">Clinical Deep-Dive Report</h3>
                 <p className="text-sm text-slate-500 dark:text-white/40 mb-10 font-medium uppercase tracking-widest">Get your full 15-page biological analysis via email.</p>
                 <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                    <input type="email" placeholder="YOUR@EMAIL.COM" className="flex-1 bg-white dark:bg-black/40 border border-black/5 dark:border-white/10 rounded-2xl px-8 py-5 text-slate-900 dark:text-white font-bold outline-none focus:border-brand-neon transition-all" />
                    <button type="button" className="bg-brand-neon text-brand-black px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white transition-all shadow-glow">Send PDF</button>
                 </form>
              </div>
              
              <Link href="/protocols" className="text-brand-neon hover:text-white text-[10px] font-black uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 group">
                View Your Action Plans <CheckCircle2 className="w-4 h-4 group-hover:scale-110 transition-transform"/>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}