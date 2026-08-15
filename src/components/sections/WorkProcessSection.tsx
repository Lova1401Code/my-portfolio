import { Container } from '../Container'
import { workSteps } from '../../site-content'

function StepIcon({ index }: { index: number }) {
  const paths = [
    'M4 19h16M8 17V9m4 8V5m4 12v-6',
    'M12 3v18M5 10h14',
    'M4 4h16v16H4zM9 9h6v6H9z',
    'M5 12l4 4L19 6',
  ] as const
  const d = paths[index] ?? paths[0]
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d={d}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function WorkProcessSection() {
  return (
    <section
      id="processus"
      className="relative overflow-hidden bg-gradient-to-b from-purple-50/40 via-white to-white py-16 md:py-24"
    >
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-brand-100/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-sky-100/40 blur-3xl"
        aria-hidden
      />

      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Méthodologie
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Processus de travail
          </h2>
          <div
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-purple-500"
            aria-hidden
          />
          <p className="mt-4 text-sm text-slate-500 md:text-base">
            Une méthode claire pour livrer des résultats mesurables : comprendre,
            prioriser, concevoir puis itérer avec votre équipe.
          </p>
        </div>

        <ol className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-300/60 to-transparent lg:block"
            aria-hidden
          />
          {workSteps.map((item, i) => (
            <li key={item.title} className="group relative flex">
              <div className="flex h-full w-full flex-col rounded-2xl border border-white/60 bg-white/70 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:bg-white hover:shadow-lg">
                <div className="flex items-center gap-3">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-purple-600 text-white shadow-md shadow-brand-600/30 ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-110">
                    <StepIcon index={i} />
                  </span>
                  <span className="text-4xl font-extrabold leading-none text-slate-100 transition-colors duration-300 group-hover:text-brand-100">
                    {item.step}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}