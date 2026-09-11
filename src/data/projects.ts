import type { Lang } from '../site-content'

export type Project = {
  titre_du_projet: string
  titre_du_projet_en?: string
  description_projet: string
  description_projet_en?: string
  probleme: string
  probleme_en?: string
  solution: string
  solution_en?: string
  image: string
  date: string
  techno_utilisee: string[]
  fonctionnalite_principale: string[]
  fonctionnalite_principale_en?: string[]
  approche_technique: string
  approche_technique_en?: string
  resultat: string
  resultat_en?: string
  deploiement?: string
  deploiement_en?: string
  lien_git: string | null
  lien_autre: string | null
  confidentiel?: boolean
}

export type LocalizedProject = {
  titre_du_projet: string
  description_projet: string
  probleme: string
  solution: string
  image: string
  date: string
  techno_utilisee: string[]
  fonctionnalite_principale: string[]
  approche_technique: string
  resultat: string
  deploiement?: string
  lien_git: string | null
  lien_autre: string | null
  confidentiel?: boolean
}

import projectsData from './projects.json'

export const projects: Project[] = projectsData as Project[]

export function localizeProject(p: Project, lang: Lang): LocalizedProject {
  return {
    titre_du_projet: lang === 'en' ? (p.titre_du_projet_en ?? p.titre_du_projet) : p.titre_du_projet,
    description_projet:
      lang === 'en' ? (p.description_projet_en ?? p.description_projet) : p.description_projet,
    probleme: lang === 'en' ? (p.probleme_en ?? p.probleme) : p.probleme,
    solution: lang === 'en' ? (p.solution_en ?? p.solution) : p.solution,
    image: p.image,
    date: p.date,
    techno_utilisee: p.techno_utilisee,
    fonctionnalite_principale:
      lang === 'en'
        ? (p.fonctionnalite_principale_en ?? p.fonctionnalite_principale)
        : p.fonctionnalite_principale,
    approche_technique:
      lang === 'en' ? (p.approche_technique_en ?? p.approche_technique) : p.approche_technique,
    resultat: lang === 'en' ? (p.resultat_en ?? p.resultat) : p.resultat,
    deploiement: lang === 'en' ? (p.deploiement_en ?? p.deploiement) : p.deploiement,
    lien_git: p.lien_git,
    lien_autre: p.lien_autre,
    confidentiel: p.confidentiel,
  }
}