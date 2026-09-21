/**
 * PHASE 2 — WEEK 5 EXERCISES
 * Topik: Basic Types, Interface, Optional & Readonly
 *
 * Cara pakai:
 * 1. Jalankan: ts-node week-5.ts
 * 2. Atau compile dulu: tsc week-5.ts && node week-5.js
 */

// ============================================================
// SOAL 1 — Anotasi Type Dasar
// ============================================================
// Tambahkan type annotation yang tepat untuk semua variabel ini

const productName = 'Laptop'
const price = 15000000
const inStock = true
const tags = ['elektronik', 'komputer']
const dimensions = [30, 20, 5]  // [panjang, lebar, tinggi] dalam cm

// JAWABAN: tambahkan `: type` di setiap variabel


// ============================================================
// SOAL 2 — Interface Dasar
// ============================================================
// Buat interface Product dengan properti:
// - id: number (required)
// - name: string (required)
// - price: number (required)
// - description: string (optional)
// - stock: number (required)
// - category: string (required)
// - createdAt: Date (required, readonly)

// JAWABAN:
interface Product {
    // lengkapi di sini
}

// Buat 2 object yang mengimplementasikan interface Product
const laptop: Product = {
    // lengkapi
}

const phone: Product = {
    // lengkapi
}


// ============================================================
// SOAL 3 — Interface dengan Method
// ============================================================
// Buat interface Shape dengan:
// - color: string
// - method area(): number
// - method perimeter(): number
// - method describe(): string

interface Shape {
    // JAWABAN:
}

// Implementasikan interface Shape untuk class Rectangle
class Rectangle implements Shape {
    constructor(
        public color: string,
        public width: number,
        public height: number
    ) {}

    // JAWABAN: implementasikan semua method
}

// Test:
const rect = new Rectangle('blue', 10, 5)
console.log(rect.area())        // 50
console.log(rect.perimeter())   // 30
console.log(rect.describe())    // "Blue rectangle: 10x5"


// ============================================================
// SOAL 4 — Interface Extends
// ============================================================
// Buat hierarchy interface:
// Animal → Pet → Dog

interface Animal {
    name: string
    sound: string
    makeSound(): void
}

interface Pet extends Animal {
    owner: string
    isVaccinated: boolean
}

interface Dog extends Pet {
    breed: string
    fetch(): void
}

// Buat object yang mengimplementasikan Dog
const myDog: Dog = {
    // JAWABAN: lengkapi semua properti dan method
}


// ============================================================
// SOAL 5 — Function dengan Type Annotation
// ============================================================
// Tambahkan type annotation yang tepat untuk semua fungsi ini

function calculateDiscount(price, discountPercent) {
    return price - (price * discountPercent / 100)
}

function formatCurrency(amount, currency) {
    return `${currency} ${amount.toLocaleString()}`
}

function findProduct(products, id) {
    return products.find(p => p.id === id)
}

// JAWABAN: tambahkan type annotation


// ============================================================
// SOAL 6 — Tuple
// ============================================================
// Definisikan type yang tepat untuk data-data ini

// a) Koordinat GPS: [latitude, longitude]
type Coordinate = // ...

// b) Entry database: [id, nama, tanggal_dibuat]
type DBEntry = // ...

// c) RGB color: [red, green, blue] masing-masing 0-255
type RGB = // ...

// Buat beberapa contoh data dengan type di atas
const jakarta: Coordinate = // ...
const userEntry: DBEntry = // ...
const red: RGB = // ...


// ============================================================
// SOAL 7 — Readonly & Immutability
// ============================================================
// Buat interface Config yang semua propertinya readonly

interface AppConfig {
    // JAWABAN: buat semua readonly
    apiUrl: string
    apiKey: string
    timeout: number
    maxRetries: number
}

const config: AppConfig = {
    apiUrl: 'https://api.example.com',
    apiKey: 'secret-key-123',
    timeout: 5000,
    maxRetries: 3
}

// Coba ubah salah satu — harusnya error TypeScript
// config.apiKey = 'new-key'  // uncomment untuk lihat error


// ============================================================
// SOAL 8 — CHALLENGE: Type-safe API Response
// ============================================================
// Buat interface untuk response API yang type-safe

// Buat interface ApiResponse<T> yang punya:
// - success: boolean
// - data: T (generic)
// - message: string
// - timestamp: Date

interface ApiResponse<T> {
    // JAWABAN:
}

// Buat interface untuk User dan Product
interface User {
    id: number
    name: string
    email: string
}

// Buat fungsi yang return ApiResponse<User>
function createUserResponse(user: User): ApiResponse<User> {
    // JAWABAN:
}

// Buat fungsi yang return ApiResponse<User[]>
function createUsersResponse(users: User[]): ApiResponse<User[]> {
    // JAWABAN:
}

// Test:
const singleUser = createUserResponse({ id: 1, name: 'Rye', email: 'rye@email.com' })
console.log(singleUser.data.name)  // TypeScript tahu ini string
