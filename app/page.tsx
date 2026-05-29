import Link from 'next/link';
import { projects, testimonials } from '@/lib/content';
import { SITE } from '@/lib/site';
import TestimonialMarquee from '@/components/TestimonialMarquee';

const heroBg =
  'radial-gradient(90% 70% at 50% -10%, var(--accent-soft), transparent 55%),' +
  'radial-gradient(60% 50% at 12% 30%, var(--accent-2-soft), transparent 60%),' +
  'radial-gradient(60% 50% at 88% 24%, var(--accent-3-soft), transparent 60%)';

const ctaBg =
  'radial-gradient(80% 120% at 50% 0%, var(--accent-soft), var(--card-bg) 60%),' +
  'radial-gradient(50% 80% at 14% 100%, var(--accent-2-soft), transparent 60%),' +
  'radial-gradient(50% 80% at 86% 100%, var(--accent-3-soft), transparent 60%)';

export default function Home() {
  return (
    <>
      {/* centered hero */}
      <div
        className="pad dotfield"
        style={{
          textAlign: 'center',
          paddingTop: 48,
          paddingBottom: 40,
          position: 'relative',
          background: heroBg,
        }}
      >
        <span
          className="badge a2"
          style={{ position: 'absolute', left: 42, top: 64, transform: 'rotate(-4deg)' }}
        >
          SEO ↑
        </span>
        <span
          className="badge a3"
          style={{ position: 'absolute', right: 48, top: 104, transform: 'rotate(5deg)' }}
        >
          brand
        </span>
        <span
          className="badge a1"
          style={{ position: 'absolute', left: 78, bottom: 42, transform: 'rotate(3deg)' }}
        >
          +160% leads
        </span>

        <div className="chiprow" style={{ justifyContent: 'center' }}>
          <span className="chip" style={{ display: 'inline-flex', alignItems: 'center', gap: 7 }}>
            <span className="pulse" style={{ width: 7, height: 7 }} />
            {SITE.booking}
          </span>
        </div>
        <h1 className="wf-h1 mt16" style={{ margin: '16px auto 0', maxWidth: '13ch' }}>
          Smart tech for businesses that{' '}
          <em
            style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--accent-ink)' }}
          >
            mean business.
          </em>
        </h1>
        <p className="lead" style={{ margin: '18px auto 0' }}>
          Websites, SEO, outreach and brand — one studio, one system, measurable results.
        </p>
        <div className="flex gap12" style={{ justifyContent: 'center', marginTop: 26 }}>
          <Link className="btn accent" href="/contact">
            Get started →
          </Link>
          <Link className="btn ghost" href="/services">
            Talk to us
          </Link>
        </div>
        <div className="flex center gap12" style={{ justifyContent: 'center', marginTop: 24 }}>
          <div className="avatars">
            <span className="av a1" />
            <span className="av a2" />
            <span className="av a3" />
            <span className="av" />
          </div>
          <span className="body" style={{ fontSize: 12 }}>
            Trusted by <b style={{ color: 'var(--ink)' }}>40+</b> clinics, shops &amp; brands ·{' '}
            <b style={{ color: 'var(--ink)' }}>4.9★</b>
          </span>
        </div>
      </div>

      {/* floating stat card */}
      <div style={{ padding: '0 46px', marginTop: -10, position: 'relative', zIndex: 3 }}>
        <div
          className="card"
          style={{
            padding: 0,
            boxShadow: '0 24px 50px -30px rgba(0,0,0,0.28)',
            overflow: 'hidden',
          }}
        >
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
                <div className="big">12</div>
                <span
                  className="icon-tile a3"
                  style={{ width: 30, height: 30, borderRadius: 8, fontSize: 13 }}
                >
                  ◭
                </span>
              </div>
              <div className="lbl">verticals served</div>
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
          </div>
        </div>
      </div>

      {/* logo trust strip */}
      <div className="section" style={{ padding: '30px 46px' }}>
        <p
          className="body"
          style={{
            textAlign: 'center',
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '0.04em',
            margin: '0 0 16px',
          }}
        >
          WORKING WITH TEAMS ACROSS HEALTH, RETAIL &amp; B2B
        </p>
        <div className="logorow" style={{ justifyContent: 'center' }}>
          <div className="logo-pill">
            <span className="mk" style={{ background: 'var(--accent-soft)' }} />
            Northgate
          </div>
          <div className="logo-pill">
            <span className="mk" style={{ background: 'var(--accent-2-soft)' }} />
            Maple&nbsp;&amp;&nbsp;Co
          </div>
          <div className="logo-pill">
            <span className="mk" style={{ background: 'var(--accent-3-soft)' }} />
            Vela
          </div>
          <div className="logo-pill">
            <span className="mk" />
            Bright&nbsp;Clinic
          </div>
          <div className="logo-pill">
            <span className="mk" style={{ background: 'var(--accent-soft)' }} />
            Harbour
          </div>
        </div>
      </div>

      {/* bento services */}
      <div className="section reveal">
        <div className="flex between center">
          <div>
            <p className="eyebrow" style={{ margin: 0 }}>
              From idea to execution
            </p>
            <h2 className="wf-h2 mt8">A bento of everything we do.</h2>
          </div>
          <Link className="btn ghost" href="/services" style={{ padding: '8px 16px' }}>
            All services →
          </Link>
        </div>
        <div
          className="grid mt24"
          style={{ gridTemplateColumns: '1.5fr 1fr 1fr', gridAutoRows: '148px' }}
        >
          <div
            className="card"
            style={{
              gridRow: 'span 2',
              background: 'linear-gradient(165deg, var(--accent-soft), var(--card-bg) 75%)',
              borderColor: 'color-mix(in oklch,var(--accent) 24%,white)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <span className="icon-tile a1">◳</span>
            <h3 className="wf-h3 mt16">Website building</h3>
            <p className="body mt8">
              Marketing sites &amp; booking flows — fast, accessible, on-brand.
            </p>
            <div
              className="ph glow"
              style={{ position: 'absolute', left: 20, right: 20, bottom: 18, height: 80 }}
            >
              <span className="ph-tag">AI VISUAL</span>
            </div>
          </div>
          <div
            className="card"
            style={{
              background: 'linear-gradient(165deg, var(--accent-2-soft), var(--card-bg) 80%)',
              borderColor: 'color-mix(in oklch,var(--accent-2) 22%,white)',
            }}
          >
            <span className="icon-tile a2">⌕</span>
            <h3 className="wf-h3 mt12">SEO</h3>
            <div className="minichart t2 mt12">
              <i style={{ height: '40%' }} />
              <i style={{ height: '55%' }} />
              <i style={{ height: '48%' }} />
              <i style={{ height: '72%' }} />
              <i style={{ height: '90%' }} />
            </div>
          </div>
          <div className="card">
            <span className="icon-tile a3">✉</span>
            <h3 className="wf-h3 mt12">Outreach</h3>
            <p className="body mt8" style={{ fontSize: 12 }}>
              Follow-ups that convert.
            </p>
          </div>
          {/* static "site speed checker" callout (presentational — no dead input) */}
          <div
            className="card"
            style={{
              gridColumn: 'span 2',
              padding: 0,
              overflow: 'hidden',
              background: 'var(--fill)',
            }}
          >
            <div
              className="demo"
              style={{
                height: '100%',
                border: 'none',
                borderRadius: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <div className="row">
                <span className="pulse" />
                <span className="badge a2">WHAT WE MEASURE</span>
                <span className="body" style={{ fontSize: 11 }}>
                  Site speed &amp; quality
                </span>
              </div>
              <div className="flex between center mt12" style={{ gap: 14 }}>
                <div className="input" style={{ flex: 1, background: 'var(--card-bg)' }}>
                  yourclinic.com
                </div>
                <span className="btn accent" style={{ padding: '9px 16px' }} aria-hidden="true">
                  Scan ↗
                </span>
              </div>
              <div className="flex gap12 mt12">
                <span className="trend up">▲ 98 performance</span>
                <span className="trend b">2.1s load</span>
                <span className="trend v">A11y AA</span>
              </div>
            </div>
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
          <h2 className="wf-h2">A clear path, every time.</h2>
          <p className="lead">No mystery, no bloat. Four steps from first call to live.</p>
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
            <p className="body mt8">Goals, audience, what “winning” looks like.</p>
          </div>
          <div className="tl-node">
            <div className="tl-year" style={{ color: 'var(--accent-2-ink)' }}>
              02 · Design
            </div>
            <h3 className="wf-h3 mt8">Clear, on-brand direction</h3>
            <p className="body mt8">Wireframe → visual → sign-off.</p>
          </div>
          <div className="tl-node">
            <div className="tl-year">03 · Build</div>
            <h3 className="wf-h3 mt8">Fast, accessible, measured</h3>
            <p className="body mt8">Performance budget baked in.</p>
          </div>
          <div className="tl-node">
            <div className="tl-year" style={{ color: 'var(--accent-3-ink)' }}>
              04 · Grow
            </div>
            <h3 className="wf-h3 mt8">SEO + outreach in motion</h3>
            <p className="body mt8">Iterate on real numbers.</p>
          </div>
        </div>
      </div>

      {/* featured work */}
      <div className="section reveal">
        <div className="flex between center">
          <p className="eyebrow" style={{ margin: 0 }}>
            Selected work
          </p>
          <Link
            className="wf-links"
            style={{ fontFamily: 'var(--mono)', fontSize: 12 }}
            href="/works"
          >
            All projects →
          </Link>
        </div>
        <div className="grid g3 mt24">
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
                  <span
                    className={`badge ${p.vertical === 'Clinic' ? 'a1' : p.vertical === 'Retail' ? 'a2' : 'a3'}`}
                  >
                    {p.vertical}
                  </span>
                  <span className="badge">{p.scope}</span>
                </div>
                <h3 className="wf-h3 mt12">{p.name}</h3>
                <span className={`trend ${p.resultTone} mt8`}>{p.result}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* testimonials */}
      <div className="section tint-1 reveal">
        <div className="flex between center">
          <div>
            <p className="eyebrow" style={{ margin: 0 }}>
              What clients say
            </p>
            <h2 className="wf-h2 mt8">Clear work, loud results.</h2>
          </div>
          <div className="flex center gap12">
            <span className="big" style={{ fontSize: 26, fontWeight: 800 }}>
              4.9★
            </span>
            <span className="body" style={{ fontSize: 12 }}>
              avg · 40+ reviews
            </span>
          </div>
        </div>

        <div
          className="grid mt24"
          style={{ gridTemplateColumns: '1.3fr 0.7fr', gap: 24, alignItems: 'stretch' }}
        >
          <div
            className="card"
            style={{
              background: 'var(--card-bg)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <span className="badge a1">Client story</span>
            <h3 className="wf-h2 serif mt16" style={{ fontWeight: 500, fontSize: 24 }}>
              “They made the whole thing feel effortless. We launched faster and the leads just
              started arriving.”
            </h3>
            <div className="flex center gap12 mt24">
              <span
                className="av a1"
                style={{ width: 40, height: 40, margin: 0, borderColor: 'var(--card-bg)' }}
              />
              <div>
                <div className="wf-h3" style={{ fontSize: 14 }}>
                  Practice Manager
                </div>
                <div className="body" style={{ fontSize: 12 }}>
                  Northgate Dental
                </div>
              </div>
            </div>
          </div>
          <div className="card" style={{ background: 'var(--card-bg)' }}>
            <div className="flex between center">
              <span
                className="lbl"
                style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--ink-faint)' }}
              >
                RESULTS · 90 DAYS
              </span>
              <span className="trend up">▲</span>
            </div>
            <div
              className="big"
              style={{ fontSize: 34, fontWeight: 800, letterSpacing: '-0.02em', marginTop: 8 }}
            >
              +160%
            </div>
            <div
              className="lbl"
              style={{ fontFamily: 'var(--mono)', fontSize: 10.5, color: 'var(--ink-faint)' }}
            >
              online bookings
            </div>
            <div className="minichart mt16">
              <i style={{ height: '30%' }} />
              <i style={{ height: '44%' }} />
              <i style={{ height: '40%' }} />
              <i style={{ height: '58%' }} />
              <i style={{ height: '74%' }} />
              <i style={{ height: '90%' }} />
              <i style={{ height: '100%' }} />
            </div>
          </div>
        </div>

        <TestimonialMarquee items={testimonials} />
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
          <h2 className="wf-h2 mt16">Start with a 30-minute call.</h2>
          <p className="lead" style={{ margin: '14px auto 0' }}>
            Tell us about the project — we’ll reply within one working day with a clear, simple
            plan.
          </p>
          <div className="flex gap12" style={{ justifyContent: 'center', marginTop: 24 }}>
            <Link className="btn accent" href="/contact">
              Get started →
            </Link>
            <a className="btn ghost" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </div>
          <div className="flex center gap12" style={{ justifyContent: 'center', marginTop: 20 }}>
            <span className="trend up">✓ Reply &lt; 1 day</span>
            <span className="trend b">✓ Fixed scope</span>
            <span className="trend v">✓ No lock-in</span>
          </div>
        </div>
      </div>
    </>
  );
}
