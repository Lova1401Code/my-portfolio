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

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-2xl bg-white p-4 shadow-lg shadow-slate-200/60 ring-1 ring-slate-100">
              <img
                src="/profile.png"
                alt="Portrait professionnel de Brooklyn Gilbert"
                className="aspect-[4/5] w-full rounded-xl object-cover"
                width={560}
                height={700}
                loading="eager"
                decoding="async"
              />
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
