import { Container } from '../Container'
import { Button } from '../Button'

export function CtaBannerSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-900 to-navy-950 py-14 md:py-20">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl sm:h-96 sm:w-96"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl sm:h-80 sm:w-80"
        aria-hidden
      />

      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">
          Collaboration
        </p>
        <h2 className="mx-auto mt-2 max-w-3xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl">
          Vous avez une idée de projet&nbsp;? Discutons-en ensemble.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
          Partagez votre contexte, vos objectifs et vos contraintes : je vous
          réponds sous 48h avec une proposition claire.
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            className="bg-gradient-to-r from-brand-500 to-purple-500 shadow-lg shadow-brand-600/30 transition hover:from-brand-600 hover:to-purple-600"
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Travaillons ensemble →
          </Button>
        </div>
      </Container>
    </section>
  )
}