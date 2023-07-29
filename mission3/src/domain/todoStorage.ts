import { getStorageItem, setStorageItem } from "../service";
import { TodoState } from "../types";

const TODO_STORAGE_KEY = "todo_storage";

class StorageService<T> {
  #storageKey;
  #defaultValue;

  constructor(storageKey: string, defaultValue: T) {
    this.#storageKey = storageKey;
    this.#defaultValue = defaultValue;
  }

  getData() {
    return getStorageItem(this.#storageKey, this.#defaultValue);
  }

  setData(data: TodoState[]) {
    return setStorageItem(this.#storageKey, data);
  }
}

const todoStorage = new StorageService<TodoState[]>(TODO_STORAGE_KEY, []);

export default todoStorage;
