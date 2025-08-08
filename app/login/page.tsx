// File: app/login/page.tsx
// Menggunakan fungsi createClient() yang baru dan logika redirect yang sudah diperbaiki.

'use client';

import { useState, type ComponentProps } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// Impor fungsi, bukan variabel
import { createClient } from '../../lib/supabaseClient'; 
import { LogIn, Loader2, ArrowLeft } from 'lucide-react';

// Komponen Input (tidak berubah)
function Input(props: ComponentProps<'input'>) {
  return (
    <input
      {...props}
      className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500
                 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200"
    />
  );
}

// Komponen Tombol (tidak berubah)
function Button(props: ComponentProps<'button'>) {
  return (
    <button
      {...props}
      className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-indigo-400 disabled:cursor-not-allowed"
    />
  );
}

export default function LoginPage() {
  const router = useRouter();
  // Panggil fungsi createClient() untuk membuat instance supabase
  const supabase = createClient(); 
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      // Refresh state server untuk memastikan middleware tahu kita sudah login
      router.refresh();
      // Arahkan ke dashboard
      router.push('/dashboard');

    } catch (err: any) {
      setError(err.message || 'Terjadi kesalahan. Periksa kembali email dan password Anda.');
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-800">Seangkatan.<span className="text-indigo-600">id</span></h1>
            <p className="text-slate-500 mt-2">Silakan masuk untuk melanjutkan</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="text-sm font-medium text-slate-700">Alamat Email</label>
              <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="anda@email.com" disabled={loading}/>
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium text-slate-700">Password</label>
              <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" disabled={loading}/>
            </div>

            <div className="h-5 text-center text-sm">
                {error && <p className="text-red-500">{error}</p>}
            </div>

            <Button type="submit" disabled={loading}>
              {loading ? <Loader2 className="animate-spin" /> : <div className="flex items-center justify-center"><LogIn className="w-5 h-5 mr-2" />Masuk</div>}
            </Button>
          </form>

          <div className="text-center mt-6">
            <Link href="/lupa-password" className="text-sm text-indigo-600 hover:text-indigo-500">Lupa Password?</Link>
          </div>
        </div>
        
        <div className="text-center mt-6">
            <Link href="/" className="text-sm text-slate-600 hover:text-indigo-500 flex items-center justify-center"><ArrowLeft className="w-4 h-4 mr-1" />Kembali ke Beranda</Link>
        </div>
      </div>
    </div>
  );
}
