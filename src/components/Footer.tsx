import { profile } from '../data/content'

const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer
      className="mono"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 12,
        maxWidth: 'var(--content-width)',
        padding: '24px var(--page-gutter)',
        borderTop: '1px solid var(--color-line)',
        fontSize: 12,
        color: '#8a9099',
      }}
    >
      <span>
        © {YEAR} {profile.name}
      </span>
      <span>React · Vite · TypeScript</span>
    </footer>
  )
}
