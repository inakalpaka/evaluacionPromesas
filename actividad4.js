class Node {
    constructor(value) {
        this.value = value;
        this.LeftBranch = null;
        this.RightBranch = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insertNode(value, root = this.root) {
        if (this.root === null) {
            this.root = new Node(value);
        } else {
            if (root === null) {
                return new Node(value);
            }
            if (value < root.value) {
                root.LeftBranch = this.insertNode(value, root.LeftBranch);
            } else if (value > root.value) {
                root.RightBranch = this.insertNode(value, root.RightBranch);
            }
        }
        return root;
    }

    tourInPreOrder(array, node = this.root) {
        if (node !== null) {
            console.log(node.value);
            array.push(node.value);
            this.tourInPreOrder(array, node.LeftBranch);
            this.tourInPreOrder(array, node.RightBranch);
        }
    }
}

const arbol = new BinaryTree();
arbol.insertNode(10);
arbol.insertNode(5);
arbol.insertNode(20);
arbol.insertNode(3);
arbol.insertNode(7);
arbol.insertNode(15);
arbol.insertNode(25);

let array = [];
arbol.tourInPreOrder(array);

console.log("Recorrido en preorden:", array);
