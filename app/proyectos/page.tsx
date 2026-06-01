import type { Metadata } from 'next'
import Image from 'next/image'
import { MapPin, Tag, ExternalLink, Shield, BookOpen, ArrowRight } from 'lucide-react'
import { HeroSecondary }   from '@/components/sections/HeroSecondary'
import { CTABand }         from '@/components/sections/CTABand'
import { VideoEmbed }      from '@/components/sections/VideoEmbed'
import { AnimateIn }       from '@/components/ui/AnimateIn'
import { Button }          from '@/components/ui/Button'
import { ImageLightbox }   from '@/components/ui/ImageLightbox'
import { routes }          from '@/lib/routes'

export const metadata: Metadata = {
  title: 'Proyectos',
  description:
    'Educación Basada en la Conciencia — intervenciones educativas y comunitarias documentadas de la Fundación Maharishi de Colombia.',
}

const VIDEO_COHERENCIA = 'uQ2tLN4bNXQ'

interface Project {
  id:          string
  year:        string
  title:       string
  territory:   string
  category:    string
  description: string
  reach:       string
  img:         string
}

const projects: Project[] = [
  {
    id:          'cedeco-2024',
    year:        '2024',
    title:       'Centro de Comercio Cedeco',
    territory:   'Piedecuesta, Santander',
    category:    'Educativo',
    description: 'Programa intergeneracional. Documentó reducción de ansiedad, mejora de cohesión grupal y disminución de conductas de riesgo.',
    reach:       '85 participantes',
    img:         '/images/proyectos/cedeco-2024.jpg',
  },
  {
    id:          'estrella-2016',
    year:        '2016',
    title:       'Colegio La Estrella',
    territory:   'Antioquia',
    category:    'Educativo',
    description: 'Primer programa escolar de MT en Antioquia. Mejora del clima escolar y reducción de conflictos.',
    reach:       '210 estudiantes · 18 docentes',
    img:         '/images/proyectos/estrella-2016.jpg',
  },
  {
    id:          'cucuta-2018',
    year:        '2018',
    title:       'Colegio San José de Cúcuta',
    territory:   'Cúcuta, Norte de Santander',
    category:    'Educativo',
    description: 'Intervención en zona de alta tensión social. Reducción del ausentismo y mejora en rendimiento académico.',
    reach:       '320 estudiantes',
    img:         '/images/proyectos/cucuta-2018.jpg',
  },
  {
    id:          'japon-2020',
    year:        '2020',
    title:       'Colegio Japón',
    territory:   'Bogotá, D.C.',
    category:    'Educativo',
    description: 'Primera intervención híbrida durante pandemia. Mejoras en regulación emocional y adherencia escolar.',
    reach:       '180 estudiantes',
    img:         '/images/proyectos/colegio-japon.jpg',
  },
]

/* ── Página ─────────────────────────────────────────────────────────────── */

export default function ProyectosPage() {
  return (
    <>
      {/* Hero con foto del equipo */}
      <HeroSecondary
        title="Proyectos en Territorio"
        subtitle="Intervenciones educativas y comunitarias documentadas en Colombia"
        breadcrumbs={[{ label: 'Proyectos' }]}
        imageSrc="/images/hero-proyectos.jpg"
      />

      {/* ─────────────────────────────────────────
          1. EDUCACIÓN BASADA EN LA CONCIENCIA
          Portfolio bento con fotos de estudiantes
      ───────────────────────────────────────── */}
      <section className="section-y bg-white">
        <div className="container-site">

          <AnimateIn variant="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6
                            mb-14 pb-10 border-b border-azul-profundo/10">
              <div>
                <p className="text-dorado font-sans font-semibold text-sm tracking-[0.12em] uppercase mb-3">
                  Portfolio
                </p>
                <h2 className="text-4xl md:text-5xl">Educación Basada<br className="hidden md:block" /> en la Conciencia</h2>
              </div>
              <div className="flex flex-col items-start md:items-end gap-3">
                <div className="flex gap-6">
                  {[
                    { n: '4',    label: 'instituciones' },
                    { n: '795+', label: 'participantes' },
                    { n: '4',    label: 'departamentos' },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <p className="font-display text-2xl text-azul-profundo leading-none">{s.n}</p>
                      <p className="text-[10px] font-sans text-azul-profundo/45 tracking-wide uppercase mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
                <p className="font-sans text-azul-profundo/45 text-xs max-w-xs leading-relaxed md:text-right">
                  Concordantes con el CONPES 140 de 2019 y el Plan Nacional de Desarrollo.
                </p>
              </div>
            </div>
          </AnimateIn>

          {/* Bento grid con fotos de estudiantes */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 auto-rows-[300px] md:auto-rows-[320px]">

            {/* Cedeco — Featured large */}
            <AnimateIn
              variant="scale-in"
              delay={0}
              className="md:col-span-7 md:row-span-2"
            >
              <article className="relative w-full h-full rounded-[20px] overflow-hidden group
                                  shadow-[0_16px_48px_rgba(15,42,68,0.15)]">
                <Image src={projects[0].img} alt={projects[0].title} fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 58vw" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-azul-profundo/90 via-azul-profundo/35 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex items-center gap-2">
                    <span className="chip-dorado">{projects[0].category}</span>
                    <span className="chip-light">{projects[0].year}</span>
                  </div>
                  <div>
                    <p className="font-sans text-white/60 text-xs mb-1.5 flex items-center gap-1.5">
                      <MapPin size={11} />{projects[0].territory}
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl text-white mb-3 leading-snug
                                   [text-shadow:0_2px_16px_rgba(0,0,0,0.40)]">
                      {projects[0].title}
                    </h3>
                    <p className="font-sans text-white/70 text-sm leading-relaxed line-clamp-3 max-w-lg mb-4">
                      {projects[0].description}
                    </p>
                    <span className="chip-light"><Tag size={10} />{projects[0].reach}</span>
                  </div>
                </div>
              </article>
            </AnimateIn>

            {/* Estrella + Cúcuta */}
            {projects.slice(1, 3).map((p, i) => (
              <AnimateIn
                key={p.id}
                variant="fade-up"
                delay={(i + 1) as 1 | 2}
                className="md:col-span-5"
              >
                <article className="relative w-full h-full rounded-[20px] overflow-hidden group
                                    shadow-[0_12px_32px_rgba(15,42,68,0.12)]">
                  <Image src={p.img} alt={p.title} fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 42vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-azul-profundo/85 via-azul-profundo/25 to-transparent" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div className="flex items-center gap-2">
                      <span className="chip">{p.category}</span>
                      <span className="chip-light">{p.year}</span>
                    </div>
                    <div>
                      <p className="font-sans text-white/55 text-xs mb-1 flex items-center gap-1.5">
                        <MapPin size={10} />{p.territory}
                      </p>
                      <h3 className="font-display text-xl text-white mb-2 leading-snug
                                     [text-shadow:0_1px_8px_rgba(0,0,0,0.40)]">
                        {p.title}
                      </h3>
                      <span className="chip-light text-[10px]"><Tag size={10} />{p.reach}</span>
                    </div>
                  </div>
                </article>
              </AnimateIn>
            ))}

            {/* Japón — full width */}
            <AnimateIn
              variant="fade-up"
              delay={3}
              className="md:col-span-12"
            >
              <article className="relative w-full h-full rounded-[20px] overflow-hidden group
                                  shadow-[0_12px_32px_rgba(15,42,68,0.12)]">
                <Image src={projects[3].img} alt={projects[3].title} fill
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                  sizes="100vw" />
                <div className="absolute inset-0 bg-gradient-to-r from-azul-profundo/85 via-azul-profundo/50 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                  <div className="p-8 max-w-2xl">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="chip">{projects[3].category}</span>
                      <span className="chip-light">{projects[3].year}</span>
                      <span className="chip-light"><MapPin size={10} />{projects[3].territory}</span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl text-white mb-3 leading-snug
                                   [text-shadow:0_2px_16px_rgba(0,0,0,0.40)]">
                      {projects[3].title}
                    </h3>
                    <p className="font-sans text-white/70 text-sm leading-relaxed line-clamp-2">
                      {projects[3].description}
                    </p>
                  </div>
                </div>
              </article>
            </AnimateIn>

          </div>

          {/* Link a evidencia científica */}
          <div className="mt-10 flex justify-end">
            <Button
              href={`${routes.mt}#evidencia-detallada`}
              variant="secondary"
              className="group gap-2 text-sm"
            >
              Ver evidencia científica de estos resultados
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────
          2a. MISIÓN EDUCATIVA — Manifiesto
      ───────────────────────────────────────── */}
      <section id="educacion-conciencia" className="relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Image src="/images/hero/valle-del-cocora.jpg" alt="" fill
            className="object-cover opacity-[0.30]" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-br from-beige via-beige/90 to-beige" />
        </div>
        <div className="relative container-site py-20 md:py-24">
          <div className="max-w-[680px] mx-auto text-center">
            <p className="text-dorado font-sans font-semibold text-sm tracking-[0.12em] uppercase mb-8">
              Misión educativa
            </p>
            <div className="space-y-5 font-sans text-azul-profundo/75 leading-[1.85] text-justify
                            hyphens-auto" lang="es">
              <p>
                <strong className="text-azul-profundo font-semibold">La Educación Basada en la Conciencia</strong>{' '}
                es una ciencia fundada por Maharishi Mahesh Yogi en 1972, orientada a satisfacer la
                necesidad de una estructura unificada del conocimiento humano que integre todos los
                campos de estudio.
              </p>
              <p>
                Su objetivo es implementar un sistema educativo innovador mediante técnicas
                científicamente validadas que promueven el bienestar emocional, la salud mental y el
                rendimiento académico de los estudiantes. Además, contribuye a reducir los niveles de
                estrés, ansiedad, insomnio y fatiga crónica en directivos y docentes.
              </p>
              <p>
                La práctica diaria de la MT en instituciones educativas disminuye la ansiedad y crea
                un campo de máxima coherencia en la actividad del cerebro, que permite desarrollar
                mayor concentración, atención, rendimiento intelectual e inteligencia emocional.
              </p>
            </div>
            <div className="mt-8 inline-flex items-start gap-3 bg-white/70 backdrop-blur-sm
                            border border-azul-profundo/[0.08] rounded-[14px] px-5 py-4
                            shadow-[0_4px_20px_rgba(15,42,68,0.07)] text-left">
              <BookOpen size={15} className="text-dorado shrink-0 mt-0.5" />
              <p className="font-sans text-sm text-azul-profundo/70 leading-relaxed">
                <strong className="text-azul-profundo">Alineado con políticas nacionales:</strong>{' '}
                CONPES 140 de 2019 · PTAFI 3.0 · CRESE — Ministerio de Educación Nacional.
              </p>
            </div>
            <div className="mt-8 rounded-[16px] overflow-hidden shadow-[0_8px_32px_rgba(15,42,68,0.12)]">
              <Image src="/images/proyectos/ebc.jpg" alt="Educación Basada en la Conciencia"
                width={800} height={450} className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          2b. MISIÓN EDUCATIVA — Beneficios y cerebro
      ───────────────────────────────────────── */}
      <section className="section-y bg-white">
        <div className="container-site">
          <div className="max-w-[680px] mx-auto">
            <p className="text-dorado font-sans font-semibold text-sm tracking-[0.12em] uppercase mb-8 text-center">
              Beneficios documentados en el aula
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h4 className="font-sans font-semibold text-xs text-azul-profundo/60 uppercase
                               tracking-widest mb-4 pb-3 border-b border-azul-profundo/10">
                  En estudiantes y docentes
                </h4>
                <ul className="space-y-3 mb-6">
                  {['Mejora de atención, memoria, inteligencia y creatividad',
                    'Regulación emocional y rendimiento académico',
                    'Mejora la calidad del sueño',
                    'Mejora en la comunicación y relaciones interpersonales'].map((b) => (
                    <li key={b} className="flex items-start gap-3 font-sans text-sm text-azul-profundo/75">
                      <span className="w-4 h-4 rounded-full bg-dorado/15 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-dorado" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <h4 className="font-sans font-semibold text-xs text-azul-profundo/60 uppercase tracking-widest mb-3">
                  Se disminuye significativamente:
                </h4>
                <ul className="space-y-2">
                  {['Estrés crónico', 'Hipertensión', 'Trastornos de ansiedad', 'Depresión e insomnio'].map((b) => (
                    <li key={b} className="flex items-center gap-2.5 font-sans text-sm text-azul-profundo/65">
                      <Shield size={11} className="text-dorado/70 shrink-0" />{b}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-sans font-semibold text-xs text-azul-profundo/60 uppercase
                               tracking-widest mb-4 pb-3 border-b border-azul-profundo/10">
                  El cerebro en máxima integración
                </h4>
                <div className="space-y-3">
                  {[{ n: '01', title: 'Mayor creatividad',  desc: 'Interacción flexible de redes neuronales' },
                    { n: '02', title: 'Mejor aprendizaje',  desc: 'Plasticidad cerebral optimizada' },
                    { n: '03', title: 'Mayor autocontrol',  desc: 'Dominancia prefrontal desarrollada' },
                    { n: '04', title: 'Mayor resiliencia',  desc: 'Regulación emocional estable' }].map((item) => (
                    <div key={item.n} className="flex items-center gap-3 py-2.5 border-b border-azul-profundo/[0.06] last:border-0">
                      <span className="font-display text-lg text-dorado/30 select-none w-7 shrink-0">{item.n}</span>
                      <div>
                        <p className="font-sans font-semibold text-sm text-azul-profundo">{item.title}</p>
                        <p className="font-sans text-xs text-azul-profundo/50">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <a href={`${routes.mt}#evidencia-detallada`}
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold
                           text-dorado hover:text-azul-profundo transition-colors
                           border-b border-dorado/40 hover:border-azul-profundo/40 pb-0.5">
                Ver estudios científicos detallados
                <ArrowRight size={12} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          3. COHERENCIA SOCIAL + EFECTO MAHARISHI
      ───────────────────────────────────────── */}
      <section id="coherencia-social" className="section-y bg-white scroll-mt-20">
        <div className="container-site">

          <AnimateIn variant="fade-up">
            <div className="mb-14 pb-10 border-b border-azul-profundo/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <p className="text-dorado font-sans font-semibold text-sm tracking-[0.12em] uppercase mb-3">
                  Escala social
                </p>
                <h2 className="text-4xl md:text-5xl">Programas de Coherencia Social</h2>
              </div>
              <a
                href="https://www.cursos-programasmaharishi.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold
                           text-azul-profundo hover:text-dorado transition-colors
                           border-b border-azul-profundo/20 hover:border-dorado pb-0.5 shrink-0"
              >
                cursos-programasmaharishi.org
                <ExternalLink size={12} />
              </a>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Izquierda: Quote + efectos + gráfico + niveles */}
            <AnimateIn variant="fade-right" delay={1}>
              <div className="space-y-8">

                <div className="p-7 bg-azul-profundo rounded-[20px]">
                  <p className="font-display text-xl md:text-2xl text-white leading-snug mb-4">
                    "Cuando muchas personas están en calma por dentro, pueden ayudar
                    a que el mundo esté más en calma por fuera."
                  </p>
                  <p className="font-sans text-white/50 text-xs tracking-wide uppercase">
                    El efecto Maharishi
                  </p>
                </div>

                <div>
                  <p className="font-sans text-azul-profundo/70 leading-relaxed text-sm mb-5">
                    Un programa de coherencia social con Meditación Trascendental entrena
                    la regulación neuronal individual en grupo, con el objetivo de generar
                    estabilidad y orden en sistemas sociales más amplios. Cuando el 1% de
                    una población practica Sidhis MT se reportan:
                  </p>
                  <ul className="space-y-2 mb-7">
                    {['Disminución de violencia', 'Disminución del crimen', 'Disminución del estrés en la conciencia colectiva'].map((e) => (
                      <li key={e} className="flex items-center gap-3 font-sans text-sm text-azul-profundo/70">
                        <Shield size={12} className="text-dorado/70 shrink-0" />
                        {e}
                      </li>
                    ))}
                  </ul>

                  {/* Gráficos — click para ampliar */}
                  <div className="grid grid-cols-2 gap-4">
                    <ImageLightbox
                      src="/images/grafico-meisner.jpg"
                      alt="Gráfico del Efecto Meisner"
                      width={600}
                      height={400}
                      className="shadow-[0_8px_32px_rgba(15,42,68,0.12)] bg-white/5"
                    />
                    <ImageLightbox
                      src="/images/proyectos/efecto-maharishi.jpeg"
                      alt="Gráfico del Efecto Maharishi"
                      width={600}
                      height={400}
                      className="shadow-[0_8px_32px_rgba(15,42,68,0.12)] bg-white/5"
                    />
                  </div>
                </div>

                <div className="divide-y divide-azul-profundo/[0.07]">
                  {[
                    { label: 'Individual', desc: 'Regulación del sistema nervioso' },
                    { label: 'Grupal',     desc: 'Sincronización de estados fisiológicos' },
                    { label: 'Social',     desc: 'Impacto en estrés, violencia y cooperación colectiva' },
                  ].map((n) => (
                    <div key={n.label} className="py-3.5 grid grid-cols-[5.5rem_1fr] gap-4 items-baseline">
                      <span className="font-sans font-semibold text-dorado text-xs uppercase tracking-wide">{n.label}</span>
                      <span className="font-sans text-sm text-azul-profundo/65">{n.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>

            {/* Derecha: Video + dos tarjetas */}
            <AnimateIn variant="fade-left" delay={2}>
              <div className="space-y-6">
                <VideoEmbed videoId={VIDEO_COHERENCIA} title="Programas de Coherencia Social" />

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-beige rounded-[14px] border border-azul-profundo/[0.06]">
                    <p className="font-sans font-semibold text-xs text-azul-profundo/70 uppercase tracking-wide mb-3">
                      Cuando menos estrés colectivo
                    </p>
                    <ul className="space-y-2">
                      {['Mejor regulación emocional', 'Mayor integración cerebral', 'Menor reactividad', 'Mayor cooperación'].map((r) => (
                        <li key={r} className="font-sans text-xs text-azul-profundo/65 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-dorado/70 shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-beige rounded-[14px] border border-azul-profundo/[0.06]">
                    <p className="font-sans font-semibold text-xs text-azul-profundo/70 uppercase tracking-wide mb-3">
                      Condiciones del programa
                    </p>
                    <ul className="space-y-2">
                      {['Lugar fijo y constante', 'Horarios sincronizados', 'Práctica grupal sostenida', 'Consistencia crítica'].map((l) => (
                        <li key={l} className="font-sans text-xs text-azul-profundo/65 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-dorado/70 shrink-0" />
                          {l}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </AnimateIn>

          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          4. PROGRAMAS DIGITALES — Bloque ligero
      ───────────────────────────────────────── */}
      <section id="expansion-digital" className="relative overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Image src="/images/atardecer-oceano.jpg" alt="" fill
            className="object-cover opacity-[0.14]" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-br from-beige via-beige/92 to-beige" />
        </div>
        <div className="relative container-site py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            <AnimateIn variant="fade-right">
              <div className="space-y-4">
                <p className="text-dorado font-sans font-semibold text-sm tracking-[0.12em] uppercase">
                  Expansión digital
                </p>
                <h2 className="text-3xl md:text-4xl leading-tight">
                  Programas de formación y expansión digital
                </h2>
                <p className="font-sans text-azul-profundo/65 leading-relaxed text-sm">
                  La Maharishi Foundation for Programs in Latin America ha desarrollado
                  plataformas digitales para escalar la EBC a toda Latinoamérica, con acceso
                  remoto en varios idiomas. Cursos modulares de 30–70 lecciones, formación
                  progresiva y programas de salud mental en línea.
                </p>
                <a
                  href="https://www.cursos-programasmaharishi.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-sans text-sm font-semibold
                             text-azul-profundo hover:text-dorado transition-colors
                             border-b border-azul-profundo/20 hover:border-dorado pb-0.5"
                >
                  cursos-programasmaharishi.org
                  <ExternalLink size={12} />
                </a>
              </div>
            </AnimateIn>

            <AnimateIn variant="fade-left" delay={1}>
              <ul className="space-y-3">
                {[
                  { label: 'Cursos de salud y estrés',                  sub: 'Acceso remoto · varios idiomas' },
                  { label: 'Programas de conciencia',                    sub: 'Formación progresiva modular' },
                  { label: 'Formación en Ayurveda',                      sub: '30–70 lecciones por curso' },
                  { label: 'Módulos teóricos sobre mente y conciencia',  sub: 'Plataforma tipo e-learning' },
                ].map((item) => (
                  <li key={item.label}
                      className="flex items-start gap-3 py-3 border-b border-azul-profundo/[0.07] last:border-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-dorado mt-2 shrink-0" />
                    <div>
                      <p className="font-sans font-semibold text-sm text-azul-profundo">{item.label}</p>
                      <p className="font-sans text-xs text-azul-profundo/50">{item.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </AnimateIn>

          </div>
        </div>
      </section>

      <CTABand
        title="Sé parte del cambio"
        subtitle="Aprende Meditación Trascendental y contribuye a la coherencia social en Colombia."
        imageSrc="/images/hero/tayrona.jpg"
        imageOpacity={0.28}
      />
    </>
  )
}
