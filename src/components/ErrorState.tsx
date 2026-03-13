type Props = {
  message: string
}

export function ErrorState({ message }: Props) {
  return (
    <div className="min-h-dvh bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-dvh max-w-2xl flex-col items-start justify-center gap-3 px-6">
        <p className="text-sm font-semibold text-rose-300">Something went wrong</p>
        <p className="text-sm text-slate-300">{message}</p>
        <p className="text-xs text-slate-500">
          Fix <span className="font-mono">public/config.json</span> and refresh.
        </p>
      </div>
    </div>
  )
}

