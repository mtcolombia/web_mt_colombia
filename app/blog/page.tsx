import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { HeroSecondary }  from '@/components/sections/HeroSecondary'
import { CTABand }        from '@/components/sections/CTABand'
import { articles, featuredArticle } from '@/lib/content/blog'
import { CATEGORY_LABELS } from '@/lib/schemas'
import { routes }          from '@/lib/routes'
import { formatDate }      from '@/lib/utils'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Artículos sobre Meditación Trascendental, ciencia y bienestar — evidencia, experiencias y actualidad.',
}

export default function BlogPage() {
  const rest = articles.filter((a) => a.slug !== featuredArticle.slug)

  return (
    <>
      <HeroSecondary
        title="Blog"
        subtitle="Artículos sobre Meditación Trascendental, ciencia y bienestar"
        breadcrumbs={[{ label: 'Blog' }]}
        imageSrc="/images/hero-blog.jpg"
      />

      {/* 7.2 — ARTÍCULO DESTACADO */}
      <section className="section-y bg-white">
        <div className="container-site">
          <Link
            href={routes.blogPost(featuredArticle.slug)}
            className="group flex flex-col md:flex-row gap-8 rounded-[var(--radius-card)]
                       overflow-hidden shadow-card hover:shadow-lg transition-shadow"
          >
            <div className="relative h-56 md:h-auto md:w-1/2 shrink-0 bg-beige">
              <Image
                src={featuredArticle.coverImage}
                alt={featuredArticle.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-6 md:p-8">
              <span className="inline-block bg-dorado/10 text-dorado font-sans text-xs font-semibold
                               uppercase tracking-wider px-3 py-1 rounded-full mb-4 self-start">
                {CATEGORY_LABELS[featuredArticle.category]}
              </span>
              <h2 className="text-2xl md:text-3xl mb-3 group-hover:text-azul-claro transition-colors">
                {featuredArticle.title}
              </h2>
              <p className="font-serif text-azul-profundo/75 mb-4">{featuredArticle.excerpt}</p>
              <p className="text-xs font-sans text-azul-profundo/50">
                {formatDate(featuredArticle.publishedAt)} · {featuredArticle.readingTime} min lectura
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* 7.3 — GRILLA */}
      <section className="section-y bg-beige">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article) => (
              <Link
                key={article.slug}
                href={routes.blogPost(article.slug)}
                className="group flex flex-col rounded-[var(--radius-card)] bg-white
                           overflow-hidden shadow-card hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 bg-beige overflow-hidden">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col flex-1 p-5">
                  <span className="text-dorado font-sans text-xs font-semibold uppercase tracking-wider mb-2">
                    {CATEGORY_LABELS[article.category]}
                  </span>
                  <h3 className="font-sans font-semibold text-azul-profundo mb-2 line-clamp-2
                                 group-hover:text-azul-claro transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-serif text-sm text-azul-profundo/70 mb-4 line-clamp-3 flex-1">
                    {article.excerpt}
                  </p>
                  <p className="text-xs font-sans text-azul-profundo/40">
                    {formatDate(article.publishedAt)} · {article.readingTime} min
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
