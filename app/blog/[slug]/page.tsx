import type { Metadata } from 'next'
import { notFound }   from 'next/navigation'
import Image          from 'next/image'
import Link           from 'next/link'
import { articles }   from '@/lib/content/blog'
import { CATEGORY_LABELS } from '@/lib/schemas'
import { routes }     from '@/lib/routes'
import { formatDate } from '@/lib/utils'
import { CTABand }    from '@/components/sections/CTABand'

interface Props {
  params: Promise<{ slug: string }>
}

/** Genera todas las rutas estáticas en build time */
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

/** Metadata dinámica por artículo */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: { images: [{ url: article.coverImage }] },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const related = articles.filter((a) => a.slug !== slug).slice(0, 3)

  return (
    <>
      {/* Encabezado */}
      <header className="relative min-h-[45vh] bg-azul-profundo flex items-end">
        <div className="absolute inset-0">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            priority
            className="object-cover opacity-50"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-azul-profundo/60" />
        </div>
        <div className="relative container-site pb-12 pt-28 text-white">
          <span className="inline-block bg-dorado/20 text-dorado font-sans text-xs font-semibold
                           uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            {CATEGORY_LABELS[article.category]}
          </span>
          <h1 className="text-white text-4xl md:text-5xl max-w-3xl mb-4">{article.title}</h1>
          <p className="text-white/60 font-sans text-sm">
            {formatDate(article.publishedAt)} · {article.readingTime} min lectura
          </p>
        </div>
      </header>

      {/* Cuerpo del artículo */}
      <article className="section-y bg-white">
        <div className="container-site prose-width">
          {article.body ? (
            /* Cuando hay contenido real (MDX/HTML) */
            <div
              className="font-serif text-azul-profundo/85 leading-relaxed
                         [&_h2]:font-display [&_h2]:text-3xl [&_h2]:mt-10 [&_h2]:mb-4
                         [&_h3]:font-sans [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3
                         [&_p]:mb-5 [&_blockquote]:border-l-4 [&_blockquote]:border-dorado [&_blockquote]:pl-5 [&_blockquote]:italic"
              dangerouslySetInnerHTML={{ __html: article.body }}
            />
          ) : (
            <p className="font-serif text-azul-profundo/60 text-center py-12">
              Contenido del artículo próximamente…
            </p>
          )}
        </div>
      </article>

      {/* Artículos relacionados */}
      {related.length > 0 && (
        <section className="section-y bg-beige">
          <div className="container-site">
            <h2 className="text-2xl font-sans font-semibold mb-8 text-center">Artículos relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={routes.blogPost(r.slug)}
                  className="group rounded-[var(--radius-card)] bg-white overflow-hidden
                             shadow-card hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-36 bg-beige overflow-hidden">
                    <Image
                      src={r.coverImage}
                      alt={r.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-sans font-semibold text-sm text-azul-profundo line-clamp-2
                                   group-hover:text-dorado transition-colors">
                      {r.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand />
    </>
  )
}
