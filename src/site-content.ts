export const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'À propos' },
  { href: '#processus', label: 'Processus' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#blog', label: 'Blog' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
] as const

export const hero = {
  title: "Bonjour, je suis Brooklyn Gilbert",
  subtitle:
    "Designer UX/UI et développeur freelance. Je conçois des interfaces claires et des expériences digitales agréables.",
  stats: [
    { value: '15+', label: "Années d'expérience", icon: 'briefcase' as const },
    { value: '200+', label: 'Projets réalisés', icon: 'layers' as const },
    { value: '58', label: 'Clients satisfaits', icon: 'users' as const },
  ],
}

export const about = {
  title: 'Je suis designer UX/UI professionnel',
  paragraphs: [
    "J'aide les marques à transformer leurs idées en produits utiles, accessibles et esthétiques. Mon approche combine recherche utilisateur, prototypage et design system.",
    "Je collabore avec des équipes produit et développement pour livrer des interfaces cohérentes, mesurables et alignées sur vos objectifs business.",
  ],
}

export const workSteps = [
  {
    step: '1',
    title: 'Recherche',
    description:
      'Entretiens, analyse concurrentielle et définition des besoins pour poser les bonnes bases.',
  },
  {
    step: '2',
    title: 'Analyse',
    description:
      'Cartographie des parcours, priorisation des problèmes et critères de succès clairs.',
  },
  {
    step: '3',
    title: 'Design',
    description:
      'Wireframes, maquettes haute-fidélité et prototypes interactifs pour valider rapidement.',
  },
  {
    step: '4',
    title: 'Lancement',
    description:
      'Accompagnement développement, QA design et itérations post-mise en ligne.',
  },
] as const

export const portfolioProjects = [
  {
    id: '1',
    category: 'Web design',
    title: 'Tableau de bord admin produit',
    description: 'Refonte complète du back-office pour une SaaS B2B.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
  },
  {
    id: '2',
    category: 'Application mobile',
    title: 'App fitness & bien-être',
    description: 'UX research, UI kit et design des flux principaux.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80',
  },
  {
    id: '3',
    category: 'Branding',
    title: 'Identité pour une startup fintech',
    description: 'Direction artistique, site vitrine et déclinaisons sociales.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
  },
  {
    id: '4',
    category: 'E-commerce',
    title: 'Boutique mode durable',
    description: 'Parcours d’achat, fiches produit et composants e-commerce.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
  },
  {
    id: '5',
    category: 'Design system',
    title: 'Librairie de composants interne',
    description: 'Tokens, documentation et intégration avec React.',
    image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80',
  },
  {
    id: '6',
    category: 'Site marketing',
    title: 'Landing page SaaS analytics',
    description: 'Structure narrative, preuves sociales et CTA optimisés.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
  },
] as const

export const blogPosts = [
  {
    id: '1',
    date: '12 mars 2026',
    title: 'Comment structurer un design system évolutif',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&q=80',
  },
  {
    id: '2',
    date: '28 févr. 2026',
    title: 'Les erreurs UX les plus fréquentes sur mobile',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80',
  },
  {
    id: '3',
    date: '10 févr. 2026',
    title: 'Collaborer efficacement avec les développeurs',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
  },
  {
    id: '4',
    date: '22 janv. 2026',
    title: 'Mesurer l’impact du design avec des métriques simples',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80',
  },
] as const

export const services = [
  {
    title: 'Expérience utilisateur (UX)',
    description:
      'Ateliers, tests utilisateurs, architecture d’information et prototypage pour réduire les risques produit.',
  },
  {
    title: 'Interface utilisateur (UI)',
    description:
      'Maquettes pixel-perfect, design system et guidelines pour une identité cohérente sur tous les supports.',
  },
  {
    title: 'Développement web',
    description:
      'Intégration front (React, Next.js, Tailwind) en respectant les standards d’accessibilité et de performance.',
  },
] as const

export const clientLogos = [
  { name: 'Google', abbr: 'G' },
  { name: 'Dribbble', abbr: 'Dr' },
  { name: 'LinkedIn', abbr: 'in' },
  { name: 'Amazon', abbr: 'A' },
  { name: 'Medium', abbr: 'M' },
  { name: 'Behance', abbr: 'Be' },
] as const

export const testimonial = {
  quote:
    'Brooklyn a su écouter nos contraintes, challenger nos idées et livrer une interface moderne que nos clients adorent. Une collaboration fluide du kick-off à la mise en production.',
  author: 'Arthur Taylor',
  role: 'Directeur général, Northwind Studio',
}

export const contactInfo = {
  email: 'hello@brooklyngilbert.design',
  phone: '+33 6 12 34 56 78',
  location: 'Paris, France',
}
