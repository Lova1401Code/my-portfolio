import { Container } from '../Container'
import { Button } from '../Button'
import { about } from '../../site-content'

const socials = [
  { label: 'Facebook', href: '#' },
  { label: 'Twitter', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Instagram', href: '#' },
] as const

function DownloadIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3v12m0 0l4-4m-4 4l-4-4M5 19h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function AboutSection() {
  return (
    <section id="apropos" className="py-16 md:py-24">
      <Container>
        <div className="rounded-3xl bg-white p-6 shadow-md ring-1 ring-slate-100 md:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative w-full max-w-sm overflow-hidden rounded-2xl shadow-sm ring-1 ring-slate-100">
                <img
                  src="/profile.png"
                  alt="Brooklyn Gilbert"
                  className="aspect-square w-full object-cover"
                  width={480}
                  height={480}
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white shadow-sm transition hover:bg-brand-700"
                  >
                    <span className="text-xs font-semibold">
                      {s.label.slice(0, 1)}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                {about.title}
              </h2>
              <div className="mt-6 space-y-4 text-slate-600">
                {about.paragraphs.map((p, i) => (
                  <p key={i} className="leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  onClick={() =>
                    document
                      .getElementById('portfolio')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Portfolio
                </Button>
                <Button variant="outline" className="gap-2">
                  <DownloadIcon />
                  Télécharger le CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
