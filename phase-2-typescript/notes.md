# Phase 2 — TypeScript Fundamentals

> Estimasi: 2-3 minggu (Sabtu-Minggu)
> Prasyarat: Phase 1 selesai minimal 80%

---

## Todolist Phase 2

### Minggu 5 — Setup, Basic Types, Interface

- [ ] Install TypeScript dan setup project
- [ ] Pahami basic types: `string`, `number`, `boolean`, `null`, `undefined`
- [ ] Pahami `array` dan `tuple`
- [ ] Pahami `object` type
- [ ] Pahami `interface`
- [ ] Pahami optional properties (`?`)
- [ ] Pahami `readonly`
- [ ] **Kerjakan**: `exercises/week-5.ts`

### Minggu 6 — Union, Intersection, Type Alias, Generics

- [ ] Pahami `type` alias
- [ ] Pahami union type (`string | number`)
- [ ] Pahami intersection type (`A & B`)
- [ ] Pahami type narrowing (type guard)
- [ ] Pahami generics dasar (`<T>`)
- [ ] Pahami `enum`
- [ ] **Kerjakan**: `exercises/week-6.ts`

### Minggu 7 — Functions, Classes, Utility Types

- [ ] Pahami function types dan return types
- [ ] Pahami `void` dan `never`
- [ ] Pahami class dengan TypeScript (access modifiers)
- [ ] Pahami utility types: `Partial`, `Required`, `Pick`, `Omit`, `Record`
- [ ] Pahami `as const`
- [ ] Pahami `unknown` vs `any`
- [ ] Review semua minggu 5-6
- [ ] **Kerjakan**: `exercises/week-7.ts`

---

## Setup TypeScript

### Install

```bash
# Install TypeScript secara global
npm install -g typescript

# Cek versi
tsc --version

# Atau pakai ts-node untuk langsung run file .ts
npm install -g ts-node
```

### Inisialisasi project

```bash
# Di folder exercises/
npm init -y
npm install typescript --save-dev
npx tsc --init
```

### Jalankan file TypeScript

```bash
# Compile dulu ke JS, lalu run
tsc week-5.ts
node week-5.js

# Atau langsung dengan ts-node
ts-node week-5.ts
```

---

## Materi Detail

---

### 1. Kenapa TypeScript?

Kamu sudah pakai Java — Java punya static typing. TypeScript membawa hal yang sama ke JavaScript.

```typescript
// JavaScript — tidak ada type checking
function tambah(a, b) {
    return a + b
}
tambah(5, '3')  // '53' — tidak error, tapi salah!

// TypeScript — ada type checking
function tambah(a: number, b: number): number {
    return a + b
}
tambah(5, '3')  // ERROR saat compile: Argument of type 'string' is not assignable to parameter of type 'number'
```

---

### 2. Basic Types

```typescript
// Primitif
const name: string = 'Rye'
const age: number = 25
const isActive: boolean = true
const nothing: null = null
const notDefined: undefined = undefined

// TypeScript bisa inferensi type — tidak perlu selalu ditulis eksplisit
const name = 'Rye'      // TypeScript tahu ini string
const age = 25          // TypeScript tahu ini number

// Array
const numbers: number[] = [1, 2, 3]
const names: string[] = ['Rye', 'Budi']
const mixed: (string | number)[] = ['Rye', 25]  // union type

// Tuple — array dengan panjang dan type yang fixed
const coordinate: [number, number] = [106.8, -6.2]
const entry: [string, number] = ['Rye', 25]

// Object
const user: { name: string; age: number } = {
    name: 'Rye',
    age: 25
}
```

---

### 3. Interface

Interface adalah cara mendefinisikan "bentuk" sebuah object. Mirip dengan interface di Java.

```typescript
interface User {
    id: number
    name: string
    email: string
    age?: number        // optional — boleh ada boleh tidak
    readonly createdAt: Date  // tidak bisa diubah setelah dibuat
}

// Implementasi
const user: User = {
    id: 1,
    name: 'Rye',
    email: 'rye@email.com',
    createdAt: new Date()
}

user.name = 'Budi'      // OK
user.createdAt = new Date()  // ERROR: readonly

// Interface bisa extends interface lain
interface Admin extends User {
    permissions: string[]
    level: number
}

const admin: Admin = {
    id: 1,
    name: 'Rye',
    email: 'rye@email.com',
    createdAt: new Date(),
    permissions: ['read', 'write', 'delete'],
    level: 3
}
```

---

### 4. Type Alias

`type` mirip dengan `interface`, tapi lebih fleksibel.

```typescript
// Type alias untuk object
type Point = {
    x: number
    y: number
}

// Type alias untuk union
type Status = 'active' | 'inactive' | 'pending'
type ID = string | number

// Type alias untuk function
type Callback = (error: Error | null, result: string) => void

// Kapan pakai interface vs type?
// - interface: untuk mendefinisikan bentuk object/class (bisa di-extend)
// - type: untuk union, intersection, atau alias yang lebih kompleks
// - Untuk pemula: pakai interface untuk object, type untuk yang lain
```

---

### 5. Union & Intersection Type

```typescript
// Union — bisa salah satu dari beberapa type
type StringOrNumber = string | number
type Status = 'active' | 'inactive' | 'pending'

function formatId(id: string | number): string {
    return `ID-${id}`
}

formatId(123)     // OK
formatId('abc')   // OK
formatId(true)    // ERROR

// Intersection — harus memenuhi semua type
interface HasName {
    name: string
}

interface HasAge {
    age: number
}

type Person = HasName & HasAge

const person: Person = {
    name: 'Rye',
    age: 25
    // harus punya keduanya
}
```

---

### 6. Type Narrowing (Type Guard)

```typescript
function processInput(input: string | number) {
    // TypeScript tidak tahu mana yang aktif
    // input.toUpperCase()  // ERROR: number tidak punya toUpperCase

    // Type narrowing dengan typeof
    if (typeof input === 'string') {
        // Di sini TypeScript tahu input adalah string
        return input.toUpperCase()
    } else {
        // Di sini TypeScript tahu input adalah number
        return input.toFixed(2)
    }
}

// Type narrowing dengan instanceof
function processDate(value: Date | string) {
    if (value instanceof Date) {
        return value.toISOString()
    }
    return new Date(value).toISOString()
}

// Type narrowing dengan in operator
interface Cat { meow(): void }
interface Dog { bark(): void }

function makeSound(animal: Cat | Dog) {
    if ('meow' in animal) {
        animal.meow()
    } else {
        animal.bark()
    }
}
```

---

### 7. Generics

Generics memungkinkan kita membuat fungsi/class yang bekerja dengan berbagai type.
Mirip dengan Generics di Java (`List<T>`, `Optional<T>`).

```typescript
// Tanpa generics — harus buat fungsi terpisah untuk tiap type
function getFirstString(arr: string[]): string {
    return arr[0]
}
function getFirstNumber(arr: number[]): number {
    return arr[0]
}

// Dengan generics — satu fungsi untuk semua type
function getFirst<T>(arr: T[]): T {
    return arr[0]
}

getFirst<string>(['a', 'b', 'c'])  // return 'a', type: string
getFirst<number>([1, 2, 3])        // return 1, type: number
getFirst([true, false])            // TypeScript inferensi: boolean[]

// Generic dengan constraint
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}

const user = { name: 'Rye', age: 25 }
getProperty(user, 'name')   // OK, return string
getProperty(user, 'age')    // OK, return number
getProperty(user, 'email')  // ERROR: 'email' tidak ada di user

// Generic interface
interface ApiResponse<T> {
    data: T
    status: number
    message: string
}

type UserResponse = ApiResponse<User>
type ListResponse = ApiResponse<User[]>
```

---

### 8. Enum

```typescript
// Numeric enum (default)
enum Direction {
    Up,     // 0
    Down,   // 1
    Left,   // 2
    Right   // 3
}

// String enum (lebih direkomendasikan — lebih readable)
enum Status {
    Active = 'ACTIVE',
    Inactive = 'INACTIVE',
    Pending = 'PENDING'
}

function updateStatus(status: Status) {
    console.log(`Status diubah ke: ${status}`)
}

updateStatus(Status.Active)    // OK
updateStatus('ACTIVE')         // ERROR: harus pakai enum

// Alternatif modern: const assertion (lebih ringan dari enum)
const STATUS = {
    Active: 'ACTIVE',
    Inactive: 'INACTIVE',
    Pending: 'PENDING'
} as const

type StatusType = typeof STATUS[keyof typeof STATUS]
// StatusType = 'ACTIVE' | 'INACTIVE' | 'PENDING'
```

---

### 9. Classes dengan TypeScript

```typescript
class BankAccount {
    // Access modifiers
    public readonly id: string          // bisa diakses dari mana saja, tidak bisa diubah
    private balance: number             // hanya bisa diakses dari dalam class
    protected owner: string            // bisa diakses dari class turunan

    constructor(owner: string, initialBalance: number = 0) {
        this.id = Math.random().toString(36).slice(2)
        this.owner = owner
        this.balance = initialBalance
    }

    // Getter
    get currentBalance(): number {
        return this.balance
    }

    // Method
    deposit(amount: number): void {
        if (amount <= 0) throw new Error('Jumlah harus positif')
        this.balance += amount
    }

    withdraw(amount: number): void {
        if (amount > this.balance) throw new Error('Saldo tidak cukup')
        this.balance -= amount
    }

    toString(): string {
        return `Account[${this.id}] - ${this.owner}: Rp${this.balance}`
    }
}

// Shorthand constructor (parameter langsung jadi property)
class Point {
    constructor(
        public x: number,
        public y: number
    ) {}

    distanceTo(other: Point): number {
        return Math.sqrt((this.x - other.x) ** 2 + (this.y - other.y) ** 2)
    }
}
```

---

### 10. Utility Types

TypeScript punya built-in utility types yang sangat berguna:

```typescript
interface User {
    id: number
    name: string
    email: string
    password: string
    role: 'admin' | 'user'
}

// Partial — semua property jadi optional
type UpdateUserDto = Partial<User>
// { id?: number; name?: string; email?: string; ... }

// Required — semua property jadi required
type StrictUser = Required<User>

// Pick — ambil beberapa property saja
type PublicUser = Pick<User, 'id' | 'name' | 'email'>
// { id: number; name: string; email: string }

// Omit — hapus beberapa property
type SafeUser = Omit<User, 'password'>
// { id: number; name: string; email: string; role: ... }

// Record — buat object type dengan key dan value type tertentu
type UserMap = Record<string, User>
// { [key: string]: User }

type RolePermissions = Record<'admin' | 'user', string[]>
// { admin: string[]; user: string[] }

// Readonly — semua property jadi readonly
type ImmutableUser = Readonly<User>

// ReturnType — ambil return type dari fungsi
function getUser() {
    return { id: 1, name: 'Rye' }
}
type GetUserReturn = ReturnType<typeof getUser>
// { id: number; name: string }
```

---

### 11. unknown vs any

```typescript
// any — matikan type checking (hindari!)
let data: any = 'hello'
data = 42
data = { name: 'Rye' }
data.toUpperCase()  // tidak error saat compile, tapi bisa error saat runtime

// unknown — type-safe alternative untuk any
let input: unknown = getUserInput()

// Harus narrowing dulu sebelum bisa dipakai
if (typeof input === 'string') {
    input.toUpperCase()  // OK
}

// Kapan pakai unknown?
// - Saat menerima data dari luar (API response, user input)
// - Saat tidak tahu type-nya tapi mau tetap type-safe
```

---

## Checklist Sebelum Lanjut ke Phase 3

- [ ] Bisa mendefinisikan interface untuk object yang kompleks
- [ ] Paham kapan pakai `interface` vs `type`
- [ ] Bisa membuat fungsi generic sederhana
- [ ] Paham utility types: `Partial`, `Pick`, `Omit`
- [ ] Bisa membuat class dengan access modifiers
- [ ] Paham perbedaan `unknown` dan `any`
- [ ] Bisa membaca kode TypeScript dari project nyata tanpa terlalu bingung
