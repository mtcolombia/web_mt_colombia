import { z } from 'zod'

export const blogCategorySchema = z.enum([
  'ciencia',
  'estres-ansiedad',
  'cerebro',
  'bienestar',
  'sueno',
  'actividades',
  'foro',
  'noticias-positivas',
  'investigacion-cientifica',
])

export const blogArticleSchema = z.object({
  slug:        z.string(),
  title:       z.string(),
  excerpt:     z.string(),
  category:    blogCategorySchema,
  coverImage:  z.string(),
  publishedAt: z.string(),
  readingTime: z.number().int(),
  featured:    z.boolean().optional(),
  body:        z.string().optional(),
  source:      z.string().optional(),
})

export type BlogCategory = z.infer<typeof blogCategorySchema>
export type BlogArticle  = z.infer<typeof blogArticleSchema>

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  'ciencia':                  'Ciencia',
  'estres-ansiedad':          'Estrés y Ansiedad',
  'cerebro':                  'Cerebro',
  'bienestar':                'Bienestar',
  'sueno':                    'Sueño',
  'actividades':              'Actividades del centro',
  'foro':                     'Foro',
  'noticias-positivas':       'Noticias positivas',
  'investigacion-cientifica': 'Investigación científica',
}
