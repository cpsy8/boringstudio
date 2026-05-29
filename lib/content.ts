// Build-time content loaders. JSON is imported directly so it is statically
// bundled — no runtime fetch, fully compatible with `output: 'export'`.
import servicesData from '@/content/services.json';
import projectsData from '@/content/projects.json';
import verticalsData from '@/content/verticals.json';
import testimonialsData from '@/content/testimonials.json';

export type Accent = 'a1' | 'a2' | 'a3';

export type ServiceFeature = { title: string; body: string };
export type Service = {
  slug: string;
  title: string;
  accent: Accent;
  icon: string;
  summary: string;
  popular?: boolean;
  featured?: boolean;
  hero: string;
  intro: string;
  features: ServiceFeature[];
  deliverables: string[];
};

export type ProjectStat = {
  big: string;
  lbl: string;
  tone?: string;
  trend?: string;
  trendTone?: string;
};
export type Project = {
  slug: string;
  name: string;
  ph: string;
  vertical: string;
  scope: string;
  result: string;
  resultTone: string;
  summary: string;
  intro: string;
  stats: ProjectStat[];
  challenge: string;
  approach: string;
  outcome: string;
  services: string[];
};

export type Vertical = { tag: string; ph: string; title: string; body: string };
export type Testimonial = {
  av: string;
  starTone: string;
  quote: string;
  name: string;
  org: string;
};

export const services = servicesData as Service[];
export const projects = projectsData as Project[];
export const verticals = verticalsData as Vertical[];
export const testimonials = testimonialsData as Testimonial[];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
