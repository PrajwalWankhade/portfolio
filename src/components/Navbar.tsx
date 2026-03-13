import { clsx } from 'clsx'
import type { NavItem } from '../lib/useActiveSection'
import { useActiveSection } from '../lib/useActiveSection'

type Props = {
  brand: string
  items: NavItem[]
}

export function Navbar({ brand, items }: Props) {
  const activeId = useActiveSection(items)

  return (
    <div className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <a href="#home" className="text-sm font-semibold tracking-tight text-slate-50">
          {brand}
        </a>
        <nav className="hidden gap-1 sm:flex">
          {items.map((item) => {
            const isActive = item.id === activeId
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={clsx(
                  'rounded-lg px-3 py-2 text-xs font-medium transition',
                  isActive
                    ? 'bg-white/10 text-slate-50'
                    : 'text-slate-300 hover:bg-white/5 hover:text-slate-50',
                )}
              >
                {item.label}
              </a>
            )
          })}
        </nav>
        <a
          className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-100 transition hover:bg-white/10"
          href="#contact"
        >
          Contact
        </a>
      </div>
      <div className="sm:hidden">
        <div className="mx-auto max-w-6xl px-6 pb-4">
          <div className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {items.map((item) => {
              const isActive = item.id === activeId
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={clsx(
                    'shrink-0 rounded-full border px-3 py-1.5 text-xs font-medium',
                    isActive
                      ? 'border-white/15 bg-white/10 text-slate-50'
                      : 'border-white/10 bg-white/5 text-slate-300',
                  )}
                >
                  {item.label}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

