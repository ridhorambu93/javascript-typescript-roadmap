/**
 * PHASE 1 — WEEK 4 EXERCISES
 * Topik: Array Methods, Optional Chaining, Nullish Coalescing
 *
 * Cara pakai:
 * 1. Baca instruksi tiap soal
 * 2. Tulis jawaban di bawah komentar // JAWABAN:
 * 3. Jalankan dengan: node week-4.js
 */

// ============================================================
// DATA (gunakan untuk semua soal)
// ============================================================

const employees = [
    { id: 1, name: 'Andi', department: 'Engineering', salary: 8000000, active: true },
    { id: 2, name: 'Budi', department: 'Marketing', salary: 6000000, active: false },
    { id: 3, name: 'Cici', department: 'Engineering', salary: 9500000, active: true },
    { id: 4, name: 'Dodi', department: 'HR', salary: 7000000, active: true },
    { id: 5, name: 'Eka', department: 'Marketing', salary: 6500000, active: true },
    { id: 6, name: 'Fani', department: 'Engineering', salary: 11000000, active: false },
]

// ============================================================
// SOAL 1 — map
// ============================================================
// Buat array baru yang hanya berisi nama semua karyawan

// Expected: ['Andi', 'Budi', 'Cici', 'Dodi', 'Eka', 'Fani']

// JAWABAN:
const names = // ...
console.log(names)


// ============================================================
// SOAL 2 — filter
// ============================================================
// Ambil semua karyawan yang aktif DAN dari departemen Engineering

// Expected: [{ id: 1, name: 'Andi', ... }, { id: 3, name: 'Cici', ... }]

// JAWABAN:
const activeEngineers = // ...
console.log(activeEngineers)


// ============================================================
// SOAL 3 — reduce
// ============================================================
// Hitung total gaji semua karyawan yang aktif

// Expected: 37000000 (8jt + 9.5jt + 7jt + 6.5jt)

// JAWABAN:
const totalActiveSalary = // ...
console.log(totalActiveSalary)


// ============================================================
// SOAL 4 — map + filter chaining
// ============================================================
// Ambil nama semua karyawan aktif, diurutkan A-Z

// Expected: ['Andi', 'Cici', 'Dodi', 'Eka']

// JAWABAN:
const activeNames = // ...
console.log(activeNames)


// ============================================================
// SOAL 5 — reduce untuk grouping
// ============================================================
// Kelompokkan karyawan berdasarkan departemen

// Expected:
// {
//   Engineering: [Andi, Cici, Fani],
//   Marketing: [Budi, Eka],
//   HR: [Dodi]
// }

// JAWABAN:
const byDepartment = employees.reduce((acc, employee) => {
    // lengkapi di sini
}, {})
console.log(byDepartment)


// ============================================================
// SOAL 6 — find & findIndex
// ============================================================
// a) Cari karyawan dengan id = 4
// b) Cari index karyawan dengan nama 'Eka'
// c) Cari karyawan dengan gaji tertinggi

// JAWABAN:


// ============================================================
// SOAL 7 — some & every
// ============================================================
// a) Apakah ada karyawan dengan gaji di atas 10 juta?
// b) Apakah semua karyawan Engineering aktif?
// c) Apakah ada karyawan dari departemen Finance?

// JAWABAN:


// ============================================================
// SOAL 8 — Optional Chaining
// ============================================================
// Data ini tidak selalu lengkap (ada yang null/undefined)
// Gunakan optional chaining untuk mengaksesnya dengan aman

const apiResponses = [
    { user: { name: 'Rye', address: { city: 'Jakarta' } } },
    { user: { name: 'Budi', address: null } },
    { user: null },
    null,
]

// Untuk setiap response, print nama kota atau 'Kota tidak diketahui'
// Gunakan optional chaining (?.) dan nullish coalescing (??)

// JAWABAN:
apiResponses.forEach(response => {
    const city = // ...
    console.log(city)
})
// Expected output:
// Jakarta
// Kota tidak diketahui
// Kota tidak diketahui
// Kota tidak diketahui


// ============================================================
// SOAL 9 — Nullish Coalescing vs OR
// ============================================================
// Jelaskan (dalam komentar) kenapa output berbeda

const config = {
    timeout: 0,
    retries: 0,
    debug: false,
    name: ''
}

const timeout1 = config.timeout || 5000
const timeout2 = config.timeout ?? 5000

const debug1 = config.debug || true
const debug2 = config.debug ?? true

console.log('timeout1:', timeout1)  // berapa? kenapa?
console.log('timeout2:', timeout2)  // berapa? kenapa?
console.log('debug1:', debug1)      // berapa? kenapa?
console.log('debug2:', debug2)      // berapa? kenapa?

// JAWABAN (tulis penjelasan di sini):
// timeout1 = ... karena ...
// timeout2 = ... karena ...


// ============================================================
// SOAL 10 — CHALLENGE: Pipeline Data
// ============================================================
// Buat fungsi yang menerima array employees dan options,
// lalu return laporan ringkas

function generateReport(employees, options = {}) {
    const {
        department = null,      // filter by department (null = semua)
        activeOnly = false,     // filter hanya yang aktif
        sortBy = 'name',        // sort by 'name' atau 'salary'
        limit = null            // batasi jumlah hasil (null = semua)
    } = options

    // JAWABAN:
    // 1. Filter by department kalau ada
    // 2. Filter activeOnly kalau true
    // 3. Sort by sortBy
    // 4. Limit kalau ada
    // 5. Return array of { name, department, salary, status }
}

// Test:
console.log(generateReport(employees, {
    department: 'Engineering',
    activeOnly: true,
    sortBy: 'salary'
}))
// Expected:
// [
//   { name: 'Andi', department: 'Engineering', salary: 8000000, status: 'aktif' },
//   { name: 'Cici', department: 'Engineering', salary: 9500000, status: 'aktif' },
// ]
