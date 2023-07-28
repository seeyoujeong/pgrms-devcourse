import { Header, TodoForm, TodoList } from "./components";
import { createTarget } from "./service/createTarget";
import { TodoState } from "./types";

interface AppProps {
  $parent: HTMLBodyElement;
}

export default class App {
  $target: HTMLElement;
  state: TodoState[];
  todoList: TodoList;

  constructor({ $parent }: AppProps) {
    this.$target = document.createElement("main");
    $parent.prepend(this.$target);

    this.state = [{ text: "test", isCompleted: false }];

    new Header({
      element: {
        $parent: this.$target,
        $target: createTarget("header", {}),
      },
      props: {},
    });
    new TodoForm({
      element: {
        $parent: this.$target,
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
        $parent: this.$target,
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
