import Component from "../core/Component";
import { TodoState, ComponentProps } from "../types";

interface TodoListProps {
  initialState: TodoState[];
  toggleItem(id: number): void;
  deleteItem(id: number): void;
}

export default class TodoList extends Component<TodoListProps> {
  state: TodoState[];

  constructor({ element, props }: ComponentProps<TodoListProps>) {
    super({ element, props });

    this.state = this.props.initialState;
  }

  setState(nextState: TodoState[]) {
    this.state = nextState;
    this.render();
  }

  protected render() {
    const currentState = this.state ?? this.props.initialState;
    const list = currentState
      .map(
        ({ text, isCompleted }, index) => `
          <li data-id="${index}">
            <label>
              <input type="checkbox" ${isCompleted && "checked"}>
              <span>${isCompleted ? `<del>${text}</del>` : `${text}`}</span>
            </label>
            <button>delete</button>
          </li>
        `
      )
      .join("");

    this.$target.innerHTML = `<ul>${list}</ul>`;
  }

  protected addEvent() {
    const { toggleItem, deleteItem } = this.props;

    this.$target.addEventListener("click", ({ target }) => {
      const $li = (target as HTMLLIElement).closest("li");
      const id = Number($li?.dataset.id);

      if ((target as HTMLLabelElement).closest("label")) {
        toggleItem(id);
      }

      if ((target as HTMLButtonElement).closest("button")) {
        deleteItem(id);
      }
    });
  }
}
