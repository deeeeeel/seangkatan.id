// File: app/page.tsx
'use client'; 

import { useState, useEffect } from 'react';
import { Menu, X, Award, Edit, Archive, Image as ImageIcon, Users, MessageSquare, Layout, Search, Shield, PlayCircle, Check, Plus, Minus, Settings, Cloud, Instagram, Twitter, Globe, Heart, Send } from 'lucide-react';

// =================================================================
// Komponen-komponen UI untuk Homepage
// =================================================================

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => setAtTop(window.pageYOffset <= 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${!atTop ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-slate-800">Seangkatan.<span className="text-indigo-600">id</span></a>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#fitur" className="text-slate-600 hover:text-indigo-600 transition">Fitur</a>
            <a href="#confess" className="text-slate-600 hover:text-indigo-600 transition">Confess</a>
            <a href="#chat-room" className="text-slate-600 hover:text-indigo-600 transition">Room Chat</a>
            <a href="#pengembangan" className="text-slate-600 hover:text-indigo-600 transition">Pengembangan</a>
            <a href="#harga" className="text-slate-600 hover:text-indigo-600 transition">Harga</a>
            <a href="#faq" className="text-slate-600 hover:text-indigo-600 transition">FAQ</a>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <a href="/angkatan" className="cta-button bg-white text-indigo-600 px-5 py-2.5 rounded-lg font-semibold border border-indigo-200 hover:bg-indigo-50">Cek Demo</a>
            <a href="#kontak" className="cta-button bg-indigo-600 text-white px-5 py-2.5 rounded-lg font-semibold">Hubungi Kami</a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-800">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg pb-4">
          <nav className="flex flex-col items-center space-y-4 pt-4">
            <a href="#fitur" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 hover:text-indigo-600 transition">Fitur</a>
            <a href="#confess" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 hover:text-indigo-600 transition">Confess</a>
            <a href="#chat-room" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 hover:text-indigo-600 transition">Room Chat</a>
            <a href="#pengembangan" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 hover:text-indigo-600 transition">Pengembangan</a>
            <a href="#harga" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 hover:text-indigo-600 transition">Harga</a>
            <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="text-slate-600 hover:text-indigo-600 transition">FAQ</a>
            <a href="/angkatan" onClick={() => setMobileMenuOpen(false)} className="cta-button bg-indigo-100 text-indigo-600 px-8 py-3 rounded-lg font-semibold w-4/5 text-center">Cek Demo</a>
            <a href="#kontak" onClick={() => setMobileMenuOpen(false)} className="cta-button bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold w-4/5 text-center">Hubungi Kami</a>
          </nav>
        </div>
      )}
    </header>
  );
};

const HeroSection = () => (
  <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
    <div className="absolute inset-0 bg-white"></div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight tracking-tighter">
            Abadikan Momen Sekolah Kalian dalam <span className="gradient-text">Buku Tahunan Digital</span> yang Anti-Boring!
          </h1>
          <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg text-slate-600">
            Seangkatan.id itu platform whitelabel yang bikin buku tahunan online kalian jadi interaktif, personal, dan pastinya keren banget buat sekolah mana pun (SD, SMP, SMA/SMK).
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a href="#harga" className="cta-button bg-indigo-600 text-white px-8 py-4 rounded-lg font-semibold text-lg">Cek Harga Kuy!</a>
            <a href="#fitur" className="cta-button bg-white text-slate-700 px-8 py-4 rounded-lg font-semibold border border-slate-300 hover:bg-slate-100 text-lg">Kepoin Fitur</a>
          </div>
        </div>
        <div className="hidden md:block">
          {/* Ilustrasi Buku Tahunan Digital Modern (Bento Grid) */}
          <div className="bento-grid-container">
            <img src="/images/homepage/hp1.jpg" alt="Ilustrasi buku tahunan digital modern" className="rounded-2xl shadow-lg object-cover w-full h-full col-span-2 row-span-2 transition-transform duration-500 hover:scale-105 hover:rotate-2" />
            <img src="/images/homepage/hp2.jpg" alt="Siswa belajar bersama" className="rounded-2xl shadow-lg object-cover w-full h-full col-span-2 transition-transform duration-500 hover:scale-105 hover:-rotate-1" />
            <img src="/images/homepage/hp3.jpg" alt="Kegiatan ekstrakurikuler" className="rounded-2xl shadow-lg object-cover w-full h-full col-span-1 transition-transform duration-500 hover:scale-105 hover:rotate-1" />
            <img src="/images/homepage/hp4.jpg" alt="Perayaan kelulusan" className="rounded-2xl shadow-lg object-cover w-full h-full col-span-1 transition-transform duration-500 hover:scale-105 hover:-rotate-2" />
            <img src="/images/homepage/hp5.jpg" alt="Momen di kelas" className="rounded-2xl shadow-lg object-cover w-full h-full col-span-2 transition-transform duration-500 hover:scale-105 hover:rotate-2" />
            <img src="/images/homepage/hp6.jpg" alt="Siswa di perpustakaan" className="rounded-2xl shadow-lg object-cover w-full h-full col-span-2 row-span-2 transition-transform duration-500 hover:scale-105 hover:-rotate-1" />
            <img src="/images/homepage/hp7.jpg" alt="Acara sekolah" className="rounded-2xl shadow-lg object-cover w-full h-full col-span-2 transition-transform duration-500 hover:scale-105 hover:rotate-1" />
            <img src="/images/homepage/hp8.jpg" alt="Olahraga di sekolah" className="rounded-2xl shadow-lg object-cover w-full h-full col-span-1 transition-transform duration-500 hover:scale-105 hover:-rotate-2" />
            <img src="/images/homepage/hp9.jpg" alt="Siswa berdiskusi" className="rounded-2xl shadow-lg object-cover w-full h-full col-span-1 transition-transform duration-500 hover:scale-105 hover:rotate-1" />
            <img src="/images/homepage/hp10.jpg" alt="Momen persahabatan" className="rounded-2xl shadow-lg object-cover w-full h-full col-span-2 transition-transform duration-500 hover:scale-105 hover:-rotate-1" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const slides = [
        { name: 'Amanda Salsabila', class: 'XII IPA 1', quote: 'Masa SMA: kebanyakan revisi, kekurangan tidur.', img: '/images/profiles/p1.jpg', color: 'violet' },
        { name: 'Budi Santoso', class: 'XII IPA 2', quote: 'Teruslah melangkah, bahkan jika itu ke kantin.', img: '/images/profiles/p2.jpg', color: 'sky' },
        { name: 'Citra Lestari', class: 'XII IPS 3', quote: 'Belajar yes, main game jalan terus!', img: '/images/profiles/p3.jpg', color: 'teal' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Auto-slide every 5 seconds
        return () => clearInterval(interval);
    }, [slides.length]);

  return (
    <>
      <section className="py-20">
          <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-10 text-center">
                  <div className="p-6 reveal">
                      <div className="inline-block p-4 bg-indigo-100 text-indigo-600 rounded-xl"><Shield className="w-10 h-10" /></div>
                      <h3 className="mt-5 text-xl font-bold text-slate-800">Branding Anti-Mainstream</h3>
                      <p className="mt-2 text-slate-600">Tunjukin identitas sekolah kalian dengan logo dan warna khas. Buku tahunan auto-eksklusif dan pro!</p>
                  </div>
                  <div className="p-6 reveal" style={{ transitionDelay: '100ms' }}>
                      <div className="inline-block p-4 bg-indigo-100 text-indigo-600 rounded-xl"><Settings className="w-10 h-10" /></div>
                      <h3 className="mt-5 text-xl font-bold text-slate-800">Gampang Banget Ngelolanya</h3>
                      <p className="mt-2 text-slate-600">Panel admin super gampang buat atur data siswa, foto, dan konten lainnya. Gak perlu jago IT!</p>
                  </div>
                  <div className="p-6 reveal" style={{ transitionDelay: '200ms' }}>
                      <div className="inline-block p-4 bg-indigo-100 text-indigo-600 rounded-xl"><Cloud className="w-10 h-10" /></div>
                      <h3 className="mt-5 text-xl font-bold text-slate-800">Kenangan Auto-Abadi</h3>
                      <p className="mt-2 text-slate-600">Akses buku tahunan kapan aja, di mana aja, dari gadget apa aja. Kenangan kalian gak bakal lekang oleh waktu!</p>
                  </div>
              </div>
          </div>
      </section>

      <section id="fitur" className="py-20 bg-white">
          <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Fitur Unggulan yang Bikin Kalian Nagih!</h2>
                  <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-lg">Semua yang kalian butuhin buat buku tahunan digital yang unforgettable!</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-20 reveal">
                  <div className="order-2 md:order-1">
                      <div className="inline-flex items-center gap-3 bg-indigo-100 text-indigo-700 font-semibold px-4 py-1 rounded-full mb-4"><ImageIcon className="w-5 h-5" />Interaktif</div>
                      <h3 className="text-3xl font-bold text-slate-800 mb-4">Galeri Foto Penuh Warna & Vibes!</h3>
                      <p className="text-slate-600 text-lg">Hadirin semua momen berharga kalian lewat galeri foto yang dinamis. Tunjukin semua kenangan seru dengan tampilan yang memukau dan asyik!</p>
                  </div>
                  <div className="order-1 md:order-2 h-[450px]">
                      <div className="grid grid-cols-3 grid-rows-3 gap-4 h-full">
                          <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden group relative shadow-lg">
                              <img src="/images/angkatan/a1.jpg" alt="Foto grup siswa wisuda" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                          </div>
                          <div className="rounded-2xl overflow-hidden group relative shadow-lg">
                              <img src="/images/angkatan/a2.jpg" alt="Siswa belajar bersama" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                          </div>
                          <div className="row-span-2 rounded-2xl overflow-hidden group relative shadow-lg">
                              <img src="/images/angkatan/a3.jpg" alt="Suasana kelas" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                          </div>
                          <div className="rounded-2xl overflow-hidden group relative shadow-lg">
                              <img src="/images/angkatan/a4.jpg" alt="Siswa di lab" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                          </div>
                          <div className="rounded-2xl overflow-hidden group relative shadow-lg">
                              <img src="/images/angkatan/a5.jpg" alt="Siswa berdiskusi" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                          </div>
                      </div>
                  </div>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center mb-20 reveal" style={{ transitionDelay: '100ms' }}>
                  <div className="relative flex items-center justify-center h-96 min-h-[450px]">
                      <div className="relative w-full max-w-sm h-full overflow-hidden">
                          {slides.map((slide, index) => (
                              <div key={index} className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${activeSlide === index ? 'opacity-100 translate-x-0' : 'opacity-0 ' + (index > activeSlide ? 'translate-x-full' : '-translate-x-full')}`}>
                                  <div className="bg-white p-6 rounded-2xl shadow-2xl w-80 text-center">
                                      <img src={slide.img} alt={`Foto profil ${slide.name}`} className={`w-24 h-24 rounded-full mx-auto border-4 object-cover border-${slide.color}-300`} />
                                      <h4 className="text-xl font-bold mt-4 text-slate-800">{slide.name}</h4>
                                      <p className="text-slate-500 text-sm">{slide.class}</p>
                                      <p className="text-slate-600 italic mt-3 text-sm h-10">"{slide.quote}"</p>
                                      <div className="flex justify-center space-x-4 mt-4">
                                          <Instagram className="w-5 h-5 text-slate-400 hover:text-pink-500 cursor-pointer" />
                                          <Twitter className="w-5 h-5 text-slate-400 hover:text-sky-500 cursor-pointer" />
                                          <Globe className="w-5 h-5 text-slate-400 hover:text-green-500 cursor-pointer" />
                                      </div>
                                  </div>
                              </div>
                          ))}
                      </div>
                  </div>
                  <div>
                      <div className="inline-flex items-center gap-3 bg-purple-100 text-purple-700 font-semibold px-4 py-1 rounded-full mb-4"><Users className="w-5 h-5" />Personal & Fun</div>
                      <h3 className="text-3xl font-bold text-slate-800 mb-4">Profil Siswa yang Unik & Bikin Kangen!</h3>
                      <p className="text-slate-600 text-lg">Setiap siswa dapet halaman profil eksklusif! Lengkap sama foto, kutipan, dan biodata biar kalian tetep connect setelah lulus. Auto-slide kok, jadi santai aja!</p>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
};

const ConfessSection = () => (
  <section id="confess" className="py-20 bg-slate-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Surat Cinta Digital (Confess)</h2>
        <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-lg">Kirim pesan rahasia ke teman seangkatan, crush, atau bahkan guru. Cuma kamu & dia yang tau!</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="confess-card reveal">
          <div className="flex items-center mb-4">
            <img src="/images/profiles/p9.jpg" alt="Profil pengirim" className="profile-img mr-4" />
            <div>
              <p className="font-bold text-slate-800">Dari: Anonim</p>
              <p className="text-sm text-slate-500">Untuk: Rian Ardiansyah (XII IPA 1)</p>
            </div>
          </div>
          <p className="quote-text">"Makasih ya udah sering bantuin aku pas pelajaran fisika. Kamu baik banget!"</p>
        </div>
        <div className="confess-card reveal" style={{ transitionDelay: '100ms' }}>
          <div className="flex items-center mb-4">
            <img src="/images/profiles/p10.jpg" alt="Profil pengirim" className="profile-img mr-4" />
            <div>
              <p className="font-bold text-slate-800">Dari: Pengagum Rahasia</p>
              <p className="text-sm text-slate-500">Untuk: Alya Putri (XII IPS 1)</p>
            </div>
          </div>
          <p className="quote-text">"Senyum kamu manis banget, bikin semangat setiap pagi. Sukses terus ya!"</p>
        </div>
        <div className="confess-card reveal" style={{ transitionDelay: '200ms' }}>
          <div className="flex items-center mb-4">
            <img src="/images/profiles/p14.jpg" alt="Profil pengirim" className="profile-img mr-4" />
            <div>
              <p className="font-bold text-slate-800">Dari: Hamba Allah</p>
              <p className="text-sm text-slate-500">Untuk: Kevin Sanjaya (XII IPA 2)</p>
            </div>
          </div>
          <p className="quote-text">"Keren banget pas tanding basket kemarin! Semoga menang terus!"</p>
        </div>
      </div>
    </div>
  </section>
);

const ChatRoomSection = () => {
    const [visibleMessages, setVisibleMessages] = useState(0);
    const chatMessages = [
        { user: 'Amanda Salsabila', img: '/images/profiles/p1.jpg', text: 'Gengs, ada yang udah mulai ngerjain tugas sejarah belom? Pusing banget nih!', type: 'received' },
        { user: 'Budi Santoso', img: '/images/profiles/p2.jpg', text: 'Belom! Aku juga masih nyari inspirasi. Mau nyontek aja rasanya 😂', type: 'sent' },
        { user: 'Citra Lestari', img: '/images/profiles/p3.jpg', text: 'Wkwk, jangan gitu dong! Mending kita meet up online aja, bahas bareng. Biar cepet kelar.', type: 'received' },
        { user: 'Fajar Nugraha', img: '/images/profiles/p4.jpg', text: 'Ide bagus tuh! Kapan nih? Aku free nanti malem.', type: 'sent' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleMessages(prev => (prev >= chatMessages.length ? 0 : prev + 1));
        }, 1500);
        return () => clearInterval(interval);
    }, [chatMessages.length]);

    return (
        <section id="chat-room" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Room Chat Angkatan</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-lg">Tempat gibah, nostalgia, atau ngerjain tugas bareng. Semua bisa!</p>
                </div>
                <div className="chat-room-card reveal">
                    <div className="chat-container">
                        <div className="space-y-6">
                            {chatMessages.slice(0, visibleMessages).map((msg, index) => (
                                <div key={index} className={`chat-message-wrapper ${msg.type === 'sent' ? 'sent-wrapper' : ''}`}>
                                    <img src={msg.img} alt={`Profil ${msg.user}`} className="chat-profile-img" />
                                    <div>
                                        <p className="chat-name">{msg.user}</p>
                                        <div className={`chat-bubble ${msg.type}`}>
                                            <p>{msg.text}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {visibleMessages < chatMessages.length && (
                                <div className="chat-message-wrapper">
                                    <img src={chatMessages[visibleMessages].img} alt="Profil typing" className="chat-profile-img" />
                                    <div>
                                        <p className="chat-name">{chatMessages[visibleMessages].user}</p>
                                        <div className="chat-bubble received inline-flex items-center space-x-1.5">
                                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                                            <span style={{animationDelay: '0.1s'}} className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                                            <span style={{animationDelay: '0.2s'}} className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mt-6 pt-4 border-t flex items-center gap-2">
                        <input type="text" placeholder="Ketik pesanmu di sini..." className="flex-1 p-3 rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                        <button className="bg-indigo-600 text-white p-3 rounded-full hover:bg-indigo-700 transition-colors">
                            <Send className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FutureFeaturesSection = () => {
  return (
    <section id="pengembangan" className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
            Fitur Keren Berikutnya!
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-lg">
            Kami terus berinovasi! Intip sedikit bocoran fitur yang sedang kami siapkan untuk membuat kenangan angkatanmu makin tak terlupakan.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Kartu Fitur Mading */}
          <div className="future-card rounded-2xl p-8 shadow-lg">
            <div className="glow"></div>
            <div className="future-card-content">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-indigo-100 text-indigo-600 rounded-lg p-3 inline-block">
                  <Layout className="w-8 h-8" />
                </div>
                <div className="coming-soon-animated-badge">COMING SOON</div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mt-6">Mading Digital</h3>
              <p className="mt-2 text-slate-600">
                Wadah kreativitas, info terkini, dan karya-karya terbaik angkatan lo. Dari pengumuman reuni sampai pameran puisi, semua ada di sini!
              </p>
            </div>
          </div>

          {/* Kartu Fitur Lost Angkatan */}
          <div className="future-card rounded-2xl p-8 shadow-lg">
            <div className="glow"></div>
            <div className="future-card-content">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-purple-100 text-purple-600 rounded-lg p-3 inline-block">
                  <Search className="w-8 h-8" />
                </div>
                <div className="coming-soon-animated-badge">COMING SOON</div>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mt-6">Lost Angkatan</h3>
              <p className="mt-2 text-slate-600">
                Cari dan temukan kembali teman-teman lama yang udah lost contact. Jangan sampai putus silaturahmi hanya karena beda kota!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const PricingSection = () => (
    <section id="harga" className="py-20">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Paket Harga yang Fleksibel, Dijamin Pas di Kantong!</h2>
                <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-lg">Pilih paket yang paling cocok sama kebutuhan dan budget sekolah kalian. Gak pake ribet!</p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
                <div className="border border-slate-200 rounded-2xl p-8 flex flex-col h-full transition-all duration-300 hover:shadow-lg reveal">
                    <h3 className="text-xl font-bold text-slate-800">Paket Dasar</h3>
                    <p className="text-indigo-600 font-semibold mt-1">Cocok buat SD yang Gemoy!</p>
                    <p className="mt-6 text-5xl font-extrabold text-slate-900">Rp 1 Jt</p>
                    <p className="text-slate-500">per angkatan</p>
                    <ul className="mt-8 space-y-4 text-slate-600 flex-grow">
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Hingga 100 Siswa</li>
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Fitur Basic Aja</li>
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />1 Template Desain Kece</li>
                    </ul>
                    <a href="#kontak" className="mt-8 block w-full text-center bg-slate-100 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-200 transition">Pilih Paket Ini!</a>
                </div>
                <div className="border-2 border-indigo-600 rounded-2xl p-8 flex flex-col h-full relative shadow-2xl shadow-indigo-500/20 md:transform md:scale-105 reveal" style={{ transitionDelay: '100ms' }}>
                    <span className="absolute top-0 -translate-y-1/2 bg-indigo-600 text-white text-sm font-bold px-4 py-1 rounded-full">PALING LAKU!</span>
                    <h3 className="text-xl font-bold text-slate-800">Paket Plus</h3>
                    <p className="text-indigo-600 font-semibold mt-1">Cocok Buat Semua Level Sekolah!</p>
                    <p className="mt-6 text-5xl font-extrabold text-slate-900">Rp 2.5 Jt</p>
                    <p className="text-slate-500">per angkatan</p>
                    <ul className="mt-8 space-y-4 text-slate-600 flex-grow">
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Hingga 300 Siswa</li>
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Semua Fitur Dasar</li>
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />3 Pilihan Template Estetik</li>
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Logo & Warna Sekolah Sendiri</li>
                    </ul>
                    <a href="#kontak" className="cta-button mt-8 block w-full text-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold">Pilih Paket Ini!</a>
                </div>
                <div className="border border-slate-200 rounded-2xl p-8 flex flex-col h-full transition-all duration-300 hover:shadow-lg reveal" style={{ transitionDelay: '200ms' }}>
                    <h3 className="text-xl font-bold text-slate-800">Paket Premium</h3>
                    <p className="text-indigo-600 font-semibold mt-1">Cocok buat SMA/SMK yang Maksimal!</p>
                    <p className="mt-6 text-5xl font-extrabold text-slate-900">Rp 4 Jt</p>
                    <p className="text-slate-500">per angkatan</p>
                    <ul className="mt-8 space-y-4 text-slate-600 flex-grow">
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Siswa Tanpa Batas (Bebas!)</li>
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Semua Fitur Plus</li>
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Domain Kustom (Nama Sekolah Kalian!)</li>
                        <li className="flex items-center"><Check className="w-5 h-5 text-green-500 mr-3" />Dukungan Prioritas (Fast Respon!)</li>
                    </ul>
                    <a href="#kontak" className="mt-8 block w-full text-center bg-slate-100 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-200 transition">Pilih Paket Ini!</a>
                </div>
            </div>
        </div>
    </section>
);

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(1); 

  const faqItems = [
    {
      q: "Apa itu layanan whitelabel?",
      a: "Whitelabel itu artinya platform kita pake nama, logo, dan brand sekolah kalian. Jadi, kayak sekolah kalian punya platform buku tahunan digital sendiri, keren kan?"
    },
    {
      q: "Gimana cara upload data siswa?",
      a: "Gampang banget! Kita sediain panel admin yang user-friendly. Kalian bisa upload data siswa, foto, sama konten lain secara massal pake file Excel atau satu per satu. Ada panduan lengkapnya kok!"
    },
    {
      q: "Berapa lama proses bikinnya?",
      a: "Setelah semua data dan materi kita terima, proses penyiapan platform biasanya sekitar 3-7 hari kerja. Tergantung paket yang kalian pilih dan kelengkapan datanya ya!"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Sering Ditanya (FAQ)</h2>
            </div>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div key={index} className="bg-white p-5 border rounded-xl reveal">
                  <h3 onClick={() => setOpenFaq(openFaq === index + 1 ? null : index + 1)} className="w-full flex justify-between items-center text-left font-semibold text-lg text-slate-800 cursor-pointer">
                    <span>{item.q}</span>
                    {openFaq === index + 1 ? <Minus className="w-5 h-5 text-indigo-500" /> : <Plus className="w-5 h-5 text-indigo-500" />}
                  </h3>
                  <div 
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index + 1 ? 'max-h-96 mt-3' : 'max-h-0'}`}
                  >
                    <p className="text-slate-600">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>
    </section>
  );
};


const TestimonialsSection = () => {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const testimonials = [
        { name: 'Rian Ardiansyah', school: 'Siswa SMAN 70 Jakarta', quote: 'Platformnya keren banget! Bikin buku tahunan jadi lebih modern dan gampang diakses. Wall angkatannya jadi tempat kita nostalgia bareng.', img: '/images/profiles/p4.jpg' },
        { name: 'Alya Putri', school: 'Panitia Buku Tahunan SMK Telkom', quote: 'Sebagai panitia, dashboard adminnya sangat membantu. Upload data siswa dan foto jadi cepet banget. Gak perlu pusing sama hal teknis lagi.', img: '/images/profiles/p5.jpg' },
        { name: 'Kevin Sanjaya', school: 'Alumni SMA Pangudi Luhur', quote: 'Sampai sekarang masih sering buka buat lihat-lihat profil teman. Kenangan jadi awet dan gak hilang kayak buku fisik. Recommended!', img: '/images/profiles/p8.jpg' },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial(prev => (prev + 1) % testimonials.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Apa Kata Mereka?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-lg">Cerita dari sekolah dan siswa yang telah mengabadikan momen mereka bersama kami.</p>
                </div>
                <div className="relative max-w-2xl mx-auto">
                    <div className="relative h-56 overflow-hidden">
                        {testimonials.map((item, index) => (
                            <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeTestimonial === index ? 'opacity-100' : 'opacity-0'}`}>
                                <div className="flex flex-col items-center text-center">
                                    <img src={item.img} alt={item.name} className="w-16 h-16 rounded-full object-cover mb-4"/>
                                    <p className="text-md text-slate-700 italic">"{item.quote}"</p>
                                    <div className="mt-4 font-bold text-slate-900">{item.name}</div>
                                    <div className="text-sm text-slate-500">{item.school}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const CtaSection = () => (
    <section id="kontak" className="py-20 cta-final-section">
        <div className="container mx-auto px-6 relative z-10">
            <div className="p-10 md:p-16 text-center text-white reveal">
                <h2 className="text-3xl md:text-5xl font-bold">Siap Bikin Kenangan Angkatan Kalian Abadi & Kekinian?</h2>
                <p className="mt-4 max-w-2xl mx-auto opacity-90 text-lg">Yuk, ngobrolin kebutuhan sekolah kalian bareng tim kita. Dapatkan demo gratis dan penawaran spesial hari ini. Jangan sampe ketinggalan!</p>
                <a href="mailto:halo@seangkatan.id" className="cta-final-button mt-10 inline-block px-10 py-4 rounded-lg font-bold text-lg">
                    Gas, Hubungi Kami Sekarang!
                </a>
            </div>
        </div>
    </section>
);

const Footer = () => (
  <footer className="bg-white">
    <div className="container mx-auto px-6 py-8 text-center text-slate-500">
      <p>&copy; {new Date().getFullYear()} Seangkatan.id. Semua Hak Cipta Dilindungi.</p>
    </div>
  </footer>
);


// =================================================================
// Komponen Utama Halaman Homepage
// =================================================================
export default function App() { 
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => {
        observer.observe(el);
    });

    return () => {
        revealElements.forEach(el => {
            observer.unobserve(el);
        });
    };
  }, []); 


  return (
    <div className="bg-slate-50">
      <style>{`
        body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background-color: #f8fafc;
            color: #334155;
        }
        .gradient-text {
            background: linear-gradient(to right, #4f46e5, #7c3aed);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .cta-button {
            transition: all 0.3s ease-in-out;
        }
        .cta-button:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px -5px rgba(79, 70, 229, 0.25);
        }
        .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        .reveal.visible {
            opacity: 1;
            transform: translateY(0);
        }
        .photo-gallery img {
            transition: transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease, rotate 0.3s ease;
            filter: grayscale(30%);
        }
        .photo-gallery img:hover {
            transform: scale(1.05);
            box-shadow: 0 15px 30px -10px rgba(0,0,0,0.2);
            z-index: 10;
            filter: grayscale(0%);
            rotate: 2deg;
        }
        .confess-card {
            background-color: #ffffff;
            border-radius: 1rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            padding: 1.5rem;
            border: 1px solid #f1f5f9;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .confess-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        }
        .confess-card .profile-img {
            width: 3rem;
            height: 3rem;
            border-radius: 9999px;
            object-fit: cover;
        }
        .confess-card .quote-text {
            font-size: 1.125rem;
            color: #475569;
            font-style: italic;
        }
        .cta-final-section {
            background: linear-gradient(to right, #4f46e5, #7c3aed);
            position: relative;
            overflow: hidden;
        }
        .cta-final-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('https://www.transparenttextures.com/patterns/cubes.png');
            opacity: 0.1;
            z-index: 0;
        }
        .cta-final-button {
            background-color: #fff;
            color: #4f46e5;
            box-shadow: 0 10px 20px -5px rgba(255, 255, 255, 0.25);
            transition: all 0.3s ease-in-out;
        }
        .cta-final-button:hover {
            background-color: #f0f0f0;
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 15px 30px -5px rgba(255, 255, 255, 0.35);
        }
        .chat-room-card {
            background-color: #ffffff;
            border-radius: 1.5rem;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
            padding: 1.5rem;
            max-width: 36rem;
            margin-left: auto;
            margin-right: auto;
        }
        .chat-container {
            max-height: 450px;
            overflow-y: auto;
            padding-right: 0.5rem;
        }
        .chat-bubble {
            padding: 0.75rem 1rem;
            border-radius: 1.25rem;
            max-width: 85%;
            word-wrap: break-word;
            font-size: 0.95rem;
            line-height: 1.4;
        }
        .chat-bubble.sent {
            background-color: #6366f1;
            color: white;
            margin-left: auto;
            border-bottom-right-radius: 0.25rem;
        }
        .chat-bubble.received {
            background-color: #e0e7ff;
            color: #334155;
            margin-right: auto;
            border-bottom-left-radius: 0.25rem;
        }
        .chat-profile-img {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 9999px;
            object-fit: cover;
        }
        .chat-message-wrapper {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
        }
        .chat-message-wrapper.sent-wrapper {
            justify-content: flex-end;
            flex-direction: row-reverse;
        }
        .chat-name {
            font-weight: 600;
            color: #334155;
            font-size: 0.875rem;
            margin-bottom: 0.25rem;
        }
        .chat-message-wrapper.sent-wrapper .chat-name {
            text-align: right;
        }
        .bento-grid-container {
            height: 500px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-auto-rows: minmax(100px, auto);
            gap: 1rem;
        }
        /* Style untuk FutureFeaturesSection */
        .future-card {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .future-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
        }
        .future-card .glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200%;
          height: 200%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(79, 70, 229, 0.2) 0%, rgba(79, 70, 229, 0) 60%);
          transform: translate(-50%, -50%);
          transition: opacity 0.5s ease;
          opacity: 0;
          z-index: 0;
        }
        .future-card:hover .glow {
          opacity: 1;
        }
        .future-card-content {
          position: relative;
          z-index: 1;
        }
        .coming-soon-animated-badge {
          background: linear-gradient(45deg, #f59e0b, #ef4444);
          color: white;
          font-weight: 800;
          font-size: 0.75rem;
          padding: 0.375rem 1rem;
          border-radius: 9999px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          animation: pulse-badge 2s infinite ease-in-out;
        }
        @keyframes pulse-badge {
          0%, 100% {
            transform: scale(1) rotate(10deg);
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          50% {
            transform: scale(1.05) rotate(12deg);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          }
        }
      `}</style>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ConfessSection />
        <ChatRoomSection />
        <FutureFeaturesSection />
        <PricingSection />
        <FaqSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
