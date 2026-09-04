import { projects } from './data/projects'

export const author = {
  brandTitle: 'Lova Ramiharisoa',
  logoInitial: 'LR',
  displayName: 'Full-Stack Developer',
  tagline: 'Full-Stack Developer | DevOps',
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
  title: 'Full-Stack Developer | DevOps',
  subtitle:
    "Je développe des applications web performantes avec React, Next.js, NestJS et PostgreSQL (Prisma). Curieux et rigoureux, J'intègre également Docker, CI/CD et Nginx pour automatiser et faciliter le déploiement des applications.",
  stats: [
    { value: '2+', label: "Années d'expérience", icon: 'briefcase' as const },
    { value: String(projects.length), label: 'Projets', icon: 'layers' as const },
    {
      value: '3',
      label: 'Full-Stack · DevOps',
      icon: 'users' as const,
    },
  ],
}

export const about = {
  title: 'À propos de moi',
  paragraphs: [
    "Développeur Full-Stack spécialisé en JavaScript et TypeScript, je conçois des applications web complètes, de l'interface utilisateur jusqu'au backend, aux API et à la base de données.",
    "Je travaille principalement avec React, Next.js, NestJS, PostgreSQL et Prisma.",
    "Je m'intéresse également aux pratiques DevOps afin de mieux maîtriser le cycle de vie complet d'une application : conteneurisation avec Docker, automatisation avec CI/CD et déploiement sur serveur avec Nginx.",
    "J'apprécie particulièrement les projets nécessitant la conception d'applications métier, de dashboards, d'API et d'architectures frontend/backend.",
    "Disponible pour des missions freelance, des collaborations à distance et des opportunités en CDI ou CDD.",
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
      "Choix des stacks (front, API), structure des modules, authentification JWT et stratégie de déploiement.",
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
    role: 'Développeur Full-Stack — Projet collaboratif',
    company: 'Plateforme de streaming vidéo',
    description:
      "Participation au développement d'une plateforme de streaming vidéo au sein d'une équipe de développement. Développement d'interfaces avec React, Développement du backend avec NestJS, Conception et gestion de la base de données PostgreSQL avec Prisma, Travail sur des API et fonctionnalités métier, Utilisation de Git pour le travail collaboratif, Conteneurisation et environnement Docker, Integration payment et authentification JWT, création des script pour automaitiser des taches, scrapper une siteweb pour récupérer des données, Optimisation des requetes , des recherches.",
    type: 'job' as const,
  },
  {
    period: 'Aout 2024 - Novembre 2024',
    role: 'Stagiaire Développeur Full-Stack',
    company: 'Projet de développement web — Collaboration en équipe',
    description:
      "Stage réalisé en collaboration avec un développeur, avec lequel la coopération se poursuit actuellement à travers différents projets. Durant ce stage, j'ai appris et mis en pratique les fondamentaux du développement Full-Stack, notamment la création d'applications CRUD, la mise en place de systèmes d'authentification et le développement d'API avec NestJS connectées à une base de données PostgreSQL via Prisma. J'ai également participé au développement du jeu Fanorona Malagasy avec Next.js et React, en travaillant notamment sur : La conception et le développement de fonctionnalités du jeu, La communication en temps réel avec WebSocket, L'amélioration et le renforcement de la logique et des algorithmes du jeu, Le travail collaboratif avec Git",
    type: 'intern' as const,
  },
  {
    period: 'Mars 2024',
    role: 'Participant Hackathon — Développeur Frontend',
    company: 'Hackathon universitaire et inter-universitaire',
    description:
      "Take a Look — Projet de surveillance domestique. Développement de la partie web avec Vue.js au sein d'une équipe de 5 étudiants. Le projet proposait une solution de surveillance domestique avec visualisation et technologies temps réel. Technologies du projet : Vue.js, Three.js, Django, Flutter, Node.js.",
    type: 'intern' as const,
  },
  {
    period: 'Juin 2022 — Septembre 2022',
    role: 'Stagiaire Développeur d\'applications',
    company: 'Direction Régionale de la Sécurité Publique (DRSP) — Vakinankaratra',
    description:
      "Développement d'une application pour digitaliser la gestion des candidats et du personnel, auparavant principalement réalisée sur support papier. Mise en place de la gestion des inscriptions, affectations, congés et import/export Excel. Technologies : Java Swing, MySQL, Apache POI.",
    type: 'intern' as const,
  },
] as const

export const education = [
  {
    year: 'Novembre 2022 - Août 2024',
    title: 'Master 2 en Génie Logiciel',
    school: 'École Supérieure Polytechnique d\'Antsirabe (ESPA)',
    description:
      "Architecture logicielle, conception d'API modernes et automatisation des processus. Conception d'applications performantes, Mise en place d'architectures sécurisées, systèmes d'authentification et gestion de bases de données.",
  },
  {
    year: 'Novembre 2019 - Août 2022',
    title: 'Licence Professionnelle en Génie Logiciel',
    school: 'École Supérieure Polytechnique d\'Antsirabe (ESPA)',
    description:
      "Fondations du développement web, modélisation de bases de données, algorithmique et méthodes de travail collaboratif.",
  },
  {
    year: '2017 - 2018',
    title: 'Certificat en Anglais & Informatique',
    school: 'Universe English School of Antsirabe (UESA)',
    description:
      "Maîtrise des langues française et anglaise, et des outils informatiques de base. Un atout précieux aujourd'hui pour la veille technologique et la compréhension des documentations techniques internationales.",
  }
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
    name: 'Tailwind',
    logoUrl:
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    dark: false,
  },
  {
    name: 'Docker',
    logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
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
    title: 'Applications web (React / Next.js / NestJS)',
    description:
      "Frontend, backend, APIs REST, authentification JWT et composants réutilisables. Applications métier avec architecture frontend/backend et base de données PostgreSQL via Prisma.",
  },
  {
    title: 'DevOps & déploiement',
    description:
      "Conteneurisation Docker, pipelines CI/CD avec GitHub Actions, déploiement Nginx, monitoring et logs. Capacité à déployer et maintenir ce que je développe.",
  },
] as const

export const collaborationHighlight = {
  title: 'Projet phare',
  body: "Plateforme de streaming — application Full-Stack complexe : React, NestJS, PostgreSQL, Prisma, streaming vidéo HLS, continue watching et authentification JWT.",
}

export const testimonial = {
  quote:
    "Un profil qui couvre toute la chaîne : développement frontend/backend propre, déploiement Docker et CI/CD. Une capacité rare à raisonner du code jusqu'à la production.",
  author: 'Collaborateur projet',
  role: 'Équipe streaming',
}

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Lova1401Code', short: 'GH' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lova-ramiharisoa-4094632a0/', short: 'in' },
] as const

export const contactInfo = {
  email: 'lova.ramiharisoa@gmail.com',
  phone: '+261 33 83 934 43',
  location: 'Madagascar',
}