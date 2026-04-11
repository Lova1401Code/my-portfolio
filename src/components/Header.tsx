import { useState } from 'react'
import { Container } from './Container'
import { Button } from './Button'
import { navLinks } from '../site-content'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100/80 bg-white/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-20">
        <a
          href="#accueil"
          className="flex items-center gap-2 text-slate-900"
          onClick={() => setOpen(false)}
        >
          <span
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white"
            aria-hidden
          >
            B
          </span>
          <span className="text-lg font-semibold tracking-tight">Brooklyn</span>
        </a>

        <nav
          className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex"
          aria-label="Navigation principale"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-brand-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            variant="primary"
            className="!px-5 !py-2.5"
            onClick={() =>
              document
                .getElementById('contact')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Contact
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          {open ? '✕' : '☰'}
        </button>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-slate-100 bg-white px-4 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-2 hover:bg-brand-50 hover:text-brand-700"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              className="mt-2 w-full"
              onClick={() => {
                setOpen(false)
                document
                  .getElementById('contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Contact
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
