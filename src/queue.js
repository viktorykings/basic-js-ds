const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor(){
    this.head = null;
  }
  getUnderlyingList() {
      let current = this.head;
      if(current === null){
        return;
      }
      while(current.next){
        current = current.next;
      }
      return this.head
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue( value ) {
    let node = new ListNode(value)
    if(!this.head){
      this.head = node;
    } else {
      let current= this.head
      while(current.next){
        current = current.next
      }
    current.next = node
    }

    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  dequeue() {
    if(!this.head){
      return null
    }
    let removed = this.head
    if (this.head === this.current){
      this.current = null
    }
      this.head = this.head.next

    return removed.value;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue
};
