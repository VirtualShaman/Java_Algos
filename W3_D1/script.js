class BSTNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class BST {
    constructor() {
        this.root = null
    }

    addNode(value) {
        var newNode=new BSTNode(value)
        if (this.root==null){
            this.root=newNode
        }
        else{
            var runner=this.root
            while(runner!=null){
                if (value<runner.value){
                    runner=runner.left
                }
                else {
                    runner=runner.right
                }
            }
            runner=newNode
        }
        return newNode
    }

    findMin() {
        if (this.root==null){
            return null
        }
        if (this.root.left==null){
            return this.root.value
        }
        var runner=this.root
        while (runner.left!=null){
            runner=runner.left
        }
        return runner.value
    }

    findMax() {
        if (this.root==null){
            return null
        }
        if (this.root.right==null){
            return this.root.value
        }
        var runner=this.root
        while (runner.right!=null){
            runner=runner.right
        }
        return runner.value
    }

    inOrder(node=this.root){
        if(node===null){
            return null
        }
        this.inOrder(node.left)
        console.log(node.value)
        this.inOrder(node.right)
    }
}

var bst=new BST()

bst.addNode(5)
bst.addNode(1)
bst.addNode(2)
bst.addNode(3)
bst.addNode(4)
bst.addNode(6)
bst.addNode(7)
bst.addNode(8)
bst.addNode(9)
bst.addNode(10)

bst.inOrder()
// console.log(bst.findMin())
// console.log(bst.findMax())
