'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { getSession } from '@/lib/session'
import { writeJSON } from '@/lib/github-cms'
import { blogArticleSchema, type BlogArticle } from '@/lib/schemas'
import fs from 'fs'
import path from 'path'

function readLocalArticles(): BlogArticle[] {
  try {
    const file = path.join(process.cwd(), 'public', 'data', 'blog.json')
    return JSON.parse(fs.readFileSync(file, 'utf-8')) as BlogArticle[]
  } catch { return [] }
}

async function requireAdmin() {
  const session = await getSession()
  if (!session.isLoggedIn) redirect('/admin/login')
}

export type BlogFormState = { error?: string; success?: boolean } | null

export async function createArticle(
  _prev: BlogFormState,
  formData: FormData,
): Promise<BlogFormState> {
  await requireAdmin()

  const raw = {
    slug:        (formData.get('slug') as string).trim().toLowerCase().replace(/\s+/g, '-'),
    title:       formData.get('title'),
    excerpt:     formData.get('excerpt'),
    category:    formData.get('category'),
    coverImage:  formData.get('coverImage') || '/images/blog/placeholder.jpg',
    publishedAt: formData.get('publishedAt') || new Date().toISOString().split('T')[0],
    readingTime: Number(formData.get('readingTime') ?? 5),
    featured:    formData.get('featured') === 'on',
    body:        formData.get('body') || undefined,
  }

  const result = blogArticleSchema.safeParse(raw)
  if (!result.success) {
    return { error: result.error.errors.map(e => e.message).join(', ') }
  }

  const articles = readLocalArticles()
  if (articles.find(a => a.slug === result.data.slug)) {
    return { error: 'Ya existe un artículo con ese slug.' }
  }

  const updated = [result.data, ...articles]

  // Actualiza archivo local (dev) y commit en GitHub (prod)
  const filePath = path.join(process.cwd(), 'public', 'data', 'blog.json')
  fs.writeFileSync(filePath, JSON.stringify(updated, null, 2))
  await writeJSON('public/data/blog.json', updated, `blog: add "${result.data.title}"`)

  revalidatePath('/blog')
  revalidatePath('/admin/blog')
  redirect('/admin/blog')
}

export async function deleteArticle(slug: string): Promise<void> {
  await requireAdmin()
  const articles = readLocalArticles().filter(a => a.slug !== slug)
  const filePath = path.join(process.cwd(), 'public', 'data', 'blog.json')
  fs.writeFileSync(filePath, JSON.stringify(articles, null, 2))
  await writeJSON('public/data/blog.json', articles, `blog: remove "${slug}"`)
  revalidatePath('/blog')
  revalidatePath('/admin/blog')
}
