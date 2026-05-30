import { z } from 'zod'

export const navItemSchema = z.object({
  label:    z.string(),
  href:     z.string(),
  external: z.boolean().optional(),
})

export const navSchema = z.array(navItemSchema)

export type NavItem = z.infer<typeof navItemSchema>
export type Nav     = z.infer<typeof navSchema>
