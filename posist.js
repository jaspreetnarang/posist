

class Node {                       //constructing tree structure
    constructor(data)              
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree
{
    constructor()
    {
        this.genesis = null; //root node
    }
}
insert(data)
{
    var newNode = new Node(data);
    if(this.genesis === null)
        this.genesis = newNode;
    else
        this.insertNode(this.genesis, newNode);
}
 
insertNode(node, newNode)                  //dynamically inserting new nodes
{ 
    if(newNode.data < node.data)
    {
        if(node.left === null)
            node.left = newNode;
        else
            this.insertNode(node.left, newNode); 
    } 
    else
    {
        if(node.right === null)
            node.right = newNode;
        else
            this.insertNode(node.right,newNode);
    }
}

var BST = new BinarySearchTree();    // inserting the nodes statically
BST.insert(25);
BST.insert(20);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(4);
BST.insert(5);
BST.insert(19);
BST.insert(30);

var genesis = BST.getRootNode();
BST.inorder(genesis);