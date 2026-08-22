import { Container } from '../Container'
import { experiences } from '../../site-content'

const typeConfig: Record<string, { label: string; classes: string }> = {
  job: { label: 'CDI', classes: 'bg-brand-100 text-brand-700' },
  freelance: { label: 'Freelance', classes: 'bg-purple-100 text-purple-700' },
  intern: { label: 'Stage', classes: 'bg-sky-100 text-sky-700' },
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
            Mon parcours en développement web et mobile, des premiers projets
            aux missions récentes.
          </p>
        </div>

        <ol className="relative mx-auto mt-10 max-w-4xl sm:mt-14">
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
                className={`relative mb-8 flex md:mb-12 ${
                  isLeft
                    ? 'md:justify-start'
                    : 'md:justify-end'
                }`}
              >
                <div
                  className="absolute left-4 top-1.5 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-600 to-purple-600 ring-4 ring-white md:left-1/2"
                  aria-hidden
                />

                <div
                  className={`ml-8 w-full md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? '' : 'md:text-right'
                  }`}
                >
                  <div className="group rounded-2xl border border-white/60 bg-white/70 p-4 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-lg sm:p-6">
                    <div
                      className={`flex flex-wrap items-center gap-2 ${
                        isLeft ? '' : 'md:justify-end'
                      }`}
                    >
                      <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
                        {item.period}
                      </span>
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${tc.classes}`}
                      >
                        {tc.label}
                      </span>
                    </div>
                    <h3 className="mt-3 text-base font-bold text-slate-900 sm:text-lg">
                      {item.role}
                    </h3>
                    <p className="text-sm font-semibold text-brand-600">
                      {item.company}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {item.description}
                    </p>
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