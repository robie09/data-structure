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
const Player1 = new Stack(5);
const Player2 = new Stack(5);

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
const addPlayer1Cards = () => {
  //let x = deck.top;
  while (!deck.isEmpty()) {
    Player1.push(deck.top);

    deck.pop();
  }
};
const addePlayer2Cards = () => {
  let x = deck.top;
  while (!deck.isEmpty()) {
    Player2.push(x);
    P;
    deck.pop();
  }
};
for (let i = 1; i > deck.length; i++) {
  addDeckCards();
}
for (let i = 1; i > Player1.length; i++) {
  addPlayer1Cards();
}

// for (let i = 1; i > Player1.length; i++) {
//   addPlayer2Cards();
// }

console.log("-------------------------");
console.log("Player 1");
console.log("-------------------------");

for (let i = 1; i <= 5; i++) {
  console.log(`${i} - ${Player1.peek()}`);
}
console.log("-------------------------");
console.log("Player 2");
console.log("-------------------------");

for (let i = 1; i <= 5; i++) {
  console.log(`${i} - ${Player2.peek()}`);
}

console.log("-------------------------");
console.log(`First card in deck: ${deck.peek()}`); // to view the top value of deck
console.log("-------------------------");
