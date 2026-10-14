import { PageHead } from '../components/PageHead'
import { Timeline } from '../components/Timeline'
import { Areas } from '../components/Areas'

export function ExperiencePage() {
  return (
    <>
      <PageHead
        index="03 / trajetória"
        title="Experiência e formação"
        lede="7 anos de experiência no mercado, do levantamento de requisitos com o cliente ao código em produção."
      />
      <Timeline />
      <Areas />
    </>
  )
}
