import { Container } from '../Container'
import { clientLogos } from '../../site-content'

export function ClientsSection() {
  return (
    <section className="border-y border-slate-100 bg-white py-14 md:py-16">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            Ils me font confiance
          </h2>
          <p className="mt-2 text-sm text-slate-600 md:text-base">
            Collaborations avec des équipes produit, marketing et tech.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {clientLogos.map((c) => (
            <div
              key={c.name}
              className="flex h-12 min-w-[5.5rem] items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-semibold tracking-wide text-slate-400 grayscale transition hover:grayscale-0"
              title={c.name}
            >
              {c.abbr}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
