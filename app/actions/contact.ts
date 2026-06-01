'use server'

import { revalidatePath } from 'next/cache'
import { contactFormSchema, contactSubmissionSchema, type ContactFormErrors, type ContactSubmission } from '@/lib/schemas'
import { writeJSON } from '@/lib/github-cms'
import { getSession } from '@/lib/session'
import { redirect } from 'next/navigation'
import fs from 'fs'
import path from 'path'

export type ContactResult =
  | { success: true }
  | { success: false; errors: ContactFormErrors['fieldErrors'] }

export type ContactState = ContactResult | null

const CONTACTS_FILE = 'data/contacts.json'

function readContacts(): ContactSubmission[] {
  try {
    return JSON.parse(
      fs.readFileSync(path.join(process.cwd(), CONTACTS_FILE), 'utf-8'),
    ) as ContactSubmission[]
  } catch { return [] }
}

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

  const submission: ContactSubmission = {
    id:         crypto.randomUUID(),
    receivedAt: new Date().toISOString(),
    status:     'nuevo',
    name:       result.data.name,
    email:      result.data.email,
    phone:      result.data.phone,
    city:       result.data.city,
    message:    result.data.message,
  }

  // Valida el submission antes de guardarlo
  contactSubmissionSchema.parse(submission)

  const updated = [...readContacts(), submission]
  fs.writeFileSync(path.join(process.cwd(), CONTACTS_FILE), JSON.stringify(updated, null, 2))

  // Commit asíncrono — no bloquea la respuesta al usuario
  writeJSON(CONTACTS_FILE, updated, `contact: ${result.data.name} <${result.data.email}>`).catch(
    (e) => console.error('[CMS] Error guardando contacto en GitHub:', e),
  )

  return { success: true }
}

export async function updateContactStatus(
  id: string,
  newStatus: ContactSubmission['status'],
): Promise<void> {
  const session = await getSession()
  if (!session.isLoggedIn) redirect('/admin/login')

  const updated = readContacts().map(c =>
    c.id === id ? { ...c, status: newStatus } : c,
  )
  fs.writeFileSync(path.join(process.cwd(), CONTACTS_FILE), JSON.stringify(updated, null, 2))
  await writeJSON(CONTACTS_FILE, updated, `contact: update status ${id} → ${newStatus}`)
  revalidatePath('/admin/contactos')
}
