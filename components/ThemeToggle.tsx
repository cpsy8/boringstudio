'use client';

import { useSyncExternalStore } from 'react';

// Reads `dark` reactively from <body> via useSyncExternalStore (the React-blessed
// pattern for external state — avoids setState-in-effect). Toggling mutates the
// DOM + localStorage; the MutationObserver propagates the change back to React.
function subscribe(callback: () => void) {
  const mo = new MutationObserver(callback);
  mo.observe(document.body, { attributes: true, attributeFilter: ['class'] });
  return () => mo.disconnect();
}

export default function ThemeToggle() {
  const dark = useSyncExternalStore(
    subscribe,
    () => document.body.classList.contains('dark'),
    () => false,
  );

  const toggle = () => {
    const next = !document.body.classList.contains('dark');
    document.body.classList.toggle('dark', next);
    try {
      localStorage.setItem('bs-site-dark', next ? '1' : '0');
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      type="button"
      className="nav-theme"
      onClick={toggle}
      aria-label="Toggle dark mode"
      aria-pressed={dark}
      title="Toggle dark mode"
    >
      {dark ? '◑' : '◐'}
    </button>
  );
}
