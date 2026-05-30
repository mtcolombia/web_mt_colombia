import { z } from 'zod'

export const testimonialSchema = z.object({
  name:    z.string(),
  quote:   z.string(),
  photo:   z.string().optional(),
  videoId: z.string().optional(), // YouTube video ID — ajustado a 16:9 sin espacio negro
  city:    z.string().optional(),
})

export type Testimonial = z.infer<typeof testimonialSchema>
