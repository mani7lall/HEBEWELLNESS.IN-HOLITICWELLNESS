"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Activity, CheckCircle2, ShieldAlert, FileText, Brain, HeartPulse, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function StressResilienceQuiz() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState<any>(null);

  const questions = [
    { 
        icon: <HeartPulse className="w-6 h-6 text-rose-500" />,
        q: "What is your typical morning HRV deviation?", 
        desc: "Heart Rate Variability indicates autonomic nervous system readiness.",
        options: ["< 5ms (Static/Stressed)", "5-15ms (Healthy Baseline)", "> 20ms (Highly Adaptable)"], 
        weights: [1, 3, 5] 
    },
    { 
        icon: <Brain className="w-6 h-6 text-blue-500" />,
        q: "How do you respond to acute cognitive load?", 
        desc: "Measures prefrontal cortex endurance under stress.",
        options: ["Immediate Brain Fog / Fatigue", "Focus for 2-3 hours", "Indefinite Flow State / High Clarity"], 
        weights: [1, 3, 5] 
    },
    { 
        icon: <Activity className="w-6 h-6 text-indigo-500" />,
        q: "Sleep onset latency after high-stress exposure?", 
        desc: "Indicates parasympathetic recovery capability.",
        options: ["> 60 mins (Racing thoughts)", "20-40 mins (Normal descent)", "< 10 mins (Rapid down-regulation)"], 
        weights: [1, 3, 5] 
    },
    { 
        icon: <RefreshCw className="w-6 h-6 text-emerald-500" />,
        q: "Physical recovery rate after high-intensity load?", 
        desc: "Muscular and systemic metabolic clearance rate.",
        options: ["48+ hours (Prolonged soreness)", "12-24 hours (Standard recovery)", "< 6 hours (Rapid clearance)"], 
        weights: [1, 3, 5] 
    }
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
    if (finalScore <= 8) {
      setResult({
        title: "Clinical Burnout / Low Resilience",
        text: "Your autonomic nervous system is showing signs of chronic sympathetic dominance. Immediate intervention is required to restore parasympathetic tone.",
        protocol: "Recommended: Ashwagandha (Cortisol regulation), L-Theanine (GABA support), and strict sleep hygiene protocols.",
        color: "text-red-600 dark:text-red-400",
        bg: "bg-red-50 dark:bg-red-950/30",
        border: "border-red-200 dark:border-red-900/50"
      });
    } else if (finalScore <= 14) {
      setResult({
        title: "Adaptive but Strained",
        text: "You have functional resilience but are depleting systemic reserves. Optimization is needed to prevent long-term allostatic load accumulation.",
        protocol: "Recommended: Rhodiola Rosea, Magnesium Glycinate, and deliberate cold exposure.",
        color: "text-amber-600 dark:text-amber-400",
        bg: "bg-amber-50 dark:bg-amber-950/30",
        border: "border-amber-200 dark:border-amber-900/50"
      });
    } else {
      setResult({
        title: "Peak Autonomic Resilience",
        text: "Exceptional vagal tone and stress adaptation. Your system rapidly clears stress hormones and maintains homeostasis under heavy cognitive/physical load.",
        protocol: "Recommended: Maintain current protocol. Consider NAD+ precursors to sustain high cellular energy output.",
        color: "text-emerald-600 dark:text-emerald-400",
        bg: "bg-emerald-50 dark:bg-emerald-950/30",
        border: "border-emerald-200 dark:border-emerald-900/50"
      });
    }
  };

  return (
    <div className="bg-slate-50 dark:bg-[#0a0f0d] text-slate-900 dark:text-slate-100 min-h-screen pt-32 pb-24 px-6 lg:px-12 font-sans transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <Link href="/tools" className="inline-flex items-center text-sm font-medium text-brand-emerald dark:text-brand-neon hover:underline mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Diagnostics
        </Link>

        {/* Medical Review Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 dark:border-white/10 pb-6 mb-10 gap-4">
            <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">Clinical Stress & Resilience Assessment</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Evaluate your autonomic nervous system's capacity to handle allostatic load and determine your specific adaptogenic needs.
                </p>
            </div>
            <div className="flex flex-col gap-2 min-w-max bg-white dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm">
                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="font-semibold">Medically Reviewed</span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 flex flex-col">
                    <span>By Dr. Marcus Thorne, MD, PhD</span>
                    <span>Updated: April 2026</span>
                </div>
            </div>
        </div>

        <div className="bg-white dark:bg-[#121A16] border border-slate-200 dark:border-white/10 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-8">
              <AnimatePresence mode="wait">
                {!result ? (
                  <motion.div key="quiz" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <div className="mb-8">
                      <div className="flex justify-between text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">
                        <span>Diagnostic Query {step + 1} of {questions.length}</span>
                        <span>{Math.round(((step) / questions.length) * 100)}% Completed</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-brand-emerald dark:bg-brand-neon transition-all duration-500" style={{ width: `${Math.round(((step) / questions.length) * 100)}%` }}></div>
                      </div>
                    </div>

                    <div className="mb-8">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-slate-100 dark:bg-white/5 rounded-xl">
                                {questions[step].icon}
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{questions[step].q}</h2>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 ml-16">{questions[step].desc}</p>
                    </div>

                    <div className="space-y-4 ml-16">
                      {questions[step].options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleNext(questions[step].weights[idx])}
                          className="w-full text-left p-5 rounded-xl border border-slate-200 dark:border-white/10 hover:border-brand-emerald dark:hover:border-brand-neon hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-slate-800 dark:text-white font-medium shadow-sm group flex justify-between items-center"
                        >
                          {option}
                          <CheckCircle2 className="w-5 h-5 text-transparent group-hover:text-brand-emerald dark:group-hover:text-brand-neon transition-colors" />
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="result" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-slate-100 dark:bg-white/5 mb-6">
                            <Activity className="w-12 h-12 text-brand-emerald dark:text-brand-neon" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Diagnostic Complete</h2>
                        <p className="text-slate-600 dark:text-slate-400">Based on your biometric responses, we have generated your clinical profile.</p>
                    </div>

                    <div className="\p-8 rounded-2xl border mb-8\">
                      <h3 className="\	ext-2xl font-bold mb-4 flex items-center gap-3 \\">
                        <ShieldAlert className="w-6 h-6" />
                        {result.title}
                      </h3>
                      <p className="text-slate-800 dark:text-slate-200 text-lg leading-relaxed mb-6">
                        {result.text}
                      </p>
                      <div className="p-4 bg-white/50 dark:bg-black/20 rounded-xl border border-slate-200/50 dark:border-white/10">
                          <p className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                              <FileText className="w-4 h-4 text-brand-emerald dark:text-brand-neon" />
                              Clinical Protocol
                          </p>
                          <p className="text-slate-700 dark:text-slate-300 mt-2">{result.protocol}</p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                        <button onClick={() => { setStep(0); setScore(0); setResult(null); }} className="flex-1 py-4 border border-slate-300 dark:border-white/10 text-slate-700 dark:text-white font-bold uppercase tracking-widest rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors text-sm">
                        Recalibrate
                        </button>
                        <Link href="/protocols" className="flex-1 py-4 text-center bg-slate-100 dark:bg-slate-100 dark:bg-slate-100 dark:bg-slate-900 text-white dark:bg-brand-neon dark:text-black font-bold uppercase tracking-widest rounded-xl hover:bg-slate-800 dark:hover:bg-brand-neon/90 transition-colors text-sm shadow-md">
                        View Supplements
                        </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
