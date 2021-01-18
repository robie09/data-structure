const prompt = require("prompt-sync")({ sigint: true });

class TreeNode {
  constructor(name) {
    this.name = name;
    this.leftchildren = [];
    this.rightchildren = [];
  }

  addChild(ChName) {
    const fullName = ChName.split(" ");
    const lastName = fullName.pop();
    const firstName = fullName.join(" ");

    if (lastName === this.root) {
      // if parent name exist on the list
      if (this.leftchildren === null && this.rightchildren !== null) {
        this.children.push(rightchildren[firstName]);
      } else if (this.leftchildren !== null && this.rightchildren !== null) {
        this.children.push(rightchildren[firstName]);
      } else {
        //if parent name is not on the tree

        this.children.push(lastName);
      }
    }
  }

  removeChild(node) {
    this.children = this.children.filter((child) => child !== node);
  }
  traverse() {
    let nodes = [this];
    while (nodes.length > 0) {
      let currentNode = nodes.pop();
      console.log(currentNode.data);
      nodes = [...nodes, ...currentNode.children];
    }
  }
}

const ChName = prompt("Enter child full name:");
ChName.addChild(ChName);
ChName.traverse(ChName);
