import { Container } from '../Container'
import { testimonial } from '../../site-content'

export function TestimonialSection() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Témoignage
          </h2>
          <p className="mt-3 text-slate-600">
            Retour d’expérience d’un partenaire avec qui j’ai livré un produit exigeant.
          </p>
        </div>

        <figure className="mx-auto mt-12 max-w-3xl rounded-3xl bg-brand-50/60 p-8 text-center shadow-inner ring-1 ring-brand-100 md:p-12">
          <span className="text-4xl text-brand-500" aria-hidden>
            “
          </span>
          <blockquote className="text-lg leading-relaxed text-slate-700 md:text-xl">
            {testimonial.quote}
          </blockquote>
          <figcaption className="mt-8 flex flex-col items-center gap-2">
            <img
              src="/profile.png"
              alt=""
              className="h-14 w-14 rounded-full object-cover ring-2 ring-white shadow"
              width={56}
              height={56}
              loading="lazy"
            />
            <div>
              <p className="font-semibold text-slate-900">{testimonial.author}</p>
              <p className="text-sm text-slate-600">{testimonial.role}</p>
            </div>
          </figcaption>
        </figure>

        <div className="mt-8 flex justify-center gap-2" aria-hidden>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-2.5 w-2.5 rounded-full ${i === 0 ? 'bg-brand-600' : 'bg-slate-300'}`}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
