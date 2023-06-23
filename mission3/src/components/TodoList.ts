import { Todo } from "../types/TodoAppTypes";

export default class TodoList {
  $target: HTMLElement;
  state: Todo[];

  constructor(
    public $parent: HTMLElement,
    public initialState: Todo[],
    public toggleItem: (id: number) => void,
    public deleteItem: (id: number) => void
  ) {
    this.$target = document.createElement("div");
    this.$target.className = "todoList";
    $parent.append(this.$target);

    this.state = initialState;

    this.render();

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

  setState(nextState: Todo[]) {
    this.state = nextState;
    this.render();
  }

  render() {
    const list = this.state
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
}
