//双向链表的实现,包括几个方法
//push向链表尾部推入一个结点
//removeAt 删除指定位置的结点
// insert 向指定位置插入结点
//indexOf 搜索链表中此元素出现的第一次的索引
//remove 删除指定结点
//toString 将链表转换为字符串形式

class Node{
    constructor(element){
        this.element = element
        this.previous = this.next = null
    }
}


class doubleList{
    constructor(){
        this.head = null
        this.tail = null//尾结点
        this.length = 0
    }
    push(element){
        const newNode = new Node(element)
        if(!this.head){
            this.head = this.tail = newNode
        }else{
            this.tail.next = newNode
            newNode.previous = this.tail
            this.tail = newNode
        }
        this.length++
    }
    getNodeAt(index){
        if(index >=0 && index < this.length){
            let flag = 0
            let current = this.head
            while(flag < index){
                current = current.next
                flag++
            }
            return current
        }else{
            return null
        }
    }
    insert(index,element){
        const node = this.getNodeAt(index)
        if(!node){
            return false
        }
        const newNode = new Node(element)
        const preNode = node.previous
        if(!preNode){
            newNode.next = this.head
            this.head.previous = newNode
            this.head = newNode
        }else{
            node.previous = newNode
            newNode.next = node
            newNode.previous = preNode
            preNode.next = newNode
        }
        this.length++
        return true
    }
    removeAt(index){
        const removeNode = this.getNodeAt(index)
        if(!removeNode){
            return false
        }
        const preNode = removeNode.previous
        if(!preNode){//如果是头结点
            this.head = this.head.next
            this.head.previous = null
        }else{//不是头结点
            preNode.next = removeNode.next
            removeNode.next.previous = preNode
            removeNode.previous = removeNode.next = null
        }
        this.length--
        return true
    }
    indexOf(element){
        let current = this.head
        let flag = 0
        while(flag < this.length){
            if(current.element === element){
                return flag
            }
            current = current.next
            flag++
        }
        return -1 //根本没有这个元素
    }
    remove(element){
        this.removeAt(this.indexOf(element))
    }
    toString(){
        let current = this.head
        if(!current){
            return ''
        }else{
            let str = `${current.element}`
            let flag = 1
            while(flag < this.length){
                current = current.next
                str = str + `->${current.element}`
                flag++
            }
            return str
        }
    }
}

const doublelist = new doubleList()
console.log(doublelist.toString());
doublelist.push(1)
doublelist.push(2)
doublelist.push(3)
console.log(doublelist.toString());

console.log(doublelist.getNodeAt(1).element);

console.log(doublelist.indexOf(2));

doublelist.insert(1,5)
console.log(doublelist.toString());

doublelist.insert(3,6)
console.log(doublelist.toString());

doublelist.removeAt(0)
console.log(doublelist.toString());
doublelist.remove(5)
console.log(doublelist.toString());



