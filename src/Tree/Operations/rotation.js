import {
  NullNode,
  Node
} from '../Node';

const rotateLeft = function rotateLeft(node = new NullNode()) {
  const x = new Node(node.value, node.left, node.right.left);
  return new Node(node.right.value, x, node.right.right);
}

const rotateRight = function rotateRight(node = new NullNode()) {
  const y = new Node(node.value, node.left.right, node.right);
  return new Node(node.left.value, node.left.left, y);
}

export {
  rotateLeft,
  rotateRight
};