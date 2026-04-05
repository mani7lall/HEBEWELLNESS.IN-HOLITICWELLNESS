"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, ArrowLeft, Heart, Zap, CheckCircle2, Sparkles, Info } from "lucide-react";
import Link from "next/link";

export default function VO2MaxCalculator() {
  const [age, setAge] = useState(30);
  const [hr, setHr] = useState(60);
  const [weight, setWeight] = useState(70);
  const [gender, setAgeGender] = useState("male");
  const [result, setResult] = useState<number | null>(null);

  const calculate = () => {
    // Simulated Cooper/Uth-Sørensen-Overgaard algorithm
    const vo2 = 15.3 * (220 - age) / hr;
    setResult(Math.round(vo2 * 10) / 10);
  };

  const getLongevityInsight = (val: number) => {
    if (val > 50) return { text: "Elite: Your cardiovascular system is in the top 5% for longevity.", color: "text-brand-neon" };
    if (val > 40) return { text: "Good: You have a strong foundation for a long healthspan.", color: "text-blue-400" };
    return { text: "Action Required: Improving VO2 max is the #1 lever for delaying all-cause mortality.", color: "text-rose-400" };
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a0f0d] text-slate-900 dark:text-white py-32 px-6 transition-all duration-500">
      <div className="max-w-3xl mx-auto">
        <Link href="/tools" className="inline-flex items-center text-brand-neon hover:text-white font-bold text-xs uppercase tracking-[0.2em] mb-12 transition-all">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Health Tests
        </Link>

        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <span className="bg-brand-neon/10 text-brand-neon text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest border border-brand-neon/20 flex items-center gap-2">
              <Sparkles className="w-3 h-3" /> Autonomous Performance Audit
            </span>
          </div>
          <Activity className="w-20 h-20 text-brand-neon mx-auto mb-8 opacity-80"/>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-[0.8]">VO2 Max <br/><span className="text-brand-neon">Estimator.</span></h1>
          <p className="text-xl font-light text-slate-600 dark:text-white/60 max-w-xl mx-auto leading-relaxed">Predict your aerobic capacity and longevity trajectory based on resting metrics.</p>
        </div>

        <div className="glass-panel p-10 rounded-[2.5rem] border border-black/5 dark:border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-neon/5 blur-[100px] -z-10 rounded-full"></div>
          
          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-neon mb-4 block">Chronological Age</label>
                  <input type="range" min="18" max="90" value={age} onChange={(e) => setAge(Number(e.target.value))} className="w-full h-1.5 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-neon" />
                  <div className="text-3xl font-black mt-4">{age}</div>
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-neon mb-4 block">Resting Heart Rate (BPM)</label>
                  <input type="range" min="40" max="100" value={hr} onChange={(e) => setHr(Number(e.target.value))} className="w-full h-1.5 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-neon" />
                  <div className="text-3xl font-black mt-4">{hr}</div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-neon mb-4 block">Body Weight (KG)</label>
                  <input type="range" min="40" max="150" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="w-full h-1.5 bg-black/10 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-neon" />
                  <div className="text-3xl font-black mt-4">{weight}</div>
                </div>
                <div>
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-neon mb-4 block">Biological Sex</label>
                  <div className="flex gap-4">
                    {["male", "female"].map((g) => (
                      <button key={g} onClick={() => setAgeGender(g)} className={`flex-1 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] border transition-all ${gender === g ? 'bg-brand-neon text-brand-black border-brand-neon' : 'border-black/10 dark:border-white/10 text-slate-400'}`}>
                        {g}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <button onClick={calculate} className="w-full py-6 bg-brand-neon text-brand-black font-black uppercase tracking-[0.3em] rounded-2xl hover:bg-white transition-all shadow-glow flex justify-center items-center gap-3">
              <Zap className="w-5 h-5"/> Run VO2 Audit
            </button>
          </div>
        </div>

        <AnimatePresence>
          {result && (
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="mt-12 p-12 bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-brand-neon/20 rounded-[3rem] text-center relative overflow-hidden">
              <div className="relative inline-block mb-8">
                <div className="w-40 h-40 rounded-full border-[10px] border-brand-neon flex items-center justify-center text-5xl font-black shadow-glow">
                  {result}
                </div>
                <Activity className="absolute -top-4 -right-4 w-12 h-12 text-brand-neon animate-pulse"/>
              </div>
              <h2 className="text-3xl font-black mb-4 uppercase tracking-tight">VO2 Max Score</h2>
              <p className={`text-lg font-light mb-10 ${getLongevityInsight(result).color}`}>
                {getLongevityInsight(result).text}
              </p>
              
              <div className="bg-brand-neon/5 p-8 rounded-3xl border border-brand-neon/10 text-left">
                <h3 className="font-black mb-4 flex items-center gap-2 uppercase tracking-widest text-xs">
                  <CheckCircle2 className="w-4 h-4 text-brand-neon"/> Zone 2 Action Plan
                </h3>
                <ul className="space-y-3 text-sm text-slate-600 dark:text-white/60 font-light">
                  <li>• Perform 150-200 minutes of Zone 2 cardio per week (conversational pace).</li>
                  <li>• Add one session of Norwegian 4x4 intervals to spike peak aerobic capacity.</li>
                  <li>• Monitor recovery via HRV to avoid overtraining and systemic inflammation.</li>
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
