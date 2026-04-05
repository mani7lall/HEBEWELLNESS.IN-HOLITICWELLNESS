// Hebe Wellness Tools - Shared Types & Utilities
// Compatible with Next.js 16 + React 19 + Tailwind v4

export interface QuizOption {
  label: string;
  value: string;
  emoji?: string;
}

export interface QuizQuestion {
  id: string;
  text: string;
  subtitle?: string;
  options: QuizOption[];
}

export interface ProductRecommendation {
  name: string;
  tagline: string;
  reason: string;
  url: string;
  price?: string;
  badge?: string;
}

export interface QuizResult {
  id: string;
  title: string;
  subtitle?: string;
  emoji: string;
  description: string;
  protocol: string[];
  products: ProductRecommendation[];
  blogUrl?: string;
  blogTitle?: string;
  shareText?: string;
  // For score-based results
  min?: number;
  max?: number;
  color?: string;
  severity?: 'low' | 'moderate' | 'high' | 'optimal';
}

export interface ToolConfig {
  id: string;
  type: 'score' | 'category' | 'multi-score';
  title: string;
  subtitle: string;
  emoji: string;
  description: string;
  questions: QuizQuestion[];
  results: QuizResult[];
  maxScore?: number;
  klaviyoListId?: string;
  completionMessage?: string;
}

// Shared utility: calculate score-based result
export function getScoreResult(answers: Record<string, string>, config: ToolConfig): QuizResult {
  const total = Object.values(answers).reduce((a, b) => a + Number(b), 0);
  const pct = config.maxScore ? (total / config.maxScore) * 100 : total;
  const result = config.results.find(r => pct >= (r.min ?? 0) && pct <= (r.max ?? 100));
  return result ?? config.results[config.results.length - 1];
}

// Shared utility: calculate category-based result (most frequent value)
export function getCategoryResult(answers: Record<string, string>, config: ToolConfig): QuizResult {
  const counts: Record<string, number> = {};
  Object.values(answers).forEach(val => {
    counts[val] = (counts[val] ?? 0) + 1;
  });
  const topCategory = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
  return config.results.find(r => r.id === topCategory) ?? config.results[0];
}

// Klaviyo / Mailchimp email capture
export async function captureEmail(name: string, email: string, toolId: string, resultId: string): Promise<boolean> {
  try {
    // POST to Netlify Function (create /netlify/functions/email-capture.ts)
    const response = await fetch('/api/email-capture', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, toolId, resultId, source: 'hebe-wellness-tool' }),
    });
    return response.ok;
  } catch {
    // Fail gracefully - don't block user from seeing results
    console.warn('Email capture failed silently');
    return false;
  }
}

// Share via URL params
export function buildShareUrl(toolPath: string, resultId: string): string {
  if (typeof window === 'undefined') return '';
  const url = new URL(window.location.origin + toolPath);
  url.searchParams.set('result', resultId);
  return url.toString();
}

// Copy to clipboard
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}

// LocalStorage helpers
export function saveProgress(toolId: string, data: object): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(`hebe_${toolId}`, JSON.stringify(data));
}

export function loadProgress<T>(toolId: string): T | null {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem(`hebe_${toolId}`);
  return raw ? JSON.parse(raw) as T : null;
}

export function clearProgress(toolId: string): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(`hebe_${toolId}`);
}
