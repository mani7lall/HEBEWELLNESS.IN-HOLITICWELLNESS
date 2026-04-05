"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Activity, Zap, Shield, Beaker, Flame, Brain, BookOpen, ChevronRight, Dna, GitBranch, Heart, Target, Clock, Star, Quote, Droplets, Dumbbell, Download, DollarSign, Microscope, LineChart, Users, Mail, Moon, Database, Fingerprint, ActivitySquare, Lock, ShieldCheck, CheckCircle, MapPin, Stethoscope, Layers, Globe, HelpCircle, RefreshCw, Infinity, Code, Sun, Leaf, Network } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  // Interactive Tool 1: Autonomic Nervous System Simulator
  const [hrvState, setHrvState] = useState(65);
  
  // Interactive Tool 2: Biological Age Calculator preview
  const [chronoAge, setChronoAge] = useState(35);
  const [bioAgeResult, setBioAgeResult] = useState<number | null>(null);

  const calculateBioAge = (e: React.FormEvent) => {
    e.preventDefault();
    // Complex 2026 algorithm simulation
    setBioAgeResult(chronoAge - (Math.random() * 5 + 2)); 
  };

  const protocols = {
    Sleep: { title: "Deep Sleep Architecture", items: ["Magnesium L-Threonate", "Apigenin", "Theanine"], cta: "Get Full Sleep Protocol", color: "text-blue-400", border: "border-blue-500/30" },
    Focus: { title: "Executive Cognitive Stack", items: ["Alpha-GPC", "Tyrosine", "Lion's Mane"], cta: "Get Full Focus Protocol", color: "text-brand-neon", border: "border-brand-neon/30" },
    Longevity: { title: "Cellular Renewal Matrix", items: ["NMN", "Resveratrol", "Spermidine"], cta: "Get Full Longevity Protocol", color: "text-purple-400", border: "border-purple-500/30" },
    Metabolism: { title: "Metabolic Flexibility", items: ["Berberine", "Inositol", "Chromium"], cta: "Get Metabolic Protocol", color: "text-orange-500", border: "border-orange-500/30" }
  };

  const newArticles = [
    { title: "Senolytic Therapies & Epigenetic Reprogramming", tag: "Longevity", time: "18 Min Read", href: "/blog/senolytics-epigenetic-reprogramming-2026", color: "bg-purple-500" },
    { title: "BDNF Upregulation: Peptide Pathways for Neuroplasticity", tag: "Cognition", time: "14 Min Read", href: "/blog/neuroplasticity-peptides-bdnf-upregulation", color: "bg-brand-neon" },
    { title: "Metabolomics & The Gut-Brain Axis", tag: "Microbiome", time: "16 Min Read", href: "/blog/advanced-microbiome-metabolomics", color: "bg-blue-500" },
    { title: "BPC-157 and TB-500: Tissue Repair", tag: "Endocrinology", time: "12 Min Read", href: "/blog/peptide-therapy-recovery", color: "bg-orange-500" }
  ];

  return (
    <div className="bg-white dark:bg-brand-black text-slate-900 dark:text-white font-sans overflow-x-hidden min-h-screen selection:bg-brand-neon/30">
      
      {/* 1. ADVANCED 2026 HERO SECTION */}
      <section className="relative pt-40 pb-32 px-6 lg:px-12 flex flex-col justify-center min-h-[95vh] bg-[url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80')] bg-cover bg-center bg-no-repeat bg-fixed">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black/90 to-brand-black"></div>
        
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00F59B11_1px,transparent_1px),linear-gradient(to_bottom,#00F59B11_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-brand-neon font-mono font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-6 block border border-brand-neon/30 px-5 py-2 rounded-full inline-flex bg-brand-neon/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,245,155,0.2)]">
              <Activity className="w-4 h-4 mr-2 inline-block animate-pulse" />
              Next-Gen Biological Orchestration
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-[0.9] uppercase">
              Rewrite Your <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-blue-500 drop-shadow-[0_0_15px_rgba(0,245,155,0.4)]">
                Cellular Destiny
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-white/80 max-w-3xl mb-10 font-light leading-relaxed">
              We leverage highly advanced 2026 bioinformatics, Hebe orchestration agents, and rigorous clinical protocols to optimize your lifespan, healthspan, and cognitive architecture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Link href="/protocols" className="group relative px-8 py-4 bg-brand-neon text-brand-black font-bold uppercase tracking-widest overflow-hidden rounded-sm hover:scale-105 transition-transform flex items-center shadow-[0_0_30px_rgba(0,245,155,0.4)]">
                <span className="relative z-10 flex items-center">Start Your Protocol <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 h-full w-full bg-white/20 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></div>
              </Link>
              <Link href="/quiz" className="group px-8 py-4 border border-brand-neon/50 text-brand-neon font-bold uppercase tracking-widest hover:bg-brand-neon/10 transition-colors flex items-center rounded-sm backdrop-blur-sm">
                <Microscope className="mr-2 w-5 h-5" /> Analyze Biomarkers
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-sm font-mono text-white/50">
               <div className="flex items-center gap-2"><Dna className="w-4 h-4 text-brand-neon"/> Multi-Omics Analysis</div>
               <div className="flex items-center gap-2"><Brain className="w-4 h-4 text-blue-400"/> AI Protocol Generation</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 1.1 WEARABLE ECOSYSTEM INTEGRATION */}
      <section className="py-12 bg-slate-50 dark:bg-black/40 border-b border-black/5 dark:border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
           <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest"><RefreshCw className="w-4 h-4 text-brand-neon animate-spin-slow"/> Oura Ring V4</div>
           <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest"><RefreshCw className="w-4 h-4 text-brand-neon animate-spin-slow"/> Whoop 5.0</div>
           <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest"><RefreshCw className="w-4 h-4 text-brand-neon animate-spin-slow"/> Apple Watch Ultra 3</div>
           <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest"><RefreshCw className="w-4 h-4 text-brand-neon animate-spin-slow"/> Dexcom G8</div>
           <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest"><RefreshCw className="w-4 h-4 text-brand-neon animate-spin-slow"/> Eight Sleep Autopilot</div>
        </div>
      </section>

      
      {/* NEW SECTION: ADVANCED BIOLOGICAL THEORIES & MECHANISMS */}
      <section className="py-32 bg-white dark:bg-brand-black px-6 lg:px-12 border-y border-black/5 dark:border-white/10 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
             <div className="flex justify-center mb-6">
               <span className="bg-brand-neon/10 text-brand-neon text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.3em] border border-brand-neon/20">The Science</span>
             </div>
             <h2 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-6 leading-[0.8]">Clinical <br/><span className="text-brand-neon text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-emerald">Frontiers.</span></h2>
             <p className="text-lg text-slate-600 dark:text-white/60 max-w-2xl mx-auto font-light leading-relaxed">Translating peer-reviewed longevity research into actionable biological upgrades.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-50 dark:bg-[#121A16] border border-black/5 dark:border-white/10 p-10 rounded-[2.5rem] hover:border-brand-neon/30 transition-all duration-500 group shadow-lg">
              <div className="p-5 bg-brand-neon/10 rounded-2xl border border-brand-neon/20 w-fit mb-8 group-hover:scale-110 transition-transform">
                <Infinity className="w-10 h-10 text-brand-neon" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">Senolytic Clearance</h3>
              <p className="text-slate-600 dark:text-white/50 text-sm leading-relaxed font-light">
                Targeted flavonoids like Fisetin induce apoptosis in "zombie" cells, clearing systemic inflammation and triggering tissue regeneration.
              </p>
            </div>
            
            <div className="bg-gray-50 dark:bg-[#121A16] border border-black/5 dark:border-white/10 p-10 rounded-[2.5rem] hover:border-blue-500/30 transition-all duration-500 group shadow-lg">
              <div className="p-5 bg-blue-500/10 rounded-2xl border border-blue-500/20 w-fit mb-8 group-hover:scale-110 transition-transform">
                <Network className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">Neuroplasticity</h3>
              <p className="text-slate-600 dark:text-white/50 text-sm leading-relaxed font-light">
                Upregulating BDNF through precision peptides radically enhances synaptic density, fluid intelligence, and cognitive resilience.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-[#121A16] border border-black/5 dark:border-white/10 p-10 rounded-[2.5rem] hover:border-purple-500/30 transition-all duration-500 group shadow-lg">
              <div className="p-5 bg-purple-500/10 rounded-2xl border border-purple-500/20 w-fit mb-8 group-hover:scale-110 transition-transform">
                <Dna className="w-10 h-10 text-purple-500" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 uppercase tracking-tight">DNA Repair</h3>
              <p className="text-slate-600 dark:text-white/50 text-sm leading-relaxed font-light">
                Utilizing NAD+ precursors and sirtuin-activating compounds to repair DNA double-strand breaks and silence pro-aging genes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE DIAGNOSTICS SECTION (NEW) */}
      <section className="py-24 px-6 lg:px-12 bg-white dark:bg-brand-black border-y border-black/5 dark:border-white/10 relative overflow-hidden transition-colors duration-500">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20 text-center">
             <div className="flex justify-center mb-6">
               <span className="bg-brand-neon/10 text-brand-neon text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.3em] border border-brand-neon/20">Advanced Diagnostics</span>
             </div>
             <h2 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-6 leading-[0.8]">Autonomous <br/><span className="text-brand-neon text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-emerald">Testing.</span></h2>
             <p className="text-lg md:text-xl text-slate-600 dark:text-white/60 max-w-2xl mx-auto font-light leading-relaxed">Establish your baseline with our 2026 performance simulators. No more guessing.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Tool A: VO2 Max Simulator */}
            <Link href="/tools/vo2-max" className="bg-gray-50 dark:bg-[#121A16] border border-black/5 dark:border-white/10 p-10 rounded-[2.5rem] relative group hover:border-brand-neon/50 transition-all duration-500 shadow-xl overflow-hidden">
               <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-neon to-blue-600 rounded-[2.5rem] blur opacity-0 group-hover:opacity-10 transition duration-1000"></div>
               <div className="relative">
                 <div className="flex justify-between items-start mb-10">
                    <div className="p-5 bg-brand-neon/10 rounded-2xl border border-brand-neon/20 group-hover:scale-110 transition-transform">
                       <Activity className="w-10 h-10 text-brand-neon" />
                    </div>
                    <ArrowRight className="w-6 h-6 text-slate-300 dark:text-white/20 group-hover:text-brand-neon group-hover:translate-x-2 transition-all" />
                 </div>
                 <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4">VO2 Max <br/>Performance</h3>
                 <p className="text-slate-600 dark:text-white/50 text-sm leading-relaxed font-light mb-8">Predict your aerobic capacity and longevity trajectory based on Cooper test metrics. The gold standard for healthspan.</p>
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-brand-neon">Initialize Audit &rarr;</span>
               </div>
            </Link>

            {/* Tool B: Stack ROI Analyzer */}
            <Link href="/tools/supplement-roi" className="bg-gray-50 dark:bg-[#121A16] border border-black/5 dark:border-white/10 p-10 rounded-[2.5rem] relative group hover:border-blue-500/50 transition-all duration-500 shadow-xl overflow-hidden">
               <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-[2.5rem] blur opacity-0 group-hover:opacity-10 transition duration-1000"></div>
               <div className="relative">
                 <div className="flex justify-between items-start mb-10">
                    <div className="p-5 bg-blue-500/10 rounded-2xl border border-blue-500/20 group-hover:scale-110 transition-transform">
                       <DollarSign className="w-10 h-10 text-blue-400" />
                    </div>
                    <ArrowRight className="w-6 h-6 text-slate-300 dark:text-white/20 group-hover:text-blue-400 group-hover:translate-x-2 transition-all" />
                 </div>
                 <h3 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4">Supplement <br/>Stack ROI</h3>
                 <p className="text-slate-600 dark:text-white/50 text-sm leading-relaxed font-light mb-8">Calculate the cost-to-benefit ratio of your longevity stack. Optimize your spend for maximum biological impact.</p>
                 <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">Run Efficiency Audit &rarr;</span>
               </div>
            </Link>
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/tools" className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 hover:text-brand-neon transition-colors">
              Explore Master Tool Directory (12+)
            </Link>
          </div>
        </div>
      </section>

      {/* 2.1 BIO-SECURITY & DATA PRIVACY */}
      <section className="py-24 bg-white dark:bg-brand-black px-6 lg:px-12 border-b border-black/5 dark:border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-neon/10 blur-2xl rounded-full"></div>
                <ShieldCheck className="w-24 h-24 text-brand-neon relative z-10 mb-8" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-6">Zero-Knowledge <br/><span className="text-brand-neon">Genetic Privacy</span></h2>
              <p className="text-lg text-slate-900 dark:text-white/70 mb-8 leading-relaxed font-light">Your biological data is your most sensitive asset. In 2026, we utilize decentralized identity protocols and zero-knowledge proofs to ensure that your genomic and biomarker data is never stored on central servers. You own the keys; we only provide the orchestration.</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="border border-black/10 dark:border-black/10 dark:border-white/10 p-4 rounded-lg bg-white/5">
                   <Lock className="w-5 h-5 text-brand-neon mb-2"/>
                   <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs mb-1">AES-256 E2EE</h4>
                   <p className="text-[10px] text-slate-900 dark:text-white/50 uppercase">End-to-End Encryption</p>
                </div>
                <div className="border border-black/10 dark:border-black/10 dark:border-white/10 p-4 rounded-lg bg-white/5">
                   <Shield className="w-5 h-5 text-blue-400 mb-2"/>
                   <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs mb-1">ZKP Validation</h4>
                   <p className="text-[10px] text-slate-900 dark:text-white/50 uppercase">Zero-Knowledge Proofs</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-slate-50 dark:bg-black/40 border border-brand-neon/20 p-8 rounded-3xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-neon/5 blur-xl"></div>
                 <div className="font-mono text-[10px] text-brand-neon/40 leading-tight mb-4">
                   [LOG] Initializing secure handshake...<br/>
                   [LOG] Generating ephemeral keys...<br/>
                   [LOG] Biological hash verified (0x7f...a9)...<br/>
                   [LOG] Access granted to Hebe-Orchestrator-01
                 </div>
                 <div className="space-y-4">
                    <div className="h-2 bg-brand-neon/20 rounded-full w-full relative overflow-hidden">
                       <div className="absolute h-full bg-brand-neon w-2/3 animate-pulse"></div>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full w-3/4"></div>
                    <div className="h-2 bg-white/5 rounded-full w-1/2"></div>
                 </div>
                 <div className="mt-8 flex justify-center">
                    <div className="w-16 h-16 rounded-full border-4 border-brand-neon border-t-transparent animate-spin"></div>
                 </div>
                 <p className="text-center mt-6 font-mono text-xs text-brand-neon animate-pulse">ENCRYPTING BIOMETRIC STREAM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC CTA SECTION 1: PROTOCOL BUILDER */}
      <section className="py-24 bg-white dark:bg-brand-black relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-gradient-to-br from-[#121c17] to-black border border-brand-neon/20 p-10 md:p-16 rounded-3xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-96 h-96 bg-brand-neon/10 blur-[100px] rounded-full"></div>
             
             <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex-1">
                   <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4">Design Your <br/><span className="text-brand-neon">Longevity Stack</span></h2>
                   <p className="text-slate-900 dark:text-white/70 mb-8 max-w-xl text-lg">Stop guessing. Let our Hebe orchestrator build a custom nootropic, peptide, and senolytic protocol based on your exact biometric data and genomic profile.</p>
                   <ul className="space-y-3 mb-8 font-mono text-sm text-slate-900 dark:text-white/60">
                     <li className="flex items-center"><Zap className="w-4 h-4 mr-2 text-brand-neon"/> Clinical Grade Compounds</li>
                     <li className="flex items-center"><Zap className="w-4 h-4 mr-2 text-brand-neon"/> Synergistic Stacking Algorithm</li>
                     <li className="flex items-center"><Zap className="w-4 h-4 mr-2 text-brand-neon"/> Dynamic Dosing based on Wearables</li>
                   </ul>
                </div>
                <div className="w-full md:w-auto">
                   <Link href="/tools/stack" className="group block w-full text-center px-10 py-5 bg-white text-black font-black uppercase tracking-widest rounded-sm hover:bg-brand-neon transition-colors shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(0,245,155,0.4)]">
                     Launch Stack Builder <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform"/>
                   </Link>
                   <p className="text-center mt-4 font-mono text-xs text-slate-900 dark:text-white/40 uppercase">Powered by GPT-4o & Hebe Logic</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3.1 THE 2026 CLINICAL SHIFT */}
      <section className="py-24 bg-white dark:bg-brand-black px-6 lg:px-12 border-b border-black/5 dark:border-black/5 dark:border-white/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4">The <span className="text-brand-neon">2026 Clinical Shift</span></h2>
             <p className="text-slate-900 dark:text-white/60 max-w-2xl mx-auto font-mono text-sm">Transitioning from Reactive Medicine to Proactive Biological Optimization.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             <div className="bg-white/5 border border-black/10 dark:border-black/10 dark:border-white/10 p-6 rounded-xl hover:border-brand-neon transition-colors group">
                <Beaker className="w-8 h-8 text-brand-neon mb-4 group-hover:scale-110 transition-transform"/>
                <h4 className="text-slate-900 dark:text-white font-bold uppercase mb-2">Evidence-Based Stacking</h4>
                <p className="text-xs text-slate-900 dark:text-white/60 font-light">Every protocol is backed by human clinical trials and real-time biological feedback loops.</p>
             </div>
             <div className="bg-white/5 border border-black/10 dark:border-black/10 dark:border-white/10 p-6 rounded-xl hover:border-blue-400 transition-colors group">
                <Microscope className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition-transform"/>
                <h4 className="text-slate-900 dark:text-white font-bold uppercase mb-2">Multi-Omics Integration</h4>
                <p className="text-xs text-slate-900 dark:text-white/60 font-light">We analyze your genome, epigenome, microbiome, and metabolome for a 360-degree biological view.</p>
             </div>
             <div className="bg-white/5 border border-black/10 dark:border-black/10 dark:border-white/10 p-6 rounded-xl hover:border-purple-400 transition-colors group">
                <Dna className="w-8 h-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform"/>
                <h4 className="text-slate-900 dark:text-white font-bold uppercase mb-2">Senolytic Clearance</h4>
                <p className="text-xs text-slate-900 dark:text-white/60 font-light">Targeting senescent "zombie" cells to reduce systemic inflammation and accelerate tissue renewal.</p>
             </div>
             <div className="bg-white/5 border border-black/10 dark:border-black/10 dark:border-white/10 p-6 rounded-xl hover:border-brand-neon transition-colors group">
                <Layers className="w-8 h-8 text-brand-neon mb-4 group-hover:scale-110 transition-transform"/>
                <h4 className="text-slate-900 dark:text-white font-bold uppercase mb-2">Hebe Orchestration</h4>
                <p className="text-xs text-slate-900 dark:text-white/60 font-light">Our AI agents continuously monitor your biomarker stream and adjust doses autonomously.</p>
             </div>
          </div>
        </div>
      </section>

      {/* 4. PILLARS OF PERFORMANCE (CORE PROTOCOLS) */}
      <section className="py-24 bg-white dark:bg-brand-black px-6 lg:px-12 relative border-t border-black/5 dark:border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter uppercase">Clinical <span className="text-brand-neon">Pathways</span></h2>
            <p className="text-slate-900 dark:text-white/60 max-w-2xl mx-auto text-lg">Targeted interventions designed to optimize specific biological systems through rigorous scientific methodology.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(protocols).map(([key, data]) => (
              <div key={key} className={`bg-slate-50 dark:bg-black/40 border ${data.border} p-8 rounded-2xl hover:bg-[#121c17] transition-all group relative overflow-hidden`}>
                <div className={`absolute top-0 left-0 w-2 h-full ${data.border.replace('border-', 'bg-').replace('/30', '')}`}></div>
                <div className="mb-6">
                  {key === 'Sleep' && <Moon className={`w-10 h-10 ${data.color}`} />}
                  {key === 'Focus' && <Brain className={`w-10 h-10 ${data.color}`} />}
                  {key === 'Longevity' && <Dna className={`w-10 h-10 ${data.color}`} />}
                </div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2 uppercase tracking-tight">{data.title}</h3>
                <div className="h-px w-full bg-white/5 my-4"></div>
                <ul className="space-y-3 mb-8">
                  {data.items.map((item, i) => (
                    <li key={i} className="flex items-center text-slate-900 dark:text-white/70 font-mono text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full mr-3 ${data.color.replace('text-', 'bg-')}`}></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href={`/protocols/${key.toLowerCase()}`} className={`inline-flex items-center font-bold uppercase tracking-widest text-sm ${data.color} group-hover:underline underline-offset-4`}>
                  {data.cta} <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4.1 THE BIOLOGICAL ROADMAP */}
      <section className="py-24 bg-slate-50 dark:bg-[#050807] px-6 lg:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-16 text-center">The <span className="text-brand-neon">Longevity Roadmap</span></h2>
          <div className="relative">
             <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 hidden md:block"></div>
             <div className="space-y-12 md:space-y-24">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
                   <div className="flex-1 md:text-right md:pr-12">
                      <h3 className="text-2xl font-bold text-brand-neon mb-2 uppercase tracking-wide">Phase 01: Stabilization</h3>
                      <p className="text-slate-900 dark:text-white/60">Inflammation reduction, glycemic control, and circadian rhythm alignment. The foundation of biological resilience.</p>
                   </div>
                   <div className="z-10 w-12 h-12 rounded-full bg-brand-neon border-8 border-brand-black flex items-center justify-center font-black text-black">01</div>
                   <div className="flex-1 md:pl-12 hidden md:block"></div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
                   <div className="flex-1 md:pr-12 hidden md:block"></div>
                   <div className="z-10 w-12 h-12 rounded-full bg-blue-500 border-8 border-brand-black flex items-center justify-center font-black text-white">02</div>
                   <div className="flex-1 md:pl-12">
                      <h3 className="text-2xl font-bold text-blue-400 mb-2 uppercase tracking-wide">Phase 02: Optimization</h3>
                      <p className="text-slate-900 dark:text-white/60">Mitochondrial upregulation, cognitive enhancement, and anabolic drive. Reaching peak performance state.</p>
                   </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
                   <div className="flex-1 md:text-right md:pr-12">
                      <h3 className="text-2xl font-bold text-purple-400 mb-2 uppercase tracking-wide">Phase 03: Reversal</h3>
                      <p className="text-slate-900 dark:text-white/60">Epigenetic reprogramming, senolytic clearance, and tissue regeneration. Actively lowering biological age.</p>
                   </div>
                   <div className="z-10 w-12 h-12 rounded-full bg-purple-500 border-8 border-brand-black flex items-center justify-center font-black text-white">03</div>
                   <div className="flex-1 md:pl-12 hidden md:block"></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5.1 SUPPLEMENT SOURCING & PURITY */}
      <section className="py-24 bg-white dark:bg-brand-black px-6 lg:px-12 border-b border-black/5 dark:border-black/5 dark:border-white/5">
         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
               <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-6">The Hebe <br/><span className="text-brand-neon">Purity Standard</span></h2>
               <p className="text-lg text-slate-900 dark:text-white/70 mb-8 font-light">Not all compounds are created equal. We utilize mass spectrometry and HPLC testing to ensure 99%+ purity on all protocol ingredients. Our supply chain is 100% transparent and verified by third-party labs.</p>
               <div className="space-y-4">
                  <div className="flex items-start gap-4">
                     <CheckCircle className="w-6 h-6 text-brand-neon mt-1"/>
                     <div>
                        <h4 className="font-bold text-slate-900 dark:text-white uppercase text-sm">Batch-Level COA</h4>
                        <p className="text-xs text-slate-900 dark:text-white/50 uppercase">Every order includes a Certificate of Analysis.</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <CheckCircle className="w-6 h-6 text-brand-neon mt-1"/>
                     <div>
                        <h4 className="font-bold text-slate-900 dark:text-white uppercase text-sm">Clinical Grade Manufacturing</h4>
                        <p className="text-xs text-slate-900 dark:text-white/50 uppercase">GMP & NSF Certified Facilities.</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex-1 w-full">
               <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 dark:bg-black/40 border border-black/5 dark:border-black/5 dark:border-white/5 p-8 rounded-2xl flex flex-col items-center justify-center text-center">
                     <Droplets className="w-10 h-10 text-blue-400 mb-4"/>
                     <span className="text-2xl font-black text-slate-900 dark:text-white">99.8%</span>
                     <span className="text-[10px] uppercase text-slate-900 dark:text-white/40 font-mono">Average Purity</span>
                  </div>
                  <div className="bg-slate-50 dark:bg-black/40 border border-black/5 dark:border-black/5 dark:border-white/5 p-8 rounded-2xl flex flex-col items-center justify-center text-center">
                     <Target className="w-10 h-10 text-brand-neon mb-4"/>
                     <span className="text-2xl font-black text-slate-900 dark:text-white">0.0%</span>
                     <span className="text-[10px] uppercase text-slate-900 dark:text-white/40 font-mono">Heavy Metals</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5.2 SUCCESS STORIES / CASE STUDIES */}
      <section className="py-24 bg-white dark:bg-black/20 border-b border-black/5 dark:border-black/5 dark:border-white/5 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
               <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4">The <span className="text-brand-neon">Vanguard</span> Results</h2>
               <p className="text-slate-900 dark:text-white/60 max-w-2xl mx-auto font-mono text-sm">Empirical data from our first cohort of high-performance human test subjects.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               <div className="bg-slate-50 dark:bg-black/40 border border-black/10 dark:border-black/10 dark:border-white/10 p-8 rounded-2xl relative group hover:border-brand-neon/40 transition-colors">
                  <Quote className="w-8 h-8 text-brand-neon/20 mb-6 group-hover:text-brand-neon/50 transition-colors"/>
                  <p className="text-slate-900 dark:text-white font-light mb-8 italic">"Reduced my biological age by 4.2 years in 6 months. The focus and cognitive clarity I have now is beyond what I thought was possible in my 50s."</p>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-zinc-800"></div>
                     <div>
                        <h4 className="text-slate-900 dark:text-white font-bold text-sm uppercase">David K.</h4>
                        <p className="text-[10px] uppercase text-slate-900 dark:text-white/40 font-mono">Hedge Fund Manager | Age 52</p>
                     </div>
                  </div>
                  <div className="mt-6 flex gap-4 text-[10px] font-mono uppercase text-brand-neon">
                     <span className="flex items-center gap-1"><Dna className="w-3 h-3"/> Bio-Age -4.2y</span>
                     <span className="flex items-center gap-1"><Zap className="w-3 h-3"/> HRV +22ms</span>
                  </div>
               </div>
               <div className="bg-slate-50 dark:bg-black/40 border border-black/10 dark:border-black/10 dark:border-white/10 p-8 rounded-2xl relative group hover:border-blue-500/40 transition-colors">
                  <Quote className="w-8 h-8 text-blue-500/20 mb-6 group-hover:text-blue-500/50 transition-colors"/>
                  <p className="text-slate-900 dark:text-white font-light mb-8 italic">"The sleep optimization protocol alone has changed my life. I haven't felt this restored in a decade. My training recovery is at an all-time high."</p>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-zinc-800"></div>
                     <div>
                        <h4 className="text-slate-900 dark:text-white font-bold text-sm uppercase">Sarah L.</h4>
                        <p className="text-[10px] uppercase text-slate-900 dark:text-white/40 font-mono">Elite Triathlete | Age 38</p>
                     </div>
                  </div>
                  <div className="mt-6 flex gap-4 text-[10px] font-mono uppercase text-blue-400">
                     <span className="flex items-center gap-1"><Moon className="w-3 h-3"/> Deep Sleep +45m</span>
                     <span className="flex items-center gap-1"><Dumbbell className="w-3 h-3"/> Recovery +18%</span>
                  </div>
               </div>
               <div className="bg-slate-50 dark:bg-black/40 border border-black/10 dark:border-black/10 dark:border-white/10 p-8 rounded-2xl relative group hover:border-purple-500/40 transition-colors">
                  <Quote className="w-8 h-8 text-purple-500/20 mb-6 group-hover:text-purple-500/50 transition-colors"/>
                  <p className="text-slate-900 dark:text-white font-light mb-8 italic">"Advanced metabolic flexibility is the secret. I've stable energy all day, zero crashes, and my brain is always 'on'. The Hebe agent is a game-changer."</p>
                  <div className="flex items-center gap-4">
                     <div className="w-12 h-12 rounded-full bg-zinc-800"></div>
                     <div>
                        <h4 className="text-slate-900 dark:text-white font-bold text-sm uppercase">Marcus T.</h4>
                        <p className="text-[10px] uppercase text-slate-900 dark:text-white/40 font-mono">Founder & CEO | Age 44</p>
                     </div>
                  </div>
                  <div className="mt-6 flex gap-4 text-[10px] font-mono uppercase text-purple-400">
                     <span className="flex items-center gap-1"><Brain className="w-3 h-3"/> Focus Score +35%</span>
                     <span className="flex items-center gap-1"><LineChart className="w-3 h-3"/> VO2 Max +5.5</span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5.3 GLOBAL PROVIDER NETWORK */}
      <section className="py-24 bg-white dark:bg-brand-black px-6 lg:px-12 border-b border-black/5 dark:border-black/5 dark:border-white/5 relative overflow-hidden">
         <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-16">
               <div className="flex-1 order-2 lg:order-1">
                  <div className="grid grid-cols-2 gap-4">
                     <div className="bg-white/5 border border-black/10 dark:border-black/10 dark:border-white/10 p-6 rounded-xl">
                        <MapPin className="w-6 h-6 text-brand-neon mb-3"/>
                        <h4 className="text-slate-900 dark:text-white font-bold text-xs uppercase">Silicon Valley Hub</h4>
                        <p className="text-[10px] text-slate-900 dark:text-white/50 uppercase">Clinical HQ</p>
                     </div>
                     <div className="bg-white/5 border border-black/10 dark:border-black/10 dark:border-white/10 p-6 rounded-xl">
                        <Globe className="w-6 h-6 text-blue-400 mb-3"/>
                        <h4 className="text-slate-900 dark:text-white font-bold text-xs uppercase">Zug, Switzerland</h4>
                        <p className="text-[10px] text-slate-900 dark:text-white/50 uppercase">Biotech Research</p>
                     </div>
                     <div className="bg-white/5 border border-black/10 dark:border-black/10 dark:border-white/10 p-6 rounded-xl">
                        <Stethoscope className="w-6 h-6 text-purple-400 mb-3"/>
                        <h4 className="text-slate-900 dark:text-white font-bold text-xs uppercase">Telehealth 24/7</h4>
                        <p className="text-[10px] text-slate-900 dark:text-white/50 uppercase">Global Access</p>
                     </div>
                     <div className="bg-white/5 border border-black/10 dark:border-black/10 dark:border-white/10 p-6 rounded-xl">
                        <Users className="w-6 h-6 text-brand-neon mb-3"/>
                        <h4 className="text-slate-900 dark:text-white font-bold text-xs uppercase">Specialist Network</h4>
                        <p className="text-[10px] text-slate-900 dark:text-white/50 uppercase">150+ Clinicians</p>
                     </div>
                  </div>
               </div>
               <div className="flex-1 order-1 lg:order-2">
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-6">Global <span className="text-brand-neon">Clinical</span> Network</h2>
                  <p className="text-lg text-slate-900 dark:text-white/70 mb-8 font-light">Connect with the world's leading longevity physicians and bio-optimization specialists. Our platform bridges the gap between advanced research and clinical practice through secure telehealth and global partner clinics.</p>
                  <button className="px-8 py-4 border border-brand-neon text-brand-neon font-bold uppercase tracking-widest hover:bg-brand-neon hover:text-black transition-all rounded-sm">
                     Find a Specialist
                  </button>
               </div>
            </div>
         </div>
      </section>

      {/* 5.4 NEURO-ARCHITECTURE DEEP-DIVE */}
      <section className="py-24 bg-slate-50 dark:bg-[#050807] px-6 lg:px-12 relative">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-6">Neuro-Architecture <br/><span className="text-blue-400">& Sleep Design</span></h2>
                  <p className="text-lg text-slate-900 dark:text-white/70 mb-8 font-light">Mastering the 1/3rd of your life spent in recovery. We use high-fidelity EEG data and circadian biomarker tracking to design the ultimate sleep environment and cognitive recovery cycle.</p>
                  <div className="space-y-4">
                     <div className="flex items-center gap-4 border-l-2 border-blue-500 pl-6">
                        <div>
                           <h4 className="text-slate-900 dark:text-white font-bold uppercase text-sm">Delta-Wave Amplification</h4>
                           <p className="text-xs text-slate-900 dark:text-white/50 font-mono">Enhancing deep sleep stages via acoustic and thermal modulation.</p>
                        </div>
                     </div>
                     <div className="flex items-center gap-4 border-l-2 border-blue-500 pl-6">
                        <div>
                           <h4 className="text-slate-900 dark:text-white font-bold uppercase text-sm">Glymphatic Clearance</h4>
                           <p className="text-xs text-slate-900 dark:text-white/50 font-mono">Optimizing brain waste removal during the REM cycle.</p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="relative">
                  <div className="aspect-video bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden border border-black/10 dark:border-black/10 dark:border-white/10 relative group">
                     <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
                     <div className="absolute inset-0 flex items-center justify-center">
                        <Activity className="w-32 h-32 text-blue-500/20 animate-pulse"/>
                     </div>
                     <div className="absolute bottom-8 left-8">
                        <p className="text-xs font-mono text-blue-400 mb-1">[SYSTEM] MONITORING REM-STATE</p>
                        <div className="w-48 h-1 bg-blue-900 rounded-full">
                           <div className="h-full bg-blue-400 w-2/3 animate-ping"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 5.5 ADVANCED FAQ (SENIOR DOCTOR TIER) */}
      <section className="py-24 bg-white dark:bg-brand-black px-6 lg:px-12 border-b border-black/5 dark:border-black/5 dark:border-white/5">
         <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-12 text-center">Technical <span className="text-brand-neon">Inquiry</span></h2>
            <div className="space-y-4">
               {[ 
                  { q: "How does the Hebe Omni-Agent handle polypharmacy interactions?", a: "Our orchestration engine utilizes a real-time interaction matrix derived from over 500,000 clinical data points, ensuring that every synergistic and antagonistic effect is accounted for before dose adjustment." },
                  { q: "What are the specific bio-markers used for epigenetic age calculation?", a: "We focus on the Horvath-v2 and GrimAge clocks, analyzing over 350 specific CpG methylation sites alongside systemic inflammation markers like hs-CRP and IL-6." },
                  { q: "Is the Hebe orchestration accessible via API for health institutions?", a: "Yes, we provide a secure, HIPAA-compliant REST API for integration with existing EMR and LIMS systems, allowing for seamless data flow between practitioners and our AI agents." }
               ].map((item, idx) => (
                  <div key={idx} className="border border-black/10 dark:border-black/10 dark:border-white/10 rounded-xl overflow-hidden">
                     <button className="w-full p-6 text-left flex justify-between items-center bg-white/5 hover:bg-white/10 transition-colors" onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}>
                        <span className="font-bold text-slate-900 dark:text-white text-sm uppercase">{item.q}</span>
                        <ChevronRight className={`w-5 h-5 text-brand-neon transition-transform ${activeFaq === idx ? "rotate-90" : ""}`} />
                     </button>
                     <AnimatePresence>
                        {activeFaq === idx && (
                           <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                              <div className="p-6 bg-slate-50 dark:bg-black/40 text-slate-900 dark:text-white/70 text-sm font-light leading-relaxed border-t border-black/5 dark:border-black/5 dark:border-white/5">
                                 {item.a}
                              </div>
                           </motion.div>
                        )}
                     </AnimatePresence>
                  </div>
               ))}
            </div>
         </div>
      </section>

      
      {/* HEBE AUTHORITY BLOG HIGHLIGHTS */}
      <section className="py-24 bg-slate-50 dark:bg-slate-50 dark:bg-[#050807] transition-colors duration-300 relative border-t border-black/5 dark:border-white/5">
         <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
               <div>
                 <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-4"><span className="text-brand-neon">Intelligence</span> Hub</h2>
                 <p className="text-slate-700 dark:text-white/60 max-w-xl text-lg">Beyond standard health advice. Peer-reviewed research translated into actionable 2026 longevity protocols.</p>
               </div>
               <Link href="/blog" className="px-6 py-3 border border-black/20 dark:border-white/20 text-slate-900 dark:text-white hover:bg-brand-dark hover:text-white dark:hover:bg-brand-cream dark:hover:text-brand-black font-bold uppercase tracking-widest transition-all rounded-sm text-sm whitespace-nowrap">
                 View All Research
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
               {newArticles.map((article, idx) => (
                 <Link key={idx} href={article.href} className="group bg-white dark:bg-black/40 border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden hover:shadow-lg transition-all">
                    <div className="h-40 bg-zinc-200 dark:bg-zinc-100 dark:bg-zinc-900 relative overflow-hidden">
                       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80')] bg-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700"></div>
                       <div className={`absolute top-4 left-4 ${article.color} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase font-mono`}>{article.tag}</div>
                    </div>
                    <div className="p-6">
                       <div className="flex items-center gap-4 text-[10px] font-mono text-slate-500 dark:text-white/50 mb-3">
                          <span><Clock className="w-3 h-3 inline mr-1"/> {article.time}</span>
                          <span><Database className="w-3 h-3 inline mr-1"/> Clinical</span>
                       </div>
                       <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 leading-snug group-hover:text-brand-neon transition-colors">{article.title}</h3>
                    </div>
                 </Link>
               ))}
            </div>
         </div>
      </section>

{/* 6. BOTTOM CTA / Hebe ORCHESTRATOR HIGHLIGHT */}
      <section className="py-32 relative bg-white dark:bg-brand-black overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-t from-brand-neon/5 to-transparent"></div>
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <div className="w-20 h-20 bg-brand-neon/10 border border-brand-neon/30 rounded-full flex items-center justify-center mx-auto mb-8 relative">
               <Brain className="w-10 h-10 text-brand-neon" />
               <div className="absolute inset-0 rounded-full border border-brand-neon animate-ping opacity-20"></div>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-6">Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-blue-500">Hebe Omni-Agent</span></h2>
            <p className="text-xl text-slate-900 dark:text-white/70 mb-10 font-light leading-relaxed">
               Our platform is powered by a network of Hebe orchestrator agents. From autonomous protocol generation to continuous biomarker analysis, we offer a level of health intelligence previously unavailable.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <button className="px-10 py-5 bg-brand-neon text-black font-black uppercase tracking-widest rounded-sm hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,245,155,0.3)]">
                  Initialize Agent
               </button>
               <button className="px-10 py-5 border border-white/20 text-slate-900 dark:text-white font-bold uppercase tracking-widest rounded-sm hover:bg-white/5 transition-colors">
                  Read The Architecture
               </button>
            </div>
         </div>
      </section>

    </div>
  );
}
