import type { CSSProperties } from 'react'
import type { Project } from '../data/content'
import './Projects.css'

type Heading = 'h2' | 'h3'

/** `heading`: nível do título de cada card — h2 quando a grade fica logo abaixo do h1 da página. */
export function ProjectGrid({ projects, heading = 'h3' }: { projects: Project[]; heading?: Heading }) {
  return (
    <div className="projects">
      {projects.map((p, i) => (
        <ProjectCard key={p.title} project={p} heading={heading} index={i} />
      ))}
    </div>
  )
}

type CardProps = { project: Project; heading?: Heading; index?: number }

export function ProjectCard({ project, heading: Title = 'h3', index = 0 }: CardProps) {
  return (
    <article className="project spotlight tilt" data-reveal style={{ '--reveal-delay': `${(index % 3) * 90}ms` } as CSSProperties}>
      <div className="project__meta mono">
        <span className="project__kind">{project.kind}</span>
        <span>{project.status}</span>
      </div>
      <Title className="project__title">{project.title}</Title>
      <p className="project__summary">{project.summary}</p>

      <ol className="project__flow mono" aria-label="Fluxo da arquitetura">
        {project.flow.map((step, i) => (
          <li key={`${step}-${i}`} style={{ '--i': i } as CSSProperties}>
            {i > 0 && (
              <span className="project__arrow" aria-hidden="true">
                →
              </span>
            )}
            {step}
          </li>
        ))}
      </ol>

      <p className="project__outcome mono">{project.outcome}</p>

      <div className="project__footer">
        <ul className="project__stack" aria-label="Tecnologias">
          {project.stack.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>
        <div className="project__links">
          {project.live && (
            <a href={project.live} className="project__repo mono" target="_blank" rel="noreferrer">
              ver online ↗
            </a>
          )}
          {project.repo && (
            <a href={project.repo} className="project__repo mono" target="_blank" rel="noreferrer">
              código ↗
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
