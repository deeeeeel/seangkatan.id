/** @type {import('tailwindcss').Config} */
module.exports = {
  // Konfigurasi konten Tailwind CSS untuk memindai file-file yang berisi kelas-kelas Tailwind
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Tema Tailwind CSS, di mana kamu bisa memperluas atau menimpa konfigurasi default
  theme: {
    extend: {
      // Properti backgroundImage kustom
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // Definisi keyframes untuk animasi kustom
      keyframes: {
        // Animasi untuk pesan yang muncul dari bawah ke atas
        'slide-in-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' }, // Mulai 20px di bawah dan transparan
          '100%': { transform: 'translateY(0)', opacity: '1' }, // Berakhir di posisi normal dan terlihat penuh
        },
        // Animasi untuk elemen yang muncul secara perlahan (fade in)
        'fade-in': {
          '0%': { opacity: '0' }, // Mulai transparan
          '100%': { opacity: '1' }, // Berakhir terlihat penuh
        },
        // Animasi berkedip lambat untuk indikator mengetik
        'pulse-slow': {
          '0%, 100%': { opacity: '1' }, // Terlihat penuh di awal dan akhir siklus
          '50%': { opacity: '.5' }, // Setengah transparan di tengah siklus
        },
      },
      // Menerapkan keyframes ke properti animasi
      animation: {
        'slide-in-up': 'slide-in-up 0.5s ease-out forwards', // Durasi 0.5s, easing ease-out, tetap di akhir animasi
        'fade-in': 'fade-in 0.5s ease-out forwards', // Durasi 0.5s, easing ease-out, tetap di akhir animasi
        'pulse-slow': 'pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite', // Durasi 2s, easing kustom, berulang tak terbatas
      },
    },
  },
  // Plugin Tailwind CSS yang digunakan
  plugins: [],
};
