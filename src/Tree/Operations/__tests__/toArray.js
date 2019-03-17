import {
  toArray,
  toArrayInOrder,
  toArrayPostOrder,
  toArrayPreOrder,
  toArrayLevelOrder
} from "./../toArray";

import {
  postOrder,
  preOrder,
  levelOrder
} from "./../traversal";

import {
  Node
} from "./../../Node";

let root = null;

beforeEach(() => {
  const c = new Node("C");
  const e = new Node("E");
  const h = new Node("H");

  const a = new Node("A");
  const d = new Node("D", c, e);
  const i = new Node("I", h);

  const b = new Node("B", a, d);
  const g = new Node("G", undefined, i);

  root = new Node("F", b, g);
});

test("Should create array in order", () => {
  expect(toArray()(root).join(',')).toEqual("A,B,C,D,E,F,G,H,I");
})

test("Should create array in order using shorthand version", () => {
  expect(toArrayInOrder(root).join(',')).toEqual("A,B,C,D,E,F,G,H,I");
})

test("Should create array post order", () => {
  expect(toArray(postOrder)(root).join(',')).toEqual("A,C,E,D,B,H,I,G,F");
})

test("Should create array post order using shorthand version", () => {
  expect(toArrayPostOrder(root).join(',')).toEqual("A,C,E,D,B,H,I,G,F");
})

test("Should create array pre order", () => {
  expect(toArray(preOrder)(root).join(',')).toEqual("F,B,A,D,C,E,G,I,H");
})

test("Should create array pre order using shorthand version", () => {
  expect(toArrayPreOrder(root).join(',')).toEqual("F,B,A,D,C,E,G,I,H");
})

test("Should create array level order", () => {
  expect(toArray(levelOrder)(root).join(',')).toEqual("F,B,G,A,D,I,C,E,H");
})

test("Should create array level order using shorthand version", () => {
  expect(toArrayLevelOrder(root).join(',')).toEqual("F,B,G,A,D,I,C,E,H");
})