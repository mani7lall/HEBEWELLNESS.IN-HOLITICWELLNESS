"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Zap, MoonStar, Activity } from "lucide-react";

export default function CircadianVisualizer() {
  const [time, setTime] = useState(12); // 0-24 hour scale
  
  // Dynamic phase calculation
  const getPhase = (t: number) => {
    if (t >= 6 && t < 10) return { name: "Cortisol Awakening Response", icon: <Sun />, color: "text-brand-neon", bg: "bg-brand-neon/10", glow: "shadow-[0_0_50px_rgba(0,237,165,0.3)]" };
    if (t >= 10 && t < 14) return { name: "Peak Cognitive Flow", icon: <Activity />, color: "text-brand-neon-cyan", bg: "bg-brand-neon-cyan/10", glow: "shadow-[0_0_50px_rgba(0,240,255,0.3)]" };
    if (t >= 14 && t < 18) return { name: "Metabolic Stabilization", icon: <Zap />, color: "text-brand-light-emerald", bg: "bg-brand-light-emerald/10", glow: "shadow-[0_0_50px_rgba(20,184,151,0.3)]" };
    if (t >= 18 && t < 22) return { name: "Parasympathetic Descent", icon: <Moon />, color: "text-white/60", bg: "bg-white/5", glow: "shadow-[0_0_50px_rgba(255,255,255,0.1)]" };
    return { name: "Deep Delta / Glymphatic Clearance", icon: <MoonStar />, color: "text-brand-emerald", bg: "bg-brand-emerald/20", glow: "shadow-[0_0_50px_rgba(10,47,36,0.5)]" };
  };

  const getHebeProtocol = (t: number) => {
    if (t >= 6 && t < 14) return "Neural Focus Matrix: Sublingual dosing immediately upon waking blocks adenosine reuptake and extends peak alpha-wave cognitive flow.";
    if (t >= 14 && t < 18) return "Recovery Matrix (Transdermal): Apply to dominant muscle groups to combat secondary cortisol spikes and physical inflammation.";
    return "Supreme Vitality (1:6): Macro-dosing 60 minutes pre-sleep forces the autonomic nervous system into parasympathetic dominance, locking in Delta waves.";
  };

  const currentPhase = getPhase(time);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto flex flex-col items-center">
      
      <div className="text-center mb-16">
        <span className="text-brand-neon font-bold tracking-[0.2em] text-xs uppercase mb-4 block border border-brand-neon/20 px-4 py-1.5 rounded-full inline-block bg-brand-neon/5">Biological Clock Tool</span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">Circadian Protocol Engine.</h1>
        <p className="text-xl text-brand-cream/60 max-w-2xl mx-auto font-light">Manipulate the slider to simulate your 24-hour biological cycle. Discover exactly when to deploy Hebe interventions for maximum autonomic leverage.</p>
      </div>

      <div className="w-full max-w-4xl relative">
        {/* Holographic Interactive Panel */}
        <div className={`glass-panel rounded-[2rem] p-12 transition-all duration-700 ${currentPhase.glow}`}>
          
          <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
            <div className={`w-32 h-32 rounded-full flex items-center justify-center border border-white/10 relative ${currentPhase.bg}`}>
              <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-current" style={{ color: "inherit" }}></div>
              <div className={`w-12 h-12 ${currentPhase.color}`}>
                {currentPhase.icon}
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <span className="font-mono text-brand-cream/40 text-sm mb-2 block">{Math.floor(time).toString().padStart(2, '0')}:00 HRS</span>
              <AnimatePresence mode="wait">
                <motion.h2 
                  key={currentPhase.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`text-3xl md:text-4xl font-bold mb-4 ${currentPhase.color}`}
                >
                  {currentPhase.name}
                </motion.h2>
              </AnimatePresence>
            </div>
          </div>

          <div className="mb-16">
            <div className="flex justify-between text-xs font-bold tracking-widest text-brand-cream/40 mb-4 px-2">
              <span>00:00</span>
              <span>06:00</span>
              <span>12:00</span>
              <span>18:00</span>
              <span>23:59</span>
            </div>
            <input 
              type="range" 
              min="0" max="23.9" step="0.1" 
              value={time}
              onChange={(e) => setTime(parseFloat(e.target.value))}
              className="w-full appearance-none bg-white/10 h-2 rounded-full outline-none focus:outline-none focus:ring-2 focus:ring-brand-neon focus:ring-opacity-50 transition-all cursor-pointer"
              style={{
                background: `linear-gradient(to right, #00EDA5 0%, #00EDA5 ${(time/24)*100}%, rgba(255,255,255,0.1) ${(time/24)*100}%, rgba(255,255,255,0.1) 100%)`
              }}
            />
            {/* Custom Range Slider Thumb CSS is handled by global or browser default, but the track is neon! */}
          </div>

          <div className="border-t border-white/10 pt-8 mt-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <Zap className="w-5 h-5 text-brand-neon" /> 
              Recommended Intervention
            </h3>
            <p className="text-brand-cream/70 leading-relaxed font-light text-lg">
              {getHebeProtocol(time)}
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
