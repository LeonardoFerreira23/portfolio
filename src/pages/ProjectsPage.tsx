import { projects } from '../data/content'
import { PageHead } from '../components/PageHead'
import { ProjectGrid } from '../components/ProjectCard'

export function ProjectsPage() {
  return (
    <>
      <PageHead
        index="02 / projetos"
        title="Estudos de caso"
        lede="Cada projeto mostra o problema, o fluxo da solução e o que foi entregue."
      />
      <ProjectGrid projects={projects} heading="h2" />
    </>
  )
}
