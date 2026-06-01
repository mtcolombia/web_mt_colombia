import { getSession } from '@/lib/session'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { logout } from '@/app/actions/auth'
import { LayoutDashboard, FileText, Quote, Mail, LogOut } from 'lucide-react'

export const metadata = { title: 'Admin · FMC', robots: 'noindex' }

const NAV = [
  { href: '/admin',             label: 'Dashboard',    icon: LayoutDashboard },
  { href: '/admin/blog',        label: 'Blog',         icon: FileText },
  { href: '/admin/testimonios', label: 'Testimonios',  icon: Quote },
  { href: '/admin/contactos',   label: 'Contactos',    icon: Mail },
]

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession()
  if (!session.isLoggedIn) redirect('/admin/login')

  return (
    <div className="min-h-screen bg-beige flex">
      {/* Sidebar */}
      <aside className="w-56 shrink-0 bg-azul-profundo text-white flex flex-col">
        <div className="px-5 py-5 border-b border-white/10">
          <p className="text-[10px] font-sans font-bold tracking-[0.15em] text-azul-claro/80 uppercase">
            FMC Admin
          </p>
          <p className="text-xs font-sans text-white/50 mt-0.5">{session.username}</p>
        </div>
        <nav className="flex-1 py-4 flex flex-col gap-0.5 px-2">
          {NAV.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-sans
                         text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Icon size={16} />
              {label}
            </Link>
          ))}
        </nav>
        <form action={logout} className="p-3 border-t border-white/10">
          <button
            type="submit"
            className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-sans
                       text-white/50 hover:text-white hover:bg-white/10 transition-colors"
          >
            <LogOut size={16} />
            Cerrar sesión
          </button>
        </form>
      </aside>

      {/* Main */}
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  )
}
