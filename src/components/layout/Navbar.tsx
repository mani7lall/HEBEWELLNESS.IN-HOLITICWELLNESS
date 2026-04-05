"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Action Plans", link: "/protocols", hoverColor: "hover:text-brand-neon" },
    { name: "Body Map", link: "/tools/body-map", hoverColor: "hover:text-brand-neon-cyan" },
    { name: "Health Tests", link: "/tools/longevity-calculator", hoverColor: "hover:text-rose-500" },
    { name: "Dictionary", link: "/glossary", hoverColor: "hover:text-brand-gold" },
    { name: "Library", link: "/research-library", hoverColor: "hover:text-[#14B897]" },
    { name: "Health Blog", link: "/blog", hoverColor: "hover:text-slate-900 dark:text-white" }
  ];

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
        <div className="glass-panel dark:bg-black/30 bg-white/70 px-6 lg:px-8 py-4 rounded-full flex justify-between items-center transition-all duration-300 shadow-sm dark:shadow-none border border-black/5 dark:border-white/10">
          
          {/* Advanced 2026 Logo mark */}
          <Link href="/" className="font-sans font-black text-xl lg:text-2xl tracking-tighter uppercase text-slate-900 dark:text-white hover:text-brand-neon-cyan transition-colors relative group z-50">
            HEBE<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-emerald">.W</span>
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-neon group-hover:w-full transition-all duration-500"></span>
          </Link>
          
          {/* Heavy Encyclopedic Routing - Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((item, idx) => (
              <Link key={idx} href={item.link} className="text-[10px] font-bold tracking-[0.2em] uppercase transition-colors">{item.name}</Link>
            ))}
          </div>
          
          <div className="flex items-center gap-4 z-50">
            <ThemeToggle />
            <Link href="/tools/stack" className="hidden sm:flex text-[10px] md:text-xs font-bold tracking-widest text-brand-black uppercase bg-brand-neon px-6 py-3 rounded-full hover:bg-white transition-colors shadow-glow items-center gap-2 group">
              <span className="w-2 h-2 rounded-full bg-white dark:bg-white dark:bg-brand-black animate-pulse"></span>
              OS Architect
            </Link>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-slate-900 dark:text-white p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dark Glass Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 dark:bg-brand-black/95 backdrop-blur-3xl flex flex-col items-center justify-center lg:hidden">
          <div className="flex flex-col gap-8 text-center w-full px-6">
            {navLinks.map((item, idx) => (
              <Link key={idx} href={item.link} onClick={() => setIsOpen(false)} className="text-3xl font-black tracking-widest uppercase text-slate-900/80 dark:text-white/80 transition-colors">
                {item.name}
              </Link>
            ))}
            <Link href="/tools/stack" onClick={() => setIsOpen(false)} className="mt-8 text-sm font-black tracking-widest text-brand-black uppercase bg-brand-neon px-8 py-5 rounded-full shadow-glow w-full hover:bg-white transition-colors">
              Launch OS Architect
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

