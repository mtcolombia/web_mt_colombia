import { getSession } from '@/lib/session'
import { redirect } from 'next/navigation'
import { LoginForm } from './LoginForm'

export const metadata = { title: 'Admin · Acceso', robots: 'noindex' }

export default async function LoginPage() {
  const session = await getSession()
  if (session.isLoggedIn) redirect('/admin')

  return (
    <div className="min-h-screen bg-beige flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-card p-8 w-full max-w-sm">
        <div className="text-center mb-8">
          <p className="text-xs font-sans font-semibold tracking-[0.15em] text-azul-claro uppercase mb-2">
            FMC Admin
          </p>
          <h1 className="text-2xl text-azul-profundo">Acceso al panel</h1>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
