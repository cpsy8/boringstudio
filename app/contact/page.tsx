import type { Metadata } from 'next';
import { SITE } from '@/lib/site';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Tell us about the project. We reply within one working day.',
};

const heroBg =
  'radial-gradient(70% 90% at 6% 0%, var(--accent-soft), transparent 55%),' +
  'radial-gradient(60% 80% at 100% 70%, var(--accent-2-soft), transparent 60%)';

export default function ContactPage() {
  return (
    <>
      <div
        className="pad dotfield"
        style={{
          display: 'grid',
          gridTemplateColumns: '0.9fr 1.1fr',
          gap: 46,
          position: 'relative',
          background: heroBg,
        }}
      >
        {/* left: invitation + alt contact */}
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="wf-h1 serif" style={{ fontSize: 44 }}>
            Tell us about
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--accent-ink)' }}>the project.</em>
          </h1>
          <p className="lead">
            No sales scripts. We’ll read it, think, and reply within one working day.
          </p>
          <div className="flex center gap12 mt16">
            <div className="avatars">
              <span className="av a1" />
              <span className="av a2" />
              <span className="av a3" />
            </div>
            <span className="body" style={{ fontSize: 12 }}>
              Trusted by <b style={{ color: 'var(--ink)' }}>40+</b> teams ·{' '}
              <b style={{ color: 'var(--ink)' }}>4.9★</b>
            </span>
          </div>
          <div className="grid mt32 gap16">
            <div className="card flex center gap12">
              <span className="icon-tile a1">✉</span>
              <div>
                <div className="body" style={{ color: 'var(--ink)', fontWeight: 600 }}>
                  Email
                </div>
                <div className="body">
                  <a href={`mailto:${SITE.email}`} style={{ color: 'inherit' }}>
                    {SITE.email}
                  </a>
                </div>
              </div>
            </div>
            <div className="card flex center gap12">
              <span className="icon-tile a2">☏</span>
              <div>
                <div className="body" style={{ color: 'var(--ink)', fontWeight: 600 }}>
                  Phone
                </div>
                <div className="body">{SITE.phone}</div>
              </div>
            </div>
            <div className="card flex center gap12">
              <span className="icon-tile a3">◎</span>
              <div>
                <div className="body" style={{ color: 'var(--ink)', fontWeight: 600 }}>
                  Office
                </div>
                <div className="body">{SITE.office}</div>
              </div>
            </div>
          </div>
        </div>

        {/* right: form */}
        <ContactForm />
      </div>

      {/* what happens next */}
      <div className="section reveal">
        <p className="eyebrow">What happens next</p>
        <div className="grid g3 mt16">
          <div className="card">
            <span className="icon-tile a1">01</span>
            <h3 className="wf-h3 mt16">We read &amp; reply</h3>
            <p className="body mt8">A real person responds within one working day.</p>
          </div>
          <div className="card">
            <span className="icon-tile a2">02</span>
            <h3 className="wf-h3 mt16">A 30-min call</h3>
            <p className="body mt8">We learn your goals — no pitch, no pressure.</p>
          </div>
          <div className="card">
            <span className="icon-tile a3">03</span>
            <h3 className="wf-h3 mt16">A clear proposal</h3>
            <p className="body mt8">Fixed scope, fixed price, no lock-in.</p>
          </div>
        </div>
      </div>
    </>
  );
}
