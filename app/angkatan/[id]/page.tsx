// File: app/angkatan/[id]/page.tsx

import Link from 'next/link';
import { ArrowLeft, Instagram, Twitter, Globe, Camera, PlayCircle, Heart, X as XIcon } from 'lucide-react';
import ProfileContent from './ProfileContent';
// [REVISI] Impor 'notFound' untuk menangani kasus jika data tidak ditemukan.
import { notFound } from 'next/navigation';
// [REVISI] Impor Supabase client untuk sisi server. Asumsi path-nya ada di '@/utils/supabase/server'.
import { createClient } from '@/utils/supabase/server';

// Interface untuk props halaman, sudah benar.
interface ProfilePageProps {
  params: {
    id: string;
  };
}

// [REVISI] Fungsi async untuk mengambil data detail siswa dari Supabase.
async function getStudentDetail(id: string) {
  const supabase = createClient();

  // Ambil data dari tabel 'profiles' (sesuaikan nama tabel jika berbeda)
  // dengan id yang sesuai. .single() akan mengembalikan 1 baris atau error.
  const { data: studentDetail, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', id)
    .single();

  // Jika terjadi error saat query (selain data tidak ditemukan), log di server.
  if (error) {
    console.error('Database Error:', error.message);
    // Anda bisa memilih untuk melempar error atau menampilkan halaman notFound.
    notFound();
  }

  // Jika tidak ada data yang ditemukan untuk id tersebut, tampilkan halaman 404.
  if (!studentDetail) {
    notFound();
  }

  return studentDetail;
}

const Footer = () => (
  <footer className="bg-white mt-16">
    <div className="container mx-auto px-6 py-8 text-center text-slate-500">
      <p>&copy; {new Date().getFullYear()} Seangkatan.id. Semua Hak Cipta Dilindungi.</p>
    </div>
  </footer>
);

export default async function ProfileDetailPage({ params }: ProfilePageProps) {
  // [REVISI] Panggil fungsi untuk mengambil data secara dinamis berdasarkan params.id
  // Objek statis 'studentDetail' yang lama sudah dihapus.
  const studentDetail = await getStudentDetail(params.id);

  return (
    <div className="bg-slate-100 min-h-screen">
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/angkatan" className="inline-flex items-center gap-2 text-slate-600 hover:text-indigo-600">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold">Kembali ke Angkatan</span>
          </Link>
          <div className="text-right">
            {/* Data nama dan kelas sekarang berasal dari database */}
            <h1 className="text-2xl font-bold text-slate-800">{studentDetail.name}</h1>
            <p className="text-slate-500">{studentDetail.class}</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* ProfileContent sekarang menerima data dinamis */}
        <ProfileContent studentDetail={studentDetail} />
      </main>
      <Footer />
    </div>
  );
}