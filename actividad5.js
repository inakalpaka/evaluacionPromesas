class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
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
                root.left = this.insertNode(value, root.left);
            } else if (value > root.value) {
                root.right = this.insertNode(value, root.right);
            }
        }
        return root;
    }


    preOrder(array = [], node = this.root) {
        if (node !== null) {
            array.push(node.value);
            this.preOrder(array, node.left);
            this.preOrder(array, node.right);
        }
        return array;
    }


    inOrder(array = [], node = this.root) {
        if (node !== null) {
            this.inOrder(array, node.left);
            array.push(node.value);
            this.inOrder(array, node.right);
        }
        return array;
    }

    posOrder(array = [], node = this.root) {
        if (node !== null) {
            this.posOrder(array, node.left);
            this.posOrder(array, node.right);
            array.push(node.value);
        }
        return array;
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


function validateTraversals(arbol) {
    return {
        preOrder: arbol.preOrder(),
        inOrder: arbol.inOrder(),
        postOrder: arbol.posOrder()
    };
}

console.log(validateTraversals(arbol));
