import Link from 'next/link';
import { SITE } from '@/lib/site';
import NewsletterForm from './NewsletterForm';
import RhinoMark from './RhinoMark';

export default function Footer() {
  return (
    <footer className="wf-foot-rich">
      <div className="foot-top">
        <div className="foot-brand">
          <Link className="wf-logo" href="/">
            <RhinoMark size={24} />
            {SITE.name}
          </Link>
          <p className="foot-tag">{SITE.tagline}</p>
          <div className="flex center gap8 mt16">
            <span className="pulse" style={{ width: 8, height: 8 }} />
            <span className="body" style={{ fontSize: 12 }}>
              {SITE.booking}
            </span>
          </div>
        </div>
        <div className="foot-col">
          <h4>Services</h4>
          <Link href="/services/website-building">Website building</Link>
          <Link href="/services/seo-reach-out">SEO &amp; reach-out</Link>
          <Link href="/services/brand-building">Brand building</Link>
          <Link href="/services/care-hosting">Care &amp; hosting</Link>
        </div>
        <div className="foot-col">
          <h4>Studio</h4>
          <Link href="/about">About</Link>
          <Link href="/works">Selected work</Link>
          <Link href="/about">Process</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="foot-col foot-news">
          <h4>Stay in the loop</h4>
          <p className="body" style={{ margin: '0 0 12px' }}>
            Occasional notes on fast, modern web. No spam.
          </p>
          <NewsletterForm />
        </div>
      </div>
      <div className="foot-bottom">
        <div className="flex center gap8">
          <RhinoMark size={16} />
          <span>{SITE.name} · © 2026 · Remote-first · GMT</span>
        </div>
        <div className="foot-social">
          <a className="s" href="#" aria-label="X">
            ✕
          </a>
          <a className="s" href="#" aria-label="LinkedIn">
            in
          </a>
          <a className="s" href="#" aria-label="Dribbble">
            ◎
          </a>
        </div>
        <div className="flex gap16">
          <a className="foot-col" style={{ display: 'inline', padding: 0 }} href="#">
            Privacy
          </a>
          <a className="foot-col" style={{ display: 'inline', padding: 0 }} href="#">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
