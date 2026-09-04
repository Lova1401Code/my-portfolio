import { useState } from 'react'
import { Container } from '../Container'
import { Button } from '../Button'
import { projects } from '../../data/projects'
import { ProjectModal } from '../ProjectModal'

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

function ArrowIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M5 12h14m0 0l-6-6m6 6l-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function PortfolioSection() {
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null)

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-gradient-to-b from-purple-50/40 via-white to-white py-14 md:py-24"
    >
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-purple-100/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-sky-100/40 blur-3xl"
        aria-hidden
      />

      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Réalisations
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Portfolio
          </h2>
          <div
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-purple-500"
            aria-hidden
          />
          <p className="mt-4 text-sm text-slate-500 md:text-base">
            Une sélection de projets web et full stack que j'ai conçus
            et développés. Cliquez sur un projet pour voir les détails.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={`${project.titre_du_projet}-${project.date}`}
              className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/60 bg-white/80 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-xl"
              onClick={() => setSelected(project)}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.titre_du_projet}
                  className="h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center bg-slate-900/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                >
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg">
                    Voir les détails
                    <ArrowIcon />
                  </span>
                </div>
                {project.confidentiel && (
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-amber-400/90 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-950 shadow-md backdrop-blur-sm">
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                    </svg>
                    Confidentiel
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <time
                  className="text-xs font-semibold uppercase tracking-wider text-brand-600"
                  dateTime={project.date}
                >
                  {formatDate(project.date)}
                </time>
                <h3 className="mt-2 text-base font-bold leading-snug text-slate-900 sm:text-lg">
                  {project.titre_du_projet}
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm text-slate-600">
                  {project.description_projet}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.techno_utilisee.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700 ring-1 ring-brand-100"
                    >
                      {t}
                    </span>
                  ))}
                  {project.techno_utilisee.length > 4 ? (
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600">
                      +{project.techno_utilisee.length - 4}
                    </span>
                  ) : null}
                </div>

                <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4 text-sm font-semibold text-brand-600">
                  Voir le projet
                  <ArrowIcon />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <Button
            variant="primary"
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Discutons de votre projet
          </Button>
        </div>
      </Container>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  )
}