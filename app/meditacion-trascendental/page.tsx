import type { Metadata } from 'next'
import Image from 'next/image'
import { Clock } from 'lucide-react'
import { HeroSecondary }  from '@/components/sections/HeroSecondary'
import { CTABand }        from '@/components/sections/CTABand'
import { Slider }         from '@/components/sections/Slider'
import { TestimonialCard } from '@/components/sections/TestimonialCard'
import { researchSlidesLight } from '@/lib/content/research-slides'

export const metadata: Metadata = {
  title: 'Meditación Trascendental',
  description:
    'Qué es la Meditación Trascendental, cómo funciona y qué dice la ciencia. 50 años de investigación, más de 800 estudios publicados.',
}

// ─── Testimonios — colombianos arriba, extranjeros abajo ─────────────────
// Fila 1: colombianos | Fila 2: figuras internacionales reconocidas
const testimonials = [
  // ── Fila 1: Colombia ──────────────────────────────────────────────────
  { name: 'Padre Gabriel Mejía', role: 'Sacerdote y educador',      img: '/images/testimonios/padre-gabriel-mejia.png', videoId: 'H_x5WFqoDns' },
  { name: 'Guillermo Cano',      role: 'Practicante MT — Colombia', img: '/images/testimonios/guillermo-cano.jpeg',     videoId: 'Q_VOp9_uRPs' },
  { name: 'Norma Fonseca',       role: 'Practicante MT — Colombia', img: '/images/testimonios/norma-fonseca.jpeg',      videoId: 'u2vo8tE4Amk' },
  { name: 'Luis Ramón Obeso',    role: 'Practicante MT — Colombia', img: '/images/testimonios/luis-obeso.jpeg',         videoId: 'Ai2kHBu_-VA' },
  // ── Fila 2: Figuras internacionales ────────────────────────────────────
  { name: 'Hugh Jackman',        role: 'Actor',                     img: '/images/testimonios/hugh-jackman.png',        videoId: '6JgKfhb4lpk' },
  { name: 'David Lynch',         role: 'Director de cine',          img: '/images/testimonios/david-lynch.png',         videoId: 'Qjh_-HyUzUE' },
  { name: 'Liv Tyler',           role: 'Actriz',                    img: '/images/testimonios/liv-tyler.png',           videoId: 'NpM4w7q4rVw' },
  { name: 'Jennifer Aniston',    role: 'Actriz',                    img: '/images/testimonios/jennifer-aniston.png',    videoId: 'yBn4AZsp2nQ' },
]

// ─── Referencias ──────────────────────────────────────────────────────────
const refs = [
  {
    citation: 'Schneider R.H. et al. (2009) — American Journal of Hypertension',
    url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3128829/',
  },
  {
    citation: 'Schneider R.H. et al. (2014) — Advances in Integrative Medicine',
    url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9262039/',
  },
  {
    citation: 'Ooi S.L. et al. (2017) — Complementary Therapies in Medicine',
    url: 'https://pubmed.ncbi.nlm.nih.gov/28917372/',
  },
  {
    citation: 'Bai Z. et al. (2015) — Journal of Human Hypertension',
    url: 'https://pubmed.ncbi.nlm.nih.gov/25673114/',
  },
  {
    citation: 'Nidich S.I. et al. (2022) — JAMA Network Open',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9486450/',
  },
  {
    citation: 'Kjellgren A. et al. (2025) — Journal of Clinical Medicine',
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11722355/',
  },
  {
    citation: 'Orme-Johnson D.W. & Barnes V.A. (2025) — Medicina',
    url: 'https://www.mdpi.com/1648-9144/61/4/659',
  },
  {
    citation: 'Rainforth M.V. et al. (2007) — Journal of Alternative and Complementary Medicine',
    url: 'https://pubmed.ncbi.nlm.nih.gov/17985870/',
  },
]

export default function MTPage() {
  return (
    <>
      {/* ─────────────────────────────────────────
          HERO — video de fondo
      ───────────────────────────────────────── */}
      <HeroSecondary
        title="Meditación Trascendental"
        subtitle="Natural · Sin esfuerzo · Científicamente validada"
        breadcrumbs={[{ label: 'Meditación Trascendental' }]}
        videoSrc="/videos/mt-hero-banner.mp4"
        imageSrc="/images/hero-mt.jpg"
      />

      {/* ─────────────────────────────────────────
          ¿QUÉ ES? — Split editorial con imagen
      ───────────────────────────────────────── */}
      <section className="section-y bg-white overflow-hidden">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">
            <p className="text-dorado font-sans font-semibold text-xs tracking-[0.15em] uppercase">
              La técnica
            </p>
            <h2 className="text-4xl md:text-5xl leading-tight">
              Una técnica completamente natural
            </h2>
            <div className="space-y-4 font-sans text-azul-profundo/70 leading-relaxed">
              <p>
                La Meditación Trascendental (MT) es una técnica ampliamente estudiada dentro del campo
                de la medicina mente-cuerpo. Durante más de cinco décadas, ha sido objeto de investigación
                en universidades y centros científicos internacionales, con publicaciones en revistas
                prestigiosas.
              </p>
              <p>
                A continuación, se presentan algunos de los hallazgos más relevantes, con base en
                evidencia científica.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="chip">
                <Clock size={12} className="text-dorado" />
                20 min · 2 veces al día
              </span>
              <span className="chip">Ojos cerrados</span>
              <span className="chip">Sin concentración</span>
            </div>
          </div>

          <div className="relative h-[480px] lg:h-[580px] rounded-[20px] overflow-hidden
                          shadow-[0_32px_80px_rgba(15,42,68,0.18)]">
            <Image
              src="/images/mt-tecnica-natural.jpeg"
              alt="Meditación Trascendental — técnica natural"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-azul-profundo/30 via-transparent to-transparent" />
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────
          BENEFICIOS — mismo módulo que HOME
      ───────────────────────────────────────── */}
      <section id="evidencia-detallada" className="scroll-mt-20">
        <div className="bg-white border-b border-azul-profundo/10">
          <div className="container-site pt-14 pb-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4
                            pb-8 border-b border-azul-profundo/[0.08]">
              <div>
                <p className="text-dorado font-sans font-semibold text-xs tracking-[0.15em] uppercase mb-2">
                  Respaldado por la ciencia
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-azul-profundo">Beneficios documentados</h2>
              </div>
              <p className="font-sans text-azul-profundo/50 text-sm max-w-xs leading-relaxed md:text-right">
                Publicados en{' '}
                <em className="not-italic text-azul-profundo/80">American Journal of Hypertension</em>,{' '}
                <em className="not-italic text-azul-profundo/80">Journal of Clinical Psychology</em>{' '}
                y otras revistas de referencia.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white h-[70vh] max-h-[70vh] flex flex-col border-b border-azul-profundo/10">
          <Slider
            slides={researchSlidesLight}
            gradientFrom="white"
            fillHeight={true}
            className="flex-1 min-h-0"
          />
        </div>
      </section>

      {/* ─────────────────────────────────────────
          REFERENCIAS — fondo azul-accion + capa blanca de 80%
      ───────────────────────────────────────── */}
      <section className="relative bg-azul-accion py-20 overflow-hidden">
        {/* Capa de blanco con opacidad al 80% para dejar un fondo hiper claro de azul-accion */}
        <div className="absolute inset-0 bg-white/80 pointer-events-none" />

        <div className="relative z-10 container-site prose-width">

          <div className="flex items-start gap-5 mb-10 pb-8 border-b border-azul-profundo/[0.10]">
            <div className="w-9 h-9 rounded-[10px] bg-dorado/15 border border-dorado/30
                            flex items-center justify-center shrink-0 mt-0.5">
              <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4 text-dorado" aria-hidden="true">
                <rect x="3" y="2" width="14" height="16" rx="2" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M7 7h6M7 10h6M7 13h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <p className="font-sans font-semibold text-azul-profundo text-xs tracking-[0.20em] uppercase mb-1">
                Referencias científicas seleccionadas
              </p>
              <p className="font-sans text-azul-profundo/60 text-xs leading-relaxed">
                Estudios publicados en revistas peer-reviewed · indexados en PubMed, JSTOR y Scopus
              </p>
            </div>
          </div>

          <ol className="space-y-0">
            {refs.map((ref, i) => {
              const parts      = ref.citation.split(' — ')
              const authorYear = parts[0] ?? ref.citation
              const journal    = parts[1] ?? ''
              return (
                <li key={i}>
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-4 py-4
                               border-b border-azul-profundo/[0.10] last:border-0
                               hover:bg-azul-profundo/[0.05] -mx-4 px-4 rounded-xl
                               transition-colors duration-150"
                  >
                    <span className="font-display text-azul-profundo/50 group-hover:text-azul-profundo
                                     text-sm leading-none mt-1 w-6 shrink-0 text-right
                                     transition-colors select-none font-bold">
                      [{String(i + 1).padStart(2, '0')}]
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-sm text-azul-profundo leading-snug">
                        {authorYear}
                      </p>
                      {journal && (
                        <p className="font-sans text-[11px] text-azul-profundo/60
                                      mt-0.5 tracking-wide italic">
                          {journal}
                        </p>
                      )}
                    </div>
                    <span className="text-azul-profundo/35 group-hover:text-azul-profundo
                                     transition-colors shrink-0 text-xs mt-1">
                      ↗
                    </span>
                  </a>
                </li>
              )
            })}
          </ol>

          <p className="mt-10 pt-6 border-t border-azul-profundo/[0.12]
                        font-sans text-xs text-azul-profundo/55 leading-relaxed text-center">
            Más de 800 estudios publicados en más de 250 universidades en 35 países.
            Base de datos completa:{' '}
            <a
              href="https://research.miu.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-azul-profundo/70 hover:text-azul-profundo transition-colors underline-offset-2 underline"
            >
              research.miu.edu
            </a>
          </p>

        </div>
      </section>

      {/* ─────────────────────────────────────────
          TESTIMONIOS — practicantes famosos y locales
      ───────────────────────────────────────── */}
      <section className="section-y bg-beige overflow-hidden">
        <div className="container-site">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6
                          mb-12 pb-10 border-b border-azul-profundo/10">
            <div>
              <p className="text-dorado font-sans font-semibold text-sm tracking-[0.12em] uppercase mb-3">
                Testimonios
              </p>
              <h2 className="text-4xl md:text-5xl">Lo que dicen los practicantes</h2>
            </div>
            <p className="font-sans text-azul-profundo/50 text-sm max-w-xs leading-relaxed md:text-right">
              Más de 6 millones de personas en el mundo han integrado la MT en su vida cotidiana.
            </p>
          </div>

          {/* 2 filas × 4 columnas — colombianos arriba, internacionales abajo */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {testimonials.map((t) => (
              <TestimonialCard
                key={t.name}
                name={t.name}
                role={t.role}
                img={t.img}
                videoId={t.videoId}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────
          STATS BAND "800+ estudios" — al final
      ───────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Image
            src="/images/atardecer-oceano.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.20]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-beige via-beige/95 to-beige" />
        </div>
        <div className="relative container-site py-24 md:py-32">
          <div className="grid grid-cols-3 divide-x divide-azul-claro/25 mb-20">
            {[
              { n: '800+', label: 'estudios científicos' },
              { n: '250',  label: 'universidades' },
              { n: '35',   label: 'países investigados' },
            ].map((s) => (
              <div key={s.n} className="text-center px-4 md:px-10">
                <p className="font-display text-5xl md:text-6xl lg:text-7xl text-azul-profundo leading-none mb-3">
                  {s.n}
                </p>
                <p className="text-[13px] font-sans text-azul-profundo/50 tracking-wide uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-display text-2xl md:text-3xl text-azul-profundo/85 leading-snug">
              El único estado de coherencia cerebral global documentado
              por la neurociencia moderna.
            </p>
          </div>
        </div>
      </section>

      <CTABand title="Aprende la Meditación Trascendental" />
    </>
  )
}
