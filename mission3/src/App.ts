import { Header, TodoForm, TodoList } from "./components";
import { createTarget } from "./service/createTarget";
import { todosService } from "./domain/todosService";
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
      props: {
        title: "Todo List",
      },
    });
    new TodoForm({
      element: {
        $parent: this.$target,
        $target: createTarget("form", { class: "todoForm" }),
      },
      props: {
        addItem: (item: string) => {
          this.setState(todosService.addItem(this.state, item));
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
          this.setState(todosService.toggleItem(this.state, id));
        },
        deleteItem: (id: number) => {
          this.setState(todosService.deleteItem(this.state, id));
        },
      },
    });
  }

  setState(nextState: TodoState[]) {
    this.state = nextState;
    this.todoList.setState(this.state);
  }
}
