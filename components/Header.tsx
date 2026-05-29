'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NAV, SITE } from '@/lib/site';
import ThemeToggle from './ThemeToggle';
import RhinoMark from './RhinoMark';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // normalise trailing slash for active-link comparison
  const path = pathname.replace(/\/+$/, '') || '/';
  const isActive = (href: string) => path === href || path.startsWith(href + '/');
  const isHome = path === '/';
  const ctaLabel = isHome ? 'Get started' : 'Book a call';

  return (
    <>
      <header className="wf-nav">
        <Link className="wf-logo" href="/">
          <RhinoMark size={22} />
          {SITE.name}
        </Link>

        <nav className="wf-links" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <Link className="btn accent" href="/contact" style={{ padding: '8px 16px' }}>
            {ctaLabel}
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </header>

      {open && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link className="btn accent" href="/contact" onClick={() => setOpen(false)}>
            {ctaLabel}
          </Link>
        </nav>
      )}
    </>
  );
}
