import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '@/lib/content';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected work — clear builds, loud results across clinics, retail and B2B.',
};

const heroBg =
  'radial-gradient(90% 70% at 50% -10%, var(--accent-soft), transparent 55%),' +
  'radial-gradient(55% 50% at 14% 30%, var(--accent-2-soft), transparent 60%),' +
  'radial-gradient(55% 50% at 86% 26%, var(--accent-3-soft), transparent 60%)';

const ctaBg =
  'radial-gradient(80% 120% at 50% 0%, var(--accent-soft), var(--card-bg) 60%),' +
  'radial-gradient(50% 80% at 14% 100%, var(--accent-2-soft), transparent 60%),' +
  'radial-gradient(50% 80% at 86% 100%, var(--accent-3-soft), transparent 60%)';

const vAccent = (v: string) => (v === 'Clinic' ? 'a1' : v === 'Retail' ? 'a2' : 'a3');

export default function WorksPage() {
  return (
    <>
      {/* hero */}
      <div
        className="pad dotfield"
        style={{
          textAlign: 'center',
          paddingTop: 46,
          paddingBottom: 34,
          position: 'relative',
          background: heroBg,
        }}
      >
        <p className="eyebrow">Selected work</p>
        <h1 className="wf-h1 mt8" style={{ fontSize: 46 }}>
          Clear work,{' '}
          <em
            style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--accent-ink)' }}
          >
            loud results.
          </em>
        </h1>
        <p className="lead" style={{ margin: '16px auto 0' }}>
          A few recent projects — across clinics, retail and B2B. Real builds, measured outcomes.
        </p>
      </div>

      {/* project grid */}
      <div className="section reveal">
        <div className="grid g3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/works/${p.slug}`}
              className="card"
              style={{ padding: 0, overflow: 'hidden', textDecoration: 'none', color: 'inherit' }}
            >
              <div
                className={`ph ${p.ph}`}
                style={{ aspectRatio: '4 / 3', border: 'none', borderRadius: 0 }}
              >
                [ project ]
              </div>
              <div style={{ padding: 14 }}>
                <div className="chiprow">
                  <span className={`badge ${vAccent(p.vertical)}`}>{p.vertical}</span>
                  <span className="badge">{p.scope}</span>
                </div>
                <h3 className="wf-h3 mt12">{p.name}</h3>
                <p className="body mt8" style={{ fontSize: 12 }}>
                  {p.summary}
                </p>
                <span className={`trend ${p.resultTone} mt12`}>{p.result}</span>
              </div>
            </Link>
          ))}
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
          <span className="badge a2">No obligation</span>
          <h2 className="wf-h2 mt16">Want results like these?</h2>
          <p className="lead" style={{ margin: '14px auto 0' }}>
            Tell us about the project — we’ll reply within one working day.
          </p>
          <div className="flex gap12" style={{ justifyContent: 'center', marginTop: 24 }}>
            <Link className="btn accent" href="/contact">
              Get started →
            </Link>
            <a className="btn ghost" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
