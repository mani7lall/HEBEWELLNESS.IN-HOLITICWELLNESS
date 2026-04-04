"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, RefreshCw, Terminal, CheckCircle, AlertTriangle, Activity, Database, FileText, Cpu, Shield } from "lucide-react";

export default function AutoblogAdmin() {
  const [isRunning, setIsRunning] = useState(true);
  const [logs, setLogs] = useState([
    { ts: "21:10:04", msg: "[OMO] Initializing Triple-Critique Research Loop...", type: "info" },
    { ts: "21:10:05", msg: "[NVIDIA-405B] Sourcing clinical data for category: SLEEP", type: "research" },
    { ts: "21:12:30", msg: "[DONE] Generated: The Role of Glymphatic Cleansing...", type: "success" },
  ]);

  const stats = [
    { label: "Active Loop", val: "RALPH-PERSISTENCE", icon: Activity, color: "text-brand-neon" },
    { label: "Research Model", val: "LLAMA-3.1-405B", icon: Cpu, color: "text-blue-400" },
    { label: "AI Detection Avg", val: "2.4% (HUMAN)", icon: Shield, color: "text-brand-emerald" },
    { label: "Articles Today", val: "14 Published", icon: FileText, color: "text-brand-gold" },
  ];

  return (
    <div className="bg-white dark:bg-white dark:bg-brand-black min-h-screen text-slate-900 dark:text-white pt-32 pb-20 px-6 lg:px-12 font-mono">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4">
              Autoblog <span className="text-brand-neon">4.0 GUI</span>
            </h1>
            <p className="text-slate-900 dark:text-white/40 text-sm tracking-widest uppercase font-bold">
              Autonomous Research Command Center | OMO v3.14.0
            </p>
          </div>
          <div className="flex gap-4">
            <button 
              onClick={() => setIsRunning(!isRunning)}
              className={`px-8 py-4 rounded-xl font-black uppercase tracking-widest flex items-center gap-3 transition-all ${isRunning ? 'bg-red-500/10 text-red-500 border border-red-500/20' : 'bg-brand-neon text-brand-black shadow-glow'}`}
            >
              {isRunning ? <><Pause className="w-5 h-5"/> Stop Loop</> : <><Play className="w-5 h-5"/> Start Loop</>}
            </button>
            <button className="bg-white/5 border border-black/10 dark:border-black/10 dark:border-white/10 text-slate-900 dark:text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-white hover:text-brand-black transition-all">
              Manual Trigger
            </button>
          </div>
        </div>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((s, i) => (
            <div key={i} className="bg-white/5 border border-black/10 dark:border-black/10 dark:border-white/10 p-8 rounded-3xl group hover:border-brand-neon transition-all">
              <s.icon className={`w-8 h-8 ${s.color} mb-6`} />
              <div className="text-slate-900 dark:text-white/40 text-[10px] uppercase font-bold mb-2 tracking-widest">{s.label}</div>
              <div className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">{s.val}</div>
            </div>
          ))}
        </div>

        {/* LOG PANEL */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-gray-50 dark:bg-gray-50 dark:bg-black/80 border border-black/10 dark:border-black/10 dark:border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col h-[600px] shadow-2xl">
             <div className="bg-white/5 p-6 border-b border-black/10 dark:border-black/10 dark:border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Terminal className="w-5 h-5 text-brand-neon" />
                  <span className="text-xs font-black uppercase tracking-widest">Live Research Log</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
             </div>
             <div className="p-8 space-y-4 overflow-y-auto font-mono text-sm leading-relaxed flex-grow scrollbar-thin">
                {logs.map((log, i) => (
                   <div key={i} className="flex gap-4 border-b border-black/5 dark:border-black/5 dark:border-white/5 pb-2">
                      <span className="text-slate-900 dark:text-white/20 shrink-0">[{log.ts}]</span>
                      <span className={
                        log.type === 'success' ? 'text-brand-emerald' : 
                        log.type === 'research' ? 'text-blue-400' : 'text-slate-900 dark:text-white/60'
                      }>
                        {log.msg}
                      </span>
                   </div>
                ))}
                <div className="flex gap-4 animate-pulse">
                   <span className="text-slate-900 dark:text-white/20">[{new Date().toLocaleTimeString()}]</span>
                   <span className="text-brand-neon">SYSTEM: Thinking... (Llama 3.1 405B Active)</span>
                </div>
             </div>
          </div>

          <div className="space-y-8">
             <div className="bg-brand-emerald/10 border border-brand-emerald/20 p-10 rounded-[2.5rem]">
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter flex items-center gap-3">
                   <CheckCircle className="w-6 h-6 text-brand-emerald"/> Strategy Health
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-2">
                      <span>Article Quality</span>
                      <span className="text-brand-emerald">98% High Value</span>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-[98%] h-full bg-brand-emerald"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest mb-2">
                      <span>Human Flow Score</span>
                      <span className="text-brand-neon">100/100 (Pass)</span>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-full h-full bg-brand-neon"></div>
                    </div>
                  </div>
                </div>
             </div>

             <div className="bg-white/5 border border-black/10 dark:border-black/10 dark:border-white/10 p-10 rounded-[2.5rem]">
                <h3 className="text-xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter flex items-center gap-3">
                   <Database className="w-6 h-6 text-brand-gold"/> Category Queue
                </h3>
                <div className="space-y-4">
                  {["Sleep", "Stress", "Hair", "Skin"].map(cat => (
                    <div key={cat} className="flex justify-between items-center py-3 border-b border-black/5 dark:border-black/5 dark:border-white/5">
                      <span className="text-sm font-bold text-slate-900 dark:text-white/60">{cat} Vertical</span>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-[8px] font-black uppercase tracking-widest text-brand-gold">Next Session: 1hr</span>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}