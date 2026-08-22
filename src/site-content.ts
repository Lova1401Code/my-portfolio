import { projects } from './data/projects'

export const author = {
  brandTitle: 'Lova Ramiharisoa',
  logoInitial: 'LR',
  displayName: 'Full-Stack Developer',
  tagline: 'Full-Stack Developer | DevOps & Infrastructure',
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

export const headerNavLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'À propos' },
  { href: '#experiences', label: 'Expériences' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
] as const

export const hero = {
  title: 'Full-Stack Developer | DevOps & Infrastructure',
  subtitle:
    "Je développe des applications web et mobiles avec React, Next.js et NestJS. Compétences complémentaires en DevOps (Docker, CI/CD, Nginx) et en systèmes & réseaux (Linux, TCP/IP, routage) pour déployer et faire fonctionner ce que je construis.",
  stats: [
    { value: '2+', label: "Années d'expérience", icon: 'briefcase' as const },
    { value: String(projects.length), label: 'Projets', icon: 'layers' as const },
    {
      value: '3',
      label: 'Full-Stack · DevOps · Réseaux',
      icon: 'users' as const,
    },
  ],
}

export const about = {
  title: 'À propos de moi',
  paragraphs: [
    "Développeur Full-Stack orienté développement logiciel, je conçois des applications métier, des architectures frontend/backend et des bases de données avec React, Next.js, NestJS, PostgreSQL et Prisma. Je m'intéresse également à Linux, Docker, la CI/CD et l'infrastructure de déploiement.",
    "J'ai des connaissances pratiques en systèmes et réseaux : TCP/IP, DNS, DHCP, VLAN, routage et adressage IP. Cette compréhension des infrastructures me permet de raisonner au-delà du code, jusqu'à l'environnement qui fait fonctionner une application.",
    "Profil polyvalent mais cohérent : je développe des applications, je sais les déployer, je comprends l'infrastructure qui les supporte. Je m'intéresse particulièrement à la digitalisation des entreprises et aux environnements industriels, où ces compétences combinées prennent tout leur sens.",
  ],
}

export const workSteps = [
  {
    step: '1',
    title: 'Analyse & cadrage',
    description:
      "Compréhension du besoin, contraintes techniques, modèle de données et périmètre fonctionnel.",
  },
  {
    step: '2',
    title: 'Architecture',
    description:
      "Choix des stacks (front, API, mobile), structure des modules, authentification JWT et stratégie de déploiement.",
  },
  {
    step: '3',
    title: 'Développement',
    description:
      "Itérations courtes, APIs REST, intégration Prisma/PostgreSQL, authentification et composants UI réutilisables.",
  },
  {
    step: '4',
    title: 'Livraison & déploiement',
    description:
      "Conteneurisation Docker, CI/CD, tests, mise en production et monitoring avec Git.",
  },
] as const

export const experiences = [
  {
    period: '2024 — Présent',
    role: 'Développeur Full-Stack',
    company: 'Plateforme streaming (équipe)',
    description:
      "Développement d'une plateforme de streaming avec React, React Native, NestJS, PostgreSQL et Prisma. Architecture frontend/backend, authentification JWT, streaming vidéo HLS et déploiement Docker.",
    type: 'job' as const,
  },
  {
    period: '2023 — 2024',
    role: 'Développeur Full-Stack freelance',
    company: 'Projets indépendants',
    description:
      "Création d'applications métier et de sites web pour clients. Développement frontend/backend, mise en place de CI/CD avec GitHub Actions et déploiement sous Docker/Nginx.",
    type: 'freelance' as const,
  },
  {
    period: '2023',
    role: 'Stagiaire développeur',
    company: 'Studio numérique',
    description:
      "Participation au développement d'une application web en équipe. Travail sur le front (React) et le back (NestJS, API REST), et initiation aux pratiques DevOps.",
    type: 'intern' as const,
  },
] as const

export const education = [
  {
    year: '2023 — 2024',
    title: 'Master en génie logiciel',
    school: 'EPSA Antsirabe',
    description:
      "Formation axée sur le développement full stack, les architectures web, les bases de données et les bonnes pratiques de versionnement.",
  },
  {
    year: '2022 — 2023',
    title: 'Formation systèmes & réseaux',
    school: 'Formation pratique',
    description:
      "Fondamentaux réseaux : TCP/IP, DNS, DHCP, VLAN, routage, adressage IP et configuration d'équipements avec Cisco Packet Tracer.",
  },
  {
    year: '2024',
    title: 'Certification DevOps & Docker',
    school: 'Formation en ligne',
    description:
      "Conteneurisation Docker, pipelines CI/CD avec GitHub Actions, déploiement, Nginx et monitoring.",
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
    name: 'Node.js',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
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
    name: 'Tailwind CSS',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
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
    title: 'Applications web & mobiles (React / Next.js / NestJS)',
    description:
      "Frontend, backend, APIs REST, authentification JWT et composants réutilisables. Applications métier avec architecture frontend/backend et base de données PostgreSQL via Prisma.",
  },
  {
    title: 'DevOps & déploiement',
    description:
      "Conteneurisation Docker, pipelines CI/CD avec GitHub Actions, déploiement Nginx, monitoring et logs. Capacité à déployer et maintenir ce que je développe.",
  },
  {
    title: 'Systèmes & réseaux',
    description:
      "Linux, TCP/IP, DNS, DHCP, VLAN, routage et adressage IP. Compréhension des infrastructures réseau et des environnements IT et industriels.",
  },
] as const

export const collaborationHighlight = {
  title: 'Projet phare',
  body: "Plateforme de streaming — application Full-Stack complexe : React, React Native, NestJS, PostgreSQL, Prisma, streaming vidéo HLS, continue watching et authentification JWT.",
}

export const testimonial = {
  quote:
    "Un profil qui couvre toute la chaîne : développement frontend/backend propre, déploiement Docker et compréhension de l'infrastructure réseau. Une capacité rare à raisonner du code jusqu'à la production.",
  author: 'Collaborateur projet',
  role: 'Équipe streaming',
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