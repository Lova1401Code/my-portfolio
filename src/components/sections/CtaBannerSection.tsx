import { Container } from '../Container'
import { Button } from '../Button'

export function CtaBannerSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-900 to-navy-950 py-16 md:py-20">
      <div
        className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-brand-600/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl"
        aria-hidden
      />

      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">
          Collaboration
        </p>
        <h2 className="mx-auto mt-2 max-w-3xl text-3xl font-bold tracking-tight text-white md:text-4xl">
          Vous avez une idée de projet&nbsp;? Discutons-en ensemble.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
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