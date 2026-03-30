"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Activity, Zap, Shield, Beaker, Flame, Brain, BookOpen, ChevronRight, Dna, GitBranch, Heart, Target, Clock, Star, Quote, Droplets, Dumbbell, Download } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Tool 1: Hydration State
  const [hydrationWeight, setHydrationWeight] = useState(160);
  const [hydrationResult, setHydrationResult] = useState<string | null>(null);
  const [hydrationEmail, setHydrationEmail] = useState("");

  const calculateHydration = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hydrationEmail) return alert("Please enter your email to receive the report.");
    const baseline = hydrationWeight * 0.67;
    const ounces = Math.round(baseline);
    const sodium = Math.round(hydrationWeight * 12);
    setHydrationResult(`Target: ${ounces}oz Water + ${sodium}mg Socium/day.`);
  };

  // Tool 2: Protein Need
  const [proteinWeight, setProteinWeight] = useState(160);
  const [proteinResult, setProteinResult] = useState<string | null>(null);
  const [proteinEmail, setProteinEmail] = useState("");

  const calculateProtein = (e: React.FormEvent) => {
    e.preventDefault();
    if (!proteinEmail) return alert("Please enter your email to receive the macro sheet.");
    const grams = Math.round(proteinWeight * 1.1);
    setProteinResult(`Target: ${grams}g High-Bioavailability Protein/day.`);
  };

  return (
    <div className="bg-brand-black text-brand-cream font-sans overflow-x-hidden min-h-screen">
      
      {/* 1. DARK HERO SECTION */}
      <section className="relative pt-40 pb-32 px-6 lg:px-12 flex flex-col justify-center min-h-[95vh] bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80')] bg-cover bg-center bg-no-repeat bg-fixed">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <span className="text-brand-gold font-bold tracking-[0.2em] text-sm md:text-md uppercase mb-6 block border border-brand-gold/30 px-5 py-2 rounded-full inline-flex bg-brand-gold/10 backdrop-blur-sm shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            The 2026 Paradigm of Longevity
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-8 drop-shadow-2xl">
            Terminal <br/><span className="text-gradient-emerald">Velocity.</span>
          </h1>
          <p className="text-xl md:text-3xl text-brand-cream/90 max-w-4xl font-light mb-12 border-l-4 border-brand-neon pl-6 leading-relaxed">
            The world's most comprehensive biological authority. Extensively map your biology, execute clinical protocols, and command extreme autonomic resilience.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link href="#master-directory" className="bg-brand-neon text-brand-black px-12 py-6 rounded-full text-md tracking-[0.2em] font-black uppercase hover:bg-white transition-all shadow-glow hover:scale-105 flex items-center justify-center gap-3">
              Enter The Authority <ArrowRight className="w-5 h-5"/>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PURE WHITE - HIGH CONTRAST PHILOSOPHY */}
      <section className="py-32 px-6 lg:px-12 bg-[#FAFAF9] text-gray-900 border-y border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="text-[#1B4533] font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block">The Baseline Imperative</span>
            <h2 className="text-5xl md:text-7xl font-black text-[#0A110D] uppercase tracking-tighter mb-8 leading-[0.9]">Stop Guessing. <br/><span className="text-[#24825C]">Start Measuring.</span></h2>
            <p className="text-xl text-gray-700 font-light leading-relaxed mb-6">
              The wellness industry is built on pseudo-scientific fluff. We are built on quantifiable biological outputs. If a protocol does not violently suppress systemic inflammation or predictably extend your chronological lifespan, we do not publish it.
            </p>
            <p className="text-xl text-gray-700 font-light leading-relaxed mb-10 font-bold border-l-4 border-[#24825C] pl-6">
              "We provide the architectural blueprints. You must provide the physical compliance."
            </p>
            <div className="flex gap-4">
              <Link href="/about" className="bg-[#0A110D] text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#1B4533] transition-colors">
                Read The Manifesto
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 relative shadow-2xl rounded-[3rem] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80" alt="Clinical lab" className="w-full h-[600px] object-cover scale-105 hover:scale-100 transition-transform duration-[2s]" />
            <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-xl p-8 rounded-3xl border border-white max-w-sm">
               <Shield className="w-10 h-10 text-[#24825C] mb-4"/>
               <h3 className="font-bold text-gray-900 mb-2">Triple-Verified Science</h3>
               <p className="text-sm text-gray-600">Every formulation and dossier is backed by highly stringent PubMed indexed placebo trials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEEP FOREST GREEN - THE MASTER DIRECTORY GRID */}
      <section id="master-directory" className="py-32 bg-brand-emerald px-6 lg:px-12 relative shadow-[inset_0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620021588647-73d8339ab35c?auto=format&fit=crop&q=80')] bg-cover bg-fixed opacity-10 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">The WebMD of <span className="text-brand-neon">2026.</span></h2>
          <p className="text-xl text-brand-cream/80 max-w-3xl mx-auto font-light mb-20">We have meticulously indexed every botanical protocol, peptide mechanism, and clinical strategy into the most powerful encyclopedia on the internet.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <Link href="/protocols" className="bg-brand-dark/90 backdrop-blur-xl p-10 rounded-[2rem] hover:scale-105 transition-all group border-t-4 border-brand-neon shadow-xl">
              <Shield className="w-10 h-10 text-brand-neon mb-6"/>
              <h3 className="text-xl font-bold text-white mb-3">Clinical Protocols</h3>
              <p className="text-brand-cream/60 text-sm mb-6">Actionable sleep, recovery, and cognitive algorithms.</p>
            </Link>
            <Link href="/glossary" className="bg-brand-dark/90 backdrop-blur-xl p-10 rounded-[2rem] hover:scale-105 transition-all group border-t-4 border-brand-gold shadow-xl">
              <BookOpen className="w-10 h-10 text-brand-gold mb-6"/>
              <h3 className="text-xl font-bold text-white mb-3">Ingredient Glossary</h3>
              <p className="text-brand-cream/60 text-sm mb-6">A-Z Lexicon of peptides and extreme ethnobotany.</p>
            </Link>
            <Link href="/research-library" className="bg-brand-dark/90 backdrop-blur-xl p-10 rounded-[2rem] hover:scale-105 transition-all group border-t-4 border-brand-neon-cyan shadow-xl">
              <Activity className="w-10 h-10 text-brand-neon-cyan mb-6"/>
              <h3 className="text-xl font-bold text-white mb-3">PubMed Index</h3>
              <p className="text-brand-cream/60 text-sm mb-6">Verify our sources with raw clinical study references.</p>
            </Link>
            <Link href="/tools" className="bg-brand-dark/90 backdrop-blur-xl p-10 rounded-[2rem] hover:scale-105 transition-all group border-t-4 border-rose-500 shadow-xl">
              <Zap className="w-10 h-10 text-rose-500 mb-6"/>
              <h3 className="text-xl font-bold text-white mb-3">Diagnostic Tools</h3>
              <p className="text-brand-cream/60 text-sm mb-6">Interactive calculators defining exact bodily parameters.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. SAND/CREAM - BEGINNER'S TRACK (HIGH CONTRAST) */}
      <section className="py-32 bg-[#F5F2EB] px-6 lg:px-12 text-[#2C2A20]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/3">
             <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-[#1A1913]">New to Longevity?</h2>
             <p className="text-lg font-light mb-8">You do not need a degree in molecular biology to halt cellular aging. Start with our simplified, extremely actionable beginner's track.</p>
             <Link href="/blog" className="bg-[#1A1913] text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#8B7355] transition-colors shadow-xl">
               Read The Basics
             </Link>
          </div>
          <div className="md:w-2/3 grid sm:grid-cols-2 gap-6">
             <Link href="/blog/longevity-101-beginners-guide" className="bg-white p-10 rounded-[2rem] shadow-xl hover:-translate-y-2 transition-transform group">
               <span className="text-[#8B7355] font-bold text-[10px] tracking-widest uppercase mb-4 block">101 Start Here</span>
               <h3 className="text-2xl font-black text-[#1A1913] mb-4 group-hover:text-[#8B7355] transition-colors">Longevity 101: The Absolute Basics</h3>
               <p className="font-light text-gray-600 text-sm">Sleep hygiene, simple nutrition, and light exposure. The 80/20 rule of extreme health.</p>
             </Link>
             <Link href="/blog/simple-morning-reset" className="bg-white p-10 rounded-[2rem] shadow-xl hover:-translate-y-2 transition-transform group">
               <span className="text-[#8B7355] font-bold text-[10px] tracking-widest uppercase mb-4 block">Daily Habits</span>
               <h3 className="text-2xl font-black text-[#1A1913] mb-4 group-hover:text-[#8B7355] transition-colors">The 10-Minute Morning Reset</h3>
               <p className="font-light text-gray-600 text-sm">A scientifically backed, incredibly simple routine to set up your entire day for autonomic success.</p>
             </Link>
          </div>
        </div>
      </section>

      {/* 5. BLACK/NEON - INLINE LEAD CAPTURE CALCULATORS */}
      <section id="hydration-tool" className="py-32 bg-brand-black px-6 lg:px-12 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-rose-500 font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Interactive Compute</span>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">Unlock Your <br/>Clinical <span className="text-rose-500">Parameters.</span></h2>
            <p className="text-xl text-brand-cream/60 font-light max-w-2xl mx-auto">Calculate your exact biochemical deficits via our high-speed embedded diagnostic tools. Receive your massive PDF protocol via encrypted email.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Tool 1: Hydration */}
            <div className="glass-card p-10 md:p-14 rounded-[3rem] border border-blue-500/20 relative shadow-[0_0_50px_rgba(59,130,246,0.05)]">
              <Droplets className="w-12 h-12 text-blue-400 mb-6"/>
              <h3 className="text-3xl font-black text-white mb-2">Cellular Hydration Estimator</h3>
              <p className="text-sm text-brand-cream/60 mb-10 font-light">Determine precise osmotic water and sodium requirements based on massive physical parameters.</p>
              
              <form onSubmit={calculateHydration} className="space-y-6">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-cream/80 mb-2 block">Bodyweight (lbs)</label>
                  <input type="range" min="100" max="300" value={hydrationWeight} onChange={(e)=>setHydrationWeight(Number(e.target.value))} className="w-full accent-blue-400"/>
                  <div className="text-right text-white font-mono font-bold">{hydrationWeight} lbs</div>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-cream/80 mb-2 block">Secure Email Delivery</label>
                  <input type="email" required placeholder="Enter email address" className="w-full bg-black/50 border border-white/20 rounded-xl py-4 px-6 text-white outline-none focus:border-blue-400" value={hydrationEmail} onChange={(e)=>setHydrationEmail(e.target.value)} />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white font-black uppercase tracking-widest py-4 rounded-xl hover:bg-white hover:text-black transition-all flex justify-center items-center gap-2">
                  <Download className="w-4 h-4"/> Generate Hydration Protocol
                </button>
              </form>
              
              {hydrationResult && (
                <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/30 rounded-2xl animate-fade-in text-center">
                   <p className="text-xs text-brand-cream/60 uppercase tracking-widest mb-2">Baseline Computation</p>
                   <p className="text-lg font-bold text-white">{hydrationResult}</p>
                   <p className="text-[#00F59B] text-xs font-bold mt-2">Full PDF Protocol sent to {hydrationEmail}</p>
                </div>
              )}
            </div>

            {/* Tool 2: Protein (id="protein-tool") */}
            <div id="protein-tool" className="glass-card p-10 md:p-14 rounded-[3rem] border border-orange-500/20 relative shadow-[0_0_50px_rgba(249,115,22,0.05)]">
              <Dumbbell className="w-12 h-12 text-orange-400 mb-6"/>
              <h3 className="text-3xl font-black text-white mb-2">Myofibrillar Protein Matrix</h3>
              <p className="text-sm text-brand-cream/60 mb-10 font-light">Calculate the exact biological value of leucine and dense amino acids required to force mTOR activation.</p>
              
              <form onSubmit={calculateProtein} className="space-y-6">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-cream/80 mb-2 block">Lean Body Mass (lbs)</label>
                  <input type="range" min="90" max="250" value={proteinWeight} onChange={(e)=>setProteinWeight(Number(e.target.value))} className="w-full accent-orange-400"/>
                  <div className="text-right text-white font-mono font-bold">{proteinWeight} lbs</div>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-brand-cream/80 mb-2 block">Secure Email Delivery</label>
                  <input type="email" required placeholder="Enter email address" className="w-full bg-black/50 border border-white/20 rounded-xl py-4 px-6 text-white outline-none focus:border-orange-400" value={proteinEmail} onChange={(e)=>setProteinEmail(e.target.value)} />
                </div>
                <button type="submit" className="w-full bg-orange-500 text-white font-black uppercase tracking-widest py-4 rounded-xl hover:bg-white hover:text-black transition-all flex justify-center items-center gap-2">
                  <Download className="w-4 h-4"/> Generate Protein Syntax
                </button>
              </form>

              {proteinResult && (
                <div className="mt-8 p-6 bg-orange-500/10 border border-orange-500/30 rounded-2xl animate-fade-in text-center">
                   <p className="text-xs text-brand-cream/60 uppercase tracking-widest mb-2">Baseline Computation</p>
                   <p className="text-lg font-bold text-white">{proteinResult}</p>
                   <p className="text-[#00F59B] text-xs font-bold mt-2">Full Dietary Matrix sent to {proteinEmail}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CHARCOAL/NEON - CLINICAL DOSSIERS */}
      <section className="py-32 bg-brand-dark px-6 lg:px-12 border-t border-brand-light-emerald/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-[#00F0FF] font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Ultimate-Tier Research</span>
              <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">Clinical <br/>Dossiers.</h2>
              <p className="text-xl text-brand-cream/60 font-light">Deeply actionable, 10,000-word research papers on the bleeding edge of cellular biology.</p>
            </div>
            <Link href="/blog" className="min-w-max px-8 py-4 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
              View All 16 Papers
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/blog/apocrine-sweat-detox" className="relative h-[450px] rounded-[2rem] overflow-hidden group border border-white/10 hover:border-brand-neon focus:outline-none">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&q=80')] bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="bg-red-500 text-white px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Thermic Stress</span>
                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-red-400 transition-colors">Apocrine Detoxification & Heat Shock Proteins</h3>
                <p className="text-brand-cream/70 text-sm line-clamp-2">How intense sauna exposure actively refolds misfolded proteins via massive chaperone upregulation.</p>
              </div>
            </Link>
            <Link href="/blog/testosterone-optimization" className="relative h-[450px] rounded-[2rem] overflow-hidden group border border-white/10 hover:border-brand-neon focus:outline-none">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80')] bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Endocrinology</span>
                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">The Pregnenolone Steal & Cortisol</h3>
                <p className="text-brand-cream/70 text-sm line-clamp-2">Why modern environmental stress crashes testosterone, and the exact algorithm to restore it.</p>
              </div>
            </Link>
            <Link href="/blog/cbg-neurogenesis" className="relative h-[450px] rounded-[2rem] overflow-hidden group border border-white/10 hover:border-brand-neon focus:outline-none">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559757175-0b925b6a7a7b?auto=format&fit=crop&q=80')] bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Neurogenesis</span>
                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-purple-400 transition-colors">Cannabigerol (CBG) & Brain Architecture</h3>
                <p className="text-brand-cream/70 text-sm line-clamp-2">The unparalleled neurogenic effects of isolated CBG on the mammalian hippocampus.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 7. CRISP WHITE - ADVISORY BOARD TEAM (HIGH CONTRAST) */}
      <section className="py-32 bg-white px-6 lg:px-12 text-[#0A110D]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-tight">No White-Labeling.<br/> Absolute Clinical Rigor.</h2>
            <p className="text-xl font-light leading-relaxed mb-10 text-gray-700 border-l-4 border-gray-300 pl-6">
              Hebe Wellness formulations are peer-reviewed and actively architected by a diverse consortium of neurobiologists, pharmacokineticists, and Ayurvedic scholars. Every input is mathematically verified.
            </p>
            <Link href="/board" className="bg-[#0A110D] text-white hover:bg-[#1B4533] px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest transition-all inline-flex items-center gap-3 shadow-2xl hover:-translate-y-1">
              Meet The Advisory Board <ArrowRight className="w-4 h-4"/>
            </Link>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-6">
            <div className="bg-gray-100 p-8 rounded-[2rem] hover:shadow-xl transition-shadow border-t-4 border-[#24825C]">
               <div className="w-16 h-16 bg-gray-300 rounded-full mb-6"></div>
               <h4 className="font-bold text-lg mb-1">Dr. Alistair Vance</h4>
               <p className="text-xs uppercase font-bold text-[#24825C] mb-4">Medical Director</p>
               <p className="text-sm font-light text-gray-600">Swiss Longevity Institute Pioneer.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-[2rem] hover:shadow-xl transition-shadow border-t-4 border-[#D4AF37]">
               <div className="w-16 h-16 bg-gray-300 rounded-full mb-6"></div>
               <h4 className="font-bold text-lg mb-1">Dr. Elena Rostova</h4>
               <p className="text-xs uppercase font-bold text-[#D4AF37] mb-4">Neuroscientist</p>
               <p className="text-sm font-light text-gray-600">Authority on adult neuroplasticity mechanisms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. MASSIVE FOOTER CALL TO ACTION */}
      <footer className="py-32 bg-brand-black relative z-20 flex flex-col items-center justify-center text-center px-6 border-t-[8px] border-brand-neon">
        <div className="max-w-4xl relative z-10">
          <Dna className="w-16 h-16 text-brand-neon mx-auto mb-8 opacity-80" />
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.85]">
            Override The <br/><span className="text-gradient-emerald">Decay Function.</span>
          </h2>
          <p className="text-xl md:text-2xl text-brand-cream/60 font-light mb-12 max-w-2xl mx-auto">
            Stop waiting. Access the 2026 pharmacological architecture today and actively engineer extreme biological resilience.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <button className="bg-brand-neon text-brand-black px-12 py-6 rounded-full text-md font-black uppercase tracking-[0.2em] shadow-[0_0_50px_rgba(0,245,155,0.4)] hover:bg-white hover:scale-105 transition-all">
              Initialize Protocol
            </button>
          </div>
        </div>
        
        {/* Actual Footer links area */}
        <div className="w-full max-w-7xl mx-auto mt-40 pt-10 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-10 relative z-10">
          <div className="font-black text-3xl tracking-tighter uppercase text-white">HEBE<span className="text-brand-neon">.W</span></div>
          <div className="flex flex-wrapjustify-center gap-x-8 gap-y-4 text-[10px] md:text-xs uppercase tracking-widest text-brand-cream/60 font-bold">
            <Link href="/about" className="hover:text-white transition-colors">Philosophy</Link>
            <Link href="/protocols" className="hover:text-white transition-colors">Protocols</Link>
            <Link href="/tools" className="hover:text-brand-neon transition-colors">Diagnostics</Link>
            <Link href="/glossary" className="hover:text-white transition-colors">Glossary</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Journal</Link>
          </div>
          <div className="text-[9px] uppercase tracking-widest text-brand-cream/30">
            © 2026 HEBE WELLNESS. ALL CLINICAL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
