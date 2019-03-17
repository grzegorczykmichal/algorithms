import {
  rotateLeft,
  rotateRight,
} from "../rotation";

import {
  toArray,
} from "../toArray";

import {
  inOrder,
} from "../traversal";

import {
  Node
} from "../../Node";

test("Should rotate right", () => {
  const T1 = new Node("T1");
  const T2 = new Node("T2");
  const T3 = new Node("T3");
  const T4 = new Node("T4");

  const x = new Node("x", T1, T2);
  const y = new Node("y", x, T3);
  const root = new Node("z", y, T4);

  const rotatedRoot = rotateRight(root);
  expect(toArray(inOrder)(rotatedRoot).join(',')).toEqual("T1,x,T2,y,T3,z,T4");
})

test("Should rotate left", () => {

  const T1 = new Node("T1");
  const T2 = new Node("T2");
  const T3 = new Node("T3");
  const T4 = new Node("T4");

  const x = new Node("x", T3, T4);
  const y = new Node("y", T2, x);
  const root = new Node("z", T1, y);

  const rotatedRoot = rotateLeft(root);
  expect(toArray(inOrder)(rotatedRoot).join(',')).toEqual("T1,z,T2,y,T3,x,T4");
})