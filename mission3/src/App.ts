import { Header, TodoForm, TodoList } from "./components";
import { Todo } from "./types/TodoAppTypes";

export default class App {
  state: Todo[];
  todoList: TodoList;

  constructor(protected $parent: HTMLElement) {
    const $target = document.createElement("main");
    $parent.prepend($target);

    this.state = [{ text: "test", isCompleted: false }];

    const addItem = (text: string) => {
      const nextState = [...this.state, { text, isCompleted: false }];
      this.setState(nextState);
    };

    const toggleItem = (id: number) => {
      const nextState = this.state.map((todo, index) =>
        index === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
      this.setState(nextState);
    };

    const deleteItem = (id: number) => {
      const nextState = this.state.filter((_, index) => index !== id);
      this.setState(nextState);
    };

    new Header({
      element: {
        $parent: $target,
        $target: document.createElement("header"),
      },
      props: {},
    });
    new TodoForm($target, addItem);
    this.todoList = new TodoList($target, this.state, toggleItem, deleteItem);
  }

  setState(nextState: Todo[]) {
    this.state = nextState;
    this.todoList.setState(this.state);
  }
}
