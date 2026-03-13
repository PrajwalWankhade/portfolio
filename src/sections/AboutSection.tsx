import type { SiteConfig } from '../config/schema'
import { MotionInView } from '../components/MotionInView'
import { Section } from '../components/Section'

type Props = {
  config: SiteConfig
}

export function AboutSection({ config }: Props) {
  const { about } = config.person
  return (
    <Section id="about" title="About" eyebrow="Who I am">
      <div className="grid gap-6 md:grid-cols-2">
        <MotionInView className="space-y-4">
          {about.map((p, idx) => (
            <p key={idx} className="text-sm leading-relaxed text-slate-300 sm:text-base">
              {p}
            </p>
          ))}
        </MotionInView>
        <MotionInView className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-semibold text-slate-50">Snapshot</p>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <div className="flex items-start justify-between gap-4">
              <span className="text-slate-400">Email</span>
              <span className="text-right">{config.contact.email}</span>
            </div>
            {config.person.location ? (
              <div className="flex items-start justify-between gap-4">
                <span className="text-slate-400">Location</span>
                <span className="text-right">{config.person.location}</span>
              </div>
            ) : null}
            <div className="flex items-start justify-between gap-4">
              <span className="text-slate-400">Focus</span>
              <span className="text-right">Quality, clarity, impact</span>
            </div>
          </div>
        </MotionInView>
      </div>
    </Section>
  )
}

