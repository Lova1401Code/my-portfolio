import { type FormEvent, type InputHTMLAttributes, useState } from 'react'
import { Container } from '../Container'
import { Button } from '../Button'
import { author, contactInfo, socialLinks } from '../../site-content'

function WhatsAppIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.039zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  )
}

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
        className="rounded-xl border border-slate-200 bg-white/80 px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-brand-500/0 transition focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/15"
        {...props}
      />
    </div>
  )
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeaqebza'

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    setStatus('loading')
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      if (res.ok) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-sky-50/40 via-white to-white py-14 md:py-24"
    >
      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-sky-100/40 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-brand-100/40 blur-3xl"
        aria-hidden
      />

      <Container>
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            Contact
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            Parlons de votre projet
          </h2>
          <div
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-purple-500"
            aria-hidden
          />
          <p className="mt-4 text-sm text-slate-500 md:text-base">
            Un créneau visio ou un message suffisent pour cadrer le besoin.
          </p>
        </div>

        <div className="grid gap-8 rounded-3xl border border-white/60 bg-white/80 p-4 shadow-xl backdrop-blur-md sm:p-6 md:grid-cols-2 md:gap-10 md:p-10 lg:gap-14 lg:p-12">
          <div>
            <ul className="space-y-4 text-sm text-slate-700 sm:space-y-5">
              <li className="flex items-center gap-3 sm:gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-purple-600 text-white shadow-md shadow-brand-600/30 sm:h-12 sm:w-12">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M4 6h16v12H4z M4 6l8 7 8-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-slate-900">Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="break-all text-brand-600 transition hover:text-brand-700"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 sm:gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-purple-600 text-white shadow-md shadow-brand-600/30 sm:h-12 sm:w-12">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 2a7 7 0 00-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 00-7-7z M12 6a3 3 0 100 6 3 3 0 000-6z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-slate-900">Localisation</p>
                  <p>{contactInfo.location}</p>
                </div>
              </li>
              <li className="flex items-center gap-3 sm:gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-purple-600 text-white shadow-md shadow-brand-600/30 sm:h-12 sm:w-12">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L18 13l5 2v4a2 2 0 01-2 2A16 16 0 015 6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p className="font-semibold text-slate-900">Téléphone</p>
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    className="text-brand-600 transition hover:text-brand-700"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </li>
            </ul>

            <a
              href={author.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter sur WhatsApp"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#25D366]/30 transition hover:bg-[#1da851]"
            >
              <WhatsAppIcon />
              Discuter sur WhatsApp
            </a>

            <div className="mt-6 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-xs font-semibold text-slate-600 transition hover:border-brand-200 hover:bg-brand-50 hover:text-brand-600"
                >
                  {s.short}
                </a>
              ))}
            </div>
          </div>

          <div>
            {status === 'sent' ? (
              <div
                className="flex h-full min-h-[280px] flex-col items-center justify-center rounded-2xl border border-dashed border-brand-200 bg-brand-50/50 p-6 text-center sm:min-h-[320px] sm:p-8"
                role="status"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-purple-600 text-white shadow-md shadow-brand-600/30">
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M5 12l4 4L19 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="mt-4 text-base font-semibold text-slate-900 sm:text-lg">
                  Merci, message bien reçu.
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Je vous réponds dès que possible.
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
            ) : status === 'error' ? (
              <div
                className="flex h-full min-h-[280px] flex-col items-center justify-center rounded-2xl border border-dashed border-red-200 bg-red-50/50 p-6 text-center sm:min-h-[320px] sm:p-8"
                role="alert"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-600">
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M12 9v4m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="mt-4 text-base font-semibold text-slate-900 sm:text-lg">
                  Échec de l'envoi.
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Une erreur est survenue. Veuillez réessayer ou m'écrire directement par email.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  type="button"
                  onClick={() => setStatus('idle')}
                >
                  Réessayer
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
                    className="resize-y rounded-xl border border-slate-200 bg-white/80 px-4 py-2.5 text-sm text-slate-900 shadow-sm outline-none ring-brand-500/0 transition focus:border-brand-500 focus:bg-white focus:ring-4 focus:ring-brand-500/15"
                  />
                </div>
                <Button type="submit" disabled={status === 'loading'} className="w-full sm:w-auto">
                  {status === 'loading' ? 'Envoi…' : 'Envoyer →'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}