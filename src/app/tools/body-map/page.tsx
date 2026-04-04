"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Heart, Activity, GitBranch, Shield, Dna, ArrowRight } from "lucide-react";
import Link from "next/link";

type SystemType = "Nervous" | "Cardiovascular" | "Musculoskeletal" | "Endocrine" | "Cellular";
type System = SystemType | null;

export default function BodyMap() {
  const [activeSystem, setActiveSystem] = useState<System>(null);

  const systemsData: Record<SystemType, any> = {
    Nervous: {
      title: "Central Nervous System (CNS)",
      icon: <Brain className="w-8 h-8"/>,
      desc: "The command center. Susceptible to excitotoxicity, oxidative stress, and rapid aging due to high metabolic demand.",
      threats: ["Cortisol Toxicity", "Amyloid Plaque Buildup", "Glymphatic Stagnation"],
      interventions: [
        { name: "Neural Focus Matrix", link: "/tools/stack", action: "Forces Alpha-wave state, suppressing sympathetic overdrive." },
        { name: "Spermidine Protocol", link: "/blog/spermidine-autophagy", action: "Triggers deep autophagic clearance of misfolded brain proteins." },
        { name: "Methylene Blue", link: "/blog/methylene-blue-mitochondria", action: "Bypasses damaged mitochondria to restore massive ATP output." }
      ],
      color: "from-brand-neon via-brand-neon-cyan to-transparent",
      shadow: "shadow-[0_0_50px_rgba(0,237,165,0.4)]"
    },
    Cardiovascular: {
      title: "Cardiovascular Network",
      icon: <Heart className="w-8 h-8"/>,
      desc: "The delivery mechanism. Endothelial health dictates exactly how long your organs survive without ischemic damage.",
      threats: ["Glycemic Variability", "Endothelial Senescence", "Arterial Plaque"],
      interventions: [
        { name: "HRV Optimization", link: "/blog/hrv-autonomic-load", action: "Quantifies the autonomic load on the heart via milliseconds of variance." },
        { name: "CGM Tracking", link: "/blog/metabolic-cgm-tracking", action: "Flattens blood glucose spikes to prevent vascular macro-damage." }
      ],
      color: "from-rose-500 via-red-900 to-transparent",
      shadow: "shadow-[0_0_50px_rgba(225,29,72,0.4)]"
    },
    Musculoskeletal: {
      title: "Musculoskeletal Architecture",
      icon: <Activity className="w-8 h-8"/>,
      desc: "The physical chassis. Highly prone to inflammatory cytokine storms following mechanical load or injury.",
      threats: ["DOMS (Delayed Onset Soreness)", "Tendon Rupture", "Sarcopenia"],
      interventions: [
        { name: "BPC-157 Peptides", link: "/blog/peptide-therapy-recovery", action: "Rapidly upregulates VEGF, accelerating torn tendon healing." },
        { name: "Transdermal CBD Matrix", link: "/tools/stack", action: "Violently suppresses localized cytokine activity in the synovial fluid." },
        { name: "Red Light Therapy", link: "/blog/red-light-photobiomodulation", action: "Floods the joint with targeted photons, generating localized ATP." }
      ],
      color: "from-[#FCD34D] via-orange-900 to-transparent",
      shadow: "shadow-[0_0_50px_rgba(252,211,77,0.4)]"
    },
    Endocrine: {
      title: "Endocrine & Hormonal Axis",
      icon: <GitBranch className="w-8 h-8"/>,
      desc: "The biochemical messenger system. Controls everything from metabolic resting rate to reproductive longevity and deep sleep architecture.",
      threats: ["Endocrine Disruptors", "Cortisol Dominance", "Testosterone/Estrogen Decay"],
      interventions: [
        { name: "Circadian Rhythm Matrix", link: "/tools/circadian", action: "Forces hormonal alignment with geophysical light cycles." },
        { name: "Full-Spectrum Cannabinoids", link: "/protocols", action: "Restores homeostasis to the HPA (Hypothalamic-Pituitary-Adrenal) axis." }
      ],
      color: "from-blue-500 via-cyan-900 to-transparent",
      shadow: "shadow-[0_0_50px_rgba(59,130,246,0.4)]"
    },
    Cellular: {
      title: "Mitochondrial & Cellular Base",
      icon: <Dna className="w-8 h-8"/>,
      desc: "The absolute root level. Where the battle against biological aging is ultimately won or lost.",
      threats: ["SASP Exosome Emission", "Telomere Attrition", "ATP Depletion"],
      interventions: [
        { name: "NAD+ Precursors", link: "/blog/nad-plus-optimization", action: "Restores the primary coenzyme required for the Electron Transport Chain." },
        { name: "Rapamycin (mTOR)", link: "/blog/rapamycin-mtor-inhibition", action: "Inhibits growth to force the cell into profound systemic repair." },
        { name: "Exosome Fidelity", link: "/blog/exosome-cell-signaling", action: "Restoring intercellular communication across the biological internet." }
      ],
      color: "from-purple-500 via-indigo-900 to-transparent",
      shadow: "shadow-[0_0_50px_rgba(168,85,247,0.4)]"
    }
  };

  return (
    <div className="min-h-screen pt-40 pb-32 px-6 max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-12">
      
      {/* 3D Visualizer Abstract Representation */}
      <div className="lg:w-1/2 relative flex items-center justify-center min-h-[500px] lg:min-h-[700px]">
        {/* Holographic Platform */}
        <div className="absolute bottom-10 w-3/4 h-24 rounded-[100%] bg-white/5 border border-white/20 shadow-[0_40px_100px_rgba(255,255,255,0.05)] transform skew-x-[-20deg] rotate-x-60 pointer-events-none"></div>

        {/* Abstract Human Form or System Nodes */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-8">
          
          <div className="text-center absolute top-0 left-0">
            <span className="text-brand-neon font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block"><GitBranch className="inline w-3 h-3 mr-2" /> System Architect</span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter uppercase leading-[0.9]">
              Biological <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-neon-cyan">Topology.</span>
            </h1>
          </div>

          <div className="mt-32 w-full max-w-sm relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0px,transparent_1px)] bg-[size:10px_10px] opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] pointer-events-none"></div>

            {Object.entries(systemsData).map(([key, sys]) => (
              <button 
                key={key}
                onMouseEnter={() => setActiveSystem(key as System)}
                onMouseLeave={() => setActiveSystem(null)}
                className={`w-full relative glass-panel mb-4 p-6 rounded-3xl border flex items-center justify-between transition-all duration-500 hover:scale-105 active:scale-95 group overflow-hidden ${activeSystem === key ? 'border-brand-neon ' + sys.shadow : 'border-black/10 dark:border-black/10 dark:border-white/10 hover:border-white/30'}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-700 ${sys.color}`}></div>
                
                <div className="flex items-center gap-6 relative z-10">
                  <div className={`text-slate-900 dark:text-white/50 group-hover:text-slate-900 dark:text-white transition-colors duration-500 ${activeSystem === key ? 'text-brand-neon' : ''}`}>
                    {sys.icon}
                  </div>
                  <span className="font-bold tracking-widest uppercase text-left text-sm md:text-base text-slate-900 dark:text-white">{sys.title}</span>
                </div>
                <div className={`w-3 h-3 rounded-full border border-white/20 transition-all ${activeSystem === key ? 'bg-brand-neon border-brand-neon animate-pulse shadow-[0_0_10px_#00EDA5]' : ''}`}></div>
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Target Data Panel */}
      <div className="lg:w-1/2 relative min-h-[600px] flex items-center">
        <AnimatePresence mode="wait">
          {activeSystem ? (
            <motion.div 
              key={activeSystem}
              initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -50, filter: "blur(10px)" }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="glass p-10 md:p-14 rounded-[3rem] border border-black/10 dark:border-black/10 dark:border-white/10 w-full relative overflow-hidden"
            >
              <div className={`absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br ${systemsData[activeSystem].color} blur-[100px] opacity-50 rounded-full pointer-events-none`}></div>
              
              <div className="relative z-10">
                <span className="text-[10px] tracking-widest text-slate-900 dark:text-white/40 uppercase font-black block mb-4 border-b border-black/10 dark:border-black/10 dark:border-white/10 pb-4">Target Acquired</span>
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight">{systemsData[activeSystem].title}</h2>
                <p className="text-xl text-slate-900 dark:text-white/70 font-light mb-10 leading-relaxed">
                  {systemsData[activeSystem].desc}
                </p>

                <div className="mb-10">
                  <span className="text-xs uppercase tracking-widest font-bold text-red-500 mb-4 block flex items-center gap-2"><Shield className="w-4 h-4"/> Identified Threats</span>
                  <div className="flex flex-wrap gap-2">
                    {systemsData[activeSystem].threats.map((threat: string, i: number) => (
                      <span key={i} className="text-[10px] font-mono text-red-400/80 bg-red-900/10 border border-red-500/20 px-3 py-1.5 rounded-md">{threat}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-[#14B897] mb-6 block border-t border-black/10 dark:border-black/10 dark:border-white/10 pt-6">Hebe Countermeasures</span>
                  <div className="space-y-4">
                    {systemsData[activeSystem].interventions.map((inv: any, i: number) => (
                      <Link 
                        href={inv.link} 
                        key={i} 
                        className="block bg-gray-50 dark:bg-gray-50 dark:bg-black/40 border border-black/5 dark:border-black/5 dark:border-white/5 hover:border-brand-neon/50 p-4 rounded-2xl group transition-all"
                      >
                        <h4 className="text-slate-900 dark:text-white font-bold mb-1 flex justify-between items-center">
                          {inv.name}
                          <span className="text-[9px] text-brand-neon opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-widest">Execute <ArrowRight className="inline w-3 h-3"/></span>
                        </h4>
                        <p className="text-sm font-light text-slate-900 dark:text-white/50">{inv.action}</p>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full flex flex-col items-center justify-center text-center p-12 glass border border-dashed border-black/10 dark:border-black/10 dark:border-white/10 rounded-[3rem]"
            >
              <div className="w-24 h-24 border border-black/10 dark:border-black/10 dark:border-white/10 rounded-full flex items-center justify-center mb-8 relative">
                <div className="absolute inset-0 bg-brand-neon/5 rounded-full animate-ping"></div>
                <Activity className="w-8 h-8 text-slate-900 dark:text-white/20" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Awaiting Selection</h3>
              <p className="text-slate-900 dark:text-white/50 font-light">Hover over any biological sub-system in the topology map to instantly decrypt threat vectors and matching peptide/botanical countermeasures.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}