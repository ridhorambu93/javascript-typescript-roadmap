# Mini Project 2 — API Fetcher

## Setup

```bash
npm install
```

## Cara Pakai

```bash
# Lihat semua user
ts-node src/index.ts users

# Lihat posts dari user id 1
ts-node src/index.ts posts 1

# Lihat comments dari post id 1
ts-node src/index.ts comments 1
```

## Tugasmu

1. **`src/types.ts`** — buka https://jsonplaceholder.typicode.com/users/1 di browser, lihat strukturnya, lalu definisikan interface yang lengkap

2. **`src/api.ts`** — implementasikan method `getUsers`, `getPostsByUser`, `getCommentsByPost`

3. **`src/index.ts`** — lengkapi setiap `case` untuk menampilkan data

## Checklist

- [ ] `ts-node src/index.ts users` menampilkan daftar user
- [ ] `ts-node src/index.ts posts 1` menampilkan posts dari user 1
- [ ] `ts-node src/index.ts comments 1` menampilkan comments dari post 1
- [ ] Jalankan perintah yang sama dua kali — kali kedua harus tampil "(dari cache)"
- [ ] Error ditangani dengan pesan yang jelas (coba userId yang tidak ada, misal 9999)

## Bonus (kalau sudah selesai)

- [ ] Tambahkan command `summary <userId>` yang menampilkan user + jumlah posts-nya
- [ ] Tambahkan pagination: `posts 1 --page 2 --limit 3`
