import { Fragment, type CSSProperties } from 'react'

type Props = { text: string; delay?: number; step?: number }

/**
 * Faz cada letra "subir" no lugar, uma depois da outra.
 * As palavras não quebram no meio; leitores de tela leem o texto normal.
 */
export function SplitReveal({ text, delay = 120, step = 28 }: Props) {
  let index = 0
  const words = text.split(' ')

  return (
    <>
      <span className="visually-hidden">{text}</span>
      <span aria-hidden="true">
        {words.map((word, w) => (
          <Fragment key={w}>
            {w > 0 && ' '}
            <span className="split__word">
              {[...word].map((char, c) => {
                const style = { '--d': `${delay + index++ * step}ms` } as CSSProperties
                return (
                  <span key={c} className="split__char" style={style}>
                    {char}
                  </span>
                )
              })}
            </span>
          </Fragment>
        ))}
      </span>
    </>
  )
}
