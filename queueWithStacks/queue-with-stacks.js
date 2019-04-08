'use strict';


const PseudoQueue = (root) => {
  const queue = [];
  queue.push(root);

  while(queue.length > 0) {

    const current = queue.shift();

    console.log(current.value);

    if (current.left)
      queue.push(current.left);
    if (current.right)
      queue.push(current.right);
  }
};
PseudoQueue(tree.root);


// class LinkedList {
//   constructor() {
//     this.head = null;
//   }