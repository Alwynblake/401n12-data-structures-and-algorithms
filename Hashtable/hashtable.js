'use strict';

const LinkedList = require('../../linked-lists/linked-list.js');

class HashTable{
  constructor(size){
    this. size = size;
    this.map = new Array(size);
  }

  add(key, value){
    let hash = this.hash(key);
    if (!this.map[hash]){this.map[hash] = new LinkedList();}
    this.map[hash].append({[key]:value});
  }

  hash(key){
    let chars = key.split('');
    let aggVal = chars.reduce((accumulator,value) => accumulator + value.charCodeAt(0), 0) % this.size;
    return aggVal % this.size;

  }



  get(value){
    let hash = this.value;
    return this.map[hash].contains(value);
  }

  search(linkedList, key){
    let current = linkedList.head;
    let object = null;
    while(current){
      if (object.key(current.value)[0] === key){ //key or keys
        return (object = current);
      }
      current = current.next;
    }
    return object;
  }

}

module.exports = HashTable;