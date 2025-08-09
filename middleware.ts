import { createMiddlewareClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const response = NextResponse.next({
    request: { headers: request.headers },
  });

  const supabase = createMiddlewareClient({ req: request, res: response });

  // Cek sesi user
  const { data: { session } } = await supabase.auth.getSession();

  // Redirect jika belum login
  if (!session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return response;
}

// Hanya jalankan middleware di halaman proteksi
export const config = {
  matcher: ['/dashboard/:path*', '/angkatan/:path*'],
};