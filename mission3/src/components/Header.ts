import Component from "./Component";

export default class Header extends Component {
  protected $target: HTMLElement;

  constructor(protected $parent: HTMLElement) {
    super($parent);
    this.$target = document.createElement("header");
    $parent.append(this.$target);

    this.render();
  }

  render() {
    this.$target.innerHTML = `
      <h1>Todo List</h1>
    `;
  }
}
