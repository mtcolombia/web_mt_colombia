import { z } from 'zod'

export const forumQuestionSchema = z.object({
  id:          z.string(),
  question:    z.string().min(10, 'La pregunta debe tener al menos 10 caracteres'),
  authorName:  z.string().optional(),
  createdAt:   z.string(),
  answer:      z.string().optional(),
  answeredAt:  z.string().optional(),
  published:   z.boolean().default(false),
})

export type ForumQuestion = z.infer<typeof forumQuestionSchema>
