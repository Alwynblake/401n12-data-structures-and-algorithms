'use strict';

const Node = require('./lib/node');

 function findmaxvalue (tree) {
  if (!tree.root) {
    return
  }
  let highvalue = tree.root.value;
  function recurse(node) {
    if(node.value > highvalue) {
      highvalue = node.value;
    }
    if(node.left) { recurse(node.left)}
    if(node.right) { recurse(node.right)}
    }
    recurse(tree);
  return highvalue;
}

module.exports = findmaxvalue;





/////////
// class BST {
//   constructor(value) {
//     this.root = new Node(value);
//     this.count = 1
//   }
//
//   findmaxvalue() {
//     let currentNode = this.root;
// // continue to traverse right, until no more children
//     while (currentNode.right) {
//       currentNode = currentNode.right
//     }
//
//     return currentNode.value
//   }
// }