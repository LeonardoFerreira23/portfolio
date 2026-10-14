import type { CSSProperties } from 'react'
import { areas } from '../data/content'
import { SectionHead } from './SectionHead'

export function Areas() {
  return (
    <section className="section" aria-labelledby="areas-title" style={{ marginTop: 32 }}>
      <SectionHead id="areas-title" index="áreas" title="Onde eu atuo" />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))',
          gap: 1,
          background: 'var(--color-line)',
          border: '1px solid var(--color-line)',
        }}
      >
        {areas.map((a, i) => (
          <div
            key={a.title}
            className="spotlight"
            data-reveal
            style={
              {
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                padding: 28,
                background: 'var(--color-surface)',
                '--reveal-delay': `${i * 90}ms`,
              } as CSSProperties
            }
          >
            <h3 style={{ fontSize: 18, fontWeight: 600 }}>{a.title}</h3>
            <p style={{ fontSize: 15, color: 'var(--color-text-muted)' }}>{a.body}</p>
            <p className="mono" style={{ fontSize: 12, color: 'var(--color-text-soft)' }}>
              {a.keywords}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
