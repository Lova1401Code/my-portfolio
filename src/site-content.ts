import { projects } from './data/projects'

export const author = {
  brandTitle: 'Lova Ramiharisoa',
  logoInitial: 'LR',
  /** Remplacez par votre nom si vous souhaitez l’afficher dans le hero. */
  displayName: 'Développeur full stack',
  tagline: 'Développeur full stack',
  whatsappHref: 'https://wa.me/261334393443',
} as const

export const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#stack', label: 'Stack' },
  { href: '#apropos', label: 'À propos' },
  { href: '#experiences', label: 'Expériences' },
  { href: '#formation', label: 'Formation' },
  { href: '#processus', label: 'Processus' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
] as const

export const hero = {
  title: 'Bonjour, je suis développeur full stack',
  subtitle:
    "Spécialisé en React, Next.js, React Native, NestJS, WordPress, PostgreSQL, Prisma et Stripe. J'aime construire des produits web et mobiles solides, avec une base de données propre et des paiements fiables.",
  stats: [
    { value: '2+', label: "Années d'expérience", icon: 'briefcase' as const },
    { value: String(projects.length), label: 'Projets', icon: 'layers' as const },
    {
      value: '≈1 an',
      label: 'Projet streaming (équipe)',
      icon: 'users' as const,
    },
  ],
}

export const about = {
  title: 'À propos de moi',
  paragraphs: [
    "Développeur avec 2 ans d'expérience, je collabore actuellement avec deux freelances sur une plateforme de streaming depuis environ un an : stack React, Next.js, NestJS, React Native, PostgreSQL, Prisma et Stripe.",
    "Je conçois et maintiens des interfaces web, des APIs et des applications mobiles, en soignant l'architecture et la qualité du code (Git, revues, bonnes pratiques).",
    "Diplômé d'un master en génie logiciel à l'EPSA d'Antsirabe, je combine formation académique et projets concrets (jeux en ligne, sites vitrines WordPress, gestion scolaire, etc.).",
  ],
}

export const workSteps = [
  {
    step: '1',
    title: 'Analyse & cadrage',
    description:
      'Compréhension du besoin, contraintes techniques, modèle de données et périmètre fonctionnel.',
  },
  {
    step: '2',
    title: 'Architecture',
    description:
      'Choix des stacks (front, API, mobile), structure des modules et stratégie de déploiement.',
  },
  {
    step: '3',
    title: 'Développement',
    description:
      'Itérations courtes, API REST/ temps réel, intégration Prisma/Stripe, composants UI réutilisables.',
  },
  {
    step: '4',
    title: 'Livraison',
    description:
      'Tests, documentation, mise en production et suivi des correctifs avec Git.',
  },
] as const

export const experiences = [
  {
    period: '2024 — Présent',
    role: 'Développeur full stack',
    company: 'Entreprise exemple',
    description:
      "Conception et développement d'applications web et mobiles avec React, Next.js et NestJS. Intégration de paiements Stripe et gestion de bases de données PostgreSQL via Prisma.",
    type: 'job' as const,
  },
  {
    period: '2023 — 2024',
    role: 'Développeur freelance',
    company: 'Projets indépendants',
    description:
      "Création de sites WordPress sur mesure, développement d'APIs et de dashboards pour clients. Mise en place de CI/CD et optimisation des performances.",
    type: 'freelance' as const,
  },
  {
    period: '2023',
    role: 'Stagiaire développeur',
    company: 'Studio numérique exemple',
    description:
      "Participation au développement d'une plateforme streaming en équipe. Travail sur le front (React) et le back (NestJS, WebSocket).",
    type: 'intern' as const,
  },
] as const

export const education = [
  {
    year: '2023 — 2024',
    title: 'Licence en développement web',
    school: 'Université exemple',
    description:
      "Formation axée sur le développement full stack, architectures web, bases de données et bonnes pratiques de versionnement.",
  },
  {
    year: '2022 — 2023',
    title: 'BTS en informatique',
    school: 'Institut exemple',
    description:
      "Bases de la programmation, algorithmique, réseaux et développement d'applications.",
  },
  {
    year: '2024',
    title: 'Certification React avancé',
    school: 'Plateforme en ligne',
    description:
      "Maîtrise des patterns avancés React : hooks personnalisés, context, performance et tests.",
  },
] as const

/** Logos via CDN publics (Devicon / Simple Icons). */
export const techStack = [
  {
    name: 'React',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    dark: false,
  },
  {
    name: 'Next.js',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    dark: true,
  },
  {
    name: 'React Native',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    dark: false,
  },
  {
    name: 'NestJS',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
    dark: false,
  },
  {
    name: 'WordPress',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg',
    dark: false,
  },
  {
    name: 'PostgreSQL',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    dark: false,
  },
  {
    name: 'Prisma',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg',
    dark: false,
  },
  {
    name: 'Stripe',
    logoUrl: 'https://cdn.simpleicons.org/stripe/635BFF',
    dark: false,
  },
  {
    name: 'Git',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    dark: false,
  },
] as const

export const services = [
  {
    title: 'Applications web (React / Next.js)',
    description:
      'Interfaces modernes, SSR/SSG avec Next.js, composants réutilisables et intégration API (REST, WebSocket).',
  },
  {
    title: 'Mobile & backends (React Native / NestJS)',
    description:
      'Applications mobiles connectées à des APIs NestJS, validation, auth, temps réel si besoin.',
  },
  {
    title: 'Données, paiements & WordPress',
    description:
      'Modélisation PostgreSQL avec Prisma, paiements Stripe, et sites vitrines ou blogs sous WordPress.',
  },
] as const

export const collaborationHighlight = {
  title: 'Projet en cours',
  body: "Plateforme de streaming — équipe de trois (moi + deux freelances), depuis environ un an : React, Next.js, NestJS, React Native, PostgreSQL, Prisma, Stripe, Git.",
}

export const testimonial = {
  quote:
    "Une collaboration sérieuse sur la partie technique : code structuré, bonnes pratiques Git, et une communication claire sur les choix d'architecture (API, base, mobile).",
  author: 'Équipe projet streaming',
  role: 'Collaboration freelance',
}

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/al7373', short: 'GH' },
  { label: 'LinkedIn', href: '#', short: 'in' },
] as const

export const contactInfo = {
  email: 'vous@exemple.com',
  phone: '+261 XX XX XXX XX',
  location: 'Madagascar',
}
