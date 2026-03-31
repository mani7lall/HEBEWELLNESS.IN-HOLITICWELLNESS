"use client";

import { useState } from "react";
import { Activity, Dna, Brain, Heart, Droplets, ArrowRight } from "lucide-react";
import Link from 'next/link';

export default function BiologicalAgeQuiz() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      q: "What is your average nightly sleep duration?",
      desc: "Deep sleep is the primary driver of cerebral spinal fluid clearance.",
      icon: <Brain className="w-8 h-8 text-purple-400 mb-4"/>,
      options: [
        { text: "Under 5 hours", val: 5 },
        { text: "5-6 hours", val: 2 },
        { text: "7-8 hours", val: -2 },
        { text: "8+ hours", val: -4 }
      ]
    },
    {
      q: "How many days a week do you perform intense resistance training?",
      desc: "Myofibrillar hypertrophy directly correlates with delayed all-cause mortality.",
      icon: <Activity className="w-8 h-8 text-orange-400 mb-4"/>,
      options: [
        { text: "0 days", val: 5 },
        { text: "1-2 days", val: 1 },
        { text: "3-4 days", val: -3 },
        { text: "5+ days", val: -5 }
      ]
    },
    {
      q: "What is your daily fasting window?",
      desc: "Autophagy (cellular cleanup) begins roughly 14 hours after your last meal.",
      icon: <Droplets className="w-8 h-8 text-blue-400 mb-4"/>,
      options: [
        { text: "I eat all day (No fast)", val: 4 },
        { text: "12 hours", val: 0 },
        { text: "16 hours (16:8)", val: -3 },
        { text: "20+ hours (OMAD)", val: -5 }
      ]
    },
    {
      q: "Describe your stress perception and vagal tone:",
      desc: "Chronic cortisol elevation physically shortens telomeres (DNA caps).",
      icon: <Heart className="w-8 h-8 text-red-500 mb-4"/>,
      options: [
        { text: "Constant anxiety / panic", val: 6 },
        { text: "Frequent daily stress", val: 3 },
        { text: "Managed / Occasional", val: 0 },
        { text: "Extremely resilient / calm", val: -4 }
      ]
    }
  ];

  const handleSelect = (val: number) => {
    setScore(score + val);
    setStep(step + 1);
  };

  const getResult = () => {
    if (score > 10) return { title: "Accelerated Decay", text: "Your cellular age is likely 5-10 years older than your chronological calendar age. Immediate protocol intervention required to halt severe metabolic decline.", color: "text-red-500" };
    if (score > 0) return { title: "Baseline Aging", text: "You are aging at the standard societal rate. While not disastrous, you are not actively suppressing the decay function.", color: "text-yellow-400" };
    if (score > -8) return { title: "Optimal Preservation", text: "Your cellular age is likely 2-4 years younger than your chronological age. Your habits are actively delaying senescence.", color: "text-[#00F59B]" };
    return { title: "Biological Escape Velocity", text: "Exceptional metabolic parameters. You are operating at the bleeding-edge of longevity, actively reversing epigenetic markers.", color: "text-brand-neon-cyan" };
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-black px-6 max-w-3xl mx-auto flex flex-col justify-center">
      <Link href="/tools" className="text-brand-cream/50 text-xs font-bold uppercase tracking-widest hover:text-brand-neon mb-8 block">&larr; Back to Tools</Link>

      <div className="text-center mb-12">
        <Dna className="w-16 h-16 text-brand-neon-cyan mx-auto mb-6 opacity-80 animate-pulse"/>
        <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Epigenetic <span className="text-brand-neon-cyan">Aging Quiz.</span></h1>
        <p className="text-brand-cream/60 font-light">
          A rapid algorithmic assessment of your DNA methylation trajectory based on behavioral inputs. Calculate your true biological decay rate.
        </p>
      </div>

      {step < questions.length ? (
        <div className="glass-card p-10 rounded-[3rem] border border-white/10 shadow-2xl animate-fade-in relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-white/10">
             <div className="h-full bg-brand-neon-cyan transition-all duration-500" style={{width: `${(step / questions.length) * 100}%`}}></div>
          </div>
          
          <div className="text-center mb-10 mt-4">
            {questions[step].icon}
            <span className="text-[10px] font-bold tracking-widest text-[#00F59B] uppercase mb-4 block">Parameter {step + 1} of {questions.length}</span>
            <h2 className="text-2xl md:text-3xl font-black text-white leading-tight mb-4">{questions[step].q}</h2>
            <p className="text-sm text-brand-cream/50 font-light">{questions[step].desc}</p>
          </div>

          <div className="space-y-4">
            {questions[step].options.map((opt, i) => (
              <button 
                key={i} 
                onClick={() => handleSelect(opt.val)}
                className="w-full bg-black/50 border border-white/10 p-6 rounded-2xl text-left hover:border-brand-neon-cyan hover:bg-brand-neon-cyan/5 transition-all group flex justify-between items-center"
              >
                <span className="text-white font-bold tracking-wide group-hover:text-brand-neon-cyan transition-colors">{opt.text}</span>
                <ArrowRight className="w-5 h-5 text-brand-cream/30 group-hover:text-brand-neon-cyan transform group-hover:translate-x-2 transition-all"/>
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="glass-card p-12 text-center rounded-[3rem] border-t-[4px] border-brand-neon-cyan shadow-[0_0_100px_rgba(0,245,255,0.1)] animate-fade-in">
          <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white/50 mb-6 block">Diagnostic Complete</span>
          <Dna className="w-20 h-20 text-brand-neon-cyan mx-auto mb-8"/>
          
          <h2 className={`text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 ${getResult().color}`}>{getResult().title}</h2>
          <p className="text-lg text-brand-cream/80 font-light mb-12 max-w-lg mx-auto leading-relaxed">
            {getResult().text}
          </p>

          <div className="flex flex-col gap-4">
            <Link href="/protocols" className="w-full bg-brand-neon-cyan text-brand-black font-black uppercase tracking-widest p-5 rounded-2xl hover:bg-white transition-all shadow-glow">
              View Intervention Protocols
            </Link>
            <button onClick={() => {setStep(0); setScore(0);}} className="text-xs text-brand-cream/50 font-bold uppercase tracking-widest hover:text-white transition-colors py-4">
              Recalculate Trajectory
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
