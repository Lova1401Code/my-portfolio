/** Structure attendue de chaque entrée dans `projects.json`. */
export type ProjectFromJson = {
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
  lien_git: string | null
  lien_autre: string | null
}
