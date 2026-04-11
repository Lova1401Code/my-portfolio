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
    <svg className="h-6 w-6 text-brand-600" viewBox="0 0 24 24" fill="none" aria-hidden>
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
    <section id="processus" className="bg-slate-50 py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Processus de travail
            </h2>
            <p className="mt-4 max-w-md text-slate-600 leading-relaxed">
              Une méthode claire pour livrer des résultats mesurables : comprendre,
              prioriser, concevoir puis itérer avec votre équipe.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {workSteps.map((item, i) => (
              <article
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100">
                  <StepIcon index={i} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {item.step}. {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
