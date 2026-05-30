import { z } from 'zod'

/**
 * Schema del formulario de inscripción a charla informativa.
 * Cumple ley colombiana de habeas data (campo aceptación obligatorio).
 * Mismo schema sirve para validación server-side y client-side.
 */
export const contactFormSchema = z.object({
  name:    z.string().min(2, 'Ingresa tu nombre completo'),
  email:   z.string().email('Ingresa un correo válido'),
  phone:   z.string().min(7, 'Ingresa tu teléfono o WhatsApp'),
  city:    z.string().optional(),
  message: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'Debes aceptar el tratamiento de datos personales' }),
  }),
})

export type ContactFormData   = z.infer<typeof contactFormSchema>
export type ContactFormErrors = z.inferFlattenedErrors<typeof contactFormSchema>
