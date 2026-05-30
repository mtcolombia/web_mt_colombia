import type { Metadata } from 'next'
import Image from 'next/image'
import { Brain, Zap, TrendingUp, Smile, Award, MapPin } from 'lucide-react'
import { HeroSecondary } from '@/components/sections/HeroSecondary'
import { CTABand }       from '@/components/sections/CTABand'
import { teachers }      from '@/lib/content/teachers'

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'La Fundación Maharishi de Colombia es una entidad oficial sin ánimo de lucro dedicada al desarrollo del pleno potencial humano.',
}

const misionItems = [
  {
    n: '01', icon: <Brain size={20} />,
    title: 'Expansión del potencial cerebral',
    body: 'Desarrollar el funcionamiento total del cerebro mediante tecnologías probadas de la Ciencia de la Inteligencia Creativa.',
  },
  {
    n: '02', icon: <Zap size={20} />,
    title: 'Estados superiores de conciencia',
    body: 'Guiar a cada individuo hacia estados de conciencia más elevados, despertando el potencial latente de la mente humana.',
  },
  {
    n: '03', icon: <TrendingUp size={20} />,
    title: 'Creatividad e inteligencia',
    body: 'Incrementar de forma medible la creatividad, la inteligencia fluida y la felicidad en todos los ámbitos de la vida.',
  },
  {
    n: '04', icon: <Smile size={20} />,
    title: 'Vida libre de estrés y conflicto',
    body: 'Construir comunidades libres de estrés, violencia y conflicto a través del Efecto Maharishi demostrado científicamente.',
  },
]

const benefitCards = [
  {
    img:   '/images/nosotros-card-cerebral.jpeg',
    title: 'Expansión del potencial cerebral',
    desc:  'Coherencia EEG, mayor función ejecutiva y rendimiento cognitivo documentados en más de 600 estudios.',
  },
  {
    img:   '/images/nosotros-card-estres.jpg',
    title: 'Reducción del estrés y mejora de la salud',
    desc:  'Reducción de cortisol, presión arterial y marcadores inflamatorios reconocida por la American Heart Association.',
  },
  {
    img:   '/images/nosotros-card-social.jpg',
    title: 'Impacto social positivo',
    desc:  'El Efecto Maharishi: cuando el 1% practica, los índices de violencia y estrés colectivo disminuyen estadísticamente.',
  },
]

export default function NosotrosPage() {
  return (
    <>
      {/* ─── HERO — equipo vestidos de blanco ─── */}
      <HeroSecondary
        title="Fundación Maharishi de Colombia"
        subtitle="Desarrollando el pleno potencial humano desde 1973"
        breadcrumbs={[{ label: 'Nosotros' }]}
        imageSrc="/images/nosotros-banner.jpeg"
      />

      {/* ─── QUIÉNES SOMOS — Split editorial ─── */}
      <section className="section-y bg-white overflow-hidden">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="relative h-[480px] lg:h-[580px] rounded-[20px] overflow-hidden
                          shadow-[0_32px_80px_rgba(15,42,68,0.18)]">
            <Image
              src="/images/equipo-lago.jpg"
              alt="Equipo Fundación Maharishi — puente sobre el lago"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-azul-profundo/35 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-2.5
                            bg-white/90 backdrop-blur-sm rounded-full px-4 py-2.5 shadow-lg">
              <Award size={16} className="text-dorado shrink-0" />
              <span className="text-sm font-sans font-semibold text-azul-profundo">
                Certificados internacionalmente
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-dorado font-sans font-semibold text-sm tracking-[0.12em] uppercase">
              Quiénes somos
            </p>
            <h2 className="text-4xl md:text-5xl leading-tight">
              Una entidad oficial al servicio del desarrollo humano
            </h2>
            <div className="space-y-4 font-sans text-azul-profundo/70 leading-relaxed">
              <p>
                La Fundación Maharishi de Colombia es una organización dedicada al desarrollo del
                pleno potencial humano a través de tecnologías avanzadas de la conciencia, basadas
                en la Ciencia de la Inteligencia Creativa, desarrollada por Maharishi Mahesh Yogi.
              </p>
              <p>
                Desde una perspectiva integradora entre conocimiento tradicional y validación
                científica contemporánea, la Fundación promueve la práctica de la Meditación
                Trascendental (MT) y programas complementarios orientados a mejorar la salud, el
                bienestar y el funcionamiento óptimo del cerebro.
              </p>
              <p>
                En Colombia, la Fundación Maharishi actúa como una entidad oficial sin ánimo de
                lucro autorizada para impartir estos conocimientos, garantizando la enseñanza
                estandarizada de las tecnologías védicas Maharishi, a través de instructores
                certificados internacionalmente.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="chip"><MapPin size={12} className="text-dorado" />Colombia</span>
              <span className="chip">Sin ánimo de lucro</span>
              <span className="chip">Desde 1973</span>
            </div>
          </div>

        </div>
      </section>

      {/* ─── MISIÓN — fondo claro ─── */}
      <section className="relative bg-beige overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Image
            src="/images/hero/valle-del-cocora.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.12]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-beige via-beige/95 to-beige" />
        </div>

        <div className="relative container-site section-y">
          <div className="max-w-3xl mb-16">
            <h2 className="font-sans text-dorado text-lg md:text-xl font-semibold tracking-wider uppercase mb-6">
              Misión
            </h2>
            <blockquote>
              <p className="font-display text-3xl md:text-4xl lg:text-5xl text-azul-profundo leading-snug">
                "Desarrollar el pleno potencial humano promoviendo una vida en armonía
                con las leyes de la naturaleza."
              </p>
            </blockquote>
          </div>

          <div className="divide-y divide-azul-profundo/[0.08]">
            {misionItems.map((item) => (
              <div
                key={item.n}
                className="group grid grid-cols-[3rem_2rem_1fr] md:grid-cols-[4rem_2.5rem_1fr_2fr]
                           gap-x-4 md:gap-x-8 items-center py-6 md:py-7
                           -mx-4 px-4 md:-mx-6 md:px-6
                           hover:bg-azul-profundo/[0.04] transition-colors rounded-xl"
              >
                <span className="font-display text-2xl md:text-3xl text-dorado/40
                                 group-hover:text-dorado/70 transition-colors select-none">
                  {item.n}
                </span>
                <span className="text-dorado/70 group-hover:text-dorado transition-colors">
                  {item.icon}
                </span>
                <h3 className="font-sans font-semibold text-[16px] md:text-[18px] text-azul-profundo">
                  {item.title}
                </h3>
                <p className="hidden md:block font-sans text-[14px] text-azul-profundo/60 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MAHARISHI — Fundador, foto HD ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Image src="/images/arboles-cielo.jpg" alt="" fill
            className="object-cover opacity-[0.14]" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-br from-beige via-beige/92 to-beige" />
        </div>
        <div className="relative container-site py-24 md:py-28 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[440px] lg:h-[520px] rounded-[20px] overflow-hidden
                          shadow-[0_32px_80px_rgba(15,42,68,0.18)]">
            <Image
              src="/images/nosotros-maharishi.jpeg"
              alt="Maharishi Mahesh Yogi — fundador de la Ciencia de la Inteligencia Creativa"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-azul-profundo/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="chip-light">Maharishi Mahesh Yogi · 1917–2008</span>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-dorado font-sans font-semibold text-sm tracking-[0.12em] uppercase">
              El fundador
            </p>
            <h2 className="text-4xl md:text-5xl leading-tight">Maharishi Mahesh Yogi</h2>
            <blockquote className="border-l-[3px] border-dorado pl-5">
              <p className="font-display text-xl md:text-2xl text-azul-profundo/85 italic leading-relaxed">
                "La vida es bienaventuranza. El sufrimiento no es el destino del hombre."
              </p>
            </blockquote>
            <p className="font-sans text-azul-profundo/70 leading-relaxed">
              Fundador de la Ciencia de la Inteligencia Creativa y padre del movimiento
              mundial de la Meditación Trascendental. Bajo su guía se establecieron centros
              en más de 100 países y se generaron más de 800 estudios científicos sobre los
              efectos de su técnica en la fisiología, la psicología y la sociedad.
            </p>
          </div>
        </div>
      </section>

      {/* ─── VISIÓN — fondo paisajístico transparente ─── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Image
            src="/images/hero/valle-del-cocora.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.22]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90" />
        </div>
        <div className="relative container-site py-24 md:py-32 prose-width text-center">
          <h2 className="font-sans text-dorado text-lg md:text-xl font-semibold tracking-wider uppercase mb-6">
            Visión
          </h2>
          <p className="font-display text-2xl md:text-3xl lg:text-4xl text-azul-profundo/90 leading-snug mb-10">
            Contribuir al desarrollo integral del individuo y de la sociedad, promoviendo
            una vida en equilibrio con las leyes naturales, orientada hacia una paz estable
            y duradera.
          </p>
          <p className="font-sans text-azul-profundo/65 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            A través de programas en educación, salud y tecnologías de la conciencia —
            respaldados por más de 800 investigaciones científicas publicadas en revistas
            académicas internacionales — la Fundación Maharishi impulsa un enfoque basado
            en evidencia para optimizar el funcionamiento humano.
          </p>
        </div>
      </section>

      {/* ─── BENEFICIOS — Cards con nuevas imágenes ─── */}
      <section className="section-y bg-white">
        <div className="container-site">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6
                          mb-12 pb-10 border-b border-azul-profundo/10">
            <div>
              <p className="text-dorado font-sans font-semibold text-sm tracking-[0.12em] uppercase mb-3">
                Respaldado por la ciencia
              </p>
              <h2 className="text-4xl md:text-5xl">Beneficios documentados</h2>
            </div>
            <p className="font-sans text-azul-profundo/55 text-sm max-w-xs leading-relaxed md:text-right">
              Más de 800 estudios en 250 universidades de 35 países, publicados en
              <em className="not-italic text-azul-profundo/80"> Science</em>,{' '}
              <em className="not-italic text-azul-profundo/80">Lancet</em> y otras revistas de referencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefitCards.map((card) => (
              <div
                key={card.title}
                className="relative aspect-[4/5] rounded-[20px] overflow-hidden group cursor-default
                           shadow-[0_16px_48px_rgba(15,42,68,0.16)]"
              >
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-azul-profundo/90 via-azul-profundo/40 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <h3 className="font-sans font-semibold text-white text-lg mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <p className="font-sans text-white/70 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── EQUIPO — Lista elegante sin fotos ─── */}
      <section className="section-y bg-beige">
        <div className="container-site">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6
                          mb-14 pb-10 border-b border-azul-profundo/10">
            <div>
              <p className="text-dorado font-sans font-semibold text-sm tracking-[0.12em] uppercase mb-3">
                Instructores
              </p>
              <h2 className="text-4xl md:text-5xl">Equipo certificado</h2>
            </div>
            <p className="font-sans text-azul-profundo/55 text-sm max-w-xs leading-relaxed md:text-right">
              Formados por la Maharishi European Research University y la Maharishi
              International University (Iowa, EE. UU.).
            </p>
          </div>

          <div className="divide-y divide-azul-profundo/[0.07]">
            {teachers.map((t, i) => (
              <div
                key={t.name}
                className="flex items-center gap-6 py-5 md:py-6"
              >
                <span className="font-display text-2xl text-dorado/30 select-none w-10 shrink-0 text-right">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="w-10 h-10 rounded-full bg-azul-profundo/8 border border-azul-profundo/12
                                flex items-center justify-center shrink-0">
                  <span className="font-sans font-semibold text-sm text-azul-profundo/60">
                    {t.name.split(' ').map(w => w[0]).slice(0, 2).join('')}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-sans font-semibold text-[16px] md:text-[17px] text-azul-profundo">
                    {t.name}
                  </p>
                  <p className="font-sans text-sm text-azul-profundo/50 mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── ESTADÍSTICAS ─── */}
      <section className="bg-azul-profundo py-14">
        <div className="container-site grid grid-cols-3 divide-x divide-white/10">
          {[
            { n: '800+', label: 'estudios publicados' },
            { n: '50+',  label: 'años de investigación' },
            { n: '1973', label: 'en Colombia' },
          ].map((s) => (
            <div key={s.n} className="text-center px-4 md:px-10">
              <p className="font-display text-4xl md:text-5xl text-white leading-none mb-2">{s.n}</p>
              <p className="text-[11px] md:text-[12px] font-sans text-white/45 tracking-wide uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABand
        title="Conócenos en persona"
        subtitle="Asiste a la charla informativa gratuita y virtual. Sin costo, sin experiencia previa."
        imageSrc="/images/hero/valle-del-cocora.jpg"
        imageOpacity={0.28}
      />
    </>
  )
}
