import {
  inOrder,
  preOrder,
  postOrder,
  levelOrder
} from "./index";

const toArray = (order = inOrder) => {
  return order(
    function (accumulator, value) {
      return accumulator.concat([value]);
    },
    []
  );
}

const toArrayInOrder = toArray();
const toArrayPreOrder = toArray(preOrder);
const toArrayPostOrder = toArray(postOrder);
const toArrayLevelOrder = toArray(levelOrder);

export {
  toArray,
  toArrayInOrder,
  toArrayPreOrder,
  toArrayPostOrder,
  toArrayLevelOrder
};