import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { LanguageContext } from './useLanguage'
import { translations, type Lang } from '../site-content'

const STORAGE_KEY = 'portfolio-lang'

function detectInitialLang(): Lang {
  if (typeof window === 'undefined') return 'fr'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'fr' || stored === 'en') return stored
  } catch {
    // ignore
  }
  const nav = window.navigator.language?.toLowerCase() ?? 'fr'
  return nav.startsWith('fr') ? 'fr' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // ignore
    }
    document.documentElement.lang = lang
  }, [lang])

  const setLang = useCallback((l: Lang) => setLangState(l), [])

  const value = useMemo(
    () => ({ lang, setLang, t: translations[lang] }),
    [lang, setLang],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}