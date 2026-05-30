import { type BlogArticle } from '@/lib/schemas'

/**
 * Artículos del blog.
 * Estructura lista para migrar a CMS (Sanity, Contentful, Notion)
 * o archivos MDX — sólo cambia esta capa de contenido.
 */
export const articles: BlogArticle[] = [
  {
    slug:        'ciencia-moderna-mt-bienestar',
    title:       'La Ciencia Moderna y la Meditación Trascendental: bienestar para mente y cuerpo',
    excerpt:     'Más de 800 estudios en 250 universidades han documentado los efectos de la MT sobre el estrés, la salud cardiovascular y el funcionamiento cerebral. Un recorrido por la evidencia más sólida.',
    category:    'ciencia',
    coverImage:  '/images/blog/ciencia-moderna-mt.jpg',
    publishedAt: '2025-03-15',
    readingTime: 7,
    featured:    true,
  },
  {
    slug:        'mt-resiliencia-mental',
    title:       'Meditación Trascendental y Resiliencia Mental',
    excerpt:     'La práctica regular de la MT activa respuestas neurológicas que reducen la reactividad al estrés y aumentan la capacidad de recuperación emocional.',
    category:    'estres-ansiedad',
    coverImage:  '/images/blog/resiliencia-mental.jpg',
    publishedAt: '2025-02-20',
    readingTime: 5,
  },
  {
    slug:        'mt-cambios-cerebro',
    title:       'Meditación y Cambios en el Cerebro',
    excerpt:     'Los estudios con EEG muestran que durante la MT se produce coherencia cerebral global — un patrón de ondas alfa sincronizadas en todo el córtex que no ocurre en ningún otro estado.',
    category:    'cerebro',
    coverImage:  '/images/blog/cambios-cerebro.jpg',
    publishedAt: '2025-01-10',
    readingTime: 6,
  },
  {
    slug:        'mt-ciencia-interes-mundial',
    title:       'Meditación Trascendental y Ciencia Moderna: el creciente interés mundial por el bienestar interior',
    excerpt:     'Desde Silicon Valley hasta el sistema de salud pública de EE.UU., la MT está siendo adoptada como herramienta de bienestar basada en evidencia.',
    category:    'ciencia',
    coverImage:  '/images/blog/interes-mundial.jpg',
    publishedAt: '2024-12-05',
    readingTime: 8,
  },
  {
    slug:        'deportistas-artistas-lideres-mt',
    title:       'Deportistas, Artistas y Líderes que practican Meditación Trascendental',
    excerpt:     'De Ray Dalio a David Lynch, de Novak Djokovic a Oprah Winfrey — las personas de mayor rendimiento en el mundo comparten esta práctica.',
    category:    'bienestar',
    coverImage:  '/images/blog/lideres-mt.jpg',
    publishedAt: '2024-11-18',
    readingTime: 4,
  },
  {
    slug:        'mt-insomnio-ansiedad-ciencia',
    title:       'Meditación Trascendental, Insomnio y Ansiedad: lo que revela la ciencia moderna',
    excerpt:     'Una revisión de los estudios clínicos más recientes (2022–2025) sobre el impacto de la MT en el sueño, la ansiedad generalizada y el bienestar emocional.',
    category:    'sueno',
    coverImage:  '/images/blog/insomnio-ansiedad.jpg',
    publishedAt: '2024-10-30',
    readingTime: 6,
  },
]

/** Artículo destacado (featured o primero de la lista) */
export const featuredArticle: BlogArticle =
  articles.find((a) => a.featured === true) ?? articles[0]
