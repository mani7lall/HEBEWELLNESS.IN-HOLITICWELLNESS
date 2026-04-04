import { Metadata } from "next";
import InteractiveQuiz from "@/components/ui/InteractiveQuiz";

export const metadata: Metadata = {
  title: "Bio-Age Calculator | Hebe Wellness",
  description: "Calculate your biological age based on lifestyle and cellular markers to receive a personalized Hebe Protocol.",
};

export default function QuizPage() {
  return (
    <div className="bg-gradient-animated min-h-screen pt-48 pb-24 text-slate-900 dark:text-white font-sans relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-neon/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-neon font-bold tracking-[0.2em] text-xs mb-4 block uppercase flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-neon animate-pulse shadow-glow"></span>
            Clinical Assessment
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 drop-shadow-2xl">Bio-Age Diagnostics.</h1>
          <p className="text-xl text-slate-900 dark:text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
            Traditional age is chronological. Biological age is cellular. Quantify your neural and systematic biomarkers to unlock a highly personalized longevity protocol.
          </p>
        </div>

        <InteractiveQuiz />
      </div>
    </div>
  );
}