/**
 * Fungsi-fungsi untuk fetch data dari JSONPlaceholder API
 * Lengkapi semua bagian yang bertanda TODO
 */

import { Cache } from './cache'
import { ApiUser, ApiPost, ApiComment } from './types'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export class ApiService {
    constructor(private cache: Cache) {}

    async getUsers(): Promise<ApiUser[]> {
        const cacheKey = 'users'

        // Cek cache dulu
        if (this.cache.has(cacheKey)) {
            console.log('(dari cache)')
            return this.cache.get<ApiUser[]>(cacheKey)!
        }

        // TODO:
        // 1. Fetch dari `${BASE_URL}/users`
        // 2. Cek apakah response ok (response.ok)
        // 3. Parse JSON
        // 4. Simpan ke cache
        // 5. Return data
        throw new Error('Belum diimplementasikan')
    }

    async getPostsByUser(userId: number): Promise<ApiPost[]> {
        const cacheKey = `posts-user-${userId}`

        if (this.cache.has(cacheKey)) {
            console.log('(dari cache)')
            return this.cache.get<ApiPost[]>(cacheKey)!
        }

        // TODO: fetch dari `${BASE_URL}/posts?userId=${userId}`
        throw new Error('Belum diimplementasikan')
    }

    async getCommentsByPost(postId: number): Promise<ApiComment[]> {
        const cacheKey = `comments-post-${postId}`

        if (this.cache.has(cacheKey)) {
            console.log('(dari cache)')
            return this.cache.get<ApiComment[]>(cacheKey)!
        }

        // TODO: fetch dari `${BASE_URL}/comments?postId=${postId}`
        throw new Error('Belum diimplementasikan')
    }
}
