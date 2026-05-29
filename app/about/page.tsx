import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
  description: 'Digital growth, made simple. Our philosophy and how we work.',
};

const heroBg =
  'radial-gradient(70% 90% at 8% 0%, var(--accent-soft), transparent 55%),' +
  'radial-gradient(60% 80% at 100% 60%, var(--accent-3-soft), transparent 60%)';

const ctaBg =
  'radial-gradient(80% 120% at 50% 0%, var(--accent-soft), var(--card-bg) 60%),' +
  'radial-gradient(50% 80% at 14% 100%, var(--accent-2-soft), transparent 60%),' +
  'radial-gradient(50% 80% at 86% 100%, var(--accent-3-soft), transparent 60%)';

export default function AboutPage() {
  return (
    <>
      {/* hero */}
      <div
        className="pad dotfield"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 38,
          alignItems: 'center',
          position: 'relative',
          background: heroBg,
        }}
      >
        <div>
          <p className="eyebrow">About</p>
          <h1 className="wf-h1 serif">
            Digital growth,
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--accent-ink)' }}>made simple.</em>
          </h1>
          <p className="lead">
            Because the best digital work is dependable and effective. No drama, no bloat — just
            results that compound.
          </p>
          <div className="flex gap8 mt24">
            <span className="badge a1">Independent</span>
            <span className="badge a2">Remote-first</span>
            <span className="badge a3">8 yrs</span>
          </div>
        </div>
        <div className="ph glow" style={{ aspectRatio: '1 / 1', position: 'relative' }}>
          <span className="ph-tag">AI VISUAL</span>
          <span
            className="badge a2"
            style={{ position: 'absolute', left: -10, top: 24, transform: 'rotate(-5deg)' }}
          >
            clear process
          </span>
          <span
            className="badge a3"
            style={{ position: 'absolute', right: -8, bottom: 30, transform: 'rotate(4deg)' }}
          >
            real results
          </span>
        </div>
      </div>

      {/* philosophy */}
      <div className="section reveal">
        <p className="eyebrow">Our philosophy</p>
        <h2 className="wf-h2">Three things we believe.</h2>
        <div className="grid g3 mt24">
          <div
            className="card"
            style={{
              background: 'linear-gradient(165deg, var(--accent-soft), var(--card-bg) 82%)',
              borderColor: 'color-mix(in oklch,var(--accent) 22%,white)',
            }}
          >
            <span className="icon-tile a1">◔</span>
            <h3 className="wf-h3 mt16">Clarity beats noise</h3>
            <p className="body mt8">Clarity converts better than noise.</p>
          </div>
          <div
            className="card"
            style={{
              background: 'linear-gradient(165deg, var(--accent-2-soft), var(--card-bg) 82%)',
              borderColor: 'color-mix(in oklch,var(--accent-2) 22%,white)',
            }}
          >
            <span className="icon-tile a2">⚡</span>
            <h3 className="wf-h3 mt16">Speed is a feature</h3>
            <p className="body mt8">Fast pages, fast replies, fast launches.</p>
          </div>
          <div
            className="card"
            style={{
              background: 'linear-gradient(165deg, var(--accent-3-soft), var(--card-bg) 82%)',
              borderColor: 'color-mix(in oklch,var(--accent-3) 22%,white)',
            }}
          >
            <span className="icon-tile a3">◈</span>
            <h3 className="wf-h3 mt16">Measure everything</h3>
            <p className="body mt8">Opinions are cheap; data decides.</p>
          </div>
        </div>
      </div>

      {/* process timeline */}
      <div
        className="section dotfield reveal"
        style={{ display: 'grid', gridTemplateColumns: '0.8fr 1.2fr', gap: 40 }}
      >
        <div>
          <p className="eyebrow">How we work</p>
          <h2 className="wf-h2 serif">Discover → Design → Build → Grow.</h2>
          <p className="lead">No mystery, no bloat. The same clear path on every project.</p>
          <div className="flex gap8 mt24">
            <span className="badge a1">Discover</span>
            <span className="badge a2">Design</span>
            <span className="badge">Build</span>
            <span className="badge a3">Grow</span>
          </div>
        </div>
        <div className="timeline">
          <div className="tl-node">
            <div className="tl-year">01 · Discover</div>
            <h3 className="wf-h3 mt8">Understand the business</h3>
            <p className="body mt8">We learn the business before pixels.</p>
          </div>
          <div className="tl-node">
            <div className="tl-year" style={{ color: 'var(--accent-2-ink)' }}>
              02 · Design
            </div>
            <h3 className="wf-h3 mt8">A direction you can sign off</h3>
            <p className="body mt8">Wireframe to sign-off, smoothly.</p>
          </div>
          <div className="tl-node">
            <div className="tl-year">03 · Build</div>
            <h3 className="wf-h3 mt8">Fast and accessible</h3>
            <p className="body mt8">Performance budget baked in by default.</p>
          </div>
          <div className="tl-node">
            <div className="tl-year" style={{ color: 'var(--accent-3-ink)' }}>
              04 · Grow
            </div>
            <h3 className="wf-h3 mt8">Iterate on real numbers</h3>
            <p className="body mt8">SEO + outreach, measured and improved.</p>
          </div>
        </div>
      </div>

      {/* credibility stat strip */}
      <div className="section reveal">
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div className="statstrip">
            <div className="stat">
              <div className="flex between center">
                <div className="big">40+</div>
                <span
                  className="icon-tile a1"
                  style={{ width: 30, height: 30, borderRadius: 8, fontSize: 13 }}
                >
                  ◧
                </span>
              </div>
              <div className="lbl">projects shipped</div>
            </div>
            <div className="stat">
              <div className="big">8 yrs</div>
              <div className="lbl">in practice</div>
            </div>
            <div className="stat">
              <div className="flex between center">
                <div className="big">2.1s</div>
                <span className="trend b">fast</span>
              </div>
              <div className="lbl">avg load time</div>
            </div>
            <div className="stat">
              <div className="flex between center">
                <div className="big" style={{ color: 'var(--accent-2-ink)' }}>
                  4.9★
                </div>
                <span className="trend up">▲</span>
              </div>
              <div className="lbl">client rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* featured quote */}
      <div className="section tint-1 reveal">
        <div
          className="card"
          style={{ background: 'var(--card-bg)', textAlign: 'center', padding: 40 }}
        >
          <span className="badge a1">Why clients pick us</span>
          <h2
            className="wf-h2 serif mt16"
            style={{ fontWeight: 500, maxWidth: '34ch', marginLeft: 'auto', marginRight: 'auto' }}
          >
            “They made the whole thing feel effortless. We launched faster and the leads just
            started arriving.”
          </h2>
          <div className="flex center gap12" style={{ justifyContent: 'center', marginTop: 20 }}>
            <span
              className="av a1"
              style={{ width: 40, height: 40, margin: 0, borderColor: 'var(--card-bg)' }}
            />
            <div style={{ textAlign: 'left' }}>
              <div className="wf-h3" style={{ fontSize: 14 }}>
                Practice Manager
              </div>
              <div className="body" style={{ fontSize: 12 }}>
                Northgate Dental
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="section" style={{ padding: '0 46px 46px' }}>
        <div
          className="card reveal"
          style={{
            padding: 44,
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            background: ctaBg,
            borderColor: 'color-mix(in oklch,var(--accent) 22%,white)',
          }}
        >
          <span className="badge a3">Let’s build</span>
          <h2 className="wf-h2 serif mt16">Like how we think?</h2>
          <p className="lead" style={{ margin: '14px auto 0' }}>
            Tell us about the project — we’ll reply within one working day.
          </p>
          <div className="flex gap12" style={{ justifyContent: 'center', marginTop: 24 }}>
            <Link className="btn accent" href="/contact">
              Let’s talk →
            </Link>
            <Link className="btn ghost" href="/services">
              See services
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
