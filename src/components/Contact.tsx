import { useContent } from '../i18n/language'

export function ContactList() {
  const { contact } = useContent()
  return (
    <dl
      className="mono"
      data-reveal
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(90px, 140px) 1fr',
        maxWidth: 640,
        fontSize: 15,
        borderTop: '1px solid var(--color-line)',
      }}
    >
      {contact.links.map((l) => (
        <div key={l.label} style={{ display: 'contents' }}>
          <dt style={{ padding: '18px 0', borderBottom: '1px solid var(--color-line)', color: 'var(--color-text-muted)' }}>{l.label}</dt>
          <dd style={{ padding: '18px 0', borderBottom: '1px solid var(--color-line)', overflowWrap: 'anywhere' }}>
            <a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              {l.text}
            </a>
          </dd>
        </div>
      ))}
    </dl>
  )
}
