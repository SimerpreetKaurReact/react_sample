// 1) Perform standard BST insert for w.
// 2) Starting from w, travel up and find the first unbalanced node.
// Let z be the first unbalanced node, y be the child of z that comes on the path from w to z and
// x be the grandchild of z that comes on the path from w to z.
// 3) Re-balance the tree by performing appropriate rotations on the subtree rooted with z.
//There can be 4 possible cases that needs to be handled as x, y and z can be arranged in 4 ways.
//Following are the possible 4 arrangements:
// a) y is left child of z and x is left child of y (Left Left Case)
// b) y is left child of z and x is right child of y (Left Right Case)
// c) y is right child of z and x is right child of y (Right Right Case)
// d) y is right child of z and x is left child of y (Right Left Case)
import React, { Component } from "react";

// class checkbinarySearchTRee {
//   //Function to check whether a Binary Tree is BST or not.
//   checkBST(root, bool) {
//     if (root === null) return 1;
//     else {
//       if (root.left != null && root.left.data > root.data) {
//         return false;
//       }
//       if (root.right != null && root.right.data < root.data) {
//         return false;
//       }
//       if (!this.checkBST(root.left) || !this.checkBST(root.rigth)) {
//         return false;
//       }
//     }
//   }
//   isBST(root) {
//     let bool = 1;
//     bool = this.checkBST(root, bool);
//     return bool;
//   }
// }

export class AVLTree extends React.Component {
  constructor() {
    super();
    this.root = null;
  }
  componentDidMount = () => {
    let arr = [5, 1, 4, 3];
    let some = arr.map((ele) => this.insert(ele));
  };
  isRed(node) {
    if (!node) return BLACK;
    return node.color;
  }
  rightRotate(node) {
    console.log("Right Rotate: ", node);
    let y = node.left;
    let yr = y.right;
    node.left = yr;
    y.right = node;
    y.color = node.color;
    node.color = RED;
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
    y.height = 1 + Math.max(this.height(y.left), this.height(y.right));
    return y;
  }
  flipColors(node) {
    node.color = RED;
    node.left.color = BLACK;
    node.right.color = BLACK;
  }
  leftRotate(node) {
    console.log("Left Rotate: ", node);
    let y = node.right;
    let yl = y.left;
    node.right = yl;
    y.left = node;
    y.color = node.color;
    node.color = RED;
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
    y.height = 1 + Math.max(this.height(y.left), this.height(y.right));
    return y;
  }
  insert = (ele) => {
    if (!Number.isInteger(ele)) return;
    else {
      if (this.root == null) {
        this.root = new BinaryNode(ele);
      } else {
        this.root = this.insertAVL(this.root, ele);
      }
    }
  };
  height = (N) => {
    if (N == null) return 0;
    return N.height;
  };
  getBalance(node) {
    if (node == null) return 0;
    return this.height(node.left) - this.height(node.right);
  }
  insertAVL = (node, ele) => {
    if (node.key < ele) {
      if (node.right === null) node.right = new BinaryNode(ele);
      else node.right = this.insertAVL(node.right, ele);
    } else if (node.key > ele) {
      if (node.left === null) node.left = new BinaryNode(ele);
      else node.left = this.insertAVL(node.left, ele);
    } else return node;
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
    let balance = this.getBalance(node);
    console.log(balance);
    if (this.isRed(node.right) && !this.isRed(node.left)) {
      node = this.leftRotate(node);
    }
    if (this.isRed(node.left) && this.isRed(node.left.left)) {
      node = this.rightRoate(node);
    }
    if (this.isRed(node.left) && this.isRed(node.right)) {
      this.flipColors(node);
    }
  };
  render() {
    return <div>{console.log(this.root)}</div>;
  }
}
const RED = true;
const BLACK = false;
class BinaryNode {
  constructor(key) {
    this.root = key;
    this.left = null;
    this.right = null;
    this.color = RED;
  }
}
