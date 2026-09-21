/**
 * Simple in-memory cache
 * Supaya tidak fetch ulang data yang sama
 */

export class Cache {
    private store = new Map<string, unknown>()

    set<T>(key: string, value: T): void {
        this.store.set(key, value)
    }

    get<T>(key: string): T | undefined {
        return this.store.get(key) as T | undefined
    }

    has(key: string): boolean {
        return this.store.has(key)
    }

    clear(): void {
        this.store.clear()
    }
}
