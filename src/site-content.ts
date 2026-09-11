import { projects } from './data/projects'

export type Lang = 'fr' | 'en'

export type NavLink = { href: string; label: string }

export type Author = {
  brandTitle: string
  logoInitial: string
  displayName: string
  tagline: string
  whatsappHref: string
}

export type Hero = {
  title: string
  subtitle: string
  stats: { value: string; label: string; icon: 'briefcase' | 'layers' | 'users' }[]
}

export type About = {
  title: string
  paragraphs: string[]
}

export type WorkStep = {
  step: string
  title: string
  description: string
}

export type Experience = {
  period: string
  role: string
  company: string
  description: string
  type: 'job' | 'freelance' | 'intern'
}

export type Education = {
  year: string
  title: string
  school: string
  description: string
}

export type TechStackItem = { name: string; logoUrl: string; dark: boolean }

export type Service = { title: string; description: string }

export type CollaborationHighlight = { title: string; body: string }

export type Testimonial = { quote: string; author: string; role: string }

export type SocialLink = { label: string; href: string; short: string }

export type ContactInfo = {
  email: string
  phone: string
  location: string
}

export type Content = {
  author: Author
  navLinks: readonly NavLink[]
  headerNavLinks: readonly NavLink[]
  hero: Hero
  about: About
  workSteps: readonly WorkStep[]
  experiences: readonly Experience[]
  education: readonly Education[]
  techStack: readonly TechStackItem[]
  services: readonly Service[]
  collaborationHighlight: CollaborationHighlight
  testimonial: Testimonial
  socialLinks: readonly SocialLink[]
  contactInfo: ContactInfo
}

const author: Author = {
  brandTitle: 'Lova Ramiharisoa',
  logoInitial: 'LR',
  displayName: 'Full-Stack Developer',
  tagline: 'Full-Stack Developer | DevOps · AI Integration',
  whatsappHref: 'https://wa.me/261334393443',
}

const techStack: TechStackItem[] = [
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
  {
    name: 'OpenAI',
    logoUrl: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg',
    dark: true,
  },
]

const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/Lova1401Code', short: 'GH' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lova-ramiharisoa-4094632a0/', short: 'in' },
]

const contactInfo: ContactInfo = {
  email: 'lova.ramiharisoa@gmail.com',
  phone: '+261 33 83 934 43',
  location: 'Madagascar',
}

export const translations: Record<Lang, Content> = {
  fr: {
    author,
    navLinks: [
      { href: '#accueil', label: 'Accueil' },
      { href: '#stack', label: 'Stack' },
      { href: '#apropos', label: 'À propos' },
      { href: '#experiences', label: 'Expériences' },
      { href: '#formation', label: 'Formation' },
      { href: '#processus', label: 'Processus' },
      { href: '#portfolio', label: 'Portfolio' },
      { href: '#services', label: 'Services' },
      { href: '#contact', label: 'Contact' },
    ],
    headerNavLinks: [
      { href: '#accueil', label: 'Accueil' },
      { href: '#apropos', label: 'À propos' },
      { href: '#experiences', label: 'Expériences' },
      { href: '#portfolio', label: 'Portfolio' },
      { href: '#services', label: 'Services' },
      { href: '#contact', label: 'Contact' },
    ],
    hero: {
      title: 'Full-Stack Developer | DevOps · AI Integration',
      subtitle:
        "Je développe des applications web performantes avec React, Next.js, NestJS et PostgreSQL (Prisma). Curieux et rigoureux, j'intègre également Docker, CI/CD et Nginx pour automatiser et faciliter le déploiement, ainsi que les API LLM (OpenAI) pour augmenter mes applications via le prompt engineering, des assistants IA et l'automatisation de workflows.",
      stats: [
        { value: '2+', label: "Années d'expérience", icon: 'briefcase' },
        { value: String(projects.length), label: 'Projets', icon: 'layers' },
        {
          value: '3',
          label: 'Full-Stack · DevOps',
          icon: 'users',
        },
      ],
    },
    about: {
      title: 'À propos de moi',
      paragraphs: [
        "Développeur Full-Stack spécialisé en JavaScript et TypeScript, je conçois des applications web complètes, de l'interface utilisateur jusqu'au backend, aux API et à la base de données.",
        'Je travaille principalement avec React, Next.js, NestJS, PostgreSQL et Prisma.',
        "Je m'intéresse également aux pratiques DevOps afin de mieux maîtriser le cycle de vie complet d'une application : conteneurisation avec Docker, automatisation avec CI/CD et déploiement sur serveur avec Nginx.",
        "J'intègre également des API LLM (OpenAI) dans mes applications : prompt engineering, assistants IA et automatisation de workflows, pour concevoir des outils métier augmentés par l'IA.",
        "J'apprécie particulièrement les projets nécessitant la conception d'applications métier, de dashboards, d'API et d'architectures frontend/backend.",
        'Disponible immédiatement pour missions freelance / sous-traitance (Full Remote), collaborations à distance et opportunités en CDI ou CDD.',
      ],
    },
    workSteps: [
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
          'Choix des stacks (front, API), structure des modules, authentification JWT et stratégie de déploiement.',
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
          'Conteneurisation Docker, CI/CD, tests, mise en production et monitoring avec Git.',
      },
    ],
    experiences: [
      {
        period: '2024 — Présent',
        role: 'Développeur Full-Stack — Projet collaboratif',
        company: 'Plateforme de streaming vidéo',
        description:
          "Participation au développement d'une plateforme de streaming vidéo au sein d'une équipe de développement. Développement d'interfaces avec React, Développement du backend avec NestJS, Conception et gestion de la base de données PostgreSQL avec Prisma, Travail sur des API et fonctionnalités métier, Utilisation de Git pour le travail collaboratif, Conteneurisation et environnement Docker, Integration payment et authentification JWT, création des script pour automaitiser des taches, scrapper une siteweb pour récupérer des données, Optimisation des requetes , des recherches.",
        type: 'job',
      },
      {
        period: 'Aout 2024 - Novembre 2024',
        role: 'Stagiaire Développeur Full-Stack',
        company: 'Projet de développement web — Collaboration en équipe',
        description:
          "Stage réalisé en collaboration avec un développeur, avec lequel la coopération se poursuit actuellement à travers différents projets. Durant ce stage, j'ai appris et mis en pratique les fondamentaux du développement Full-Stack, notamment la création d'applications CRUD, la mise en place de systèmes d'authentification et le développement d'API avec NestJS connectées à une base de données PostgreSQL via Prisma. J'ai également participé au développement du jeu Fanorona Malagasy avec Next.js et React, en travaillant notamment sur : La conception et le développement de fonctionnalités du jeu, La communication en temps réel avec WebSocket, L'amélioration et le renforcement de la logique et des algorithmes du jeu, Le travail collaboratif avec Git",
        type: 'intern',
      },
      {
        period: 'Mars 2024',
        role: 'Participant Hackathon — Développeur Frontend',
        company: 'Hackathon universitaire et inter-universitaire',
        description:
          "Take a Look — Projet de surveillance domestique. Développement de la partie web avec Vue.js au sein d'une équipe de 5 étudiants. Le projet proposait une solution de surveillance domestique avec visualisation et technologies temps réel. Technologies du projet : Vue.js, Three.js, Django, Flutter, Node.js.",
        type: 'intern',
      },
      {
        period: 'Juin 2022 — Septembre 2022',
        role: "Stagiaire Développeur d'applications",
        company: 'Direction Régionale de la Sécurité Publique (DRSP) — Vakinankaratra',
        description:
          "Développement d'une application pour digitaliser la gestion des candidats et du personnel, auparavant principalement réalisée sur support papier. Mise en place de la gestion des inscriptions, affectations, congés et import/export Excel. Technologies : Java Swing, MySQL, Apache POI.",
        type: 'intern',
      },
    ],
    education: [
      {
        year: 'Novembre 2022 - Août 2024',
        title: 'Master 2 en Génie Logiciel',
        school: "École Supérieure Polytechnique d'Antsirabe (ESPA)",
        description:
          "Architecture logicielle, conception d'API modernes et automatisation des processus. Conception d'applications performantes, Mise en place d'architectures sécurisées, systèmes d'authentification et gestion de bases de données.",
      },
      {
        year: 'Novembre 2019 - Août 2022',
        title: 'Licence Professionnelle en Génie Logiciel',
        school: "École Supérieure Polytechnique d'Antsirabe (ESPA)",
        description:
          'Fondations du développement web, modélisation de bases de données, algorithmique et méthodes de travail collaboratif.',
      },
      {
        year: '2017 - 2018',
        title: 'Certificat en Anglais & Informatique',
        school: 'Universe English School of Antsirabe (UESA)',
        description:
          "Maîtrise des langues française et anglaise, et des outils informatiques de base. Un atout précieux aujourd'hui pour la veille technologique et la compréhension des documentations techniques internationales.",
      },
    ],
    techStack,
    services: [
      {
        title: 'Applications web (React / Next.js / NestJS)',
        description:
          "Frontend, backend, APIs REST, authentification JWT et composants réutilisables. Applications métier avec architecture frontend/backend et base de données PostgreSQL via Prisma.",
      },
      {
        title: 'DevOps & déploiement',
        description:
          'Conteneurisation Docker, pipelines CI/CD avec GitHub Actions, déploiement Nginx, monitoring et logs. Capacité à déployer et maintenir ce que je développe.',
      },
      {
        title: 'Intégration IA & LLM',
        description:
          "Intégration d'API LLM (OpenAI), prompt engineering, assistants IA et automatisation de workflows. Des applications métier augmentées par l'IA.",
      },
    ],
    collaborationHighlight: {
      title: 'Projet phare',
      body: "Plateforme de streaming — application Full-Stack complexe : React, NestJS, PostgreSQL, Prisma, streaming vidéo HLS, continue watching et authentification JWT.",
    },
    testimonial: {
      quote:
        "Un profil qui couvre toute la chaîne : développement frontend/backend propre, déploiement Docker et CI/CD. Une capacité rare à raisonner du code jusqu'à la production.",
      author: 'Collaborateur projet',
      role: 'Équipe streaming',
    },
    socialLinks,
    contactInfo,
  },
  en: {
    author,
    navLinks: [
      { href: '#accueil', label: 'Home' },
      { href: '#stack', label: 'Stack' },
      { href: '#apropos', label: 'About' },
      { href: '#experiences', label: 'Experience' },
      { href: '#formation', label: 'Education' },
      { href: '#processus', label: 'Process' },
      { href: '#portfolio', label: 'Portfolio' },
      { href: '#services', label: 'Services' },
      { href: '#contact', label: 'Contact' },
    ],
    headerNavLinks: [
      { href: '#accueil', label: 'Home' },
      { href: '#apropos', label: 'About' },
      { href: '#experiences', label: 'Experience' },
      { href: '#portfolio', label: 'Portfolio' },
      { href: '#services', label: 'Services' },
      { href: '#contact', label: 'Contact' },
    ],
    hero: {
      title: 'Full-Stack Developer | DevOps · AI Integration',
      subtitle:
        'I build high-performance web applications with React, Next.js, NestJS and PostgreSQL (Prisma). Curious and rigorous, I also integrate Docker, CI/CD and Nginx to automate and streamline deployment, as well as LLM APIs (OpenAI) to enhance my applications through prompt engineering, AI assistants and workflow automation.',
      stats: [
        { value: '2+', label: 'Years of experience', icon: 'briefcase' },
        { value: String(projects.length), label: 'Projects', icon: 'layers' },
        {
          value: '3',
          label: 'Full-Stack · DevOps',
          icon: 'users',
        },
      ],
    },
    about: {
      title: 'About me',
      paragraphs: [
        'Full-Stack Developer specialized in JavaScript and TypeScript, I design complete web applications, from the user interface to the backend, APIs and database.',
        'I primarily work with React, Next.js, NestJS, PostgreSQL and Prisma.',
        'I am also interested in DevOps practices to better master the full lifecycle of an application: containerization with Docker, automation with CI/CD and server deployment with Nginx.',
        'I also integrate LLM APIs (OpenAI) into my applications: prompt engineering, AI assistants and workflow automation, to build business tools augmented by AI.',
        'I particularly enjoy projects requiring the design of business applications, dashboards, APIs and frontend/backend architectures.',
        'Available immediately for freelance / subcontracting missions (Full Remote), remote collaborations and full-time or fixed-term opportunities.',
      ],
    },
    workSteps: [
      {
        step: '1',
        title: 'Analysis & scoping',
        description:
          'Understanding the need, technical constraints, data model and functional scope.',
      },
      {
        step: '2',
        title: 'Architecture',
        description:
          'Stack choices (front, API), module structure, JWT authentication and deployment strategy.',
      },
      {
        step: '3',
        title: 'Development',
        description:
          'Short iterations, REST APIs, Prisma/PostgreSQL integration, authentication and reusable UI components.',
      },
      {
        step: '4',
        title: 'Delivery & deployment',
        description:
          'Docker containerization, CI/CD, testing, production rollout and monitoring with Git.',
      },
    ],
    experiences: [
      {
        period: '2024 — Present',
        role: 'Full-Stack Developer — Collaborative project',
        company: 'Video streaming platform',
        description:
          'Participation in the development of a video streaming platform within a development team. Developed interfaces with React, built the backend with NestJS, designed and managed the PostgreSQL database with Prisma, worked on APIs and business features, used Git for collaborative work, containerization and Docker environment, payment integration and JWT authentication, created scripts to automate tasks, scraped a website to retrieve data, optimized queries and search.',
        type: 'job',
      },
      {
        period: 'August 2024 - November 2024',
        role: 'Full-Stack Developer Intern',
        company: 'Web development project — Team collaboration',
        description:
          'Internship carried out in collaboration with a developer, with whom cooperation continues today through various projects. During this internship, I learned and put into practice the fundamentals of Full-Stack development, including building CRUD applications, setting up authentication systems and developing APIs with NestJS connected to a PostgreSQL database via Prisma. I also participated in the development of the Fanorona Malagasy game with Next.js and React, working specifically on: designing and developing game features, real-time communication with WebSocket, improving and reinforcing game logic and algorithms, collaborative work with Git.',
        type: 'intern',
      },
      {
        period: 'March 2024',
        role: 'Hackathon Participant — Frontend Developer',
        company: 'University and inter-university hackathon',
        description:
          'Take a Look — Home surveillance project. Developed the web part with Vue.js within a team of 5 students. The project proposed a home surveillance solution with visualization and real-time technologies. Project technologies: Vue.js, Three.js, Django, Flutter, Node.js.',
        type: 'intern',
      },
      {
        period: 'June 2022 — September 2022',
        role: 'Application Developer Intern',
        company: 'Regional Directorate of Public Security (DRSP) — Vakinankaratra',
        description:
          'Developed an application to digitize the management of candidates and personnel, previously done mainly on paper. Set up management of registrations, assignments, leave and Excel import/export. Technologies: Java Swing, MySQL, Apache POI.',
        type: 'intern',
      },
    ],
    education: [
      {
        year: 'November 2022 - August 2024',
        title: 'Master 2 in Software Engineering',
        school: 'Higher Polytechnic School of Antsirabe (ESPA)',
        description:
          'Software architecture, modern API design and process automation. Design of high-performance applications, setup of secure architectures, authentication systems and database management.',
      },
      {
        year: 'November 2019 - August 2022',
        title: 'Professional License in Software Engineering',
        school: 'Higher Polytechnic School of Antsirabe (ESPA)',
        description:
          'Foundations of web development, database modeling, algorithms and collaborative work methods.',
      },
      {
        year: '2017 - 2018',
        title: 'Certificate in English & Computer Science',
        school: 'Universe English School of Antsirabe (UESA)',
        description:
          'Proficiency in French and English, and basic computer tools. A valuable asset today for technology monitoring and understanding international technical documentation.',
      },
    ],
    techStack,
    services: [
      {
        title: 'Web applications (React / Next.js / NestJS)',
        description:
          'Frontend, backend, REST APIs, JWT authentication and reusable components. Business applications with frontend/backend architecture and PostgreSQL database via Prisma.',
      },
      {
        title: 'DevOps & deployment',
        description:
          'Docker containerization, CI/CD pipelines with GitHub Actions, Nginx deployment, monitoring and logs. Ability to deploy and maintain what I develop.',
      },
      {
        title: 'AI & LLM integration',
        description:
          'LLM API integration (OpenAI), prompt engineering, AI assistants and workflow automation. Business applications augmented by AI.',
      },
    ],
    collaborationHighlight: {
      title: 'Flagship project',
      body: 'Streaming platform — complex Full-Stack application: React, NestJS, PostgreSQL, Prisma, HLS video streaming, continue watching and JWT authentication.',
    },
    testimonial: {
      quote:
        'A profile that covers the entire chain: clean frontend/backend development, Docker deployment and CI/CD. A rare ability to reason from code to production.',
      author: 'Project collaborator',
      role: 'Streaming team',
    },
    socialLinks,
    contactInfo,
  },
}