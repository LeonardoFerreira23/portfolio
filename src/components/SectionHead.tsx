import { Scramble } from './Scramble'

type Props = { id: string; index: string; title: string; lede?: string }

export function SectionHead({ id, index, title, lede }: Props) {
  return (
    <div className="section__head" data-reveal>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <span className="section__index">
          <Scramble text={index} />
        </span>
        <h2 id={id} className="section__title">
          {title}
        </h2>
      </div>
      {lede && <p className="section__lede">{lede}</p>}
    </div>
  )
}
