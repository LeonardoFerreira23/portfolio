import { Link } from 'react-router'
import { useContent } from '../i18n/language'
import { ProfilePanel } from './ProfilePanel'
import { Typewriter } from './Typewriter'
import { SplitReveal } from './SplitReveal'
import './Hero.css'

export function Hero() {
  const { profile, ui } = useContent()
  return (
    <section className="hero">
      <div className="hero__main stagger">
        <p className="hero__kicker mono">
          <Typewriter prefix="// " phrases={profile.taglines} label={profile.role} />
        </p>
        <h1 className="hero__title">
          <SplitReveal text={profile.name} />
          <span className="hero__dot" aria-hidden="true">
            .
          </span>
        </h1>
        <p className="hero__statement">{profile.statement}</p>
        <ul className="hero__chips" aria-label={ui.hero.stackLabel}>
          {profile.chips.map((chip) => (
            <li key={chip} className="chip">
              {chip}
            </li>
          ))}
        </ul>
        <div className="hero__actions">
          <Link to="/projetos" className="btn btn--primary">
            {ui.hero.ctaProjects}
          </Link>
          <Link to="/contato" className="btn btn--ghost">
            {ui.hero.ctaContact}
          </Link>
        </div>
      </div>
      <ProfilePanel />
    </section>
  )
}
