"use client";

import { useState, useEffect } from "react";
import { Activity, Dna, Brain, Heart, Droplets, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function BiologicalAgeQuiz() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [autoAuditLog, setAutoAuditLog] = useState<string[]>([]);

  // Self-Improvement: Automatically audit lifestyle logic
  useEffect(() => {
    if (score > 15) setAutoAuditLog(prev => [...prev, "High aging velocity detected. Intervention protocols triggered."]);
  }, [score]);

  const questions = [
    {
      q: "Nightly sleep duration?",
      desc: "Deep sleep helps clear biological waste from your brain.",
      icon: <Brain className="w-8 h-8 text-purple-400 mb-4"/>,
      options: [
        { text: "Under 5 hours", val: 5 },
        { text: "5-6 hours", val: 2 },
        { text: "7-8 hours", val: -2 },
        { text: "8+ hours", val: -4 }
      ]
    },
    {
      q: "Strength training days per week?",
      desc: "Muscle health is the strongest predictor of long-term vitality.",
      icon: <Activity className="w-8 h-8 text-orange-400 mb-4"/>,
      options: [
        { text: "None", val: 5 },
        { text: "1-2 days", val: 1 },
        { text: "3-4 days", val: -3 },
        { text: "5+ days", val: -5 }
      ]
    },
    {
      q: "Daily fasting window?",
      desc: "Cellular repair starts about 14 hours after your last meal.",
      icon: <Droplets className="w-8 h-8 text-blue-400 mb-4"/>,
      options: [
        { text: "I eat all day", val: 4 },
        { text: "12 hours", val: 0 },
        { text: "16 hours (16:8)", val: -3 },
        { text: "20+ hours (OMAD)", val: -5 }
      ]
    },
    {
      q: "Stress levels and mental calm:",
      desc: "High stress physically ages your DNA at a faster rate.",
      icon: <Heart className="w-8 h-8 text-red-500 mb-4"/>,
      options: [
        { text: "Always stressed", val: 6 },
        { text: "Daily stress", val: 3 },
        { text: "Managed well", val: 0 },
        { text: "Very calm", val: -4 }
      ]
    }
  ];

  const handleSelect = (val: number) => {
    setScore(score + val);
    setStep(step + 1);
  };

  const getResult = () => {
    if (score > 10) return { title: "Aging Faster", text: "Your lifestyle habits suggest your body is aging faster than your calendar age. Small changes will make a big difference.", color: "text-rose-500", bg: "bg-rose-50 dark:bg-rose-950/20" };
    if (score > 0) return { title: "Standard Aging", text: "You are aging at a normal rate. You have a good foundation, but there is plenty of room to optimize for a longer life.", color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-950/20" };
    if (score > -8) return { title: "Aging Slower", text: "Great job! Your habits are supporting a biological age that is younger than your actual age.", color: "text-brand-neon", bg: "bg-emerald-50 dark:bg-emerald-950/20" };
    return { title: "Optimal Longevity", text: "Elite level habits! You are maximizing your body's repair processes and biological potential.", color: "text-brand-neon-cyan", bg: "bg-cyan-50 dark:bg-cyan-950/20" };
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-[#0a0f0d] px-6 transition-all duration-500 flex flex-col justify-center">
      <div className="max-w-3xl mx-auto w-full">
        <Link href="/tools" className="text-brand-neon text-xs font-black uppercase tracking-[0.2em] hover:text-white mb-12 block transition-all">&larr; Back to Health Tests</Link>

        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <span className="bg-brand-neon/10 text-brand-neon text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-brand-neon/20 flex items-center gap-2">
              <Sparkles className="w-3 h-3" /> Autonomous Aging Audit Active
            </span>
          </div>
          <Dna className="w-20 h-20 text-brand-neon mx-auto mb-8 animate-pulse opacity-80"/>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-[0.8] mb-6">Biological <br/><span className="text-brand-neon">Age Test.</span></h1>
          <p className="text-slate-600 dark:text-white/60 font-light text-lg leading-relaxed max-w-xl mx-auto">
            Find out your body's true biological age based on your daily lifestyle biometrics.
          </p>
        </div>

        {step < questions.length ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel p-10 rounded-[3rem] border border-black/5 dark:border-white/10 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
               <div className="h-full bg-brand-neon transition-all duration-500" style={{width: `${(step / questions.length) * 100}%`}}></div>
            </div>
            
            <div className="text-center mb-12 mt-4">
              <div className="flex justify-center mb-6">{questions[step].icon}</div>
              <span className="text-[10px] font-black tracking-[0.3em] text-brand-neon uppercase mb-4 block">Parameter {step + 1} of {questions.length}</span>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white leading-tight mb-4 uppercase tracking-tight">{questions[step].q}</h2>
              <p className="text-sm text-slate-600 dark:text-white/50 font-light leading-relaxed">{questions[step].desc}</p>
            </div>

            <div className="space-y-4">
              {questions[step].options.map((opt, i) => (
                <button 
                  key={i} 
                  onClick={() => handleSelect(opt.val)}
                  className="w-full bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 p-6 rounded-2xl text-left hover:border-brand-neon hover:bg-brand-neon/5 transition-all group flex justify-between items-center shadow-sm"
                >
                  <span className="text-slate-900 dark:text-white font-bold tracking-wide group-hover:text-brand-neon transition-colors">{opt.text}</span>
                  <ArrowRight className="w-5 h-5 text-slate-900 dark:text-white/20 group-hover:text-brand-neon transform group-hover:translate-x-1 transition-all"/>
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`glass-panel p-12 text-center rounded-[3.5rem] border border-black/5 dark:border-white/10 shadow-glow relative overflow-hidden ${getResult().bg}`}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-neon/5 blur-[100px] -z-10 rounded-full"></div>
            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-brand-neon mb-10 block">Diagnostic Complete</span>
            <div className="w-24 h-24 bg-brand-neon/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-brand-neon/20">
              <Dna className="w-12 h-12 text-brand-neon"/>
            </div>
            
            <h2 className={`text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 ${getResult().color}`}>{getResult().title}</h2>
            <p className="text-xl text-slate-900 dark:text-white/80 font-light mb-12 max-w-lg mx-auto leading-relaxed">
              {getResult().text}
            </p>

            <div className="flex flex-col gap-4 max-w-sm mx-auto">
              <Link href="/protocols" className="w-full bg-brand-neon text-brand-black font-black uppercase tracking-[0.2em] p-6 rounded-2xl hover:bg-white transition-all shadow-glow flex items-center justify-center gap-3 group">
                View Action Plans <CheckCircle2 className="w-5 h-5 group-hover:scale-110 transition-transform"/>
              </Link>
              <button onClick={() => {setStep(0); setScore(0);}} className="text-[10px] text-slate-900 dark:text-white/40 font-black uppercase tracking-[0.3em] hover:text-brand-neon transition-colors py-6">
                Recalculate Biometrics
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}