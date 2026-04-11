import { Container } from './Container'
import { navLinks } from '../site-content'

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Dribbble', href: 'https://dribbble.com' },
  { label: 'Behance', href: 'https://behance.net' },
] as const

export function Footer() {
  return (
    <footer className="bg-navy-950 py-10 text-slate-300">
      <Container className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <a href="#accueil" className="flex items-center gap-2 text-white">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-sm font-bold">
            B
          </span>
          <span className="font-semibold">Brooklyn</span>
        </a>

        <nav className="flex flex-wrap justify-center gap-4 text-sm">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
          <div className="flex gap-4 text-sm">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                {s.label}
              </a>
            ))}
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Brooklyn Gilbert. Tous droits réservés.
          </p>
        </div>
      </Container>
    </footer>
  )
}
