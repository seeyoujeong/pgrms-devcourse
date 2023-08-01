import Component from "../core/Component";
import { ComponentProps, TodoCountState } from "../types";

interface TodoCountProps {
  initialState: TodoCountState;
}

export default class TodoCount extends Component<TodoCountProps> {
  state: TodoCountState;

  constructor({ element, props }: ComponentProps<TodoCountProps>) {
    super({ element, props });

    this.state = this.props.initialState;
  }

  setState(nextState: TodoCountState) {
    this.state = nextState;
    this.render();
  }

  protected render() {
    const { completedCount, totalCount } =
      this.state ?? this.props.initialState;
    const percent = (completedCount / totalCount) * 100 || 0;

    this.$target.innerHTML = `
      <div>Completed: ${completedCount} / Total: ${totalCount}</div>
      <div class="todo-count__progress-bar">
        <div class="todo-count__progress-fill" style="--percent: ${percent}%"></div>
      </div>
    `;
  }

  protected addEvent() {}
}
