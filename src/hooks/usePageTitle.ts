import { useEffect } from 'react'
import { useContent } from '../i18n/language'

/** Define o título da aba do navegador, ex.: "Projetos · Leonardo Ferreira". */
export function usePageTitle(title?: string) {
  const { profile } = useContent()
  useEffect(() => {
    document.title = title ? `${title} · ${profile.name}` : `${profile.name} · ${profile.role}`
  }, [title, profile])
}
