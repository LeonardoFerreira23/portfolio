import { useContent } from '../i18n/language'
import { PageHead } from '../components/PageHead'
import { ContactList } from '../components/Contact'

export function ContactPage() {
  const { contact, ui } = useContent()
  return (
    <>
      <PageHead index={ui.contactPage.index} title={contact.title} lede={contact.body} />
      <ContactList />
    </>
  )
}
