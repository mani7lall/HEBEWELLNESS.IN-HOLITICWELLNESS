"use client";

import Link from 'next/link';
import { ArrowRight, BookOpen, Clock, Sparkles } from 'lucide-react';

export default function BlogIndex() {
  const categories = [
    {
      name: "Cellular Science",
      color: "purple",
      articles: [
        { id: "autophagy-induction-fasting", title: "AUTOPHAGY INDUCTION FASTING", time: "10 Min" },
        { id: "senolytics-epigenetic-reprogramming-2026", title: "SENOLYTIC THERAPIES & EPIGENETIC REPROGRAMMING", time: "18 Min" },
        { id: "neuroplasticity-peptides-bdnf-upregulation", title: "BDNF UPREGULATION: PEPTIDE PATHWAYS FOR NEUROPLASTICITY", time: "14 Min" },
        { id: "cellular-hydration-mechanisms", title: "CELLULAR HYDRATION MECHANISMS", time: "10 Min" },
        { id: "curcumin-bioavailability-optimization", title: "CURCUMIN BIOAVAILABILITY OPTIMIZATION", time: "10 Min" },
        { id: "foxo3-gene-longevity", title: "FOXO3 GENE LONGEVITY", time: "10 Min" },
        { id: "mitochondrial-biogenesis-pqq", title: "MITOCHONDRIAL BIOGENESIS PQQ", time: "10 Min" },
        { id: "mthfr-methylation-support", title: "MTHFR METHYLATION SUPPORT", time: "10 Min" },
        { id: "neuroinflammation-reduction-stacks", title: "NEUROINFLAMMATION REDUCTION STACKS", time: "10 Min" },
        { id: "omega-3-index-cardiovascular", title: "OMEGA 3 INDEX CARDIOVASCULAR", time: "10 Min" },
        { id: "sirtuin-activation-nicotinamide", title: "SIRTUIN ACTIVATION NICOTINAMIDE", time: "10 Min" },
        { id: "telomere-maintenance-protocols", title: "TELOMERE MAINTENANCE PROTOCOLS", time: "10 Min" },
      ]
    },
    {
      name: "Clinical Systems",
      color: "brand-neon",
      articles: [
        { id: "biological-age-reversal-metrics", title: "BIOLOGICAL AGE REVERSAL METRICS", time: "10 Min" },
        { id: "advanced-microbiome-metabolomics", title: "ADVANCED MICROBIOME METABOLOMICS & THE GUT-BRAIN AXIS", time: "16 Min" },
        { id: "circadian-biology-architecture", title: "CIRCADIAN BIOLOGY ARCHITECTURE", time: "10 Min" },
        { id: "dna-repair-mechanisms-2026", title: "DNA REPAIR MECHANISMS 2026", time: "10 Min" },
        { id: "exosome-therapy-regenerative", title: "EXOSOME THERAPY REGENERATIVE", time: "10 Min" },
        { id: "glymphatic-clearance-deep-sleep", title: "GLYMPHATIC CLEARANCE DEEP SLEEP", time: "10 Min" },
        { id: "heart-rate-variability-load", title: "HEART RATE VARIABILITY LOAD", time: "10 Min" },
        { id: "heavy-metal-detox-protocols", title: "HEAVY METAL DETOX PROTOCOLS", time: "10 Min" },
        { id: "microbiome-gut-brain-axis", title: "MICROBIOME GUT BRAIN AXIS", time: "10 Min" },
        { id: "oxidative-stress-mitigation", title: "OXIDATIVE STRESS MITIGATION", time: "10 Min" },
        { id: "systemic-inflammation-biomarkers", title: "SYSTEMIC INFLAMMATION BIOMARKERS", time: "10 Min" },
      ]
    },
    {
      name: "General",
      color: "brand-neon",
      articles: [
        { id: "adaptogens-101", title: "Adaptogens 101: Nature's Answer to Burnout", time: "10 Min" },
        { id: "advanced-sleep-supplements", title: "The Best Supplements for Sleep: Beyond Melatonin", time: "10 Min" },
        { id: "cortisol-chronic-stress", title: "The Cortisol Problem: How Chronic Stress is Aging You", time: "10 Min" },
        { id: "deep-sleep-guide", title: "The 2026 Guide to Deep Sleep: Why 8 Hours Isn't Enough Anymore", time: "10 Min" },
        { id: "gut-skin-connection", title: "The Gut-Skin Connection: Why Your Microbiome Dictates Your Glow", time: "10 Min" },
        { id: "hair-thinning-root-causes", title: "The Root Cause of Hair Thinning: Hormones, Stress, and Solutions", time: "10 Min" },
        { id: "light-circadian-rhythm", title: "How Light Shapes Your Sleep: The Circadian Rhythm Hack", time: "10 Min" },
        { id: "mastering-nervous-system", title: "Mastering Your Nervous System: How to Turn Off 'Fight or Flight'", time: "10 Min" },
        { id: "metabolic-cgm-tracking", title: "Beyond HbA1c: Utilizing Continuous Glucose Monitors for Real-Time Agility", time: "10 Min" },
        { id: "methylene-blue-mitochondria", title: "Methylene Blue: Modulating Mitochondrial Efficiency", time: "10 Min" },
        { id: "peptide-therapy-recovery", title: "BPC-157 and TB-500: Next-Gen Peptide Stack for Accelerated Tissue Repair", time: "10 Min" },
        { id: "peptides-hair-growth", title: "Peptides for Hair Growth: The Future of Restoration", time: "10 Min" },
        { id: "red-light-therapy-skin", title: "Red Light Therapy for Skin: Does It Actually Work?", time: "10 Min" },
        { id: "reversing-skin-aging", title: "Reversing Skin Aging: The Inside-Out Approach for 2026", time: "10 Min" },
        { id: "scalp-health-protocol", title: "Scalp Health is Hair Health: The 2026 Protocol", time: "10 Min" },
      ]
    },
    {
      name: "Performance Bio-hacks",
      color: "brand-neon",
      articles: [
        { id: "adrenal-resilience-guide", title: "ADRENAL RESILIENCE GUIDE", time: "10 Min" },
        { id: "apigenin-senolytic-potential", title: "APIGENIN SENOLYTIC POTENTIAL", time: "10 Min" },
        { id: "bio-resonance-theory-2026", title: "BIO RESONANCE THEORY 2026", time: "10 Min" },
        { id: "hyperbaric-oxygen-longevity", title: "HYPERBARIC OXYGEN LONGEVITY", time: "10 Min" },
        { id: "ketone-ester-brain-optimization", title: "KETONE ESTER BRAIN OPTIMIZATION", time: "10 Min" },
        { id: "magnesium-l-threonate-cognition", title: "MAGNESIUM L THREONATE COGNITION", time: "10 Min" },
        { id: "metabolic-flexibility-architecture", title: "METABOLIC FLEXIBILITY ARCHITECTURE", time: "10 Min" },
        { id: "nmn-resveratrol-synergy", title: "NMN RESVERATROL SYNERGY", time: "10 Min" },
        { id: "peptides-tb500-repair", title: "PEPTIDES TB500 REPAIR", time: "10 Min" },
        { id: "red-light-therapy-mitochondria", title: "RED LIGHT THERAPY MITOCHONDRIA", time: "10 Min" },
      ]
    }
  ];

  return (
    <div className="bg-white dark:bg-brand-black min-h-screen text-slate-900 dark:text-white font-sans pt-32 pb-24 selection:bg-brand-neon/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-brand-neon/10 border border-brand-neon/30 rounded-full mb-6">
            <BookOpen className="w-6 h-6 text-brand-neon" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-6 leading-tight">Intelligence <span className="text-brand-neon">Hub</span></h1>
          <p className="text-xl text-slate-900 dark:text-white/60 max-w-2xl mx-auto font-light leading-relaxed">Highly actionable, science-backed protocols translated into accessible guides for immediate implementation.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {categories.map((cat, i) => (
            <div key={i} className="bg-[#121c17] border border-black/5 dark:border-black/5 dark:border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-brand-neon/30 transition-colors">
               <div className={`absolute top-0 right-0 w-32 h-32 bg-${cat.color}-500/10 blur-[50px] rounded-full`}></div>
               
               <h2 className={`text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-8 flex items-center`}>
                  <div className={`w-3 h-3 rounded-full bg-${cat.color === "brand-neon" ? "brand-neon" : cat.color + "-500"} mr-3`}></div>
                  {cat.name}
               </h2>

               <div className="space-y-4">
                  {cat.articles.map((art, j) => (
                     <Link key={j} href={`/blog/${art.id}`} className="block group bg-gray-50 dark:bg-black/40 border border-black/5 dark:border-white/5 p-5 rounded-xl hover:bg-white/5 transition-all">
                        <div className="flex justify-between items-center">
                           <h3 className="text-lg font-bold text-slate-900 dark:text-white/90 group-hover:text-brand-neon transition-colors">{art.title}</h3>
                           <ArrowRight className="w-5 h-5 text-slate-900 dark:text-white/20 group-hover:text-brand-neon transition-colors" />
                        </div>
                        <div className="flex items-center gap-4 mt-3 text-xs font-mono text-slate-900 dark:text-white/40">
                           <span className="flex items-center"><Clock className="w-3 h-3 mr-1"/> {art.time}</span>
                           <span className="flex items-center text-brand-neon/70"><Sparkles className="w-3 h-3 mr-1"/> Actionable Protocol</span>
                        </div>
                     </Link>
                  ))}
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
