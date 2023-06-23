export default class TodoForm {
  $target: HTMLElement;

  constructor(
    public $parent: HTMLElement,
    public addItem: (text: string) => void
  ) {
    this.$target = document.createElement("form");
    this.$target.className = "todoForm";
    $parent.append(this.$target);

    this.render();

    this.$target.addEventListener("submit", (e) => {
      e.preventDefault();

      const $input: HTMLInputElement =
        document.querySelector("input[name=todo]")!;
      const text = $input.value;

      if (text.length > 1) {
        $input.value = "";
        addItem(text);
      }
    });
  }

  render() {
    this.$target.innerHTML = `
      <input type="text" name="todo">
      <button>add</button>
    `;
  }
}
