class NullNode {
  constructor() {
    this.value = null;
    this.height = -1;
  }

  get left() {
    return new NullNode()
  }

  get right() {
    return new NullNode()
  }

  isBalanced() {
    return true
  }

  getBalanceFactor() {
    return 0
  }
}

export {
  NullNode
};