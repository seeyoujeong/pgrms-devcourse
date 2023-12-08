export class Node {
  value: number;
  left: Node | null;
  right: typeof this.left;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  addNode(childNode: Node, direction: "left" | "right") {
    this[direction] = childNode;

    return this;
  }
}

export class Tree {
  root: Node;

  constructor(rootNode: Node) {
    this.root = rootNode;
  }

  preorder(node: Node) {
    const array: Node["value"][] = [];

    const preorderHelper = (node: Node | null) => {
      if (node === null) return;

      array.push(node.value);
      preorderHelper(node.left);
      preorderHelper(node.right);
    };

    preorderHelper(node);

    return array;
  }
}
