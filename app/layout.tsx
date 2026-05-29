import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeScript from '@/components/ThemeScript';
import ScrollReveal from '@/components/ScrollReveal';

// Self-hosted fonts (woff2 in app/fonts) — no Google CDN, no build-time fetch.
const interTight = localFont({
  variable: '--font-inter-tight',
  display: 'swap',
  src: [
    { path: './fonts/InterTight-400.woff2', weight: '400', style: 'normal' },
    { path: './fonts/InterTight-500.woff2', weight: '500', style: 'normal' },
    { path: './fonts/InterTight-600.woff2', weight: '600', style: 'normal' },
    { path: './fonts/InterTight-700.woff2', weight: '700', style: 'normal' },
    { path: './fonts/InterTight-800.woff2', weight: '800', style: 'normal' },
  ],
});

const newsreader = localFont({
  variable: '--font-newsreader',
  display: 'swap',
  src: [
    { path: './fonts/Newsreader-400.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Newsreader-500.woff2', weight: '500', style: 'normal' },
    { path: './fonts/Newsreader-600.woff2', weight: '600', style: 'normal' },
    { path: './fonts/Newsreader-italic-400.woff2', weight: '400', style: 'italic' },
    { path: './fonts/Newsreader-italic-500.woff2', weight: '500', style: 'italic' },
  ],
});

const spaceMono = localFont({
  variable: '--font-space-mono',
  display: 'swap',
  src: [
    { path: './fonts/SpaceMono-400.woff2', weight: '400', style: 'normal' },
    { path: './fonts/SpaceMono-700.woff2', weight: '700', style: 'normal' },
  ],
});

export const metadata: Metadata = {
  title: {
    default: 'Boring Studio',
    template: '%s — Boring Studio',
  },
  description: 'Websites, SEO, outreach and brand — one studio, one system, measurable results.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${newsreader.variable} ${spaceMono.variable}`}
    >
      <body>
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
