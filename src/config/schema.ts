import { z } from 'zod'

const nonEmptyString = z.string().trim().min(1)

export const LinkItemSchema = z.object({
  label: nonEmptyString,
  url: nonEmptyString.url(),
  icon: z.string().trim().optional(),
})

export const SiteConfigSchema = z.object({
  meta: z.object({
    title: nonEmptyString,
    description: z.string().trim().optional(),
    themeColor: z.string().trim().optional(),
    ogImage: z.string().trim().optional(),
    keywords: z.array(z.string().trim()).optional(),
  }),
  person: z.object({
    name: nonEmptyString,
    role: nonEmptyString,
    location: z.string().trim().optional(),
    tagline: z.string().trim().optional(),
    avatarUrl: z.string().trim().optional(),
    resumeUrl: z.string().trim().optional(),
    about: z.array(z.string().trim()).min(1),
    quickFacts: z
      .array(z.object({ label: nonEmptyString, value: nonEmptyString }))
      .optional(),
  }),
  education: z
    .array(
      z.object({
        school: nonEmptyString,
        program: z.string().trim().optional(),
        start: z.string().trim().optional(),
        end: z.string().trim().optional(),
        location: z.string().trim().optional(),
        details: z.array(z.string().trim()).optional(),
      }),
    )
    .default([]),
  experience: z
    .array(
      z.object({
        company: nonEmptyString,
        title: nonEmptyString,
        start: z.string().trim().optional(),
        end: z.string().trim().optional(),
        location: z.string().trim().optional(),
        description: z.string().trim().optional(),
        highlights: z.array(z.string().trim()).optional(),
        tech: z.array(z.string().trim()).optional(),
      }),
    )
    .default([]),
  projects: z
    .array(
      z.object({
        name: nonEmptyString,
        description: nonEmptyString,
        highlights: z.array(z.string().trim()).optional(),
        tech: z.array(z.string().trim()).optional(),
        imageUrl: z.string().trim().optional(),
        links: z.array(LinkItemSchema).default([]),
      }),
    )
    .default([]),
  interests: z.array(z.string().trim()).default([]),
  contact: z.object({
    email: nonEmptyString.email(),
    phone: z.string().trim().optional(),
    cta: z.string().trim().optional(),
    availability: z.string().trim().optional(),
  }),
  links: z.object({
    codingPlatforms: z.array(LinkItemSchema).default([]),
    social: z.array(LinkItemSchema).default([]),
  }),
})

export type LinkItem = z.infer<typeof LinkItemSchema>
export type SiteConfig = z.infer<typeof SiteConfigSchema>

