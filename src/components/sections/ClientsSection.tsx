import { Container } from '../Container'
import { collaborationHighlight } from '../../site-content'

export function ClientsSection() {
  return (
    <section className="relative overflow-hidden border-y border-slate-100 bg-gradient-to-b from-white via-purple-50/30 to-white py-12 md:py-16">
      <div
        className="pointer-events-none absolute -right-32 top-0 h-72 w-72 rounded-full bg-brand-100/30 blur-3xl"
        aria-hidden
      />
      <Container>
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/60 bg-white/70 p-6 text-center shadow-md backdrop-blur-md sm:p-8 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Collaboration
          </p>
          <h2 className="mt-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl md:text-3xl">
            {collaborationHighlight.title}
          </h2>
          <div
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-purple-500"
            aria-hidden
          />
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            {collaborationHighlight.body}
          </p>
          <p className="mt-6 flex flex-wrap justify-center gap-x-2 gap-y-1.5 text-xs font-semibold text-brand-700 sm:text-sm">
            {['React', 'Next.js', 'NestJS', 'React Native', 'PostgreSQL', 'Prisma', 'Stripe', 'Git'].map(
              (tech) => (
                <span key={tech} className="rounded-full bg-brand-50 px-3 py-1 ring-1 ring-brand-100">
                  {tech}
                </span>
              )
            )}
          </p>
        </div>
      </Container>
    </section>
  )
}