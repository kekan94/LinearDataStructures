//FIX THE SECOND SOLUTION !!!

const Queue = require("./Queue");

//First solution

function timeRequiredToBuyLogically(array, k) {
  let time = 0;
  let biggestNumber = array[0];
  
  if (k >= array.length) {
    return 'You have to choose a spot that is lesser than the length of the line!';
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      array.splice(i, 1);
      //console.log(array);
    }
    if (array[i] > biggestNumber) {
      biggestNumber = array[i];
    }
  }

  if (array[k] === 0) {
    if (k === 0) {
      return 'The customer is standing in line for no reason! He can exit immediately as he is the first in line.';
    } else if (k === 1) {
      return `The customer is standing in line for no reason! To exit the line, he must wait for 1 second.`;
    } else {
      return `The customer is standing in line for no reason! To exit the line, he must wait for ${k} seconds.`;
    }
  } else if(array[k] === 1) {
    time = k + 1;
  } else if (array[k] === biggestNumber) {
    for (let i = 0; i < array.length; i++) {
      time += array[i];
    }
  } else {
      time = (array[k] - 1) * array.length + k + 1;
  }

  return time;
}

//console.log(timeRequiredToBuyLogically([1, 1, 0, 1], 2));

//Second solution
function timeRequiredToBuy(array, k) {
  let time = 0;
  let queue = new Queue(array.length);
  let dequeued;

  for (let i = 0; i < array.length; i++) {
    //ticketsToBuy += array[i];
    queue.enqueue(array[i]);
  }

  console.log(queue);

  if (k > array.length) {
    return 'You have to choose a spot that is lesser than the length of the line';
  }

  while(!queue.isEmpty()) {
    queue.dequeue();
    console.log(queue);
    console.log(queue.dequeue);
    queue.enqueue(queue.dequeue() - 1);
    console.log(queue);
    /*if (dequeued > 1) {
      console.log(queue);
      queue.dequeue();
      console.log(queue.dequeue());
      console.log(queue);
      queue.enqueue(dequeued - 1);
      console.log(queue);
    } else {
      console.log('woohoo');
      queue.dequeue();
    }*/

    time++;
  }
  
  return time;
}

console.log(timeRequiredToBuy([2, 3, 2], 2));

module.exports = { timeRequiredToBuyLogically/*, timeRequiredToBuyIterratively */};