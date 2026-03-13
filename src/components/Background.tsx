export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="absolute top-[30%] -left-32 h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
      <div className="absolute -bottom-40 right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_55%)]" />
    </div>
  )
}

