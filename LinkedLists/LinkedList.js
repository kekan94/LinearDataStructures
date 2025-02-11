const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  addToHead(data) {
    const newHead = new Node(data);
    const currentHead = this.head;
    this.head = newHead;
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }

  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }
    this.head = removedHead.getNextNode();
    return removedHead.data;
  }

  removeNode(data) {
    let nodeToRemove;
    nodeToRemove = this.head;
    let parentNode = new Node();
    let parentList = new LinkedList();
    if (!nodeToRemove) {
      return;
    }
    while (nodeToRemove.data !== data) {     
      parentNode = nodeToRemove;     
      parentList.addToTail(nodeToRemove.data);
      nodeToRemove = nodeToRemove.getNextNode();
      parentNode.setNextNode(nodeToRemove); 
      /*console.log(parentNode);
      console.log(parentList);*/
    }
    //parentList.printList();
    while (nodeToRemove.getNextNode()) {
      nodeToRemove = nodeToRemove.getNextNode();
      parentList.addToTail(nodeToRemove.data);
    }
    this.head = parentList.head;
    return this.head;
  }

  removeNthNodeFromEndOfList(n) {
    let nodeToRemove;

  }

  reverseList() {
    let newHeadNode = this.head;
    let currentNode = this.head;
    let previousNodeForNextLoop;
    let nextNode;
    let newList = new LinkedList();

    if (!this.head) {
      return null;
    }                                  
    while(currentNode !== null) {               
        //this.head = currentNode.getNextNode();  
        //currentNode = currentNode.getNextNode();
        console.log('Current Node data: ' + currentNode.data);
        previousNodeForNextLoop = currentNode;
        console.log('Previous Node For Next Loop data: ' + previousNodeForNextLoop.data);
        //if (currentNode.getNextNode() !== null) {
          nextNode = previousNodeForNextLoop.getNextNode();
          console.log('Next Node data: ' + nextNode.data);
          currentNode.setNextNode(nextNode.getNextNode());
          //console.log('Current Nodes next Node after finishing cycle: ' + currentNode.next.data);
          newHeadNode = nextNode;
          console.log('New Head Node data: ' + newHeadNode.data);
          //console.log(newHeadNode);
          newHeadNode.setNextNode(currentNode);
          console.log('Data of Node after setting new head: ' + newHeadNode.next.data);
          //console.log(currentNode); 
          //currentNode = currentNode.getNextNode();
          console.log('Current Node data after finishing cycle: ' + currentNode.data);
          /*this.addToHead(currentNode.getNextNode());
          currentNode = currentNode.getNextNode();*/
          //this.head = newHeadNode;
        console.log('Head of the list: ' + newHeadNode.data);
        //return newHeadNode;
        if (!currentNode.next) {
          break;
        }
    }

    return newHeadNode;
  }

  printList() {
    let currentNode = this.head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += currentNode.data + ' ';
      currentNode = currentNode.getNextNode();
    }
    output += '<tail>';
    console.log(output);
  }

}

module.exports = LinkedList;