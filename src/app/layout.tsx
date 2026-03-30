import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Fira_Code } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Hebe Wellness | Advanced Cellular Longevity',
  description: 'Pioneering the future of cellular longevity through premium Swiss biotechnology and ancient Vedic architecture.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${plusJakarta.variable} ${firaCode.variable} font-sans antialiased text-brand-cream bg-brand-black`}>
        <Navbar />
        <main className="relative z-10 flex flex-col min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
