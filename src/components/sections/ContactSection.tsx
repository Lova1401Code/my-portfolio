import { type FormEvent, type InputHTMLAttributes, useState } from 'react'
import { Container } from '../Container'
import { Button } from '../Button'
import { contactInfo } from '../../site-content'

const socialRow = [
  { label: 'LinkedIn', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'Dribbble', href: '#' },
  { label: 'Behance', href: '#' },
] as const

function Field({
  id,
  label,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  id: string
  label: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        id={id}
        className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-brand-500/0 transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"
        {...props}
      />
    </div>
  )
}

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sent')
  }

  return (
    <section id="contact" className="bg-slate-50 py-16 md:py-24">
      <Container>
        <div className="grid gap-10 rounded-3xl bg-white p-6 shadow-md ring-1 ring-slate-100 md:p-10 lg:grid-cols-2 lg:gap-14 lg:p-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
              Parlons de votre projet
            </h2>
            <p className="mt-3 text-slate-600">
              Un créneau visio ou un email suffisent pour cadrer le besoin.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-slate-700">
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                  @
                </span>
                <div>
                  <p className="font-medium text-slate-900">Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-brand-600 hover:text-brand-700"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                  📍
                </span>
                <div>
                  <p className="font-medium text-slate-900">Localisation</p>
                  <p>{contactInfo.location}</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                  ☎
                </span>
                <div>
                  <p className="font-medium text-slate-900">Téléphone</p>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    className="text-brand-600 hover:text-brand-700"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex gap-3">
              {socialRow.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-xs font-semibold text-slate-600 transition hover:border-brand-200 hover:text-brand-600"
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>

          <div>
            {status === 'sent' ? (
              <div
                className="flex h-full min-h-[320px] flex-col items-center justify-center rounded-2xl border border-dashed border-brand-200 bg-brand-50/50 p-8 text-center"
                role="status"
              >
                <p className="text-lg font-semibold text-slate-900">
                  Merci, message bien reçu.
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Branchez ce formulaire à votre backend ou à un service comme
                  Formspree lorsque vous serez prêt.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  type="button"
                  onClick={() => setStatus('idle')}
                >
                  Envoyer un autre message
                </Button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={onSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field id="name" name="name" label="Nom" required autoComplete="name" />
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    required
                    autoComplete="email"
                  />
                </div>
                <Field id="subject" name="subject" label="Sujet" required />
                <Field id="location" name="location" label="Localisation" />
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="resize-y rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-brand-500/0 transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/15"
                  />
                </div>
                <Button type="submit" className="w-full sm:w-auto">
                  Envoyer →
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
