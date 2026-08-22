import { Container } from '../Container'
import { testimonial } from '../../site-content'

export function TestimonialSection() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white via-purple-50/30 to-white py-14 md:py-24"
    >
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-purple-100/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-sky-100/40 blur-3xl"
        aria-hidden
      />

      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Témoignage
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Ce qu'on dit de mon travail
          </h2>
          <div
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-purple-500"
            aria-hidden
          />
        </div>

        <figure className="mx-auto mt-8 max-w-3xl rounded-3xl border border-white/60 bg-white/80 p-6 text-center shadow-xl backdrop-blur-md sm:mt-12 sm:p-8 md:p-12">
          <svg
            className="mx-auto h-10 w-10 text-brand-400 sm:h-12 sm:w-12"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
          </svg>
          <blockquote className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg md:text-xl">
            {testimonial.quote}
          </blockquote>
          <figcaption className="mt-8 flex flex-col items-center gap-2">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-purple-600 text-lg font-bold text-white shadow-md shadow-brand-600/30 ring-1 ring-white/20">
              {testimonial.author.charAt(0)}
            </span>
            <div>
              <p className="font-bold text-slate-900">{testimonial.author}</p>
              <p className="text-sm text-brand-600">{testimonial.role}</p>
            </div>
          </figcaption>
        </figure>

        <div className="mt-8 flex justify-center gap-2" aria-hidden>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                i === 0
                  ? 'bg-gradient-to-r from-brand-500 to-purple-500'
                  : 'bg-slate-300'
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}