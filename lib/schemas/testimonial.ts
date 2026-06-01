import { z } from 'zod'

export const testimonialSchema = z.object({
  id:      z.string(),
  title:   z.string(),
  name:    z.string(),
  quote:   z.string(),
  photo:   z.string().optional(),
  videoId: z.string().optional(),
  city:    z.string().optional(),
})

export type Testimonial = z.infer<typeof testimonialSchema>
