import { useContent } from '../i18n/language'

export function Achievement() {
  const { achievement, ui } = useContent()
  return (
    <section
      className="section"
      data-reveal
      aria-label={ui.home.achievementLabel}
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
