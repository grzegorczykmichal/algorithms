import {
  Node,
  NullNode
} from "./../Node"

import {
  rotateLeft,
  rotateRight,
} from "./../Operations"

class AVL {

  constructor() {

  }

  add(node = new NullNode(), value) {
    if (node.value === null) {
      return new Node(value);
    }

    if (node.value === value) {
      return node;
    }

    if (value < node.value) {
      node.left = this.add(node.left, value);
    } else if (value > node.value) {
      node.right = this.add(node.right, value);
    }

    const balanceFactor = node.getBalanceFactor();

    if (balanceFactor > 1) {
      if (value > node.left.value) {
        node.left = AVL.RotateLeft(node.left);
      }
      return AVL.RotateRight(node);
    }

    if (balanceFactor < -1) {
      if (value < node.right.value) {
        node.right = AVL.RotateRight(node.right);
      }
      return AVL.RotateLeft(node);
    }

    return node;
  }

  static RotateLeft(node = new NullNode()) {
    return rotateLeft(node);
  }

  static RotateRight(node = new NullNode()) {
    return rotateRight(node);
  }
}

export {
  AVL
};