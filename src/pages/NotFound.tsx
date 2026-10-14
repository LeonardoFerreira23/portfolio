import { Link } from 'react-router'
import { useContent } from '../i18n/language'
import { PageHead } from '../components/PageHead'

export function NotFound() {
  const t = useContent().ui.notFound
  return (
    <>
      <PageHead index="404" title={t.title} lede={t.lede} />
      <Link to="/" className="btn btn--primary">
        {t.back}
      </Link>
    </>
  )
}
