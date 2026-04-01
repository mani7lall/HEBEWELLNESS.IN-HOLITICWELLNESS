"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, Play, Terminal, History, Settings, RefreshCcw, Activity, ShieldCheck, Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AutoblogAdmin() {
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState([
    { id: 1, topic: "The Science of Vagal Tone", status: "Published", score: 98, time: "1 hour ago" },
    { id: 2, topic: "NMN vs NR: The NAD+ War", status: "Published", score: 94, time: "2 hours ago" },
    { id: 3, topic: "Cold Plunge Mechanics", status: "Published", score: 96, time: "3 hours ago" }
  ]);

  const triggerRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setLogs([{ id: Date.now(), topic: "Autonomous Research In Progress...", status: "Writing", score: 0, time: "Just now" }, ...logs]);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#D4D4D8] font-mono p-8 md:p-16">
      <Link href="/" className="flex items-center gap-2 text-brand-neon hover:text-white transition-colors mb-20 text-xs uppercase font-bold tracking-widest">
        <ArrowLeft className="w-4 h-4"/> Back to Client View
      </Link>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-2 flex items-center gap-4">
              <Zap className="text-brand-neon w-10 h-10"/> Autoblog <span className="text-brand-neon">Command.</span>
            </h1>
            <p className="text-[#71717A] text-sm tracking-widest uppercase">Autonomous Research & Publishing Architecture v4.0</p>
          </div>
          <button 
            onClick={triggerRun}
            disabled={isRunning}
            className={`px-10 py-5 rounded-2xl flex items-center gap-4 font-black uppercase tracking-widest transition-all ${isRunning ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed' : 'bg-brand-neon text-black hover:bg-white shadow-[0_0_40px_rgba(0,245,155,0.2)]'}`}
          >
            {isRunning ? <RefreshCcw className="w-5 h-5 animate-spin"/> : <Play className="w-5 h-5"/>}
            {isRunning ? 'Synthesizing...' : 'Trigger Instant Run'}
          </button>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-12">
           <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl">
              <Activity className="text-brand-neon w-8 h-8 mb-4"/>
              <div className="text-2xl font-black text-white">READY</div>
              <div className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest mt-1">System Status</div>
           </div>
           <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl">
              <ShieldCheck className="text-brand-neon-cyan w-8 h-8 mb-4"/>
              <div className="text-2xl font-black text-white">0% AI</div>
              <div className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest mt-1">Detection Floor</div>
           </div>
           <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl">
              <History className="text-brand-gold w-8 h-8 mb-4"/>
              <div className="text-2xl font-black text-white">24m</div>
              <div className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest mt-1">Next Scheduled Outbound</div>
           </div>
           <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl">
              <Mail className="text-rose-500 w-8 h-8 mb-4"/>
              <div className="text-2xl font-black text-white">1,248</div>
              <div className="text-[10px] uppercase text-zinc-500 font-bold tracking-widest mt-1">Leads Captured</div>
           </div>
        </div>

        <div className="bg-zinc-900/30 border border-zinc-800 rounded-[2.5rem] overflow-hidden">
           <div className="px-10 py-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/50">
              <h3 className="font-black text-white uppercase tracking-widest text-sm flex items-center gap-2">
                <Terminal className="w-4 h-4 text-brand-neon"/> Propagation Log
              </h3>
              <Settings className="w-4 h-4 text-zinc-600 cursor-pointer hover:text-white transition-colors"/>
           </div>
           <div className="p-4 overflow-x-auto">
              <table className="w-full text-left">
                 <thead>
                    <tr className="text-[10px] uppercase text-zinc-500 tracking-[0.2em]">
                       <th className="p-6">Timestamp</th>
                       <th className="p-6">Research Topic</th>
                       <th className="p-6">Status</th>
                       <th className="p-6">Humanity Score</th>
                    </tr>
                 </thead>
                 <tbody className="text-sm">
                    {logs.map((log) => (
                       <tr key={log.id} className="border-t border-zinc-800/50 hover:bg-white/5 transition-colors group">
                          <td className="p-6 text-zinc-500 font-bold">{log.time}</td>
                          <td className="p-6 text-white font-black group-hover:text-brand-neon transition-colors">{log.topic}</td>
                          <td className="p-6">
                             <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${log.status === 'Published' ? 'bg-brand-neon/10 text-brand-neon' : 'bg-brand-gold/10 text-brand-gold animate-pulse'}`}>
                                {log.status}
                             </span>
                          </td>
                          <td className="p-6">
                             <div className="flex items-center gap-3">
                                <div className="flex-1 h-1 bg-zinc-800 rounded-full overflow-hidden">
                                   <div className="h-full bg-brand-neon" style={{ width: `${log.score}%` }}></div>
                                </div>
                                <span className={log.score > 90 ? 'text-brand-neon font-black' : 'text-zinc-500'}>{log.score}%</span>
                             </div>
                          </td>
                       </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>

        <div className="mt-12 p-8 border border-zinc-800 border-dashed rounded-3xl text-center text-zinc-600 text-xs uppercase font-bold tracking-[0.3em]">
           Authentication: Root Access Granted (NVIDIA NIM Cluster Active)
        </div>
      </div>
    </div>
  );
}
