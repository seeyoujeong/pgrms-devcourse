import { TodoState } from "../types";

interface TodosService {
  addItem(items: TodoState[], item: string): TodoState[];
  toggleItem(items: TodoState[], id: number): TodoState[];
  deleteItem(items: TodoState[], id: number): TodoState[];
}

export const todosService: TodosService = {
  addItem(items, item) {
    return [...items, { text: item, isCompleted: false }];
  },
  toggleItem(items, id) {
    return items.map((item, index) => ({
      ...item,
      ...(id === index && { isCompleted: !item.isCompleted }),
    }));
  },
  deleteItem(items, id) {
    return items.filter((_, index) => id === index);
  },
};
