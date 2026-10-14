import { contact } from '../data/content'
import { PageHead } from '../components/PageHead'
import { ContactList } from '../components/Contact'

export function ContactPage() {
  return (
    <>
      <PageHead index="04 / contato" title={contact.title} lede={contact.body} />
      <ContactList />
    </>
  )
}
