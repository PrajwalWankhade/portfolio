import type { SiteConfig } from '../config/schema'
import { MotionInView } from '../components/MotionInView'
import { Pill } from '../components/Pill'
import { Section } from '../components/Section'

type Props = {
  config: SiteConfig
}

export function EducationSection({ config }: Props) {
  if (!config.education.length) return null

  return (
    <Section id="education" title="Education" eyebrow="Schooling">
      <div className="space-y-4">
        {config.education.map((edu, idx) => (
          <MotionInView key={`${edu.school}-${idx}`}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-slate-50">{edu.school}</p>
                  {edu.program ? (
                    <p className="mt-1 text-sm text-slate-300">{edu.program}</p>
                  ) : null}
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {edu.start || edu.end ? (
                    <Pill>
                      {[edu.start, edu.end].filter(Boolean).join(' — ')}
                    </Pill>
                  ) : null}
                  {edu.location ? <Pill>{edu.location}</Pill> : null}
                </div>
              </div>
              {edu.details?.length ? (
                <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-slate-300">
                  {edu.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          </MotionInView>
        ))}
      </div>
    </Section>
  )
}

