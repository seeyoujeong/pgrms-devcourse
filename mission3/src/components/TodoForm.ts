import Component from "../core/Component";

interface TodoFormProps {
  addItem(text: string): void;
}

export default class TodoForm extends Component<TodoFormProps> {
  render() {
    this.$target.innerHTML = `
      <input type="text" name="todoInput">
      <button>add</button>
    `;
  }

  protected addEvent() {
    this.$target.addEventListener("submit", (e) => {
      e.preventDefault();

      const $input: HTMLInputElement = document.querySelector(
        "input[name=todoInput]"
      )!;
      const text = $input.value;

      if (text.length > 1) {
        $input.value = "";
        this.props.addItem(text);
      }
    });
  }
}
