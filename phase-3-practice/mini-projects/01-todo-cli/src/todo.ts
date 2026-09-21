/**
 * Todo interface dan business logic
 * Lengkapi semua bagian yang bertanda TODO
 */

import { TodoStorage } from './storage'

// TODO: definisikan interface Todo
export interface Todo {
    id: number
    text: string
    completed: boolean
    createdAt: Date
}

export class TodoService {
    constructor(private storage: TodoStorage) {}

    async getAll(): Promise<Todo[]> {
        // TODO: ambil semua todo dari storage
        return []
    }

    async add(text: string): Promise<Todo> {
        // TODO:
        // 1. Ambil semua todo yang ada
        // 2. Generate id baru (max id + 1, atau 1 kalau kosong)
        // 3. Buat todo baru
        // 4. Simpan ke storage
        // 5. Return todo baru
        throw new Error('Belum diimplementasikan')
    }

    async markDone(id: number): Promise<Todo> {
        // TODO:
        // 1. Cari todo dengan id tersebut
        // 2. Kalau tidak ada, throw Error
        // 3. Update completed = true
        // 4. Simpan ke storage
        // 5. Return todo yang diupdate
        throw new Error('Belum diimplementasikan')
    }

    async delete(id: number): Promise<void> {
        // TODO:
        // 1. Cari todo dengan id tersebut
        // 2. Kalau tidak ada, throw Error
        // 3. Hapus dari array
        // 4. Simpan ke storage
        throw new Error('Belum diimplementasikan')
    }
}
