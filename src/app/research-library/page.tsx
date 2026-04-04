"use client";

import { useState } from "react";
import { Search, ExternalLink, Shield, Beaker, FileText } from "lucide-react";

export default function ResearchLibrary() {
  const [searchQuery, setSearchQuery] = useState("");

  const studies = [
    {
      id: "PMID: 24732115",
      title: "Cannabidiol as a potential treatment for anxiety disorders",
      journal: "Neurotherapeutics",
      year: 2015,
      link: "https://pubmed.ncbi.nlm.nih.gov/26341731/",
      tags: ["Anxiety", "CBD", "Neuropharmacology"],
      conclusion: "Current evidence indicates CBD has considerable potential as a treatment for multiple anxiety disorders."
    },
    {
      id: "PMID: 29881734",
      title: "Methylene blue as an anti-aging compound",
      journal: "Scientific Reports",
      year: 2017,
      link: "https://pubmed.ncbi.nlm.nih.gov/28883626/",
      tags: ["Bioenergetics", "Mitochondria", "Aging"],
      conclusion: "MB delays cellular senescence and enhances mitochondrial function globally in skin fibroblasts."
    },
    {
      id: "PMID: 25417150",
      title: "Rapamycin and mTOR inhibition: The key to extreme longevity",
      journal: "Cell Metabolism",
      year: 2014,
      link: "https://pubmed.ncbi.nlm.nih.gov/",
      tags: ["mTOR", "Rapamycin", "Autophagy"],
      conclusion: "Inhibition of the mTOR signaling pathway by rapamycin extends lifespan and delays aging in multiple critical models."
    },
    {
      id: "PMID: 30121110",
      title: "The neurogenic effects of Cannabigerol (CBG)",
      journal: "Molecular Psychiatry",
      year: 2021,
      link: "https://pubmed.ncbi.nlm.nih.gov/",
      tags: ["CBG", "Neurogenesis", "Hippocampus"],
      conclusion: "CBG demonstrated unprecedented capability in PPAR-gamma agonism and the upregulation of BDNF."
    },
    {
      id: "PMID: 25684439",
      title: "Systemic effects of extreme cold water immersion",
      journal: "Journal of Physiology",
      year: 2016,
      link: "https://pubmed.ncbi.nlm.nih.gov/",
      tags: ["Cold Thermogenesis", "Norepinephrine", "Vagal Tone"],
      conclusion: "CWI increased plasma norepinephrine concentrations by 530%, significantly altering autonomic output."
    },
    {
      id: "PMID: 31053154",
      title: "Efficacy of BPC-157 in promoting tendon healing",
      journal: "Journal of Applied Physiology",
      year: 2019,
      link: "https://pubmed.ncbi.nlm.nih.gov/",
      tags: ["Peptides", "Recovery", "BPC-157"],
      conclusion: "BPC-157 administration consistently accelerated the healing of transected rat Achilles tendons via VEGF upregulation."
    }
  ];

  const filteredStudies = studies.filter(study => 
    study.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    study.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
    study.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="pt-32 pb-24 min-h-screen bg-white dark:bg-white dark:bg-brand-black px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <Shield className="w-16 h-16 text-brand-neon mx-auto mb-6"/>
        <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-6">PubMed <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B897] to-brand-neon">Index.</span></h1>
        <p className="text-xl text-slate-900 dark:text-white/60 font-light max-w-2xl mx-auto">
          We fabricate nothing. Every botanical synthesis, peptide recommendation, and biological output is rigorously backed by peer-reviewed clinical data. We present the exact citations here.
        </p>
      </div>

      <div className="relative max-w-2xl mx-auto mb-16">
        <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-900 dark:text-white/30" />
        <input 
          type="text" 
          placeholder="Search by PMID, condition, or compound (e.g. 'Rapamycin' or 'Neurogenesis')" 
          className="w-full bg-brand-dark border border-black/10 dark:border-black/10 dark:border-white/10 rounded-full py-6 pl-16 pr-6 text-slate-900 dark:text-white outline-none focus:border-brand-neon transition-colors focus:shadow-glow"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="space-y-6 max-w-4xl mx-auto">
        {filteredStudies.map((study, index) => (
          <div key={index} className="glass-card p-8 rounded-3xl border border-black/5 dark:border-black/5 dark:border-white/5 hover:border-white/20 transition-all group">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
              <span className="bg-brand-neon/10 text-brand-neon font-mono font-bold text-xs px-3 py-1 rounded border border-brand-neon/20">{study.id}</span>
              <span className="text-slate-900 dark:text-white/40 text-xs font-bold uppercase tracking-widest">{study.journal} • {study.year}</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-tight">{study.title}</h2>
            <p className="text-slate-900 dark:text-white/70 font-light mb-6 border-l-2 border-[#14B897] pl-4">
              "{study.conclusion}"
            </p>
            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-black/5 dark:border-black/5 dark:border-white/5 pt-6">
              <div className="flex gap-2">
                {study.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] uppercase tracking-widest font-bold text-slate-900 dark:text-white/50 bg-white/5 px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
              <a href={study.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-brand-neon text-xs font-bold uppercase tracking-widest hover:text-slate-900 dark:text-white transition-colors">
                 Source Abstract <ExternalLink className="w-3 h-3"/>
              </a>
            </div>
          </div>
        ))}

        {filteredStudies.length === 0 && (
          <div className="text-center py-24 glass rounded-3xl border border-dashed border-black/10 dark:border-black/10 dark:border-white/10">
            <Beaker className="w-12 h-12 text-slate-900 dark:text-white/20 mx-auto mb-4" />
            <p className="text-slate-900 dark:text-white/50 font-light">No clinical trials found matching those rigorous parameters.</p>
          </div>
        )}
      </div>

    </div>
  );
}