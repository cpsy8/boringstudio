'use client';

import { useState } from 'react';
import { SITE } from '@/lib/site';

const FORMSPREE = process.env.NEXT_PUBLIC_FORMSPREE_ID;

const SERVICES = [
  'Website building',
  'SEO & reach-out',
  'Brand building',
  'Analytics & CRO',
  'Care & hosting',
  'Full partner package',
];

const cardStyle: React.CSSProperties = {
  padding: 28,
  background: 'linear-gradient(165deg, var(--accent-soft), var(--card-bg) 30%)',
  borderColor: 'color-mix(in oklch,var(--accent) 22%,white)',
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'done'>('idle');
  const [errors, setErrors] = useState<{ email?: string }>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get('email') || '');

    if (!isEmail(email)) {
      setErrors({ email: 'Enter a valid email address.' });
      return;
    }
    setErrors({});
    setStatus('submitting');

    if (FORMSPREE) {
      try {
        const res = await fetch(`https://formspree.io/f/${FORMSPREE}`, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: data,
        });
        if (!res.ok) throw new Error('submit failed');
        setStatus('done');
      } catch {
        // fall back to mailto so the lead is never lost
        mailtoFallback(data);
        setStatus('done');
      }
    } else {
      mailtoFallback(data);
      setStatus('done');
    }
  };

  if (status === 'done') {
    return (
      <div className="card" style={cardStyle}>
        <span className="badge a2">Message sent</span>
        <h3 className="wf-h2 serif mt16" style={{ fontWeight: 500 }}>
          Thanks — we’ll be in touch.
        </h3>
        <p className="lead" style={{ marginTop: 12 }}>
          A real person will reply within one working day. In the meantime, feel free to email us
          directly.
        </p>
        <div className="flex gap12 mt24">
          <a className="btn accent" href={`mailto:${SITE.email}`}>
            {SITE.email}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="card" style={cardStyle}>
      <form onSubmit={onSubmit} noValidate>
        <div className="flex between center">
          <h3 className="wf-h3">Start a conversation</h3>
          <span className="trend up">▲ Reply &lt; 1 day</span>
        </div>
        <div className="grid g2 gap16 mt16">
          <div className="field">
            <label htmlFor="cf-name">Name</label>
            <input
              id="cf-name"
              className="input"
              type="text"
              name="name"
              placeholder="Jane Smith"
              autoComplete="name"
            />
          </div>
          <div className="field">
            <label htmlFor="cf-email">Email</label>
            <input
              id="cf-email"
              className="input"
              type="email"
              name="email"
              placeholder="jane@company.com"
              autoComplete="email"
              required
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'cf-email-err' : undefined}
            />
            {errors.email && (
              <span
                id="cf-email-err"
                className="body"
                style={{ color: 'var(--accent-ink)', fontSize: 11 }}
              >
                {errors.email}
              </span>
            )}
          </div>
        </div>
        <div className="grid g2 gap16 mt16">
          <div className="field">
            <label htmlFor="cf-company">Company</label>
            <input
              id="cf-company"
              className="input"
              type="text"
              name="company"
              placeholder="Your company"
              autoComplete="organization"
            />
          </div>
          <div className="field">
            <label htmlFor="cf-service">Service interested in</label>
            <select id="cf-service" className="input" name="service" defaultValue="">
              <option value="">Select a service…</option>
              {SERVICES.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="field mt16">
          <label htmlFor="cf-message">Message</label>
          <textarea
            id="cf-message"
            className="input area"
            name="message"
            placeholder="A few lines about what you need…"
          />
        </div>
        <div className="flex between center mt24">
          <span className="body" style={{ fontFamily: 'var(--mono)', fontSize: 10.5 }}>
            We reply within 1 working day.
          </span>
          <button className="btn accent" type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Sending…' : 'Send message ↗'}
          </button>
        </div>
      </form>
    </div>
  );
}

function mailtoFallback(data: FormData) {
  const body = [
    `Name: ${data.get('name') || ''}`,
    `Email: ${data.get('email') || ''}`,
    `Company: ${data.get('company') || ''}`,
    `Service: ${data.get('service') || ''}`,
    '',
    String(data.get('message') || ''),
  ].join('\n');
  window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
    'Project enquiry',
  )}&body=${encodeURIComponent(body)}`;
}
