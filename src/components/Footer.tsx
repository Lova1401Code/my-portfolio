import { Container } from './Container'
import { author, navLinks, socialLinks } from '../site-content'

export function Footer() {
  return (
    <footer className="bg-navy-950 py-8 text-slate-300 sm:py-10">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <a href="#accueil" className="flex items-center gap-3 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-purple-600 text-xs font-extrabold tracking-tight text-white shadow-md shadow-brand-600/30 ring-1 ring-white/20">
            {author.logoInitial}
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-semibold">{author.brandTitle}</span>
            <span className="mt-0.5 text-xs font-medium text-slate-400">
              {author.tagline}
            </span>
          </span>
        </a>

        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-center text-sm">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
          <div className="flex gap-4 text-sm">
            {socialLinks.map((s) => {
              const external = s.href.startsWith('http')
              return (
                <a
                  key={s.label}
                  href={s.href}
                  {...(external
                    ? { target: '_blank', rel: 'noreferrer' as const }
                    : {})}
                  className="hover:text-white"
                >
                  {s.label}
                </a>
              )
            })}
          </div>
          <p className="text-center text-xs text-slate-500">
            © {new Date().getFullYear()} {author.brandTitle}. Tous droits réservés.
          </p>
        </div>
      </Container>
    </footer>
  )
}
