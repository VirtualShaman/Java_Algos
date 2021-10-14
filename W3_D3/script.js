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

    addNode(val) {
        var newNode = new BSTNode(val);
        if(this.root == null) {
            this.root = newNode;
            return;
        }
        
        var runner = this.root;
        
        while(runner!=null) {
            if(newNode.value>runner.value) {
            if(runner.right == null) {
                runner.right = newNode;
                break;
            }
            runner = runner.right;
            }
            else if(newNode.value<=runner.value){
            if(runner.left == null) {
                runner.left = newNode;
                break;
            }
            runner = runner.left;
            }
        }
    }

    findMin() {
        if(this.root == null) return;
        
        var min = this.root;
        while(min.left != null) {
            min = min.left;
        }
        
        return min.value;
    }

    findMax() {
        if(this.root == null) return;

        var max = this.root;
        while(max.right != null) {
            max = max.right;
        }
        
        return max.value;
    }

    contains(val) {
        if(this.root==null) return false;
        
        var runner = this.root;
        while(runner != null) {
            if(runner.value==val) return true;
            if(val > runner.value) runner = runner.right;
            else runner = runner.left;
        }
        
        return false;
    }
    
    size(node=this.root) {
        if(node == null) return 0;
        return 1 + this.size(node.right) + this.size(node.left)
    }

    isbalance(node) {
    
        //if Node is null then return node
        if(node == null) {
            return 0
        } else {
            // split the tree in half
            // delcaring the left depth
            let ldepth = this.height(node.left)
            // delcaring the right depth
            let rdepth = this.height(node.right)
    
           // let absolute = ldepth - rdepth
    
           // Math.abs(ldepth - rdepth)
        //  console.log(ldepth)
           // console.log(rdepth)
            // if left depth is between
            if(Math.abs(ldepth - rdepth) <= 1) {
                // return true
                return true;
            } else {
                // return false
                return false;
            }
        }
        
    }
    
    
    height(node) {
    
      //if Node is null then return node
        if(node == null) {
            return 0
        } else {
          // split the tree in half
          // delcaring the left depth
            let ldepth = this.height(node.left)
          // delcaring the right depth
            let rdepth = this.height(node.right)
    
          // if left depth is greater then right depth
            if(ldepth > rdepth) {
              // + 1 does not count the root
                return (ldepth + 1);
            } else {
                return (rdepth + 1);
            }
        }
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

console.log(bst.findMin())
console.log(bst.findMax())

