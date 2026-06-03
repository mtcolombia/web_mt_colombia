'use client'

import { useActionState } from 'react'
import { createArticle, type BlogFormState } from '@/app/actions/blog'
import { CATEGORY_LABELS, type BlogArticle, type BlogCategory } from '@/lib/schemas'

interface Props { article?: BlogArticle }

export function BlogArticleForm({ article }: Props) {
  const [state, action, pending] = useActionState<BlogFormState, FormData>(createArticle, null)
  const today = new Date().toISOString().split('T')[0]

  return (
    <form action={action} className="bg-white rounded-xl shadow-card p-6 flex flex-col gap-5">
      <Field label="Título *" name="title" defaultValue={article?.title} required />

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-sans font-medium text-azul-profundo">
          Slug * <span className="font-normal text-azul-profundo/40">(URL: /blog/slug)</span>
        </label>
        <input
          name="slug"
          required
          defaultValue={article?.slug}
          placeholder="mi-articulo"
          className={inputCls}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-sans font-medium text-azul-profundo">Categoría *</label>
        <select name="category" required defaultValue={article?.category} className={inputCls}>
          {(Object.entries(CATEGORY_LABELS) as [BlogCategory, string][]).map(([k, v]) => (
            <option key={k} value={k}>{v}</option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-sans font-medium text-azul-profundo">Extracto *</label>
        <textarea
          name="excerpt"
          required
          rows={3}
          defaultValue={article?.excerpt}
          className={`${inputCls} resize-none`}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-sans font-medium text-azul-profundo">Fecha publicación</label>
          <input name="publishedAt" type="date" defaultValue={article?.publishedAt ?? today} className={inputCls} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-sans font-medium text-azul-profundo">Tiempo lectura (min)</label>
          <input name="readingTime" type="number" min={1} max={60} defaultValue={article?.readingTime ?? 5} className={inputCls} />
        </div>
      </div>

      <Field label="URL imagen portada" name="coverImage" defaultValue={article?.coverImage} placeholder="/images/blog/mi-imagen.jpg" />

      <div className="flex items-center gap-2">
        <input type="checkbox" name="featured" id="featured" defaultChecked={article?.featured} className="rounded" />
        <label htmlFor="featured" className="text-sm font-sans text-azul-profundo">Artículo destacado</label>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-sans font-medium text-azul-profundo">Cuerpo (HTML o texto)</label>
        <textarea name="body" rows={8} defaultValue={article?.body} className={`${inputCls} resize-y`} />
      </div>

      {state?.error && (
        <p className="text-xs font-sans text-red-600 bg-red-50 rounded-lg px-3 py-2">{state.error}</p>
      )}

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={pending}
          className="flex-1 bg-azul-claro text-white font-sans font-semibold text-sm rounded-lg
                     py-2.5 hover:opacity-90 disabled:opacity-50 transition-opacity"
        >
          {pending ? 'Guardando…' : 'Publicar artículo'}
        </button>
        <a href="/admin/blog" className="px-4 py-2.5 border border-azul-profundo/15 rounded-lg
                                        text-sm font-sans text-azul-profundo hover:bg-beige transition-colors">
          Cancelar
        </a>
      </div>
    </form>
  )
}

const inputCls =
  'border border-azul-profundo/15 rounded-lg px-3 py-2.5 text-sm font-sans w-full ' +
  'focus:outline-none focus:ring-2 focus:ring-azul-claro/40 focus:border-azul-claro'

function Field({
  label, name, defaultValue, required, placeholder,
}: {
  label: string; name: string; defaultValue?: string
  required?: boolean; placeholder?: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-sans font-medium text-azul-profundo">{label}</label>
      <input
        name={name}
        required={required}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={inputCls}
      />
    </div>
  )
}
