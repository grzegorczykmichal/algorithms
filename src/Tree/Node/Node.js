import {
  NullNode
} from "./NullNode";

class Node {
  constructor(value, left = new NullNode(), right = new NullNode()) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
  get height() {
    return 1 + Math.max(this.left.height, this.right.height);
  }

  isBalanced() {
    return Math.abs(this.getBalanceFactor()) <= 1;
  }

  getBalanceFactor() {
    return this.left.height - this.right.height;
  }
}

export {
  Node
};