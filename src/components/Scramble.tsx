import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

const GLYPHS = 'abcdefghijklmnopqrstuvwxyz0123456789/_<>{}#'

function randomGlyph() {
  return GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
}

/**
 * Efeito "decodificando": quando entra na tela, o texto aparece embaralhado
 * e vai se resolvendo da esquerda para a direita.
 */
export function Scramble({ text, duration = 700 }: { text: string; duration?: number }) {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const [output, setOutput] = useState(text)

  useEffect(() => {
    const el = ref.current
    if (reduced || !el) return

    let frame = 0
    let start = 0

    const run = (now: number) => {
      if (!start) start = now
      const progress = Math.min((now - start) / duration, 1)
      const solved = Math.floor(progress * text.length)
      setOutput(
        [...text].map((ch, i) => (i < solved || ch === ' ' || ch === '/' ? ch : randomGlyph())).join(''),
      )
      if (progress < 1) frame = requestAnimationFrame(run)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect()
          frame = requestAnimationFrame(run)
        }
      },
      { threshold: 0.6 },
    )
    observer.observe(el)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [text, duration, reduced])

  return (
    <span ref={ref}>
      <span className="visually-hidden">{text}</span>
      <span aria-hidden="true">{reduced ? text : output}</span>
    </span>
  )
}
