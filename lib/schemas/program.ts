import { z } from 'zod'

export const benefitSchema = z.object({
  text: z.string(),
  icon: z.string(), // nombre del icono Lucide
})

export const programSchema = z.object({
  id:          z.string(),       // usado como anchor id=""
  name:        z.string(),
  tagline:     z.string(),
  description: z.string(),
  benefits:    z.array(benefitSchema),
  image:       z.string(),       // ruta /public o URL
  videoId:     z.string().optional(), // YouTube video ID
})

export type Benefit = z.infer<typeof benefitSchema>
export type Program = z.infer<typeof programSchema>
