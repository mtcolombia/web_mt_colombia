import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Compass, Microscope, Sparkles, Calendar } from 'lucide-react'
import { CTABand } from '@/components/sections/CTABand'
import { Slider } from '@/components/sections/Slider'
import { articles } from '@/lib/content/blog'
import { CATEGORY_LABELS } from '@/lib/schemas'
import { routes } from '@/lib/routes'
import { formatDate } from '@/lib/utils'
import type { BlogCategory } from '@/lib/schemas'
import type React from 'react'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Artículos sobre Meditación Trascendental, ciencia y bienestar — evidencia, experiencias y actualidad.',
}

// ─── Subsecciones (Foro ocultado por ahora) ─────────────────────────────────
const SECTIONS = [
  { key: 'todas',                  label: 'Todas',                     category: null as BlogCategory | null },
  { key: 'investigacion-cientifica', label: 'Investigación científica', category: 'investigacion-cientifica' as BlogCategory },
  { key: 'noticias-positivas',     label: 'Noticias positivas',        category: 'noticias-positivas' as BlogCategory },
  { key: 'actividades',            label: 'Actividades del centro',    category: 'actividades' as BlogCategory },
] as const

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  'todas':                   Compass,
  'investigacion-cientifica': Microscope,
  'noticias-positivas':      Sparkles,
  'actividades':             Calendar,
}

type SectionKey = typeof SECTIONS[number]['key']

interface BlogPageProps {
  searchParams: Promise<{ seccion?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { seccion } = await searchParams
  const activeKey: SectionKey = (SECTIONS.find(s => s.key === seccion)?.key ?? 'todas') as SectionKey
  const activeSection = SECTIONS.find(s => s.key === activeKey)!

  const filtered = activeSection.category === null
    ? articles
    : articles.filter(a => a.category === activeSection.category)

  // Mapeamos los artículos a la estructura esperada por el Slider
  const slides = filtered.map((article) => ({
    id: article.slug,
    content: (
      <div className="px-4 md:px-12 py-4 max-w-4xl mx-auto snap-start select-none">
        {/* Cápsula de conocimiento - Diseño Premium sin link de navegación */}
        <div className="bg-white rounded-[24px] overflow-hidden border border-azul-profundo/[0.08] 
                        shadow-[0_16px_48px_rgba(15,42,68,0.06)] hover:shadow-[0_24px_64px_rgba(15,42,68,0.1)] 
                        transition-all duration-500 grid grid-cols-1 md:grid-cols-2 min-h-[380px] md:min-h-[440px]
                        group">
          
          {/* Lado izquierdo: Portada de la Cápsula */}
          <div className="relative h-56 md:h-auto min-h-[240px] bg-beige overflow-hidden">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              className="object-cover group-hover:scale-[1.03] transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            {/* Gradiente sutil interno */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
          
          {/* Lado derecho: Cuerpo de la Cápsula */}
          <div className="p-6 md:p-10 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-block bg-dorado/15 text-dorado font-sans text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {CATEGORY_LABELS[article.category]}
                </span>
                <span className="text-xs font-sans text-azul-profundo/45 font-medium">
                  {formatDate(article.publishedAt)}
                </span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-sans font-bold text-azul-profundo leading-snug tracking-tight">
                {article.title}
              </h3>
              
              <p className="font-serif text-sm md:text-base text-azul-profundo/75 leading-relaxed">
                {article.excerpt}
              </p>
            </div>
            
            {/* Metadata inferior de la cápsula */}
            <div className="mt-6 pt-4 border-t border-azul-profundo/[0.06] flex items-center justify-between">
              <span className="text-[11px] font-sans text-azul-profundo/40 font-medium tracking-wide">
                Cápsula de lectura · {article.readingTime} min
              </span>
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-dorado bg-dorado/5 px-2.5 py-1 rounded">
                Completa
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }))

  return (
    <>
      {/* ─── Cabecera de Sección Dinámica Unificada (Hero Único y Dynamic del Blog) ─── */}
      <div className="relative h-[340px] md:h-[420px] overflow-hidden bg-azul-profundo flex items-center">
        {activeKey === 'noticias-positivas' ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/images/blog/portada-noticias.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image
            src={
              activeKey === 'actividades'
                ? '/images/blog/portada-actividades.jpeg'
                : activeKey === 'investigacion-cientifica'
                ? '/images/mt-fondo-cerebro.jpeg'
                : '/images/hero-blog.jpeg'
            }
            alt={activeSection.label}
            fill
            className="object-cover"
            priority
          />
        )}
        {/* Filtro degradado premium */}
        <div className="absolute inset-0 bg-gradient-to-r from-azul-profundo/95 via-azul-profundo/60 to-transparent" />
        
        {/* Contenido flotante */}
        <div className="relative container-site text-white z-10 space-y-4 pt-10">
          {/* Breadcrumbs integrados */}
          <nav aria-label="Breadcrumb" className="mb-2">
            <ol className="flex items-center gap-1.5 text-xs md:text-sm font-sans text-white/60">
              <li>
                <Link href={routes.home} className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <span className="text-white/30">/</span>
              <li className="text-white font-medium">Blog</li>
            </ol>
          </nav>

          <div className="space-y-2">
            <span className="inline-block bg-dorado text-azul-profundo text-[9px] md:text-[10px] font-sans font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full shadow-sm">
              {activeKey === 'todas' ? 'Blog Global' : activeSection.label}
            </span>
            <h1 className="text-3xl md:text-5xl font-display leading-tight text-white max-w-2xl">
              {activeKey === 'todas'
                ? 'El Conocimiento Completo'
                : activeKey === 'investigacion-cientifica'
                ? 'Evidencia Científica de la Trascendencia'
                : activeKey === 'noticias-positivas'
                ? 'Noticias de Bienestar y Sueño'
                : 'Actividades del Centro de MT'}
            </h1>
            <p className="mt-2 text-white/70 font-sans text-xs md:text-base max-w-xl leading-relaxed">
              {activeKey === 'todas'
                ? 'Explora las micro-cápsulas de sabiduría de la Ciencia de la Inteligencia Creativa.'
                : activeKey === 'investigacion-cientifica'
                ? 'Descubrimientos clínicos y neurocientíficos sobre la salud cerebral y cardiovascular.'
                : activeKey === 'noticias-positivas'
                ? 'Historias de éxito, resiliencia y el impacto de un mejor descanso en el bienestar.'
                : 'Eventos, retiros de residencia y novedades del Centro de Meditación Trascendental.'}
            </p>
          </div>
        </div>
      </div>

      {/* ─── Pestañas de subsección / Temas (Sticky below the Hero) ─── */}
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

      {/* ─── Contenedor del Carrusel de Píldoras / Cápsulas ─── */}
      <section className="section-y bg-beige overflow-hidden">
        <div className="container-site">
          {slides.length > 0 ? (
            <div className="py-2">
              <Slider 
                slides={slides} 
                gradientFrom="beige"
                lightGradient={true}
                className="overflow-visible"
              />
            </div>
          ) : (
            <div className="max-w-xl mx-auto text-center py-16">
              <p className="font-sans text-azul-profundo/50 text-base leading-relaxed">
                Próximamente habrá micro-cápsulas de conocimiento en esta sección.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTABand />
    </>
  )
}
