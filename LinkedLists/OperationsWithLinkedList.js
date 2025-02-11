const LinkedList = require('./LinkedList');

const friends = new LinkedList();
friends.addToHead('Nemanja S.');
friends.addToHead('Nemanja V.');
friends.addToTail('Veljko');

friends.printList();
//console.log(friends);

friends.removeHead();
friends.printList();

friends.addToTail('Dimitrije');
friends.addToTail('Strahinja');
friends.addToTail('Igor');
friends.addToTail('Vukajlija');
friends.printList();

friends.removeNode('Igor');
friends.removeNode('Veljko')
friends.printList();

//ReversalOfList

console.log("Original")
let exampleLinkedList = new LinkedList();
exampleLinkedList.addToHead(15);
exampleLinkedList.addToHead(8);
exampleLinkedList.addToHead(4);
exampleLinkedList.addToTail(20);
console.log(exampleLinkedList.head.next);
//console.log(exampleLinkedList);
exampleLinkedList.printList();
console.log("Reversed");
console.log(exampleLinkedList.reverseList());
console.log(exampleLinkedList.head.next);
exampleLinkedList.printList();
//exampleLinkedList.printList();
