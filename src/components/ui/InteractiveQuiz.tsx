"use client";

import { useState } from "react";
import { ArrowRight, Activity, Moon, Brain, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  {
    id: 1,
    question: "How would you rate your typical sleep architecture?",
    options: [
      { label: "Deep & Restorative (7-8 hours)", score: 2 },
      { label: "Interrupted but adequate", score: 5 },
      { label: "Chronically fatigued / Insomnia", score: 8 },
    ]
  },
  {
    id: 2,
    question: "What is your primary cognitive state during peak work hours?",
    options: [
      { label: "Flow state / Highly focused", score: 2 },
      { label: "Scattered / Reliant on caffeine", score: 6 },
      { label: "Brain fog / High cortisol", score: 9 },
    ]
  },
  {
    id: 3,
    question: "How rapidly do you recover from intense physical or mental stress?",
    options: [
      { label: "Within 24 hours", score: 2 },
      { label: "Takes a few days", score: 5 },
      { label: "I feel constantly inflamed/sore", score: 9 },
    ]
  }
];

export default function InteractiveQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<{ age: number, protocol: string } | null>(null);

  const handleSelect = (score: number) => {
    const newScores = [...scores, score];
    setScores(newScores);

    if (currentStep < questions.length - 1) {
      setCurrentStep(curr => curr + 1);
    } else {
      calculateResult(newScores);
    }
  };

  const calculateResult = (finalScores: number[]) => {
    setIsCalculating(true);
    setTimeout(() => {
      const totalScore = finalScores.reduce((a, b) => a + b, 0);
      let calculatedAge = 25; // Base chronological
      let recommendedProtocol = "";

      if (totalScore <= 8) {
        calculatedAge += 2;
        recommendedProtocol = "Maintenance Protocol: Balance 1:1 Full Spectrum for systemic homeostasis.";
      } else if (totalScore <= 18) {
        calculatedAge += 8;
        recommendedProtocol = "Optimization Protocol: Neural Focus Blend by day, HEAL+ by night to reset the HPA axis.";
      } else {
        calculatedAge += 15;
        recommendedProtocol = "Restoration Protocol: High-dose Tripti 1:6 for deep systemic intervention and inflammatory suppression.";
      }

      setResult({ age: calculatedAge, protocol: recommendedProtocol });
      setIsCalculating(false);
    }, 2500);
  };

  if (result) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-brand-light-emerald/20 shadow-glow-strong max-w-2xl mx-auto text-center relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-emerald via-brand-neon to-brand-emerald"></div>
        <span className="text-brand-neon font-bold tracking-[0.2em] text-[10px] mb-4 block uppercase">Analysis Complete</span>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Biological Age: <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-light-emerald drop-shadow-[0_0_15px_rgba(0,237,165,0.5)]">{result.age}</span></h3>
        <p className="text-brand-cream/60 mb-8 max-w-md mx-auto text-sm leading-relaxed">Based on your neural, circadian, and recovery markers, your cellular age is tracking at {result.age} years. The following intervention is required:</p>
        
        <div className="glass p-6 rounded-2xl mb-8 border border-white/5 text-left flex gap-4 items-start bg-black/20">
          <Shield className="text-brand-neon w-8 h-8 shrink-0 mt-1 drop-shadow-[0_0_10px_rgba(0,237,165,0.4)]" />
          <div>
            <h4 className="font-bold text-white mb-2 uppercase text-xs tracking-widest">Recommended Protocol</h4>
            <p className="text-sm text-brand-cream/80 leading-relaxed font-light">{result.protocol}</p>
          </div>
        </div>
        
        <button 
          className="bg-brand-neon text-brand-black px-8 py-4 rounded-full text-xs tracking-widest uppercase font-bold hover:bg-white transition-all w-full shadow-glow-strong"
          onClick={() => {
            setCurrentStep(0);
            setScores([]);
            setResult(null);
          }}
        >
          Initialize New Scan
        </button>
      </motion.div>
    );
  }

  if (isCalculating) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="glass-panel p-12 rounded-[2.5rem] border border-brand-light-emerald/10 shadow-2xl max-w-2xl mx-auto text-center flex flex-col items-center justify-center min-h-[400px]"
      >
        <div className="relative">
          <Activity className="w-16 h-16 text-brand-neon mb-6 mx-auto drop-shadow-[0_0_20px_rgba(0,237,165,0.6)]" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-t-2 border-brand-neon rounded-full w-20 h-20 -top-2 -left-2 opacity-50"
          />
        </div>
        <h3 className="text-3xl font-bold text-white mb-3">Processing Biomarkers...</h3>
        <p className="text-brand-cream/40 text-sm font-light">Cross-referencing biological stress data with architectural longevity models.</p>
      </motion.div>
    );
  }

  const currentQ = questions[currentStep];

  return (
    <div className="glass-panel p-8 md:p-12 rounded-[2.5rem] border border-brand-light-emerald/10 shadow-2xl max-w-2xl mx-auto relative overflow-hidden transition-all">
      <div 
        className="absolute top-0 left-0 h-1 bg-brand-neon shadow-glow transition-all duration-700 ease-out" 
        style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
      ></div>
      
      <div className="mb-10 text-center">
        <span className="text-brand-neon/60 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 block">
          Diagnostic Marker 0{currentStep + 1} / 0{questions.length}
        </span>
        <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight">
          {currentQ.question}
        </h3>
      </div>

      <div className="space-y-4">
        <AnimatePresence mode="wait">
          {currentQ.options.map((option, idx) => (
            <motion.button
              key={`${currentStep}-${idx}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => handleSelect(option.score)}
              className="w-full text-left p-6 rounded-2xl border border-white/5 glass bg-black/10 hover:border-brand-neon/50 hover:bg-white/5 transition-all group flex justify-between items-center"
            >
              <span className="text-white font-medium group-hover:text-brand-neon transition-colors">{option.label}</span>
              <ArrowRight className="w-5 h-5 text-brand-neon opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0 transform" />
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
