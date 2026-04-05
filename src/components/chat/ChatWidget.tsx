"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, Activity, Brain, Shield, Clock, Database, FlaskConical, Target, Zap } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "System Online. Hebe Biological Orchestration Agent ready. I am currently monitoring 14,000+ clinical biomarkers. How can I optimize your longevity protocol today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [statusMessage, setStatusMessage] = useState('AGENT IDLE');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const getAIResponse = (input: string) => {
    const lower = input.toLowerCase();
    
    if (lower.includes('sleep') || lower.includes('insomnia')) {
      return "Sleep architecture analysis initiated. To optimize glymphatic clearance for 2026 protocols, I suggest a stack of Apigenin (50mg), Magnesium L-Threonate (2g), and Theanine (200mg) 45 minutes before onset. Shall I generate a specific thermal regulation guide for your wearable?";
    }
    
    if (lower.includes('peptide') || lower.includes('bpc') || lower.includes('tb500')) {
      return "Peptide therapy identified. For accelerated tissue repair and systemic inflammation reduction, the BPC-157 / TB-500 synergy is current standard. BPC-157 at 250mcg twice daily modulates fibroblast migration. Check our clinical blog on peptide pathways for dosing precision.";
    }
    
    if (lower.includes('age') || lower.includes('biological') || lower.includes('epigenetic')) {
      return "Biological age reversal module engaged. We focus on DNA methylation sites via the Horvath-v2 clock. Epigenetic reprogramming requires consistent senolytic clearance (Fisetin/Quercetin) and mTOR modulation. Have you uploaded your latest GrimAge biomarkers?";
    }

    if (lower.includes('focus') || lower.includes('brain') || lower.includes('cognition')) {
      return "Cognitive architecture optimization. For executive function enhancement, I recommend Alpha-GPC and Uridine Monophosphate to support acetylcholine synthesis. Pairing this with BDNF upregulation via intense exercise or 7,8-DHF is recommended.";
    }

    if (lower.includes('hello') || lower.includes('hi')) {
      return "Greetings. I am Hebe. I provide real-time orchestration for your longevity and performance protocols. Type a topic like 'Sleep', 'Peptides', or 'Biological Age' to begin our analysis.";
    }

    return "Processing request through biological interaction matrix... That inquiry requires specific biomarker context. However, based on general 2026 longevity standards, I recommend reviewing our 'Intelligence Hub' for peer-reviewed deep dives on that specific metabolic pathway.";
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    
    const statuses = [
      "ACCESSING MULTI-OMICS DATABASE...",
      "SIMULATING PROTEIN INTERACTIONS...",
      "CALCULATING SYNERGISTIC LOAD...",
      "VERIFYING CLINICAL TRIALS..."
    ];
    
    let statusIdx = 0;
    const statusInterval = setInterval(() => {
      setStatusMessage(statuses[statusIdx % statuses.length]);
      statusIdx++;
    }, 400);

    setTimeout(() => {
      clearInterval(statusInterval);
      const aiResponse = getAIResponse(userMsg.text);
      const aiMsg: Message = { 
        id: (Date.now() + 1).toString(), 
        text: aiResponse, 
        sender: 'ai', 
        timestamp: new Date() 
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
      setStatusMessage('AGENT IDLE');
    }, 1800);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.9, y: 20 }} 
            className="mb-4 w-[400px] h-[600px] bg-white dark:bg-slate-900 border border-gray-200 dark:border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 bg-brand-neon text-black flex justify-between items-center shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center relative">
                  <Brain className="w-6 h-6" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-brand-neon animate-pulse"></div>
                </div>
                <div>
                  <h3 className="font-black uppercase tracking-tighter text-sm leading-none">Hebe Omni-Agent</h3>
                  <span className="text-[10px] font-mono opacity-60">VER 2026.4.05</span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="hover:rotate-90 transition-transform p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Status Bar */}
            <div className="px-6 py-2 bg-slate-50 dark:bg-black/20 border-b border-gray-100 dark:border-white/5 flex justify-between items-center">
              <span className="text-[9px] font-mono text-slate-400 dark:text-white/40 flex items-center gap-1">
                <Activity className="w-3 h-3" /> {statusMessage}
              </span>
              <div className="flex gap-1">
                <div className="w-1 h-1 rounded-full bg-brand-neon animate-ping"></div>
                <div className="w-1 h-1 rounded-full bg-blue-400 animate-ping [animation-delay:0.2s]"></div>
              </div>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-brand-neon text-black font-bold shadow-lg rounded-tr-none' 
                      : 'bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white border border-gray-200 dark:border-white/10 rounded-tl-none'
                  }`}>
                    {msg.sender === 'ai' && <Sparkles className="w-4 h-4 mb-2 text-brand-neon" />}
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 dark:bg-white/5 p-4 rounded-2xl rounded-tl-none border border-gray-200 dark:border-white/10 flex gap-2">
                    <div className="w-2 h-2 bg-brand-neon rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-brand-neon rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-brand-neon rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="px-6 py-2 flex gap-2 overflow-x-auto scrollbar-hide no-scrollbar">
              {['Sleep Protocol', 'Peptides', 'Bio-Age', 'Cognitive'].map((tag) => (
                <button 
                  key={tag}
                  onClick={() => setInput(tag)}
                  className="whitespace-nowrap px-3 py-1 bg-slate-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-full text-[10px] uppercase font-bold text-slate-500 dark:text-white/40 hover:border-brand-neon hover:text-brand-neon transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-6 border-t border-gray-100 dark:border-white/5 flex gap-3">
              <div className="flex-1 relative">
                <input 
                  type="text" 
                  value={input} 
                  onChange={(e) => setInput(e.target.value)} 
                  placeholder="Inquire with Hebe..." 
                  className="w-full bg-slate-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-white/20 focus:outline-none focus:border-brand-neon transition-colors" 
                />
              </div>
              <button 
                type="submit" 
                className="bg-brand-neon text-black p-3 rounded-xl hover:scale-105 transition-transform shadow-lg"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="group w-20 h-20 bg-brand-neon rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(0,245,155,0.4)] hover:scale-110 transition-transform relative"
      >
        <div className="absolute inset-0 rounded-full border border-brand-neon animate-ping opacity-20"></div>
        <MessageCircle className="text-black w-10 h-10 group-hover:rotate-12 transition-transform" />
        {isOpen && (
           <motion.div 
             initial={{ opacity: 0, scale: 0 }}
             animate={{ opacity: 1, scale: 1 }}
             className="absolute -top-1 -right-1 w-6 h-6 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center border-2 border-brand-neon"
           >
             <X className="w-4 h-4 text-brand-neon" />
           </motion.div>
        )}
      </button>
    </div>
  );
}
