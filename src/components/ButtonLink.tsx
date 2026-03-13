import type { ReactNode } from 'react'
import { clsx } from 'clsx'

type Props = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
}

export function ButtonLink({ href, children, variant = 'primary', className }: Props) {
  const base =
    'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60'

  const variants: Record<NonNullable<Props['variant']>, string> = {
    primary:
      'bg-indigo-500 text-white shadow-sm shadow-indigo-500/20 hover:bg-indigo-400',
    secondary:
      'border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10',
    ghost: 'text-slate-200 hover:bg-white/5',
  }

  return (
    <a
      href={href}
      className={clsx(base, variants[variant], className)}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
    >
      {children}
    </a>
  )
}

