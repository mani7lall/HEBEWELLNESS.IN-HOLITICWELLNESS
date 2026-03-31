"use client";

import { useState } from "react";
import { Clock, Sun, Moon, Activity, Zap, Droplets, Dumbbell } from "lucide-react";
import Link from 'next/link';

export default function CircadianOptimizer() {
  const [wakeTime, setWakeTime] = useState(6); // 6 AM

  const schedule = [
    { offset: 0, title: "Wake Phase & Hydrate", desc: "Drink 20oz water with 1g sea salt. Immediate vagal tone reset. Do not check phone.", icon: <Droplets className="w-6 h-6 text-blue-400"/> },
    { offset: 0.5, title: "Photoreceptor Sunlight Exposure", desc: "10-20 minutes of 100,000 lux outdoor natural light to halt melatonin production and start the 14-hour biological timer.", icon: <Sun className="w-6 h-6 text-yellow-400"/> },
    { offset: 1.5, title: "Caffeine Intake & Dopamine", desc: "Delay coffee 90 mins to allow natural cortisol to clear adenosine. Avoids the 2 PM crash entirely.", icon: <Zap className="w-6 h-6 text-orange-400"/> },
    { offset: 4, title: "Peak Cognitive Window", desc: "Deep work phase. Maximum executive function, alertness, and analytical problem solving.", icon: <Activity className="w-6 h-6 text-brand-neon-cyan"/> },
    { offset: 8, title: "Caffeine Curfew", desc: "Hard stop on all caffeine. Allows the 10-hour half-life clearance before the sleep onset phase.", icon: <Moon className="w-6 h-6 text-red-500"/> },
    { offset: 11, title: "Somatic Exercise Protocol", desc: "Resistance training. Body temperature peaks, allowing for optimal muscle force and connective tissue flexibility.", icon: <Dumbbell className="w-6 h-6 text-green-400"/> },
    { offset: 14, title: "Blue Light Blockade", desc: "Dim all overhead artificial lighting. Wear amber/red blue-blocking glasses to initiate endogenous melatonin.", icon: <Clock className="w-6 h-6 text-brand-gold"/> },
    { offset: 16, title: "Target Sleep Onset Phase", desc: "Core body temperature drops by 2°F. Melatonin peaks. Deep slow-wave sleep architecture begins.", icon: <Moon className="w-6 h-6 text-purple-400"/> },
  ];

  const formatTime = (base: number, offset: number) => {
    let t = base + offset;
    let ampm = t >= 12 && t < 24 ? "PM" : "AM";
    let hour = t % 12 || 12;
    let min = (t % 1) * 60;
    return `${Math.floor(hour)}:${min === 0 ? '00' : '30'} ${ampm}`;
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-black px-6 max-w-4xl mx-auto">
      <Link href="/tools" className="text-brand-cream/50 text-xs font-bold uppercase tracking-widest hover:text-brand-neon mb-8 inline-block">&larr; Back to Tools</Link>

      <div className="text-center mb-16">
        <Clock className="w-16 h-16 text-yellow-400 mx-auto mb-6 opacity-80"/>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-4">Circadian <br/><span className="text-yellow-400">Rhythm Optimizer.</span></h1>
        <p className="text-lg md:text-xl text-brand-cream/60 font-light max-w-2xl mx-auto leading-relaxed">
          Algorithms for aligning your autonomic nervous system with the planetary solar day. Select your ideal wake time to auto-generate the perfect 16-hour biological architecture.
        </p>
      </div>

      <div className="glass-card p-10 lg:p-14 rounded-[3rem] border border-yellow-400/20 mb-16 shadow-[0_0_50px_rgba(250,204,21,0.05)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-premium opacity-10 pointer-events-none"></div>
        <div className="relative z-10">
          <label className="text-xs lg:text-sm font-bold uppercase tracking-widest text-[#00F59B] mb-8 block text-center">Slide to adjust your daily Target Wake Time</label>
          <input 
            type="range" 
            min="4" max="10" step="0.5" 
            value={wakeTime} 
            onChange={(e) => setWakeTime(Number(e.target.value))} 
            className="w-full accent-yellow-400 mb-8 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
          />
          <div className="text-center text-5xl lg:text-7xl font-black text-white font-mono tracking-tighter drop-shadow-2xl">{formatTime(wakeTime, 0)}</div>
        </div>
      </div>

      <div className="space-y-6 relative border-l-2 border-white/10 pl-6 lg:pl-10 ml-4 lg:ml-0">
         {schedule.map((item, i) => (
           <div key={i} className="relative bg-black/40 border border-white/5 p-6 lg:p-8 rounded-3xl flex flex-col md:flex-row items-start md:items-center gap-6 lg:gap-8 hover:border-yellow-400/30 hover:bg-white/5 transition-all group">
              <div className="absolute -left-[30px] lg:-left-[42px] top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-black border-2 border-yellow-400 group-hover:bg-yellow-400 transition-colors"></div>
              
              <div className="bg-white/5 p-4 rounded-full flex-shrink-0 border border-white/10 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="flex-grow">
                 <h3 className="text-xl lg:text-2xl font-black text-white tracking-tight mb-2 group-hover:text-yellow-400 transition-colors">{item.title}</h3>
                 <p className="text-brand-cream/60 text-sm lg:text-base font-light leading-relaxed">{item.desc}</p>
              </div>
              <div className="text-left md:text-right flex-shrink-0 min-w-[120px] bg-black px-4 py-2 rounded-xl border border-white/10">
                 <span className="font-mono text-lg lg:text-xl font-black text-[#00F59B]">{formatTime(wakeTime, item.offset)}</span>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
}
