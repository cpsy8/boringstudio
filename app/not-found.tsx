import Link from 'next/link';

export default function NotFound() {
  return (
    <div
      className="pad dotfield"
      style={{ textAlign: 'center', paddingTop: 80, paddingBottom: 80 }}
    >
      <p className="eyebrow">404</p>
      <h1 className="wf-h1" style={{ fontSize: 46 }}>
        Page not{' '}
        <em style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', color: 'var(--accent-ink)' }}>
          found.
        </em>
      </h1>
      <p className="lead" style={{ margin: '16px auto 0' }}>
        The page you’re after doesn’t exist — or moved.
      </p>
      <div className="flex gap12" style={{ justifyContent: 'center', marginTop: 26 }}>
        <Link className="btn accent" href="/">
          Back home →
        </Link>
        <Link className="btn ghost" href="/contact">
          Contact us
        </Link>
      </div>
    </div>
  );
}
