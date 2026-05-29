import type { Metadata } from 'next';
import { Inter_Tight, Newsreader, Space_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeScript from '@/components/ThemeScript';
import ScrollReveal from '@/components/ScrollReveal';

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter-tight',
  display: 'swap',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Boring Studio — Smart tech for businesses that mean business',
    template: '%s — Boring Studio',
  },
  description: 'Websites, SEO, outreach and brand — one studio, one system, measurable results.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${newsreader.variable} ${spaceMono.variable}`}>
        <ThemeScript />
        <div className="site">
          <Header />
          {children}
          <Footer />
        </div>
        <ScrollReveal />
      </body>
    </html>
  );
}
