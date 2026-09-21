# Phase 1 — JavaScript Modern (ES6+)

> Estimasi: 3-4 minggu (Sabtu-Minggu)
> Prasyarat: sudah paham jQuery, PHP/Laravel, Java dasar

---

## Todolist Phase 1

### Minggu 1 — let/const, Arrow Function, Template Literal, Destructuring

- [ ] Pahami perbedaan `var`, `let`, `const`
- [ ] Pahami arrow function dan bedanya dengan `function` biasa
- [ ] Pahami template literal (backtick)
- [ ] Pahami destructuring object
- [ ] Pahami destructuring array
- [ ] Pahami default parameter
- [ ] **Kerjakan**: `exercises/week-1.js`

### Minggu 2 — Spread, Rest, Modules, Classes

- [ ] Pahami spread operator (`...`)
- [ ] Pahami rest parameter (`...args`)
- [ ] Pahami ES Modules (`import` / `export`)
- [ ] Pahami `class` di JavaScript (bandingkan dengan Java)
- [ ] Pahami `extends` dan `super`
- [ ] **Kerjakan**: `exercises/week-2.js`

### Minggu 3 — Promise, async/await, Error Handling

- [ ] Pahami apa itu asynchronous dan kenapa perlu ada
- [ ] Pahami callback (dan masalahnya: callback hell)
- [ ] Pahami `Promise` — `.then()`, `.catch()`, `.finally()`
- [ ] Pahami `async` / `await`
- [ ] Pahami `try/catch` dalam konteks async
- [ ] Pahami `Promise.all()` dan `Promise.allSettled()`
- [ ] **Kerjakan**: `exercises/week-3.js`

### Minggu 4 — Array Methods, Optional Chaining, Nullish Coalescing

- [ ] Pahami `.map()`, `.filter()`, `.reduce()`
- [ ] Pahami `.find()`, `.findIndex()`, `.some()`, `.every()`
- [ ] Pahami optional chaining (`?.`)
- [ ] Pahami nullish coalescing (`??`)
- [ ] Pahami logical assignment (`||=`, `&&=`, `??=`)
- [ ] Review semua minggu 1-3
- [ ] **Kerjakan**: `exercises/week-4.js`

---

## Materi Detail

---

### 1. var vs let vs const

**Masalah dengan `var`** (yang mungkin kamu pakai di era jQuery):
```javascript
// var punya function scope, bukan block scope
// ini bisa bikin bug yang susah dilacak
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100)
}
// Output: 3, 3, 3  <-- bukan 0, 1, 2 !
```

**Solusi dengan `let`**:
```javascript
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100)
}
// Output: 0, 1, 2  <-- benar!
```

**Aturan praktis**:
- Gunakan `const` by default untuk semua variabel
- Gunakan `let` hanya kalau nilainya perlu diubah (reassign)
- Jangan pakai `var` lagi

```javascript
const name = 'Rye'          // tidak bisa diubah (reassign)
let count = 0               // bisa diubah
count = count + 1           // ok

const user = { name: 'Rye' }
user.name = 'Budi'          // ini BOLEH — object-nya tidak berubah, propertinya yang berubah
user = { name: 'Budi' }     // ini ERROR — reassign tidak boleh
```

---

### 2. Arrow Function

```javascript
// Function biasa (cara lama)
function tambah(a, b) {
    return a + b
}

// Arrow function (cara modern)
const tambah = (a, b) => a + b

// Kalau body lebih dari satu baris, pakai kurung kurawal
const proses = (data) => {
    const hasil = data * 2
    return hasil
}

// Kalau hanya satu parameter, kurung bisa dihilangkan
const double = x => x * 2
```

**Perbedaan penting dengan function biasa — `this`**:
```javascript
// Di arrow function, `this` mengacu ke konteks luar (lexical this)
// Ini penting kalau kamu kerja dengan class atau event handler

const obj = {
    name: 'Rye',
    greetArrow: () => {
        console.log(this.name) // undefined! `this` bukan obj
    },
    greetFunction: function() {
        console.log(this.name) // 'Rye' — benar
    }
}
```

> Untuk pemula: gunakan arrow function untuk callback dan fungsi pendek.
> Gunakan `function` biasa untuk method di dalam object/class.

---

### 3. Template Literal

```javascript
const name = 'Rye'
const age = 25

// Cara lama (string concatenation)
const msg1 = 'Halo, nama saya ' + name + ' umur ' + age + ' tahun'

// Cara modern (template literal)
const msg2 = `Halo, nama saya ${name} umur ${age} tahun`

// Bisa multiline
const html = `
    <div>
        <h1>${name}</h1>
        <p>Umur: ${age}</p>
    </div>
`

// Bisa ekspresi di dalamnya
const result = `Hasil: ${2 + 2}`           // "Hasil: 4"
const upper = `Nama: ${name.toUpperCase()}` // "Nama: RYE"
```

---

### 4. Destructuring

**Object destructuring** — ambil properti dari object:
```javascript
const user = {
    name: 'Rye',
    age: 25,
    city: 'Jakarta'
}

// Cara lama
const name = user.name
const age = user.age

// Destructuring
const { name, age } = user
console.log(name) // 'Rye'
console.log(age)  // 25

// Rename saat destructuring
const { name: userName, age: userAge } = user
console.log(userName) // 'Rye'

// Default value
const { name, role = 'user' } = user
console.log(role) // 'user' (karena tidak ada di object)

// Nested destructuring
const config = {
    db: {
        host: 'localhost',
        port: 5432
    }
}
const { db: { host, port } } = config
console.log(host) // 'localhost'
```

**Array destructuring**:
```javascript
const colors = ['red', 'green', 'blue']

const [first, second] = colors
console.log(first)  // 'red'
console.log(second) // 'green'

// Skip elemen
const [, , third] = colors
console.log(third) // 'blue'

// Swap variabel (tanpa temp variable!)
let a = 1, b = 2
;[a, b] = [b, a]
console.log(a, b) // 2, 1
```

**Destructuring di parameter fungsi** — ini sering banget di codebase modern:
```javascript
// Tanpa destructuring
function greet(user) {
    console.log(`Halo ${user.name}, umur ${user.age}`)
}

// Dengan destructuring
function greet({ name, age }) {
    console.log(`Halo ${name}, umur ${age}`)
}

greet({ name: 'Rye', age: 25 })
```

---

### 5. Spread & Rest Operator

**Spread** — "sebar" isi array/object:
```javascript
// Array
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const combined = [...arr1, ...arr2]  // [1, 2, 3, 4, 5, 6]

// Copy array (bukan reference!)
const original = [1, 2, 3]
const copy = [...original]
copy.push(4)
console.log(original) // [1, 2, 3] — tidak berubah

// Object
const defaults = { theme: 'dark', lang: 'id' }
const userPrefs = { lang: 'en', fontSize: 14 }
const merged = { ...defaults, ...userPrefs }
// { theme: 'dark', lang: 'en', fontSize: 14 }
// userPrefs.lang override defaults.lang
```

**Rest** — kumpulkan sisa argumen:
```javascript
function sum(...numbers) {
    return numbers.reduce((total, n) => total + n, 0)
}
sum(1, 2, 3, 4, 5) // 15

// Kombinasi dengan destructuring
const [first, ...rest] = [1, 2, 3, 4, 5]
console.log(first) // 1
console.log(rest)  // [2, 3, 4, 5]
```

---

### 6. ES Modules

```javascript
// math.js — file yang mengexport
export const PI = 3.14159

export function tambah(a, b) {
    return a + b
}

export function kurang(a, b) {
    return a - b
}

// Default export — satu per file
export default function kali(a, b) {
    return a * b
}
```

```javascript
// main.js — file yang mengimport
import kali from './math.js'              // import default
import { tambah, kurang } from './math.js' // import named
import { PI as phi } from './math.js'     // import dengan alias
import * as math from './math.js'         // import semua

console.log(tambah(2, 3))  // 5
console.log(kali(2, 3))    // 6
console.log(math.PI)       // 3.14159
```

> Di TypeScript dan Node.js modern, ini adalah cara standar berbagi kode antar file.
> Berbeda dengan `require()` yang dipakai di Node.js lama (CommonJS).

---

### 7. Promise & Async/Await

**Kenapa perlu async?**

JavaScript berjalan single-thread. Kalau ada operasi yang lama (fetch data dari API, baca file), kita tidak mau program berhenti menunggu. Solusinya: asynchronous.

**Evolusi cara handle async:**

```javascript
// Era 1: Callback (cara lama, masalah: callback hell)
fetchUser(id, function(user) {
    fetchPosts(user.id, function(posts) {
        fetchComments(posts[0].id, function(comments) {
            // makin dalam makin susah dibaca
        })
    })
})

// Era 2: Promise
fetchUser(id)
    .then(user => fetchPosts(user.id))
    .then(posts => fetchComments(posts[0].id))
    .then(comments => console.log(comments))
    .catch(err => console.error(err))

// Era 3: async/await (cara modern, paling mudah dibaca)
async function getData(id) {
    try {
        const user = await fetchUser(id)
        const posts = await fetchPosts(user.id)
        const comments = await fetchComments(posts[0].id)
        console.log(comments)
    } catch (err) {
        console.error(err)
    }
}
```

**Membuat Promise sendiri:**
```javascript
function delay(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('selesai'), ms)
    })
}

async function main() {
    console.log('mulai')
    const result = await delay(2000)
    console.log(result) // 'selesai' (setelah 2 detik)
}
```

**Promise.all — jalankan beberapa async sekaligus:**
```javascript
async function fetchAll() {
    // Ini sequential — lambat (tunggu satu-satu)
    const user = await fetchUser(1)
    const posts = await fetchPosts(1)

    // Ini parallel — lebih cepat (jalan bersamaan)
    const [user, posts] = await Promise.all([
        fetchUser(1),
        fetchPosts(1)
    ])
}
```

---

### 8. Array Methods Modern

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const users = [
    { name: 'Rye', age: 25, active: true },
    { name: 'Budi', age: 17, active: false },
    { name: 'Ani', age: 30, active: true },
]

// map — transformasi setiap elemen, return array baru
const doubled = numbers.map(n => n * 2)
// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const names = users.map(u => u.name)
// ['Rye', 'Budi', 'Ani']

// filter — saring elemen, return array baru
const evenNumbers = numbers.filter(n => n % 2 === 0)
// [2, 4, 6, 8, 10]

const activeAdults = users.filter(u => u.active && u.age >= 18)
// [{ name: 'Rye', ... }, { name: 'Ani', ... }]

// reduce — akumulasi menjadi satu nilai
const total = numbers.reduce((acc, n) => acc + n, 0)
// 55

// find — cari satu elemen pertama yang cocok
const rye = users.find(u => u.name === 'Rye')
// { name: 'Rye', age: 25, active: true }

// some — apakah ada minimal satu yang cocok?
const hasMinor = users.some(u => u.age < 18)
// true

// every — apakah semua cocok?
const allActive = users.every(u => u.active)
// false

// Chaining — kombinasi beberapa method
const result = users
    .filter(u => u.active)
    .map(u => u.name)
    .join(', ')
// 'Rye, Ani'
```

---

### 9. Optional Chaining & Nullish Coalescing

```javascript
const user = {
    name: 'Rye',
    address: {
        city: 'Jakarta'
    }
}

// Tanpa optional chaining — verbose dan rawan error
const city = user && user.address && user.address.city

// Dengan optional chaining (?.)
const city = user?.address?.city        // 'Jakarta'
const zip = user?.address?.zip          // undefined (tidak error)
const phone = user?.contact?.phone      // undefined (tidak error)

// Nullish coalescing (??) — default value kalau null/undefined
const city = user?.address?.city ?? 'Kota tidak diketahui'
const role = user?.role ?? 'guest'

// Bedanya ?? dengan ||
// || menganggap 0, '', false sebagai falsy (pakai default)
// ?? hanya menganggap null dan undefined (lebih aman)
const count = 0
console.log(count || 10)  // 10  <-- salah! 0 valid tapi diganti
console.log(count ?? 10)  // 0   <-- benar! 0 bukan null/undefined
```

---

## Checklist Sebelum Lanjut ke Phase 2

Sebelum lanjut, pastikan kamu bisa menjawab pertanyaan ini tanpa melihat catatan:

- [ ] Apa bedanya `let` dan `const`? Kapan pakai yang mana?
- [ ] Apa bedanya arrow function dan function biasa soal `this`?
- [ ] Bagaimana cara destructuring object dengan rename?
- [ ] Apa bedanya spread dan rest operator?
- [ ] Apa itu `async/await` dan kenapa lebih baik dari callback?
- [ ] Apa bedanya `Promise.all` dan `await` sequential?
- [ ] Apa bedanya `??` dan `||`?
- [ ] Apa yang dilakukan `.map()`, `.filter()`, `.reduce()`?
