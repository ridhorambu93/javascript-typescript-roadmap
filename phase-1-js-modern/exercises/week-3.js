/**
 * PHASE 1 — WEEK 3 EXERCISES
 * Topik: Promise, async/await, Error Handling
 *
 * Cara pakai:
 * 1. Baca instruksi tiap soal
 * 2. Tulis jawaban di bawah komentar // JAWABAN:
 * 3. Jalankan dengan: node week-3.js
 *
 * CATATAN: Soal ini menggunakan simulasi async (setTimeout)
 * karena tidak perlu koneksi internet
 */

// ============================================================
// HELPER FUNCTIONS (jangan diubah, ini simulasi API)
// ============================================================

function simulateDelay(ms, value, shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(new Error(`Gagal mengambil data: ${value}`))
            } else {
                resolve(value)
            }
        }, ms)
    })
}

const fakeDB = {
    users: [
        { id: 1, name: 'Rye', departmentId: 10 },
        { id: 2, name: 'Budi', departmentId: 20 },
    ],
    departments: [
        { id: 10, name: 'Engineering' },
        { id: 20, name: 'Marketing' },
    ]
}

function getUser(id) {
    const user = fakeDB.users.find(u => u.id === id)
    if (!user) return simulateDelay(100, null, true)
    return simulateDelay(100, user)
}

function getDepartment(id) {
    const dept = fakeDB.departments.find(d => d.id === id)
    if (!dept) return simulateDelay(100, null, true)
    return simulateDelay(100, dept)
}

// ============================================================
// SOAL 1 — Promise Dasar
// ============================================================
// Buat fungsi yang return Promise
// Resolve dengan 'sukses' kalau angka > 0
// Reject dengan Error('angka harus positif') kalau angka <= 0

function validatePositive(number) {
    // JAWABAN:
}

// Test:
// validatePositive(5).then(msg => console.log(msg))   → 'sukses'
// validatePositive(-1).catch(err => console.log(err.message)) → 'angka harus positif'


// ============================================================
// SOAL 2 — .then() dan .catch() chaining
// ============================================================
// Gunakan getUser(1) lalu ambil departmentnya
// Gunakan .then() dan .catch() (BUKAN async/await)

// Expected output:
// "User: Rye, Department: Engineering"

// JAWABAN:


// ============================================================
// SOAL 3 — async/await dasar
// ============================================================
// Tulis ulang SOAL 2 menggunakan async/await

async function getUserWithDepartment(userId) {
    // JAWABAN:
}

getUserWithDepartment(1)


// ============================================================
// SOAL 4 — Error Handling dengan try/catch
// ============================================================
// Buat fungsi async yang:
// 1. Ambil user dengan id yang diberikan
// 2. Kalau user tidak ditemukan (error), print pesan error yang ramah
// 3. Kalau berhasil, print nama user

async function safeGetUser(userId) {
    // JAWABAN:
}

safeGetUser(1)   // → berhasil
safeGetUser(99)  // → error, user tidak ditemukan


// ============================================================
// SOAL 5 — Promise.all (parallel)
// ============================================================
// Ambil user id 1 dan user id 2 SECARA BERSAMAAN (parallel)
// Lalu print kedua nama

async function getAllUsers() {
    // JAWABAN: gunakan Promise.all
}

getAllUsers()


// ============================================================
// SOAL 6 — Sequential vs Parallel
// ============================================================
// Bandingkan waktu eksekusi sequential vs parallel

async function sequential() {
    console.time('sequential')
    // Ambil user 1, tunggu selesai, baru ambil user 2
    // JAWABAN:
    console.timeEnd('sequential')
}

async function parallel() {
    console.time('parallel')
    // Ambil user 1 dan user 2 bersamaan
    // JAWABAN:
    console.timeEnd('parallel')
}

sequential()
parallel()
// Perhatikan perbedaan waktu di console!


// ============================================================
// SOAL 7 — async/await dengan loop
// ============================================================
// Ambil semua user dari array ids ini secara parallel

const userIds = [1, 2]

async function fetchMultipleUsers(ids) {
    // JAWABAN: gunakan Promise.all + map
}

fetchMultipleUsers(userIds)


// ============================================================
// SOAL 8 — CHALLENGE: Retry Logic
// ============================================================
// Buat fungsi yang mencoba memanggil async function
// Kalau gagal, coba lagi sampai maxRetries kali
// Kalau masih gagal setelah maxRetries, throw error

async function withRetry(asyncFn, maxRetries = 3) {
    // JAWABAN:
}

// Test dengan fungsi yang kadang gagal:
let attempt = 0
async function unstableOperation() {
    attempt++
    if (attempt < 3) {
        throw new Error(`Gagal pada percobaan ${attempt}`)
    }
    return 'Berhasil!'
}

withRetry(unstableOperation)
    .then(result => console.log(result))
    .catch(err => console.error(err.message))
