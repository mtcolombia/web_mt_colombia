'use client'

import { useActionState } from 'react'
import { createTestimonial, type TestimonialFormState } from '@/app/actions/testimonials'

export function TestimonialForm() {
  const [state, action, pending] = useActionState<TestimonialFormState, FormData>(createTestimonial, null)

  return (
    <form action={action} className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-4">
        <Field label="Nombre *" name="name" required />
        <Field label="Título / rol" name="title" required placeholder="ej: Practicante desde 2020" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-sans font-medium text-azul-profundo/70">Testimonio *</label>
        <textarea name="quote" required rows={3} className={`${inp} resize-none`} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Field label="URL foto" name="photo" placeholder="https://… o /images/…" />
        <Field label="ID video YouTube" name="videoId" placeholder="dQw4w9WgXcQ" />
      </div>
      <Field label="Ciudad" name="city" placeholder="Bogotá" />

      {state?.error && (
        <p className="text-xs font-sans text-red-600 bg-red-50 rounded-lg px-3 py-2">{state.error}</p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="bg-azul-claro text-white font-sans font-semibold text-sm rounded-lg
                   py-2.5 hover:opacity-90 disabled:opacity-50 transition-opacity"
      >
        {pending ? 'Guardando…' : 'Agregar testimonio'}
      </button>
    </form>
  )
}

const inp =
  'border border-azul-profundo/15 rounded-lg px-3 py-2.5 text-sm font-sans w-full ' +
  'focus:outline-none focus:ring-2 focus:ring-azul-claro/40 focus:border-azul-claro'

function Field({ label, name, required, placeholder }: {
  label: string; name: string; required?: boolean; placeholder?: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-sans font-medium text-azul-profundo/70">{label}</label>
      <input name={name} required={required} placeholder={placeholder} className={inp} />
    </div>
  )
}
