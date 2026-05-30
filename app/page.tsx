import type { Metadata } from 'next'
import Image from 'next/image'
import { Brain, Droplets, Moon, TrendingUp, Shield, Heart, Users, Clock, ArrowRight } from 'lucide-react'
import { HeroPrimary }  from '@/components/sections/HeroPrimary'
import { CTABand }      from '@/components/sections/CTABand'
import { VideoEmbed }   from '@/components/sections/VideoEmbed'
import { Button }       from '@/components/ui/Button'
import { routes }       from '@/lib/routes'

export const metadata: Metadata = {
  title: 'Inicio',
  description:
    'Meditación Trascendental en Colombia — técnica natural, sin esfuerzo, científicamente validada para reducir el estrés y desarrollar el pleno potencial humano.',
}

const VIDEO_ID = 'ZlSe7HxmPeQ'

// ─── Beneficios (lista editorial — texto exacto del cliente) ────────────────
const benefits = [
  {
    n: '01',
    icon: <Shield size={22} />,
    title: 'Reducción del estrés y la ansiedad',
    body: 'Disminución significativa de los niveles de cortisol y síntomas asociados al trastorno por estrés postraumático.',
  },
  {
    n: '02',
    icon: <Brain size={22} />,
    title: 'Mejora del funcionamiento cerebral',
    body: 'Aumento de la coherencia neuronal, mayor integración prefrontal, incremento de la inteligencia, creatividad y mejor memoria.',
  },
  {
    n: '03',
    icon: <Moon size={22} />,
    title: 'Calidad del sueño optimizada',
    body: 'Reducción del insomnio y optimización de la calidad del sueño, favoreciendo un descanso más profundo y reparador.',
  },
  {
    n: '04',
    icon: <Heart size={22} />,
    title: 'Salud cardiovascular',
    body: 'Reducción de la presión arterial y del riesgo de eventos cardiovasculares, reconocida por la American Heart Association.',
  },
  {
    n: '05',
    icon: <Users size={22} />,
    title: 'Impacto social — Efecto Maharishi',
    body: 'Estudios independientes han observado descensos en las tasas de criminalidad, conflictividad y accidentes cuando un porcentaje mínimo de una población practica la Meditación Trascendental.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* ─────────────────────────────────────────
          1.1  HERO PRINCIPAL
      ───────────────────────────────────────── */}
      <HeroPrimary />

      {/* ─────────────────────────────────────────
          1.2  MANIFIESTO + ESTADÍSTICAS
          Fondo: árboles y cielo al 5% — luz solar sugerida
      ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white">
        {/* Textura atmosférica */}
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden="true">
          <Image
            src="/images/arboles-cielo.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.18]"
            sizes="100vw"
          />
          {/* Gradiente solar desde arriba */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>

        <div className="relative container-site py-24 md:py-32">
          {/* Estadísticas — las cifras hablan solas */}
          <div className="grid grid-cols-3 divide-x divide-azul-claro/25 mb-20">
            {[
              { n: '800+',  label: 'estudios científicos publicados' },
              { n: '6 M+',  label: 'practicantes en el mundo' },
              { n: '50+',   label: 'años de investigación rigurosa' },
            ].map((s) => (
              <div key={s.n} className="text-center px-6 md:px-10">
                <p className="font-display text-5xl md:text-6xl lg:text-7xl text-azul-texto leading-none mb-3">
                  {s.n}
                </p>
                <p className="text-[13px] font-sans text-azul-texto/50 tracking-wide uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* Frase manifiesto — tipografía como elemento visual */}
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl text-azul-texto/85 leading-snug">
              Una tecnología natural, sin esfuerzo y científicamente validada para
              desarrollar el pleno potencial humano.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          1.4  VIDEO — INVITACIÓN A LA EXPERIENCIA
          Fondo: atardecer océano al 6%
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
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/90 to-beige/80" />
        </div>
        <div className="relative container-site py-24 md:py-32">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-dorado font-sans font-semibold text-xs tracking-[0.15em] uppercase mb-4">
              Una invitación
            </p>
            <h2 className="text-4xl md:text-5xl mb-5">A la experiencia directa</h2>
            <p className="font-sans text-azul-texto/65 text-lg">
              El verdadero valor de esta práctica se confirma en la experiencia directa,
              no en las palabras.
            </p>
          </div>
          <VideoEmbed
            videoSrc="/videos/tony-nader-intro.mp4"
            title="Introducción a la Meditación Trascendental por el Dr. Tony Nader"
            className="max-w-4xl mx-auto shadow-[0_40px_100px_rgba(15,42,68,0.20)] rounded-[20px]"
          />
        </div>
      </section>

      {/* ─────────────────────────────────────────
          1.5  BENEFICIOS — LISTA EDITORIAL 2026
          No tarjetas iguales. Numeración + separadores.
      ───────────────────────────────────────── */}
      <section className="bg-white section-y">
        <div className="container-site">

          {/* Header editorial */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-10
                          border-b border-azul-profundo/10">
            <div>
              <p className="text-dorado font-sans font-semibold text-xs tracking-[0.15em] uppercase mb-3">
                Respaldado por la ciencia
              </p>
              <h2 className="text-4xl md:text-5xl">Beneficios documentados</h2>
            </div>
            <p className="font-sans text-azul-texto/55 text-sm max-w-xs leading-relaxed md:text-right">
              Más de 800 estudios en 250 universidades de 35 países, publicados en
              <em className="not-italic text-azul-texto/80"> Science</em>,{' '}
              <em className="not-italic text-azul-texto/80">American Journal of Cardiology</em>{' '}
              y otras revistas de referencia.
            </p>
          </div>

          {/* Lista editorial */}
          <div className="divide-y divide-azul-profundo/[0.07]">
            {benefits.map((b) => (
              <div
                key={b.n}
                className="group grid grid-cols-[3rem_2rem_1fr] md:grid-cols-[4rem_2.5rem_1fr_2fr]
                           gap-x-4 md:gap-x-8 items-center py-6 md:py-8
                           -mx-4 px-4 md:-mx-6 md:px-6
                           hover:bg-azul-profundo/[0.025] transition-colors rounded-xl"
              >
                {/* Número */}
                <span className="font-display text-2xl md:text-3xl text-dorado/35
                                 group-hover:text-dorado/70 transition-colors select-none">
                  {b.n}
                </span>
                {/* Icono */}
                <span className="text-dorado/70 group-hover:text-dorado transition-colors">
                  {b.icon}
                </span>
                {/* Título */}
                <h3 className="font-sans font-semibold text-[16px] md:text-[18px] text-azul-texto">
                  {b.title}
                </h3>
                {/* Descripción — solo desktop */}
                <p className="hidden md:block font-sans text-[14px] text-azul-texto/55 leading-relaxed">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          1.3  SPLIT — CIENCIA + PERSONA MEDITANDO
          Ancla: /#meditacion-trascendental (nav)
      ───────────────────────────────────────── */}
      <section id="meditacion-trascendental" className="section-y bg-beige overflow-hidden scroll-mt-20">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Imagen atmosférica — mujer meditando */}
          <div className="relative h-[500px] lg:h-[620px] rounded-[20px] overflow-hidden shadow-[0_32px_80px_rgba(15,42,68,0.18)]">
            <Image
              src="/images/home-ciencia-aplicada.jpeg"
              alt="Meditación Trascendental — práctica personal"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Vignette sutil */}
            <div className="absolute inset-0 bg-gradient-to-t from-azul-profundo/30 via-transparent to-transparent" />
            {/* Badge flotante */}
            <div className="absolute bottom-6 left-6 flex items-center gap-2.5
                            bg-white/90 backdrop-blur-sm rounded-full px-4 py-2.5 shadow-lg">
              <Clock size={16} className="text-dorado" />
              <span className="text-sm font-sans font-semibold text-azul-texto">
                20 min · 2 veces al día
              </span>
            </div>
          </div>

          {/* Contenido */}
          <div className="space-y-6">
            <p className="text-dorado font-sans font-semibold text-xs tracking-[0.15em] uppercase">
              Ciencia aplicada al desarrollo humano
            </p>
            <h2 className="text-4xl md:text-5xl leading-tight">
              Un enfoque basado en evidencia científica
            </h2>
            <p className="font-sans text-azul-texto/70 text-lg leading-relaxed">
              En un contexto donde el estrés crónico impacta la salud y el desempeño,
              la Meditación Trascendental ofrece un enfoque basado en evidencia científica
              para restablecer el equilibrio fisiológico y potenciar el rendimiento humano.
            </p>
            <p className="font-sans text-azul-texto/65 font-semibold text-sm">
              La práctica regular de la Meditación Trascendental se asocia con:
            </p>
            <ul className="space-y-3">
              {[
                { icon: <Brain size={16} />,      text: 'Mayor coherencia cerebral, indicador de un funcionamiento más integrado del cerebro' },
                { icon: <Droplets size={16} />,   text: 'Reducción de cortisol y marcadores de estrés' },
                { icon: <Moon size={16} />,        text: 'Mejora en la calidad del sueño y recuperación fisiológica' },
                { icon: <TrendingUp size={16} />,  text: 'Incremento de la capacidad cognitiva, creatividad y enfoque' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-[14px] text-azul-texto/80">
                  <span className="w-6 h-6 rounded-full bg-dorado/10 flex items-center justify-center text-dorado shrink-0 mt-0.5">
                    {item.icon}
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>
            <p className="font-sans text-azul-texto/60 text-sm leading-relaxed">
              Este conjunto de beneficios posiciona a la Meditación Trascendental como una
              herramienta eficaz para el desarrollo integral del individuo, tanto en el
              ámbito personal como profesional.
            </p>
            <div className="pt-2">
              <Button href={routes.mt} variant="secondary" className="group gap-2">
                Conoce la evidencia científica
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────
          1.6  ¿QUÉ ES LA MT? — Split con imagen
          Hombre bajo el cielo como fondo impactante
      ───────────────────────────────────────── */}
      <section className="section-y bg-beige overflow-hidden">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-6 lg:order-first">
            <p className="text-dorado font-sans font-semibold text-xs tracking-[0.15em] uppercase">
              La técnica
            </p>
            <h2 className="text-4xl md:text-5xl">¿Qué la hace diferente?</h2>
            <blockquote className="border-l-[3px] border-dorado pl-5">
              <p className="font-display text-xl md:text-2xl text-azul-texto/85 italic leading-relaxed">
                "Es una técnica natural, sin esfuerzo y científicamente validada para
                nutrir todos los aspectos de la vida."
              </p>
            </blockquote>
            <p className="font-sans text-azul-texto/70 leading-relaxed">
              A diferencia de las técnicas de concentración o control mental, la MT permite
              que la mente se aquiete de forma espontánea. No se requiere guía continua,
              música ni visualización. Es universal y accesible a cualquier persona.
            </p>
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="chip">
                <Clock size={12} className="text-dorado" />
                20 min · 2 veces al día
              </span>
              <span className="chip">Sin experiencia previa</span>
              <span className="chip">Universal — sin creencias</span>
            </div>
          </div>

          {/* Imagen impactante */}
          <div className="relative h-[520px] lg:h-[680px] rounded-[20px] overflow-hidden
                          shadow-[0_32px_80px_rgba(15,42,68,0.20)]">
            <Image
              src="/images/home-que-la-hace-diferente.jpeg"
              alt="Hombre meditando bajo el cielo abierto"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-azul-profundo/40 via-transparent to-transparent" />
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────
          1.7  CIENCIA + VIDEO — Full bleed oscuro
      ───────────────────────────────────────── */}
      <section className="relative bg-azul-profundo overflow-hidden">
        {/* Fondo paisaje Tayrona muy sutil */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Image
            src="/images/hero/tayrona.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.28] scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-azul-profundo/75" />
        </div>

        <div className="relative container-site section-y">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-dorado font-sans font-semibold text-xs tracking-[0.15em] uppercase">
                La neurociencia lo confirma
              </p>
              <h2 className="text-white text-4xl md:text-5xl">
                Respaldo científico que inspira confianza
              </h2>
              <p className="font-sans text-white/65 leading-relaxed">
                Universal y accesible: La Meditación Trascendental no pertenece a ninguna religión, filosofía ni estilo de vida en particular. Es un método universal, apto para cualquier persona, en cualquier cultura.Por ello, más de seis millones de personas en el mundo la han integrado en su vida cotidiana, y numerosas instituciones educativas, empresas y gobiernos la han incorporado como una herramienta de alto rendimiento, bienestar y paz social.
              </p>
              <Button href={`${routes.contacto}#formulario`} variant="light" className="gap-2 group">
                Reserva tu charla gratuita
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            <VideoEmbed
              videoSrc="/videos/fred-travis-brainwaves.mp4"
              title="Ondas cerebrales — Dr. Fred Travis"
              className="shadow-[0_32px_80px_rgba(0,0,0,0.40)]"
            />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          1.8  GRUPO MEDITANDO — Transición visual
      ───────────────────────────────────────── */}
      <section className="relative h-[55vh] min-h-[360px] overflow-hidden">
        <Image
          src="/images/home-comunidad-banner.jpg"
          alt="Grupo practicando Meditación Trascendental"
          fill
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay narrativo */}
        <div className="absolute inset-0 bg-gradient-to-r from-azul-profundo/70 via-azul-profundo/30 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-site">
            <p className="text-dorado font-sans text-xs tracking-[0.18em] uppercase mb-3">
              Centro MT Colombia
            </p>
            <h2 className="text-white text-4xl md:text-5xl max-w-lg leading-tight">
              Una comunidad que practica junta crece junta
            </h2>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          1.9  VIDEO + TEXTO — ¿Qué sucede?
      ───────────────────────────────────────── */}
      <section className="section-y bg-white">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <VideoEmbed videoSrc="/videos/what-happens-when-we-meditate.mp4" title="¿Qué sucede cuando meditamos?" />
          <div className="space-y-5">
            <p className="text-dorado font-sans font-semibold text-xs tracking-[0.15em] uppercase">
              La fisiología de la MT
            </p>
            <h2 className="text-4xl md:text-5xl">¿Qué sucede cuando meditamos?</h2>
            <p className="font-sans text-azul-texto/70 leading-relaxed">
              Durante la práctica ocurre un proceso de trascendencia: la mente se asienta
              naturalmente hasta alcanzar la conciencia pura — un estado de completo
              silencio interior con plena alerta.
            </p>
            <p className="font-sans text-azul-texto/70 leading-relaxed">
              El cuerpo entra en un reposo más profundo que el sueño, el cerebro alcanza
              su mayor grado de coherencia, y el resultado es claridad mental y energía
              genuinamente renovada.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          1.10  UNA HERRAMIENTA EFECTIVA PARA EL ESTRÉS
          Split: video + texto, fondo beige
      ───────────────────────────────────────── */}
      <section className="section-y bg-beige overflow-hidden">
        <div className="container-site">

          <div className="max-w-3xl mb-16">
            <p className="text-dorado font-sans font-semibold text-xs tracking-[0.15em] uppercase mb-4">
              Estrés y salud
            </p>
            <h2 className="text-4xl md:text-5xl leading-tight mb-6">
              Una herramienta efectiva para disminuir el estrés
            </h2>
            <p className="font-sans text-azul-texto/70 text-lg leading-relaxed">
              El estrés crónico es uno de los principales factores que afectan la salud,
              la felicidad y el rendimiento en la vida moderna. La investigación científica
              ha demostrado que la Meditación Trascendental reduce el estrés de manera
              efectiva y sostenible, permitiendo que el cuerpo libere tensiones acumuladas
              y restablezca su equilibrio natural.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <VideoEmbed
              videoSrc="/videos/effective-stress-tool.mp4"
              title="Una herramienta efectiva para disminuir el estrés"
              className="shadow-[0_24px_64px_rgba(15,42,68,0.18)] rounded-[20px]"
            />
            <div className="space-y-6">
              {/* Placeholder gráfico científico — asset pendiente del Drive */}
              <div className="relative h-64 rounded-[16px] overflow-hidden bg-azul-profundo/[0.04]
                              border border-azul-profundo/[0.08] flex flex-col items-center justify-center gap-3">
                <Image
                  src="/images/home-stress-grafico.jpg"
                  alt="Gráfico científico de manejo del estrés"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-3 font-sans text-azul-texto/70 leading-relaxed text-sm">
                <p>
                  La práctica regular crea un estado de descanso profundo que supera al del
                  sueño ordinario, liberando la tensión acumulada capa por capa. Con el tiempo,
                  el sistema nervioso alcanza un nivel de funcionamiento más ordenado, resiliente
                  y libre de reactividad.
                </p>
                <p>
                  No exige cambios en el estilo de vida. Se integra en cualquier rutina,
                  con tan solo 20 minutos dos veces al día.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          CTA FINAL
      ───────────────────────────────────────── */}
      <CTABand
        title="Descubre cómo la Meditación Trascendental puede transformar tu vida"
        subtitle="Únete a la charla informativa gratuita y virtual. Sin costo, sin experiencia previa."
      />
    </>
  )
}
