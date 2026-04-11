import { Container } from '../Container'
import { Button } from '../Button'

export function CtaBannerSection() {
  return (
    <section className="bg-navy-900 py-16 md:py-20">
      <Container className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
          Vous avez une idée de projet&nbsp;? Discutons-en ensemble.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-300">
          Partagez votre contexte, vos objectifs et vos contraintes : je vous
          réponds sous 48h avec une proposition claire.
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            className="bg-gradient-to-r from-brand-500 to-brand-600 shadow-lg shadow-brand-600/30 hover:from-brand-600 hover:to-brand-700"
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
