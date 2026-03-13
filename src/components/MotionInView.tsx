import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
}

export function MotionInView({ children, className, delay = 0 }: Props) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduce ? undefined : { opacity: 0, y: 12 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

