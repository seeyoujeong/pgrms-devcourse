const storage = localStorage;

const getStorageItem = <T = unknown>(key: string, defaultValue: T): T => {
  try {
    const value = storage.getItem(key);

    return typeof value === "string" ? JSON.parse(value) : defaultValue;
  } catch (error) {
    console.error(error instanceof Error ? error.message : error);
    return defaultValue;
  }
};

const setStorageItem = <T = unknown>(key: string, value: T) => {
  storage.setItem(key, JSON.stringify(value));
};

export default class StorageService<T> {
  #storageKey;
  #defaultValue;

  constructor(storageKey: string, defaultValue: T) {
    this.#storageKey = storageKey;
    this.#defaultValue = defaultValue;
  }

  getData() {
    return getStorageItem(this.#storageKey, this.#defaultValue);
  }

  setData(data: T) {
    return setStorageItem(this.#storageKey, data);
  }
}
