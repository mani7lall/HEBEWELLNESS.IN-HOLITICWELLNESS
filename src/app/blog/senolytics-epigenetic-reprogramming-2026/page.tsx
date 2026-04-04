import React from "react";

import Link from "next/link";
import { ArrowLeft, Clock, Database, Heart, Share2 } from "lucide-react";

export default function SenolyticsBlog() {
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
          <span className="bg-purple-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">Longevity</span>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-white/40 uppercase">
            <Clock className="w-3 h-3" /> 18 Min Read
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-white/40 uppercase border-l border-black/10 dark:border-white/10 pl-4">
            <Database className="w-3 h-3" /> Clinical Tier
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-12 leading-[1.1]">
          Senolytic Therapies & Epigenetic Reprogramming: The 2026 Consensus
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tight prose-a:text-brand-neon">
          <p className="mb-8 font-light leading-relaxed text-slate-800 dark:text-white/80 text-xl">
            The biological paradigm has shifted. In 2026, we no longer view aging as an inevitable decay of cellular integrity, but as a genetically orchestrated program that can be halted—and in specific tissue types, reversed.
          </p>

          <h2 className="text-2xl mt-12 mb-6">The Senescence-Associated Secretory Phenotype (SASP)</h2>
          <p className="mb-6 font-light leading-relaxed text-slate-800 dark:text-white/80">
            As cells undergo stress, DNA damage, or telomere attrition, they enter a state of permanent cell cycle arrest known as senescence. Rather than quietly dying through apoptosis, these "zombie cells" secrete a toxic cocktail of pro-inflammatory cytokines, chemokines, and proteases—the SASP. This inflammatory storm accelerates the aging of surrounding healthy cells, driving systemic dysfunction.
          </p>

          <h2 className="text-2xl mt-12 mb-6">Targeted Senolytic Clearance</h2>
          <p className="mb-6 font-light leading-relaxed text-slate-800 dark:text-white/80">
            First-generation senolytics like Dasatinib and Quercetin paved the way, but 2026 protocols rely on highly specific, targeted approaches. We utilize advanced flavonoid complexes (optimized Fisetin with liposomal delivery) alongside senolytic peptides that actively induce apoptosis exclusively in senescent cells by targeting the BCL-2 anti-apoptotic protein family.
          </p>
          <ul className="mb-8 font-mono text-sm space-y-2 p-6 bg-slate-50 dark:bg-white/5 rounded-xl border border-black/5 dark:border-white/10">
            <li><span className="text-brand-neon font-bold">Protocol 1:</span> Liposomal Fisetin (20mg/kg) - 3 days ON, 28 days OFF</li>
            <li><span className="text-brand-neon font-bold">Protocol 2:</span> Quercetin Phytosome (1000mg) paired with Dasatinib (prescriptive)</li>
            <li><span className="text-brand-neon font-bold">Biomarker Target:</span> Reduction in systemic IL-6, TNF-alpha, and CRP.</li>
          </ul>

          <h2 className="text-2xl mt-12 mb-6">Epigenetic Clock Reversal (Horvath Reset)</h2>
          <p className="mb-6 font-light leading-relaxed text-slate-800 dark:text-white/80">
            Once the senescent burden is cleared, the tissue environment is primed for epigenetic reprogramming. We deploy high-dose NAD+ precursors (NMN/NR) paired with Sirtuin-activating compounds (STACs) such as micro-dosed Resveratrol and Pterostilbene. This combination aggressively repairs double-strand DNA breaks, effectively rewinding the methylation markers that dictate your biological age.
          </p>
        </div>

        <div className="mt-20 p-8 border border-brand-neon/20 bg-brand-neon/5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
           <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white uppercase mb-2">Ready to clear senescent cells?</h3>
              <p className="text-sm text-slate-600 dark:text-white/60">Generate a custom senolytic dosing schedule using the Hebe protocol builder.</p>
           </div>
           <Link href="/tools/stack" className="px-8 py-4 bg-brand-neon text-brand-black font-black uppercase tracking-widest text-sm rounded-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,245,155,0.3)] whitespace-nowrap">
              Initialize Builder
           </Link>
        </div>
      </main>
    </div>
  );
}
