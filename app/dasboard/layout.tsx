// File: app/dasboard/layout.tsx
// SHIM sementara agar Netlify yg masih cache path 'dasboard' tidak error.
// Jangan import './globals.css' di sini. Global CSS hanya di app/layout.tsx.
export { default } from '../dashboard/layout';
export { metadata } from '../dashboard/layout';
