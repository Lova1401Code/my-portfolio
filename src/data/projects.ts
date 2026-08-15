export type Project = {
  titre_du_projet: string
  description_projet: string
  image: string
  date: string
  techno_utilisee: string[]
  fonctionnalite_principale: string[]
  approche_technique: string
  resultat: string
  lien_git: string | null
  lien_autre: string | null
}

import projectsData from './projects.json'

export const projects: Project[] = projectsData as Project[]