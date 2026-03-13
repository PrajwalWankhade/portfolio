import { useEffect, useState } from 'react'

export type NavItem = { id: string; label: string }

export function useActiveSection(items: NavItem[]) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '')

  useEffect(() => {
    const els = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
        const id = visible?.target?.id
        if (id) setActiveId(id)
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0.1, 0.2, 0.3, 0.4] },
    )

    for (const el of els) observer.observe(el)
    return () => observer.disconnect()
  }, [items])

  return activeId
}

