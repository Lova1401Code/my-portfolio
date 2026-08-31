import { useState } from 'react'
import { Container } from '../Container'
import { Button } from '../Button'
import { services } from '../../site-content'

const serviceIcons = [
  'M9 17V9m6 8V5m-9 12h12',
  'M12 3v18M5 10h14',
  'M4 4h16v16H4zM9 9h6v6H9z',
  'M5 12l4 4L19 6',
] as const

export function ServicesSection() {
  const [active, setActive] = useState(0)

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white py-14 md:py-24"
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
            Expertise
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Que fais-je&nbsp;?
          </h2>
          <div
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-purple-500"
            aria-hidden
          />
          <p className="mt-4 text-sm text-slate-500 md:text-base">
            Du front web aux APIs et bases de données : je couvre tout
            le cycle technique d'un produit digital, en privilégiant la clarté
            du code et la maintenabilité.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-2 lg:items-start">
          <div className="flex flex-col gap-4">
            {services.map((service, index) => {
              const isActive = index === active
              return (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`group rounded-2xl border p-4 text-left transition-all duration-300 sm:p-6 ${
                    isActive
                      ? 'border-brand-200 bg-white shadow-lg ring-1 ring-brand-200'
                      : 'border-slate-100 bg-white/60 shadow-sm hover:border-brand-100 hover:bg-white/80'
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 sm:h-12 sm:w-12 ${
                        isActive
                          ? 'bg-gradient-to-br from-brand-600 to-purple-600 text-white shadow-md shadow-brand-600/30'
                          : 'bg-slate-100 text-slate-500 group-hover:bg-brand-100 group-hover:text-brand-600'
                      }`}
                    >
                      <svg
                        className="h-6 w-6"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden
                      >
                        <path
                          d={serviceIcons[index] ?? serviceIcons[0]}
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span
                      className="h-1 flex-1 rounded-full transition-colors duration-300"
                      aria-hidden
                    />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-slate-900 sm:text-lg">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </button>
              )
            })}
          </div>

          <div className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 to-navy-800 p-6 text-white shadow-xl sm:p-8 md:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">
                {services[active]?.title}
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
                {services[active]?.description}
              </p>
              <div
                className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-purple-500"
                aria-hidden
              />
              <Button
                className="mt-8 bg-gradient-to-r from-brand-500 to-brand-600 shadow-lg shadow-brand-600/30 hover:from-brand-600 hover:to-brand-700"
                onClick={() =>
                  document
                    .getElementById('contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Me recruter
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}