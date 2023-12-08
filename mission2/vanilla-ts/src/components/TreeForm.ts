interface TreeFormProps {
  parentEl: HTMLElement;
  addNode: (value: number) => void;
}

class TreeFrom {
  targetEl: HTMLElement;
  addNode: (value: number) => void;

  constructor({ parentEl, addNode }: TreeFormProps) {
    this.targetEl = document.createElement("form");
    parentEl.append(this.targetEl);

    this.addNode = addNode;

    this.render();
    this.addEvent();
  }

  render() {
    this.targetEl.innerHTML = `
      <input class="tree_input" type="text" />
      <button>추가</button>
    `;
  }

  addEvent() {
    this.targetEl.addEventListener("submit", (e) => {
      e.preventDefault();

      const inputEl: HTMLInputElement = document.querySelector(".tree_input")!;
      const value = Number(inputEl.value);

      if (!Number.isNaN(value)) {
        this.addNode(value);
        inputEl.value = "";
      }
    });
  }
}

export default TreeFrom;
