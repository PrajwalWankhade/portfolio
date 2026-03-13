import { clsx } from 'clsx'
import type { LinkItem } from '../config/schema'
import { getIcon } from '../lib/icon'

type Props = {
  item: LinkItem
  className?: string
}

export function IconLink({ item, className }: Props) {
  const Icon = getIcon(item.icon ?? item.label)
  return (
    <a
      className={clsx(
        'inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10',
        className,
      )}
      href={item.url}
      target="_blank"
      rel="noreferrer"
    >
      <Icon className="h-4 w-4 opacity-80" />
      <span>{item.label}</span>
    </a>
  )
}

