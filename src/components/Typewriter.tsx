import { useEffect, useState } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

type Props = { text: string; speed?: number; startDelay?: number }

/** Escreve o texto letra por letra. Leitores de tela recebem o texto inteiro de uma vez. */
export function Typewriter({ text, speed = 38, startDelay = 250 }: Props) {
  const reduced = useReducedMotion()
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (reduced) return
    let typed = 0
    let timer = window.setTimeout(function tick() {
      typed += 1
      setCount(typed)
      if (typed < text.length) timer = window.setTimeout(tick, speed)
    }, startDelay)
    return () => window.clearTimeout(timer)
  }, [text, speed, startDelay, reduced])

  const shown = reduced ? text.length : count
  const typing = shown < text.length

  return (
    <>
      <span className="visually-hidden">{text}</span>
      <span aria-hidden="true">
        {text.slice(0, shown)}
        {typing && <span className="type-caret" />}
      </span>
    </>
  )
}
