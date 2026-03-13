import type { SiteConfig } from '../config/schema'
import { CopyButton } from '../components/CopyButton'
import { IconLink } from '../components/IconLink'
import { MotionInView } from '../components/MotionInView'
import { Section } from '../components/Section'

type Props = {
  config: SiteConfig
}

export function ContactSection({ config }: Props) {
  const { contact, links } = config

  return (
    <Section id="contact" title="Contact" eyebrow="Let’s talk">
      <div className="grid gap-4 md:grid-cols-2">
        <MotionInView className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-semibold text-slate-50">
            {contact.cta ?? 'Have an idea or an opportunity?'}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            Email me and I’ll get back to you.
          </p>
          {contact.availability ? (
            <p className="mt-3 text-xs text-slate-400">{contact.availability}</p>
          ) : null}

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${contact.email}`}
              className="rounded-xl bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm shadow-indigo-500/20 transition hover:bg-indigo-400"
            >
              {contact.email}
            </a>
            <CopyButton value={contact.email} label="Copy email" />
          </div>

          {contact.phone ? (
            <div className="mt-4 text-sm text-slate-300">
              <span className="text-slate-400">Phone: </span>
              <a className="hover:underline" href={`tel:${contact.phone}`}>
                {contact.phone}
              </a>
            </div>
          ) : null}
        </MotionInView>

        <MotionInView className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-semibold text-slate-50">Links</p>
          {links.codingPlatforms.length ? (
            <>
              <p className="mt-3 text-xs font-medium tracking-widest text-slate-400 uppercase">
                Coding platforms
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {links.codingPlatforms.map((l) => (
                  <IconLink key={l.url} item={l} />
                ))}
              </div>
            </>
          ) : null}
          {links.social.length ? (
            <>
              <p className="mt-5 text-xs font-medium tracking-widest text-slate-400 uppercase">
                Social
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {links.social.map((l) => (
                  <IconLink key={l.url} item={l} />
                ))}
              </div>
            </>
          ) : null}
        </MotionInView>
      </div>
    </Section>
  )
}

