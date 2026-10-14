import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { pt } from '../data/content'
import { en } from '../data/content.en'
import { LanguageContext, type Lang } from './language'

const STORAGE_KEY = 'lang'

/** Primeira visita: segue o idioma do navegador. Depois: a última escolha da pessoa. */
function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'pt' || saved === 'en') return saved
  } catch {
    // navegação privada ou armazenamento bloqueado: segue sem lembrar
  }
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignora: a troca funciona, só não fica salva
    }
  }, [])

  const content = lang === 'pt' ? pt : en

  // Mantém <html lang> e a descrição da página no idioma certo
  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en'
    document.querySelector('meta[name="description"]')?.setAttribute('content', content.ui.metaDescription)
  }, [lang, content])

  const value = useMemo(() => ({ lang, setLang, content }), [lang, setLang, content])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
