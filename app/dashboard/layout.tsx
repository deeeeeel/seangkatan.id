// File: app/dasboard/layout.tsx
// Shim sementara untuk mencegah error build Netlify yang masih membaca folder lama `dasboard`.
// Setelah cache dibersihkan dan deploy sukses, hapus file & folder ini.

// Jangan import './globals.css' di sini. Global CSS hanya di-root layout.
export { default } from '../dashboard/layout';
export { metadata } from '../dashboard/layout';
