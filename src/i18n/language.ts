import { createContext, useContext } from 'react'
import { pt, type SiteContent } from '../data/content'

export type Lang = 'pt' | 'en'

type LanguageState = {
  lang: Lang
  setLang: (lang: Lang) => void
  content: SiteContent
}

export const LanguageContext = createContext<LanguageState>({
  lang: 'pt',
  setLang: () => {},
  content: pt,
})

/** Idioma atual e função para trocar. */
export function useLanguage() {
  return useContext(LanguageContext)
}

/** Conteúdo do site no idioma atual. */
export function useContent() {
  return useContext(LanguageContext).content
}
