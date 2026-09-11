import { Container } from '../Container'
import { Button } from '../Button'
import { useLanguage } from '../../i18n/useLanguage'

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
  const { t, lang } = useLanguage()
  const hero = t.hero

  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-gradient-to-b from-purple-50 via-white to-white pb-16 pt-28 sm:pb-20 sm:pt-32 md:pb-28 md:pt-36"
    >
      <div
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl sm:h-96 sm:w-96"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl sm:h-80 sm:w-80"
        aria-hidden
      />

      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/80 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 shadow-sm ring-1 ring-emerald-100">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
              </span>
              {lang === 'fr'
                ? 'Disponible immédiatement — Full Remote'
                : 'Available immediately — Full Remote'}
            </span>
            <h1 className="mt-5 text-[1.75rem] font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {hero.title}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg lg:mx-0">
              {hero.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start">
              <Button
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                {lang === 'fr' ? 'Me recruter' : 'Hire me'}
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  document
                    .getElementById('portfolio')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                {lang === 'fr' ? 'Voir le portfolio' : 'View portfolio'}
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md">
            <div
              className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr from-purple-300/50 via-pink-200/40 to-sky-300/50 blur-3xl"
              aria-hidden
            />
            <div className="relative rounded-[2rem] border border-white/40 bg-white/30 p-3 shadow-xl shadow-purple-900/10 backdrop-blur-md ring-1 ring-white/50 transition-transform duration-500 ease-out -rotate-2 hover:rotate-0 hover:scale-[1.03]">
              <img
                src="/lova_ramiharisoa.png"
                alt="Portrait professionnel"
                className="relative w-full rounded-[1.5rem] object-contain"
                loading="eager"
                decoding="async"
              />
              <div
                className="pointer-events-none absolute inset-3 rounded-[1.5rem] ring-1 ring-inset ring-white/30"
                aria-hidden
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-3 rounded-2xl bg-brand-50/80 p-4 shadow-inner ring-1 ring-brand-100 sm:grid-cols-3 sm:gap-4 sm:p-6 md:mt-14">
          {hero.stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-3 rounded-xl bg-white/80 px-4 py-3 shadow-sm ring-1 ring-slate-100"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-100 sm:h-11 sm:w-11">
                <StatIcon type={s.icon} />
              </span>
              <div className="min-w-0">
                <p className="text-lg font-bold text-slate-900 sm:text-xl">{s.value}</p>
                <p className="truncate text-xs text-slate-600 sm:text-sm">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
