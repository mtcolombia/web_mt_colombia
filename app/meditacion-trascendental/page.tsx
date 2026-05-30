import type { Metadata } from 'next'
import Image from 'next/image'
import { Brain, Sun, Moon, Leaf, Scale, Shield, Clock } from 'lucide-react'
import { HeroSecondary }    from '@/components/sections/HeroSecondary'
import { CTABand }           from '@/components/sections/CTABand'
import { Slider }            from '@/components/sections/Slider'
import { TestimonialCard }   from '@/components/sections/TestimonialCard'

export const metadata: Metadata = {
  title: 'Meditación Trascendental',
  description:
    'Qué es la Meditación Trascendental, cómo funciona y qué dice la ciencia. 50 años de investigación, más de 800 estudios publicados.',
}

// ─── Beneficios (lista editorial) ──────────────────────────────────────────
const benefits = [
  {
    n: '01', icon: <Sun size={20} />,
    title: 'Mayor energía y vitalidad',
    body: 'El descanso profundo generado durante la práctica supera al del sueño ordinario, liberando fatiga acumulada y aumentando la energía disponible.',
  },
  {
    n: '02', icon: <Moon size={20} />,
    title: 'Calidad del sueño mejorada',
    body: 'Reducción del insomnio y mejora profunda de la fase de descanso reparador, documentadas en estudios clínicos controlados.',
  },
  {
    n: '03', icon: <Brain size={20} />,
    title: 'Coherencia cerebral global',
    body: 'El único estado de sincronización alfa en todo el córtex documentado por la neurociencia. Mayor claridad, rendimiento y creatividad.',
  },
  {
    n: '04', icon: <Shield size={20} />,
    title: 'Reducción del estrés crónico',
    body: 'Disminución sostenida de cortisol y normalización del sistema nervioso autónomo — la raíz de la mayoría de enfermedades modernas.',
  },
  {
    n: '05', icon: <Scale size={20} />,
    title: 'Mayor estabilidad emocional',
    body: 'Menor reactividad, mejor regulación emocional y mayor resiliencia ante los desafíos cotidianos, interpersonales y profesionales.',
  },
  {
    n: '06', icon: <Leaf size={20} />,
    title: 'Ralentización del envejecimiento',
    body: 'Marcadores biológicos como la longitud de los telómeros muestran una edad fisiológica significativamente menor en practicantes de largo plazo.',
  },
]

// ─── Evidencia científica por área ─────────────────────────────────────────
const evidenceAreas = [
  {
    title: 'Salud cardiovascular',
    body: 'Ensayos publicados en el American Journal of Hypertension y revisiones en Advances in Integrative Medicine muestran reducciones significativas de presión arterial. La American Heart Association la incluye entre las intervenciones no farmacológicas con mayor evidencia para la hipertensión.',
    img: '/images/mt-graficos/01-percepcion-memoria.jpg',
  },
  {
    title: 'Manejo del estrés, ansiedad y depresión',
    body: 'Un metaanálisis publicado en The Permanente Journal reporta reducciones del 40–55% en síntomas de ansiedad. La MT mejora la regulación del sistema nervioso autónomo, reduciendo el predominio del sistema simpático.',
    img: '/images/mt-graficos/02-descanso-profundo.jpg',
  },
  {
    title: 'Salud integral y prevención',
    body: 'Los estudios documentan reducción de marcadores inflamatorios (IL-6, TNF-α), regulación del cortisol y ralentización de factores epigenéticos asociados al envejecimiento prematuro.',
    img: '/images/mt-graficos/03-reversion-envejecimiento.jpg',
  },
  {
    title: 'Función cognitiva, inteligencia y creatividad',
    body: 'La práctica genera ondas alfa de alta amplitud sincronizadas en todo el córtex — el único estado de coherencia cerebral global documentado. Se asocia con mayor claridad mental, rendimiento cognitivo y creatividad medible.',
    img: '/images/mt-graficos/04-wa.jpeg',
  },
  {
    title: 'Impacto en el comportamiento social',
    body: 'Los practicantes reportan menor reactividad al estrés interpersonal, mejor comunicación y mayor empatía. Los estudios poblacionales (Efecto Maharishi) muestran reducción de indicadores de violencia cuando un porcentaje crítico de la población practica.',
    img: '/images/mt-graficos/05-wa.jpeg',
  },
]

// ─── Slides: mix beneficios + evidencia ────────────────────────────────────
const researchSlides = [
  // Slide 1 — Beneficios (lista, centrada verticalmente)
  {
    id: 'slide-beneficios',
    content: (
      <div className="h-full flex flex-col justify-center overflow-y-auto">
        <div className="container-site py-6">
          <div className="divide-y divide-white/[0.07]">
            {benefits.map((b) => (
              <div
                key={b.n}
                className="grid grid-cols-[3rem_2rem_1fr] md:grid-cols-[4rem_2.5rem_1fr_2fr]
                           gap-x-4 md:gap-x-8 items-center py-4 md:py-5"
              >
                <span className="font-display text-xl md:text-2xl text-dorado/40 select-none">{b.n}</span>
                <span className="text-dorado/70">{b.icon}</span>
                <h3 className="font-sans font-semibold text-[14px] md:text-[16px] text-white">{b.title}</h3>
                <p className="hidden md:block font-sans text-[13px] text-white/55 leading-relaxed">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  // Slides 2-6 — Evidencia por área, centrada verticalmente
  ...evidenceAreas.map((area, i) => ({
    id: `slide-evidencia-${i}`,
    content: (
      <div className="h-full flex flex-col justify-center overflow-y-auto">
        <div className="container-site py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <p className="text-dorado font-sans font-semibold text-xs tracking-[0.15em] uppercase">
                Evidencia científica por área
              </p>
              <h2 className="text-2xl md:text-3xl text-white">{area.title}</h2>
              <p className="font-sans text-white/65 leading-relaxed text-sm md:text-base">{area.body}</p>
            </div>
            <div className="relative h-[200px] md:h-[280px] rounded-[16px] overflow-hidden
                            shadow-[0_16px_48px_rgba(0,0,0,0.40)]">
              <Image
                src={area.img}
                alt={area.title}
                fill
                className="object-contain bg-white/5 p-2"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    ),
  })),
]

// ─── Testimonios ──────────────────────────────────────────────────────────
const testimonials = [
  { name: 'Gisele Bündchen',     role: 'Modelo y filántropa',          img: '/images/testimonios/gisele-bundchen.jpeg',    videoId: 'p6xhorO_sCE' },
  { name: 'Cameron Díaz',        role: 'Actriz',                        img: '/images/testimonios/cameron-diaz.png',        videoId: 'eq5ncvbEQhU' },
  { name: 'Hugh Jackman',        role: 'Actor',                         img: '/images/testimonios/hugh-jackman.png',        videoId: '6JgKfhb4lpk' },
  { name: 'Liv Tyler',           role: 'Actriz',                        img: '/images/testimonios/liv-tyler.png',           videoId: 'NpM4w7q4rVw' },
  { name: 'David Lynch',         role: 'Director de cine',              img: '/images/testimonios/david-lynch.png',         videoId: 'Qjh_-HyUzUE' },
  { name: 'Tom Hanks',           role: 'Actor',                         img: '/images/testimonios/tom-hanks.png',           videoId: 'OVq3Cb7xG6Y' },
  { name: 'Ray Dalio',           role: 'Inversor y filántropo',         img: '/images/testimonios/ray-dalio.png',           videoId: 'clRL1dkbjPk' },
  { name: 'Ronald Ringsrud',     role: 'Médico y practicante MT',       img: '/images/testimonios/ronald-ringsrud.png',     videoId: 'EAImOLv2r_8' },
  { name: 'Jennifer Aniston',    role: 'Actriz',                        img: '/images/testimonios/jennifer-aniston.png',    videoId: 'yBn4AZsp2nQ' },
  { name: 'Norma Fonseca',       role: 'Practicante MT — Colombia',     img: '/images/testimonios/norma-fonseca.jpeg',      videoId: 'u2vo8tE4Amk' },
  { name: 'Guillermo Cano',      role: 'Practicante MT — Colombia',     img: '/images/testimonios/guillermo-cano.jpeg',     videoId: 'Q_VOp9_uRPs' },
  { name: 'Padre Gabriel Mejía', role: 'Sacerdote y educador',          img: '/images/testimonios/padre-gabriel-mejia.png', videoId: 'H_x5WFqoDns' },
  { name: 'Luis Ramón Obeso',    role: 'Practicante MT — Colombia',     img: '/images/testimonios/luis-obeso.jpeg',         videoId: 'Ai2kHBu_-VA' },
  { name: 'Freddy Álvarez',      role: 'Practicante MT — Colombia',     img: '/images/testimonios/freddy-alvarez.jpeg',     videoId: 'dsnoQMuMHR8' },
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
          BLOQUE EVIDENCIA — header + slider juntos, 95vh
      ───────────────────────────────────────── */}
      <section
        id="evidencia-detallada"
        className="bg-azul-profundo flex flex-col h-[95vh] max-h-[95vh] scroll-mt-20"
      >
        {/* Franja de título — fija, siempre visible */}
        <div className="shrink-0 border-b border-white/[0.10]">
          <div className="container-site py-8 md:py-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p className="text-dorado font-sans font-semibold text-xs tracking-[0.15em] uppercase mb-2">
                  Respaldado por la ciencia
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-white">Beneficios documentados</h2>
              </div>
              <p className="font-sans text-white/50 text-sm max-w-xs leading-relaxed md:text-right">
                Publicados en{' '}
                <em className="not-italic text-white/80">American Journal of Hypertension</em>,{' '}
                <em className="not-italic text-white/80">Journal of Clinical Psychology</em>{' '}
                y otras revistas de referencia.
              </p>
            </div>
          </div>
        </div>

        {/* Slider — ocupa el resto del bloque */}
        <Slider
          slides={researchSlides}
          backgroundSrc="/images/mt-fondo-cerebro.jpeg"
          backgroundOpacity={0.55}
          gradientFrom="azul-profundo"
          lightGradient={true}
          darkBg={true}
          fillHeight={true}
          className="flex-1 min-h-0 bg-azul-profundo"
        />
      </section>

      {/* ─────────────────────────────────────────
          REFERENCIAS — fondo beige claro, texto azul
      ───────────────────────────────────────── */}
      <section className="bg-beige py-20">

        <div className="container-site prose-width">

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

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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
