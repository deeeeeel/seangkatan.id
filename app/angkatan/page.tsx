// File: app/angkatan/page.tsx
// Versi DUMMY LENGKAP untuk demo. Tidak ada koneksi ke Supabase.

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Camera, MessageSquare, Users as UsersIcon, PlayCircle, Instagram, Twitter, Globe } from 'lucide-react';

// =================================================================
// DATA DUMMY UNTUK DEMO
// =================================================================

const dummyStudents = [
  // Baris 1
  { id: '1', name: 'Amanda Salsabila', class: 'XII IPA 1', img: '/images/profiles/p1.jpg', nickname: 'Si Paling Rajin' },
  { id: '2', name: 'Budi Santoso', class: 'XII IPA 2', img: '/images/profiles/p2.jpg', nickname: 'Ketua Kelas' },
  { id: '3', name: 'Citra Lestari', class: 'XII IPS 3', img: '/images/profiles/p3.jpg', nickname: 'Anak OSIS' },
  { id: '4', name: 'Fajar Nugraha', class: 'XII TKJ 2', img: '/images/profiles/p4.jpg', nickname: 'Jago Ngoding' },
  { id: '5', name: 'Rina Amelia', class: 'XII Bahasa', img: '/images/profiles/p5.jpg', nickname: 'Puitis Abis' },
  // Baris 2
  { id: '6', name: 'Kevin Sanjaya', class: 'XII IPA 2', img: '/images/profiles/p6.jpg', nickname: 'Atlet Basket' },
  { id: '7', name: 'Alya Putri', class: 'XII IPS 1', img: '/images/profiles/p7.jpg', nickname: 'Bendahara Galak' },
  { id: '8', name: 'Rian Ardiansyah', class: 'XII IPA 1', img: '/images/profiles/p8.jpg', nickname: 'Si Paling Update' },
  { id: '9', name: 'Dewi Sartika', class: 'XII IPS 1', img: '/images/profiles/p9.jpg', nickname: 'K-Popers Garis Keras' },
  { id: '10', name: 'Bayu Dirgantara', class: 'XII IPA 3', img: '/images/profiles/p10.jpg', nickname: 'Raja Telat' },
  // Baris 3
  { id: '11', name: 'Sari Wangi', class: 'XII Bahasa', img: '/images/profiles/p11.jpg', nickname: 'Pecinta Senja' },
  { id: '12', name: 'Joko Susilo', class: 'XII TKJ 1', img: '/images/profiles/p12.jpg', nickname: 'Gamers Sejati' },
  { id: '13', name: 'Putri Ayu', class: 'XII IPA 3', img: '/images/profiles/p13.jpg', nickname: 'Selebgram Sekolah' },
  { id: '14', name: 'Agus Setiawan', class: 'XII IPS 2', img: '/images/profiles/p14.jpg', nickname: 'Anak Band' },
  { id: '15', name: 'Lia Karmila', class: 'XII IPA 1', img: '/images/profiles/p15.jpg', nickname: 'Si Kutu Buku' },
  // Baris 4
  { id: '16', name: 'Dodi Irawan', class: 'XII IPA 2', img: '/images/profiles/p16.jpg', nickname: 'Tukang Tidur' },
  { id: '17', name: 'Eka Putri', class: 'XII IPS 3', img: '/images/profiles/p17.jpg', nickname: 'Model Majalah Dinding' },
  { id: '18', name: 'Guntur Perkasa', class: 'XII TKJ 2', img: '/images/profiles/p18.jpg', nickname: 'Si Paling Kuat' },
  { id: '19', name: 'Hesti Wulandari', class: 'XII Bahasa', img: '/images/profiles/p19.jpg', nickname: 'Jago Debat' },
  { id: '20', name: 'Indra Gunawan', class: 'XII IPA 3', img: '/images/profiles/p20.jpg', nickname: 'Si Paling Santuy' },
  // Baris 5
  { id: '21', name: 'Jasmine Aulia', class: 'XII IPS 1', img: '/images/profiles/p21.jpg', nickname: 'Ratu Drama Korea' },
  { id: '22', name: 'Kurniawan', class: 'XII TKJ 1', img: '/images/profiles/p22.jpg', nickname: 'Ahli Komputer' },
  { id: '23', name: 'Linda Puspita', class: 'XII IPA 1', img: '/images/profiles/p23.jpg', nickname: 'Si Paling Ceria' },
  { id: '24', name: 'Muhammad Rizky', class: 'XII IPS 2', img: '/images/profiles/p24.jpg', nickname: 'Kapten Futsal' },
  { id: '25', name: 'Nadia Utami', class: 'XII Bahasa', img: '/images/profiles/p25.jpg', nickname: 'Penyiar Radio Sekolah' },
  // Baris 6
  { id: '26', name: 'Oscar Wijaya', class: 'XII IPA 2', img: '/images/profiles/p26.jpg', nickname: 'Si Paling Rapi' },
  { id: '27', name: 'Putri Lestari', class: 'XII IPS 3', img: '/images/profiles/p27.jpg', nickname: 'Anak Teater' },
  { id: '28', name: 'Qodir Jaelani', class: 'XII TKJ 2', img: '/images/profiles/p28.jpg', nickname: 'Si Paling Misterius' },
  { id: '29', name: 'Rahmat Hidayat', class: 'XII IPA 3', img: '/images/profiles/p29.jpg', nickname: 'Paling Sering Nanya' },
  { id: '30', name: 'Siti Nurhaliza', class: 'XII IPS 1', img: '/images/profiles/p30.jpg', nickname: 'Sekretaris Abadi' },
];

const dummyGalleryImages = [
    '/images/angkatan/a1.jpg',
    '/images/angkatan/a2.jpg',
    '/images/angkatan/a3.jpg',
    '/images/angkatan/a4.jpg',
    '/images/angkatan/a5.jpg',
    '/images/angkatan/a6.jpg',
    '/images/angkatan/a7.jpg',
    '/images/angkatan/a8.jpg',
    '/images/angkatan/a9.jpg',
    '/images/angkatan/a10.jpg',
];

const dummyMessages = [
    { user: 'Amanda', text: 'Guys, gak kerasa ya udah mau lulus aja. Bakal kangen banget sama suasana kelas & keisengan kita semua! 😭', img: '/images/profiles/p1.jpg', align: 'left' },
    { user: 'Budi', text: 'Iya, Man! Apalagi sama momen nyontek massal pas ulangan Bu Tuti. 😂 Jangan lupain aku ya!', img: '/images/profiles/p2.jpg', align: 'right' },
    { user: 'Citra', text: 'Sukses terus buat kita semua! Nanti kita reunian jangan wacana doang yaaa. Semangat!', img: '/images/profiles/p3.jpg', align: 'left' },
    { user: 'Fajar', text: 'Siap! Pokoknya harus jadi reuniannya!', img: '/images/profiles/p4.jpg', align: 'right' },
];

// =================================================================
// KOMPONEN-KOMPONEN HALAMAN
// =================================================================

const StudentCard = ({ student }: { student: typeof dummyStudents[0] }) => (
  <Link href={`/angkatan/${student.id}`} className="group block text-center bg-white p-4 rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:!scale-105">
    <img src={student.img} alt={`Foto ${student.name}`} className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-slate-200 group-hover:border-indigo-300 transition-colors" />
    <p className="font-bold text-slate-800 truncate">{student.name}</p>
    <p className="text-sm text-slate-500">{student.class}</p>
    <p className="text-xs text-indigo-600 font-semibold bg-indigo-100 rounded-full px-2 py-1 mt-2 inline-block">{student.nickname}</p>
    <div className="flex justify-center space-x-3 mt-3 text-slate-400">
        <Instagram className="w-4 h-4 group-hover:text-pink-500 transition-colors"/>
        <Twitter className="w-4 h-4 group-hover:text-sky-500 transition-colors"/>
        <Globe className="w-4 h-4 group-hover:text-green-500 transition-colors"/>
    </div>
  </Link>
);

const Footer = () => (
    <footer className="bg-white mt-16">
        <div className="container mx-auto px-6 py-8 text-center text-slate-500">
            <p>&copy; {new Date().getFullYear()} Seangkatan.id. Semua Hak Cipta Dilindungi.</p>
        </div>
    </footer>
);

const BentoCard = ({ images, className }: { images: string[], className?: string }) => {
    const [activeImageIndex, setActiveImageIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setActiveImageIndex(prev => (prev + 1) % images.length);
        }, 3000); // Ganti gambar setiap 3 detik

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className={`rounded-2xl overflow-hidden group relative shadow-lg ${className}`}>
            {images.map((src, index) => (
                <img 
                    key={src} 
                    src={src} 
                    className={`w-full h-full object-cover absolute transition-opacity duration-1000 ease-in-out ${activeImageIndex === index ? 'opacity-100' : 'opacity-0'}`} 
                />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
    );
};

export default function AngkatanPage() {
  const [visibleMessages, setVisibleMessages] = useState(0);

  useEffect(() => {
    const messageInterval = setInterval(() => {
        setVisibleMessages(prev => (prev >= dummyMessages.length + 1 ? 0 : prev + 1));
    }, 2000);

    return () => {
        clearInterval(messageInterval);
    };
  }, []);

  return (
    <div className="bg-slate-100 min-h-screen">
      <style jsx global>{`
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-up {
          animation: scroll-up 60s linear infinite;
        }
      `}</style>
      <header className="bg-white/80 backdrop-blur-lg shadow-md sticky top-0 z-20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-3xl font-extrabold text-slate-900">Angkatan 2025</h1>
            <nav className="hidden md:flex items-center space-x-8">
                <a href="#galeri" className="font-semibold text-slate-600 hover:text-indigo-600 transition">Galeri</a>
                <a href="#wall" className="font-semibold text-slate-600 hover:text-indigo-600 transition">Wall</a>
                <a href="#anggota" className="font-semibold text-slate-600 hover:text-indigo-600 transition">Anggota</a>
            </nav>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Galeri Section */}
        <section id="galeri" className="mb-20">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center flex items-center justify-center gap-3"><Camera className="w-8 h-8"/> Galeri Momen Terbaik</h2>
            <div className="grid grid-cols-4 grid-rows-3 gap-4 h-[800px]">
                <BentoCard images={[dummyGalleryImages[0], dummyGalleryImages[5]]} className="col-span-2 row-span-2" />
                <BentoCard images={[dummyGalleryImages[1]]} className="col-span-1 row-span-1" />
                <BentoCard images={[dummyGalleryImages[4]]} className="col-span-1 row-span-2" />
                <BentoCard images={[dummyGalleryImages[8]]} className="col-span-1 row-span-2" />
                <BentoCard images={[dummyGalleryImages[3]]} className="col-span-2 row-span-1" />
                <BentoCard images={[dummyGalleryImages[6]]} className="col-span-1 row-span-1" />
                <BentoCard images={[dummyGalleryImages[7], dummyGalleryImages[9]]} className="col-span-2 row-span-1" />
                <BentoCard images={[dummyGalleryImages[2]]} className="col-span-1 row-span-1" />
            </div>
        </section>

        {/* Wall Section */}
        <section id="wall" className="mb-20">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center flex items-center justify-center gap-3"><MessageSquare className="w-8 h-8"/> Wall Angkatan</h2>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
                <div className="space-y-6 h-96 overflow-y-auto p-4 flex flex-col justify-end">
                    {dummyMessages.slice(0, visibleMessages).map((msg, index) => (
                        <div key={index} className={`flex items-start gap-3 ${msg.align === 'right' ? 'justify-end' : ''} transition-opacity duration-500`}>
                            {msg.align === 'left' && <img src={msg.img} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow" alt={`Profil ${msg.user}`}/>}
                            <div className={`flex-1 ${msg.align === 'right' ? 'text-right' : ''}`}>
                                <p className="font-bold text-slate-800 text-sm">{msg.user}</p>
                                <div className={`mt-1 inline-block text-left p-3 rounded-xl text-sm ${msg.align === 'right' ? 'bg-indigo-500 text-white rounded-br-none' : 'bg-slate-100 rounded-bl-none'}`}>
                                    {msg.text}
                                </div>
                            </div>
                            {msg.align === 'right' && <img src={msg.img} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow" alt={`Profil ${msg.user}`}/>}
                        </div>
                    ))}
                    {visibleMessages < dummyMessages.length && (
                        <div className="flex items-start gap-3">
                            <img src={dummyMessages[visibleMessages].img} className="w-10 h-10 rounded-full object-cover border-2 border-white shadow" alt="Profil typing"/>
                            <div className="flex-1">
                                <p className="font-bold text-slate-800 text-sm">{dummyMessages[visibleMessages].user}</p>
                                <div className="mt-1 bg-slate-100 p-3 rounded-lg rounded-tl-none inline-flex items-center space-x-1.5">
                                    <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                                    <span style={{animationDelay: '0.1s'}} className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                                    <span style={{animationDelay: '0.2s'}} className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                 <div className="mt-6 pt-6 border-t flex items-center gap-2">
                  <input type="text" placeholder="Tulis pesan..." className="flex-1 p-3 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  <button className="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition-colors"><PlayCircle/></button>
                </div>
            </div>
        </section>

        {/* Anggota Section */}
        <section id="anggota">
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center flex items-center justify-center gap-3"><UsersIcon className="w-8 h-8"/> Anggota Angkatan</h2>
            <div className="max-w-md mx-auto mb-8">
                <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input type="text" placeholder="Cari nama anggota..." className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" />
                </div>
            </div>
            <div className="h-[50rem] overflow-hidden relative">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 animate-scroll-up hover:[animation-play-state:paused]">
                    {/* Duplikasi data untuk loop yang mulus */}
                    {[...dummyStudents, ...dummyStudents].map((student, index) => (
                        <StudentCard key={`${student.id}-${index}`} student={student} />
                    ))}
                </div>
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-100 to-transparent"></div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
