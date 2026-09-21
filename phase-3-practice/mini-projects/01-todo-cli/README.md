# Mini Project 1 — CLI Todo App

## Setup

```bash
npm install
```

## Cara Pakai

```bash
# Tambah todo baru
ts-node src/index.ts add "Belajar TypeScript"

# Lihat semua todo
ts-node src/index.ts list

# Tandai selesai (ganti 1 dengan id todo)
ts-node src/index.ts done 1

# Hapus todo (ganti 1 dengan id todo)
ts-node src/index.ts delete 1
```

## Tugasmu

File starter sudah ada. Kamu perlu melengkapi bagian yang bertanda `TODO`:

1. `src/storage.ts` → sudah ada contoh implementasinya, pelajari dan pahami
2. `src/todo.ts` → lengkapi method `add`, `markDone`, `delete`
3. `src/index.ts` → lengkapi setiap `case` di switch

## Urutan Pengerjaan

1. Mulai dari `storage.ts` — pahami cara baca/tulis file
2. Lanjut `todo.ts` — implementasi business logic
3. Terakhir `index.ts` — hubungkan semuanya

## Checklist

- [ ] `ts-node src/index.ts add "Todo pertama"` berhasil
- [ ] `ts-node src/index.ts list` menampilkan todo
- [ ] `ts-node src/index.ts done 1` menandai selesai
- [ ] `ts-node src/index.ts delete 1` menghapus todo
- [ ] Data tersimpan di `todos.json` dan tidak hilang setelah program ditutup
- [ ] Error ditangani dengan pesan yang jelas
