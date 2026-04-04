"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, RefreshCw, Smartphone, Globe, Layers, Activity, Zap, Shield } from "lucide-react";

export default function WearableIntegrationGuide() {
  const steps = [
    { title: "Step 01: API Access", icon: <RefreshCw className="w-10 h-10 text-brand-neon" />, description: "Enable API access in your Oura/Whoop/Apple Health app for real-time data sync." },
    { title: "Step 02: Handshake Verification", icon: <Shield className="w-10 h-10 text-blue-400" />, description: "Our Hebe agent performs a secure handshake to verify device integrity." },
    { title: "Step 03: Baseline Calibration", icon: <Activity className="w-10 h-10 text-purple-400" />, description: "We analyze 14 days of historical data to establish your unique biological baseline." },
    { title: "Step 04: Real-time Orchestration", icon: <Zap className="w-10 h-10 text-brand-neon" />, description: "Live data begins flowing into your protocol stack for autonomous dose adjustment." }
  ];

  return (
    <div className="bg-white dark:bg-white dark:bg-brand-black min-h-screen text-slate-900 dark:text-white font-sans pb-32">
      <nav className="p-8"><Link href="/" className="inline-flex items-center text-brand-neon hover:text-slate-900 dark:text-white transition-colors"><ArrowLeft className="mr-2 w-5 h-5" /> Back</Link></nav>
      <main className="max-w-6xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white uppercase tracking-tighter mb-12">The <span className="text-brand-neon">Wearable Integration Guide</span></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-white/5 border border-black/10 dark:border-black/10 dark:border-white/10 p-10 rounded-2xl group hover:border-brand-neon transition-colors">
              <div className="mb-6 group-hover:scale-110 transition-transform">{step.icon}</div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white uppercase mb-4 group-hover:text-brand-neon transition-colors">{step.title}</h2>
              <p className="text-slate-900 dark:text-white/70 font-light leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}