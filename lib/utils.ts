/**
 * Utilidades puras — sin side effects, sin imports de React.
 */

/** Formatea una fecha ISO en español */
export function formatDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('es-CO', {
    year: 'numeric', month: 'long', day: 'numeric',
  })
}

/** Genera un enlace de WhatsApp con mensaje opcional */
export function whatsappLink(number: string, message = ''): string {
  const encoded = encodeURIComponent(message)
  return `https://wa.me/${number}${encoded ? `?text=${encoded}` : ''}`
}

/** Genera URL de thumbnail de YouTube */
export function ytThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
}

/** Combina clases condicionalmente (alternativa mínima a clsx) */
export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}
