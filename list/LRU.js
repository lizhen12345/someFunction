// 实现 LRUCache 类：

// LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
// int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
// void put(int key, int value) 如果关键字已经存在，则变更其数据值；
// 如果关键字不存在，则插入该组「关键字-值」。
// 当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
//这是一个单链表的实现，其中包括向链表尾部推入一个元素
//移除指定索引出的结点
//获得链表中指定位置的元素
//向链表中的指定位置插入元素



//实现思想大概是利用map和一个双向链表
//map中存储key对应的是双向链表的结点

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
        if(index===0 && !node) this.push(element)
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
            removeNode.next && (removeNode.next.previous = preNode)
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

//上面是一个双向链表的实现

class LRUCache{
    constructor(capacity){
        this.capacity = capacity
        this.list = new doubleList()
        this.map = new Map()
    }
    put(key,value){
        const {capacity,list,map} = this
        if(map.has(key)){
            list.remove(map.get(key).element)//删除结点
            list.insert(0,[key,value])//头部增加结点,这存到链表里的是key和value主要是为了后续删除map方便
            map.delete(key)
            map.set(key,list.getNodeAt(0))//map中删除并重新设置在链表中存储值的索引号
        }else{
            if(list.length === capacity ){//这边主要判断容量是否满了
                map.delete(list.getNodeAt(list.length-1).element[0])
                list.removeAt(list.length-1)
            }
            list.insert(0,[key,value])
            map.set(key,list.getNodeAt(0))//map中对应的是链表中的结点
            // console.log(list.getNodeAt(0));
        }
    }
    get(key){
        const {list,map} = this
        if(map.has(key)){
            let node = map.get(key) //获得此key对应的value在链表中的位置
            let value = node.element[1] //得到这个value
            list.remove(node.element) 
            list.insert(0,[key,value]) //删除原先的结点，在链表头部增加新结点
            map.delete(key)
            map.set(key,list.getNodeAt(0))// 更改map中此key的存储情况
            return value
        }else{
            return -1
        }
    }
}
 
const lru = new LRUCache(3)
console.log(lru.list.toString());

lru.put(1,2)
lru.put(3,4)
lru.put(5,6)
console.log(lru.list.toString());
lru.get(1)
console.log(lru.list.toString());
lru.put(7,8)

console.log(lru.list.toString());
 