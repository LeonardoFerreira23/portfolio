import { useCallback, useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import { Sidebar } from '../components/Sidebar'
import { Footer } from '../components/Footer'
import { CommandPalette } from '../components/CommandPalette'
import { useHotkey } from '../hooks/useHotkey'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { usePointerEffects } from '../hooks/usePointerEffects'
import { useScrollProgress } from '../hooks/useScrollProgress'
import { useLanguage } from '../i18n/language'
import './AppLayout.css'

export function AppLayout() {
  const { lang, content } = useLanguage()
  const { ui } = content
  const [paletteOpen, setPaletteOpen] = useState(false)
  const togglePalette = useCallback(() => setPaletteOpen((open) => !open), [])
  useHotkey('k', togglePalette)

  // Ao trocar de página: volta ao topo e leva o foco para o conteúdo (leitores de tela anunciam a página nova).
  const { pathname } = useLocation()
  const mainRef = useRef<HTMLElement>(null)
  const firstRender = useRef(true)
  useEffect(() => {
    window.scrollTo(0, 0)
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    mainRef.current?.focus({ preventScroll: true })
  }, [pathname])

  // Roda de novo ao trocar de página ou de idioma (itens recriados precisam aparecer)
  useRevealOnScroll(mainRef, `${pathname}:${lang}`)
  usePointerEffects()
  useScrollProgress()

  return (
    <div className="layout">
      <div className="backdrop" aria-hidden="true" />
      <div className="cursor-glow" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />
      <a href="#conteudo" className="skip-link">
        {ui.skipLink}
      </a>
      <Sidebar onOpenPalette={() => setPaletteOpen(true)} />
      <div className="layout__body">
        <main id="conteudo" ref={mainRef} tabIndex={-1} className="layout__main">
          <div key={pathname} className="page-enter">
            <Outlet />
          </div>
        </main>
        <Footer />
      </div>
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </div>
  )
}
