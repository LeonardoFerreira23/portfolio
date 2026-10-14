import { useEffect, useState, type CSSProperties } from 'react'
import { useContent } from '../i18n/language'
import './ProfilePanel.css'

/** Hora atual no fuso do perfil, sempre no formato 24h (ex.: 13:05). */
function now(timeZone: string) {
  return new Intl.DateTimeFormat('pt-BR', { hour: '2-digit', minute: '2-digit', timeZone }).format(new Date())
}

/** Painel estilo console ao lado do hero: fatos rápidos + hora local ao vivo. */
export function ProfilePanel() {
  const { profile, ui } = useContent()
  const [time, setTime] = useState(() => now(profile.timeZone))

  useEffect(() => {
    const id = window.setInterval(() => setTime(now(profile.timeZone)), 15_000)
    return () => window.clearInterval(id)
  }, [profile.timeZone])

  return (
    <aside className="panel glow-border" aria-label={ui.panel.label}>
      <div className="panel__bar mono">
        <span>{ui.panel.file}</span>
        {profile.available && (
          <span className="panel__status">
            <span className="panel__dot" aria-hidden="true" />
            {ui.panel.status}
          </span>
        )}
      </div>

      <dl className="panel__list mono">
        {profile.facts.map((f, i) => (
          <div key={f.label} className="panel__row" style={{ '--i': i } as CSSProperties}>
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
        <div className="panel__row" style={{ '--i': profile.facts.length } as CSSProperties}>
          <dt>{ui.panel.localTime}</dt>
          <dd>
            <time className="panel__clock">{time}</time> <span className="panel__tz">UTC−3</span>
          </dd>
        </div>
      </dl>

      <p className="panel__prompt mono" style={{ '--i': profile.facts.length + 1 } as CSSProperties}>
        <span className="panel__caret" aria-hidden="true">
          ›
        </span>{' '}
        {ui.panel.prompt}
        <span className="panel__cursor" aria-hidden="true" />
      </p>
    </aside>
  )
}
