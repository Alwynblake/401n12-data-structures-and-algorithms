'use strict';

const Node = require('./lib/node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {

    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    let current = this.head;
    // while there is a next value set that value of current to current.next
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value);
  }

  mergeLists(linkedList1, linkedList2) {

    let current1 = linkedList1.head;
    let current2 = linkedList2.head;
    let linkedList3 = new LinkedList();

    while (current1 || current2) {
      if (current1) {
        linkedList3.append(current1.value);
        current1 = current1.next;
      }

      if (current2) {
        linkedList3.append(current2.value);
        current2 = current2.next;
      }
    }
    return linkedList3.head;
  }
}

module.exports = LinkedList;
