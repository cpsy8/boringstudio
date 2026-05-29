'use client';

import { useState } from 'react';

// Footer newsletter capture. Posts to Formspree if configured, otherwise
// falls back to a mailto. Separate from the main contact form.
const FORMSPREE = process.env.NEXT_PUBLIC_FORMSPREE_ID;
const EMAIL = 'hello@boringstudio.co';

export default function NewsletterForm() {
  const [done, setDone] = useState(false);
  const [email, setEmail] = useState('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    if (FORMSPREE) {
      try {
        await fetch(`https://formspree.io/f/${FORMSPREE}`, {
          method: 'POST',
          headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
          body: JSON.stringify({ newsletter: email, _subject: 'Newsletter signup' }),
        });
      } catch {
        /* ignore — still show confirmation */
      }
      setDone(true);
    } else {
      window.location.href = `mailto:${EMAIL}?subject=Newsletter%20signup&body=Please%20add%20${encodeURIComponent(
        email,
      )}%20to%20the%20list.`;
      setDone(true);
    }
  };

  if (done) {
    return (
      <p className="body" style={{ margin: 0 }}>
        Thanks — you’re on the list.
      </p>
    );
  }

  return (
    <form className="flex gap8" onSubmit={onSubmit}>
      <input
        className="input"
        type="email"
        name="newsletter"
        placeholder="you@company.com"
        aria-label="Email address"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ flex: 1 }}
      />
      <button
        className="btn accent"
        type="submit"
        style={{ padding: '0 16px' }}
        aria-label="Subscribe"
      >
        →
      </button>
    </form>
  );
}
