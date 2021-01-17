class Node {
  constructor(groupSize, next = null) {
    this.groupSize = groupSize;
    this.next = next;
  }
}

class Queue {
  constructor(limit = 5, watingtime = 0) {
    this.frontNode = null;
    this.backNode = null;
    this.length = 0;
    this.limit = limit;
    this.Watingtime = watingtime;
  }
  isFull = () => this.length === this.limit;

  isEmpty = () => this.length === 0;
  peek = () => this.Watingtime;

  addNode = (groupSize) => {
    const newN = new Node(groupSize);
    if (this.isEmpty()) {
      this.frontNode = newN;
    } else {
      this.backNode.next = newN;
    }

    this.backNode = newN;
    this.length++;
    this.watingtime += groupSize * 0.5;
  };
  enqueue = (groupSize) => {
    if (this.isFull()) {
      console.log("This line is full");
    } else {
      let peopleNum = groupSize;
      while (peopleNum > 12) {
        this.addNode(12);
        peopleNum -= 12;
      }

      this.addNode(peopleNum);
    }
  };

  dequeue = () => {
    if (this.isEmpty()) {
      console.log("Nothing here nerd!");
    } else {
      let removedNode = this.frontNode;
      if (this.length === 1) {
        this.frontNode = null;
        this.backNode = null;
      } else {
        this.frontNode = removedNode.nextNode;
      }
      this.length -= 1;
      this.watingtime -= removedNode * 0.5;
      return removedNode.groupSize;
    }
  };
}

//console.log("You're all here to bend the knee, so get in line...");
// Creating a Queue instance
let people = new Queue(3);

people.enqueue(8);
//console.log(people.peek());
people.peek();
people.enqueue(16);
console.log(people.peek());

people.peek();
people.enqueue(16);
people.peek();
people.enqueue(16);
