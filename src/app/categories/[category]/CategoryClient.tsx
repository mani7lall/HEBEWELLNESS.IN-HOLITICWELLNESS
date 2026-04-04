"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { Moon, Zap, Sparkles, Wind, ArrowRight, Shield, Beaker, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const categoryData = {
  sleep: {
    title: "Deep Sleep Architecture",
    tagline: "Master your circadian biology for ultimate recovery.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    icon: Moon,
    description: "Sleep is the non-negotiable foundation of longevity. Our protocols focus on temperature regulation, light hygiene, and magnesium-based neuro-relaxation.",
    gummy: {
      name: "Somnus Gummy",
      ingredients: ["5mg Melatonin", "200mg L-Theanine", "100mg Magnesium"],
      price: "$39.99"
    }
  },
  stress: {
    title: "Vagal Resilience & Zen",
    tagline: "Modulate Cortisol. Restore Executive Control.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
    icon: Wind,
    description: "Systemic stress is the primary driver of biological aging. We leverage adaptogens and breath-work protocols to recalibrate your parasympathetic nervous system.",
    gummy: {
      name: "Zen Gummy",
      ingredients: ["600mg Ashwagandha", "250mg L-Theanine", "Rhodiola"],
      price: "$44.99"
    }
  },
  hair: {
    title: "Follicular Vitality",
    tagline: "Reverse Hair Aging from the Cellular Level.",
    color: "text-brand-gold",
    bg: "bg-brand-gold/10",
    border: "border-brand-gold/20",
    icon: Zap,
    description: "Hair health is an internal biomarker. Our protocols target DHT pathways and micronutrient delivery to optimize density and growth cycles.",
    gummy: {
      name: "Folli-Grow Gummy",
      ingredients: ["10,000mcg Biotin", "Saw Palmetto", "Pumpkin Seed Oil"],
      price: "$49.99"
    }
  },
  skin: {
    title: "Dermal Integrity & Glow",
    tagline: "The Science of Biological Skin Rejuvenation.",
    color: "text-brand-neon",
    bg: "bg-brand-neon/10",
    border: "border-brand-neon/20",
    icon: Sparkles,
    description: "Skin is your largest organ. We focus on collagen synthesis, hyaluronic hydration, and antioxidant defense against UV-induced protein carbonylation.",
    gummy: {
      name: "Derm-Glow Gummy",
      ingredients: ["Hydrolyzed Collagen", "Hyaluronic Acid", "Vitamin C"],
      price: "$54.99"
    }
  }
};

export default function CategoryClient() {
  const params = useParams();
  const category = params.category as string;
  const data = categoryData[category as keyof typeof categoryData];

  if (!data) return <div className="p-20 text-center text-slate-900 dark:text-white/20">Initializing Clinical Domain...</div>;

  const Icon = data.icon;

  return (
    <div className="bg-white dark:bg-brand-black min-h-screen text-slate-900 dark:text-white pt-32 pb-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* HERO */}
        <div className="flex flex-col lg:flex-row gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/2"
          >
            <span className="`font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block ${data.color}`">
              Clinical Domain: {category}
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-8 leading-[0.85]">
              {data.title.split(' ')[0]} <br/>
              <span className="data.color">{data.title.split(' ').slice(1).join(' ')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-900 dark:text-white/60 font-light mb-10 leading-relaxed">
              {data.tagline}
            </p>
            <div className="flex gap-6">
              <Link href={`#protocols`} className="`${data.bg} ${data.color} px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest border ${data.border}`">
                View Protocols
              </Link>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:w-1/2 relative bg-white/5 p-1 rounded-[3rem] border border-black/10 dark:border-white/10"
          >
            <div className="bg-white dark:bg-brand-black rounded-[2.8rem] p-12 overflow-hidden relative">
              <Icon className="`w-32 h-32 ${data.color} opacity-20 absolute -top-10 -right-10`" />
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6">Domain Summary</h3>
              <p className="text-slate-900 dark:text-white/60 leading-relaxed mb-10 font-light">
                {data.description}
              </p>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-6 bg-white/5 rounded-2xl border border-black/10 dark:border-white/10 text-center">
                    <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">94%</div>
                    <div className="text-[10px] uppercase font-bold text-slate-900 dark:text-white/40">Success Rate</div>
                 </div>
                 <div className="p-6 bg-white/5 rounded-2xl border border-black/10 dark:border-white/10 text-center">
                    <div className="text-3xl font-black text-slate-900 dark:text-white mb-1">12+</div>
                    <div className="text-[10px] uppercase font-bold text-slate-900 dark:text-white/40">Papers Published</div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* GUMMY PRODUCT PLUG */}
        <section className="mb-32">
          <div className="bg-gradient-to-br from-brand-dark to-brand-black p-12 lg:p-20 rounded-[4rem] border border-black/10 dark:border-white/10 shadow-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80')] bg-cover opacity-5 pointer-events-none mix-blend-screen"></div>
             <div className="relative z-10 flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/3 text-center lg:text-left">
                   <div className="`w-24 h-24 ${data.bg} rounded-3xl flex items-center justify-center mx-auto lg:mx-0 mb-8 border ${data.border}`">
                      <Beaker className="`w-12 h-12 ${data.color}`" />
                   </div>
                   <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4">The {data.gummy.name}</h2>
                   <div className="text-2xl font-black text-brand-neon mb-6">{data.gummy.price}</div>
                   <button className="w-full bg-white text-brand-black font-black uppercase tracking-widest py-4 rounded-xl hover:bg-brand-neon transition-all shadow-glow text-[10px]">
                      Coming Soon - Join Waitlist
                   </button>
                </div>
                <div className="lg:w-2/3 grid md:grid-cols-2 gap-8">
                   <div className="bg-white/5 p-8 rounded-3xl border border-black/10 dark:border-white/10">
                      <h4 className="text-xs uppercase font-black tracking-widest text-slate-900 dark:text-white/40 mb-6 flex items-center gap-2">
                        <CheckCircle2 className="`w-4 h-4 ${data.color}`" /> Clinical Composition
                      </h4>
                      <ul className="space-y-4">
                        {data.gummy.ingredients.map((ing, i) => (
                           <li key={i} className="text-lg font-bold text-slate-900 dark:text-white flex justify-between">
                             {ing} <ArrowRight className="w-4 h-4 opacity-30"/>
                           </li>
                        ))}
                      </ul>
                   </div>
                   <div className="bg-white/5 p-8 rounded-3xl border border-black/10 dark:border-white/10">
                      <h4 className="text-xs uppercase font-black tracking-widest text-slate-900 dark:text-white/40 mb-6 flex items-center gap-2">
                        <Shield className="`w-4 h-4 ${data.color}`" /> Biocompatibility
                      </h4>
                      <p className="text-sm font-light text-slate-900 dark:text-white/60">
                        Formulated with high-bioavailability chelates and patent-pending delivery matrices to ensure maximum biological uptake.
                      </p>
                   </div>
                </div>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
}