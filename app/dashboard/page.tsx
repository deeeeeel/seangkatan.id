// File: app/dashboard/layout.tsx
// Layout sederhana untuk halaman dashboard

export const metadata = {
  title: 'Dashboard — Seangkatan.id',
  description: 'Halaman dashboard pengguna',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section style={{ padding: '20px', background: '#f0fdf4', minHeight: '100vh' }}>
      {children}
    </section>
  );
}
