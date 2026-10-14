import { Link } from 'react-router'
import { projects } from '../data/content'
import { Hero } from '../components/Hero'
import { Achievement } from '../components/Achievement'
import { SectionHead } from '../components/SectionHead'
import { ProjectGrid } from '../components/ProjectCard'
import { usePageTitle } from '../hooks/usePageTitle'

/** Quantos projetos aparecem em destaque na página inicial. */
const FEATURED = 3

export function Home() {
  usePageTitle()
  return (
    <>
      <Hero />
      <Achievement />
      <section className="section" aria-labelledby="destaques-title">
        <SectionHead
          id="destaques-title"
          index="em destaque"
          title="Projetos recentes"
          lede={`${projects.length} estudos de caso com problema, arquitetura e resultado.`}
        />
        <ProjectGrid projects={projects.slice(0, FEATURED)} />
        <p style={{ marginTop: 28 }}>
          <Link to="/projetos" className="btn btn--ghost">
            Ver todos os projetos <span className="btn__arrow" aria-hidden="true">→</span>
          </Link>
        </p>
      </section>
    </>
  )
}
