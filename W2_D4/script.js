class Node{
    constructor(valueInput){
        this.value= valueInput;
        this.next = null;
        this.prev = null;
    }
}

class DLL{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addBack(value){
        var newNode = new Node(value);
        if(this.tail==null) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return;
        }
        
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
        this.length++;
    }
    addFront(value){
        var newNode = new Node(value);
        if(this.head==null) {
            this.head = newNode;
            this.tail = newNode;
            this.length++;
            return;
        }
        
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    removeBack(){
        if(this.tail==null) return;
        this.tail=this.tail.prev;
        this.tail.next=null;
        this.length--;
    }
    
    remFront(){
        if(this.head==null) return;
        var temp = this.head.next;
        this.head.next = null;
        this.head = temp;
        this.head.prev = null;
        this.length--;
    }
    
    print(){
        if(this.head == null) console.log("List is empty");
        
        var runner = this.head;
        while(runner!=null) {
            console.log(runner.value + " ")
            runner = runner.next
        }
    }
    
    printBackwards(){
        if(this.head == null) console.log("List is empty");
        
        var runner = this.tail;
        while(runner!=null) {
            console.log(runner.value + " ")
            runner = runner.prev
        }
    }
}

const sll = new SLL();