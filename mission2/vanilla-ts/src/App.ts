import TreeDisplay from "./components/TreeDisplay";
import TreeFrom from "./components/TreeForm";

interface AppState {
  tree: number[];
}

class App {
  state: AppState;
  treeDisplay: TreeDisplay;

  constructor(parentEl: HTMLElement) {
    const targetEl = document.createElement("main");
    parentEl.append(targetEl);
    this.state = {
      tree: [],
    };

    new TreeFrom({
      parentEl: targetEl,
      addNode: (value: number) => {
        const nextState = [...this.state.tree, value];

        this.setState({ tree: nextState });
      },
    });

    this.treeDisplay = new TreeDisplay(targetEl, this.state.tree);
  }

  setState(nextState: AppState) {
    this.state = {
      ...this.state,
      ...nextState,
    };
    this.treeDisplay.setState(this.state.tree);
  }
}

export default App;
