import { Container } from '../Container'
import { techStack } from '../../site-content'

export function StackSection() {
  return (
    <section
      id="stack"
      className="relative overflow-hidden bg-gradient-to-b from-purple-50/40 via-white to-white py-16 md:py-24"
      aria-labelledby="stack-heading"
    >
      <div
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-purple-100/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-sky-100/40 blur-3xl"
        aria-hidden
      />

      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Ma stack
          </p>
          <h2
            id="stack-heading"
            className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
          >
            Stack &amp; technologies
          </h2>
          <div
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-purple-500"
            aria-hidden
          />
          <p className="mt-4 text-sm text-slate-500 md:text-base">
            Outils et environnements que j'utilise au quotidien.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9">
          {techStack.map((tech) => (
            <li key={tech.name} className="group">
              <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-brand-200">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-xl p-3 transition-transform duration-300 group-hover:scale-110 ${
                    tech.dark ? 'bg-slate-900' : 'bg-slate-50'
                  }`}
                >
                  <img
                    src={tech.logoUrl}
                    alt={tech.name}
                    className="h-10 w-10 object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <span className="text-center text-sm font-semibold text-slate-800">
                  {tech.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}