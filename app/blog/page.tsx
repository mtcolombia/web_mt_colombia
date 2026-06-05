import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Compass, Microscope, Sparkles, Calendar, HelpCircle, MessageSquare } from 'lucide-react'
import { CTABand } from '@/components/sections/CTABand'
import { Slider } from '@/components/sections/Slider'
import { articles } from '@/lib/content/blog'
import { CATEGORY_LABELS } from '@/lib/schemas'
import { routes } from '@/lib/routes'
import { formatDate } from '@/lib/utils'
import type React from 'react'
import fs from 'fs'
import path from 'path'
import { Accordion } from '@/components/sections/Accordion'
import { faqItems } from '@/lib/content/faqs'
import { QuestionForm } from '@/app/foro/QuestionForm'
import type { ForumQuestion } from '@/lib/schemas'

export const metadata: Metadata = {
  title: 'Blog y Foro',
  description:
    'Artículos sobre Meditación Trascendental, ciencia, bienestar y foro de preguntas frecuentes.',
}

// ─── Subsecciones para la barra de anclas locales ───────────────────────────
const SECTIONS = [
  { key: 'todas',                  label: 'Todas',                     target: '#inicio-blog',       Icon: Compass },
  { key: 'investigacion-cientifica', label: 'Investigación científica', target: '#investigacion-cientifica', Icon: Microscope },
  { key: 'noticias-positivas',     label: 'Noticias positivas',        target: '#noticias-positivas',     Icon: Sparkles },
  { key: 'actividades',            label: 'Actividades del centro',    target: '#actividades',            Icon: Calendar },
  { key: 'foro',                   label: 'Foro y Preguntas',          target: '#foro',                   Icon: HelpCircle },
] as const

function getAnsweredQuestions(): ForumQuestion[] {
  try {
    const list = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'forum.json'), 'utf-8'),
    ) as ForumQuestion[]
    return list
      .filter((q) => q.published && q.answer)
      .sort((a, b) => new Date(b.answeredAt || b.createdAt).getTime() - new Date(a.answeredAt || a.createdAt).getTime())
  } catch {
    return []
  }
}

export default async function BlogPage() {
  const answeredList = getAnsweredQuestions()
  // Filtramos los artículos correspondientes a cada sección para los carruseles individuales
  const investigacionArticles = articles.filter(a => a.category === 'investigacion-cientifica')
  const noticiasArticles = [...articles]
    .filter(a => a.category === 'noticias-positivas')
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  const actividadesArticles = articles.filter(a => a.category === 'actividades')

  // Helper para generar los slides de texto amplio sin imágenes
  const generateSlides = (sectionArticles: typeof articles, showCompletaBadge = true) => {
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
                <span className="text-xs font-sans text-azul-profundo/90 font-medium">
                  {formatDate(article.publishedAt)}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-sans font-bold text-azul-profundo leading-snug tracking-tight">
                {article.title}
              </h3>
              
              <p className="font-serif text-base md:text-lg text-azul-profundo/90 leading-relaxed">
                {article.excerpt}
              </p>
            </div>
            
            {/* Metadata inferior */}
            <div className="mt-8 pt-5 border-t border-azul-profundo/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-[11px] font-sans text-azul-profundo/90 font-medium tracking-wide">
                  Cápsula de lectura · {article.readingTime} min
                </span>
                {article.source && (
                  <>
                    <span className="text-[11px] text-azul-profundo/90 font-sans font-medium">•</span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-sans text-dorado font-bold uppercase tracking-wider">
                      Fuente: {article.source}
                    </span>
                  </>
                )}
              </div>
              {showCompletaBadge && (
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-dorado bg-dorado/5 px-2.5 py-1 rounded">
                  Completa
                </span>
              )}
            </div>
          </div>
        </div>
      )
    }))
  }

  // Helper para generar los slides de actividades (con imagen a un lado y texto al otro, ocupando el ancho completo)
  const generateActivitySlides = (sectionArticles: typeof articles) => {
    return sectionArticles.map((article) => ({
      id: article.slug,
      content: (
        <div className="px-4 md:px-12 py-6 max-w-5xl mx-auto snap-start select-none">
          <div className="bg-white rounded-[24px] border border-azul-profundo/[0.08] 
                          shadow-[0_16px_48px_rgba(15,42,68,0.05)] hover:shadow-[0_24px_64px_rgba(15,42,68,0.08)] 
                          transition-all duration-500 overflow-hidden flex flex-col md:flex-row min-h-[420px]
                          group">
            
            {/* Contenedor de la Imagen (Lado Izquierdo) */}
            <div className="relative w-full md:w-1/2 h-[240px] md:h-auto shrink-0 overflow-hidden bg-azul-profundo/[0.02] p-6 flex items-center justify-center">
              <div className="relative w-full h-full min-h-[200px] md:min-h-[300px]">
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  className="object-contain group-hover:scale-[1.02] transition-transform duration-700"
                  sizes="(max-w-768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            {/* Contenedor del Texto (Lado Derecho) */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between text-left">
              <div className="space-y-4">
                <span className="inline-block bg-dorado/15 text-dorado font-sans text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full">
                  Actividad Programada
                </span>
                
                <h3 className="text-2xl md:text-3xl font-sans font-bold text-azul-profundo leading-snug tracking-tight">
                  {article.title}
                </h3>
                
                <div className="font-sans text-sm md:text-base text-azul-profundo leading-relaxed space-y-3 max-h-[300px] overflow-y-auto pr-2">
                  {article.excerpt.split(/\n\s*\n/).map((p, idx) => {
                    const lines = p.split('\n').map(l => l.trim()).filter(Boolean);
                    const isList = lines.length > 0 && lines.every(l => l.startsWith('•') || l.startsWith('-') || l.startsWith('*') || /^\d+\./.test(l));
                    if (isList) {
                      return (
                        <ul key={idx} className="list-disc pl-5 space-y-1.5 my-2">
                          {lines.map((l, lIdx) => (
                            <li key={lIdx}>
                              {l.replace(/^[•\-*\d\.]\s*/, '')}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <p key={idx}>
                        {p}
                      </p>
                    );
                  })}
                </div>
              </div>
              
              {/* Pie de tarjeta */}
              <div className="mt-8 pt-5 border-t border-azul-profundo/[0.06] flex items-center justify-between">
                <span className="text-[11px] font-sans text-azul-profundo/90 font-medium tracking-wide">
                  Centro de Meditación Trascendental
                </span>
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-dorado bg-dorado/5 px-2.5 py-1 rounded">
                  Vigente
                </span>
              </div>
            </div>

          </div>
        </div>
      )
    }))
  }

  const investigacionSlides = generateSlides(investigacionArticles, true)
  const noticiasSlides = generateSlides(noticiasArticles, false)
  const actividadesSlides = generateActivitySlides(actividadesArticles)

  const noticiasSearchList = noticiasArticles.map((art) => ({
    title: art.title,
    date: formatDate(art.publishedAt),
    source: art.source
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
            <p className="mt-2 text-white/90 font-sans text-xs md:text-base max-w-xl leading-relaxed">
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
              <span className="w-1.5 h-1.5 rounded-full bg-dorado animate-pulse" />
              <p className="text-[10px] font-sans font-bold tracking-[0.2em] text-dorado uppercase">
                Dimensiones de Sabiduría
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-display text-azul-profundo leading-tight">
              Explora las Áreas de Conocimiento
            </h2>
            <p className="font-serif text-sm md:text-base text-azul-profundo/90 max-w-xl mx-auto leading-relaxed">
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
                  className="group flex items-center gap-2.5 px-6 py-3 rounded-full bg-white border border-azul-profundo/[0.1] text-azul-profundo/90 hover:border-dorado hover:text-dorado hover:bg-dorado/[0.01] shadow-[0_4px_12px_rgba(15,42,68,0.02)] hover:shadow-[0_8px_20px_rgba(15,42,68,0.05)] hover:scale-[1.03] transition-all duration-300 font-sans text-xs font-semibold"
                >
                  <Icon size={14} className="text-azul-profundo/90 group-hover:text-dorado transition-colors" />
                  {s.label}
                </a>
              )
            })}
          </div>
        </div>
      </section>


      {/* ────────────────────────────────────────────────────────
          1. INVESTIGACIÓN CIENTÍFICA
      ──────────────────────────────────────────────────────── */}
      <div id="investigacion-cientifica" className="scroll-mt-32">
        {/* Banner de Sección */}
        <div className="relative h-[180px] md:h-[220px] overflow-hidden bg-azul-profundo flex items-center shadow-md">
          <div className="absolute inset-0 bg-gradient-to-r from-azul-profundo via-azul-profundo/85 to-azul-profundo/95" />
          <div className="relative container-site text-white z-10 space-y-2">
            <span className="inline-block bg-dorado text-azul-profundo text-[8px] font-sans font-bold tracking-[0.15em] uppercase px-2.5 py-0.5 rounded shadow-sm">
              Sección Científica
            </span>
            <h2 className="text-2xl md:text-3xl font-display text-white">
              Evidencia Científica de la Trascendencia
            </h2>
            <p className="text-white/80 font-sans text-xs md:text-sm max-w-xl leading-relaxed">
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
        {/* Banner de Sección con Video */}
        <div className="relative h-[180px] md:h-[220px] overflow-hidden bg-azul-profundo flex items-center shadow-md">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-45"
            aria-hidden="true"
          >
            <source src="https://pub-ed94eef34f7d40649b4f4f5c32a420fd.r2.dev/videos/portada-blog-noticias-positivas.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-azul-profundo via-azul-profundo/85 to-azul-profundo/95" />
          <div className="relative container-site text-white z-10 space-y-2">
            <span className="inline-block bg-dorado text-azul-profundo text-[8px] font-sans font-bold tracking-[0.15em] uppercase px-2.5 py-0.5 rounded shadow-sm">
              Noticias
            </span>
            <h2 className="text-2xl md:text-3xl font-display text-white">
              Noticias positivas Colombia
            </h2>
            <p className="text-white/80 font-sans text-xs md:text-sm max-w-2xl leading-relaxed">
              Esta recopilación de buenas noticias de prensa y redes sociales solo tiene como propósito resaltar los esfuerzos de muchos colombianos.
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
            style={{ objectPosition: 'center 65%' }}
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

      {/* ────────────────────────────────────────────────────────
          4. FORO Y PREGUNTAS FRECUENTES
      ──────────────────────────────────────────────────────── */}
      <div id="foro" className="scroll-mt-32">
        {/* Banner de Sección */}
        <div className="relative h-[180px] md:h-[220px] overflow-hidden bg-azul-profundo flex items-center shadow-md">
          <div className="absolute inset-0 bg-gradient-to-r from-azul-profundo via-azul-profundo/85 to-azul-profundo/95" />
          <div className="relative container-site text-white z-10 space-y-2">
            <span className="inline-block bg-dorado text-azul-profundo text-[8px] font-sans font-bold tracking-[0.15em] uppercase px-2.5 py-0.5 rounded shadow-sm">
              Preguntas
            </span>
            <h2 className="text-2xl md:text-3xl font-display text-white">
              Foro y Preguntas Frecuentes
            </h2>
            <p className="text-white/80 font-sans text-xs md:text-sm max-w-xl leading-relaxed">
              Respuestas claras y profundas sobre la práctica de la Meditación Trascendental.
            </p>
          </div>
        </div>

        {/* Main Section */}
        <section className="py-16 bg-beige/35">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
              
              {/* Left/Main Column - Q&A List */}
              <div className="lg:col-span-2 space-y-12">
                
                {/* Sección de Preguntas Frecuentes (FAQ) */}
                <div className="space-y-6">
                  <div className="border-b border-azul-profundo/10 pb-4">
                    <h2 className="text-2xl md:text-3xl text-azul-profundo font-display">Preguntas Frecuentes</h2>
                    <p className="font-sans text-sm text-azul-profundo/50 mt-1">
                      Respuestas a las dudas más comunes sobre la Meditación Trascendental.
                    </p>
                  </div>
                  <Accordion
                    items={faqItems}
                    className="bg-white rounded-2xl border border-azul-profundo/[0.05] p-6 shadow-[0_8px_30px_rgb(15,42,68,0.03)]"
                  />
                </div>

                {/* Sección de Preguntas Respondidas (Abiertas) */}
                <div className="space-y-8">
                  <div className="border-b border-azul-profundo/10 pb-4">
                    <h2 className="text-2xl md:text-3xl text-azul-profundo font-display">Preguntas Respondidas</h2>
                    <p className="font-sans text-sm text-azul-profundo/50 mt-1">
                      Explora las explicaciones del maestro a las dudas de la comunidad.
                    </p>
                  </div>

                  {answeredList.length === 0 ? (
                    <div className="bg-white rounded-2xl border border-azul-profundo/[0.06] p-10 text-center space-y-4">
                      <div className="w-12 h-12 rounded-full bg-azul-claro/10 flex items-center justify-center text-azul-claro mx-auto">
                        <MessageSquare size={22} />
                      </div>
                      <div className="space-y-1">
                        <p className="font-sans font-bold text-azul-profundo text-base">No hay preguntas publicadas aún</p>
                        <p className="font-sans text-xs text-azul-profundo/45 max-w-sm mx-auto leading-relaxed">
                          Sé el primero en enviar una pregunta al maestro utilizando el formulario a tu derecha. Una vez respondida, aparecerá aquí.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-6">
                      {answeredList.map((q) => (
                        <article
                          key={q.id}
                          className="bg-white rounded-2xl border border-azul-profundo/[0.05] p-6 md:p-8
                                     shadow-[0_8px_30px_rgb(15,42,68,0.03)] hover:shadow-[0_16px_40px_rgb(15,42,68,0.06)]
                                     transition-all duration-300 space-y-5"
                        >
                          <div className="flex items-center gap-3 text-xs font-sans text-azul-profundo/45">
                            <span className="font-bold text-dorado bg-dorado/10 px-2.5 py-0.5 rounded-full">
                              Pregunta de {q.authorName || 'Anónimo'}
                            </span>
                            {q.answeredAt && (
                              <>
                                <span>•</span>
                                <span>Respondida: {formatDate(q.answeredAt)}</span>
                              </>
                            )}
                          </div>

                          {/* Question Content */}
                          <div className="flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-dorado/5 border border-dorado/10 flex items-center justify-center text-dorado shrink-0 mt-1">
                              <HelpCircle size={16} />
                            </div>
                            <h3 className="font-serif text-lg text-azul-profundo leading-relaxed font-semibold italic">
                              "{q.question}"
                            </h3>
                          </div>

                          {/* Answer Content */}
                          <div className="bg-beige/40 rounded-xl p-5 md:p-6 border border-azul-profundo/[0.02] flex gap-4 items-start">
                            <div className="w-8 h-8 rounded-full bg-azul-claro/10 flex items-center justify-center text-azul-claro shrink-0 mt-0.5">
                              <MessageSquare size={14} className="fill-azul-claro" />
                            </div>
                            <div className="space-y-1.5 flex-1 min-w-0">
                              <p className="text-[10px] font-sans font-bold uppercase tracking-wider text-dorado">
                                Respuesta del Maestro
                              </p>
                              <p className="font-sans text-sm md:text-base text-azul-profundo/85 leading-relaxed whitespace-pre-line">
                                {q.answer}
                              </p>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Right/Sidebar Column - Question Form */}
              <div className="lg:sticky lg:top-24">
                <QuestionForm />
              </div>

            </div>
          </div>
        </section>
      </div>

      <CTABand />
    </div>
  )
}
