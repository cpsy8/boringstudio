// Brand-level constants. "Boring Studio" is a working placeholder — the name
// lives only here, the footer, the email and page <title>s, so it is easy to
// swap when the real name is chosen.
export const SITE = {
  name: 'boring studio',
  mark: '◵',
  email: 'hello@boringstudio.co',
  phone: '+44 20 7946 0000 · Mon–Fri',
  office: 'Remote-first · GMT',
  tagline:
    'Fast, dependable digital work that delivers — for clinics, small businesses and ambitious brands.',
  booking: 'Now booking Q3 projects',
} as const;

export const NAV = [
  { href: '/services', label: 'Services' },
  { href: '/works', label: 'Work' },
  { href: '/about', label: 'About' },
] as const;
