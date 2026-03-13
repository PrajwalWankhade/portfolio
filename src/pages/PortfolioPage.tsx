import type { SiteConfig } from '../config/schema'
import { Background } from '../components/Background'
import { Navbar } from '../components/Navbar'
import type { NavItem } from '../lib/useActiveSection'
import { AboutSection } from '../sections/AboutSection'
import { ContactSection } from '../sections/ContactSection'
import { EducationSection } from '../sections/EducationSection'
import { ExperienceSection } from '../sections/ExperienceSection'
import { HeroSection } from '../sections/HeroSection'
import { InterestsSection } from '../sections/InterestsSection'
import { ProjectsSection } from '../sections/ProjectsSection'

type Props = {
  config: SiteConfig
}

function buildNav(config: SiteConfig): NavItem[] {
  const items: NavItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
  ]

  if (config.education.length) items.push({ id: 'education', label: 'Education' })
  if (config.experience.length) items.push({ id: 'experience', label: 'Work' })
  if (config.projects.length) items.push({ id: 'projects', label: 'Projects' })
  if (config.interests.length) items.push({ id: 'interests', label: 'Interests' })
  items.push({ id: 'contact', label: 'Contact' })

  return items
}

export function PortfolioPage({ config }: Props) {
  const navItems = buildNav(config)

  return (
    <div className="min-h-dvh bg-slate-950 text-slate-100">
      <Background />
      <Navbar brand={config.person.name} items={navItems} />
      <main>
        <HeroSection config={config} />
        <AboutSection config={config} />
        <EducationSection config={config} />
        <ExperienceSection config={config} />
        <ProjectsSection config={config} />
        <InterestsSection config={config} />
        <ContactSection config={config} />
      </main>
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto max-w-6xl px-6 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {config.person.name}. Built with React.
          </p>
        </div>
      </footer>
    </div>
  )
}

