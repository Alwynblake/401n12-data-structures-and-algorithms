'use strict';

const LinkedList  = require('../ll_kth_from_end/index');

describe('Testing LinkedList data structure', () => {

  test('Testing that LinkedList append() method inserts into the head if it is empty', () => {
    const linkedList = new LinkedList();
    // save it on the new linkedlist class instance
    linkedList.append(5);
    expect(linkedList.head.value).toEqual(5);
    expect(linkedList.head.next).toEqual(null);
  });

  test('Testing that LinkedList append() method inserts a node into the linked list if the head is not empty', () => {
    const linkedList = new LinkedList();
    linkedList.append(5);
    linkedList.append(4);
    linkedList.append(3);
    linkedList.append(2);
    linkedList.append(1);
    expect(linkedList.head.value).toEqual(5);
    expect(linkedList.head.next.value).toEqual(4);
    expect(linkedList.head.next.next.value).toEqual(3);
    expect(linkedList.head.next.next.next.value).toEqual(2);
    expect(linkedList.head.next.next.next.next.value).toEqual(1);

  });
});
