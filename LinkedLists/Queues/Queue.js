const LinkedList = require("../LinkedList");

class Queue {
  constructor(maxSize = Infinity) {
    this.queue = new LinkedList();
    this.maxSize = maxSize;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  hasRoom() {
    return this.size < this.maxSize;
  }

  enqueue(data) {
    if (this.hasRoom()) {
      this.queue.addToTail(data);
      this.size++;
    } else {
      throw new Error("Queue is full!");
    }
  }

  dequeue() {
    if (!this.isEmpty()) {
      const data = this.queue.removeHead();
      this.size--;
      return data;
    } else {
      throw new Error("Queue is empty!");
    }
  }
}

const queue = new Queue(3);
function dequeuedValue() {
  return queue.dequeue();
}

queue.enqueue(1);
console.log(dequeuedValue());
queue.enqueue(2);
console.log(queue.dequeue());
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue);

/*const dequeued = queue.dequeue;
console.log(queue);
console.log(dequeued());
console.log(queue);*/
module.exports = Queue;


