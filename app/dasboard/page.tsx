// File: app/dashboard/page.tsx (Versi Sederhana untuk Debugging)
// Tujuannya hanya untuk memastikan file ini bisa dirender sebagai halaman.

'use client';

export default function DashboardPage() {
  return (
    <div style={{ background: '#dcfce7', border: '2px solid #22c55e', padding: '20px', borderRadius: '8px' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#15803d' }}>
        HALAMAN DASHBOARD BERHASIL DIMUAT! ✅
      </h1>
      <p style={{ marginTop: '10px', color: '#166534' }}>
        Jika Anda bisa melihat halaman ini, berarti masalah routing 404 sudah teratasi.
        Sekarang kita bisa mengembalikan fungsionalitas yang sebenarnya.
      </p>
    </div>
  );
}
