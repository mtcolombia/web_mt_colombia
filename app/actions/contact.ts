'use server'
/**
 * Server Action — formulario de inscripción a charla.
 * Firma compatible con React 19 useActionState:
 *   (prevState, formData) => Promise<State>
 */
import { contactFormSchema, type ContactFormErrors } from '@/lib/schemas'

export type ContactResult =
  | { success: true }
  | { success: false; errors: ContactFormErrors['fieldErrors'] }

export type ContactState = ContactResult | null

export async function submitContactForm(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const raw = {
    name:    formData.get('name'),
    email:   formData.get('email'),
    phone:   formData.get('phone'),
    city:    formData.get('city') || undefined,
    message: formData.get('message') || undefined,
    consent: formData.get('consent') === 'on' ? (true as const) : undefined,
  }

  const result = contactFormSchema.safeParse(raw)

  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors }
  }

  // ─── ENVÍO DE EMAIL ─────────────────────────────────────────────────────
  // Plug-in: cambia este bloque sin tocar el formulario ni el schema.
  //
  // Ejemplo con Resend (npm install resend):
  //   import { Resend } from 'resend'
  //   const resend = new Resend(process.env.RESEND_API_KEY)
  //   await resend.emails.send({
  //     from:    'noreply@meditaciontrascendental.co',
  //     to:      'meditaciontrascendental1917@gmail.com',
  //     subject: `Nueva inscripción: ${result.data.name}`,
  //     html:    `<pre>${JSON.stringify(result.data, null, 2)}</pre>`,
  //   })
  // ────────────────────────────────────────────────────────────────────────

  console.info('[Contact Form] Nueva inscripción:', result.data)

  return { success: true }
}
