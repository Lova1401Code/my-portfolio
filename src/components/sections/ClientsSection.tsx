import { Container } from '../Container'
import { collaborationHighlight } from '../../site-content'

export function ClientsSection() {
  return (
    <section className="relative overflow-hidden border-y border-slate-100 bg-gradient-to-b from-white via-purple-50/30 to-white py-14 md:py-16">
      <Container>
        <div className="mx-auto max-w-3xl rounded-2xl bg-slate-50 p-8 text-center ring-1 ring-slate-100 md:p-10">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            {collaborationHighlight.title}
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            {collaborationHighlight.body}
          </p>
          <p className="mt-6 text-sm font-medium text-brand-700">
            React · Next.js · NestJS · React Native · PostgreSQL · Prisma · Stripe · Git
          </p>
        </div>
      </Container>
    </section>
  )
}
