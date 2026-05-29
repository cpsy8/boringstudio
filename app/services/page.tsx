import type { Metadata } from 'next';
import Link from 'next/link';
import { services, verticals } from '@/lib/content';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Everything under one roof: website building, SEO & reach-out, brand building, analytics, care & hosting.',
};

const heroBg =
  'radial-gradient(90% 70% at 50% -10%, var(--accent-soft), transparent 55%),' +
  'radial-gradient(55% 50% at 14% 30%, var(--accent-2-soft), transparent 60%),' +
  'radial-gradient(55% 50% at 86% 26%, var(--accent-3-soft), transparent 60%)';

const ctaBg =
  'radial-gradient(80% 120% at 50% 0%, var(--accent-soft), var(--card-bg) 60%),' +
  'radial-gradient(50% 80% at 14% 100%, var(--accent-2-soft), transparent 60%),' +
  'radial-gradient(50% 80% at 86% 100%, var(--accent-3-soft), transparent 60%)';

export default function ServicesPage() {
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
        <p className="eyebrow">Services</p>
        <h1 className="wf-h1 mt8" style={{ fontSize: 46 }}>
          Everything under{' '}
          <em
            style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--accent-ink)' }}
          >
            one roof.
          </em>
        </h1>
        <p className="lead" style={{ margin: '16px auto 0' }}>
          Pick a single service or let us assemble the right mix — one team, one invoice, one
          standard.
        </p>
        <div className="flex gap12" style={{ justifyContent: 'center', marginTop: 24 }}>
          <Link className="btn accent" href="/contact">
            Book a call →
          </Link>
          <Link className="btn ghost" href="/about">
            How we work
          </Link>
        </div>
      </div>

      {/* services grid */}
      <div className="section reveal">
        <div>
          <p className="eyebrow" style={{ margin: 0 }}>
            What we offer
          </p>
          <h2 className="wf-h2 mt8">Six ways we help you grow.</h2>
        </div>
        <div className="grid g3 mt24">
          {services.map((s) => {
            const featured = s.featured;
            return (
              <div
                key={s.slug}
                className="card"
                style={
                  featured
                    ? {
                        background:
                          'linear-gradient(165deg, var(--accent-soft), var(--card-bg) 80%)',
                        borderColor: 'color-mix(in oklch,var(--accent) 24%,white)',
                      }
                    : undefined
                }
              >
                <span className={`icon-tile ${s.accent}`}>{s.icon}</span>
                <h3 className="wf-h3 mt16">{s.title}</h3>
                <p className="body mt8">{s.summary}</p>
                {s.slug === 'seo-reach-out' ? (
                  <div className="minichart t2 mt16">
                    <i style={{ height: '40%' }} />
                    <i style={{ height: '55%' }} />
                    <i style={{ height: '48%' }} />
                    <i style={{ height: '72%' }} />
                    <i style={{ height: '90%' }} />
                  </div>
                ) : s.popular ? (
                  <div className="flex between center mt16">
                    <Link
                      className="wf-links"
                      style={{ fontFamily: 'var(--mono)', fontSize: 12 }}
                      href={`/services/${s.slug}`}
                    >
                      Learn more →
                    </Link>
                    <span className="trend b">popular</span>
                  </div>
                ) : (
                  <Link
                    className="wf-links mt16"
                    style={{ display: 'inline-block', fontFamily: 'var(--mono)', fontSize: 12 }}
                    href={featured ? '/contact' : `/services/${s.slug}`}
                  >
                    {featured ? 'Talk to us →' : 'Learn more →'}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* solutions by vertical */}
      <div className="section dotfield reveal">
        <p className="eyebrow">Solutions by vertical</p>
        <h2 className="wf-h2">Tailored for who you serve.</h2>
        <div className="grid g4 mt24">
          {verticals.map((v) => (
            <div key={v.tag} className="card flex col gap12">
              <div className={`ph ${v.ph}`} style={{ height: 78 }}>
                <span className="ph-tag">{v.tag}</span>
              </div>
              <h3 className="wf-h3">{v.title}</h3>
              <p className="body" style={{ fontSize: 12 }}>
                {v.body}
              </p>
            </div>
          ))}
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
              <div className="flex between center">
                <div className="big" style={{ color: 'var(--accent-2-ink)' }}>
                  +160%
                </div>
                <span className="trend up">▲ leads</span>
              </div>
              <div className="minichart t2 mt8">
                <i style={{ height: '34%' }} />
                <i style={{ height: '48%' }} />
                <i style={{ height: '42%' }} />
                <i style={{ height: '66%' }} />
                <i style={{ height: '82%' }} />
                <i style={{ height: '100%' }} />
              </div>
            </div>
            <div className="stat">
              <div className="flex between center">
                <div className="big">2.1s</div>
                <span className="trend b">fast</span>
              </div>
              <div className="lbl">avg load time</div>
            </div>
            <div className="stat">
              <div className="big">4.9★</div>
              <div className="lbl">client rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* closing CTA */}
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
          <h2 className="wf-h2 mt16">Not sure where to start?</h2>
          <p className="lead" style={{ margin: '14px auto 0' }}>
            Tell us your goal — we’ll recommend the smallest plan that gets you there.
          </p>
          <div className="flex gap12" style={{ justifyContent: 'center', marginTop: 24 }}>
            <Link className="btn accent" href="/contact">
              Book a call →
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
