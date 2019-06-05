'use strict';
const Node = require('./lib/node');

psuedoEnqueue(Node);
{
  stack1.push(Node);
}
psuedoDequeue();
{
  while(stack1.peek) {
    stack2.push(stack1.pop());
  }
  let temp = stack2.pop();
  while(stack2.peek()){
    stack1.push(stack2.pop());
  }
}