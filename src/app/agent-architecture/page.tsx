"use client";

import Link from 'next/link';
import { ArrowLeft, Hexagon } from 'lucide-react';

export default function Page() {
  return (
    <div className="bg-white dark:bg-white dark:bg-brand-black min-h-screen text-slate-900 dark:text-white font-sans pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center text-brand-neon hover:text-slate-900 dark:text-white font-mono text-sm uppercase tracking-widest mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back Home
        </Link>
        
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Hexagon className="w-6 h-6 text-brand-neon" />
            <span className="font-mono text-xs text-brand-neon uppercase tracking-widest">Hebe Core Documentation</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-6">Hebe Architecture</h1>
          <p className="text-xl text-slate-900 dark:text-white/60 font-light border-l-4 border-brand-neon pl-6">How the Hebe Omni-Agent works.</p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-p:text-slate-900 dark:text-white/80 prose-headings:font-bold prose-headings:text-slate-900 dark:text-white">
          <p>Welcome to the <strong>Hebe Architecture</strong> documentation. In 2026, transparency in health architecture is not a luxury; it is a requirement. The Hebe platform is built on the premise that you should have absolute control and understanding of your biological data.</p>
          <h2>The Core Tenet</h2>
          <p>We believe that standard reactive medicine—waiting until you are broken to fix you—is obsolete. Utilizing Hebe orchestration agents, continuous biometric monitoring, and targeted orthomolecular interventions, we aim to push human healthspan to its absolute genetic limit.</p>
          <p><em>(Note: Detailed 2026 documentation for this specific module is currently being synthesized by the Hebe Omni-Agent and will be populated shortly.)</em></p>
          
          <div className="mt-12 p-8 bg-gray-50 dark:bg-gray-50 dark:bg-black/50 border border-brand-neon/20 rounded-2xl">
             <h3 className="text-brand-neon mt-0">Initialize Your Baseline</h3>
             <p className="text-sm">Stop reading and start optimizing. Use our diagnostic tools to find your current biological status.</p>
             <Link href="/tools" className="mt-4 inline-block px-6 py-3 bg-brand-neon text-black font-bold uppercase tracking-widest text-sm rounded hover:bg-white transition-colors">
               Access Diagnostic Tools
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}