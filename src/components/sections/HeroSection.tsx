import { Container } from '../Container'
import { Button } from '../Button'
import { hero } from '../../site-content'

function StatIcon({ type }: { type: 'briefcase' | 'layers' | 'users' }) {
  const common = 'h-5 w-5 text-brand-600'
  if (type === 'briefcase') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M4 9h16v10a2 2 0 01-2 2H6a2 2 0 01-2-2V9z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    )
  }
  if (type === 'layers') {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 3L4 7l8 4 8-4-8-4zM4 12l8 4 8-4M4 17l8 4 8-4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function HeroSection() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-sky-50 pb-16 pt-10 md:pb-24 md:pt-14"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-purple-200/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl"
        aria-hidden
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              {hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Me recruter
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  document
                    .getElementById('portfolio')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Voir le portfolio
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
            <div
              className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-purple-300/50 via-pink-200/40 to-sky-300/50 blur-3xl"
              aria-hidden
            />
            <img
              src="/lova_ramiharisoa.png"
              alt="Portrait professionnel"
              className="relative aspect-square w-full rounded-3xl object-cover object-top shadow-2xl shadow-purple-900/20 ring-1 ring-white/60 transition-transform duration-500 ease-out -rotate-2 hover:rotate-0 hover:scale-[1.03]"
              width={448}
              height={448}
              loading="eager"
              decoding="async"
            />
            <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-slate-700 shadow-lg ring-1 ring-slate-100 backdrop-blur">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              Disponible pour un poste
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-4 rounded-2xl bg-brand-50/80 p-6 shadow-inner ring-1 ring-brand-100 sm:grid-cols-3">
          {hero.stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-3 rounded-xl bg-white/80 px-4 py-3 shadow-sm ring-1 ring-slate-100"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-100">
                <StatIcon type={s.icon} />
              </span>
              <div>
                <p className="text-xl font-bold text-slate-900">{s.value}</p>
                <p className="text-sm text-slate-600">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
