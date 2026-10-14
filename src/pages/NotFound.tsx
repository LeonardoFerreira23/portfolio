import { Link } from 'react-router'
import { PageHead } from '../components/PageHead'

export function NotFound() {
  return (
    <>
      <PageHead index="404" title="Página não encontrada" lede="O endereço não existe ou mudou de lugar." />
      <Link to="/" className="btn btn--primary">
        Voltar ao início
      </Link>
    </>
  )
}
