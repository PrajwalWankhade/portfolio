import type { ReactNode } from 'react'
import { clsx } from 'clsx'

type Props = {
  children: ReactNode
  className?: string
}

export function Pill({ children, className }: Props) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200',
        className,
      )}
    >
      {children}
    </span>
  )
}

