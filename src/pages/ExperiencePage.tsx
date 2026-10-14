import { useContent } from '../i18n/language'
import { PageHead } from '../components/PageHead'
import { Timeline } from '../components/Timeline'
import { Areas } from '../components/Areas'

export function ExperiencePage() {
  const t = useContent().ui.experiencePage
  return (
    <>
      <PageHead
        index={t.index}
        title={t.title}
        lede={t.lede}
      />
      <Timeline />
      <Areas />
    </>
  )
}
