/**
 * PHASE 1 — WEEK 2 EXERCISES
 * Topik: Spread, Rest, ES Modules, Classes
 *
 * Cara pakai:
 * 1. Baca instruksi tiap soal
 * 2. Tulis jawaban di bawah komentar // JAWABAN:
 * 3. Jalankan dengan: node week-2.js
 */

// ============================================================
// SOAL 1 — Spread: Merge Array
// ============================================================
// Gabungkan dua array ini menjadi satu tanpa mengubah original

const fruits = ['apel', 'mangga', 'jeruk']
const veggies = ['bayam', 'wortel', 'brokoli']

// Expected: ['apel', 'mangga', 'jeruk', 'bayam', 'wortel', 'brokoli']
// Pastikan fruits dan veggies tidak berubah

// JAWABAN:


// ============================================================
// SOAL 2 — Spread: Merge & Override Object
// ============================================================
// Buat object baru yang menggabungkan defaults dengan userConfig
// userConfig harus override defaults kalau ada key yang sama

const defaults = {
    theme: 'light',
    language: 'id',
    fontSize: 14,
    notifications: true
}

const userConfig = {
    theme: 'dark',
    fontSize: 16
}

// Expected result:
// { theme: 'dark', language: 'id', fontSize: 16, notifications: true }

// JAWABAN:


// ============================================================
// SOAL 3 — Spread: Copy & Modify
// ============================================================
// Buat copy dari object user ini, tapi dengan email yang diupdate
// JANGAN modifikasi object original

const originalUser = {
    id: 1,
    name: 'Rye',
    email: 'rye@old.com',
    role: 'user'
}

// Expected: object baru dengan email: 'rye@new.com', sisanya sama
// originalUser.email harus tetap 'rye@old.com'

// JAWABAN:


// ============================================================
// SOAL 4 — Rest Parameter
// ============================================================
// Buat fungsi yang menerima nama sebagai argumen pertama,
// dan sisa argumen sebagai daftar hobi

// Expected:
// describeHobbies('Rye', 'coding', 'gaming', 'hiking')
// → "Rye punya hobi: coding, gaming, hiking"

function describeHobbies(name, ...hobbies) {
    // JAWABAN:
}

describeHobbies('Rye', 'coding', 'gaming', 'hiking')


// ============================================================
// SOAL 5 — Rest: Ambil Elemen Pertama & Sisanya
// ============================================================
// Gunakan destructuring + rest untuk memisahkan elemen pertama
// dari sisa array

const scores = [95, 87, 76, 65, 55]

// Ambil nilai tertinggi (elemen pertama) dan sisa nilai
// Print: "Nilai tertinggi: 95"
// Print: "Nilai lainnya: 87, 76, 65, 55"

// JAWABAN:


// ============================================================
// SOAL 6 — Class Dasar
// ============================================================
// Buat class Animal dengan:
// - constructor(name, sound)
// - method speak() yang print: "Kucing berkata: Meow"
// - method toString() yang return: "Animal: Kucing"

// JAWABAN:
class Animal {
    // lengkapi di sini
}

// Test:
// const cat = new Animal('Kucing', 'Meow')
// cat.speak()     → "Kucing berkata: Meow"
// cat.toString()  → "Animal: Kucing"


// ============================================================
// SOAL 7 — Class Inheritance
// ============================================================
// Buat class Dog yang extends Animal dengan:
// - constructor(name) — sound selalu 'Guk'
// - method fetch() yang print: "[nama] mengambil bola!"
// - override speak() untuk print: "[nama] menggonggong: Guk Guk!"

// JAWABAN:
class Dog extends Animal {
    // lengkapi di sini
}

// Test:
// const dog = new Dog('Rex')
// dog.speak()   → "Rex menggonggong: Guk Guk!"
// dog.fetch()   → "Rex mengambil bola!"


// ============================================================
// SOAL 8 — CHALLENGE: Class dengan Static Method
// ============================================================
// Buat class Calculator dengan:
// - static method add(a, b)
// - static method subtract(a, b)
// - static method multiply(a, b)
// - static method divide(a, b) — throw Error kalau b === 0
// - instance method history() — return array semua operasi yang pernah dilakukan

// JAWABAN:
class Calculator {
    // lengkapi di sini
}

// Test:
// Calculator.add(5, 3)       → 8
// Calculator.divide(10, 0)   → throw Error('Tidak bisa dibagi nol')
