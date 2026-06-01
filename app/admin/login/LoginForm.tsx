'use client'

import { useActionState } from 'react'
import { login } from '@/app/actions/auth'

export function LoginForm() {
  const [error, action, pending] = useActionState(login, null)

  return (
    <form action={action} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-sans font-medium text-azul-profundo/70">Usuario</label>
        <input
          name="username"
          type="text"
          required
          autoComplete="username"
          className="border border-azul-profundo/15 rounded-lg px-3 py-2.5 text-sm font-sans
                     focus:outline-none focus:ring-2 focus:ring-azul-claro/40 focus:border-azul-claro"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-sans font-medium text-azul-profundo/70">Contraseña</label>
        <input
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="border border-azul-profundo/15 rounded-lg px-3 py-2.5 text-sm font-sans
                     focus:outline-none focus:ring-2 focus:ring-azul-claro/40 focus:border-azul-claro"
        />
      </div>
      {error && (
        <p className="text-xs font-sans text-red-600 bg-red-50 rounded-lg px-3 py-2">{error}</p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="mt-2 bg-azul-claro text-white font-sans font-semibold text-sm rounded-lg
                   py-2.5 transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {pending ? 'Verificando…' : 'Entrar'}
      </button>
    </form>
  )
}
