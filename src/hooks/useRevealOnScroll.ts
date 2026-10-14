import { useEffect, type RefObject } from 'react'

/**
 * Observa os elementos com `data-reveal` dentro de `root` e adiciona `.is-visible`
 * quando eles entram na tela. Roda de novo a cada troca de página (`key`).
 */
export function useRevealOnScroll(root: RefObject<HTMLElement | null>, key: string) {
  useEffect(() => {
    const container = root.current
    if (!container) return

    const targets = container.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )

    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [root, key])
}
