import { useContent } from '../i18n/language'
import { PageHead } from '../components/PageHead'
import { ProjectGrid } from '../components/ProjectCard'

export function ProjectsPage() {
  const { projects, ui } = useContent()
  const t = ui.projectsPage
  return (
    <>
      <PageHead
        index={t.index}
        title={t.title}
        lede={t.lede}
      />
      <ProjectGrid projects={projects} heading="h2" />
    </>
  )
}
