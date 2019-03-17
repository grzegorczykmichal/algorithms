const inOrder = function inOrder(cb, accumulator) {
  return function inOrderRecursive(node) {
    if (node.value === null) {
      return null;
    }

    if (node.left.value !== null) {
      accumulator = inOrderRecursive(node.left);
    }

    accumulator = cb(accumulator, node.value);

    if (node.right.value !== null) {
      accumulator = inOrderRecursive(node.right);
    }

    return accumulator;
  }
}

const postOrder = function postOrder(cb, accumulator) {
  return function postOrderRecursive(node) {
    if (node.value === null) {
      return null;
    }

    if (node.left.value !== null) {
      accumulator = postOrderRecursive(node.left);
    }

    if (node.right.value !== null) {
      accumulator = postOrderRecursive(node.right);
    }

    accumulator = cb(accumulator, node.value);

    return accumulator;
  }
}

const preOrder = function preOrder(cb, accumulator) {
  return function preOrderRecursive(node) {
    if (node.value === null) {
      return null;
    }

    accumulator = cb(accumulator, node.value);

    if (node.left.value !== null) {
      accumulator = preOrderRecursive(node.left);
    }

    if (node.right.value !== null) {
      accumulator = preOrderRecursive(node.right);
    }

    return accumulator;
  }
}

const levelOrder = function levelOrder(cb, accumulator) {
  const queue = [];
  return function (root) {
    queue.push(root);
    while (queue.length > 0) {
      const node = queue.shift();

      accumulator = cb(accumulator, node.value);

      if (node.left.value) {
        queue.push(node.left);
      }

      if (node.right.value) {
        queue.push(node.right);
      }
    }
    return accumulator;
  }
}

export {
  preOrder,
  inOrder,
  postOrder,
  levelOrder
};