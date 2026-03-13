import { motion } from 'framer-motion'
import type { SiteConfig } from '../config/schema'
import { ButtonLink } from '../components/ButtonLink'
import { Container } from '../components/Container'
import { IconLink } from '../components/IconLink'
import { Pill } from '../components/Pill'

type Props = {
  config: SiteConfig
}

export function HeroSection({ config }: Props) {
  const { person, links } = config
  const tagline = person.tagline ?? person.about[0]

  return (
    <section id="home" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.25fr_0.75fr] md:items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="space-y-3"
            >
              <p className="text-xs font-medium tracking-widest text-indigo-300/90 uppercase">
                {person.role}
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
                {person.name}
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {tagline}
              </p>
              {person.location ? (
                <p className="text-sm text-slate-400">{person.location}</p>
              ) : null}
            </motion.div>

            {person.quickFacts?.length ? (
              <div className="flex flex-wrap gap-2">
                {person.quickFacts.map((f) => (
                  <Pill key={`${f.label}-${f.value}`}>
                    <span className="text-slate-400">{f.label}</span>
                    <span className="mx-2 text-slate-700/0">·</span>
                    <span>{f.value}</span>
                  </Pill>
                ))}
              </div>
            ) : null}

            <div className="flex flex-wrap gap-3">
              {person.resumeUrl ? (
                <ButtonLink href={person.resumeUrl} variant="primary">
                  View resume
                </ButtonLink>
              ) : null}
              <ButtonLink href="#projects" variant="secondary">
                See projects
              </ButtonLink>
              <ButtonLink href="#contact" variant="ghost">
                Contact
              </ButtonLink>
            </div>

            {links.social.length ? (
              <div className="flex flex-wrap gap-2 pt-2">
                {links.social.map((item) => (
                  <IconLink key={item.url} item={item} />
                ))}
              </div>
            ) : null}
          </div>

          <div className="mx-auto w-full max-w-sm">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/40">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_55%)]" />
              <div className="relative">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-white/10">
                    {person.avatarUrl ? (
                      <img
                        alt={person.name}
                        src={person.avatarUrl}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-slate-300">
                        {person.name
                          .split(' ')
                          .filter(Boolean)
                          .slice(0, 2)
                          .map((p) => p[0]?.toUpperCase())
                          .join('')}
                      </div>
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-50">
                      {person.name}
                    </p>
                    <p className="truncate text-xs text-slate-400">{person.role}</p>
                  </div>
                </div>
                <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                  <p className="text-xs font-medium text-slate-400">Currently</p>
                  <p className="mt-1 text-sm text-slate-200">
                    Building, learning, shipping.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {config.projects.slice(0, 3).map((p) => (
                      <Pill key={p.name} className="bg-white/0">
                        {p.name}
                      </Pill>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

