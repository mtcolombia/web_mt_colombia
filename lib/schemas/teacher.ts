import { z } from 'zod'

export const teacherSchema = z.object({
  name:  z.string(),
  role:  z.string(),
  photo: z.string(),
  bio:   z.string().optional(),
  tag:   z.enum(['directivo', 'instructor']).optional(),
})

export type Teacher = z.infer<typeof teacherSchema>
