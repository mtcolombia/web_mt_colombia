'use client'

import dynamic from 'next/dynamic'
import { type Teacher } from '@/lib/schemas'

const TeachersMapDynamic = dynamic(
  () => import('./TeachersMap').then((m) => m.TeachersMap),
  {
    ssr: false,
    loading: () => (
      <div
        className="w-full rounded-[20px] bg-azul-profundo/5 border border-azul-profundo/10 animate-pulse"
        style={{ height: '480px' }}
      />
    ),
  },
)

export function TeachersMapClient({ teachers }: { teachers: Teacher[] }) {
  return <TeachersMapDynamic teachers={teachers} />
}
