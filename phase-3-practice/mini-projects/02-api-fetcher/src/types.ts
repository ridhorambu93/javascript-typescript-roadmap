/**
 * TypeScript interfaces untuk JSONPlaceholder API response
 *
 * Cek response aslinya di:
 * https://jsonplaceholder.typicode.com/users/1
 * https://jsonplaceholder.typicode.com/posts?userId=1
 * https://jsonplaceholder.typicode.com/comments?postId=1
 *
 * TODO: Lengkapi semua interface berdasarkan response API aslinya
 * Buka URL di atas di browser, lihat strukturnya, lalu definisikan di sini
 */

// TODO: definisikan interface ApiUser
// Hint: punya id, name, username, email, address (nested), phone, website, company (nested)
export interface ApiUser {
    id: number
    name: string
    username: string
    email: string
    // lengkapi sisanya...
}

// TODO: definisikan interface ApiPost
// Hint: punya userId, id, title, body
export interface ApiPost {
    // lengkapi...
}

// TODO: definisikan interface ApiComment
// Hint: punya postId, id, name, email, body
export interface ApiComment {
    // lengkapi...
}
