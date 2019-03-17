import {
  AVL
} from "./Tree";
import {
  toArray
} from "./Tree/Operations";

let tree = new AVL();

let root = tree.add(undefined, 100);
root = tree.add(root, 10);
root = tree.add(root, 200);
root = tree.add(root, 20);
root = tree.add(root, 5);
root = tree.add(root, 300);
root = tree.add(root, 400);
root = tree.add(root, 500);
root = tree.add(root, 450);

console.log(toArray()(root));