import { z } from 'zod'

export const contactSubmissionSchema = z.object({
  id:          z.string(),
  receivedAt:  z.string(),
  status:      z.enum(['nuevo', 'revisado', 'contactado']),
  name:        z.string(),
  email:       z.string(),
  phone:       z.string(),
  city:        z.string().optional(),
  message:     z.string().optional(),
})

export type ContactSubmission = z.infer<typeof contactSubmissionSchema>
