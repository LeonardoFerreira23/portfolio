import type { CSSProperties } from 'react'
import type { TimelineItem } from '../data/content'
import './Timeline.css'

/** Linha do tempo genérica: período à esquerda; título, subtítulo, texto e tópicos à direita. */
export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="timeline">
      {items.map((item, i) => (
        <li
          key={`${item.period}-${item.title}`}
          className="timeline__item"
          data-reveal
          style={{ '--reveal-delay': `${i * 110}ms` } as CSSProperties}
        >
          <span className="timeline__period mono">{item.period}</span>
          <div className="timeline__content">
            <h3 className="timeline__title">{item.title}</h3>
            {item.subtitle && <p className="timeline__subtitle">{item.subtitle}</p>}
            {item.body && <p className="timeline__body">{item.body}</p>}
            {item.bullets && (
              <ul className="timeline__bullets">
                {item.bullets.map((b) => (
                  <li key={b.text}>
                    {b.label && <strong>{b.label}: </strong>}
                    {b.text}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      ))}
    </ol>
  )
}
