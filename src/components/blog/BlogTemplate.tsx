"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Database, BookOpen, Share2, Heart, MessageSquare } from "lucide-react";

export default function BlogTemplate({ title, category, readTime, content, tier = "Advanced" }: any) {
  return (
    <div className="bg-white dark:bg-white dark:bg-brand-black min-h-screen text-slate-900 dark:text-white font-sans pb-32">
      <nav className="p-8 border-b border-black/5 dark:border-black/5 dark:border-white/5 bg-gray-50 dark:bg-gray-50 dark:bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/blog" className="inline-flex items-center text-brand-neon hover:text-slate-900 dark:text-white transition-colors group">
            <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back to Intelligence Hub
          </Link>
          <div className="flex gap-4">
             <Share2 className="w-5 h-5 text-slate-900 dark:text-white/40 hover:text-brand-neon cursor-pointer" />
             <Heart className="w-5 h-5 text-slate-900 dark:text-white/40 hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-4 mb-8">
            <span className="bg-brand-neon text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">{category}</span>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-900 dark:text-white/40 uppercase">
              <Clock className="w-3 h-3" /> {readTime} Min Read
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-900 dark:text-white/40 uppercase border-l border-black/10 dark:border-black/10 dark:border-white/10 pl-4">
              <Database className="w-3 h-3" /> {tier} Tier
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-12 leading-[1.1]">
            {title}
          </h1>

          <div className="prose prose-invert prose-lg max-w-none">
            {content.split('\n\n').map((para: string, i: number) => (
              <p key={i} className="mb-8 font-light leading-relaxed text-slate-900 dark:text-white/80">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-20 p-8 border border-brand-neon/20 bg-brand-neon/5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
             <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white uppercase mb-2">Protocol Ready?</h3>
                <p className="text-sm text-slate-900 dark:text-white/60">Generate a custom stack based on this research using our Hebe agent.</p>
             </div>
             <Link href="/tools/stack" className="px-8 py-4 bg-brand-neon text-black font-black uppercase tracking-widest text-sm rounded-sm hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,245,155,0.3)] whitespace-nowrap">
                Initialize Stack Builder
             </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}