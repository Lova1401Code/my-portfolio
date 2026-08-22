import { useEffect } from 'react'
import { Button } from './Button'
import { projects } from '../data/projects'

type Project = (typeof projects)[number]

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date(iso))
  } catch {
    return iso
  }
}

function GitHubIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M10 13a5 5 0 007.07.07l3-3a5 5 0 00-7.07-7.07l-1.82 1.82M14 11a5 5 0 00-7.07-.07l-3 3a5 5 0 007.07 7.07l1.82-1.82"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-slate-900/60 p-3 backdrop-blur-sm sm:p-6 md:items-center"
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
          <img
            src={project.image}
            alt={project.titre_du_projet}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"
            aria-hidden
          />
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-lg transition hover:bg-white hover:text-slate-900 sm:right-4 sm:top-4 sm:h-10 sm:w-10"
            aria-label="Fermer"
          >
            <CloseIcon />
          </button>
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            <time
              className="text-xs font-semibold uppercase tracking-wider text-white/80"
              dateTime={project.date}
            >
              {formatDate(project.date)}
            </time>
            <h3 id="modal-title" className="mt-1 text-xl font-bold text-white sm:text-2xl">
              {project.titre_du_projet}
            </h3>
          </div>
        </div>

        <div className="max-h-[50vh] overflow-y-auto p-4 sm:p-6 md:p-8">
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            {project.description_projet}
          </p>

          <div className="mt-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-600">
              Technologies utilisées
            </h4>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.techno_utilisee.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 ring-1 ring-brand-100"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-brand-600">
              Fonctionnalités
            </h4>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {project.fonctionnalite_principale.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-slate-700"
                >
                  <span
                    className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-purple-600"
                    aria-hidden
                  >
                    <svg className="h-2.5 w-2.5 text-white" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-100 sm:p-5">
              <h4 className="text-sm font-bold text-slate-900">Approche technique</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {project.approche_technique}
              </p>
            </div>
            <div className="rounded-2xl bg-brand-50/60 p-4 ring-1 ring-brand-100 sm:p-5">
              <h4 className="text-sm font-bold text-slate-900">Résultat</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {project.resultat}
              </p>
            </div>
          </div>

          {(project.lien_git || project.lien_autre) && (
            <div className="mt-6 flex flex-wrap gap-3">
              {project.lien_git && (
                <a
                  href={project.lien_git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
                >
                  <GitHubIcon />
                  Voir sur GitHub
                </a>
              )}
              {project.lien_autre && (
                <Button
                  variant="primary"
                  className="!px-5 !py-2.5"
                  onClick={() => window.open(project.lien_autre!, '_blank')}
                >
                  <LinkIcon />
                  Voir le site
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}