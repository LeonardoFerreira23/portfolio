import { usePageTitle } from '../hooks/usePageTitle'

type Props = { index: string; title: string; lede?: string }

/** Topo de cada página: número, título (h1) e uma frase de apoio. Também ajusta o título da aba. */
export function PageHead({ index, title, lede }: Props) {
  usePageTitle(title)
  return (
    <header className="page-head">
      <span className="section__index">{index}</span>
      <h1 className="page-head__title">{title}</h1>
      {lede && <p className="page-head__lede">{lede}</p>}
    </header>
  )
}
