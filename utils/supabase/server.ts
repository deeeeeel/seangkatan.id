// File: utils/supabase/server.ts

import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

export function createClient() {
  const cookieStore = cookies()

  // Buat Supabase client untuk Server Components, Route Handlers, dan Server Actions.
  // Kredensial diambil dari environment variables yang akan Anda set di Vercel.
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch (error) {
            // Cookie 'set' dapat gagal pada Server Actions.
            // Jika ini terjadi, Anda mungkin perlu menangani otentikasi secara manual.
            // Lihat: https://github.com/vercel/next.js/issues/49294
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch (error) {
            // Cookie 'set' dengan value kosong (untuk remove) juga bisa gagal.
          }
        },
      },
    }
  )
}