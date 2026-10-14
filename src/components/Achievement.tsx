import { achievement } from '../data/content'

export function Achievement() {
  return (
    <section
      className="section"
      aria-label="Conquistas"
      style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '24px 56px', paddingBlock: 48 }}
    >
      <span style={{ fontSize: 64, fontWeight: 600, lineHeight: 1, color: 'var(--color-accent)' }}>{achievement.highlight}</span>
      <div style={{ flex: '1 1 320px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ fontSize: 22, fontWeight: 600 }}>{achievement.title}</span>
        <span className="mono" style={{ fontSize: 13, color: 'var(--color-text-muted)' }}>
          {achievement.detail}
        </span>
      </div>
    </section>
  )
}
