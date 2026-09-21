/**
 * File storage untuk Todo
 * Lengkapi semua bagian yang bertanda TODO
 */

import * as fs from 'fs/promises'
import * as path from 'path'
import { Todo } from './todo'

export class TodoStorage {
    constructor(private filePath: string) {}

    async read(): Promise<Todo[]> {
        // TODO:
        // 1. Cek apakah file ada
        // 2. Kalau tidak ada, return array kosong
        // 3. Kalau ada, baca file dan parse JSON
        // 4. Handle error kalau JSON tidak valid
        try {
            const content = await fs.readFile(this.filePath, 'utf-8')
            return JSON.parse(content) as Todo[]
        } catch (err: unknown) {
            // File belum ada = belum ada todo
            if ((err as NodeJS.ErrnoException).code === 'ENOENT') {
                return []
            }
            throw new Error('Gagal membaca file todo')
        }
    }

    async write(todos: Todo[]): Promise<void> {
        // TODO:
        // 1. Pastikan direktori ada
        // 2. Tulis todos ke file sebagai JSON formatted
        const dir = path.dirname(this.filePath)
        await fs.mkdir(dir, { recursive: true })
        await fs.writeFile(this.filePath, JSON.stringify(todos, null, 2), 'utf-8')
    }
}
