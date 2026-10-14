import { useCallback, useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router'
import { Sidebar } from '../components/Sidebar'
import { Footer } from '../components/Footer'
import { CommandPalette } from '../components/CommandPalette'
import { useHotkey } from '../hooks/useHotkey'
import './AppLayout.css'

export function AppLayout() {
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

  return (
    <div className="layout">
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Sidebar onOpenPalette={() => setPaletteOpen(true)} />
      <div className="layout__body">
        <main id="conteudo" ref={mainRef} tabIndex={-1} className="layout__main">
          <Outlet />
        </main>
        <Footer />
      </div>
      <CommandPalette open={paletteOpen} onClose={() => setPaletteOpen(false)} />
    </div>
  )
}
