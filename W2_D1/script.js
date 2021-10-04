class Node {
    constructor(valueInput) {
        this.value = valueInput;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addToFront(value) {
        var node = new Node(value);
        node.next = this.head;
        this.head = node;
        return this;
    }
    display() {
        let result = "";
        let runner = this.head;
        while (runner != null) {
            result += `${runner.value}--> `;
            runner = runner.next;
        }
        console.log(result);
    }

    reverseList() {
        let runner = this.head;
        while (runner != null) {
            
        }
    }
}

const sll = new SLL();
sll.addToFront(1);
sll.addToFront(2);
sll.addToFront(3);
sll.addToFront(4);
sll.addToFront(5);
sll.display();
sll.reverseList();
sll.display();