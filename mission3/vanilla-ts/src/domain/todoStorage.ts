import { StorageService } from "../service";
import { TodoState } from "../types";

const TODO_STORAGE_KEY = "todo_storage";

const todoStorage = new StorageService<TodoState[]>(TODO_STORAGE_KEY, []);

export default todoStorage;
