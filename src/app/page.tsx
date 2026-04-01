"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Activity, Zap, Shield, Beaker, Flame, Brain, BookOpen, ChevronRight, Dna, GitBranch, Heart, Target, Clock, Star, Quote, Droplets, Dumbbell, Download, DollarSign, Microscope, LineChart, Users, Mail } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Tool 1: Hydration State
  const [hydrationWeight, setHydrationWeight] = useState(160);
  const [hydrationResult, setHydrationResult] = useState<string | null>(null);

  const calculateHydration = (e: React.FormEvent) => {
    e.preventDefault();
    const baseline = hydrationWeight * 0.67;
    const ounces = Math.round(baseline);
    const sodium = Math.round(hydrationWeight * 12);
    setHydrationResult(`Target: ${ounces}oz Water + ${sodium}mg Sodium/day.`);
  };

  // Tool 2: Protein Need
  const [proteinWeight, setProteinWeight] = useState(160);
  const [proteinResult, setProteinResult] = useState<string | null>(null);

  const calculateProtein = (e: React.FormEvent) => {
    e.preventDefault();
    const grams = Math.round(proteinWeight * 1.1);
    setProteinResult(`Target: ${grams}g High-Quality Protein/day.`);
  };

  // Tool 3: Protocol Builder State
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const protocols = {
    Sleep: { title: "Deep Sleep Architecture", items: ["Magnesium L-Threonate", "Apigenin", "Theanine"], cta: "Get Full Sleep Protocol" },
    Focus: { title: "Executive Cognitive Stack", items: ["Alpha-GPC", "Tyrosine", "Lion's Mane"], cta: "Get Full Focus Protocol" },
    Longevity: { title: "Cellular Renewal Matrix", items: ["NMN", "Resveratrol", "Spermidine"], cta: "Get Full Longevity Protocol" }
  };

  return (
    <div className="bg-brand-black text-brand-cream font-sans overflow-x-hidden min-h-screen">
      
      {/* 1. DARK HERO SECTION */}
      <section className="relative pt-40 pb-32 px-6 lg:px-12 flex flex-col justify-center min-h-[95vh] bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80')] bg-cover bg-center bg-no-repeat bg-fixed">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/90 to-brand-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <span className="text-brand-gold font-bold tracking-[0.2em] text-sm md:text-md uppercase mb-6 block border border-brand-gold/30 px-5 py-2 rounded-full inline-flex bg-brand-gold/10 backdrop-blur-sm shadow-[0_0_20px_rgba(212,175,55,0.2)]">
            Your Path to Optimal Health
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter uppercase leading-[0.85] mb-8 drop-shadow-2xl">
            Discover <br/><span className="text-gradient-emerald">Vitality.</span>
          </h1>
          <p className="text-xl md:text-3xl text-brand-cream/90 max-w-4xl font-light mb-12 border-l-4 border-brand-neon pl-6 leading-relaxed">
            A comprehensive, science-backed health and wellness platform. Understand your biology, follow clinical protocols, and build lasting resilience.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <Link href="#master-directory" className="bg-brand-neon text-brand-black px-12 py-6 rounded-full text-md tracking-[0.2em] font-black uppercase hover:bg-white transition-all shadow-glow hover:scale-105 flex items-center justify-center gap-3">
              Enter The Authority <ArrowRight className="w-5 h-5"/>
            </Link>
          </div>

          <div className="flex items-center gap-10 border-t border-white/10 pt-10 opacity-60 overflow-x-auto no-scrollbar whitespace-nowrap">
            <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase">
              <Microscope className="w-5 h-5 text-brand-neon"/> 15,240+ Biomarkers Indexed
            </div>
            <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase border-x border-white/10 px-10">
              <LineChart className="w-5 h-5 text-brand-neon-cyan"/> 842+ Clinical Studies Linked
            </div>
            <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase">
              <Users className="w-5 h-5 text-brand-gold"/> 12k+ Active Protocols
            </div>
          </div>
        </div>
      </section>

      {/* 2. PURE WHITE - HIGH CONTRAST PHILOSOPHY */}
      <section className="py-32 px-6 lg:px-12 bg-[#FAFAF9] text-gray-900 border-y border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="text-[#1B4533] font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block">The Fundamentals</span>
            <h2 className="text-5xl md:text-7xl font-black text-[#0A110D] uppercase tracking-tighter mb-8 leading-[0.9]">Data-Driven. <br/><span className="text-[#24825C]">Health Insights.</span></h2>
            <p className="text-xl text-gray-700 font-light leading-relaxed mb-6">
              We believe in quantifiable health outcomes. Our platform focuses on protocols that naturally reduce systemic inflammation and support a longer, healthier life based on published clinical data.
            </p>
            <p className="text-xl text-gray-700 font-light leading-relaxed mb-10 font-bold border-l-4 border-[#24825C] pl-6">
              "We provide the evidence-based blueprints. You provide the commitment."
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
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">Explore <span className="text-brand-neon">Verticals.</span></h2>
          <p className="text-xl text-brand-cream/80 max-w-3xl mx-auto font-light mb-20">Direct access to clinical hubs specialized in your primary biological objectives.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <Link href="/categories/sleep" className="bg-brand-dark/90 backdrop-blur-xl p-10 rounded-[2rem] hover:scale-105 transition-all group border-t-4 border-blue-400 shadow-xl">
              <Moon className="w-10 h-10 text-blue-400 mb-6"/>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tighter">Sleep</h3>
              <p className="text-brand-cream/60 text-sm mb-6">Temperature, light, and chemical hygiene.</p>
            </Link>
            <Link href="/categories/stress" className="bg-brand-dark/90 backdrop-blur-xl p-10 rounded-[2rem] hover:scale-105 transition-all group border-t-4 border-purple-400 shadow-xl">
              <Wind className="w-10 h-10 text-purple-400 mb-6"/>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tighter">Stress</h3>
              <p className="text-brand-cream/60 text-sm mb-6">Vagal tone and cortisol modulation.</p>
            </Link>
            <Link href="/categories/hair" className="bg-brand-dark/90 backdrop-blur-xl p-10 rounded-[2rem] hover:scale-105 transition-all group border-t-4 border-brand-gold shadow-xl">
              <Zap className="w-10 h-10 text-brand-gold mb-6"/>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tighter">Hair</h3>
              <p className="text-brand-cream/60 text-sm mb-6">Follicular matrix revitalization.</p>
            </Link>
            <Link href="/categories/skin" className="bg-brand-dark/90 backdrop-blur-xl p-10 rounded-[2rem] hover:scale-105 transition-all group border-t-4 border-brand-neon shadow-xl">
              <Sparkles className="w-10 h-10 text-brand-neon mb-6"/>
              <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tighter">Skin</h3>
              <p className="text-brand-cream/60 text-sm mb-6">Dermal integrity and collagen synthesis.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* [NEW] 3.5 PROTOCOL BLUEPRINT BUILDER */}
      <section className="py-32 bg-brand-black px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="text-brand-neon font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Interactive Blueprint</span>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.9]">Build Your <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-neon-cyan">Custom Stack.</span></h2>
            <p className="text-xl text-brand-cream/60 font-light leading-relaxed mb-10">
              Select your primary biological outcome to generate an instant, evidence-backed foundational protocol.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-10">
              {Object.keys(protocols).map((p) => (
                <button 
                  key={p} 
                  onClick={() => setSelectedGoal(p)}
                  className={`p-4 rounded-2xl border transition-all text-xs font-black uppercase tracking-widest ${selectedGoal === p ? 'bg-brand-neon text-brand-black border-brand-neon' : 'bg-white/5 text-white border-white/10 hover:border-brand-neon/50'}`}
                >
                  {p}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              {selectedGoal ? (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-brand-neon/10 border border-brand-neon/20 p-8 rounded-3xl"
                >
                  <h3 className="text-2xl font-black text-brand-neon mb-4 inline-flex items-center gap-3">
                    <Beaker className="w-6 h-6"/> {protocols[selectedGoal as keyof typeof protocols].title}
                  </h3>
                  <ul className="space-y-3 mb-8">
                    {protocols[selectedGoal as keyof typeof protocols].items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-brand-cream/80 font-bold">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-neon"></div> {item}
                      </li>
                    ))}
                  </ul>
                  <Link href="/products/gummies" className="w-full bg-brand-neon text-brand-black font-black uppercase tracking-widest py-4 rounded-xl hover:bg-white transition-all shadow-glow text-center block">
                    Shop Clinical Gummies
                  </Link>
                </motion.div>
              ) : (
                <div className="bg-white/5 border border-white/10 p-12 rounded-3xl text-center text-brand-cream/30 border-dashed">
                  Select a goal to view protocol
                </div>
              )}
            </AnimatePresence>
          </div>
          <div className="lg:w-1/2 relative bg-gradient-to-br from-brand-emerald/20 to-brand-neon-cyan/10 p-2 rounded-[3.5rem] border border-white/5">
            <div className="bg-brand-black rounded-[3rem] p-10 overflow-hidden relative">
               {/* Lead capture 1 */}
               <div className="text-center">
                 <Mail className="w-12 h-12 text-brand-neon mx-auto mb-6"/>
                 <h3 className="text-2xl font-black text-white mb-2">Join the Research Consortium</h3>
                 <p className="text-sm text-brand-cream/50 mb-8 font-light">Get absolute protocol updates and latest study-cards delivered to your lab-notebook every Tuesday.</p>
                 <form className="space-y-4">
                   <input type="email" placeholder="Researcher Email Address" className="w-full bg-black/50 border border-white/10 rounded-xl py-4 px-6 text-white outline-none focus:border-brand-neon" />
                   <button type="button" className="w-full bg-white text-brand-black font-black uppercase tracking-widest py-4 rounded-xl hover:bg-brand-neon transition-all">Enable Lab Sync</button>
                 </form>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SAND/CREAM - COMPREHENSIVE KNOWLEDGE PLUS (EXPANDED BEGINNER TRACK) */}
      <section className="py-32 bg-[#F5F2EB] px-6 lg:px-12 text-[#2C2A20]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="md:w-1/2">
              <span className="text-[#8B7355] font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Comprehensive Knowledge Plus</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-[#1A1913]">The <br/>Foundation.</h2>
              <p className="text-lg font-light">Before you deploy advanced peptides or manipulate your epigenetic aging clock, secure the absolute basics. These 5 simplistic guides provide 80% of the physiological results.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
             <Link href="/blog/longevity-101-beginners-guide" className="bg-white p-10 rounded-[2rem] shadow-xl hover:-translate-y-2 transition-transform group border-t-4 border-[#1B4533]">
                <h3 className="text-2xl font-black text-[#1A1913] mb-4 group-hover:text-[#8B7355] transition-colors">Longevity 101: Absolute Basics</h3>
                <p className="font-light text-gray-600 text-sm">Sleep hygiene, simple nutrition, and light exposure. The 80/20 rule.</p>
             </Link>
             <Link href="/blog/simple-morning-reset" className="bg-white p-10 rounded-[2rem] shadow-xl hover:-translate-y-2 transition-transform group border-t-4 border-[#1B4533]">
                <h3 className="text-2xl font-black text-[#1A1913] mb-4 group-hover:text-[#8B7355] transition-colors">10-Minute Morning Reset</h3>
                <p className="font-light text-gray-600 text-sm">A scientifically backed, incredibly simple routine to set up your day.</p>
             </Link>
             <Link href="/blog/intermittent-fasting-101" className="bg-white p-10 rounded-[2rem] shadow-xl hover:-translate-y-2 transition-transform group border-t-4 border-[#1B4533]">
                <h3 className="text-2xl font-black text-[#1A1913] mb-4 group-hover:text-[#8B7355] transition-colors">Intermittent Fasting 101</h3>
                <p className="font-light text-gray-600 text-sm">The exact 16:8 method to naturally reduce inflammation without starving.</p>
             </Link>
             <Link href="/blog/beginner-supplements" className="bg-white p-10 rounded-[2rem] shadow-xl hover:-translate-y-2 transition-transform group border-t-4 border-[#1B4533] md:col-span-2">
                <h3 className="text-2xl font-black text-[#1A1913] mb-4 group-hover:text-[#8B7355] transition-colors">The 3 Baseline Supplements</h3>
                <p className="font-light text-gray-600 text-sm">Don't waste money. Master Magnesium, Vitamin D3+K2, and Omega-3s.</p>
             </Link>
             <Link href="/blog/sleep-hygiene-basics" className="bg-white p-10 rounded-[2rem] shadow-xl hover:-translate-y-2 transition-transform group border-t-4 border-[#1B4533]">
                <h3 className="text-2xl font-black text-[#1A1913] mb-4 group-hover:text-[#8B7355] transition-colors">Sleep Architecture 101</h3>
                <p className="font-light text-gray-600 text-sm">Why the 65-deg rule and morning light are better than sleeping pills.</p>
             </Link>
          </div>
        </div>
      </section>

      {/* [NEW] 4.5 BIOMARKER INTELLIGENCE SECTION */}
      <section className="py-32 bg-[#FAFAF9] px-6 lg:px-12 border-y border-gray-200 text-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
             <span className="text-[#1B4533] font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Molecular Intelligence</span>
             <h2 className="text-5xl md:text-7xl font-black text-[#0A110D] uppercase tracking-tighter mb-6">Biomarker <br/><span className="text-[#24825C]">Decoded.</span></h2>
             <p className="text-xl text-gray-600 font-light">Your blood tells a story. We help you read it. Understand exactly what your labs are saying about your biological age.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="p-8 rounded-[2.5rem] bg-white shadow-lg border border-gray-100 hover:border-[#24825C]/30 transition-all">
                <span className="px-3 py-1 bg-red-100 text-red-700 text-[10px] font-black uppercase tracking-widest rounded-full mb-6 inline-block">Cardiovascular</span>
                <h3 className="text-2xl font-black text-gray-900 mb-2">ApoB Analysis</h3>
                <p className="text-sm text-gray-600 font-light mb-6">The most accurate marker of atherosclerosis risk. More predictive than standard LDL tests.</p>
                <Link href="/tools" className="text-[#24825C] font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform">Analyze My Score <ArrowRight className="w-4 h-4"/></Link>
             </div>
             <div className="p-8 rounded-[2.5rem] bg-white shadow-lg border border-gray-100 hover:border-[#24825C]/30 transition-all">
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-[10px] font-black uppercase tracking-widest rounded-full mb-6 inline-block">Metabolic</span>
                <h3 className="text-2xl font-black text-gray-900 mb-2">hs-CRP Monitoring</h3>
                <p className="text-sm text-gray-600 font-light mb-6">Highly sensitive C-reactive protein. The primary mirror of systemic low-grade inflammation.</p>
                <Link href="/tools" className="text-[#24825C] font-bold text-xs uppercase tracking-widest flex items-center gap-2 hover:translate-x-2 transition-transform">Analyze My Score <ArrowRight className="w-4 h-4"/></Link>
             </div>
             <div className="p-8 rounded-[2.5rem] bg-[#0A110D] shadow-2xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20"><Dna className="w-20 h-20"/></div>
                <h3 className="text-2xl font-black mb-4">Complete Lab Integration</h3>
                <p className="text-sm font-light text-white/60 mb-8">Upload your existing bloodwork and our engine will algorithmically generate a custom longevity roadmap.</p>
                <form className="space-y-4">
                   <input type="email" placeholder="Email for Lab Invite" className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 text-white text-sm outline-none focus:border-[#24825C]" />
                   <button type="button" className="w-full bg-[#24825C] text-white font-black uppercase tracking-widest py-3 rounded-xl text-xs shadow-glow">Request Alpha Access</button>
                </form>
             </div>
          </div>
        </div>
      </section>

      {/* 5. BLACK/NEON - COMPREHENSIVE KNOWLEDGE PLUS (MASSIVE TOOL INJECTIONS) */}
      <section id="hydration-tool" className="py-32 bg-brand-black px-6 lg:px-12 relative overflow-hidden shadow-[inset_0_20px_50px_rgba(0,0,0,0.5)]">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80')] bg-cover opacity-5 pointer-events-none mix-blend-screen"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#00F59B] font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block bg-[#00F59B]/10 border border-[#00F59B]/20 px-4 py-2 rounded-full inline-block">Comprehensive Knowledge Plus</span>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter mb-6">Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon-cyan to-[#00F59B]">Compute.</span></h2>
            <p className="text-xl text-brand-cream/60 font-light max-w-3xl mx-auto leading-relaxed">Instantly calculate your exact biochemical deficits via our embedded diagnostic suite.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Tool 1: Hydration Lead Capture */}
            <div className="glass-card p-10 md:p-14 rounded-[3rem] border border-blue-500/20 relative shadow-[0_0_50px_rgba(59,130,246,0.05)]">
              <Droplets className="w-12 h-12 text-blue-400 mb-6"/>
              <h3 className="text-3xl font-black text-white mb-2">Daily Hydration Calculator</h3>
              <p className="text-sm text-brand-cream/60 mb-10 font-light">Find out exactly how much water and salt your body needs to feel energized, based simply on your weight.</p>
              
              <form onSubmit={calculateHydration} className="space-y-6">
                <div>
                   <label className="text-xs font-bold uppercase tracking-widest text-brand-cream/80 mb-2 block">Bodyweight (lbs)</label>
                   <input type="range" min="100" max="300" value={hydrationWeight} onChange={(e)=>setHydrationWeight(Number(e.target.value))} className="w-full accent-blue-400"/>
                   <div className="text-right text-white font-mono font-bold">{hydrationWeight} lbs</div>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white font-black uppercase tracking-widest py-4 rounded-xl hover:bg-white hover:text-black transition-all flex justify-center items-center gap-2">
                  <Droplets className="w-5 h-5"/> Compute Hydration Needs
                </button>
              </form>
              
              {hydrationResult && (
                <div className="mt-8 p-6 bg-blue-500/10 border border-blue-500/30 rounded-2xl animate-fade-in text-center">
                   <p className="text-xs text-brand-cream/60 uppercase tracking-widest mb-2">Baseline Computation</p>
                   <p className="text-lg font-bold text-white">{hydrationResult}</p>
                </div>
              )}
            </div>

            {/* Tool 2: Protein Lead Capture */}
            <div id="protein-tool" className="glass-card p-10 md:p-14 rounded-[3rem] border border-orange-500/20 relative shadow-[0_0_50px_rgba(249,115,22,0.05)]">
              <Dumbbell className="w-12 h-12 text-orange-400 mb-6"/>
              <h3 className="text-3xl font-black text-white mb-2">Daily Protein Calculator</h3>
              <p className="text-sm text-brand-cream/60 mb-10 font-light">Find out exactly how much protein you need to eat every day.</p>
              
              <form onSubmit={calculateProtein} className="space-y-6">
                <div>
                   <label className="text-xs font-bold uppercase tracking-widest text-brand-cream/80 mb-2 block">Lean Mass (lbs)</label>
                   <input type="range" min="90" max="250" value={proteinWeight} onChange={(e)=>setProteinWeight(Number(e.target.value))} className="w-full accent-orange-400"/>
                   <div className="text-right text-white font-mono font-bold">{proteinWeight} lbs</div>
                </div>
                <button type="submit" className="w-full bg-orange-500 text-white font-black uppercase tracking-widest py-4 rounded-xl hover:bg-white hover:text-black transition-all flex justify-center items-center gap-2">
                  <Dumbbell className="w-5 h-5"/> Calculate Protein Goal
                </button>
              </form>

              {proteinResult && (
                <div className="mt-8 p-6 bg-orange-500/10 border border-orange-500/30 rounded-2xl animate-fade-in text-center">
                   <p className="text-xs text-brand-cream/60 uppercase tracking-widest mb-2">Baseline Computation</p>
                   <p className="text-lg font-bold text-white">{proteinResult}</p>
                </div>
              )}
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
             {/* Tool 3 Preview: Circadian */}
             <div className="bg-black/80 border border-yellow-400/20 p-10 rounded-[2.5rem] flex flex-col items-center text-center shadow-xl hover:border-yellow-400/50 hover:-translate-y-2 transition-all group">
               <div className="p-5 bg-yellow-400/10 rounded-full mb-6 group-hover:scale-110 transition-transform">
                 <Clock className="w-10 h-10 text-yellow-400"/>
               </div>
               <h3 className="text-2xl font-black text-white mb-4 leading-tight">Daily Energy Schedule</h3>
               <p className="text-sm font-light text-brand-cream/60 mb-8 h-20">Tell us when you want to wake up, and we will build you the perfect daily schedule.</p>
               <Link href="/tools/circadian" className="mt-auto w-full bg-yellow-400/10 border border-yellow-400/30 text-yellow-400 font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-yellow-400 hover:text-black transition-colors flex justify-center items-center gap-2">
                 Launch App <ArrowRight className="w-4 h-4"/>
               </Link>
             </div>

             {/* Tool 4 Preview: Biological Age */}
             <div className="bg-black/80 border border-brand-neon-cyan/20 p-10 rounded-[2.5rem] flex flex-col items-center text-center shadow-xl hover:border-brand-neon-cyan/50 hover:-translate-y-2 transition-all group">
               <div className="p-5 bg-brand-neon-cyan/10 rounded-full mb-6 group-hover:scale-110 transition-transform">
                 <Dna className="w-10 h-10 text-brand-neon-cyan"/>
               </div>
               <h3 className="text-2xl font-black text-white mb-4 leading-tight">True Biological Age Quiz</h3>
               <p className="text-sm font-light text-brand-cream/60 mb-8 h-20">Take this simple quiz to find out if your body is aging faster or slower than your actual calendar age.</p>
               <Link href="/tools/biological-age" className="mt-auto w-full bg-brand-neon-cyan/10 border border-brand-neon-cyan/30 text-brand-neon-cyan font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-brand-neon-cyan hover:text-black transition-colors flex justify-center items-center gap-2">
                 Take Quiz <ArrowRight className="w-4 h-4"/>
               </Link>
             </div>

             {/* Tool 5 Preview: Supplement ROI */}
             <div className="bg-black/80 border border-[#00F59B]/20 p-10 rounded-[2.5rem] flex flex-col items-center text-center shadow-xl hover:border-[#00F59B]/50 hover:-translate-y-2 transition-all group">
               <div className="p-5 bg-[#00F59B]/10 rounded-full mb-6 group-hover:scale-110 transition-transform">
                 <DollarSign className="w-10 h-10 text-[#00F59B]"/>
               </div>
               <h3 className="text-2xl font-black text-white mb-4 leading-tight">Supplement Budget Calculator</h3>
               <p className="text-sm font-light text-brand-cream/60 mb-8 h-20">Stop wasting money on useless vitamins. Type in your monthly budget.</p>
               <Link href="/tools/supplement-roi" className="mt-auto w-full bg-[#00F59B]/10 border border-[#00F59B]/30 text-[#00F59B] font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-[#00F59B] hover:text-black transition-colors flex justify-center items-center gap-2">
                 Analyze Cost <ArrowRight className="w-4 h-4"/>
               </Link>
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
                <p className="text-brand-cream/70 text-sm line-clamp-2">How intense sauna exposure actively refolds misfolded proteins.</p>
              </div>
            </Link>
            <Link href="/blog/testosterone-optimization" className="relative h-[450px] rounded-[2rem] overflow-hidden group border border-white/10 hover:border-brand-neon focus:outline-none">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80')] bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Endocrinology</span>
                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">The Pregnenolone Steal & Cortisol</h3>
                <p className="text-brand-cream/70 text-sm line-clamp-2">Why modern environmental stress crashes testosterone.</p>
              </div>
            </Link>
            <Link href="/blog/cbg-neurogenesis" className="relative h-[450px] rounded-[2rem] overflow-hidden group border border-white/10 hover:border-brand-neon focus:outline-none">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559757175-0b925b6a7a7b?auto=format&fit=crop&q=80')] bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest mb-4 inline-block">Neurogenesis</span>
                <h3 className="text-2xl font-black text-white mb-2 group-hover:text-purple-400 transition-colors">Cannabigerol (CBG) & Brain Architecture</h3>
                <p className="text-brand-cream/70 text-sm line-clamp-2">The unparalleled neurogenic effects of isolated CBG.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* [NEW] 7.5 SOCIAL PROOF / RESULTS GALLERY */}
      <section className="py-32 bg-brand-black px-6 lg:px-12 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
             <div className="max-w-xl">
               <span className="text-brand-neon font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Proven Outcomes</span>
               <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">Real-World <br/>Transformation.</h2>
             </div>
             <div className="hidden md:flex gap-4">
                <Link href="/case-studies" className="px-6 py-3 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-brand-cream/50 hover:bg-white hover:text-brand-black transition-all">Read Outcome Reports</Link>
             </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 group hover:border-brand-neon transition-all">
                <Quote className="w-10 h-10 text-brand-neon mb-6 opacity-30"/>
                <p className="text-lg text-brand-cream/80 font-light mb-8 italic">"The Protocol Builder fixed my sleep in 3 weeks. My tracking data shows a 45% increase in Deep Sleep duration."</p>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-white/10 rounded-full"></div>
                   <div>
                      <h4 className="font-bold text-white">Marcus T.</h4>
                      <p className="text-[10px] uppercase font-bold text-brand-neon">Executive Optimizer</p>
                   </div>
                </div>
             </div>
             <div className="bg-white/5 p-8 rounded-[2.5rem] border border-white/10 group hover:border-brand-neon-cyan transition-all">
                <Quote className="w-10 h-10 text-brand-neon-cyan mb-6 opacity-30"/>
                <p className="text-lg text-brand-cream/80 font-light mb-8 italic">"Finally, a medical platform that explains the WHY behind the labs. My hs-CRP dropped from 3.2 to 0.8."</p>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 bg-white/10 rounded-full"></div>
                   <div>
                      <h4 className="font-bold text-white">Sarah J.</h4>
                      <p className="text-[10px] uppercase font-bold text-brand-neon-cyan">Bio-Resilience Member</p>
                   </div>
                </div>
             </div>
             <div className="bg-gradient-to-br from-brand-emerald to-brand-neon-cyan p-8 rounded-[2.5rem] text-brand-black shadow-glow flex flex-col justify-center text-center">
                <h3 className="text-2xl font-black mb-2 uppercase tracking-tighter leading-tight">Start Your Transformation Today.</h3>
                <p className="text-brand-black/70 text-sm font-bold mb-8">Join 15,000+ others indexing their biology.</p>
                <Link href="/signup" className="bg-brand-black text-white px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform">Create My Lab Account</Link>
             </div>
          </div>
        </div>
      </section>

      {/* 7. CRISP WHITE - ADVISORY BOARD TEAM (HIGH CONTRAST) */}
      <section className="py-32 bg-white px-6 lg:px-12 text-[#0A110D]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-tight">No White-Labeling.<br/> Absolute Clinical Rigor.</h2>
            <p className="text-xl font-light leading-relaxed mb-10 text-gray-700 border-l-4 border-gray-300 pl-6">
              Hebe Wellness formulations are peer-reviewed and actively architected by a diverse consortium of neurobiologists.
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
               <p className="text-sm font-light text-gray-600">Authority on adult neuroplasticity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. MASSIVE FOOTER CALL TO ACTION */}
      <footer className="py-32 bg-brand-black relative z-20 flex flex-col items-center justify-center text-center px-6 border-t-[8px] border-brand-neon">
        <div className="max-w-4xl relative z-10">
          <Dna className="w-16 h-16 text-brand-neon mx-auto mb-8 opacity-80" />
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-8 leading-[0.85]">
            Start Your <br/><span className="text-gradient-emerald">Health Journey.</span>
          </h2>
          <p className="text-xl md:text-2xl text-brand-cream/60 font-light mb-12 max-w-2xl mx-auto">
            Stop waiting. Get access to our simple, proven health plans today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
             <button className="bg-brand-neon text-brand-black px-12 py-6 rounded-full text-md font-black uppercase tracking-[0.2em] shadow-[0_0_50px_rgba(0,245,155,0.4)] hover:bg-white hover:scale-105 transition-all">
              Get Started
            </button>
          </div>
        </div>
        
        {/* Actual Footer links area */}
        <div className="w-full max-w-7xl mx-auto mt-40 pt-10 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-10 relative z-10">
          <div className="font-black text-3xl tracking-tighter uppercase text-white">HEBE<span className="text-brand-neon">.W</span></div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] md:text-xs uppercase tracking-widest text-brand-cream/60 font-bold">
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
