//实现二叉排序树，也叫二叉搜索树，都是这个叫法，对不对我也不知道
//二叉搜索树（BST）是二叉树的一种，但是它只允许你在左侧节点存储（比父节点）小的值， 
//在右侧节点存储（比父节点）大（或者等于）的值。但是同时又要求根结点的左子树全部值小于根结点的值
//根结点的右子树全部值大于等于根结点的值，其每一个子树均是二叉搜索树的才叫二叉搜索树


///这种二叉搜索树，最好的情况时树要求是一个平衡二叉树(此时查找复杂度最差是o（logn）)，
//若本身就是一个有序结构，变成树之后那就类似于链表,此时查找复杂度是o（n），
//所以这时候需要引入平衡二叉树，即左右子树深度差不大于1


// 中序遍历：左侧子节点 => 节点本身 => 右侧子节点
// 先序遍历：节点本身 => 左侧子节点 => 右侧子节点
// 后序遍历：左侧子节点 => 节点本身 => 右侧子节点


class Node{
    constructor(key){
        this.key = key
        this.right = null //右子树
        this.left = null//左子树
    }
}

class binarySearchTree{
    constructor(){
        this.root = null  //定义一个根结点
    }
    insert(key){//在二叉排序树中插入操作
        const newNode = new Node(key)
        const insertNode = (node,newNode)=>{
            if(newNode.key < node.key){//判断比根结点值大还是小
                if(node.left === null){
                    node.left = newNode
                }else{
                    insertNode(node.left,newNode)
                }
            }else{
                if(node.right === null){
                    node.right = newNode
                }else{
                    insertNode(node.right,newNode)
                }
            }
        }
        if(!this.root){//若此时是个空树
            this.root = newNode
        }else{
            insertNode(this.root,newNode)
        }
    }
    inOrder(){//二叉树的中序遍历
        const res = []
        const inOrderNode = (node,callback) => {
            if(node !== null){
                inOrderNode(node.left,callback)
                callback(node.key)
                inOrderNode(node.right,callback)
            }
        }
        const callback = (value)=>{
           res.push(value)
        }
        inOrderNode(this.root,callback)
        return res
    }
    preOrder(){//二叉树的前序遍历
        const res = []
        const preOrderNode = (node,callback) => {
            if(node !== null){
                callback(node.key)
                preOrderNode(node.left,callback)
                preOrderNode(node.right,callback)
            }
        }
        const callback = (value)=>{
            res.push(value)
        }
        preOrderNode(this.root,callback)
        return res
    }
    postOrder(){//二叉树的前序遍历
        const res = []
        const postOrderNode = (node,callback) => {
            if(node !== null){
                
                postOrderNode(node.left,callback)
                postOrderNode(node.right,callback)
                callback(node.key)
            }
        }
        const callback = (value)=>{
            res.push(value)
        }
        postOrderNode(this.root,callback)
        return res
    }
    min(){//寻找树中的最小值
        if(!this.root) return false
        let node = this.root
        while(node.left){
            node = node.left
        }
        return node.key
    }
    max(){//寻找树中的最大值
        if(!this.root) return false
        let node = this.root
        while(node.right){
            node = node.right
        }
        return node.key
    }
    getNode(value){//获取key为某个值的结点
        if(!this.root) return false
        let node = this.root
        while(node !== null){
            if(node.key === value){
                return node
            }else if(value < node.key){
                node = node.left
            }else{
                node = node.right
            }
        }
        return -1
    }
}
const arr = [11,7,5,3,9,8,10,13,12,14,20,18,25]
const bst = new binarySearchTree()
arr.forEach((ele) => {
    bst.insert(ele)
})
console.log(bst.inOrder()); 
console.log(bst.preOrder()); 
console.log(bst.postOrder()); 
console.log(bst.min());
console.log(bst.max());
console.log(bst.getNode(3));
console.log(bst.getNode(111));
