'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { getSession } from '@/lib/session'
import { writeJSON } from '@/lib/github-cms'
import { forumQuestionSchema, type ForumQuestion } from '@/lib/schemas'
import fs from 'fs'
import path from 'path'

const FILE = 'public/data/forum.json'

function readLocal(): ForumQuestion[] {
  try {
    return JSON.parse(fs.readFileSync(path.join(process.cwd(), FILE), 'utf-8')) as ForumQuestion[]
  } catch { return [] }
}

async function requireAdmin() {
  const session = await getSession()
  if (!session.isLoggedIn) redirect('/admin/login')
}

export type ForumState = { success: boolean; error?: string } | null

export async function submitForumQuestion(
  _prev: ForumState,
  formData: FormData,
): Promise<ForumState> {
  const authorInput = formData.get('authorName')?.toString().trim()
  const questionInput = formData.get('question')?.toString().trim()

  const raw = {
    id:         crypto.randomUUID(),
    question:   questionInput,
    authorName: authorInput || 'Anónimo',
    createdAt:  new Date().toISOString(),
    published:  false,
  }

  const result = forumQuestionSchema.safeParse(raw)
  if (!result.success) {
    return {
      success: false,
      error: result.error.errors.map((e) => e.message).join(', '),
    }
  }

  const updated = [...readLocal(), result.data]
  fs.writeFileSync(path.join(process.cwd(), FILE), JSON.stringify(updated, null, 2))

  // Commit asíncrono para no bloquear la respuesta de la UI
  writeJSON(FILE, updated, `forum: new question from ${result.data.authorName}`).catch((e) =>
    console.error('[CMS] Error guardando pregunta en GitHub:', e),
  )

  revalidatePath('/foro')
  return { success: true }
}

export async function answerForumQuestion(id: string, answerText: string): Promise<void> {
  await requireAdmin()

  if (!answerText.trim()) return

  const updated = readLocal().map((q) => {
    if (q.id === id) {
      return {
        ...q,
        answer:     answerText.trim(),
        answeredAt: new Date().toISOString(),
        published:  true,
      }
    }
    return q
  })

  fs.writeFileSync(path.join(process.cwd(), FILE), JSON.stringify(updated, null, 2))
  await writeJSON(FILE, updated, `forum: answer question ${id}`)

  revalidatePath('/foro')
  revalidatePath('/admin/foro')
}

export async function deleteForumQuestion(id: string): Promise<void> {
  await requireAdmin()

  const updated = readLocal().filter((q) => q.id !== id)
  fs.writeFileSync(path.join(process.cwd(), FILE), JSON.stringify(updated, null, 2))
  await writeJSON(FILE, updated, `forum: delete question ${id}`)

  revalidatePath('/foro')
  revalidatePath('/admin/foro')
}
