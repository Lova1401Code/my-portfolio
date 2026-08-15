import { Container } from '../Container'
import { education } from '../../site-content'

function DiplomaIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M22 10L12 5 2 10l10 5 10-5zM6 12v5c0 1 3 3 6 3s6-2 6-3v-5M22 10v6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function EducationSection() {
  return (
    <section
      id="formation"
      className="relative overflow-hidden bg-gradient-to-b from-sky-50/40 via-white to-white py-16 md:py-24"
    >
      <div
        className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-sky-100/50 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-brand-100/40 blur-3xl"
        aria-hidden
      />

      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Formation
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Diplômes &amp; formations
          </h2>
          <div
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-purple-500"
            aria-hidden
          />
          <p className="mt-4 text-sm text-slate-500 md:text-base">
            Mes diplômes, certifications et formations qui ont forgé mes
            compétences techniques.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((item) => (
            <article
              key={item.title + item.school}
              className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-brand-200"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-purple-600 text-white shadow-md shadow-brand-600/30 ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-110">
                  <DiplomaIcon />
                </span>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 ring-1 ring-brand-100">
                  {item.year}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">
                {item.title}
              </h3>
              <p className="text-sm font-semibold text-brand-600">
                {item.school}
              </p>
              {item.description ? (
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}