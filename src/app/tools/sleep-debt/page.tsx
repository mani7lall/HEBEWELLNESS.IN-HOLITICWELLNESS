"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Moon, ArrowLeft, Activity, RefreshCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SleepDebtCalculator() {
  const [idealHours, setIdealHours] = useState(8);
  const [actualHours, setActualHours] = useState(6);
  const [days, setDays] = useState(7);
  const [calculated, setCalculated] = useState(false);

  const debt = (idealHours - actualHours) * days;
  const severe = debt > 10;

  return (
    <div className="bg-brand-black min-h-screen text-brand-cream font-sans pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/tools" className="inline-flex items-center text-blue-400 hover:text-white font-mono text-sm uppercase tracking-widest mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Tools
        </Link>

        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
            <Moon className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-4">Sleep Debt <span className="text-blue-400">Calculator</span></h1>
          <p className="text-brand-cream/60 max-w-xl mx-auto">Calculate your physiological sleep debt and generate a 2026 recovery protocol to restore your autonomic nervous system.</p>
        </div>

        <div className="bg-[#121c17] border border-white/10 p-8 rounded-3xl">
          {!calculated ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              <div>
                <label className="block text-sm font-mono text-blue-400 mb-2 uppercase">Ideal Nightly Sleep (Hours)</label>
                <p className="text-xs text-brand-cream/40 mb-4">How much sleep do you need to feel 100% rested?</p>
                <input type="range" min="6" max="10" step="0.5" value={idealHours} onChange={(e) => setIdealHours(Number(e.target.value))} className="w-full accent-blue-500" />
                <div className="text-2xl font-bold text-white mt-2">{idealHours} hrs</div>
              </div>
              
              <div>
                <label className="block text-sm font-mono text-blue-400 mb-2 uppercase">Actual Average Sleep (Hours)</label>
                <p className="text-xs text-brand-cream/40 mb-4">Over the past week, how much did you actually get?</p>
                <input type="range" min="3" max="10" step="0.5" value={actualHours} onChange={(e) => setActualHours(Number(e.target.value))} className="w-full accent-blue-500" />
                <div className="text-2xl font-bold text-white mt-2">{actualHours} hrs</div>
              </div>

              <div>
                <label className="block text-sm font-mono text-blue-400 mb-2 uppercase">Timeframe (Days)</label>
                <input type="range" min="1" max="14" value={days} onChange={(e) => setDays(Number(e.target.value))} className="w-full accent-blue-500" />
                <div className="text-2xl font-bold text-white mt-2">{days} days</div>
              </div>

              <button onClick={() => setCalculated(true)} className="w-full py-4 bg-blue-500 text-white font-bold uppercase tracking-widest rounded-lg hover:bg-blue-600 transition-colors mt-8">
                Calculate Debt
              </button>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
              <h2 className="text-xl font-mono text-brand-cream/60 uppercase mb-2">Total Accumulated Sleep Debt</h2>
              <div className={`text-7xl font-black mb-6 ${severe ? 'text-red-400' : 'text-blue-400'}`}>
                {debt > 0 ? `${debt} hrs` : 'None!'}
              </div>
              
              {debt > 0 ? (
                <div className="bg-black/50 p-6 rounded-xl border border-white/5 text-left mb-8">
                  <h3 className="font-bold text-white mb-2 flex items-center"><Activity className="w-4 h-4 mr-2 text-blue-400"/> Clinical Impact</h3>
                  <p className="text-sm text-brand-cream/70 mb-4">
                    {severe 
                      ? "Critical: Your cognitive function is severely impaired. Insulin sensitivity is dropping, and cortisol is chronically elevated. Immediate intervention required."
                      : "Moderate: Your immune system is compromised and physical recovery is stunted. You may experience brain fog and afternoon crashes."}
                  </p>
                  <h3 className="font-bold text-white mb-2 flex items-center"><RefreshCcw className="w-4 h-4 mr-2 text-brand-neon"/> Recovery Protocol</h3>
                  <ul className="text-sm text-brand-cream/70 space-y-2 list-disc pl-5">
                    <li>Do not try to 'sleep in' for 14 hours. It disrupts your circadian rhythm.</li>
                    <li>Add exactly 30 minutes of extra sleep per night for the next {(debt * 2).toFixed(0)} days.</li>
                    <li>Utilize a 20-minute Non-Sleep Deep Rest (NSDR) protocol or Yoga Nidra in the afternoon to clear adenosine buildup.</li>
                  </ul>
                </div>
              ) : (
                <p className="text-brand-neon mb-8">Your sleep architecture is optimized. Maintain your current circadian rhythm.</p>
              )}

              <button onClick={() => setCalculated(false)} className="px-6 py-3 border border-white/20 text-white font-bold uppercase tracking-widest rounded-lg hover:bg-white/5 transition-colors">
                Recalculate
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
