import React from "react";
import "./App.css";

export default class TreeLeaf extends React.Component {
  constructor() {
    super();
    this.state = {
      parentNodes: [0],
      leafnodesRoot2: [],
      root1: [3, 5, 1, 6, 2, 9, 8, null, null, 7, 4],
      root2: [3, 5, 1, 6, 7, 4, 2, null, null, null, null, null, null, 9, 8],
    };
  }

  componentDidMount = () => {
    for (let i = 1; i < this.state.root1.length - 1; i++) {
      let parent = Math.floor((i - 1) / 2);
      if (this.state.root1[i] !== null) {
        this.state.parentNodes.push(parent);
      }
    }

    console.log(this.state.parentNodes, [...new Set(this.state.parentNodes)]);
    for (let i = 0; i < this.state.root1.length - 1; i++) {
      if (i) {
        this.state.leafnodesRoot2.push();
      }
    }
  };
  render() {
    return <h2>You are a {this.state.parentNodes}</h2>;
  }
}

//max nodes at level l  2^l with level of root 0
//max nodes in  a binary tree of heigth h 2^l-1 , height at root level is 1
// In a Binary Tree with N nodes, minimum possible height or the minimum number of levels is Log2(N+1).
//A Binary Tree with L leaves has at least | Log2L |+ 1   levels.
//in Binary tree where every node has 0 or 2 children, the number of leaf nodes is always one more than nodes with two children.
//Full Binary Tree A Binary Tree is a full binary tree if every node has 0 or 2 children
//Complete Binary Tree: A Binary Tree is a Complete Binary Tree if all the levels are completely filled except possibly the last level and the last level has all keys as left as possible
//Perfect Binary Tree A Binary tree is a Perfect Binary Tree in which all the internal nodes have two children and all leaf nodes are at the same level.
//the AVL tree maintains O(Log n) height by making sure that the difference between the heights of the left and right subtrees is at most 1.
// Red-Black trees maintain O(Log n) height by making sure that the number of Black nodes on every root to leaf paths is the same and there are no adjacent red nodes
//A degenerate (or pathological) tree A Tree where every internal node has one child. Such trees are performance-wise same as linked lis
//Inorder (Left, Root, Right)
//Preorder (Root, Left, Right)
//Postorder (Left, Right, Root)
//In the case of binary search trees (BST), Inorder traversal gives nodes in non-decreasing order.
// To get nodes of BST in non-increasing order, a variation of Inorder traversal where Inorder traversals reversed can be used.
//Preorder traversal is used to create a copy of the tree. Preorder traversal is also used to get prefix expression on an expression tree.
//Postorder traversal is used to delete the tree.
