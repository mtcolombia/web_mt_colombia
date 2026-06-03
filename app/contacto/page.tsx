import type { Metadata } from 'next'
import { MessageCircle, Mail, ExternalLink } from 'lucide-react'
import { HeroSecondary } from '@/components/sections/HeroSecondary'
import { ContactForm }   from '@/components/sections/ContactForm'
import { teachers }      from '@/lib/content/teachers'
import { contactInfo, socialLinks, institutionalLinks } from '@/lib/content/navigation'
import { whatsappLink }  from '@/lib/utils'
import { Facebook, Instagram, Youtube } from 'lucide-react'
import { Button }        from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Contacta a la Fundación Maharishi de Colombia. Inscríbete a la charla informativa gratuita sobre Meditación Trascendental.',
}

const SOCIAL_ICONS = { Facebook, Instagram, Youtube } as const

const directivos = teachers.filter((t) => t.tag === 'directivo')

export default function ContactoPage() {
  return (
    <>
      <HeroSecondary
        title="Contacto"
        subtitle="Estamos para acompañarte en tu práctica"
        breadcrumbs={[{ label: 'Contacto' }]}
        imageSrc="/images/hero-contacto.png"
      />

      {/* ─── DATOS + FORMULARIO ─── */}
      <section id="formulario" className="section-y bg-white scroll-mt-20">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Escríbenos</h2>
              <ul className="space-y-4">
                <li>
                  <a
                    href={whatsappLink(contactInfo.whatsappOficina.number,
                      'Hola, me interesa información sobre Meditación Trascendental')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 font-sans text-azul-profundo hover:text-dorado transition-colors"
                  >
                    <MessageCircle size={20} className="text-dorado shrink-0" />
                    <div>
                      <p className="font-semibold">Oficina Nacional — WhatsApp</p>
                      <p className="text-sm text-azul-profundo/60">{contactInfo.whatsappOficina.label}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={whatsappLink(contactInfo.whatsappBusiness.number)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 font-sans text-azul-profundo hover:text-dorado transition-colors"
                  >
                    <MessageCircle size={20} className="text-dorado shrink-0" />
                    <div>
                      <p className="font-semibold">WhatsApp Business</p>
                      <p className="text-sm text-azul-profundo/60">{contactInfo.whatsappBusiness.label}</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3 font-sans text-azul-profundo hover:text-dorado transition-colors"
                  >
                    <Mail size={20} className="text-dorado shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="font-semibold">Correo electrónico</p>
                      <p className="text-sm text-azul-profundo/60 break-all">{contactInfo.email}</p>
                    </div>
                  </a>
                </li>
              </ul>

              <div className="mt-6">
                <Button
                  href={whatsappLink(contactInfo.whatsappOficina.number,
                    'Hola, me interesa información sobre Meditación Trascendental')}
                  external
                  className="gap-2"
                >
                  <MessageCircle size={18} />
                  Escríbenos por WhatsApp
                </Button>
              </div>
            </div>

            {/* Redes sociales */}
            <div>
              <h3 className="font-sans font-semibold text-xl mb-4">Redes sociales</h3>
              <div className="flex gap-3 mb-6">
                {socialLinks.map((link) => {
                  const Icon = SOCIAL_ICONS[link.icon as keyof typeof SOCIAL_ICONS]
                  return (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.platform}
                      className="w-11 h-11 rounded-full border border-azul-claro/40 flex items-center justify-center
                                 text-azul-profundo hover:border-dorado hover:text-dorado transition-all"
                    >
                      <Icon size={20} />
                    </a>
                  )
                })}
              </div>

              <h3 className="font-sans font-semibold text-xl mb-3">Enlaces institucionales</h3>
              <ul className="space-y-2">
                {institutionalLinks.map((link) => (
                  <li key={link.url}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-sans text-sm text-azul-profundo hover:text-dorado transition-colors"
                    >
                      <ExternalLink size={14} />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Oficina Nacional — solo directivos */}
            <div>
              <h3 className="font-sans font-semibold text-xl mb-4">Oficina nacional</h3>
              <div className="space-y-3">
                {directivos.map((t) => (
                  <div key={t.name} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-azul-profundo/8 border border-azul-profundo/12
                                    flex items-center justify-center shrink-0">
                      <span className="font-sans font-semibold text-sm text-azul-profundo/60">
                        {t.name.split(' ').map(w => w[0]).slice(0, 2).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-sans font-semibold text-azul-profundo">{t.name}</p>
                      <p className="text-xs font-sans text-azul-profundo/60">{t.role.split('·')[0].trim()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div>
            <ContactForm />
          </div>

        </div>
      </section>

      {/* ─── POLÍTICA DE PRIVACIDAD ─── */}
      <section className="section-y bg-beige">
        <div className="container-site prose-width">

          <h2 className="text-3xl md:text-4xl mb-10">Política de Privacidad</h2>

          <div className="space-y-8 font-sans text-azul-profundo leading-relaxed">

            <p>
              El presente Política de Privacidad establece los términos en que Meditación Trascendental Co
              usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su
              sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios.
              Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser
              identificado, lo hacemos asegurando que solo se empleará de acuerdo con los términos de este
              documento. Sin embargo, esta Política de Privacidad puede cambiar con el tiempo o ser
              actualizada, por lo que le recomendamos y enfatizamos revisar continuamente esta página para
              asegurarse de que está de acuerdo con dichos cambios.
            </p>

            <div>
              <h3 className="font-sans font-semibold text-lg text-azul-profundo mb-3">
                Información que es recogida
              </h3>
              <p>
                Nuestro sitio web podrá recoger información personal, por ejemplo: Nombre, información de
                contacto como su dirección de correo electrónico e información demográfica. Así mismo,
                cuando sea necesario, podrá ser requerida información específica para procesar algún pedido
                o realizar una entrega o facturación.
              </p>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-lg text-azul-profundo mb-3">
                Uso de la información recogida
              </h3>
              <p>
                Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio
                posible, particularmente para mantener un registro de usuarios, de pedidos en caso que
                aplique, y mejorar nuestros productos y servicios. Es posible que sean enviados correos
                electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos
                productos y otra información publicitaria que consideremos relevante para usted o que pueda
                brindarle algún beneficio. Estos correos electrónicos serán enviados a la dirección que
                usted proporcione y podrán ser cancelados en cualquier momento.
              </p>
              <p className="mt-3">
                Meditación Trascendental Co está altamente comprometido para cumplir con el compromiso de
                mantener su información segura. Usamos los sistemas más avanzados y los actualizamos
                constantemente para asegurarnos de que no exista ningún acceso no autorizado.
              </p>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-lg text-azul-profundo mb-3">Cookies</h3>
              <p>
                Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso
                para almacenarse en su ordenador, al aceptar dicho fichero, se crea y la cookie sirve
                entonces para tener información respecto al tráfico web, y también facilita las futuras
                visitas a una web recurrente. Otra función que tienen las cookies es que con ellas las webs
                pueden reconocerte individualmente y por tanto, brindarte el mejor servicio personalizado
                de su web.
              </p>
              <p className="mt-3">
                Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y
                su frecuencia. Esta información es empleada únicamente para análisis estadístico y después
                la información se elimina de forma permanente. Usted puede eliminar las cookies en
                cualquier momento desde su ordenador. Sin embargo, las cookies ayudan a proporcionar un
                mejor servicio de los sitios web; estas no dan acceso a información de su ordenador ni de
                usted, a menos de que usted así lo quiera y la proporcione directamente. Usted puede
                aceptar o negar el uso de cookies, sin embargo, la mayoría de navegadores aceptan cookies
                automáticamente, pues sirve para tener un mejor servicio web.
              </p>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-lg text-azul-profundo mb-3">
                Enlaces a terceros
              </h3>
              <p>
                Este sitio web pudiera contener enlaces a otros sitios que pudieran ser de su interés. Una
                vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos control
                sobre al sitio al que es redirigido y por lo tanto, no somos responsables de los términos
                o privacidad ni de la protección de sus datos en esos otros sitios terceros. Dichos sitios
                están sujetos a sus propias políticas de privacidad, por lo cual es recomendable que los
                consulte para confirmar que usted está de acuerdo con estas.
              </p>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-lg text-azul-profundo mb-3">
                Control de su información personal
              </h3>
              <p>
                En cualquier momento usted puede restringir la recopilación o el uso de la información
                personal que es proporcionada a nuestro sitio web. Cada vez que se le solicite rellenar un
                formulario, como el de alta de usuario, puede marcar o desmarcar la opción de recibir
                información por correo electrónico. En caso de que haya marcado la opción de recibir
                nuestro boletín o publicidad, usted puede cancelarla en cualquier momento.
              </p>
              <p className="mt-3">
                Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada
                sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.
              </p>
              <p className="mt-3">
                Meditación Trascendental Col. Se reserva el derecho de cambiar los términos de la presente
                Política de Privacidad en cualquier momento.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
