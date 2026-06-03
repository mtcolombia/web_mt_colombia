import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Compass, Microscope, Sparkles, Calendar, MessageSquare } from 'lucide-react'
import { HeroSecondary }  from '@/components/sections/HeroSecondary'
import { CTABand }        from '@/components/sections/CTABand'
import { articles, featuredArticle } from '@/lib/content/blog'
import { CATEGORY_LABELS } from '@/lib/schemas'
import { routes }          from '@/lib/routes'
import { formatDate }      from '@/lib/utils'
import type { BlogCategory } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Artículos sobre Meditación Trascendental, ciencia y bienestar — evidencia, experiencias y actualidad.',
}

// ─── Subsecciones ─────────────────────────────────────────────────────────
const SECTIONS = [
  { key: 'todas',          label: 'Todas',                       categories: null },
  { key: 'investigacion',  label: 'Investigación científica',    categories: ['ciencia', 'cerebro', 'estres-ansiedad'] as BlogCategory[] },
  { key: 'noticias',       label: 'Noticias positivas',          categories: ['bienestar', 'sueno'] as BlogCategory[] },
  { key: 'actividades',    label: 'Actividades del centro',      categories: [] as BlogCategory[] },
  { key: 'foro',           label: 'Foro',                        categories: null },
] as const

const ICON_MAP = {
  todas:         Compass,
  investigacion: Microscope,
  noticias:      Sparkles,
  actividades:   Calendar,
  foro:          MessageSquare,
}

type SectionKey = typeof SECTIONS[number]['key']

interface BlogPageProps {
  searchParams: Promise<{ seccion?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { seccion } = await searchParams
  const activeKey: SectionKey = (SECTIONS.find(s => s.key === seccion)?.key ?? 'todas') as SectionKey
  const activeSection = SECTIONS.find(s => s.key === activeKey)!

  const filtered = activeKey === 'todas'
    ? articles
    : activeSection.categories && activeSection.categories.length > 0
      ? articles.filter(a => (activeSection.categories as BlogCategory[]).includes(a.category))
      : []

  const featured = filtered.find(a => a.featured) ?? filtered[0]
  const rest = featured ? filtered.filter(a => a.slug !== featured.slug) : []

  return (
    <>
      <HeroSecondary
        title="Blog"
        subtitle="Artículos sobre Meditación Trascendental, ciencia y bienestar"
        breadcrumbs={[{ label: 'Blog' }]}
        imageSrc="/images/hero-blog.jpg"
      />

      {/* ─── Pestañas de subsección / Temas ─── */}
      <div className="bg-white/95 backdrop-blur-md border-b border-azul-profundo/[0.06] sticky top-16 z-20 transition-all duration-300">
        <div className="container-site">
          
          {/* Encabezado del filtro */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-4 pb-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-azul-claro animate-pulse" />
              <p className="text-[10px] font-sans font-bold tracking-[0.15em] text-azul-claro uppercase">
                Explora el conocimiento
              </p>
            </div>
            <p className="hidden sm:block text-[11px] font-sans text-azul-profundo/40">
              Selecciona un área de interés para filtrar los artículos
            </p>
          </div>

          <nav className="flex gap-2 pb-4 overflow-x-auto [&::-webkit-scrollbar]:hidden scrollbar-none">
            {SECTIONS.map((s) => {
              const Icon = ICON_MAP[s.key]
              const isActive = activeKey === s.key
              return (
                <Link
                  key={s.key}
                  href={s.key === 'todas' ? routes.blog : `${routes.blog}?seccion=${s.key}`}
                  className={`group shrink-0 flex items-center gap-2 px-4 py-2 rounded-full font-sans text-xs font-semibold
                             transition-all duration-200 border
                             ${isActive
                               ? 'bg-azul-claro border-azul-claro text-white shadow-md shadow-azul-claro/15 scale-[1.02]'
                               : 'bg-white border-azul-profundo/[0.08] text-azul-profundo/65 hover:border-azul-claro/40 hover:text-azul-claro hover:bg-azul-claro/[0.01]'
                             }`}
                >
                  <Icon size={14} className={isActive ? 'text-white' : 'text-azul-profundo/45 group-hover:text-azul-claro transition-colors'} />
                  {s.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </div>

      {/* ─── Foro placeholder ─── */}
      {activeKey === 'foro' && (
        <section className="section-y bg-beige">
          <div className="container-site max-w-xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-dorado/10 flex items-center justify-center mx-auto mb-6">
              <MessageSquare size={28} className="text-dorado" />
            </div>
            <h2 className="text-3xl mb-4">Foro de la comunidad</h2>
            <p className="font-sans text-azul-profundo/65 leading-relaxed">
              El espacio de comunidad está en desarrollo. Próximamente podrás compartir
              experiencias, hacer preguntas y conectar con otros practicantes de MT en Colombia.
            </p>
          </div>
        </section>
      )}

      {/* ─── Actividades placeholder ─── */}
      {activeKey === 'actividades' && (
        <section className="section-y bg-beige">
          <div className="container-site max-w-xl mx-auto text-center">
            <h2 className="text-3xl mb-4">Actividades del Centro</h2>
            <p className="font-sans text-azul-profundo/65 leading-relaxed">
              Próximamente encontrarás aquí los reportes de actividades, eventos y programas
              realizados por el Centro de Meditación Trascendental en Colombia.
            </p>
          </div>
        </section>
      )}

      {/* ─── Artículo destacado ─── */}
      {featured && activeKey !== 'foro' && activeKey !== 'actividades' && (
        <section className="section-y bg-white">
          <div className="container-site">
            <Link
              href={routes.blogPost(featured.slug)}
              className="group flex flex-col md:flex-row gap-8 rounded-[var(--radius-card)]
                         overflow-hidden shadow-card hover:shadow-lg transition-shadow"
            >
              <div className="relative h-56 md:h-auto md:w-1/2 shrink-0 bg-beige">
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-8">
                <span className="inline-block bg-dorado/10 text-dorado font-sans text-xs font-semibold
                                 uppercase tracking-wider px-3 py-1 rounded-full mb-4 self-start">
                  {CATEGORY_LABELS[featured.category]}
                </span>
                <h2 className="text-2xl md:text-3xl mb-3 group-hover:text-azul-claro transition-colors">
                  {featured.title}
                </h2>
                <p className="font-serif text-azul-profundo/75 mb-4">{featured.excerpt}</p>
                <p className="text-xs font-sans text-azul-profundo/50">
                  {formatDate(featured.publishedAt)} · {featured.readingTime} min lectura
                </p>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* ─── Grilla ─── */}
      {rest.length > 0 && activeKey !== 'foro' && activeKey !== 'actividades' && (
        <section className="section-y bg-beige">
          <div className="container-site">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((article) => (
                <Link
                  key={article.slug}
                  href={routes.blogPost(article.slug)}
                  className="group flex flex-col rounded-[var(--radius-card)] bg-white
                             overflow-hidden shadow-card hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 bg-beige overflow-hidden">
                    <Image
                      src={article.coverImage}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <span className="text-dorado font-sans text-xs font-semibold uppercase tracking-wider mb-2">
                      {CATEGORY_LABELS[article.category]}
                    </span>
                    <h3 className="font-sans font-semibold text-azul-profundo mb-2 line-clamp-2
                                   group-hover:text-azul-claro transition-colors">
                      {article.title}
                    </h3>
                    <p className="font-serif text-sm text-azul-profundo mb-4 line-clamp-3 flex-1">
                      {article.excerpt}
                    </p>
                    <p className="text-xs font-sans text-azul-profundo/40">
                      {formatDate(article.publishedAt)} · {article.readingTime} min
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Sin artículos */}
      {filtered.length === 0 && activeKey !== 'foro' && activeKey !== 'actividades' && (
        <section className="section-y bg-beige">
          <div className="container-site text-center">
            <p className="font-sans text-azul-profundo/50">
              Próximamente habrá artículos en esta sección.
            </p>
          </div>
        </section>
      )}

      <CTABand />
    </>
  )
}
