# Phase 3 — Practice & Mini Projects

> Estimasi: 3-4 minggu (Sabtu-Minggu)
> Prasyarat: Phase 1 dan Phase 2 selesai minimal 80%

---

## Todolist Phase 3

### Minggu 8 — Mini Project 1: CLI Todo App

- [ ] Setup project TypeScript baru
- [ ] Buat interface untuk Todo item
- [ ] Implementasi CRUD (create, read, update, delete)
- [ ] Simpan data ke file JSON (pakai `fs` module)
- [ ] Buat CLI interface sederhana
- [ ] Tambahkan error handling yang proper
- [ ] **Selesaikan**: `mini-projects/01-todo-cli/`

### Minggu 9 — Mini Project 2: Fetch & Transform Data

- [ ] Fetch data dari public API (JSONPlaceholder)
- [ ] Definisikan TypeScript interface untuk response API
- [ ] Transform dan filter data
- [ ] Handle error dengan proper
- [ ] Implementasi caching sederhana
- [ ] **Selesaikan**: `mini-projects/02-api-fetcher/`

### Minggu 10 — Mini Project 3: Baca Kode amazonq-vscode

- [ ] Buka dan baca `scripts/clean.ts` — pahami setiap baris
- [ ] Buka dan baca `scripts/mergeReports.ts` — pahami flow-nya
- [ ] Buka dan baca `scripts/newChange.ts` — pahami interaksi user
- [ ] Catat semua pattern TypeScript yang kamu temukan
- [ ] Coba modifikasi kecil di salah satu script (di copy-an, bukan original)
- [ ] **Catat temuan di**: `mini-projects/03-code-reading/notes.md`

### Minggu 11 — Review & Konsolidasi

- [ ] Review semua exercise yang belum selesai
- [ ] Buat cheatsheet pribadi (ringkasan yang kamu anggap penting)
- [ ] Coba baca satu file dari `packages/core/src/` di amazonq-vscode
- [ ] Update PROGRESS.md dengan refleksi keseluruhan
- [ ] **Buat**: `CHEATSHEET.md` di root folder roadmap

---

## Detail Mini Project 1: CLI Todo App

### Tujuan
Latihan TypeScript + Node.js file system + CLI interaction

### Fitur yang harus ada
- Tambah todo baru
- Lihat semua todo
- Tandai todo sebagai selesai
- Hapus todo
- Data tersimpan di file `todos.json`

### Struktur yang disarankan
```
01-todo-cli/
├── package.json
├── tsconfig.json
├── src/
│   ├── index.ts        ← entry point, CLI handler
│   ├── todo.ts         ← Todo interface dan logic
│   └── storage.ts      ← baca/tulis file JSON
└── todos.json          ← data storage
```

### Cara mulai
```bash
cd mini-projects/01-todo-cli
npm init -y
npm install typescript ts-node @types/node --save-dev
npx tsc --init
```

### Contoh penggunaan
```bash
ts-node src/index.ts add "Belajar TypeScript"
ts-node src/index.ts list
ts-node src/index.ts done 1
ts-node src/index.ts delete 1
```

---

## Detail Mini Project 2: API Fetcher

### Tujuan
Latihan async/await + TypeScript interfaces + error handling

### API yang digunakan
JSONPlaceholder (https://jsonplaceholder.typicode.com) — gratis, tidak perlu auth

### Fitur yang harus ada
- Fetch list of users
- Fetch posts by user
- Fetch comments by post
- Cache hasil fetch (simpan di memory, jangan fetch ulang kalau sudah ada)
- Handle network error dengan graceful

### Struktur yang disarankan
```
02-api-fetcher/
├── package.json
├── tsconfig.json
└── src/
    ├── index.ts        ← entry point
    ├── types.ts        ← semua interface untuk API response
    ├── api.ts          ← fungsi-fungsi fetch
    └── cache.ts        ← simple in-memory cache
```

### Interface yang perlu dibuat
```typescript
// Definisikan sendiri berdasarkan response dari API
interface ApiUser { ... }
interface ApiPost { ... }
interface ApiComment { ... }
```

---

## Detail Mini Project 3: Code Reading

### Tujuan
Mulai familiar dengan codebase TypeScript nyata (amazonq-vscode)

### File yang dibaca (urutan)
1. `scripts/clean.ts` — paling sederhana, async file operations
2. `scripts/mergeReports.ts` — async + XML parsing
3. `scripts/newChange.ts` — user input + file I/O
4. `scripts/generateSettings.ts` — JSON manipulation

### Yang perlu dicatat
- Pattern TypeScript apa yang dipakai?
- Ada fungsi/pattern yang belum kamu pahami?
- Ada yang menarik untuk dicoba sendiri?

### Template catatan
```markdown
## File: scripts/clean.ts

### Yang saya pahami:
- ...

### Yang belum saya pahami:
- ...

### Pattern menarik:
- ...

### Pertanyaan:
- ...
```

---

## Setelah Phase 3 Selesai

Kamu sudah siap untuk:
- Membaca dan memahami codebase TypeScript modern
- Berkontribusi ke project open source (mulai dari issue kecil)
- Mempelajari framework TypeScript (NestJS untuk backend, atau lanjut ke React dengan TypeScript)
- Memahami kode di `packages/core/src/` dari amazonq-vscode

### Next steps yang bisa dipilih:
1. **Backend**: Pelajari NestJS (TypeScript framework untuk Node.js, mirip Spring Boot)
2. **Frontend**: Pelajari React dengan TypeScript
3. **Open Source**: Coba cari `good first issue` di amazonq-vscode
4. **Deep dive**: Pilih satu fitur di amazonq-vscode dan pelajari sampai dalam
