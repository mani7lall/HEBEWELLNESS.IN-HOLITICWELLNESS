import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50">
      <div className="glass-panel px-8 py-4 rounded-full flex justify-between items-center transition-all duration-300">
        
        {/* Advanced 2026 Logo mark */}
        <Link href="/" className="font-sans font-black text-2xl tracking-tighter uppercase text-white hover:text-brand-neon-cyan transition-colors relative group">
          HEBE<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-emerald">.W</span>
          <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-brand-neon group-hover:w-full transition-all duration-500"></span>
        </Link>
        
        {/* Heavy Encyclopedic Routing */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/protocols" className="text-[10px] font-bold tracking-[0.2em] text-white hover:text-brand-neon uppercase transition-colors">Protocols</Link>
          <Link href="/tools/body-map" className="text-[10px] font-bold tracking-[0.2em] text-white hover:text-brand-neon-cyan uppercase transition-colors">Topology</Link>
          <Link href="/tools/longevity-calculator" className="text-[10px] font-bold tracking-[0.2em] text-brand-neon hover:text-white uppercase transition-colors">Diagnostics</Link>
          <Link href="/glossary" className="text-[10px] font-bold tracking-[0.2em] text-brand-gold hover:text-white uppercase transition-colors">Glossary</Link>
          {/* Research Library added to navigation */}
          <Link href="/research-library" className="text-[10px] font-bold tracking-[0.2em] text-[#14B897] hover:text-white uppercase transition-colors">Research</Link>
          <Link href="/blog" className="text-[10px] font-bold tracking-[0.2em] text-white/50 hover:text-white uppercase transition-colors">Intelligence</Link>
        </div>
        
        <Link href="/tools/stack" className="text-[10px] md:text-xs font-bold tracking-widest text-brand-black uppercase bg-brand-neon px-6 py-3 rounded-full hover:bg-white transition-colors shadow-glow flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-brand-black animate-pulse"></span>
          OS Architect
        </Link>

      </div>
    </nav>
  );
}
