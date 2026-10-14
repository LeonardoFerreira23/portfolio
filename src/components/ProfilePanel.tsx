import { useEffect, useState, type CSSProperties } from 'react'
import { profile } from '../data/content'
import './ProfilePanel.css'

const clockFormat = new Intl.DateTimeFormat('pt-BR', {
  hour: '2-digit',
  minute: '2-digit',
  timeZone: profile.timeZone,
})

function now() {
  return clockFormat.format(new Date())
}

/** Painel estilo console ao lado do hero: fatos rápidos + hora local ao vivo. */
export function ProfilePanel() {
  const [time, setTime] = useState(now)

  useEffect(() => {
    const id = window.setInterval(() => setTime(now()), 15_000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <aside className="panel" aria-label="Resumo do perfil">
      <div className="panel__bar mono">
        <span>perfil.ts</span>
        {profile.available && (
          <span className="panel__status">
            <span className="panel__dot" aria-hidden="true" />
            disponível
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
          <dt>hora local</dt>
          <dd>
            <time className="panel__clock">{time}</time> <span className="panel__tz">UTC−3</span>
          </dd>
        </div>
      </dl>

      <p className="panel__prompt mono" style={{ '--i': profile.facts.length + 1 } as CSSProperties}>
        <span className="panel__caret" aria-hidden="true">
          ›
        </span>{' '}
        aberto ao próximo projeto
        <span className="panel__cursor" aria-hidden="true" />
      </p>
    </aside>
  )
}
