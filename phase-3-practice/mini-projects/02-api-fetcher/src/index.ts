/**
 * MINI PROJECT 2 — API Fetcher
 *
 * Fetch data dari JSONPlaceholder API, transform, dan tampilkan.
 *
 * API docs: https://jsonplaceholder.typicode.com
 *
 * Cara jalankan:
 * ts-node src/index.ts users          → tampilkan semua user
 * ts-node src/index.ts posts 1        → tampilkan posts dari user id 1
 * ts-node src/index.ts comments 1     → tampilkan comments dari post id 1
 */

import { ApiService } from './api'
import { Cache } from './cache'

const cache = new Cache()
const api = new ApiService(cache)

async function main() {
    const [, , command, arg] = process.argv

    try {
        switch (command) {
            case 'users': {
                // TODO: fetch dan tampilkan semua user
                // Format: "1. Leanne Graham (Bret) - leanne@april.biz"
                break
            }
            case 'posts': {
                // TODO: fetch posts dari user dengan id = arg
                // Kalau arg tidak ada, tampilkan error
                // Format: "[1] sunt aut facere repellat provident..."
                break
            }
            case 'comments': {
                // TODO: fetch comments dari post dengan id = arg
                // Format: "- Eliseo@gardner.biz: laudantium enim quasi..."
                break
            }
            default: {
                console.log('Perintah: users | posts <userId> | comments <postId>')
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
