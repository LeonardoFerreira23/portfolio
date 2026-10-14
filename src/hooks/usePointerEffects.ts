import { useEffect } from 'react'

/**
 * Um único listener de mouse para os dois efeitos que seguem o cursor:
 * - brilho de fundo (`.cursor-glow`, via --gx/--gy no <html>)
 * - spotlight dentro do card sob o mouse (`.spotlight`, via --mx/--my no card)
 * Fica desligado em telas de toque e com "reduzir movimento".
 */
export function usePointerEffects() {
  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reduced) return

    const root = document.documentElement
    let frame = 0
    let last: PointerEvent | null = null

    const apply = () => {
      frame = 0
      if (!last) return
      root.style.setProperty('--gx', `${last.clientX}px`)
      root.style.setProperty('--gy', `${last.clientY}px`)

      const card = (last.target as Element | null)?.closest<HTMLElement>('.spotlight')
      if (card) {
        const rect = card.getBoundingClientRect()
        card.style.setProperty('--mx', `${last.clientX - rect.left}px`)
        card.style.setProperty('--my', `${last.clientY - rect.top}px`)
      }
    }

    const onMove = (event: PointerEvent) => {
      last = event
      if (!frame) frame = requestAnimationFrame(apply)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(frame)
    }
  }, [])
}
