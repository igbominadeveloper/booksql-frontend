export default class LocalStorageService {
    public static setItem(key: string, value: string): void {
        window.localStorage.setItem(key, value);
    }

    public static getItem(key: string): any {
        const item = window.localStorage.getItem(key);
        return item;
    }
}
