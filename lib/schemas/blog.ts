import { z } from 'zod'

export const blogCategorySchema = z.enum([
  'ciencia',
  'estres-ansiedad',
  'sueno',
  'cerebro',
  'bienestar',
])

export const blogArticleSchema = z.object({
  slug:        z.string(),
  title:       z.string(),
  excerpt:     z.string(),
  category:    blogCategorySchema,
  coverImage:  z.string(),          // ruta en /public o URL CDN
  publishedAt: z.string(),          // ISO date string
  readingTime: z.number().int(),    // minutos
  featured:    z.boolean().optional(),
  // Contenido del artículo — MDX string o HTML string
  body:        z.string().optional(),
})

export type BlogCategory = z.infer<typeof blogCategorySchema>
export type BlogArticle  = z.infer<typeof blogArticleSchema>

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  'ciencia':         'Ciencia',
  'estres-ansiedad': 'Estrés y Ansiedad',
  'sueno':           'Sueño',
  'cerebro':         'Cerebro',
  'bienestar':       'Bienestar',
}
