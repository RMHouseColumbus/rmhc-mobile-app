export default class BasicCache {
  private _entries: Map<string, any>;

  constructor() {
    this._entries = new Map();
  }

  has(key: string) {
    return this._entries.has(key);
  }

  read<T>(key: string) {
    return this._entries.get(key) as T;
  }

  put<T>(key: string, value: T) {
    this._entries.set(key, value);
    return value;
  }
}
