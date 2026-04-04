"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Shield, Flame, Zap, Droplet, ArrowRight, X } from "lucide-react";
import Link from "next/link";

type Protocol = {
  id: string;
  name: string;
  category: "Neuro-Cognitive" | "Metabolic" | "Physical Recovery" | "Systemic Regeneration";
  icon: React.ReactNode;
  targets: string[];
  compounds: string[];
  summary: string;
  clinicalDose: string;
  timing: string;
  synergyLevel: number; // 1-10 string visualizer
};

export default function ProtocolsLibrary() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Neuro-Cognitive", "Metabolic", "Physical Recovery", "Systemic Regeneration"];

  const protocols: Protocol[] = [
    {
      id: "p1",
      name: "The Executive Alpha Protocol",
      category: "Neuro-Cognitive",
      icon: <Activity />,
      targets: ["Pre-frontal Cortex", "HPA Axis", "Dopaminergic Receptors"],
      compounds: ["Neural Focus Matrix (CBD/L-Theanine)", "Methylene Blue (0.5mg/kg)"],
      summary: "Designed for extreme, unbroken flow-states during high-stakes corporate or athletic execution. Suppresses the cortisol cascade while massively upregulating mitochondrial ATP specifically in the brain, allowing for 6-8 hours of jitter-free dominant cognition.",
      clinicalDose: "1ml sublingual focus matrix + 10mg MB",
      timing: "T-Minus 45 minutes prior to execution horizon.",
      synergyLevel: 9
    },
    {
      id: "p2",
      name: "Senolytic Autophagy Wash",
      category: "Systemic Regeneration",
      icon: <Droplet />,
      targets: ["Hepatic Tissue", "Senescent 'Zombie' Cells", "Lysosomal Pathways"],
      compounds: ["Supreme Vitality 1:6", "Spermidine (15mg)", "Rapamycin (Pulsed 5mg weekly)"],
      summary: "An aggressive cellular 'trash collection' protocol. Utilizes the fasting-mimetic properties of Spermidine and mTOR inhibition of Rapamycin to force the body to literally digest and recycle its own damaged inflammatory cells.",
      clinicalDose: "Pulsed mTOR suppression + Daily 1:6 Oil",
      timing: "Executed continuously. Rapamycin strictly on Sunday mornings.",
      synergyLevel: 10
    },
    {
      id: "p3",
      name: "The Delta-Wave Force Vector",
      category: "Neuro-Cognitive",
      icon: <Flame />,
      targets: ["Pineal Gland", "Glymphatic System", "Central Nervous System"],
      compounds: ["High-Dose CBN (Cannabinol)", "Magnesium L-Threonate"],
      summary: "A violent suppression of sympathetic nervous system tone. Designed for chronic insomniacs or executives who cannot 'shut down'. Forces the brain through Alpha, bypassing REM, directly into Deep Delta sleep where brain shrinkage and glymphatic clearance occurs.",
      clinicalDose: "50mg CBN + 200mg Mag-Threonate",
      timing: "Strictly 60 minutes before required unconsciousness.",
      synergyLevel: 8
    },
    {
      id: "p4",
      name: "Synovial Vascular Repair",
      category: "Physical Recovery",
      icon: <Shield />,
      targets: ["Tendons", "Ligaments", "Myofascial Tissue"],
      compounds: ["Targeted Recovery Matrix Balm", "Sub-Q BPC-157", "Near-Infrared Light (850nm)"],
      summary: "The ultimate joint and tendon regeneration stack. We saturate the local tissue with transdermal anti-inflammatories, inject peptide sequences directly adjacent to the tear, and radiate the site with NIR lasers to force massive localized ATP and collagen synthesis.",
      clinicalDose: "Transdermal liberally + 250mcg BPC + 10min PBM",
      timing: "Immediate acute phase post-injury or post-exertion.",
      synergyLevel: 10
    },
    {
      id: "p5",
      name: "Insulin & Glycemic Flattening",
      category: "Metabolic",
      icon: <Zap />,
      targets: ["Hepatic Glucose Receptors", "Pancreatic Beta Cells"],
      compounds: ["Supreme Vitality Full-Spectrum", "CGM Biometric Telemetry"],
      summary: "Utilizing continuous glucose monitors to map the cortisol-glucose axis. We blunt the stress-induced gluconeogenesis of cortisol by pre-loading with CB1 antagonists via our Full-Spectrum matrix, ensuring a flat, immortal glycemic baseline.",
      clinicalDose: "1ml Supreme Vitality upon waking",
      timing: "Every 12 hours exactly to maintain baseline receptor saturation.",
      synergyLevel: 7
    }
  ];

  const filtered = filter === "All" ? protocols : protocols.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-40 pb-32 px-6 max-w-7xl mx-auto relative z-10 selection:bg-brand-neon">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-neon/5 blur-[150px] rounded-full point-events-none -z-10"></div>
      
      <div className="mb-20">
        <span className="text-brand-neon font-bold tracking-[0.3em] text-[10px] sm:text-xs uppercase mb-6 block border border-brand-neon/20 px-4 py-1.5 rounded-full inline-block bg-brand-neon/5 shadow-glow">Hebe OS // Clinical Directory</span>
        <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white tracking-tighter uppercase leading-[0.9] mb-8">
          Actionable <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-neon-cyan">Protocols.</span>
        </h1>
        <p className="text-xl text-slate-900 dark:text-white/60 max-w-2xl font-light border-l border-brand-neon pl-6">
          Dossiers are theory. Protocols are clinical action. <br/>Browse our proprietary synergistic administration methods below. Consult the Scientific Board before executing Tier-10 integrations.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mb-12">
        {categories.map(cat => (
          <button 
            key={cat} 
            onClick={() => setFilter(cat)}
            className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 magnetic-button ${filter === cat ? 'bg-brand-neon text-brand-black shadow-glow' : 'glass hover:bg-white/10 text-slate-900 dark:text-white'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        <AnimatePresence>
          {filtered.map((p, i) => (
            <motion.div 
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              key={p.id} 
              className="glass-panel p-8 md:p-12 rounded-[2rem] border border-black/10 dark:border-black/10 dark:border-white/10 hover:border-brand-neon/40 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="w-48 h-48">{p.icon}</div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 md:gap-16 relative z-10">
                <div className="md:w-1/3">
                  <span className="text-[10px] tracking-widest text-[#14B897] font-black uppercase mb-4 block">{p.category}</span>
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-6 leading-tight group-hover:text-brand-neon transition-colors">{p.name}</h3>
                  <div className="mb-6">
                    <span className="text-[10px] text-slate-900 dark:text-white/40 uppercase tracking-widest block mb-2">Primary Targets</span>
                    <div className="flex flex-wrap gap-2">
                      {p.targets.map((t, j) => (
                        <span key={j} className="text-xs bg-gray-50 dark:bg-gray-50 dark:bg-black/50 border border-black/10 dark:border-black/10 dark:border-white/10 px-3 py-1 rounded-full text-slate-900 dark:text-white/70">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="md:w-2/3 flex flex-col justify-between border-t md:border-t-0 md:border-l border-black/10 dark:border-black/10 dark:border-white/10 pt-8 md:pt-0 md:pl-16">
                  <div>
                    <h4 className="text-sm text-brand-neon uppercase tracking-widest font-bold mb-4">Mechanism Synthesis</h4>
                    <p className="text-lg text-slate-900 dark:text-white/70 leading-relaxed font-light mb-8">{p.summary}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-6 mb-8 bg-gray-50 dark:bg-gray-50 dark:bg-black/40 p-6 rounded-2xl border border-black/5 dark:border-black/5 dark:border-white/5">
                      <div>
                        <span className="text-[10px] text-slate-900 dark:text-white/40 uppercase tracking-widest block mb-1">Clinical Dose</span>
                        <span className="text-sm font-bold text-slate-900 dark:text-white font-mono">{p.clinicalDose}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-slate-900 dark:text-white/40 uppercase tracking-widest block mb-1">Administration Timing</span>
                        <span className="text-sm font-bold text-slate-900 dark:text-white font-mono">{p.timing}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-900 dark:text-white/40 uppercase tracking-widest block mb-2">Synergy Threat Level</span>
                      <div className="flex gap-1">
                        {[...Array(10)].map((_, k) => (
                          <div key={k} className={`w-3 h-1 rounded-full ${k < p.synergyLevel ? 'bg-brand-neon shadow-[0_0_5px_#00EDA5]' : 'bg-white/10'}`} />
                        ))}
                      </div>
                    </div>
                    
                    <Link href="/tools/stack" className="hidden sm:flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white hover:text-brand-neon transition-colors group/btn">
                      Architect This <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}