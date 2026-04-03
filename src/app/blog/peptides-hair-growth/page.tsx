"use client";

import Link from "next/link";
import { ArrowLeft, Clock, Sparkles } from "lucide-react";

export default function BlogPost() {
  return (
    <div className="bg-brand-black min-h-screen text-brand-cream font-sans pt-32 pb-24 selection:bg-amber-500/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <Link href="/blog" className="inline-flex items-center text-amber-400 hover:text-white font-mono text-sm uppercase tracking-widest mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Articles
        </Link>

        <div className="mb-12">
          <div className="flex gap-3 mb-6">
            <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase font-mono">Hair</span>
            <span className="border border-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase font-mono flex items-center"><Sparkles className="w-3 h-3 mr-1"/> Actionable Guide</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-tight">
            Peptides for Hair Growth: The Future of Restoration
          </h1>
          <div className="flex items-center gap-6 text-sm font-mono text-brand-cream/50 border-y border-white/10 py-4">
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2"/> 10 Min Read</span>
            <span>Easy to Understand • High Impact</span>
          </div>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-a:text-amber-400 prose-p:text-brand-cream/90 prose-li:text-brand-cream/90">
                    <p className="lead text-xl border-l-4 border-amber-500 pl-6 mb-10 font-light">Beyond Minoxidil, the future of hair restoration lies in cellular signaling. Peptides are short chains of amino acids that tell your body exactly what to do.</p>
          <h2>Copper Peptides (GHK-Cu)</h2>
          <p>GHK-Cu is a naturally occurring peptide that drops significantly as we age. When applied topically to the scalp, it does three things: it increases blood vessel size around the follicle, it reduces inflammation, and it blocks the hormone (DHT) responsible for male and female pattern baldness.</p>
          <h2>The Application Protocol</h2>
          <ul className="list-disc pl-5 space-y-4">
            <li><strong>Topical Serums:</strong> Look for a high-quality 1-2% Copper Peptide serum. Apply it directly to the scalp nightly.</li>
            <li><strong>The Synergistic Stack:</strong> For maximum results, apply the copper peptide serum immediately after a weekly microneedling session. This allows the peptide to penetrate deeply into the follicle bed.</li>
          </ul>
        </div>
        
        <div className="mt-16 p-8 bg-[#121c17] border border-white/10 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Ready to transform your health?</h3>
            <p className="text-brand-cream/70 mb-6">Let the Hebe Omni-Agent build a personalized protocol based on your exact needs.</p>
            <Link href="/quiz" className="inline-block px-8 py-4 bg-amber-500 text-white font-bold uppercase tracking-widest rounded-sm hover:scale-105 transition-transform">
                Start Your Free Assessment
            </Link>
        </div>
      </div>
    </div>
  );
}


