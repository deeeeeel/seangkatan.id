#!/usr/bin/env bash
# Purpose: Netlify masih baca folder typo `app/dasboard`. Script ini bikin SHIM sementara
# lalu commit & push supaya build nggak lagi nyari './globals.css' di folder typo.
# Setelah deploy sukses, hapus folder `app/dasboard` permanen.

set -euo pipefail

# 1) Pastikan repo bersih
if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "✋ Commit atau stash dulu perubahan kamu sebelum jalanin script ini." >&2
  exit 1
fi

# 2) Buat shim di app/dasboard/layout.tsx (tanpa import './globals.css')
mkdir -p app/dasboard
cat > app/dasboard/layout.tsx <<'TSX'
// File: app/dasboard/layout.tsx
// SHIM sementara agar Netlify yg masih cache path 'dasboard' tidak error.
// Jangan import './globals.css' di sini. Global CSS hanya di app/layout.tsx.
export { default } from '../dashboard/layout';
export { metadata } from '../dashboard/layout';
TSX

# 3) Sanity check: layout dashboard harus ada
if [ ! -f app/dashboard/layout.tsx ]; then
  echo "❌ app/dashboard/layout.tsx tidak ditemukan. Buat file itu dulu." >&2
  exit 1
fi

# 4) Add, commit, push
git add app/dasboard/layout.tsx
if git ls-files | grep -q '^app/dasboard/'; then
  echo "ℹ️  Netlify kemungkinan masih cache struktur lama. Shim sudah disiapkan."
fi

git commit -m "fix(netlify): add shim app/dasboard/layout.tsx re-export to dashboard"
git push

cat <<'EON'
✅ Selesai menambahkan SHIM.

Next steps di Netlify:
1) Buka Project → Deploys → klik "Clear cache and deploy site".
2) Setelah deploy hijau, hapus folder 'app/dasboard' permanen:
   git rm -r app/dasboard
   git commit -m "chore: remove legacy dasboard folder"
   git push

Sanity check lokal:
  git grep -n "dasboard" || echo "aman"
  npm run build
EON
