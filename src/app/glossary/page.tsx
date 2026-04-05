"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Database, Lock } from "lucide-react";

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState("");

  const glossaryItems = [
    { name: "Apigenin", class: "Herb Compound", desc: "A natural compound found in chamomile. Helps your muscles relax deeply before sleep.", tier: "Public" },
    { name: "BPC-157", class: "Repair Protein", desc: "A protein chain that helps heal injured tendons and stomach issues very quickly.", tier: "Clinical" },
    { name: "CBG (Cannabigerol)", class: "Plant Compound", desc: "A natural plant part that helps protect the brain and keep it healthy.", tier: "Public" },
    { name: "CBN (Cannabinol)", class: "Plant Compound", desc: "A natural plant part that helps you fall into a deep sleep without feeling groggy the next day.", tier: "Public" },
    { name: "L-Theanine", class: "Tea Nutrient", desc: "Found in green tea. Helps calm the mind and focus without making you sleepy.", tier: "Public" },
    { name: "Methylene Blue", class: "Energy Booster", desc: "A compound that helps your body's cells produce more energy.", tier: "Clinical" },
    { name: "mTOR", class: "Growth Switch", desc: "The main switch in your body that decides if your cells should grow or clean themselves out.", tier: "Scientific" },
    { name: "NAD+", class: "Cell Fuel", desc: "A key part of how your cells make energy. It naturally goes down as we get older.", tier: "Scientific" },
    { name: "Rapamycin", class: "Cleanup Trigger", desc: "A powerful tool that triggers 'cellular cleanup,' helping your body get rid of old, damaged cells.", tier: "Clinical" },
    { name: "Spermidine", class: "Fasting Mimic", desc: "A compound that gives your cells the same benefits as fasting, without having to skip meals.", tier: "Clinical" },
    { name: "Terpenes", class: "Plant Aromas", desc: "Natural scents in plants that decide if a remedy will make you feel awake or sleepy.", tier: "Public" },
  ];

  const filtered = glossaryItems.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-40 pb-32 px-6 max-w-7xl mx-auto relative z-10 selection:bg-brand-neon">
      
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <span className="text-brand-neon font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block"><Database className="inline w-3 h-3 mr-2" /> Health Knowledge Base</span>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tighter uppercase leading-[0.9]">
            The <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-brand-emerald">Health Dictionary.</span>
          </h1>
        </div>
        
        <div className="w-full md:w-96 relative">
          <input 
            type="text" 
            placeholder="Search for a term or ingredient..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white/5 border border-white/20 rounded-full py-4 pl-12 pr-6 text-slate-900 dark:text-white placeholder-white/30 focus:outline-none focus:border-brand-neon focus:ring-1 focus:ring-brand-neon transition-all"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-900 dark:text-white/30" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item, i) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            key={i} 
            className="glass-panel p-8 rounded-[2rem] border border-black/5 dark:border-black/5 dark:border-white/5 hover:border-brand-neon/30 hover:bg-brand-neon/5 transition-all duration-300 group relative"
          >
            <div className="flex justify-between items-start mb-6">
              <span className="text-[10px] uppercase tracking-widest font-bold text-brand-neon bg-brand-neon/10 px-3 py-1 rounded-full border border-brand-neon/20">{item.class}</span>
              {item.tier === "Clinical" && <Lock className="w-4 h-4 text-brand-emerald/50" />}
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-brand-neon transition-colors">{item.name}</h3>
            <p className="text-sm text-slate-900 dark:text-white/60 leading-relaxed font-light">{item.desc}</p>
            
            {(item.tier === "Clinical" || item.tier === "Scientific") && (
              <div className="mt-6 pt-4 border-t border-dashed border-black/10 dark:border-black/10 dark:border-white/10">
                <span className="text-[9px] uppercase tracking-widest block text-[#14B897] font-bold">Requires Physician Review Before Synthesizing</span>
              </div>
            )}
          </motion.div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-1 md:col-span-2 lg:col-span-3 py-20 text-center border border-dashed border-black/10 dark:border-black/10 dark:border-white/10 rounded-3xl">
            <Database className="w-12 h-12 text-slate-900 dark:text-white/20 mx-auto mb-4" />
            <span className="text-slate-900 dark:text-white/40 uppercase tracking-widest text-sm block">No compounds found in database.</span>
            <span className="text-brand-neon text-xs mt-2 block">Clear search to reset index.</span>
          </div>
        )}
      </div>

    </div>
  );
}