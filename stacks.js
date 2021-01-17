class Node {
  constructor(color, number, next = null) {
    this.color = color;
    this.number = number;
    this.next = next;
  }

  getData = () => `${this.color} - ${this.number}`;
}

class Stack {
  constructor(limit = 20) {
    this.top = null;
    this.length = 0;
    this.limit = limit;
  }

  isFull = () => this.length === this.limit;

  isEmpty = () => this.length === 0;

  peek = () =>
    this.isEmpty() ? "No cards left in the deck" : this.top.getData();

  push = (color, number) => {
    if (this.isFull()) {
      console.log("The deck is full!");
    } else {
      const newNode = new Node(color, number, this.top);
      this.top = newNode;
      this.length++;
    }
  };

  pop = () => {
    if (this.isEmpty()) {
      console.log("The deck is empty!");
    } else {
      const popped = this.top;
      this.top = popped.next;
      this.length--;
      return popped.getData();
    }
  };
}

const colors = ["red", "blue", "green", "yellow"];
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const deck = new Stack(20);

const random = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

const addDeckCards = () => {
  while (!deck.isFull()) {
    deck.push(random(colors), random(numbers));
    //deck.length++;
  }
};

addDeckCards();
let Player1 = [];
let Player2 = [];

// for (let i = 1; i > Player1.length; i++) {
//   addPlayer2Cards();
// }

console.log("-------------------------");
console.log("Player 1");
console.log("-------------------------");

for (let i = 1; i <= 5; i++) {
  console.log(`${i} - ${Player1.push(deck.pop())}`);
}
console.log("-------------------------");
console.log("Player 2");
console.log("-------------------------");

for (let i = 1; i <= 5; i++) {
  console.log(`${i} - ${Player2.push(deck.pop())}`);
}

console.log("-------------------------");
console.log(`First card in deck: ${deck.peek()}`); // to view the top value of deck
console.log("-------------------------");
