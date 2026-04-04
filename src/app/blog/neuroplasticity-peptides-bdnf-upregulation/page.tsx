import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock, Database, Heart, Share2 } from "lucide-react";

export default function NeuroplasticityBlog() {
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
          <span className="bg-brand-neon text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">Cognition</span>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-white/40 uppercase">
            <Clock className="w-3 h-3" /> 14 Min Read
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-white/40 uppercase border-l border-black/10 dark:border-white/10 pl-4">
            <Database className="w-3 h-3" /> Advanced Tier
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-12 leading-[1.1]">
          BDNF Upregulation: Peptide Pathways for Neurogenesis & Focus
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-a:text-brand-neon">
          <p className="mb-8 font-light leading-relaxed text-slate-800 dark:text-white/80 text-xl">
            Cognitive architecture in the modern era requires deliberate intervention. We explore how specifically sequenced amino acid chains (peptides) act as powerful secretagogues for Brain-Derived Neurotrophic Factor (BDNF).
          </p>

          <h2 className="text-2xl mt-12 mb-6">The Synaptic Pruning Dilemma</h2>
          <p className="mb-6 font-light leading-relaxed text-slate-800 dark:text-white/80">
            Neuroplasticity—the brain's ability to reorganize itself by forming new neural connections—declines sharply under chronic stress, sleep deprivation, and inflammatory diets. Cortisol actively shrinks the hippocampus, a brain region critical for learning and memory. This structural degradation leads to "brain fog" and impaired executive function.
          </p>

          <h2 className="text-2xl mt-12 mb-6">Peptide Interventions: Semax & Selank</h2>
          <p className="mb-6 font-light leading-relaxed text-slate-800 dark:text-white/80">
            Russian-developed nootropic peptides, Semax (derived from ACTH) and Selank (derived from Tuftsin), profoundly alter the neurochemical landscape. Unlike stimulant-based cognitive enhancers (which deplete dopamine reserves), these peptides upregulate BDNF expression and TrkB receptor density in the hippocampus. 
          </p>
          <ul className="mb-8 font-mono text-sm space-y-2 p-6 bg-slate-50 dark:bg-white/5 rounded-xl border border-black/5 dark:border-white/10">
            <li><span className="text-brand-neon font-bold">Semax:</span> Administered intranasally, significantly elevates dopamine and serotonin release.</li>
            <li><span className="text-brand-neon font-bold">Selank:</span> Acts as an anxiolytic, modulating the expression of GABA and increasing enkephalin levels.</li>
            <li><span className="text-brand-neon font-bold">Result:</span> Laser focus, rapid task-switching, and profound anxiety reduction without cardiovascular stimulation.</li>
          </ul>

          <h2 className="text-2xl mt-12 mb-6">Dihexa: The Synaptogenic Powerhouse</h2>
          <p className="mb-6 font-light leading-relaxed text-slate-800 dark:text-white/80">
            Originally developed at Washington State University to repair trauma-induced cognitive damage, Dihexa (an angiotensin IV analog) is currently the most potent synaptogenic compound known. Studies demonstrate it is orders of magnitude more effective than BDNF alone in promoting dendritic spine formation.
          </p>
        </div>

        <div className="mt-20 p-8 border border-brand-neon/20 bg-brand-neon/5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
           <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white uppercase mb-2">Build Your Cognitive Stack</h3>
              <p className="text-sm text-slate-600 dark:text-white/60">Identify the ideal neuroplasticity protocol based on your baseline HRV and sleep data.</p>
           </div>
           <Link href="/tools/stack" className="px-8 py-4 bg-brand-neon text-brand-black font-black uppercase tracking-widest text-sm rounded-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,245,155,0.3)] whitespace-nowrap">
              Run Protocol
           </Link>
        </div>
      </main>
    </div>
  );
}
