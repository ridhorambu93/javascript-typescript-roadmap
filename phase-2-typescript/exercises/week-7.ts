/**
 * PHASE 2 — WEEK 7 EXERCISES
 * Topik: Utility Types, Classes, unknown vs any
 */

// ============================================================
// BASE INTERFACES (gunakan untuk semua soal)
// ============================================================

interface User {
    id: number
    name: string
    email: string
    password: string
    role: 'admin' | 'user' | 'guest'
    createdAt: Date
    updatedAt: Date
}

interface Product {
    id: number
    name: string
    description: string
    price: number
    stock: number
    category: string
    isActive: boolean
}

// ============================================================
// SOAL 1 — Partial & Required
// ============================================================
// a) Buat type UpdateUserDto menggunakan Partial (semua optional kecuali id)
// b) Buat type StrictProduct menggunakan Required

// JAWABAN:
type UpdateUserDto = // ...
type StrictProduct = // ...

// Buat fungsi update yang menerima UpdateUserDto
function updateUser(id: number, data: UpdateUserDto): void {
    console.log(`Updating user ${id}:`, data)
}

// Test — semua ini harus valid:
updateUser(1, { name: 'Budi' })
updateUser(1, { email: 'new@email.com', role: 'admin' })
updateUser(1, {})


// ============================================================
// SOAL 2 — Pick & Omit
// ============================================================
// a) Buat type PublicUser yang hanya punya: id, name, email, role
// b) Buat type SafeUser yang tidak punya: password
// c) Buat type ProductSummary yang hanya punya: id, name, price

// JAWABAN:
type PublicUser = // ...
type SafeUser = // ...
type ProductSummary = // ...

// Buat fungsi yang return PublicUser dari User
function toPublicUser(user: User): PublicUser {
    // JAWABAN:
}


// ============================================================
// SOAL 3 — Record
// ============================================================
// a) Buat type untuk menyimpan cache: key string, value User
// b) Buat type untuk permission map: key adalah role, value adalah array string

// JAWABAN:
type UserCache = // ...
type PermissionMap = // ...

const cache: UserCache = {}
const permissions: PermissionMap = {
    admin: ['read', 'write', 'delete'],
    user: ['read', 'write'],
    guest: ['read']
}


// ============================================================
// SOAL 4 — Class dengan Access Modifiers
// ============================================================
// Buat class ShoppingCart dengan:
// - private items: CartItem[]
// - private discount: number
// - public readonly id: string
// - constructor()
// - public addItem(product: ProductSummary, quantity: number): void
// - public removeItem(productId: number): void
// - public get total(): number (dengan discount)
// - public applyDiscount(percent: number): void
// - public checkout(): Order

interface CartItem {
    product: ProductSummary
    quantity: number
}

interface Order {
    id: string
    items: CartItem[]
    total: number
    createdAt: Date
}

class ShoppingCart {
    // JAWABAN:
}

// Test:
const cart = new ShoppingCart()
cart.addItem({ id: 1, name: 'Laptop', price: 15000000 }, 1)
cart.addItem({ id: 2, name: 'Mouse', price: 250000 }, 2)
cart.applyDiscount(10)
console.log(cart.total)  // (15000000 + 500000) * 0.9 = 13950000


// ============================================================
// SOAL 5 — unknown vs any
// ============================================================
// Perbaiki kode ini agar type-safe (ganti any dengan unknown + narrowing)

function parseApiResponse(response: any) {
    // Ini tidak aman — TypeScript tidak cek apapun
    return response.data.users.map((u: any) => u.name)
}

// JAWABAN: tulis ulang dengan unknown dan proper type checking
function safeParseApiResponse(response: unknown): string[] {
    // Lakukan type checking sebelum akses properti
    // JAWABAN:
}


// ============================================================
// SOAL 6 — Readonly & as const
// ============================================================

// a) Buat Readonly version dari User
type ImmutableUser = Readonly<User>

// b) Gunakan as const untuk config
const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    INTERNAL_ERROR: 500
} as const

// Buat type dari HTTP_STATUS values
type HttpStatusCode = typeof HTTP_STATUS[keyof typeof HTTP_STATUS]
// Harusnya: 200 | 201 | 400 | 401 | 404 | 500

function handleResponse(status: HttpStatusCode): string {
    // JAWABAN: return pesan untuk tiap status
}


// ============================================================
// SOAL 7 — ReturnType & Parameters
// ============================================================

function createUser(name: string, email: string, role: 'admin' | 'user') {
    return {
        id: Math.random(),
        name,
        email,
        role,
        createdAt: new Date()
    }
}

// Ambil return type dari createUser tanpa menulis ulang
type CreatedUser = ReturnType<typeof createUser>

// Ambil parameter types dari createUser
type CreateUserParams = Parameters<typeof createUser>

// Buat fungsi yang menerima parameter yang sama dengan createUser
function createUserAndLog(...args: CreateUserParams): CreatedUser {
    const user = createUser(...args)
    console.log('User created:', user.name)
    return user
}


// ============================================================
// SOAL 8 — CHALLENGE: Type-safe Event System
// ============================================================
// Buat simple event emitter yang type-safe

interface EventMap {
    'user:created': User
    'user:updated': { id: number; changes: Partial<User> }
    'user:deleted': { id: number }
    'product:created': Product
}

class TypedEventEmitter {
    private listeners: Partial<{
        [K in keyof EventMap]: Array<(data: EventMap[K]) => void>
    }> = {}

    on<K extends keyof EventMap>(
        event: K,
        listener: (data: EventMap[K]) => void
    ): void {
        // JAWABAN:
    }

    emit<K extends keyof EventMap>(event: K, data: EventMap[K]): void {
        // JAWABAN:
    }

    off<K extends keyof EventMap>(
        event: K,
        listener: (data: EventMap[K]) => void
    ): void {
        // JAWABAN:
    }
}

// Test:
const emitter = new TypedEventEmitter()

emitter.on('user:created', (user) => {
    // TypeScript tahu user adalah User
    console.log(`User created: ${user.name}`)
})

emitter.emit('user:created', {
    id: 1,
    name: 'Rye',
    email: 'rye@email.com',
    password: 'hashed',
    role: 'user',
    createdAt: new Date(),
    updatedAt: new Date()
})
