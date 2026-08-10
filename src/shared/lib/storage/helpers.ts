


export function setToStorage<T>(key: string, value: T): void {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(`Ошибка при сохранении данных в localStorage по ключу "${key}":`, error);
    }
}

export function getFromStorage<T>(key: string): T | null {
    try {
        const rawData = localStorage.getItem(key);
        if (rawData === null) return null;
        return JSON.parse(rawData) as T;
    } catch (error) {
        console.error(`Ошибка при чтении данных из localStorage по ключу "${key}":`, error);
        return null;
    }
}