import type { SiteConfig } from '../config/schema'
import { MotionInView } from '../components/MotionInView'
import { Pill } from '../components/Pill'
import { Section } from '../components/Section'

type Props = {
  config: SiteConfig
}

export function ExperienceSection({ config }: Props) {
  if (!config.experience.length) return null

  return (
    <Section id="experience" title="Work experience" eyebrow="Work">
      <div className="space-y-4">
        {config.experience.map((job, idx) => (
          <MotionInView key={`${job.company}-${job.title}-${idx}`}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-50">{job.title}</p>
                  <p className="mt-1 text-sm text-slate-300">{job.company}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {job.start || job.end ? (
                    <Pill>{[job.start, job.end].filter(Boolean).join(' — ')}</Pill>
                  ) : null}
                  {job.location ? <Pill>{job.location}</Pill> : null}
                </div>
              </div>
              {job.description ? (
                <p className="mt-4 text-sm leading-relaxed text-slate-300">
                  {job.description}
                </p>
              ) : null}
              {job.highlights?.length ? (
                <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-slate-300">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              ) : null}
              {job.tech?.length ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.tech.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              ) : null}
            </div>
          </MotionInView>
        ))}
      </div>
    </Section>
  )
}

