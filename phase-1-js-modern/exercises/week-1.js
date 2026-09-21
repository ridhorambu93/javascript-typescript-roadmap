 /**
  * PHASE 1 — WEEK 1 EXERCISES
* Topik: let/const, Arrow Function, Template Literal, Destructuring
  *
  * Cara pakai:
  * 1. Baca instruksi tiap soal
  * 2. Tulis jawaban di bawah komentar  JAWABAN:
  * 3. Jalankan dengan: node week-1.js
  */

//  ============================================================
//  SOAL 1 — let vs const
//  ============================================================
//  Perbaiki kode di bawah ini agar tidak error dan menggunakan
//  let/const dengan benar (jangan pakai var)

// var userName = 'Rye'
// var userAge = 25
// var isLoggedIn = false
// isLoggedIn = true

//  JAWABAN:
// const userName = 'Rye'
// const userAge = 25
// let isLoggedIn = false
// isLoggedIn = true

// console.log(userName, userAge, isLoggedIn)

// ============================================================
// SOAL 2 — Arrow Function
// ============================================================
// Konversi semua function di bawah ke arrow function

// function greet(name) {
//     return 'Halo, ' + name
// }

// function multiply(a, b) {
//     return a * b
// }

// function isEven(num) {
//     if (num % 2 === 0) {
//         return true
//     }
//     return false
// }

// JAWABAN:
// const greet = (name) => {
//     return 'Halo ajg ' + name
// }

// const multiply = (a, b) => {
//     return a * b
// }

// const isEven = num => num % 2 === 0
// console.log(greet("Aldy"))
// console.log(multiply(2,3))
// console.log(isEven(1,4))

// ============================================================
// SOAL 3 — Template Literal
// ============================================================
// Tulis ulang fungsi ini menggunakan template literal

// function buildProfile(name, age, city) {
//     return 'Nama: ' + name + '\nUmur: ' + age + ' tahun\nKota: ' + city
// }

// JAWABAN:


// // ============================================================
// // SOAL 4 — Object Destructuring
// // ============================================================
// // Gunakan destructuring untuk mengambil data dari object ini

// const product = {
//     id: 101,
//     name: 'Laptop',
//     price: 15000000,
//     category: 'Electronics',
//     stock: 50
// }

// // Ambil: name, price, stock menggunakan destructuring
// // Lalu print: "Laptop - Rp15000000 (stok: 50)"

// // JAWABAN:


// // ============================================================
// // SOAL 5 — Array Destructuring
// // ============================================================
// // Gunakan array destructuring

// const coordinates = [106.8456, -6.2088, 10]  // [longitude, latitude, altitude]

// // Ambil longitude dan latitude, skip altitude
// // Lalu print: "Lokasi: 106.8456, -6.2088"

// // JAWABAN:


// // ============================================================
// // SOAL 6 — Destructuring di Parameter Fungsi
// // ============================================================
// // Tulis ulang fungsi ini menggunakan destructuring di parameter

// function displayUser(user) {
//     console.log(`${user.name} (${user.email}) - Role: ${user.role}`)
// }

// const testUser = { name: 'Rye', email: 'rye@email.com', role: 'admin' }
// displayUser(testUser)

// // JAWABAN:


// // ============================================================
// // SOAL 7 — Default Parameter
// // ============================================================
// // Tambahkan default value pada parameter fungsi ini

// function createButton(text, color, size) {
//     // Kalau color tidak diberikan, default: 'blue'
//     // Kalau size tidak diberikan, default: 'medium'
//     return `<button style="color:${color}; size:${size}">${text}</button>`
// }

// // Test:
// // createButton('Klik Saya')           → pakai default color dan size
// // createButton('Submit', 'red')       → pakai default size saja
// // createButton('Cancel', 'gray', 'small') → semua custom

// // JAWABAN:


// // ============================================================
// // SOAL 8 — CHALLENGE
// // ============================================================
// // Buat fungsi yang menerima array of objects (data siswa),
// // lalu return string ringkasan menggunakan destructuring dan template literal

// const students = [
//     { name: 'Andi', grade: 85, passed: true },
//     { name: 'Budi', grade: 60, passed: false },
//     { name: 'Cici', grade: 92, passed: true },
// ]

// // Expected output:
// // "Andi: 85 (LULUS)"
// // "Budi: 60 (TIDAK LULUS)"
// // "Cici: 92 (LULUS)"

// // JAWABAN:
