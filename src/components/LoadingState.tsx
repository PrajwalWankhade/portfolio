export function LoadingState() {
  return (
    <div className="min-h-dvh bg-slate-950 text-slate-100">
      <div className="mx-auto flex min-h-dvh max-w-5xl items-center justify-center px-6">
        <div className="flex items-center gap-3">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-600 border-t-slate-100" />
          <p className="text-sm text-slate-300">Loading…</p>
        </div>
      </div>
    </div>
  )
}

