/** Structure attendue de chaque entrée dans `projects.json`. */
export type ProjectFromJson = {
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
  lien_git: string | null
  lien_autre: string | null
  confidentiel?: boolean
}