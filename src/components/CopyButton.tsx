import { useState } from 'react'

type Props = {
  value: string
  label?: string
}

export function CopyButton({ value, label = 'Copy' }: Props) {
  const [copied, setCopied] = useState(false)

  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value)
          setCopied(true)
          window.setTimeout(() => setCopied(false), 1200)
        } catch {
          // If clipboard API is blocked, we silently do nothing.
        }
      }}
      className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-slate-100 transition hover:bg-white/10"
    >
      {copied ? 'Copied' : label}
    </button>
  )
}

