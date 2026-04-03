"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Zap, Shield, Brain, Activity, Target, RefreshCw, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function StressResilienceQuiz() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState<any>(null);

  const questions = [
    { q: "What is your typical morning HRV deviation?", options: ["< 5ms (Static)", "5-15ms (Healthy)", "> 20ms (Highly Adaptable)"], weights: [1, 3, 5] },
    { q: "How do you respond to acute cognitive load?", options: ["Immediate Brain Fog", "Focus for 2-3 hours", "Indefinite Flow State"], weights: [1, 3, 5] },
    { q: "Sleep onset latency after high-stress exposure?", options: ["> 60 mins", "20-40 mins", "< 10 mins"], weights: [1, 3, 5] },
    { q: "Physical recovery rate after high-intensity load?", options: ["48+ hours", "12-24 hours", "< 6 hours"], weights: [1, 3, 5] },
    { q: "Caffeine sensitivity / Jitter threshold?", options: ["Extremely High", "Moderate", "None / Highly Metabolized"], weights: [1, 3, 5] }
  ];

  const handleNext = (weight: number) => {
    const nextScore = score + weight;
    if (step < questions.length - 1) {
      setScore(nextScore);
      setStep(step + 1);
    } else {
      calculateResult(nextScore);
    }
  };

  const calculateResult = (finalScore: number) => {
    if (finalScore < 10) {
      setResult({ status: "Sympathetic Dominant", recommendation: "Ashwagandha (KSM-66), Magnesium Glycinate, and immediate 4-7-8 breathing cycles.", color: "text-red-400" });
    } else if (finalScore < 20) {
      setResult({ status: "Balanced Autonomic State", recommendation: "L-Theanine, Rhodiola Rosea, and optimized circadian rhythm exposure.", color: "text-yellow-400" });
    } else {
      setResult({ status: "Elite Vagal Tone", recommendation: "Continue current protocol. Add NMN for cellular maintenance and occasional cold-thermogenesis.", color: "text-brand-neon" });
    }
  };

  return (
    <div className="bg-brand-black min-h-screen text-brand-cream font-sans pb-32">
      <nav className="p-8"><Link href="/tools" className="inline-flex items-center text-brand-neon hover:text-white"><ArrowLeft className="mr-2 w-5 h-5" /> Back to Tools</Link></nav>
      
      <main className="max-w-3xl mx-auto px-6 pt-20">
        <div className="text-center mb-12">
           <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">Stress <span className="text-brand-neon">Resilience</span> Quiz</h1>
           <p className="text-brand-cream/60 font-mono text-sm">Autonomic Nervous System Diagnostic v2.0</p>
        </div>

        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div key="question" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-white/5 border border-white/10 p-12 rounded-3xl">
               <div className="mb-8 flex justify-between items-center text-[10px] font-mono uppercase tracking-widest text-brand-neon">
                  <span>Question {step + 1} of {questions.length}</span>
                  <span>Progress: {Math.round(((step + 1) / questions.length) * 100)}%</span>
               </div>
               <h2 className="text-2xl font-bold text-white mb-8">{questions[step].q}</h2>
               <div className="space-y-4">
                  {questions[step].options.map((opt, idx) => (
                    <button key={idx} onClick={() => handleNext(questions[step].weights[idx])} className="w-full p-6 text-left border border-white/10 hover:border-brand-neon hover:bg-brand-neon/5 transition-all rounded-xl flex justify-between items-center group">
                      <span className="font-bold text-white uppercase group-hover:text-brand-neon transition-colors">{opt}</span>
                      <ChevronRight className="w-5 h-5 text-brand-neon" />
                    </button>
                  ))}
               </div>
            </motion.div>
          ) : (
            <motion.div key="result" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white/5 border border-brand-neon/30 p-12 rounded-3xl text-center">
               <Activity className={`w-20 h-20 mx-auto mb-6 ${result.color}`} />
               <h2 className="text-3xl font-black text-white uppercase mb-2">Diagnostic: <span className={result.color}>{result.status}</span></h2>
               <div className="h-px w-24 bg-brand-neon/30 mx-auto my-8"></div>
               <p className="text-xl text-brand-cream/80 mb-12 font-light leading-relaxed">Recommended Protocol: {result.recommendation}</p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button onClick={() => { setStep(0); setScore(0); setResult(null); }} className="px-8 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-all rounded-sm">Retake Quiz</button>
                  <Link href="/protocols" className="px-8 py-4 bg-brand-neon text-black font-black uppercase tracking-widest rounded-sm hover:scale-105 transition-transform">Get Full Protocol</Link>
               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
