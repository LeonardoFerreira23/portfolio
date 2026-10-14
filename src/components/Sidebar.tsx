import { useLayoutEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router'
import { contact, pages, profile } from '../data/content'
import './Sidebar.css'

type Props = { onOpenPalette: () => void }

const socialLabels = ['github', 'linkedin', 'e-mail']

export function Sidebar({ onOpenPalette }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)
  // No celular, o menu fecha ao escolher uma página.
  const closeMenu = () => setMenuOpen(false)

  const socials = contact.links.filter((l) => socialLabels.includes(l.label))

  // Indicador que desliza até o item ativo do menu.
  const { pathname } = useLocation()
  const listRef = useRef<HTMLUListElement>(null)
  const indicatorRef = useRef<HTMLSpanElement>(null)
  useLayoutEffect(() => {
    const active = listRef.current?.querySelector<HTMLElement>('.sidebar__link.active')
    const indicator = indicatorRef.current
    if (!indicator) return
    if (!active) {
      indicator.style.opacity = '0'
      return
    }
    indicator.style.opacity = '1'
    indicator.style.transform = `translateY(${active.offsetTop}px)`
    indicator.style.height = `${active.offsetHeight}px`
  }, [pathname, menuOpen])

  return (
    <aside className="sidebar" data-open={menuOpen}>
      <div className="sidebar__top">
        <NavLink to="/" className="sidebar__brand" onClick={closeMenu}>
          <span className="sidebar__mark mono" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="sidebar__id">
            <span className="sidebar__name">{profile.name}</span>
            <span className="sidebar__role mono">{profile.role}</span>
          </span>
        </NavLink>

        <button
          type="button"
          className="sidebar__toggle mono"
          aria-expanded={menuOpen}
          aria-controls="sidebar-panel"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Fechar' : 'Menu'}
        </button>
      </div>

      <div id="sidebar-panel" className="sidebar__panel">
        {profile.available && (
          <span className="sidebar__status mono">
            <span className="sidebar__dot" aria-hidden="true" />
            Disponível para vagas
          </span>
        )}

        <nav aria-label="Páginas" className="sidebar__nav">
          <span ref={indicatorRef} className="sidebar__indicator" aria-hidden="true" />
          <ul ref={listRef}>
            {pages.map((page) => (
              <li key={page.path}>
                <NavLink to={page.path} end={page.path === '/'} className="sidebar__link" onClick={closeMenu}>
                  <span className="sidebar__index mono" aria-hidden="true">
                    {page.index}
                  </span>
                  {page.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar__bottom">
          <button type="button" className="sidebar__search mono" onClick={onOpenPalette}>
            <span>Buscar</span>
            <kbd>Ctrl K</kbd>
          </button>

          <ul className="sidebar__socials mono" aria-label="Redes">
            {socials.map((l) => (
              <li key={l.label}>
                <a href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <p className="sidebar__loc mono">{profile.location}</p>
        </div>
      </div>
    </aside>
  )
}
