'use server'

import { redirect } from 'next/navigation'
import { getSession } from '@/lib/session'

export async function login(_prevState: string | null, formData: FormData): Promise<string | null> {
  const username = formData.get('username') as string
  const password = formData.get('password') as string

  const validUser = process.env.ADMIN_USERNAME
  const validPass = process.env.ADMIN_PASSWORD

  if (!validUser || !validPass) {
    return 'Variables de entorno ADMIN_USERNAME / ADMIN_PASSWORD no configuradas.'
  }

  // Comparación en tiempo constante para evitar timing attacks
  const { timingSafeEqual } = await import('crypto')
  const enc = (s: string) => Buffer.from(s.padEnd(64).slice(0, 64))
  const userMatch = timingSafeEqual(enc(username), enc(validUser))
  const passMatch = timingSafeEqual(enc(password), enc(validPass))

  if (!userMatch || !passMatch) {
    return 'Usuario o contraseña incorrectos.'
  }

  const session = await getSession()
  session.isLoggedIn = true
  session.username = username
  await session.save()

  redirect('/admin')
}

export async function logout(): Promise<void> {
  const session = await getSession()
  session.destroy()
  redirect('/admin/login')
}
