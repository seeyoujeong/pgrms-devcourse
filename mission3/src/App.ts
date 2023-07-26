import { Header, TodoForm, TodoList } from "./components";
import { createTarget } from "./service/createTarget";
import { TodoState } from "./types";

export default class App {
  state: TodoState[];
  todoList: TodoList;

  constructor(protected $parent: HTMLElement) {
    const $target = document.createElement("main");
    $parent.prepend($target);

    this.state = [{ text: "test", isCompleted: false }];

    new Header({
      element: {
        $parent: $target,
        $target: createTarget("header", {}),
      },
      props: {},
    });
    new TodoForm({
      element: {
        $parent: $target,
        $target: createTarget("form", { class: "todoForm" }),
      },
      props: {
        addItem: (text: string) => {
          const nextState = [...this.state, { text, isCompleted: false }];
          this.setState(nextState);
        },
      },
    });
    this.todoList = new TodoList({
      element: {
        $parent: $target,
        $target: createTarget("div", { class: "todoList" }),
      },
      props: {
        initialState: this.state,
        toggleItem: (id: number) => {
          const nextState = this.state.map((todo, index) =>
            index === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
          );
          this.setState(nextState);
        },
        deleteItem: (id: number) => {
          const nextState = this.state.filter((_, index) => index !== id);
          this.setState(nextState);
        },
      },
    });
  }

  setState(nextState: TodoState[]) {
    this.state = nextState;
    this.todoList.setState(this.state);
  }
}
