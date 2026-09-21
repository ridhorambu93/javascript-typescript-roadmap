/**
 * MINI PROJECT 1 — CLI Todo App
 *
 * Ini adalah starter file. Lengkapi semua bagian yang bertanda TODO.
 *
 * Cara jalankan:
 * ts-node src/index.ts add "Belajar TypeScript"
 * ts-node src/index.ts list
 * ts-node src/index.ts done 1
 * ts-node src/index.ts delete 1
 */

import { TodoStorage } from './storage'
import { TodoService } from './todo'

const storage = new TodoStorage('./todos.json')
const service = new TodoService(storage)

async function main() {
    const [, , command, ...args] = process.argv

    try {
        switch (command) {
            case 'add': {
                // TODO: ambil text dari args[0], tambahkan todo baru
                break
            }
            case 'list': {
                // TODO: tampilkan semua todo
                // Format: "[1] [ ] Belajar TypeScript"
                //         "[2] [x] Setup project"
                break
            }
            case 'done': {
                // TODO: ambil id dari args[0], tandai sebagai selesai
                break
            }
            case 'delete': {
                // TODO: ambil id dari args[0], hapus todo
                break
            }
            default: {
                console.log('Perintah tidak dikenal.')
                console.log('Gunakan: add | list | done | delete')
            }
        }
    } catch (err) {
        if (err instanceof Error) {
            console.error('Error:', err.message)
        }
        process.exit(1)
    }
}

main()
