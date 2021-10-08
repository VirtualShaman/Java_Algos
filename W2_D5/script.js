class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }


}

class DLL{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    printValuesForward(){
        let runner = this.head;
        let result = ""
        while(runner != null){
            result += `${runner.val}->`;

            runner = runner.next;
        }
        console.log(result);
        return this;
    }

    printValuesBackward(){
        let runner = this.tail;
        let result = ""
        while(runner != null){
            result += `${runner.val}->`;
            runner = runner.prev;
        }
        console.log(result);
        return this;
    }

    addToBack(val){
        let newNode = new Node(val);
        if(this.tail ==null){
            this.tail = newNode;
            this.head = newNode;
        }else{
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode

        }
        return this;

    }

    addToFront(val){
        let newNode = new Node(val);
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            let runner = newNode;
            runner.next = this.head;
            let prevHead = this.head;
            prevHead.prev = runner;
            this.head = runner;
        }
        return this;
    }

    removeFront(){
        this.head = this.head.next;
        this.head.prev = null;
        return this;

    }

    removeEnd(){
        let newTail = this.tail.prev;
        this.tail.prev = null;
        newTail.next = null;
        this.tail = newTail;
        return this;
    }

    reverseList(){
        var runner = this.head
        if(!this.head){
            return this
        }
        while(runner){
            var temp = runner.next
            runner.next = runner.prev
            runner.prev = temp
            runner = temp
        }
        temp = this.head
        this.head = this.tail;
        this.tail = temp

        return this
    }
    reverseListRecursive(runner = this.head){
        if(!runner){
            var temp = this.head
            this.head = this.tail;
            this.tail = temp
            return this
        }
        var nextNode = runner.next
        runner.next = runner.prev
        runner.prev = temp
        return this.reverseListRecursive(nextNode)
    }
}

const dll = new DLL();

dll.addToFront(5)
dll.addToFront(4)
dll.addToFront(3)
dll.addToFront(2)
dll.addToFront(1)

dll.printValuesForward()

dll.reverseList()

dll.printValuesForward()

dll.reverseListRecursive()

dll.printValuesForward()