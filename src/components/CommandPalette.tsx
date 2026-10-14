import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react'
import { useNavigate, type NavigateFunction } from 'react-router'
import type { SiteContent } from '../data/content'
import { useContent } from '../i18n/language'
import './CommandPalette.css'

type Command = { id: string; label: string; hint: string; run: () => void }

type Props = { open: boolean; onClose: () => void }

function buildCommands(navigate: NavigateFunction, { pages, projects, contact, ui }: SiteContent): Command[] {
  const openLink = (href: string) => () => window.open(href, href.startsWith('http') ? '_blank' : '_self')
  const t = ui.palette

  return [
    ...pages.map((p) => ({ id: `page-${p.path}`, label: p.label, hint: t.page, run: () => navigate(p.path) })),
    ...projects.map((p, i) => ({ id: `proj-${i}`, label: p.title, hint: t.project, run: () => navigate('/projetos') })),
    ...contact.links.map((l) => ({ id: `link-${l.label}`, label: l.label, hint: t.open, run: openLink(l.href) })),
  ]
}

export function CommandPalette({ open, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const navigate = useNavigate()
  const content = useContent()
  const t = content.ui.palette
  const commands = useMemo(() => buildCommands(navigate, content), [navigate, content])

  const results = commands.filter((c) => c.label.toLowerCase().includes(query.trim().toLowerCase()))

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) {
      setQuery('')
      setActive(0)
      dialog.showModal()
      inputRef.current?.focus()
    } else if (!open && dialog.open) {
      dialog.close()
    }
  }, [open])

  const run = (command: Command | undefined) => {
    if (!command) return
    onClose()
    command.run()
  }

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActive((i) => Math.min(i + 1, results.length - 1))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActive((i) => Math.max(i - 1, 0))
    } else if (event.key === 'Enter') {
      event.preventDefault()
      run(results[active])
    }
  }

  return (
    <dialog
      ref={dialogRef}
      className="palette"
      onClose={onClose}
      onClick={(e) => e.target === dialogRef.current && onClose()}
      aria-label={t.label}
    >
      <div className="palette__box" onKeyDown={onKeyDown}>
        <input
          ref={inputRef}
          className="palette__input mono"
          placeholder={t.placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setActive(0)
          }}
          aria-controls="palette-list"
          aria-activedescendant={results[active] ? `cmd-${results[active].id}` : undefined}
        />
        <ul id="palette-list" role="listbox" className="palette__list">
          {results.map((c, i) => (
            <li
              key={c.id}
              id={`cmd-${c.id}`}
              role="option"
              aria-selected={i === active}
              className="palette__item"
              onMouseEnter={() => setActive(i)}
              onClick={() => run(c)}
            >
              <span>{c.label}</span>
              <span className="palette__hint mono">{c.hint}</span>
            </li>
          ))}
          {results.length === 0 && <li className="palette__empty mono">{t.empty}</li>}
        </ul>
        <div className="palette__footer mono">
          <span>{t.navigate}</span>
          <span>{t.select}</span>
          <span>{t.close}</span>
        </div>
      </div>
    </dialog>
  )
}
