import { Container } from '../Container'
import { useLanguage } from '../../i18n/useLanguage'
import type { SupportCategory } from '../../site-content'

function CategoryIcon({ icon }: { icon: SupportCategory['icon'] }) {
  const common = {
    className: 'h-6 w-6',
    viewBox: '0 0 24 24',
    fill: 'none' as const,
    'aria-hidden': true,
  }
  switch (icon) {
    case 'system':
      return (
        <svg {...common}>
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'network':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3 12h18M12 3c2.5 2.5 3.5 6 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-6-3.5-9s1-6.5 3.5-9z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'maintenance':
      return (
        <svg {...common}>
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'security':
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 4.5-3 8-8 9-5-1-8-4.5-8-9V6l8-3z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
  }
}

export function SupportSection() {
  const { t, lang } = useLanguage()

  return (
    <section
      id="support"
      className="relative overflow-hidden bg-gradient-to-b from-sky-50/40 via-white to-white py-14 md:py-24"
      aria-labelledby="support-heading"
    >
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-sky-100/40 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-purple-100/40 blur-3xl" aria-hidden />

      <Container>
        {/* ===== Header ===== */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            {lang === 'fr' ? 'Support Informatique' : 'IT Support'}
          </p>
          <h2 id="support-heading" className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            {lang === 'fr' ? 'Support & Maintenance IT' : 'IT Support & Maintenance'}
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-purple-500" aria-hidden />
          <p className="mt-4 text-sm text-slate-500 md:text-base">
            {lang === 'fr'
              ? "Compétences en support technique, dépannage et maintenance des postes de travail et réseaux."
              : 'Skills in technical support, troubleshooting and maintenance of workstations and networks.'}
          </p>
        </div>

        {/* ===== Bloc A — Catégories de compétences ===== */}
        <ul className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {t.supportCategories.map((cat) => (
            <li key={cat.title}>
              <article className="group flex h-full flex-col rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-brand-200 sm:p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-purple-600 text-white shadow-md shadow-brand-600/30 ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-110">
                  <CategoryIcon icon={cat.icon} />
                </span>
                <h3 className="mt-4 text-base font-bold text-slate-900 sm:text-lg">{cat.title}</h3>
                <ul className="mt-3 space-y-1.5">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2 text-sm leading-relaxed text-slate-600">
                      <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ul>

        {/* ===== Bloc B — IT Lab — Support & Maintenance ===== */}
        <div className="mt-14 sm:mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              {lang === 'fr' ? 'IT Lab — Support & Maintenance' : 'IT Lab — Support & Maintenance'}
            </p>
            <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl md:text-3xl">
              {lang === 'fr' ? 'Exercices pratiques réalisés' : 'Hands-on exercises'}
            </h3>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-purple-500" aria-hidden />
            <p className="mt-4 text-sm text-slate-500 md:text-base">
              {lang === 'fr'
                ? "Démarches de diagnostic et de maintenance appliquées sur le terrain."
                : 'Diagnostic and maintenance workflows applied in the field.'}
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:mt-12 lg:grid-cols-2">
            {t.itLabExercises.map((ex) => (
              <article key={ex.title} className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-100 transition-all duration-300 hover:shadow-lg hover:ring-brand-200 sm:p-6">
                <h4 className="text-lg font-bold text-slate-900">{ex.title}</h4>

                {/* Problème */}
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                    {lang === 'fr' ? 'Problème' : 'Problem'}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{ex.problem}</p>
                </div>

                {/* Commandes */}
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                    {lang === 'fr' ? 'Démarche' : 'Steps'}
                  </p>
                  <pre className="mt-2 overflow-x-auto rounded-xl bg-navy-900 p-4 font-mono text-xs leading-relaxed text-slate-100 sm:text-sm">
                    {ex.commands.map((cmd, i) => (
                      <span key={i}>
                        <span className="select-none text-slate-500">{(i + 1).toString().padStart(2, '0')} </span>
                        {cmd}
                        {i < ex.commands.length - 1 ? '\n' : ''}
                      </span>
                    ))}
                  </pre>
                </div>

                {/* Diagnostic */}
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                    {lang === 'fr' ? 'Diagnostic' : 'Diagnosis'}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{ex.diagnosis}</p>
                </div>

                {/* Solution */}
                <div className="mt-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-sky-600">
                    {lang === 'fr' ? 'Solution' : 'Solution'}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{ex.solution}</p>
                </div>

                {/* Résultat */}
                <div className="mt-4 rounded-xl bg-green-50 p-3 ring-1 ring-green-100">
                  <p className="text-xs font-semibold uppercase tracking-wider text-green-700">
                    {lang === 'fr' ? 'Résultat' : 'Result'}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-green-900">{ex.result}</p>
                </div>
              </article>
            ))}
          </div>

          {/* Flux installation Windows */}
          <div className="mt-8 rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-100 transition-all duration-300 hover:shadow-lg hover:ring-brand-200 sm:mt-10 sm:p-6">
            <h4 className="text-lg font-bold text-slate-900">
              {lang === 'fr' ? 'Installation Windows — Procédure complète' : 'Windows Installation — Full procedure'}
            </h4>
            <p className="mt-2 text-sm text-slate-500">
              {lang === 'fr'
                ? "De l'installation jusqu'aux tests finaux."
                : 'From installation to final testing.'}
            </p>
            <ol className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-stretch sm:justify-between">
              {t.itLabInstallSteps.map((step, i) => (
                <li key={step.label} className="flex flex-1 flex-col items-center text-center sm:flex-row sm:items-center">
                  <div className="flex flex-col items-center">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-600 to-purple-600 text-sm font-bold text-white shadow-md shadow-brand-600/30 ring-1 ring-white/20">
                      {i + 1}
                    </span>
                    <span className="mt-2 max-w-[7rem] text-xs font-medium leading-snug text-slate-700 sm:text-sm">
                      {step.label}
                    </span>
                  </div>
                  {i < t.itLabInstallSteps.length - 1 && (
                    <span className="my-2 text-brand-400 sm:mx-1 sm:my-0" aria-hidden>
                      <svg className="h-5 w-5 rotate-90 sm:rotate-0" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* ===== Bloc C — Outils utilisés ===== */}
        <div className="mt-14 sm:mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
              {lang === 'fr' ? 'Outils' : 'Tools'}
            </p>
            <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl md:text-3xl">
              {lang === 'fr' ? 'Outils utilisés' : 'Tools used'}
            </h3>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-brand-500 to-purple-500" aria-hidden />
          </div>
          <ul className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-12 sm:gap-4">
            {t.itTools.map((tool) => (
              <li key={tool}>
                <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-50 hover:text-brand-700 hover:ring-brand-200">
                  {tool}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}