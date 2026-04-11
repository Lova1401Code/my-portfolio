import { useState } from 'react'
import { Container } from '../Container'
import { Button } from '../Button'
import { services } from '../../site-content'

export function ServicesSection() {
  const [active, setActive] = useState(0)

  return (
    <section id="services" className="py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Que fais-je&nbsp;?
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Je combine design centré utilisateur et intégration front moderne pour
              livrer des interfaces soignées, accessibles et prêtes à scaler.
            </p>
            <Button
              className="mt-8"
              onClick={() =>
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Me recruter
            </Button>
          </div>

          <div className="flex flex-col gap-4">
            {services.map((service, index) => {
              const isActive = index === active
              return (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`rounded-2xl border bg-white p-6 text-left shadow-sm transition ring-1 ${
                    isActive
                      ? 'border-brand-200 ring-brand-200 shadow-md'
                      : 'border-slate-100 ring-slate-100 hover:border-brand-100'
                  }`}
                >
                  <span
                    className={`block h-1 w-12 rounded-full ${isActive ? 'bg-brand-600' : 'bg-slate-200'}`}
                    aria-hidden
                  />
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {service.description}
                  </p>
                </button>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
