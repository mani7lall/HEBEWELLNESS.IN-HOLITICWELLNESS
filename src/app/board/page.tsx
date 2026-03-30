"use client";

import { motion } from "framer-motion";

export default function AdvisoryBoard() {
  const members = [
    {
      name: "Dr. Alistair Vance, Ph.D.",
      role: "Medical Director & Head of Formulation",
      bio: "Former Director of Neurobiology at the Swiss Longevity Institute. Pioneered the extraction techniques that decouple Delta-9 THC from high-altitude Sativa strains while preserving 99.8% of minor cannabinoids.",
      expertise: ["Endocrinology", "Cannabinoid Pharmacokinetics"]
    },
    {
      name: "Dr. Elena Rostova, M.D.",
      role: "Lead Neuroscientist",
      bio: "Specializes in neuroplasticity and cognitive decline. Her clinical trials on the synergistic effects of L-Theanine and sublingual CBG form the foundation of our Neural Focus protocol.",
      expertise: ["Neuroplasticity", "Peptide Synthesis"]
    },
    {
      name: "Dr. Arjun Patel, Ayurvedic M.D.",
      role: "Vedic Integration Architect",
      bio: "Eighth-generation Ayurvedic practitioner bridging the gap between historical botanical texts and modern sub-critical extraction methodology.",
      expertise: ["Adaptogenic Synthesis", "Himalayan Ethnobotany"]
    }
  ];

  return (
    <div className="min-h-screen pt-40 pb-32 px-6 max-w-7xl mx-auto relative z-10 selection:bg-brand-neon">
      <div className="text-center mb-24 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-neon/10 blur-[100px] rounded-[100%] pointer-events-none"></div>
        <span className="text-brand-neon font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block drop-shadow-glow">The Brain Trust</span>
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter uppercase leading-[0.9] mb-8 relative z-10">
          Scientific <br/><span className="text-transparent bg-clip-text bg-gradient-to-b from-brand-neon to-brand-emerald">Advisory</span> Board.
        </h1>
        <p className="text-xl text-brand-cream/60 max-w-2xl mx-auto font-light">
          Hebe Wellness formulations are architected by a peer-reviewed consortium of neurobiologists, pharmacokineticists, and Vedic scholars. No white-labeling. Absolute clinical rigor.
        </p>
      </div>

      <div className="space-y-8">
        {members.map((member, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            key={i} 
            className="glass-panel p-8 md:p-12 rounded-[2rem] border border-white/5 flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start group hover:border-brand-neon/30 hover:shadow-glow transition-all duration-500"
          >
            <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-48 h-48 bg-black/50 border border-brand-neon/20 rounded-2xl mb-6 relative overflow-hidden group-hover:border-brand-neon transition-colors">
                {/* Placeholder for human headshot. Abstract neon mesh instead */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,237,165,0.4),transparent_60%)]"></div>
                <div className="absolute inset-0 bg-noise opacity-50 mix-blend-overlay"></div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-1 group-hover:text-brand-neon transition-colors">{member.name}</h2>
              <span className="text-xs tracking-widest text-brand-cream/40 uppercase font-black">{member.role}</span>
            </div>
            
            <div className="w-full md:w-2/3 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-16">
              <div className="flex flex-wrap gap-2 mb-6">
                {member.expertise.map((exp, j) => (
                  <span key={j} className="text-[9px] uppercase tracking-widest font-bold px-3 py-1 bg-brand-neon/5 text-brand-neon rounded-full border border-brand-neon/20">{exp}</span>
                ))}
              </div>
              <p className="text-lg text-brand-cream/80 leading-relaxed font-light">{member.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
