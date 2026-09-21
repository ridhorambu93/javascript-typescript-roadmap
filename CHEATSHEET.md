# Cheatsheet — JS Modern & TypeScript

> Referensi cepat. Isi sendiri seiring belajar.
> Bagian yang sudah ada ini adalah contoh — tambahkan catatan kamu sendiri di bawahnya.

---

## JavaScript Modern

### Variable
```javascript
const name = 'Rye'        // tidak bisa reassign
let count = 0             // bisa reassign
// jangan pakai var
```

### Arrow Function
```javascript
const fn = (a, b) => a + b
const fn = (a) => { ... return ... }
const fn = a => a * 2     // satu param, kurung bisa dihilangkan
```

### Destructuring
```javascript
const { name, age } = user
const { name: userName } = user          // rename
const { role = 'user' } = user           // default value
const [first, ...rest] = array
const { a: { b } } = nested             // nested
```

### Spread & Rest
```javascript
const merged = { ...obj1, ...obj2 }     // merge object
const copy = [...arr]                    // copy array
const combined = [...arr1, ...arr2]     // merge array
function fn(...args) {}                  // rest parameter
```

### Template Literal
```javascript
`Halo ${name}, umur ${age} tahun`
`${condition ? 'ya' : 'tidak'}`
```

### async/await
```javascript
async function fn() {
    try {
        const result = await somePromise()
        return result
    } catch (err) {
        console.error(err)
    }
}

// Parallel
const [a, b] = await Promise.all([fn1(), fn2()])
```

### Array Methods
```javascript
arr.map(x => x * 2)                     // transform semua
arr.filter(x => x > 0)                  // saring
arr.reduce((acc, x) => acc + x, 0)      // akumulasi
arr.find(x => x.id === 1)               // cari satu
arr.some(x => x > 10)                   // ada yang cocok?
arr.every(x => x > 0)                   // semua cocok?
arr.sort((a, b) => a - b)               // sort ascending
```

### Optional Chaining & Nullish Coalescing
```javascript
user?.address?.city                      // aman dari undefined
value ?? 'default'                       // default kalau null/undefined
value || 'default'                       // default kalau falsy (0, '', false juga kena)
```

---

## TypeScript

### Basic Types
```typescript
const name: string = 'Rye'
const age: number = 25
const active: boolean = true
const items: string[] = []
const tuple: [string, number] = ['Rye', 25]
```

### Interface
```typescript
interface User {
    id: number
    name: string
    email?: string          // optional
    readonly createdAt: Date // tidak bisa diubah
}
```

### Type Alias
```typescript
type Status = 'active' | 'inactive'
type ID = string | number
type Callback = (err: Error | null) => void
```

### Union & Intersection
```typescript
type A = string | number        // salah satu
type B = TypeX & TypeY          // keduanya
```

### Generics
```typescript
function first<T>(arr: T[]): T { return arr[0] }
interface Response<T> { data: T; status: number }
```

### Utility Types
```typescript
Partial<User>           // semua optional
Required<User>          // semua required
Pick<User, 'id'|'name'> // ambil beberapa
Omit<User, 'password'>  // hapus beberapa
Record<string, User>    // key-value map
Readonly<User>          // semua readonly
```

### Class
```typescript
class Foo {
    public name: string         // bisa diakses dari mana saja
    private secret: string      // hanya dari dalam class
    protected data: string      // dari dalam class dan turunan
    readonly id: string         // tidak bisa diubah

    constructor(public x: number) {} // shorthand
}
```

### Type Narrowing
```typescript
if (typeof x === 'string') { ... }
if (x instanceof Date) { ... }
if ('property' in obj) { ... }
```

---

## Catatan Pribadi

> Tambahkan catatan kamu sendiri di sini seiring belajar

### Hal yang sering bikin bingung:
-

### Trik yang berguna:
-

### Pattern yang sering muncul di codebase nyata:
-
