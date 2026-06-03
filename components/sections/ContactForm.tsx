'use client'
import { useActionState } from 'react'
import { submitContactForm, type ContactState } from '@/app/actions/contact'

const initialState: ContactState = null

export function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(
    submitContactForm,
    initialState,
  )

  if (state?.success) {
    return (
      <div
        id="formulario"
        className="rounded-[var(--radius-card)] bg-white p-8 shadow-card text-center space-y-3"
      >
        <div className="text-4xl">🙏</div>
        <h3 className="font-sans font-semibold text-azul-profundo text-xl">
          ¡Gracias! Tu lugar está reservado.
        </h3>
        <p className="font-serif text-azul-profundo/75">
          Recibirás un mensaje por WhatsApp o correo con los detalles de la charla.
        </p>
      </div>
    )
  }

  const errors = state?.success === false ? state.errors : {}

  return (
    <form
      id="formulario"
      action={action}
      className="rounded-[var(--radius-card)] bg-white p-8 shadow-card space-y-5"
      noValidate
    >
      <div className="space-y-1">
        <h3 className="font-sans font-semibold text-azul-profundo text-xl">
          Charla informativa gratuita y virtual
        </h3>
        <p className="font-serif text-sm text-azul-profundo">
          Sin costo, sin experiencia previa. Descubre qué es la Meditación Trascendental
          y cómo puede transformar tu vida.
        </p>
      </div>

      <Field label="Nombre completo *" name="name" type="text"
             placeholder="Tu nombre completo" error={errors?.name?.[0]} autoComplete="name" />
      <Field label="Correo electrónico *" name="email" type="email"
             placeholder="tu@correo.com" error={errors?.email?.[0]} autoComplete="email" />
      <Field label="Teléfono / WhatsApp *" name="phone" type="tel"
             placeholder="+57 300 000 0000" error={errors?.phone?.[0]} autoComplete="tel" />
      <Field label="Ciudad (opcional)" name="city" type="text"
             placeholder="Bogotá, Medellín…" autoComplete="address-level2" />

      <div className="space-y-1">
        <label htmlFor="message" className="block text-sm font-sans font-medium text-azul-profundo">
          Mensaje o consulta (opcional)
        </label>
        <textarea
          id="message" name="message" rows={3}
          placeholder="¿Tienes alguna pregunta o comentario?"
          className="w-full rounded-lg border border-azul-claro/50 px-4 py-2.5 text-sm font-sans
                     text-azul-profundo placeholder:text-azul-profundo/35
                     focus:outline-none focus:ring-2 focus:ring-azul-claro resize-none transition"
        />
      </div>

      {/* Habeas data — Ley 1581 Colombia */}
      <div className="flex items-start gap-3">
        <input type="checkbox" id="consent" name="consent"
               className="mt-1 h-4 w-4 rounded border-azul-claro/60 accent-dorado cursor-pointer" />
        <label htmlFor="consent" className="text-xs font-sans text-azul-profundo cursor-pointer">
          Acepto el tratamiento de mis datos personales conforme a la Ley 1581 de 2012
          (habeas data). La Fundación Maharishi de Colombia los usará únicamente para
          contactarme sobre esta charla y actividades relacionadas.
        </label>
      </div>
      {errors?.consent && (
        <p className="text-xs text-red-600">{errors.consent[0]}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full bg-dorado text-azul-profundo font-sans font-semibold text-base
                   px-7 py-3.5 rounded-[8px] transition-all duration-200
                   hover:brightness-95 disabled:opacity-60 disabled:cursor-not-allowed
                   flex items-center justify-center gap-2"
      >
        {pending ? (
          <>
            <span className="w-4 h-4 rounded-full border-2 border-azul-profundo/30 border-t-azul-profundo animate-spin" />
            Enviando…
          </>
        ) : (
          'Reservar mi lugar'
        )}
      </button>
    </form>
  )
}

function Field({
  label, error, ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string }) {
  return (
    <div className="space-y-1">
      <label htmlFor={String(props.name)} className="block text-sm font-sans font-medium text-azul-profundo">
        {label}
      </label>
      <input
        id={String(props.name)}
        {...props}
        className="w-full rounded-lg border border-azul-claro/50 px-4 py-2.5 text-sm font-sans
                   text-azul-profundo placeholder:text-azul-profundo/35
                   focus:outline-none focus:ring-2 focus:ring-azul-claro transition"
        aria-invalid={!!error}
        aria-describedby={error ? `${String(props.name)}-error` : undefined}
      />
      {error && <p id={`${String(props.name)}-error`} className="text-xs text-red-600">{error}</p>}
    </div>
  )
}
