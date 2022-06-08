import React, { Component } from "react";

export default class RedAndBlackTree extends Component {
  constructor() {
    super();
    this.root = null;
  }
  insert = (key, res) => {
    if (!Number.isInteger(key)) return;
    const newNode = new BinaryNode(key);

    if (this.root === null) {
      this.root = newNode;
      res.push(this.root);
    } else {
      res.push(this.insertNode(this.root, newNode));
    }
    return res;
  };
  remove = (key) => {
    if (!Number.isInteger(key)) return;
    this.root = this.removeNode(this.root, key);
  };
  removeNode = (node, key) => {
    if (node === null) return null;
    else if (key < node.key) {
      //go left

      this.removeNode(node.left, key);
    } else if (key > node.right) {
      //go left
      this.removeNode(node.right, key);
    } else {
      if (node.left === null && node.right === null) {
        node = null;
      }
      if (node.left === null) {
        node = node.right;
      } else if (node.right === null) {
        node = node.left;
      }
    }
    return node;
  };
  insertNode = (node, newNode) => {
    if (node.root < newNode.root) {
      //go left
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    } else if (node.root > newNode.root) {
      //go left
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    }
    console.log("node", node);
    return node;
  };
  find(node, key) {
    if (node === null) return null;
    else if (key < node.key) return this.find(node.left, key);
    else if (key > node.key) return this.find(node.right, key);
    else return node;
  }
  inorder(node, fn) {
    if (node !== null) {
      this.inorder(node.left, fn);
      fn(node);
      this.inorder(node.right, fn);
    }
  }
  preorder(node, fn) {
    if (node !== null) {
      fn(node);
      this.preorder(node.left, fn);

      this.preorder(node.right, fn);
    }
  }
  postorder(node, fn) {
    if (node !== null) {
      this.postorder(node.left, fn);

      this.postorder(node.right, fn);
      fn(node);
    }
  }
  componentDidMount = () => {
    let arr = [50, 30, 20, 25, 60, 75];
    let res = [];
    let tree = arr.map((ele) => {
      return this.insert(ele, res);
    });
    console.log(tree[0], res[0]);
  };
  render() {
    return <div>{console.log(this.root)}</div>;
  }
}

class BinaryNode {
  constructor(key) {
    this.root = key;
    this.left = null;
    this.right = null;
  }
}
