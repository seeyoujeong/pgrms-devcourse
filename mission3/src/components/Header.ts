import Component from "../core/Component";

export default class Header extends Component<object> {
  protected render() {
    this.$target.innerHTML = `
      <h1>Todo List</h1>
    `;
  }

  protected addEvent() {}
}
