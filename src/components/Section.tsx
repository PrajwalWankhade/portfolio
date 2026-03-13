import type { ReactNode } from 'react'
import { clsx } from 'clsx'
import { Container } from './Container'

type Props = {
  id: string
  title: string
  eyebrow?: string
  children: ReactNode
  className?: string
}

export function Section({ id, title, eyebrow, children, className }: Props) {
  return (
    <section id={id} className={clsx('scroll-mt-24 py-16 sm:py-20', className)}>
      <Container>
        <div className="mb-8">
          {eyebrow ? (
            <p className="text-xs font-medium tracking-widest text-indigo-300/90 uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            {title}
          </h2>
        </div>
        {children}
      </Container>
    </section>
  )
}

