import { createContext, useContext } from 'react'
import type { Lang, Content } from '../site-content'

export type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: Content
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}