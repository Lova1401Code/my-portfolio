import { Container } from '../Container'
import { Button } from '../Button'
import { about, socialLinks } from '../../site-content'

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
              <div className="relative w-full max-w-sm">
                <div
                  className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand-200/50 via-purple-200/40 to-sky-200/40 blur-3xl"
                  aria-hidden
                />
                <img
                  src="/ramiharisoa.png"
                  alt="Portrait"
                  className="relative aspect-[2/3] w-full rounded-2xl object-cover object-top shadow-xl ring-1 ring-white/60 transition-transform duration-500 ease-out rotate-2 hover:rotate-0 hover:scale-[1.02]"
                  width={384}
                  height={576}
                  loading="lazy"
                />
                <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-slate-700 shadow-lg ring-1 ring-slate-100 backdrop-blur">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  Disponible pour un poste
                </div>
              </div>
              <div className="mt-8 flex gap-2">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white shadow-sm transition hover:bg-brand-700"
                  >
                    <span className="text-xs font-semibold">{s.short}</span>
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
