"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Sparkles, Sprout, Network } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-gradient-animated min-h-screen text-brand-cream font-sans pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-4xl mx-auto mb-32 pt-16"
        >
          <span className="text-brand-neon font-bold tracking-[0.2em] text-xs uppercase mb-6 block border border-brand-neon/20 px-4 py-1.5 rounded-full inline-block bg-brand-neon/5">Our Genesis</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight drop-shadow-lg">Where Vedic Tradition Meets Swiss Biotech.</h1>
          <p className="text-xl text-brand-cream/60 leading-relaxed font-light">
            Hebe Wellness was not born in a boardroom. It was synthesized from a multi-generational legacy of Himalayan botanical medicine, modernized by the rigorous clinical standards of Swiss pharmaceutical extraction.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 gap-16 mb-32 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The High-Altitude Advantage</h2>
            <p className="text-brand-cream/60 text-lg leading-relaxed mb-6">
              Cannabis Sativa is a highly adaptive bio-accumulator. When grown in highly controlled, low-stress environments, it produces weak, lazy cannabinoid profiles. 
              <br/><br/>
              By cultivating exclusively above 3,000 meters in the extreme UV radiation and harsh winds of the Himalayas, we force the plant into a state of intense biological stress. This yields a hyper-resilient terpene and minor-cannabinoid matrix impossible to replicate anywhere else on Earth.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative aspect-square">
            <div className="absolute inset-0 bg-brand-neon/20 blur-[100px] rounded-full"></div>
            <div className="glass-panel w-full h-full rounded-[3rem] p-8 border border-white/10 relative overflow-hidden backdrop-blur-3xl flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6 w-full h-full text-center">
                <div className="bg-black/40 rounded-2xl flex flex-col items-center justify-center border border-white/5 p-4 hover:border-brand-neon/50 transition-colors group">
                  <Sprout className="w-10 h-10 text-brand-neon mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold text-white uppercase tracking-widest">Pristine Soil</span>
                </div>
                <div className="bg-black/40 rounded-2xl flex flex-col items-center justify-center border border-white/5 p-4 hover:border-brand-neon/50 transition-colors group">
                  <Sparkles className="w-10 h-10 text-brand-neon mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold text-white uppercase tracking-widest">High Terpenes</span>
                </div>
                <div className="bg-black/40 rounded-2xl flex flex-col items-center justify-center border border-white/5 p-4 hover:border-brand-neon/50 transition-colors group">
                  <Network className="w-10 h-10 text-brand-neon mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold text-white uppercase tracking-widest">CO2 Extracted</span>
                </div>
                <div className="bg-black/40 rounded-2xl flex flex-col items-center justify-center border border-white/5 p-4 hover:border-brand-neon/50 transition-colors group">
                  <Shield className="w-10 h-10 text-brand-neon mb-4 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-bold text-white uppercase tracking-widest">Triple Tested</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
