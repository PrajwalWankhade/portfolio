import type { SiteConfig } from '../config/schema'
import { MotionInView } from '../components/MotionInView'
import { Pill } from '../components/Pill'
import { Section } from '../components/Section'

type Props = {
  config: SiteConfig
}

export function InterestsSection({ config }: Props) {
  if (!config.interests.length) return null

  return (
    <Section id="interests" title="Interests" eyebrow="Outside of work">
      <MotionInView>
        <div className="flex flex-wrap gap-2">
          {config.interests.map((i) => (
            <Pill key={i}>{i}</Pill>
          ))}
        </div>
      </MotionInView>
    </Section>
  )
}

