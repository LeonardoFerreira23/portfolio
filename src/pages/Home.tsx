import { Link } from 'react-router'
import { useContent } from '../i18n/language'
import { Hero } from '../components/Hero'
import { Achievement } from '../components/Achievement'
import { SectionHead } from '../components/SectionHead'
import { ProjectGrid } from '../components/ProjectCard'
import { usePageTitle } from '../hooks/usePageTitle'

/** Quantos projetos aparecem em destaque na página inicial. */
const FEATURED = 3

export function Home() {
  const { projects, ui } = useContent()
  usePageTitle()
  return (
    <>
      <Hero />
      <Achievement />
      <section className="section" aria-labelledby="destaques-title">
        <SectionHead
          id="destaques-title"
          index={ui.home.featuredIndex}
          title={ui.home.featuredTitle}
          lede={ui.home.featuredLede(projects.length)}
        />
        <ProjectGrid projects={projects.slice(0, FEATURED)} />
        <p style={{ marginTop: 28 }}>
          <Link to="/projetos" className="btn btn--ghost">
            {ui.home.seeAll} <span className="btn__arrow" aria-hidden="true">→</span>
          </Link>
        </p>
      </section>
    </>
  )
}
