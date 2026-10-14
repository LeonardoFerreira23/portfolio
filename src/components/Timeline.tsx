import { timeline } from '../data/content'

export function Timeline() {
  return (
    <ol style={{ padding: 0, listStyle: 'none' }}>
      {timeline.map((t) => (
        <li
          key={t.title}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 32px', padding: '24px 0', borderTop: '1px solid var(--color-line)' }}
        >
          <span className="mono" style={{ flex: '0 0 140px', fontSize: 13, color: 'var(--color-text-muted)' }}>
            {t.period}
          </span>
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 4 }}>
            <h2 style={{ fontWeight: 600, fontSize: 17 }}>{t.title}</h2>
            <p style={{ fontSize: 15, color: 'var(--color-text-muted)' }}>{t.body}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
