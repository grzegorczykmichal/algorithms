import {
  Node
} from "../Node";

class AVLNode extends Node {
  constructor(...args) {
    super(...args)
  }

  isBalanced() {
    return Math.abs(this.getBalanceFactor()) <= 1;
  }

  getBalanceFactor() {
    return this.left.height - this.right.height;
  }
}

export {
  AVLNode as Node
};