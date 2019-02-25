'use strict';

// append method.
LinkedList.prototype.append = function (node) {
  if (this.first === null) {
    node.previous = node;
    node.next = node;
    this.first = node;
    this.last = node;
  } else {
    node.previous = this.last;
    node.next = this.first;
    this.first.previous = node;
    this.last.next = node;
    this.last = node;
  }
  this.length++;
};

// insertBefore method.
LinkedList.prototype.insertBefore = function (newNode, node) {
  node.previous = newNode;
  node.next = newNode.next;
  newNode.next.previous = node;
  newNode.next = node;
  if (node.previous == this.last) {this.last = node;}
  this.length++;
};

// insertAfter method.
LinkedList.prototype.insertAfter = function (node, newNode) {
  newNode.previous = node;
  newNode.next = node.next;
  node.next.previous = newNode;
  node.next = newNode;
  if (newNode.previous == this.last) {this.last = newNode;}
  this.length++;
};