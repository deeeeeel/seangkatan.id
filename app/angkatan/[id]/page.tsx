// File: app/angkatan/[id]/page.tsx
// Halaman ini menampilkan profil detail dari satu siswa dengan styling baru.

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Instagram, Twitter, Globe, Camera, PlayCircle, Heart, X as XIcon } from 'lucide-react';

// Data dummy untuk satu siswa, nanti akan kita ambil dari Supabase berdasarkan ID
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

// Komponen Tombol Like
const LikeButton = ({ initialLikes }: { initialLikes: number }) => {
    const [likes, setLikes] = useState(initialLikes);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        if (isLiked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setIsLiked(!isLiked);
    };

    return (
        <button onClick={handleLike} className={`flex items-center gap-1 text-xs mt-2 transition-colors ${isLiked ? 'text-pink-500' : 'text-slate-400 hover:text-pink-500'}`}>
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            <span>{likes}</span>
        </button>
    );
};

// Komponen Modal Galeri
const GalleryModal = ({ imageUrl, onClose }: { imageUrl: string, onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={onClose}>
        <div className="bg-white rounded-2xl w-full max-w-4xl h-[90vh] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="relative flex-1">
                <img src={imageUrl} alt="Tampilan penuh" className="w-full h-full object-contain rounded-t-2xl"/>
                <button onClick={onClose} className="absolute top-4 right-4 bg-black/50 text-white rounded-full p-2 hover:bg-black/70">
                    <XIcon className="w-6 h-6" />
                </button>
            </div>
            <div className="p-6 border-t">
                <h3 className="font-bold text-lg mb-4">Komentar</h3>
                <div className="text-center text-slate-500">Fitur komentar akan segera hadir!</div>
            </div>
        </div>
    </div>
);

const Footer = () => (
    <footer className="bg-white mt-16">
        <div className="container mx-auto px-6 py-8 text-center text-slate-500">
            <p>&copy; {new Date().getFullYear()} Seangkatan.id. Semua Hak Cipta Dilindungi.</p>
        </div>
    </footer>
);

export default function ProfileDetailPage({ params: _params }: { params: { id: string } }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };
  
  return (
    <>
      {/* Definisi animasi marquee */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>

      {isModalOpen && selectedImage && <GalleryModal imageUrl={selectedImage} onClose={closeModal} />}
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
          {/* --- HERO SECTION REVISI --- */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="relative w-full h-[450px] group flex items-center justify-center">
                {/* Foto Latar 2 */}
                <div onClick={() => openModal(studentDetail.gallery[1]?.url || studentDetail.img)} className="absolute bg-white p-2 rounded-2xl shadow-lg transition-transform duration-500 group-hover:-translate-x-16 group-hover:-rotate-12 cursor-pointer" style={{ transform: 'rotate(-8deg)' }}>
                    <img src={studentDetail.gallery[1]?.url || studentDetail.img} alt="Foto latar 2" className="w-64 h-80 object-cover rounded-xl"/>
                </div>
                {/* Foto Latar 1 */}
                <div onClick={() => openModal(studentDetail.gallery[0]?.url || studentDetail.img)} className="absolute bg-white p-2 rounded-2xl shadow-lg transition-transform duration-500 group-hover:translate-x-16 group-hover:rotate-12 cursor-pointer" style={{ transform: 'rotate(5deg)' }}>
                    <img src={studentDetail.gallery[0]?.url || studentDetail.img} alt="Foto latar 1" className="w-64 h-80 object-cover rounded-xl"/>
                </div>
                {/* Foto Utama */}
                <div onClick={() => openModal(studentDetail.img)} className="relative bg-white p-3 rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-110 z-10 cursor-pointer">
                    <img src={studentDetail.img} alt={`Foto ${studentDetail.name}`} className="w-72 h-96 object-cover rounded-xl"/>
                </div>
            </div>
            <div className="text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-800">{studentDetail.name}</h1>
                <p className="text-indigo-600 font-semibold text-lg mt-1">{studentDetail.class}</p>
                <p className="text-slate-600 italic mt-6 text-xl max-w-md mx-auto lg:mx-0">&quot;{studentDetail.quote}&quot;</p>
                <div className="flex justify-center lg:justify-start space-x-5 mt-6 border-t pt-5 max-w-md mx-auto lg:mx-0">
                    <a href="#" className="text-slate-400 hover:text-pink-500" aria-label="Instagram"><Instagram/></a>
                    <a href="#" className="text-slate-400 hover:text-sky-500" aria-label="Twitter"><Twitter/></a>
                    <a href="#" className="text-slate-400 hover:text-green-500" aria-label="Website"><Globe/></a>
                </div>
                {/* Running Text Testimoni */}
                <div className="mt-6 pt-5 border-t max-w-md mx-auto lg:mx-0">
                    <div className="relative w-full overflow-hidden bg-slate-200/50 rounded-full p-2">
                        <div className="flex animate-marquee">
                            {studentDetail.testimonials.map((t, i) => (
                                <span key={i} className="mx-4 text-sm text-slate-600 flex-shrink-0">
                                    <span className="font-semibold text-slate-800">{t.author}:</span> &quot;{t.text}&quot;
                                </span>
                            ))}
                            {/* Duplikasi untuk loop yang mulus */}
                            {studentDetail.testimonials.map((t, i) => (
                                <span key={`dup-${i}`} className="mx-4 text-sm text-slate-600 flex-shrink-0">
                                    <span className="font-semibold text-slate-800">{t.author}:</span> &quot;{t.text}&quot;
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3"><Camera className="w-6 h-6 text-indigo-500"/> Galeri Kenangan</h2>
              <div className="grid grid-cols-4 grid-rows-4 gap-4 h-[600px]">
                <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden group relative cursor-pointer" onClick={() => openModal(studentDetail.gallery[0].url)}>
                    <img src={studentDetail.gallery[0].url} alt="Galeri 1" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden group relative cursor-pointer" onClick={() => openModal(studentDetail.gallery[1].url)}>
                    <img src={studentDetail.gallery[1].url} alt="Galeri 2" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden group relative cursor-pointer" onClick={() => openModal(studentDetail.gallery[2].url)}>
                    <img src={studentDetail.gallery[2].url} alt="Galeri 3" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden group relative cursor-pointer" onClick={() => openModal(studentDetail.gallery[3].url)}>
                    <img src={studentDetail.gallery[3].url} alt="Galeri 4" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden group relative cursor-pointer" onClick={() => openModal(studentDetail.gallery[4].url)}>
                    <img src={studentDetail.gallery[4].url} alt="Galeri 5" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden group relative cursor-pointer" onClick={() => openModal(studentDetail.gallery[5].url)}>
                    <img src={studentDetail.gallery[5].url} alt="Galeri 6" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden group relative cursor-pointer" onClick={() => openModal(studentDetail.gallery[6].url)}>
                    <img src={studentDetail.gallery[6].url} alt="Galeri 7" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden group relative cursor-pointer" onClick={() => openModal(studentDetail.gallery[7].url)}>
                    <img src={studentDetail.gallery[7].url} alt="Galeri 8" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden group relative cursor-pointer" onClick={() => openModal(studentDetail.gallery[8].url)}>
                    <img src={studentDetail.gallery[8].url} alt="Galeri 9" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                </div>
                 <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden group relative cursor-pointer" onClick={() => openModal(studentDetail.gallery[9].url)}>
                    <img src={studentDetail.gallery[9].url} alt="Galeri 10" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 bg-white rounded-2xl shadow-lg flex flex-col h-[600px]">
              <h2 className="text-2xl font-bold text-slate-800 p-6 border-b">Tinggalkan Pesan</h2>
              <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                {studentDetail.messages.map((msg) => (
                  <div key={msg.id} className={`flex items-start gap-3 ${msg.align === 'sent' ? 'justify-end' : ''}`}>
                    {msg.align === 'received' && <img src={msg.img} className="w-10 h-10 rounded-full object-cover flex-shrink-0" alt={`Profil ${msg.user}`}/>}
                    <div className={`flex flex-col ${msg.align === 'sent' ? 'items-end' : 'items-start'}`}>
                        <p className="font-semibold text-slate-800 text-sm px-1">{msg.user}</p>
                        <div className={`mt-1 inline-block text-left p-3 rounded-xl text-sm ${msg.align === 'sent' ? 'bg-indigo-500 text-white rounded-br-none' : 'bg-slate-100 text-indigo-900 rounded-bl-none'}`}>
                            {msg.text}
                        </div>
                        <LikeButton initialLikes={msg.likes} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-slate-50 border-t rounded-b-2xl flex items-center gap-2">
                <input type="text" placeholder="Tulis pesan..." className="flex-1 p-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                <button className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition-colors" aria-label="Kirim pesan"><PlayCircle/></button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
