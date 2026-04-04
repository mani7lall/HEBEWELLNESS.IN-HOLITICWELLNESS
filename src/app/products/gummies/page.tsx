"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star, Shield, Zap, Sparkles, Moon, Wind } from "lucide-react";
import Link from "next/link";

const gummyProducts = [
  {
    name: "Somnus Gummy",
    sub: "Architecture of Rest",
    category: "Sleep",
    price: "$39.99",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    icon: Moon,
    ingredients: "Melatonin, L-Theanine, Magnesium"
  },
  {
    name: "Zen Gummy",
    sub: "Cortisol Modulation",
    category: "Stress",
    price: "$44.99",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    icon: Wind,
    ingredients: "Ashwagandha, Rhodiola, L-Theanine"
  },
  {
    name: "Folli-Grow Gummy",
    sub: "Follicular Matrix",
    category: "Hair",
    price: "$49.99",
    color: "text-brand-gold",
    bg: "bg-brand-gold/10",
    border: "border-brand-gold/20",
    icon: Zap,
    ingredients: "Biotin, Saw Palmetto, Collagen"
  },
  {
    name: "Derm-Glow Gummy",
    sub: "Cellular Skin Health",
    category: "Skin",
    price: "$54.99",
    color: "text-brand-neon",
    bg: "bg-brand-neon/10",
    border: "border-brand-neon/20",
    icon: Sparkles,
    ingredients: "Collagen, Hyaluronic Acid, Vit C"
  }
];

export default function GummiesPage() {
  return (
    <div className="bg-white dark:bg-white dark:bg-brand-black min-h-screen text-slate-900 dark:text-white pt-40 pb-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-brand-neon font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Medical Grade Supplements</span>
          <h1 className="text-6xl md:text-8xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-8 leading-none">
            The Gummy <br/><span className="text-gradient-emerald">Protocol.</span>
          </h1>
          <p className="text-xl text-slate-900 dark:text-white/60 max-w-3xl mx-auto font-light leading-relaxed">
            Highly concentrated clinical formulations delivered in a high-bioavailability format. No synthetic fillers. No scam marketing. Just data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {gummyProducts.map((product, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-black/10 dark:border-black/10 dark:border-white/10 rounded-[3rem] p-12 flex flex-col lg:flex-row gap-10 items-center hover:border-brand-neon transition-all group"
            >
              <div className="`w-32 h-32 ${product.bg} ${product.color} rounded-[2rem] flex items-center justify-center shrink-0 border ${product.border} shadow-2xl`">
                <product.icon className="w-16 h-16"/>
              </div>
              <div className="text-center lg:text-left flex-grow">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">{product.name}</h3>
                    <p className="`text-xs font-bold uppercase tracking-widest ${product.color}`">{product.sub}</p>
                  </div>
                  <div className="text-2xl font-black text-slate-900 dark:text-white">{product.price}</div>
                </div>
                <p className="text-sm text-slate-900 dark:text-white/40 mb-8 font-light italic">
                  Key Actives: {product.ingredients}
                </p>
                <div className="flex gap-4">
                   <Link href={`/categories/${product.category.toLowerCase()}`} className="flex-grow bg-white text-brand-black font-black uppercase tracking-widest py-4 rounded-xl text-[10px] text-center hover:bg-brand-neon transition-colors">
                     View Research
                   </Link>
                   <button className="flex-grow bg-white/5 border border-black/10 dark:border-black/10 dark:border-white/10 text-slate-900 dark:text-white font-black uppercase tracking-widest py-4 rounded-xl text-[10px] hover:bg-white hover:text-brand-black transition-all">
                     Waitlist
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 p-16 bg-brand-emerald/10 border border-brand-emerald/20 rounded-[4rem] text-center max-w-4xl mx-auto">
          <Shield className="w-16 h-16 text-brand-emerald mx-auto mb-8"/>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tighter">Clinical Standard Verification</h2>
          <p className="text-slate-900 dark:text-white/60 leading-relaxed font-light mb-10">
            Every batch of Hebe Gummies is third-party tested for purity, potency, and heavy metals. We do not compromise on the biological integrity of our members.
          </p>
          <div className="flex justify-center gap-10 opacity-40 grayscale">
            <span className="text-xs font-black uppercase tracking-widest">GMP Certified</span>
            <span className="text-xs font-black uppercase tracking-widest">Lab Tested</span>
            <span className="text-xs font-black uppercase tracking-widest">Cruelty Free</span>
          </div>
        </div>
      </div>
    </div>
  );
}