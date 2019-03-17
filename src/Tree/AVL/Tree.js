import {
  NullNode
} from "./../Node"

class AVLTree {

  add(node = new NullNode(), value) {
    if (node.value === null) {
      return new TreeNode(value);
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
        node.left = AVLTree.RotateLeft(node.left);
      }
      return AVLTree.RotateRight(node);
    }

    if (balanceFactor < -1) {
      if (value < node.right.value) {
        node.right = AVLTree.RotateRight(node.right);
      }
      return AVLTree.RotateLeft(node);
    }

    return node;
  }

  static RotateLeft(root = new NullNode()) {
    const x = new TreeNode(root.value, root.left, root.right.left);
    return new TreeNode(root.right.value, x, root.right.right);
  }

  static RotateRight(root = new NullNode()) {
    const y = new TreeNode(root.value, root.left.right, root.right);
    return new TreeNode(root.left.value, root.left.left, y);
  }

}

export {
  AVLTree
};