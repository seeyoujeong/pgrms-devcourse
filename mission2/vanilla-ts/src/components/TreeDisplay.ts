class TreeDisplay {
  targetEl: HTMLElement;
  state: number[];

  constructor(parentEl: HTMLElement, state: number[]) {
    this.targetEl = document.createElement("div");
    parentEl.append(this.targetEl);

    this.state = state;
  }

  render() {
    const list = this.state.map((num) => `<li>${num}</li>`).join("");

    this.targetEl.innerHTML = `<ul>${list}</ul>`;
  }

  setState(nextState: number[]) {
    this.state = nextState;
    this.render();
  }
}

export default TreeDisplay;
