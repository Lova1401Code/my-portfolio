import { useState, useEffect } from 'react'
import { author, headerNavLinks, navLinks } from '../site-content'

function WhatsAppIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.039zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('accueil')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-3 left-0 right-0 z-50 px-3 sm:px-6">
      <div
        className={`mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full border border-slate-200/60 px-3 py-2 backdrop-blur-xl transition-all duration-300 sm:px-4 sm:gap-4 lg:px-6 ${
            scrolled
            ? 'h-14 bg-white/95 shadow-md shadow-slate-300/30'
            : 'h-16 bg-white/80 shadow-lg shadow-slate-300/40'
        }`}
      >
        <a
          href="#accueil"
          className="flex items-center gap-2.5 text-slate-900 sm:gap-3"
          onClick={() => setOpen(false)}
        >
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-purple-600 text-sm font-extrabold tracking-tight text-white shadow-md shadow-brand-600/30 ring-1 ring-white/20 transition-transform duration-300 hover:scale-105"
            aria-hidden
          >
            {author.logoInitial}
          </span>
          <span className="flex min-w-0 flex-col leading-none">
            <span className="truncate text-sm font-bold tracking-tight text-slate-900 lg:text-base">
              {author.brandTitle}
            </span>
            <span className="mt-0.5 hidden truncate text-[11px] font-medium text-slate-500 xs:block sm:text-[11px]">
              {author.tagline}
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-5 text-sm font-medium text-slate-600 lg:flex xl:gap-7"
          aria-label="Navigation principale"
        >
          {headerNavLinks.map((link) => {
            const isActive = link.href === `#${activeId}`
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative whitespace-nowrap transition after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:rounded-full after:bg-brand-600 after:transition-all after:duration-300 ${
                  isActive
                    ? 'text-brand-600 after:w-full'
                    : 'text-slate-600 hover:text-brand-600 after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <a
            href={author.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter sur WhatsApp"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-[#25D366]/30 transition hover:bg-[#1da851] hover:shadow-md"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-700 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          {open ? '✕' : '☰'}
        </button>
      </div>

      {open ? (
        <div className="mx-auto mt-2 max-w-5xl lg:hidden">
          <div
            id="mobile-nav"
            className="rounded-3xl border border-slate-200/60 bg-white/95 p-4 shadow-lg shadow-slate-300/30 backdrop-blur-xl"
          >
            <nav className="flex flex-col gap-1 text-sm font-medium text-slate-700 sm:text-base">
              {navLinks.map((link) => {
                const isActive = link.href === `#${activeId}`
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`rounded-full px-4 py-3 transition ${
                      isActive
                        ? 'bg-brand-50 text-brand-700'
                        : 'text-slate-700 hover:bg-brand-50 hover:text-brand-700'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              })}
              <a
                href={author.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contacter sur WhatsApp"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-[#25D366]/30 transition hover:bg-[#1da851]"
                onClick={() => setOpen(false)}
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  )
}