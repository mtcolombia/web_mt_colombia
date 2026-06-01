/**
 * SISTEMA DE RUTAS — Única fuente de verdad
 *
 * Axioma de Suh: un FR (navegar a X) → un DP (este archivo).
 * Ningún componente hardcodea URLs; siempre importa de aquí.
 * Compatible con experimental.typedRoutes de Next.js.
 */

/** Rutas estáticas tipadas */
export const routes = {
  home:        '/'                          as const,
  mt:          '/meditacion-trascendental'  as const,
  nosotros:    '/nosotros'                  as const,
  programas:   '/programas-y-tecnologias'  as const,
  proyectos:   '/proyectos'                as const,
  actividades: '/actividades'              as const,
  blog:        '/blog'                     as const,
  contacto:    '/contacto'                 as const,
  // Rutas dinámicas como funciones
  blogPost:    (slug: string) => `/blog/${slug}` as const,
  // Rutas admin (protegidas por iron-session)
  admin:            '/admin'                as const,
  adminLogin:       '/admin/login'          as const,
  adminBlog:        '/admin/blog'           as const,
  adminBlogNew:     '/admin/blog/new'       as const,
  adminTestimonios: '/admin/testimonios'    as const,
  adminContactos:   '/admin/contactos'      as const,
} as const

/** Tipo de rutas estáticas (para <Link href={...}>) */
export type StaticRoute = (typeof routes)[
  Exclude<keyof typeof routes, 'blogPost'>
]

/** Anclas internas de /programas-y-tecnologias */
export const programAnchors = {
  gandharva:   '#gandharva-veda',
  marmas:      '#marmas',
  luzGemas:    '#luz-gemas',
  yoga:        '#yoga-maharishi',
  pranayama:   '#pranayama',
  aromaterapia:'#aromaterapia',
  pulso:       '#diagnostico-pulso',
  jyotish:     '#jyotish-yagya',
  avanzadas:   '#tecnicas-avanzadas',
  sidhis:      '#sidhis-mt',
} as const

/** Anclas internas de /proyectos */
export const proyectosAnchors = {
  educacion: '#educacion-conciencia',
  digital:   '#expansion-digital',
  coherencia:'#coherencia-social',
} as const
