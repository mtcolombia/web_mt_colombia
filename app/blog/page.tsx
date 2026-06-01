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
import type React from 'react'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Artículos sobre Meditación Trascendental, ciencia y bienestar — evidencia, experiencias y actualidad.',
}

// ─── Subsecciones para la barra de anclas locales ───────────────────────────
const SECTIONS = [
  { key: 'todas',                  label: 'Todas',                     target: '#inicio-blog',       Icon: Compass },
  { key: 'investigacion-cientifica', label: 'Investigación científica', target: '#investigacion-cientifica', Icon: Microscope },
  { key: 'noticias-positivas',     label: 'Noticias positivas',        target: '#noticias-positivas',     Icon: Sparkles },
  { key: 'actividades',            label: 'Actividades del centro',    target: '#actividades',            Icon: Calendar },
] as const

export default async function BlogPage() {
  // Filtramos los artículos correspondientes a cada sección para los carruseles individuales
  const investigacionArticles = articles.filter(a => a.category === 'investigacion-cientifica')
  const noticiasArticles = articles.filter(a => a.category === 'noticias-positivas')
  const actividadesArticles = articles.filter(a => a.category === 'actividades')

  // Helper para generar los slides de texto amplio sin imágenes
  const generateSlides = (sectionArticles: typeof articles) => {
    return sectionArticles.map((article) => ({
      id: article.slug,
      content: (
        <div className="px-4 md:px-12 py-6 max-w-5xl mx-auto snap-start select-none">
          {/* Cápsula de conocimiento - Diseño Premium de texto amplio y limpio */}
          <div className="bg-white rounded-[24px] border border-azul-profundo/[0.08] 
                          shadow-[0_16px_48px_rgba(15,42,68,0.05)] hover:shadow-[0_24px_64px_rgba(15,42,68,0.08)] 
                          transition-all duration-500 min-h-[300px] p-8 md:p-12 flex flex-col justify-between
                          group">
            
            <div className="space-y-5 text-left">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-block bg-dorado/15 text-dorado font-sans text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  {CATEGORY_LABELS[article.category]}
                </span>
                <span className="text-xs font-sans text-azul-profundo/45 font-medium">
                  {formatDate(article.publishedAt)}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-sans font-bold text-azul-profundo leading-snug tracking-tight">
                {article.title}
              </h3>
              
              <p className="font-serif text-base md:text-lg text-azul-profundo/75 leading-relaxed">
                {article.excerpt}
              </p>
            </div>
            
            {/* Metadata inferior */}
            <div className="mt-8 pt-5 border-t border-azul-profundo/[0.06] flex items-center justify-between">
              <span className="text-[11px] font-sans text-azul-profundo/40 font-medium tracking-wide">
                Cápsula de lectura · {article.readingTime} min
              </span>
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-dorado bg-dorado/5 px-2.5 py-1 rounded">
                Completa
              </span>
            </div>
          </div>
        </div>
      )
    }))
  }

  // Helper para generar los slides de actividades (con imagen arriba, al estilo de tu screenshot)
  const generateActivitySlides = (sectionArticles: typeof articles) => {
    return sectionArticles.map((article) => ({
      id: article.slug,
      content: (
        <div className="px-4 md:px-6 py-6 max-w-sm mx-auto snap-start select-none">
          <div className="bg-white rounded-[24px] border border-azul-profundo/[0.08] 
                          shadow-[0_16px_48px_rgba(15,42,68,0.05)] hover:shadow-[0_24px_64px_rgba(15,42,68,0.08)] 
                          transition-all duration-500 overflow-hidden flex flex-col justify-between h-[480px]
                          group">
            <div className="flex-1 flex flex-col">
              {/* Imagen superior */}
              <div className="relative h-[200px] w-full overflow-hidden bg-azul-profundo/5">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Contenido textual */}
              <div className="p-6 text-center space-y-3 flex-1 flex flex-col justify-center">
                <h3 className="text-lg md:text-xl font-sans font-bold text-azul-profundo leading-snug tracking-tight">
                  {article.title}
                </h3>
                <p className="font-sans text-sm text-azul-profundo/70 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </div>

            {/* Pie de tarjeta */}
            <div className="px-6 pb-6 pt-3 text-center border-t border-azul-profundo/[0.04] shrink-0">
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-dorado bg-dorado/5 px-3.5 py-1.5 rounded-full">
                Actividad Programada
              </span>
            </div>
          </div>
        </div>
      )
    }))
  }

  const investigacionSlides = generateSlides(investigacionArticles)
  const noticiasSlides = generateSlides(noticiasArticles)
  const actividadesSlides = generateActivitySlides(actividadesArticles)

  const noticiasSearchList = noticiasArticles.map((art) => ({
    title: art.title,
    date: formatDate(art.publishedAt)
  }))

  return (
    <div id="inicio-blog" className="scroll-mt-16">
      
      {/* ─── Hero Principal (Blog Global) ─── */}
      <div className="relative h-[340px] md:h-[400px] overflow-hidden bg-azul-profundo flex items-center">
        <Image
          src="/images/hero-blog.jpeg"
          alt="Blog de Meditación Trascendental"
          fill
          className="object-cover"
          priority
        />
        {/* Filtro degradado premium */}
        <div className="absolute inset-0 bg-gradient-to-r from-azul-profundo/95 via-azul-profundo/60 to-transparent" />
        
        {/* Contenido flotante */}
        <div className="relative container-site text-white z-10 space-y-4 pt-10">
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
              Blog Global
            </span>
            <h1 className="text-3xl md:text-5xl font-display leading-tight text-white max-w-2xl">
              El Conocimiento Completo
            </h1>
            <p className="mt-2 text-white/70 font-sans text-xs md:text-base max-w-xl leading-relaxed">
              Explora las micro-cápsulas de sabiduría de la Ciencia de la Inteligencia Creativa y el Ayurveda.
            </p>
          </div>
        </div>
      </div>

      {/* ─── Zona de Transición Premium / Buffer Visual Ampliado (No Sticky) ─── */}
      <section className="bg-white border-b border-azul-profundo/[0.06] py-16 md:py-24 transition-all duration-300">
        <div className="container-site max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-azul-claro animate-pulse" />
              <p className="text-[10px] font-sans font-bold tracking-[0.2em] text-azul-claro uppercase">
                Dimensiones de Sabiduría
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-display text-azul-profundo leading-tight">
              Explora las Áreas de Conocimiento
            </h2>
            <p className="font-serif text-sm md:text-base text-azul-profundo/60 max-w-xl mx-auto leading-relaxed">
              Haz clic en cualquiera de las secciones para descender fluidamente hacia sus respectivas micro-cápsulas de sabiduría y evidencias científicas.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {SECTIONS.map((s) => {
              const Icon = s.Icon
              return (
                <a
                  key={s.key}
                  href={s.target}
                  className="group flex items-center gap-2.5 px-6 py-3 rounded-full bg-white border border-azul-profundo/[0.1] text-azul-profundo/75 hover:border-azul-claro hover:text-azul-claro hover:bg-azul-claro/[0.01] shadow-[0_4px_12px_rgba(15,42,68,0.02)] hover:shadow-[0_8px_20px_rgba(15,42,68,0.05)] hover:scale-[1.03] transition-all duration-300 font-sans text-xs font-semibold"
                >
                  <Icon size={14} className="text-azul-profundo/45 group-hover:text-azul-claro transition-colors" />
                  {s.label}
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Pestañas Sticky de Navegación Rápida (Slim Sticky Bar) ─── */}
      <div className="bg-white/95 backdrop-blur-md border-b border-azul-profundo/[0.06] sticky top-16 z-20 transition-all duration-300 py-3.5">
        <div className="container-site flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-azul-claro" />
            <span className="text-[10px] font-sans font-bold tracking-wider text-azul-profundo/50 uppercase">
              Navegación Rápida
            </span>
          </div>
          <nav className="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden scrollbar-none">
            {SECTIONS.map((s) => {
              const Icon = s.Icon
              return (
                <a
                  key={s.key}
                  href={s.target}
                  className="group shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-azul-profundo/[0.08] text-azul-profundo/65 hover:border-azul-claro/40 hover:text-azul-claro transition-all duration-200 font-sans text-[11px] font-semibold"
                >
                  <Icon size={12} className="text-azul-profundo/40 group-hover:text-azul-claro transition-colors" />
                  {s.label}
                </a>
              )
            })}
          </nav>
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────
          1. INVESTIGACIÓN CIENTÍFICA
      ──────────────────────────────────────────────────────── */}
      <div id="investigacion-cientifica" className="scroll-mt-32">
        {/* Banner de Sección */}
        <div className="relative h-[180px] md:h-[220px] overflow-hidden bg-azul-profundo flex items-center">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/images/blog/portada-investigacion.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-azul-profundo/90 via-azul-profundo/60 to-transparent" />
          <div className="relative container-site text-white z-10 space-y-2">
            <span className="inline-block bg-dorado text-azul-profundo text-[8px] font-sans font-bold tracking-[0.15em] uppercase px-2.5 py-0.5 rounded shadow-sm">
              Sección Científica
            </span>
            <h2 className="text-2xl md:text-3xl font-display text-white">
              Evidencia Científica de la Trascendencia
            </h2>
            <p className="text-white/70 font-sans text-xs md:text-sm max-w-xl leading-relaxed">
              Descubrimientos clínicos y neurocientíficos sobre la salud cerebral y cardiovascular.
            </p>
          </div>
        </div>

        {/* Carrusel de Cápsulas */}
        <section className="py-12 bg-beige overflow-hidden">
          <div className="container-site">
            {investigacionSlides.length > 0 ? (
              <Slider 
                slides={investigacionSlides} 
                gradientFrom="beige"
                lightGradient={true}
                className="overflow-visible"
              />
            ) : (
              <p className="text-center font-sans text-azul-profundo/50 text-sm py-8">
                Próximamente habrá micro-cápsulas en esta sección.
              </p>
            )}
          </div>
        </section>
      </div>

      {/* ────────────────────────────────────────────────────────
          2. NOTICIAS POSITIVAS
      ──────────────────────────────────────────────────────── */}
      <div id="noticias-positivas" className="scroll-mt-32">
        {/* Banner de Sección */}
        <div className="relative h-[180px] md:h-[220px] overflow-hidden bg-azul-profundo flex items-center">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/images/blog/portada-noticias.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-azul-profundo/90 via-azul-profundo/60 to-transparent" />
          <div className="relative container-site text-white z-10 space-y-2">
            <span className="inline-block bg-dorado text-azul-profundo text-[8px] font-sans font-bold tracking-[0.15em] uppercase px-2.5 py-0.5 rounded shadow-sm">
              Noticias
            </span>
            <h2 className="text-2xl md:text-3xl font-display text-white">
              Noticias de Bienestar y Sueño
            </h2>
            <p className="text-white/70 font-sans text-xs md:text-sm max-w-xl leading-relaxed">
              Historias de éxito, resiliencia y el impacto de un mejor descanso en el bienestar.
            </p>
          </div>
        </div>

        {/* Carrusel de Cápsulas */}
        <section className="py-12 bg-beige overflow-hidden">
          <div className="container-site">
            {noticiasSlides.length > 0 ? (
              <Slider 
                slides={noticiasSlides} 
                gradientFrom="beige"
                lightGradient={true}
                className="overflow-visible"
                searchList={noticiasSearchList}
              />
            ) : (
              <p className="text-center font-sans text-azul-profundo/50 text-sm py-8">
                Próximamente habrá micro-cápsulas en esta sección.
              </p>
            )}
          </div>
        </section>
      </div>

      {/* ────────────────────────────────────────────────────────
          3. ACTIVIDADES DEL CENTRO
      ──────────────────────────────────────────────────────── */}
      <div id="actividades" className="scroll-mt-32">
        {/* Banner de Sección */}
        <div className="relative h-[180px] md:h-[220px] overflow-hidden bg-azul-profundo flex items-center">
          <Image
            src="/images/blog/portada-actividades.jpg"
            alt="Actividades del Centro de MT"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-azul-profundo/90 via-azul-profundo/60 to-transparent" />
          <div className="relative container-site text-white z-10 space-y-2">
            <span className="inline-block bg-dorado text-azul-profundo text-[8px] font-sans font-bold tracking-[0.15em] uppercase px-2.5 py-0.5 rounded shadow-sm">
              Actividades
            </span>
            <h2 className="text-2xl md:text-3xl font-display text-white">
              Actividades del Centro de MT
            </h2>
            <p className="text-white/70 font-sans text-xs md:text-sm max-w-xl leading-relaxed">
              Eventos, retiros de residencia y novedades del Centro de Meditación Trascendental.
            </p>
          </div>
        </div>

        {/* Carrusel de Cápsulas (Vacío / Placeholder) */}
        <section className="py-12 bg-beige overflow-hidden">
          <div className="container-site">
            {actividadesSlides.length > 0 ? (
              <Slider 
                slides={actividadesSlides} 
                gradientFrom="beige"
                lightGradient={true}
                className="overflow-visible"
              />
            ) : (
              <div className="max-w-xl mx-auto text-center py-8">
                <p className="font-sans text-azul-profundo/50 text-sm leading-relaxed">
                  Próximamente compartiremos las actividades y programas del Centro aquí.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>

      <CTABand />
    </div>
  )
}
