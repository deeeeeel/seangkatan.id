// File: app/angkatan/[id]/page.tsx

// Server Component (halaman utama) yang mengambil data dan merender komponen lain
import Link from 'next/link';
import { ArrowLeft, Instagram, Twitter, Globe, Camera, PlayCircle, Heart, X as XIcon } from 'lucide-react';
import ProfileContent from './ProfileContent';

// Data dummy untuk satu siswa
const studentDetail = {
  id: '1',
  name: 'Amanda Salsabila',
  class: 'XII IPA 1',
  img: '/images/profiles/p1.jpg',
  quote: 'Masa SMA adalah bab terbaik dalam buku kehidupanku, penuh dengan revisi dan sedikit tidur.',
  gallery: [
    { id: 1, url: '/images/angkatan/a1.jpg' },
    { id: 2, url: '/images/angkatan/a2.jpg' },
    { id: 3, url: '/images/angkatan/a3.jpg' },
    { id: 4, url: '/images/angkatan/a4.jpg' },
    { id: 5, url: '/images/angkatan/a5.jpg' },
    { id: 6, url: '/images/angkatan/a6.jpg' },
    { id: 7, url: '/images/angkatan/a7.jpg' },
    { id: 8, url: '/images/angkatan/a8.jpg' },
    { id: 9, url: '/images/angkatan/a9.jpg' },
    { id: 10, url: '/images/angkatan/a10.jpg' },
  ],
  messages: [
    { id: 1, user: 'Budi Santoso', text: 'Man, inget gak waktu kita dihukum lari keliling lapangan gara-gara telat upacara? Wkwk.', img: '/images/profiles/p2.jpg', align: 'received', likes: 15 },
    { id: 2, user: 'Amanda Salsabila', text: 'Hahaha inget banget! Malu-maluin tapi jadi kenangan lucu ya sekarang.', img: '/images/profiles/p1.jpg', align: 'sent', likes: 23 },
    { id: 3, user: 'Citra Lestari', text: 'Selamat ya Amanda udah jadi juara kelas! Traktirannya jangan lupa!', img: '/images/profiles/p3.jpg', align: 'received', likes: 42 },
  ],
  testimonials: [
    { author: 'Budi S.', text: 'Amanda tuh paling jago kimia, penyelamat pas ulangan!' },
    { author: 'Citra L.', text: 'Orangnya baik banget, selalu mau bantuin kalau ada yang kesusahan.' },
    { author: 'Fajar N.', text: 'Paling rajin di kelas, tapi kalau diajak nongkrong juga asik!' },
    { author: 'Rina A.', text: 'Kalau ada Amanda di kelompok, tugas pasti beres. The best!' },
    { author: 'Kevin S.', text: 'Jangan lupa bahagia ya, Man! Sukses terus buat ke depannya!' },
  ]
};

const Footer = () => (
  <footer className="bg-white mt-16">
    <div className="container mx-auto px-6 py-8 text-center text-slate-500">
      <p>&copy; {new Date().getFullYear()} Seangkatan.id. Semua Hak Cipta Dilindungi.</p>
    </div>
  </footer>
);

export default async function ProfileDetailPage({ params }: { params: { id: string } }) {
  // ✅ Contoh penggunaan params.id untuk fetching data di Server Component
  // const { id } = params;
  // const studentDetail = await getStudentDetail(id); // Misalnya, fungsi async untuk ambil data

  // Catatan: Jika ingin menggunakan animasi marquee, pindahkan @keyframes marquee ke file globals.css
  // Misalnya: app/globals.css
  /*
  @keyframes marquee {
    0% { transform: translateX(0%); }
    100% { transform: translateX(-50%); }
  }
  .animate-marquee {
    animation: marquee 40s linear infinite;
  }
  */

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
        {/* Konten utama yang interaktif dipindahkan ke Client Component */}
        <ProfileContent studentDetail={studentDetail} />
      </main>
      <Footer />
    </div>
  );
}