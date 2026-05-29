import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProject, getService, projects } from '@/lib/content';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return { title: `${p.name} — Work`, description: p.summary };
}

const heroBg =
  'radial-gradient(70% 90% at 8% 0%, var(--accent-soft), transparent 55%),' +
  'radial-gradient(60% 80% at 100% 60%, var(--accent-3-soft), transparent 60%)';

const ctaBg =
  'radial-gradient(80% 120% at 50% 0%, var(--accent-soft), var(--card-bg) 60%),' +
  'radial-gradient(50% 80% at 14% 100%, var(--accent-2-soft), transparent 60%),' +
  'radial-gradient(50% 80% at 86% 100%, var(--accent-3-soft), transparent 60%)';

export default async function WorkDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const usedServices = project.services.map((s) => getService(s)).filter(Boolean);

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
          <p className="eyebrow">
            <Link href="/works" style={{ color: 'inherit' }}>
              Work
            </Link>{' '}
            / {project.name}
          </p>
          <h1 className="wf-h1 serif">{project.name}</h1>
          <p className="lead">{project.intro}</p>
          <div className="flex gap8 mt24">
            <span className="badge a1">{project.vertical}</span>
            <span className="badge a2">{project.scope}</span>
            <span className={`trend ${project.resultTone}`}>{project.result}</span>
          </div>
        </div>
        <div
          className={`ph ${project.ph || 'glow'}`}
          style={{ aspectRatio: '4 / 3', position: 'relative' }}
        >
          <span className="ph-tag">PROJECT</span>
        </div>
      </div>

      {/* results stat strip */}
      <div className="section reveal">
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div
            className="statstrip"
            style={{ gridTemplateColumns: `repeat(${project.stats.length}, 1fr)` }}
          >
            {project.stats.map((st) => (
              <div className="stat" key={st.lbl}>
                <div className="flex between center">
                  <div className="big" style={st.tone ? { color: `var(--${st.tone})` } : undefined}>
                    {st.big}
                  </div>
                  {st.trend && <span className={`trend ${st.trendTone || 'up'}`}>{st.trend}</span>}
                </div>
                <div className="lbl">{st.lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* challenge / approach / outcome */}
      <div className="section dotfield reveal">
        <div className="grid g3">
          <div
            className="card"
            style={{
              background: 'linear-gradient(165deg, var(--accent-soft), var(--card-bg) 82%)',
              borderColor: 'color-mix(in oklch,var(--accent) 22%,white)',
            }}
          >
            <span className="icon-tile a1">◔</span>
            <h3 className="wf-h3 mt16">The challenge</h3>
            <p className="body mt8">{project.challenge}</p>
          </div>
          <div
            className="card"
            style={{
              background: 'linear-gradient(165deg, var(--accent-2-soft), var(--card-bg) 82%)',
              borderColor: 'color-mix(in oklch,var(--accent-2) 22%,white)',
            }}
          >
            <span className="icon-tile a2">⚡</span>
            <h3 className="wf-h3 mt16">Our approach</h3>
            <p className="body mt8">{project.approach}</p>
          </div>
          <div
            className="card"
            style={{
              background: 'linear-gradient(165deg, var(--accent-3-soft), var(--card-bg) 82%)',
              borderColor: 'color-mix(in oklch,var(--accent-3) 22%,white)',
            }}
          >
            <span className="icon-tile a3">◈</span>
            <h3 className="wf-h3 mt16">The outcome</h3>
            <p className="body mt8">{project.outcome}</p>
          </div>
        </div>
      </div>

      {/* services used */}
      {usedServices.length > 0 && (
        <div className="section reveal">
          <p className="eyebrow">Services used</p>
          <div className="grid g3 mt16">
            {usedServices.map(
              (s) =>
                s && (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="card flex center gap12"
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    <span className={`icon-tile ${s.accent}`}>{s.icon}</span>
                    <div>
                      <div className="wf-h3" style={{ fontSize: 14 }}>
                        {s.title}
                      </div>
                      <div className="body" style={{ fontSize: 12 }}>
                        {s.summary}
                      </div>
                    </div>
                  </Link>
                ),
            )}
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
          <span className="badge a3">Let’s build</span>
          <h2 className="wf-h2 serif mt16">Want a result like {project.name}?</h2>
          <p className="lead" style={{ margin: '14px auto 0' }}>
            Tell us about the project — we’ll reply within one working day.
          </p>
          <div className="flex gap12" style={{ justifyContent: 'center', marginTop: 24 }}>
            <Link className="btn accent" href="/contact">
              Let’s talk →
            </Link>
            <Link className="btn ghost" href="/works">
              More work
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
