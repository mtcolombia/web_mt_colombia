'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { getSession } from '@/lib/session'
import { writeJSON } from '@/lib/github-cms'
import { testimonialSchema, type Testimonial } from '@/lib/schemas'
import fs from 'fs'
import path from 'path'

const FILE = 'public/data/testimonials.json'

function readLocal(): Testimonial[] {
  try {
    return JSON.parse(fs.readFileSync(path.join(process.cwd(), FILE), 'utf-8')) as Testimonial[]
  } catch { return [] }
}

async function requireAdmin() {
  const session = await getSession()
  if (!session.isLoggedIn) redirect('/admin/login')
}

export type TestimonialFormState = { error?: string } | null

export async function createTestimonial(
  _prev: TestimonialFormState,
  formData: FormData,
): Promise<TestimonialFormState> {
  await requireAdmin()

  const raw = {
    id:      crypto.randomUUID(),
    title:   formData.get('title'),
    name:    formData.get('name'),
    quote:   formData.get('quote'),
    photo:   formData.get('photo') || undefined,
    videoId: formData.get('videoId') || undefined,
    city:    formData.get('city') || undefined,
  }

  const result = testimonialSchema.safeParse(raw)
  if (!result.success) {
    return { error: result.error.errors.map(e => e.message).join(', ') }
  }

  const updated = [...readLocal(), result.data]
  fs.writeFileSync(path.join(process.cwd(), FILE), JSON.stringify(updated, null, 2))
  await writeJSON(FILE, updated, `testimonials: add "${result.data.name}"`)

  revalidatePath('/admin/testimonios')
  redirect('/admin/testimonios')
}

export async function deleteTestimonial(id: string): Promise<void> {
  await requireAdmin()
  const updated = readLocal().filter(t => t.id !== id)
  fs.writeFileSync(path.join(process.cwd(), FILE), JSON.stringify(updated, null, 2))
  await writeJSON(FILE, updated, `testimonials: remove ${id}`)
  revalidatePath('/admin/testimonios')
}
