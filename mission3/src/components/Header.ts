export default class Header {
  $parent: HTMLElement;
  $target: HTMLElement;

  constructor($parent: HTMLElement) {
    this.$parent = $parent;
    this.$target = document.createElement("header");
    this.$parent.append(this.$target);

    this.render();
  }

  render() {
    this.$target.innerHTML = `
      <h1>Todo List</h1>
    `;
  }
}
