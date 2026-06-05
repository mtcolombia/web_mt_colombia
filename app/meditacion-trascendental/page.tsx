import type { Metadata } from 'next'
import Image from 'next/image'
import { Clock, Brain, Droplets, Moon, TrendingUp, ArrowRight } from 'lucide-react'
import { HeroSecondary }  from '@/components/sections/HeroSecondary'
import { CTABand }        from '@/components/sections/CTABand'
import { Slider }         from '@/components/sections/Slider'
import { TestimonialCard } from '@/components/sections/TestimonialCard'
import { Button }         from '@/components/ui/Button'
import { VideoEmbed }     from '@/components/sections/VideoEmbed'
import { researchSlidesLight } from '@/lib/content/research-slides'
import { socialLinks }    from '@/lib/content/navigation'
import { routes }         from '@/lib/routes'

const instagramLink = socialLinks.find((s) => s.platform === 'Instagram')?.url ?? 'https://instagram.com/meditacion_trascendental_col'

export const metadata: Metadata = {
  title: 'Meditación Trascendental',
  description:
    'Qué es la Meditación Trascendental, cómo funciona y qué dice la ciencia. 50 años de investigación, más de 800 estudios publicados.',
}

// ─── Testimonios — colombianos arriba, extranjeros abajo ─────────────────
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
        title={<>Meditación Trascendental<sup className="text-xl md:text-2xl lg:text-3xl ml-1.5 font-light align-super">®</sup></>}
        subtitle="Natural · Sin esfuerzo · Científicamente validada"
        breadcrumbs={[{ label: 'Meditación Trascendental' }]}
        videoSrc="https://pub-ed94eef34f7d40649b4f4f5c32a420fd.r2.dev/videos/mt-hero-banner.mp4"
        imageSrc="/images/hero-mt.jpg"
      />

      {/* ─────────────────────────────────────────
          1. ¿QUÉ ES LA MEDITACIÓN TRASCENDENTAL? — Nueva Sección de Entrada
      ───────────────────────────────────────── */}
      <section className="section-y bg-beige/30 overflow-hidden">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-[#8a6e2d] font-sans font-semibold text-xs tracking-[0.15em] uppercase">
              La Tecnología
            </p>
            <h2 className="text-4xl md:text-5xl leading-tight">
              ¿Qué es la Meditación Trascendental?
            </h2>
            <div className="space-y-4 font-sans text-azul-profundo leading-relaxed text-base md:text-lg">
              <p>
                La MT es una tecnología de la conciencia para el desarrollo integral del ser humano. Al enriquecer la experiencia interior, promueve bienestar, creatividad y armonía en todas las dimensiones de la vida personal y colectiva.
              </p>
              <p>
                Es una técnica universal, accesible a cualquier persona, sin importar sus creencias, experiencia previa o nivel educativo. No es una religión ni una filosofía; se integra naturalmente en cualquier estilo de vida, respetando plenamente la individualidad de cada persona.
              </p>
              <p className="font-semibold text-[#8a6e2d]">
                No requiere esfuerzo ni cambios en las costumbres. Su práctica favorece que el crecimiento y la evolución surjan espontáneamente desde el potencial ilimitado que existe en el interior de cada ser humano.
              </p>
            </div>
          </div>
          <div className="w-full">
            <VideoEmbed
              videoId="QoFkC5onnVw"
              title="¿Qué es la Meditación Trascendental?"
              className="shadow-[0_24px_80px_rgba(15,42,68,0.16)] rounded-[20px]"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          2. UNA TÉCNICA COMPLETAMENTE NATURAL — Split editorial con imagen
      ───────────────────────────────────────── */}
      <section className="section-y bg-white overflow-hidden border-t border-azul-profundo/[0.04]">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">
            <p className="text-[#8a6e2d] font-sans font-semibold text-xs tracking-[0.15em] uppercase">
              El Funcionamiento
            </p>
            <h2 className="text-4xl md:text-5xl leading-tight">
              Una técnica completamente natural
            </h2>
            <div className="space-y-4 font-sans text-azul-profundo/90 leading-relaxed">
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
                <Clock size={12} className="text-[#8a6e2d]" />
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
          3. ¿QUÉ SUCEDE CUANDO MEDITAMOS? — Fisiología
      ───────────────────────────────────────── */}
      <section className="section-y bg-beige/10 overflow-hidden border-t border-azul-profundo/[0.04]">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="w-full">
            <VideoEmbed
              videoId="OPvMpMeQOWY"
              title="¿Qué sucede cuando meditamos?"
              className="shadow-[0_24px_80px_rgba(15,42,68,0.16)] rounded-[20px]"
            />
          </div>
          <div className="space-y-5">
            <p className="text-[#8a6e2d] font-sans font-semibold text-xs tracking-[0.15em] uppercase">
              La fisiología de la MT
            </p>
            <h2 className="text-4xl md:text-5xl text-azul-profundo">¿Qué sucede cuando meditamos?</h2>
            <p className="font-sans text-azul-profundo leading-relaxed text-base md:text-lg">
              Durante la práctica ocurre un proceso de trascendencia: la mente se asienta
              naturalmente hasta alcanzar la conciencia pura — un estado de completo
              silencio interior con plena alerta.
            </p>
            <p className="font-sans text-azul-profundo/95 leading-relaxed text-base md:text-lg">
              El cuerpo entra en un reposo más profundo que el sueño, el cerebro alcanza
              su mayor grado de coherencia, y el resultado es claridad mental y energía
              genuinamente renovada.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          4. BENEFICIOS DOCUMENTADOS — Slider de investigación
      ───────────────────────────────────────── */}
      <section id="evidencia-detallada" className="scroll-mt-20 border-t border-azul-profundo/[0.04]">
        <div className="bg-white border-b border-azul-profundo/10">
          <div className="container-site pt-14 pb-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4
                            pb-8 border-b border-azul-profundo/[0.08]">
              <div>
                <p className="text-[#8a6e2d] font-sans font-semibold text-xs tracking-[0.15em] uppercase mb-2">
                  Respaldado por la ciencia
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-azul-profundo">Beneficios documentados</h2>
              </div>
              <p className="font-sans text-azul-profundo/90 text-sm max-w-xs leading-relaxed md:text-right">
                Publicados en{' '}
                <em className="not-italic text-azul-profundo/90">American Journal of Hypertension</em>,{' '}
                <em className="not-italic text-azul-profundo/90">Journal of Clinical Psychology</em>{' '}
                y otras revistas de referencia.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white min-h-[580px] sm:min-h-[520px] lg:min-h-0 lg:h-[70vh] lg:max-h-[70vh] flex flex-col border-b border-azul-profundo/10">
          <Slider
            slides={researchSlidesLight}
            gradientFrom="white"
            fillHeight={true}
            className="flex-1 min-h-0"
          />
        </div>
      </section>

      {/* ─────────────────────────────────────────
          5. ¿CÓMO PUEDO APRENDER LA MT? — Los 7 pasos moved from Home
      ───────────────────────────────────────── */}
      <section className="section-y bg-beige/40 overflow-hidden border-t border-b border-azul-profundo/[0.04]">
        <div className="container-site">

          <div className="max-w-3xl mx-auto mb-14">
            <p className="text-[#8a6e2d] font-sans font-semibold text-xs tracking-[0.15em] uppercase mb-3">
              El proceso de aprendizaje
            </p>
            <h2 className="text-4xl md:text-5xl text-azul-profundo mb-6">¿Cómo puedo aprender la Meditación Trascendental?</h2>
            <div className="space-y-4 font-sans text-azul-profundo leading-relaxed text-base md:text-lg">
              <p>
                Cualquiera puede aprender Meditación Trascendental. Es fácil y agradable de practicar,
                y ofrece resultados inmediatos.
              </p>
              <p>
                La MT se enseña según métodos probados que permiten a la mente experimentar de forma
                natural el estado más pleno de su verdadera naturaleza. No se requiere un largo periodo
                de aprendizaje, ya que el proceso es natural e intuitivo. Cualquier persona puede
                aprender MT, independientemente de su origen cultural, religioso o educativo, y los
                resultados suelen notarse de inmediato. Veinte minutos, dos veces al día, son
                suficientes para obtener los efectos deseados.
              </p>
              <p>
                Si bien la práctica básica de la MT es la misma para todos, cada individuo es único.
                Por ello, es necesaria la guía personalizada de un profesor de MT capacitado. Cuando
                la meditación se enseña de forma correcta y personalizada, el proceso se desarrolla
                de manera natural y sin esfuerzo, y así se obtienen los mayores beneficios.
              </p>
              <p>
                Una vez que hayamos aprendido esta técnica completamente natural, podremos practicarla
                por nuestra cuenta, pero si necesitamos orientación adicional, podemos obtenerla en
                cualquier centro de MT del mundo. La necesidad de orientación varía de persona a
                persona, pero lo importante es que siempre está disponible.
              </p>
            </div>
          </div>

          {/* Fase 1 — 7 pasos */}
          <div className="max-w-3xl mx-auto">
            <h3 className="font-sans font-semibold text-azul-profundo text-sm uppercase tracking-widest mb-8
                           pb-4 border-b border-azul-profundo/10">
              Fase 1 del curso de MT — Aprendizaje de la técnica
            </h3>
            <p className="font-sans text-azul-profundo text-sm mb-10 leading-relaxed">
              El aprendizaje se desarrolla en 7 pasos, repartidos a lo largo de 4 días consecutivos.
            </p>

            <div className="space-y-0 divide-y divide-azul-profundo/[0.07]">
              {[
                {
                  n: '01',
                  title: 'Conferencia introductoria',
                  body: 'Panorama general de los beneficios y estudios científicos. Toda la información necesaria para decidir si aprender MT, con sesión de preguntas y respuestas.',
                  detail: 'Gratuito · 1,5 horas',
                },
                {
                  n: '02',
                  title: 'Charla preparatoria',
                  body: 'Más detalles sobre la mecánica exacta de la técnica, sus diferencias con otros tipos de meditación y cómo se aprende y practica.',
                  detail: '45 minutos',
                },
                {
                  n: '03',
                  title: 'Entrevista personal',
                  body: 'Reunión individual con tu profesor de MT y oportunidad para plantear cualquier duda.',
                  detail: '10–15 minutos',
                },
                {
                  n: '04',
                  title: 'Instrucción personalizada',
                  body: 'Instrucción personalizada propiamente dicha en la técnica de Meditación Trascendental.',
                  detail: '1,5 horas',
                },
                {
                  n: '05',
                  title: 'Primera sesión de seguimiento',
                  body: 'Verificación de la correcta práctica de la técnica MT y adquisición de más conocimientos.',
                  detail: '1,5 horas',
                },
                {
                  n: '06',
                  title: 'Segunda sesión de seguimiento',
                  body: 'Profundización en los conocimientos basados en la experiencia creciente en Meditación Trascendental.',
                  detail: '1,5 horas',
                },
                {
                  n: '07',
                  title: 'Tercera sesión de seguimiento',
                  body: 'Consolidación de la práctica y apertura al camino de desarrollo continuo de la conciencia.',
                  detail: '1,5 horas',
                },
              ].map((step) => (
                <div
                  key={step.n}
                  className="group grid grid-cols-[3rem_1fr] md:grid-cols-[4rem_1fr_auto]
                             gap-x-5 md:gap-x-8 items-start py-5 md:py-6
                             hover:bg-azul-profundo/[0.025] -mx-4 px-4 md:-mx-6 md:px-6
                             transition-colors rounded-xl"
                >
                  <span className="font-display text-2xl md:text-3xl text-[#8a6e2d]/50
                                   group-hover:text-[#8a6e2d]/90 transition-colors select-none mt-0.5">
                    {step.n}
                  </span>
                  <div>
                    <h4 className="font-sans font-semibold text-[15px] md:text-[17px] text-azul-profundo mb-1">
                      {step.title}
                    </h4>
                    <p className="font-sans text-sm text-azul-profundo leading-relaxed">{step.body}</p>
                  </div>
                  <span className="hidden md:block font-sans text-xs text-[#8a6e2d] font-medium
                                   whitespace-nowrap mt-1">
                    {step.detail}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
              <Button href={`${routes.contacto}#formulario`} className="group gap-2 text-base px-8 py-4 text-white bg-azul-accion hover:bg-azul-accion/90 border-0">
                Agenda tu charla introductoria{' '}
                <span className="text-white font-bold underline underline-offset-2">gratuita</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-white" />
              </Button>
              <p className="font-sans text-xs text-azul-profundo/90">
                Sin compromiso · Virtual · 90 minutos
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────
          REFERENCIAS — fondo azul-accion + capa blanca de 80%
      ───────────────────────────────────────── */}
      <section className="relative bg-azul-accion py-20 overflow-hidden">
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
              <p className="font-sans text-azul-profundo/90 text-xs leading-relaxed">
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
                    <span className="font-display text-azul-profundo/90 group-hover:text-azul-profundo
                                     text-sm leading-none mt-1 w-6 shrink-0 text-right
                                     transition-colors select-none font-bold">
                      [{String(i + 1).padStart(2, '0')}]
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="font-serif text-sm font-bold text-azul-profundo leading-snug">
                        {authorYear}
                      </p>
                      {journal && (
                        <p className="font-sans text-[11px] text-azul-profundo/90
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
                        font-sans text-xs text-azul-profundo/90 leading-relaxed text-center">
            Más de 800 estudios publicados en más de 250 universidades en 35 países.
            Base de datos completa:{' '}
            <a
              href="https://research.miu.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-azul-profundo hover:text-azul-profundo transition-colors underline-offset-2 underline"
            >
              research.miu.edu
            </a>
          </p>

        </div>
      </section>

      {/* ─────────────────────────────────────────
          6. LO QUE DICEN LOS PRACTICANTES — Testimonios
      ───────────────────────────────────────── */}
      <section className="section-y bg-beige overflow-hidden">
        <div className="container-site">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6
                          mb-12 pb-10 border-b border-azul-profundo/10">
            <div>
              <p className="text-[#8a6e2d] font-sans font-semibold text-sm tracking-[0.12em] uppercase mb-3">
                Testimonios
              </p>
              <h2 className="text-4xl md:text-5xl text-azul-profundo">Lo que dicen los practicantes</h2>
            </div>
            <p className="font-sans text-azul-profundo/90 text-sm max-w-xs leading-relaxed md:text-right">
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

          {/* Botón Ver más en Instagram */}
          <div className="flex justify-center mt-12">
            <Button
              href={instagramLink}
              external
              className="group gap-2 bg-azul-claro hover:bg-[#2fa0dd] text-white shadow-md border-0 transition-all duration-200"
            >
              <span>Ver más testimonios en Instagram</span>
              <span className="text-xs group-hover:translate-x-0.5 transition-transform duration-200">↗</span>
            </Button>
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
                <p className="text-[13px] font-sans text-azul-profundo/90 tracking-wide uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-display text-2xl md:text-3xl text-azul-profundo/95 leading-snug">
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
