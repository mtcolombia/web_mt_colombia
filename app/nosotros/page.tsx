import type { Metadata } from 'next'
import Image from 'next/image'
import { Brain, Zap, TrendingUp, Smile, Award, MapPin, Phone } from 'lucide-react'
import { HeroSecondary }      from '@/components/sections/HeroSecondary'
import { CTABand }            from '@/components/sections/CTABand'
import { TeachersMapClient }  from '@/components/sections/TeachersMapClient'
import { teachers }           from '@/lib/content/teachers'

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'La Fundación Maharishi de Colombia es una entidad oficial sin ánimo de lucro dedicada al desarrollo del pleno potencial humano.',
}

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

      {/* ─── 1. QUIÉNES SOMOS — Split editorial ─── */}
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

      {/* ─── 2a. MISIÓN — fondo claro ─── */}
      <section className="relative bg-beige overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Image
            src="/images/hero/valle-del-cocora.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.10]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-beige via-beige/95 to-beige" />
        </div>

        <div className="relative container-site py-20">
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-dorado font-sans font-semibold text-sm tracking-[0.12em] uppercase">
              Misión
            </p>
            <h2 className="text-3xl md:text-4xl text-azul-profundo font-display leading-tight">
              Propósito fundamental de la Fundación Maharishi de Colombia
            </h2>
            <div className="font-sans text-azul-profundo/75 leading-relaxed space-y-4 text-base md:text-lg">
              <p>
                La Fundación Maharishi de Colombia tiene como propósito fundamental el desarrollo del pleno potencial humano, promoviendo una vida en armonía con las leyes de la naturaleza y contribuyendo a la superación de los problemas que generan sufrimiento en el individuo y la sociedad.
              </p>
              <p>
                Para ello, ofrece tecnologías orientadas al desarrollo de la conciencia y al bienestar físico y mental, como la técnica de Meditación Trascendental, técnicas avanzadas, el programa Sidhis MT, Yoga Maharishi, aromaterapia, consultas ayurvédicas y convivencias fuera de la ciudad.
              </p>
              <p className="font-semibold text-azul-profundo pt-2 border-t border-azul-profundo/[0.06]">
                Fundada sobre la Ciencia de la Inteligencia Creativa, desarrollada por Maharishi Mahesh Yogi, la Fundación es la única entidad oficial en Colombia autorizada para impartir estos conocimientos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2b. VISIÓN — fondo blanco limpio ─── */}
      <section className="relative bg-white overflow-hidden">
        <div className="relative container-site py-20 border-t border-azul-profundo/[0.06]">
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-dorado font-sans font-semibold text-sm tracking-[0.12em] uppercase">
              Visión
            </p>
            <h2 className="text-3xl md:text-4xl text-azul-profundo font-display leading-tight">
              Hacia un impacto integral y coherente en la sociedad
            </h2>
            <div className="font-sans text-azul-profundo/75 leading-relaxed space-y-4 text-base md:text-lg">
              <p>
                La Fundación Maharishi de Colombia aspira a contribuir al desarrollo integral del individuo y de la sociedad, promoviendo una vida en equilibrio con las leyes naturales, orientada hacia una paz estable y duradera.
              </p>
              <p>
                A través de programas en educación, salud y tecnologías de la conciencia respaldados por más de 800 investigaciones científicas publicadas en revistas académicas internacionales, la Fundación Maharishi impulsa un enfoque basado en evidencia para optimizar el funcionamiento humano.
              </p>
              <p>
                Este modelo favorece el desarrollo del potencial cerebral y la evolución de la conciencia, permitiendo a cada persona acceder a mayores niveles de claridad mental, creatividad, estabilidad emocional y bienestar. Asimismo, busca generar un impacto positivo en la sociedad, promoviendo entornos más coherentes, saludables y armónicos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. MAHARISHI — Fundador ─── */}
      <section className="relative overflow-hidden bg-beige/30 border-t border-azul-profundo/[0.04]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Image src="/images/arboles-cielo.jpg" alt="" fill
            className="object-cover opacity-[0.10]" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-br from-beige/20 via-transparent to-beige/20" />
        </div>
        <div className="relative container-site py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
              <span className="chip-light">Maharishi Mahesh Yogi · 1918–2008</span>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-dorado font-sans font-semibold text-sm tracking-[0.12em] uppercase">
              El fundador
            </p>
            <h2 className="text-4xl md:text-5xl leading-tight">Maharishi Mahesh Yogi</h2>
            <blockquote className="border-l-[3px] border-dorado pl-5">
              <p className="font-display text-xl md:text-2xl text-azul-profundo/85 italic leading-relaxed">
                "La vida es bienavenurarse. El sufrimiento no es el destino del hombre."
              </p>
            </blockquote>
            <div className="font-sans text-azul-profundo/70 leading-relaxed space-y-4 text-sm md:text-base">
              <p>
                Maharishi Mahesh Yogi (1918–2008) fue un maestro de la tradición védica de la India, graduado en Física y matemática por la Universidad de Allahabad y fundador de la Ciencia de la Inteligencia Creativa, una disciplina que propone que la conciencia es el campo fundamental de la inteligencia y el orden en la naturaleza.
              </p>
              <p>
                A partir de la década de 1950, introdujo la Meditación Trascendental (MT) en todo el mundo y estableció centros de enseñanza, investigación y educación en más de 120 países.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. BENEFICIOS — Cards con nuevas imágenes ─── */}
      <section className="section-y bg-white border-t border-azul-profundo/[0.04]">
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

      {/* ─── 5. MAPA + EQUIPO ─── */}
      <section className="section-y bg-beige">
        <div className="container-site">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6
                          mb-14 pb-10 border-b border-azul-profundo/10">
            <div>
              <p className="text-dorado font-sans font-semibold text-sm tracking-[0.12em] uppercase mb-3">
                Instructores certificados
              </p>
              <h2 className="text-4xl md:text-5xl">Equipo en Colombia</h2>
            </div>
            <p className="font-sans text-azul-profundo/55 text-sm max-w-xs leading-relaxed md:text-right">
              Formados por la Maharishi European Research University y la Maharishi
              International University (Iowa, EE. UU.).
            </p>
          </div>

          {/* Mapa interactivo — clic en marcador para ver profesores y contacto */}
          <div className="mb-14">
            <p className="font-sans text-xs text-azul-profundo/40 mb-4 flex items-center gap-1.5">
              <MapPin size={12} className="text-dorado" />
              Haz clic en cada marcador para ver los profesores disponibles en esa ciudad
            </p>
            <TeachersMapClient teachers={teachers} />
          </div>

          {/* Lista agrupada por ciudad */}
          {(['Directora Nacional', 'Bogotá', 'Medellín', 'Bucaramanga', 'Barichara'] as const).map((group) => {
            const isNational = group === 'Directora Nacional'
            const list = isNational
              ? teachers.filter((t) => t.tag === 'directivo')
              : teachers.filter((t) => t.city === group && t.tag !== 'directivo')
            if (!list.length) return null
            return (
              <div key={group} className="mb-10 last:mb-0">
                <h3 className="font-sans font-semibold text-xs text-azul-profundo/55 uppercase
                               tracking-widest mb-4 pb-3 border-b border-azul-profundo/10
                               flex items-center gap-2">
                  {!isNational && <MapPin size={11} className="text-dorado" />}
                  {group}
                </h3>
                <div className="divide-y divide-azul-profundo/[0.06]">
                  {list.map((t) => {
                    const initials = t.name.split(' ').slice(0, 2).map((w) => w[0]).join('')
                    return (
                      <div key={t.name} className="flex items-center gap-5 py-4 md:py-5">
                        {/* Avatar ── */}
                        <div className="w-11 h-11 rounded-full bg-azul-profundo/[0.07]
                                        border border-azul-profundo/10 shrink-0 overflow-hidden
                                        flex items-center justify-center">
                          <span className="font-sans font-semibold text-sm text-azul-profundo/50
                                           select-none">
                            {initials}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-sans font-semibold text-[15px] md:text-[16px] text-azul-profundo leading-snug">
                            {t.name}
                          </p>
                          <p className="font-sans text-xs text-azul-profundo/45 mt-0.5">{t.role}</p>
                        </div>
                        {t.phone && (
                          <a
                            href={`tel:+57${t.phone.replace(/\s/g, '')}`}
                            className="flex items-center gap-1.5 font-sans text-sm text-dorado
                                       hover:text-azul-profundo transition-colors shrink-0"
                            aria-label={`Llamar a ${t.name}`}
                          >
                            <Phone size={13} />
                            <span className="hidden sm:inline">{t.phone}</span>
                          </a>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}

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
