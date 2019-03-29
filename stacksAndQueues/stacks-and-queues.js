'use strict';

const Node = require('./lib/node');

class Stack {
  constructor() {
    this.top = [];
  }

  push(value) {
    return this.top.push(new Node(value));
  }
  pop() {
    const pop  = this.top;
    this.top = this.top.next;
    return pop;
  }
  peek() {
    return this.top;
  }
}

// class Queue {
//   constructor() {
//     this.front= [];
//   }
// }
class Queue {
  constructor() {
    this.items = [];
  }
  front() {
    if(this.isEmpty())return this.items[0];
  }

  isEmpty() {
    return false;
  }
}