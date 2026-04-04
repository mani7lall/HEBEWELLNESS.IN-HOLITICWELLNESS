
"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, Activity, Brain, Shield, Clock } from 'lucide-react';

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
      text: "Welcome to Hebe Wellness. I am your biological orchestration agent. How can I assist with your 2026 longevity protocol today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

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

    setTimeout(() => {
      let aiResponse = "Analyzing multi-omics data... To optimize that specific pathway, I recommend reviewing our latest clinical deep-dive on BDNF upregulation and peptide-driven tissue repair.";
      const lowerInput = input.toLowerCase();
      if (lowerInput.includes('sleep')) {
        aiResponse = "Sleep architecture optimization detected. For 2026 protocols, we focus on Glymphatic clearance using Apigenin and Magnesium L-Threonate. Shall I generate a custom stack for you?";
      } else if (lowerInput.includes('peptide')) {
        aiResponse = "Peptide therapy identified. BPC-157 and TB-500 are standard in our 2026 tissue repair matrix.";
      }
      const aiMsg: Message = { id: Date.now().toString(), text: aiResponse, sender: 'ai', timestamp: new Date() };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="mb-4 w-[380px] h-[550px] bg-white dark:bg-slate-900 border border-gray-200 dark:border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            <div className="p-4 bg-brand-neon text-black flex justify-between items-center"><span className="font-black uppercase tracking-widest text-xs">Hebe Omni-Agent</span><button onClick={() => setIsOpen(false)}><X className="w-5 h-5" /></button></div>
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-brand-neon text-black' : 'bg-slate-100 dark:bg-white/10 text-slate-900 dark:text-white'}`}>{msg.text}</div>
                </div>
              ))}
            </div>
            <form onSubmit={handleSend} className="p-4 border-t border-gray-200 dark:border-white/10 flex gap-2"><input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask..." className="flex-1 bg-slate-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-full px-4 py-2 text-sm text-slate-900 dark:text-white" /><button type="submit" className="bg-brand-neon text-black p-2 rounded-full"><Send className="w-5 h-5" /></button></form>
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={() => setIsOpen(!isOpen)} className="w-16 h-16 bg-brand-neon rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"><MessageCircle className="text-black w-8 h-8" /></button>
    </div>
  );
}
