"use client";

import Link from "next/link";
import { Activity, Zap, Dna, Clock, Heart, Shield, Droplets, Dumbbell } from "lucide-react";
import { motion } from "framer-motion";

export default function ToolsHub() {
  const primaryTools = [
    {
      id: "stack",
      title: "Stack Architect",
      desc: "Algorithmically generate a synergistic, conflict-free peptide and botanical protocol.",
      icon: <Zap className="w-10 h-10 text-brand-gold mb-6"/>,
      link: "/tools/stack",
      color: "border-brand-gold",
      bgHover: "hover:bg-brand-gold/5"
    },
    {
      id: "topology",
      title: "Biological Topology",
      desc: "Interactive 3D systemic mapping linking threat vectors to Hebe countermeasures.",
      icon: <Dna className="w-10 h-10 text-brand-neon-cyan mb-6"/>,
      link: "/tools/body-map",
      color: "border-brand-neon-cyan",
      bgHover: "hover:bg-brand-neon-cyan/5"
    },
    {
      id: "vo2",
      title: "Cardio Estimator",
      desc: "Calculate your VO2 Max percentile and corresponding all-cause mortality risk.",
      icon: <Heart className="w-10 h-10 text-rose-500 mb-6"/>,
      link: "/tools/vo2-max",
      color: "border-rose-500",
      bgHover: "hover:bg-rose-500/5"
    },
    {
      id: "longevity",
      title: "Actuarial Velocity",
      desc: "Project maximum chronological lifespan based on adherence to extreme biophysical regimens.",
      icon: <Activity className="w-10 h-10 text-brand-neon mb-6"/>,
      link: "/tools/longevity-calculator",
      color: "border-brand-neon",
      bgHover: "hover:bg-brand-neon/5"
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-black px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <Activity className="w-16 h-16 text-brand-neon mx-auto mb-6 opacity-80"/>
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">Biological <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B897] to-brand-neon">Compute.</span></h1>
        <p className="text-xl text-brand-cream/60 font-light max-w-2xl mx-auto">
          The ultimate suite of interactive clinical diagnostics. Calculate your precise pharmacological needs before deploying an intervention.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {primaryTools.map((tool, index) => (
          <Link href={tool.link} key={index} className={`glass-card p-8 rounded-3xl border-t-[3px] border-white/5 hover:${tool.color} transition-all duration-300 ${tool.bgHover} group flex flex-col`}>
             <div className="transform group-hover:scale-110 transition-transform duration-300">{tool.icon}</div>
             <h3 className="text-2xl font-bold text-white mb-4">{tool.title}</h3>
             <p className="text-brand-cream/60 text-sm font-light leading-relaxed flex-grow">{tool.desc}</p>
             <span className="mt-8 text-[10px] uppercase font-bold tracking-widest text-[#14B897] flex items-center gap-2 group-hover:text-brand-neon transition-colors">Initialize Tool &rarr;</span>
          </Link>
        ))}
      </div>

      {/* Embedded Simple Tools / Lead Capture Previews */}
      <div className="bg-brand-dark rounded-[3rem] p-12 border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-premium opacity-20 pointer-events-none"></div>
        <div className="relative z-10">
          <span className="text-brand-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Quick Diagnostics</span>
          <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-8">Rapid Baseline Calculators</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black/50 p-8 rounded-3xl border border-white/5 flex flex-col">
              <Droplets className="w-8 h-8 text-blue-400 mb-4"/>
              <h4 className="text-xl font-bold text-white mb-2">Cellular Hydration Deficit</h4>
              <p className="text-sm text-brand-cream/50 mb-6">Calculate exact electrolyte and osmotic water requirements based on lean mass and ambient conditions.</p>
              <Link href="/#hydration-tool" className="mt-auto text-blue-400 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">Access on Homepage &rarr;</Link>
            </div>
            <div className="bg-black/50 p-8 rounded-3xl border border-white/5 flex flex-col">
              <Dumbbell className="w-8 h-8 text-orange-400 mb-4"/>
              <h4 className="text-xl font-bold text-white mb-2">Protein Synthesis Matrix</h4>
              <p className="text-sm text-brand-cream/50 mb-6">Determine precise leucine thresholds required to trigger mTOR muscle growth based on body metrics.</p>
              <Link href="/#protein-tool" className="mt-auto text-orange-400 text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">Access on Homepage &rarr;</Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
