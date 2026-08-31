import { Container } from '../Container'
import { experiences } from '../../site-content'

const typeConfig: Record<
  string,
  { label: string; classes: string; icon: string }
> = {
  job: {
    label: 'Collaboration',
    classes: 'bg-brand-100 text-brand-700 ring-brand-200',
    icon: 'M9 17V9m6 8V5m-9 12h12',
  },
  freelance: {
    label: 'Freelance',
    classes: 'bg-purple-100 text-purple-700 ring-purple-200',
    icon: 'M12 3v18M5 10h14',
  },
  intern: {
    label: 'Stage',
    classes: 'bg-sky-100 text-sky-700 ring-sky-200',
    icon: 'M4 4h16v16H4zM9 9h6v6H9z',
  },
}

export function ExperienceSection() {
  return (
    <section
      id="experiences"
      className="relative overflow-hidden bg-gradient-to-b from-purple-50/40 via-white to-white py-14 md:py-24"
    >
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-brand-100/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-purple-100/40 blur-3xl"
        aria-hidden
      />

      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Parcours
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Expériences professionnelles
          </h2>
          <div
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-purple-500"
            aria-hidden
          />
          <p className="mt-4 text-sm text-slate-500 md:text-base">
            Mon parcours en développement web, des premiers projets
            aux missions récentes.
          </p>
        </div>

        <ol className="relative mx-auto mt-10 max-w-5xl sm:mt-14">
          <div
            className="pointer-events-none absolute left-4 top-2 h-full w-0.5 bg-gradient-to-b from-brand-500 via-purple-500 to-transparent md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />

          {experiences.map((item, i) => {
            const tc = typeConfig[item.type] ?? typeConfig.job
            const isLeft = i % 2 === 0
            return (
              <li
                key={item.role + item.company}
                className={`relative mb-8 flex md:mb-14 ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                <div
                  className="absolute left-4 top-2 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-purple-600 ring-4 ring-white md:left-1/2"
                  aria-hidden
                >
                  <span className="h-2.5 w-2.5 rounded-full bg-white" />
                  <span className="absolute inset-0 animate-ping rounded-full bg-brand-500/40" />
                </div>

                <div className="ml-8 w-full md:ml-0 md:w-[calc(50%-1.5rem)]">
                  <div className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-xl sm:p-8">
                    <div
                      className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-100/50 blur-2xl transition-opacity duration-300 group-hover:bg-brand-200/60"
                      aria-hidden
                    />

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
                        <svg
                          className="h-3.5 w-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden
                        >
                          <path
                            d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M4 9h16v10a2 2 0 01-2 2H6a2 2 0 01-2-2V9z"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </svg>
                        {item.period}
                      </span>
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ${tc.classes}`}
                      >
                        <svg
                          className="h-3.5 w-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden
                        >
                          <path
                            d={tc.icon}
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {tc.label}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold leading-snug text-slate-900 sm:text-xl">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-brand-600">
                      {item.company}
                    </p>
                    <p className="mt-3 text-justify text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>

                    <div
                      className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"
                      aria-hidden
                    />
                    <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-400">
                      <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
                      {item.period}
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}