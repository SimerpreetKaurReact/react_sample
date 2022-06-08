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
  height(N) {
    if (N === null) return 0;
    return N.height;
  }
  max(a, b) {
    return a > b ? a : b;
  }
  getBalance(node) {
    if (node == null) return 0;
    return this.height(node.left) - this.height(node.right);
  }
  rightRotate(node) {
    console.log("Right Rotate: ", node);
    let y = node.left;
    let yr = y.right;
    node.left = yr;
    y.right = node;
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
    y.height = 1 + Math.max(this.height(y.left), this.height(y.right));
    return y;
  }
  leftRotate(node) {
    console.log("Left Rotate: ", node);
    let y = node.right;
    let yl = y.left;
    node.right = yl;
    y.left = node;
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
    y.height = 1 + Math.max(this.height(y.left), this.height(y.right));
    return y;
  }
  preOrder(node) {
    if (node != null) {
      document.write(node.key + " ");
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
  insert = (key, res) => {
    if (!Number.isInteger(key)) return;
    const newNode = new BinaryNode(key);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.root = this.insertToAVL(this.root, key);
    }
    console.log("inside insert final", this.root);
    return;
  };
  insertToAVL(node, data) {
    if (data < node.root) {
      if (node.left === null) node.left = new BinaryNode(data);
      else node.left = this.insertToAVL(node.left, data);
    } else if (data > node.root) {
      if (node.right === null) node.right = new BinaryNode(data);
      else node.right = this.insertToAVL(node.right, data);
    } else return node;

    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
    //checek balancinf
    let balance = this.getBalance(node);
    console.log("Node: ", node);
    console.log("Balance: ", balance);
    if (balance > 1) {
      if (data > node.left.root) {
        node.left = this.leftRotate(node.left);
      }
      return this.rightRotate(node);
    }
    if (balance < -1) {
      if (data < node.right.root) {
        node.right = this.rightRotate(node.right);
      }
      return this.leftRotate(node);
    }

    return node;
  }
  componentDidMount = () => {
    let arr = [5, 1, 4, 3];

    let tree = arr.map((ele) => {
      return this.insert(ele);
    });
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
    this.height = 1;
  }
}
