import fs from 'fs'
import path from 'path'
import { blogArticleSchema, type BlogArticle } from '@/lib/schemas'

function loadArticles(): BlogArticle[] {
  try {
    const file = path.join(process.cwd(), 'public', 'data', 'blog.json')
    const raw = fs.readFileSync(file, 'utf-8')
    const parsed = JSON.parse(raw) as unknown[]
    return parsed
      .map((a) => blogArticleSchema.safeParse(a))
      .filter((r) => r.success)
      .map((r) => (r as { success: true; data: BlogArticle }).data)
  } catch {
    return []
  }
}

export const articles: BlogArticle[] = loadArticles()

export const featuredArticle: BlogArticle =
  articles.find((a) => a.featured === true) ?? articles[0]
