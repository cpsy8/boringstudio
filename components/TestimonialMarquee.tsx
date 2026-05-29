'use client';

import { useSyncExternalStore } from 'react';
import type { Testimonial } from '@/lib/content';

const REDUCE_QUERY = '(prefers-reduced-motion: reduce)';

function subscribeReduce(callback: () => void) {
  const mq = window.matchMedia(REDUCE_QUERY);
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
}

// Auto-scrolling, gently floating testimonial marquee. The track is duplicated
// so the CSS translateX(-50%) loop is seamless. Under prefers-reduced-motion
// the clone is skipped and the strip becomes a normal scroll container.
export default function TestimonialMarquee({ items }: { items: Testimonial[] }) {
  const reduce = useSyncExternalStore(
    subscribeReduce,
    () => window.matchMedia(REDUCE_QUERY).matches,
    () => false,
  );
  const clone = !reduce;

  const list = clone ? [...items, ...items] : items;

  return (
    <div className="tmarquee">
      <div className="tmarquee-track">
        {list.map((t, i) => (
          <div className="tcard" key={i} aria-hidden={clone && i >= items.length}>
            <div className="flex gap8" style={{ color: `var(--${t.starTone})`, fontSize: 13 }}>
              ★★★★★
            </div>
            <p className="body mt12" style={{ color: 'var(--ink)' }}>
              “{t.quote}”
            </p>
            <div className="flex center gap12 mt16">
              <span className={`av ${t.av}`} style={{ margin: 0 }} />
              <div>
                <div className="wf-h3" style={{ fontSize: 13 }}>
                  {t.name}
                </div>
                <div className="body" style={{ fontSize: 11 }}>
                  {t.org}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
