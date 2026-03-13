import { motion } from 'framer-motion'
import type { SiteConfig } from '../config/schema'
import { IconLink } from '../components/IconLink'
import { MotionInView } from '../components/MotionInView'
import { Pill } from '../components/Pill'
import { Section } from '../components/Section'

type Props = {
  config: SiteConfig
}

export function ProjectsSection({ config }: Props) {
  if (!config.projects.length) return null

  return (
    <Section id="projects" title="Projects" eyebrow="Things I’ve built">
      <div className="grid gap-4 md:grid-cols-2">
        {config.projects.map((p, idx) => (
          <MotionInView key={`${p.name}-${idx}`}>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_55%)] opacity-0 transition group-hover:opacity-100" />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-50">{p.name}</p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {p.description}
                    </p>
                  </div>
                </div>

                {p.highlights?.length ? (
                  <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-slate-300">
                    {p.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech?.slice(0, 10).map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>

                {p.links.length ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.links.map((l) => (
                      <IconLink key={l.url} item={l} />
                    ))}
                  </div>
                ) : null}
              </div>
            </motion.div>
          </MotionInView>
        ))}
      </div>
    </Section>
  )
}

