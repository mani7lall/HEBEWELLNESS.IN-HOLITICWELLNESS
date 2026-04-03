"use client";

import Link from 'next/link';
import { Moon, HeartPulse, Sparkles, Fingerprint, Dna, Activity, ArrowRight } from 'lucide-react';

export default function ToolsIndex() {
  const tools = [
    { id: "sleep-debt", name: "Sleep Debt Calculator", desc: "Calculate your accumulated sleep debt and get a recovery protocol.", icon: <Moon className="w-8 h-8 text-blue-400"/>, color: "blue" },
    { id: "stress-resilience", name: "Stress Resilience Quiz", desc: "Analyze your autonomic nervous system load and burnout risk.", icon: <HeartPulse className="w-8 h-8 text-emerald-400"/>, color: "emerald" },
    { id: "skin-analyzer", name: "Cellular Skin Analyzer", desc: "Assess premature skin aging based on hydration and glycation.", icon: <Sparkles className="w-8 h-8 text-rose-400"/>, color: "rose" },
    { id: "biological-age", name: "Epigenetic Age Estimator", desc: "A simulation of your true biological age vs chronological age.", icon: <Fingerprint className="w-8 h-8 text-purple-400"/>, color: "purple" },
    { id: "stack", name: "Longevity Stack Builder", desc: "Let the Hebe Omni-Agent design your custom supplement protocol.", icon: <Dna className="w-8 h-8 text-brand-neon"/>, color: "brand-neon" }
  ];

  return (
    <div className="bg-brand-black min-h-screen text-brand-cream font-sans pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-brand-neon/10 border border-brand-neon/30 rounded-full mb-6">
            <Activity className="w-6 h-6 text-brand-neon" />
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6">Diagnostic <span className="text-brand-neon">Tools</span></h1>
          <p className="text-xl text-brand-cream/60 max-w-2xl mx-auto font-light">Stop guessing about your health. Use our 2026 interactive simulators to establish your baseline and generate actionable protocols.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((t, i) => (
            <Link key={i} href={`/tools/${t.id}`} className={`bg-[#121c17] border border-${t.color}-500/20 p-8 rounded-3xl hover:bg-[#1a2922] transition-all group relative overflow-hidden`}>
              <div className={`absolute top-0 right-0 w-32 h-32 bg-${t.color}-500/10 blur-[50px] rounded-full group-hover:bg-${t.color}-500/20 transition-all`}></div>
              <div className="relative z-10">
                <div className={`w-16 h-16 bg-black border border-${t.color}-500/30 rounded-2xl flex items-center justify-center mb-6`}>
                  {t.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{t.name}</h3>
                <p className="text-brand-cream/60 text-sm mb-8">{t.desc}</p>
                <div className={`inline-flex items-center font-bold uppercase tracking-widest text-xs text-${t.color}-400 group-hover:translate-x-2 transition-transform`}>
                  Launch Tool <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
