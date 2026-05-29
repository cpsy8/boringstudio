import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getService, services, projects } from '@/lib/content';
import { SITE } from '@/lib/site';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return { title: s.title, description: s.summary };
}

const heroBg =
  'radial-gradient(90% 70% at 50% -10%, var(--accent-soft), transparent 55%),' +
  'radial-gradient(55% 50% at 14% 30%, var(--accent-2-soft), transparent 60%),' +
  'radial-gradient(55% 50% at 86% 26%, var(--accent-3-soft), transparent 60%)';

const ctaBg =
  'radial-gradient(80% 120% at 50% 0%, var(--accent-soft), var(--card-bg) 60%),' +
  'radial-gradient(50% 80% at 14% 100%, var(--accent-2-soft), transparent 60%),' +
  'radial-gradient(50% 80% at 86% 100%, var(--accent-3-soft), transparent 60%)';

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = projects.filter((p) => p.services.includes(service.slug)).slice(0, 3);

  return (
    <>
      {/* hero */}
      <div className="pad dotfield" style={{ position: 'relative', background: heroBg }}>
        <p className="eyebrow">
          <Link href="/services" style={{ color: 'inherit' }}>
            Services
          </Link>{' '}
          / {service.title}
        </p>
        <div className="flex center gap12" style={{ marginTop: 6 }}>
          <span className={`icon-tile ${service.accent}`}>{service.icon}</span>
          <h1 className="wf-h1" style={{ fontSize: 44 }}>
            {service.title}
          </h1>
        </div>
        <p className="lead">{service.hero}</p>
        <div className="flex gap12 mt24">
          <Link className="btn accent" href="/contact">
            Book a call →
          </Link>
          <Link className="btn ghost" href="/services">
            All services
          </Link>
        </div>
      </div>

      {/* intro + features */}
      <div className="section reveal">
        <div
          className="grid"
          style={{ gridTemplateColumns: '0.9fr 1.1fr', gap: 40, alignItems: 'start' }}
        >
          <div>
            <p className="eyebrow" style={{ margin: 0 }}>
              Overview
            </p>
            <h2 className="wf-h2 mt8">What you get</h2>
            <p className="lead">{service.intro}</p>
            <div className="flex col gap8 mt24">
              {service.deliverables.map((d) => (
                <span key={d} className="chip" style={{ alignSelf: 'flex-start' }}>
                  {d}
                </span>
              ))}
            </div>
          </div>
          <div className="grid g2">
            {service.features.map((f) => (
              <div key={f.title} className="card">
                <span
                  className={`icon-tile ${service.accent}`}
                  style={{ width: 30, height: 30, borderRadius: 8, fontSize: 13 }}
                >
                  ✓
                </span>
                <h3 className="wf-h3 mt12">{f.title}</h3>
                <p className="body mt8">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* related work */}
      {related.length > 0 && (
        <div className="section dotfield reveal">
          <p className="eyebrow">Related work</p>
          <h2 className="wf-h2">Proof, not promises.</h2>
          <div className="grid g3 mt24">
            {related.map((p) => (
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
                    <span className="badge">{p.vertical}</span>
                    <span className="badge">{p.scope}</span>
                  </div>
                  <h3 className="wf-h3 mt12">{p.name}</h3>
                  <span className={`trend ${p.resultTone} mt8`}>{p.result}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

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
          <h2 className="wf-h2 mt16">Ready to start with {service.title.toLowerCase()}?</h2>
          <p className="lead" style={{ margin: '14px auto 0' }}>
            Tell us your goal — we’ll reply within one working day with a clear, simple plan.
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
