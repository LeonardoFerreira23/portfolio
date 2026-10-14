import { useEffect } from 'react'

/** Atualiza --scroll (0 a 1) no <html> conforme a página é rolada. Usado pela barra de progresso. */
export function useScrollProgress() {
  useEffect(() => {
    const root = document.documentElement
    let frame = 0

    const update = () => {
      frame = 0
      const max = root.scrollHeight - window.innerHeight
      root.style.setProperty('--scroll', max > 0 ? String(window.scrollY / max) : '0')
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])
}
