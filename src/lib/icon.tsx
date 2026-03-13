import type { ComponentType } from 'react'
import type { IconBaseProps } from 'react-icons'
import {
  FiCode,
  FiGithub,
  FiGlobe,
  FiInstagram,
  FiLink,
  FiMail,
  FiTwitter,
  FiYoutube,
} from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'
import {
  SiCodeforces,
  SiGeeksforgeeks,
  SiHackerrank,
  SiLeetcode,
} from 'react-icons/si'

type IconComponent = ComponentType<IconBaseProps>

const ICONS: Record<string, IconComponent> = {
  github: FiGithub,
  website: FiGlobe,
  portfolio: FiGlobe,
  web: FiGlobe,
  mail: FiMail,
  email: FiMail,
  linkedin: FaLinkedin,
  twitter: FiTwitter,
  x: FiTwitter,
  instagram: FiInstagram,
  youtube: FiYoutube,
  leetcode: SiLeetcode,
  hackerrank: SiHackerrank,
  codeforces: SiCodeforces,
  geeksforgeeks: SiGeeksforgeeks,
  gfg: SiGeeksforgeeks,
  coding: FiCode,
  link: FiLink,
}

export function getIcon(name?: string): IconComponent {
  if (!name) return FiLink
  return ICONS[name.trim().toLowerCase()] ?? FiLink
}

