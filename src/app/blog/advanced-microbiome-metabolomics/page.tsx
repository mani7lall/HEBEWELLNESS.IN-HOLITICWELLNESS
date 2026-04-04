import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Database, Heart, Share2 } from "lucide-react";

export default function MicrobiomeBlog() {
  return (
    <div className="bg-white dark:bg-brand-black min-h-screen text-slate-900 dark:text-white font-sans pb-32 transition-colors duration-300">
      <nav className="p-8 border-b border-black/5 dark:border-white/5 bg-slate-50/50 dark:bg-black/50 backdrop-blur-md sticky top-0 z-50 transition-colors">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/blog" className="inline-flex items-center text-brand-neon hover:text-slate-900 dark:hover:text-white transition-colors group font-bold uppercase tracking-widest text-xs">
            <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Hub
          </Link>
          <div className="flex gap-4">
             <Share2 className="w-5 h-5 text-slate-400 dark:text-white/40 hover:text-brand-neon cursor-pointer" />
             <Heart className="w-5 h-5 text-slate-400 dark:text-white/40 hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-20">
        <div className="flex items-center gap-4 mb-8">
          <span className="bg-blue-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">Microbiome</span>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-white/40 uppercase">
            <Clock className="w-3 h-3" /> 16 Min Read
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-white/40 uppercase border-l border-black/10 dark:border-white/10 pl-4">
            <Database className="w-3 h-3" /> Research Tier
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-12 leading-[1.1]">
          Metabolomics & The Gut-Brain Axis: Orchestrating the "Second Brain"
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-a:text-brand-neon">
          <p className="mb-8 font-light leading-relaxed text-slate-800 dark:text-white/80 text-xl">
            You are not a single organism. You are a holobiont—a complex ecosystem composed of trillions of microbes. Manipulating this ecosystem is the fastest way to control systemic inflammation, mood, and fat oxidation.
          </p>

          <h2 className="text-2xl mt-12 mb-6">Short-Chain Fatty Acids (SCFAs) as Signaling Molecules</h2>
          <p className="mb-6 font-light leading-relaxed text-slate-800 dark:text-white/80">
            The microbiome ferments indigestible dietary fibers into Short-Chain Fatty Acids (SCFAs), primarily Butyrate, Propionate, and Acetate. These are not merely energy sources for colonocytes; they act as profound epigenetic modulators.
          </p>
          <p className="mb-6 font-light leading-relaxed text-slate-800 dark:text-white/80">
            Butyrate, in particular, functions as a histone deacetylase (HDAC) inhibitor. This means it actively changes how your DNA is packaged, switching "off" genes associated with inflammation and cancer progression while switching "on" pathways of cellular repair and immune tolerance.
          </p>

          <h2 className="text-2xl mt-12 mb-6">The Gut-Brain Vagus Nerve Highway</h2>
          <p className="mb-6 font-light leading-relaxed text-slate-800 dark:text-white/80">
            Over 90% of your body's serotonin and 50% of your dopamine are produced in the gut, not the brain. The Vagus nerve serves as a direct bidirectional communication channel between the enteric nervous system and the central nervous system.
          </p>
          <ul className="mb-8 font-mono text-sm space-y-2 p-6 bg-slate-50 dark:bg-white/5 rounded-xl border border-black/5 dark:border-white/10">
            <li><span className="text-brand-neon font-bold">Lactobacillus rhamnosus (JB-1):</span> Clinically proven to alter GABA receptor expression in the brain via the vagus nerve, radically lowering cortisol and anxiety.</li>
            <li><span className="text-brand-neon font-bold">Bifidobacterium longum:</span> Enhances stress resilience and increases resting heart rate variability (HRV).</li>
            <li><span className="text-brand-neon font-bold">Protocol Shift:</span> Moving from generic multi-strain probiotics to targeted, spore-forming psychobiotics based on genomic stool testing.</li>
          </ul>

          <h2 className="text-2xl mt-12 mb-6">Endotoxin (LPS) Driven Inflammation</h2>
          <p className="mb-6 font-light leading-relaxed text-slate-800 dark:text-white/80">
            Intestinal permeability ("leaky gut") allows Lipopolysaccharides (LPS)—toxic structural components of gram-negative bacteria—to enter the bloodstream. This triggers a massive, systemic innate immune response via Toll-Like Receptor 4 (TLR4). This low-grade endotoxemia is the primary driver of insulin resistance, brain fog, and autoimmune conditions. We seal the tight junctions using BPC-157, high-dose L-Glutamine, and Zinc Carnosine.
          </p>
        </div>

        <div className="mt-20 p-8 border border-brand-neon/20 bg-brand-neon/5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
           <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white uppercase mb-2">Repair Your Microbiome</h3>
              <p className="text-sm text-slate-600 dark:text-white/60">Input your metabolic markers to synthesize a custom biome restoration protocol.</p>
           </div>
           <Link href="/tools/stack" className="px-8 py-4 bg-brand-neon text-brand-black font-black uppercase tracking-widest text-sm rounded-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,245,155,0.3)] whitespace-nowrap">
              Begin Restoration
           </Link>
        </div>
      </main>
    </div>
  );
}
