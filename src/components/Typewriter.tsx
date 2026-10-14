import { useEffect, useState } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

type Props = {
  /** Frases que são digitadas, apagadas e trocadas em sequência. */
  phrases: string[]
  /** Texto fixo antes das frases, ex.: "// " */
  prefix?: string
  /** O que leitores de tela recebem (as frases mudam, então damos um resumo fixo). */
  label: string
}

const TYPE_MS = 45
const DELETE_MS = 22
const HOLD_MS = 1800

/** Digita uma frase, espera, apaga e passa para a próxima, em loop. */
export function Typewriter({ phrases, prefix = '', label }: Props) {
  const reduced = useReducedMotion()
  const [text, setText] = useState('')

  useEffect(() => {
    if (reduced || phrases.length === 0) return
    let phrase = 0
    let chars = 0
    let deleting = false
    let timer = 0

    const step = () => {
      const current = phrases[phrase]
      if (!deleting) {
        chars += 1
        setText(current.slice(0, chars))
        if (chars === current.length) {
          deleting = true
          timer = window.setTimeout(step, HOLD_MS)
          return
        }
        timer = window.setTimeout(step, TYPE_MS)
      } else {
        chars -= 1
        setText(current.slice(0, chars))
        if (chars === 0) {
          deleting = false
          phrase = (phrase + 1) % phrases.length
        }
        timer = window.setTimeout(step, chars === 0 ? 320 : DELETE_MS)
      }
    }

    timer = window.setTimeout(step, 400)
    return () => window.clearTimeout(timer)
  }, [phrases, reduced])

  const shown = reduced ? phrases[0] : text

  return (
    <>
      <span className="visually-hidden">{label}</span>
      <span aria-hidden="true">
        {prefix}
        {shown}
        <span className="type-caret" />
      </span>
    </>
  )
}
