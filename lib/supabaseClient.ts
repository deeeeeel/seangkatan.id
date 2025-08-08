// File: lib/supabaseClient.ts
// Versi ini menggunakan @supabase/ssr untuk memastikan sesi konsisten.

import { createBrowserClient } from '@supabase/ssr';
import type { Database } from './database.types';

// Kita tidak lagi mengekspor klien secara langsung.
// Sebagai gantinya, kita mengekspor sebuah fungsi yang akan membuat klien di sisi browser.
export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
