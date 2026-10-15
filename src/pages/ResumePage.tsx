import type { CSSProperties } from 'react'
import { Link } from 'react-router'
import { useContent } from '../i18n/language'
import { PageHead } from '../components/PageHead'
import { SectionHead } from '../components/SectionHead'
import { Timeline } from '../components/Timeline'
import './ResumePage.css'

/** Aba "Currículo": versão resumida do CV, nos dois idiomas. */
export function ResumePage() {
  const { resume, ui } = useContent()
  const t = ui.resumePage

  return (
    <>
      <PageHead index={t.index} title={t.title} lede={resume.summary} />

      <div className="resume-top" data-reveal>
        <a href={resume.cv.href} download={resume.cv.downloadName} className="btn btn--primary resume-download">
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3v12" />
            <path d="m7 10 5 5 5-5" />
            <path d="M5 21h14" />
          </svg>
          {t.download}
          <span className="resume-download__hint mono">{t.downloadHint}</span>
        </a>
        <dl className="resume-facts mono" aria-label={t.factsLabel}>
          {resume.facts.map((f) => (
            <div key={f.label} className="resume-facts__item">
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <section className="section" aria-labelledby="skills-title">
        <SectionHead id="skills-title" index={t.skillsIndex} title={t.skillsTitle} />
        <div className="skills">
          {resume.skills.map((group, i) => (
            <div
              key={group.title}
              className="skills__group spotlight"
              data-reveal
              style={{ '--reveal-delay': `${i * 90}ms` } as CSSProperties}
            >
              <h3 className="skills__title">{group.title}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item} className="tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="experience-title">
        <SectionHead id="experience-title" index={t.experienceIndex} title={t.experienceTitle} />
        <Timeline items={resume.experience} />
      </section>

      <section className="section" aria-labelledby="education-title">
        <SectionHead id="education-title" index={t.educationIndex} title={t.educationTitle} />
        <Timeline items={resume.education} />
      </section>

      <section className="section" aria-labelledby="awards-title">
        <SectionHead id="awards-title" index={t.awardsIndex} title={t.awardsTitle} />
        <Timeline items={resume.awards} />
      </section>

      <section className="section resume-cta" data-reveal>
        <p className="resume-cta__text">{t.ctaText}</p>
        <div className="resume-cta__actions">
          <Link to="/contato" className="btn btn--primary">
            {t.ctaContact}
          </Link>
          <a href={resume.cv.href} download={resume.cv.downloadName} className="btn btn--ghost">
            {t.download}
          </a>
          <Link to="/projetos" className="btn btn--ghost">
            {t.ctaProjects} <span className="btn__arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </>
  )
}
