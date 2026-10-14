import { useLanguage, type Lang } from '../i18n/language'
import './LangToggle.css'

const options: { value: Lang; label: string; name: string }[] = [
  { value: 'pt', label: 'PT', name: 'Português' },
  { value: 'en', label: 'EN', name: 'English' },
]

/** Seletor PT / EN. */
export function LangToggle({ className = '' }: { className?: string }) {
  const { lang, setLang, content } = useLanguage()

  return (
    <div className={`lang-toggle mono ${className}`} role="group" aria-label={content.ui.nav.languageLabel}>
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          lang={o.value === 'pt' ? 'pt-BR' : 'en'}
          aria-label={o.name}
          aria-pressed={lang === o.value}
          className="lang-toggle__btn"
          onClick={() => setLang(o.value)}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}
