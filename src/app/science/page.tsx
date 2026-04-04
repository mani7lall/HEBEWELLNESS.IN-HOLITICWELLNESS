import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinical Dossiers | Hebe Wellness",
  description: "Peer-reviewed observations of Hebe formulations in clinical settings.",
};

export default function SciencePage() {
  return (
    <div className="bg-sage-950 min-h-screen pt-32 pb-24 text-sand-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center mb-16">
        <span className="text-earth-500 font-medium tracking-[0.2em] text-sm mb-4 block uppercase">Clinical Truth</span>
        <h1 className="text-5xl md:text-7xl font-serif mb-6 text-sand-50">Scientific Archives.</h1>
        <p className="text-xl text-sand-50/70 max-w-2xl mx-auto font-light">
          We believe in radical transparency. Explore our whitepapers, third-party lab results, and peer-reviewed case studies.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-6">
        <div className="bg-sage-900/40 border border-sand-50/10 p-8 rounded-3xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 hover:bg-sage-900/60 transition-colors">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-earth-500/20 text-earth-500 text-xs px-3 py-1 rounded-full uppercase tracking-wider font-medium">Whitepaper</span>
              <span className="text-sand-50/50 text-sm">45 Pages • PDF</span>
            </div>
            <h3 className="text-2xl font-serif text-sand-50 mb-2">The ECS Master Blueprint</h3>
            <p className="text-sand-50/70 text-sm max-w-xl">A comprehensive analysis of the human endocannabinoid system and its response to high-altitude Himalayan hemp extracts.</p>
          </div>
          <button className="bg-sand-50 text-sage-950 px-6 py-3 rounded-full text-sm tracking-widest uppercase font-medium hover:bg-sand-200 transition-colors shrink-0">
            Download PDF
          </button>
        </div>

        <div className="bg-sage-900/40 border border-sand-50/10 p-8 rounded-3xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 hover:bg-sage-900/60 transition-colors">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-sage-500/20 text-sage-100 text-xs px-3 py-1 rounded-full uppercase tracking-wider font-medium">Case Study</span>
              <span className="text-sand-50/50 text-sm">Clinical Observation</span>
            </div>
            <h3 className="text-2xl font-serif text-sand-50 mb-2">Sleep Architecture: A 90-Day Overview</h3>
            <p className="text-sand-50/70 text-sm max-w-xl">Observational data on REM cycle improvements using the HEAL+ 1:4 Formulation.</p>
          </div>
          <button className="border border-sand-50/30 text-sand-50 px-6 py-3 rounded-full text-sm tracking-widest uppercase font-medium hover:bg-sand-50/10 transition-colors shrink-0">
            View Online
          </button>
        </div>
      </div>
    </div>
  );
}