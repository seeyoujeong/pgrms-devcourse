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

    this.$target.innerHTML = `
      Completed: ${completedCount} / Total: ${totalCount}
    `;
  }

  protected addEvent() {}
}
