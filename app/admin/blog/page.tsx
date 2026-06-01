import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import { Plus, Pencil, Trash2 } from 'lucide-react'
import { deleteArticle } from '@/app/actions/blog'
import { CATEGORY_LABELS, type BlogArticle } from '@/lib/schemas'
import { formatDate } from '@/lib/utils'

export default function AdminBlogPage() {
  const articles: BlogArticle[] = (() => {
    try {
      return JSON.parse(
        fs.readFileSync(path.join(process.cwd(), 'public', 'data', 'blog.json'), 'utf-8'),
      ) as BlogArticle[]
    } catch { return [] }
  })()

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl text-azul-profundo">Blog</h1>
          <p className="font-sans text-sm text-azul-profundo/50 mt-0.5">{articles.length} artículos</p>
        </div>
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-2 bg-azul-claro text-white font-sans font-semibold
                     text-sm px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
        >
          <Plus size={16} />
          Nuevo artículo
        </Link>
      </div>

      <div className="bg-white rounded-xl shadow-card overflow-hidden">
        {articles.length === 0 ? (
          <p className="p-8 text-center font-sans text-sm text-azul-profundo/40">
            No hay artículos. Crea el primero.
          </p>
        ) : (
          <table className="w-full text-sm font-sans">
            <thead>
              <tr className="border-b border-azul-profundo/[0.06]">
                <th className="text-left px-5 py-3 text-xs font-semibold text-azul-profundo/50 uppercase tracking-wider">Título</th>
                <th className="text-left px-3 py-3 text-xs font-semibold text-azul-profundo/50 uppercase tracking-wider hidden sm:table-cell">Categoría</th>
                <th className="text-left px-3 py-3 text-xs font-semibold text-azul-profundo/50 uppercase tracking-wider hidden md:table-cell">Fecha</th>
                <th className="px-4 py-3 w-20" />
              </tr>
            </thead>
            <tbody className="divide-y divide-azul-profundo/[0.04]">
              {articles.map((a) => (
                <tr key={a.slug} className="hover:bg-beige/50 transition-colors">
                  <td className="px-5 py-3.5">
                    <span className="font-medium text-azul-profundo line-clamp-1">{a.title}</span>
                    <span className="text-xs text-azul-profundo/40 block mt-0.5">/blog/{a.slug}</span>
                  </td>
                  <td className="px-3 py-3.5 hidden sm:table-cell">
                    <span className="text-xs bg-dorado/10 text-dorado px-2 py-0.5 rounded-full font-semibold">
                      {CATEGORY_LABELS[a.category] ?? a.category}
                    </span>
                  </td>
                  <td className="px-3 py-3.5 text-azul-profundo/50 hidden md:table-cell">
                    {formatDate(a.publishedAt)}
                  </td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-2 justify-end">
                      <Link
                        href={`/admin/blog/${a.slug}`}
                        className="p-1.5 rounded-md text-azul-profundo/40 hover:text-azul-claro hover:bg-azul-claro/5 transition-colors"
                      >
                        <Pencil size={14} />
                      </Link>
                      <form action={deleteArticle.bind(null, a.slug)}>
                        <button
                          type="submit"
                          className="p-1.5 rounded-md text-azul-profundo/40 hover:text-red-500 hover:bg-red-50 transition-colors"
                          title="Eliminar artículo"
                        >
                          <Trash2 size={14} />
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
