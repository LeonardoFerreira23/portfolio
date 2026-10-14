import { useEffect } from 'react'

/**
 * Um único listener de mouse para os dois efeitos que seguem o cursor:
 * - brilho de fundo (`.cursor-glow`, via --gx/--gy no <html>)
 * - spotlight dentro do card sob o mouse (`.spotlight`, via --mx/--my no card)
 * - inclinação 3D leve do card (`.tilt`, via --rx/--ry no card)
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
    let tilted: HTMLElement | null = null

    const resetTilt = () => {
      tilted?.style.setProperty('--rx', '0deg')
      tilted?.style.setProperty('--ry', '0deg')
      tilted = null
    }

    const apply = () => {
      frame = 0
      if (!last) return
      root.style.setProperty('--gx', `${last.clientX}px`)
      root.style.setProperty('--gy', `${last.clientY}px`)

      const target = last.target as Element | null
      const card = target?.closest<HTMLElement>('.spotlight')
      if (card) {
        const rect = card.getBoundingClientRect()
        card.style.setProperty('--mx', `${last.clientX - rect.left}px`)
        card.style.setProperty('--my', `${last.clientY - rect.top}px`)
      }

      const tilt = target?.closest<HTMLElement>('.tilt') ?? null
      if (tilt !== tilted) resetTilt()
      if (tilt) {
        const rect = tilt.getBoundingClientRect()
        const x = (last.clientX - rect.left) / rect.width - 0.5
        const y = (last.clientY - rect.top) / rect.height - 0.5
        tilt.style.setProperty('--rx', `${(-y * 5).toFixed(2)}deg`)
        tilt.style.setProperty('--ry', `${(x * 6).toFixed(2)}deg`)
        tilted = tilt
      }
    }

    const onMove = (event: PointerEvent) => {
      last = event
      if (!frame) frame = requestAnimationFrame(apply)
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', resetTilt)
    return () => {
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('pointerleave', resetTilt)
      cancelAnimationFrame(frame)
    }
  }, [])
}
