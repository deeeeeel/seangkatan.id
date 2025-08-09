// File: app/angkatan/[id]/page.tsx

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import ProfileContent from './ProfileContent';
import { notFound } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

// [FIX] Definisi tipe props yang benar untuk halaman Next.js
interface ProfilePageProps {
  params: {
    id: string;
  };
}

async function getStudentDetail(id: string) {
  const supabase = createClient();
  const { data: studentDetail, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !studentDetail) {
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
            <h1 className="text-2xl font-bold text-slate-800">{studentDetail.name}</h1>
            <p className="text-slate-500">{studentDetail.class}</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <ProfileContent studentDetail={studentDetail} />
      </main>
      <Footer />
    </div>
  );
}