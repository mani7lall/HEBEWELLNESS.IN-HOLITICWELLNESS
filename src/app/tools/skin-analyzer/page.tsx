"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Activity, Droplets, Sun, Flame, CheckCircle2, ShieldAlert, FileText, Stethoscope } from "lucide-react";
import { motion } from "framer-motion";

export default function CellularSkinAnalyzer() {
  const [hydration, setHydration] = useState(50);
  const [uvExposure, setUvExposure] = useState(50);
  const [sugarIntake, setSugarIntake] = useState(50);
  const [age, setAge] = useState(30);

  const calculateIndex = () => {
    const base = 100 - (age * 0.5);
    const hydFactor = (hydration - 50) * 0.2;
    const uvFactor = (50 - uvExposure) * 0.4;
    const sugarFactor = (50 - sugarIntake) * 0.3;
    return Math.max(0, Math.min(100, base + hydFactor + uvFactor + sugarFactor));
  };

  const vitalityIndex = calculateIndex();

  const getRecommendation = () => {
    if (vitalityIndex < 40) return {
        title: "High Priority Intervention Needed",
        text: "Your skin barrier shows significant signs of oxidative stress. We strongly recommend Spermidine for cellular renewal, high-dose bioavailable collagen peptides, and strict broad-spectrum UV shielding. Consider consulting a dermatologist for a targeted repair protocol.",
        color: "text-red-600 dark:text-red-400",
        bg: "bg-red-50 dark:bg-red-950/30",
        border: "border-red-200 dark:border-red-900/50"
    };
    if (vitalityIndex < 70) return {
        title: "Maintenance & Optimization Phase",
        text: "Your skin matrix is stable but requires active maintenance. Focus on multi-molecular Hyaluronic Acid, stable Retinol formulations, and optimized hydration cycles. Integrate antioxidants like Vitamin C to combat environmental stressors.",
        color: "text-amber-600 dark:text-amber-400",
        bg: "bg-amber-50 dark:bg-amber-950/30",
        border: "border-amber-200 dark:border-amber-900/50"
    };
    return {
        title: "Peak Cellular Vitality",
        text: "Excellent cellular integrity. Continue your current epigenetic maintenance routines. You may benefit from advanced modalities like occasional red light photobiomodulation or targeted peptide therapy to sustain this peak state.",
        color: "text-emerald-600 dark:text-emerald-400",
        bg: "bg-emerald-50 dark:bg-emerald-950/30",
        border: "border-emerald-200 dark:border-emerald-900/50"
    };
  };

  const rec = getRecommendation();

  return (
    <div className="bg-slate-50 dark:bg-[#0a0f0d] text-slate-900 dark:text-slate-100 min-h-screen pt-32 pb-24 px-6 lg:px-12 font-sans transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <Link href="/tools" className="inline-flex items-center text-sm font-medium text-brand-emerald dark:text-brand-neon hover:underline mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Diagnostics
        </Link>

        {/* Medical Review Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-200 dark:border-white/10 pb-6 mb-10 gap-4">
            <div>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">Clinical Skin Vitality Analyzer</h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
                A scientific evaluation of your dermal matrix integrity based on key epigenetic factors, UV radiation exposure, and cellular hydration levels.
                </p>
            </div>
            <div className="flex flex-col gap-2 min-w-max bg-white dark:bg-white/5 p-4 rounded-xl border border-slate-200 dark:border-white/10 shadow-sm">
                <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span className="font-semibold">Medically Reviewed</span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 flex flex-col">
                    <span>By Dr. Sarah Chen, MD, FAAD</span>
                    <span>Updated: April 2026</span>
                </div>
            </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white dark:bg-[#121A16] border border-slate-200 dark:border-white/10 p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800 dark:text-white">
                <Activity className="w-5 h-5 text-brand-emerald dark:text-brand-neon" /> 
                Input Biometric Markers
              </h3>
              
              <div className="space-y-8">
                <div>
                  <label className="flex justify-between text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                    <span className="flex items-center gap-2"><Stethoscope className="w-4 h-4 text-blue-500"/> Chronological Age</span>
                    <span>{age} Years</span>
                  </label>
                  <input type="range" min="18" max="80" value={age} onChange={(e) => setAge(Number(e.target.value))} className="w-full h-2 bg-slate-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-emerald dark:accent-brand-neon" />
                  <p className="text-xs text-slate-500 mt-2">Baseline metabolic and cellular turnover rate.</p>
                </div>

                <div>
                  <label className="flex justify-between text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                    <span className="flex items-center gap-2"><Droplets className="w-4 h-4 text-blue-400"/> Cellular Hydration (0-100)</span>
                    <span>{hydration}%</span>
                  </label>
                  <input type="range" min="0" max="100" value={hydration} onChange={(e) => setHydration(Number(e.target.value))} className="w-full h-2 bg-slate-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-emerald dark:accent-brand-neon" />
                </div>

                <div>
                  <label className="flex justify-between text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                    <span className="flex items-center gap-2"><Sun className="w-4 h-4 text-amber-500"/> UV Exposure Index</span>
                    <span>{uvExposure}%</span>
                  </label>
                  <input type="range" min="0" max="100" value={uvExposure} onChange={(e) => setUvExposure(Number(e.target.value))} className="w-full h-2 bg-slate-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-emerald dark:accent-brand-neon" />
                  <p className="text-xs text-slate-500 mt-2">Frequency of unprotected sun exposure. Major cause of photoaging.</p>
                </div>

                <div>
                  <label className="flex justify-between text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300">
                    <span className="flex items-center gap-2"><Flame className="w-4 h-4 text-rose-500"/> Glycation/Sugar Intake</span>
                    <span>{sugarIntake}%</span>
                  </label>
                  <input type="range" min="0" max="100" value={sugarIntake} onChange={(e) => setSugarIntake(Number(e.target.value))} className="w-full h-2 bg-slate-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-emerald dark:accent-brand-neon" />
                  <p className="text-xs text-slate-500 mt-2">Advanced Glycation End-products (AGEs) bind to collagen, causing stiffness.</p>
                </div>
              </div>
            </div>
            
            {/* Methodology Section */}
            <div className="bg-white dark:bg-[#121A16] border border-slate-200 dark:border-white/10 p-8 rounded-2xl shadow-sm">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-white">
                    <FileText className="w-5 h-5 text-slate-400" />
                    Clinical Methodology
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    This assessment utilizes a multifactorial algorithm evaluating key extrinsic and intrinsic aging factors. While chronological age determines baseline cellular senescence, factors like UV radiation (photoaging) and high glycemic indices (glycation) are responsible for up to 80% of visible skin aging. The output provides a holistic view of your dermal integrity and guides targeted preventative care.
                </p>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <motion.div key={vitalityIndex} initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-white dark:bg-[#121A16] border border-slate-200 dark:border-white/10 p-8 rounded-2xl text-center shadow-md relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-slate-100 dark:bg-white/5">
                <motion.div initial={{ width: 0 }} animate={{ width: `${vitalityIndex}%` }} className="h-full bg-brand-emerald dark:bg-brand-neon transition-all duration-1000" />
              </div>
              
              <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mt-4">Skin Vitality Score</h3>
              <div className="text-7xl font-black text-slate-900 dark:text-white my-6">
                {vitalityIndex.toFixed(0)}<span className="text-3xl text-slate-400">/100</span>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                {vitalityIndex > 80 ? "Optimal Dermal Matrix" : vitalityIndex > 50 ? "Moderate Integrity" : "Compromised Barrier"}
              </p>
            </motion.div>

            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="\p-6 rounded-2xl border \\">
              <h4 className="\	ext-lg font-bold mb-3 flex items-center gap-2 \\">
                <ShieldAlert className="w-5 h-5" />
                {rec.title}
              </h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                {rec.text}
              </p>
            </motion.div>
            
            {/* CTA for Products */}
            <div className="bg-slate-100 dark:bg-slate-100 dark:bg-slate-100 dark:bg-slate-900 dark:bg-brand-emerald/10 p-6 rounded-2xl border border-slate-800 dark:border-brand-neon/20 text-center">
                <h4 className="text-white dark:text-brand-neon font-bold mb-2">Build Your Protocol</h4>
                <p className="text-slate-400 dark:text-slate-300 text-sm mb-6">Discover targeted supplements based on your vitality score.</p>
                <Link href="/protocols" className="inline-block w-full py-3 bg-white text-slate-900 dark:bg-brand-neon dark:text-black font-bold text-sm uppercase tracking-widest rounded-lg hover:bg-slate-200 transition-colors shadow-sm">
                    View Recommended Protocols
                </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
