/**
 * PHASE 2 — WEEK 6 EXERCISES
 * Topik: Union, Intersection, Type Alias, Generics, Enum
 */

// ============================================================
// SOAL 1 — Union Type
// ============================================================
// Buat fungsi yang menerima id berupa string atau number
// Lalu return string dengan format "ID: xxx"

function formatId(id: string | number): string {
    // JAWABAN:
}

console.log(formatId(123))    // "ID: 123"
console.log(formatId('abc'))  // "ID: abc"


// ============================================================
// SOAL 2 — Literal Union Type
// ============================================================
// Buat type untuk status order dan fungsi yang menggunakannya

type OrderStatus = // 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'

function getStatusMessage(status: OrderStatus): string {
    // JAWABAN: return pesan yang sesuai untuk tiap status
}

// Test:
console.log(getStatusMessage('pending'))    // "Menunggu konfirmasi"
console.log(getStatusMessage('delivered'))  // "Pesanan telah diterima"


// ============================================================
// SOAL 3 — Type Narrowing
// ============================================================
// Buat fungsi yang handle berbagai type input dengan aman

type InputValue = string | number | boolean | null | undefined

function processValue(value: InputValue): string {
    // JAWABAN: handle setiap kemungkinan type
    // string → uppercase
    // number → format dengan 2 desimal
    // boolean → 'Ya' atau 'Tidak'
    // null/undefined → 'Tidak ada nilai'
}

console.log(processValue('hello'))    // "HELLO"
console.log(processValue(3.14159))    // "3.14"
console.log(processValue(true))       // "Ya"
console.log(processValue(null))       // "Tidak ada nilai"


// ============================================================
// SOAL 4 — Intersection Type
// ============================================================
// Buat type Employee yang merupakan intersection dari Person dan JobInfo

interface Person {
    name: string
    age: number
    email: string
}

interface JobInfo {
    department: string
    position: string
    salary: number
    startDate: Date
}

type Employee = Person & JobInfo

// Buat beberapa contoh Employee
const employee1: Employee = {
    // JAWABAN: lengkapi semua properti
}


// ============================================================
// SOAL 5 — Generic Function
// ============================================================
// Buat fungsi generic yang:
// a) Return elemen pertama dari array
// b) Return elemen terakhir dari array
// c) Reverse array tanpa mengubah original

function first<T>(arr: T[]): T | undefined {
    // JAWABAN:
}

function last<T>(arr: T[]): T | undefined {
    // JAWABAN:
}

function reversed<T>(arr: T[]): T[] {
    // JAWABAN:
}

// Test:
console.log(first([1, 2, 3]))           // 1
console.log(last(['a', 'b', 'c']))      // 'c'
console.log(reversed([1, 2, 3]))        // [3, 2, 1]


// ============================================================
// SOAL 6 — Generic Interface
// ============================================================
// Buat generic interface untuk pagination response

interface PaginatedResponse<T> {
    // JAWABAN:
    // data: T[]
    // total: number
    // page: number
    // pageSize: number
    // totalPages: number
    // hasNext: boolean
    // hasPrev: boolean
}

// Buat fungsi yang return PaginatedResponse<User>
interface User {
    id: number
    name: string
}

function paginateUsers(users: User[], page: number, pageSize: number): PaginatedResponse<User> {
    // JAWABAN:
}


// ============================================================
// SOAL 7 — Enum
// ============================================================
// Buat enum untuk Role dan Permission, lalu gunakan dalam fungsi

enum Role {
    // JAWABAN: Admin, User, Guest
}

enum Permission {
    // JAWABAN: Read, Write, Delete, Admin
}

const rolePermissions: Record<Role, Permission[]> = {
    // JAWABAN: definisikan permission untuk tiap role
}

function hasPermission(role: Role, permission: Permission): boolean {
    // JAWABAN:
}

// Test:
console.log(hasPermission(Role.Admin, Permission.Delete))  // true
console.log(hasPermission(Role.Guest, Permission.Write))   // false


// ============================================================
// SOAL 8 — CHALLENGE: Generic Repository Pattern
// ============================================================
// Buat generic interface Repository<T> yang punya method:
// - findById(id: number): T | undefined
// - findAll(): T[]
// - create(item: Omit<T, 'id'>): T
// - update(id: number, data: Partial<T>): T | undefined
// - delete(id: number): boolean

interface Repository<T extends { id: number }> {
    // JAWABAN:
}

// Implementasikan untuk User
class UserRepository implements Repository<User> {
    private users: User[] = []
    private nextId = 1

    // JAWABAN: implementasikan semua method
}

// Test:
const repo = new UserRepository()
const newUser = repo.create({ name: 'Rye' })
console.log(newUser)  // { id: 1, name: 'Rye' }
console.log(repo.findAll())
