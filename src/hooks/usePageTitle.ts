import { useEffect } from 'react'
import { profile } from '../data/content'

/** Define o título da aba do navegador, ex.: "Projetos · Leonardo Ferreira". */
export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${profile.name}` : `${profile.name} · ${profile.role}`
  }, [title])
}
