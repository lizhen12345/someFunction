//这是一个单链表的实现，其中包括向链表尾部推入一个元素
//移除指定索引出的结点
//获得链表中指定位置的元素
//向链表中的指定位置插入元素


class Node{
   constructor(element){
      this.element = element
      this.next = null
   }
}


class linkedList{
   constructor(){
      this.head = null //空链表
      this.length = 0
   }
   push(element){
      const node = new Node(element)
      if(this.head === null){
         this.head = node
      }else{
         let current = this.head
         while(current.next !== null){
            current = current.next
         }
         current.next = node
      }
      this.length++
   }
   removeAt(index){
      if(index>=0 && index<this.length){
         let current = this.head
         if(index === 0){
            this.head = current.next
         }else{
            let flag = 0
            let pre
            while (flag <index) {
               pre = current
               current = current.next
               flag++
            }
            pre.next = current.next
         }
         this.length--
         return current.element
      }else{
         return -1;
      }
   }
   getElementAt(index){
      if(index >= 0 && index < this.length){
         let current = this.head
         let flag = 0
         while (flag < index) {
            current = current.next
            flag++
         }
         return current.element
      }else{
         return -1;
      }
   }
   insert(element,index){
      if(index >= 0 && index < this.length ){
         let newNode = new Node(element)
         let current = this.head
         if(index === 0){
            newNode.next = current
            this.head = newNode
         }else{
            let flag = 0
            let pre
            while (flag < index) {
               pre = current
               current = current.next
               flag++
            }
            pre.next = newNode
            newNode.next = current
         }
         this.length++
      }else{
         return -1;
      }
   }
   indexOf(element){
      let current = this.head
      for(let i=0;i<this.length && current !==null;i++){
         if(element === current.element) return i
         current = current.next
      }
      return -1
   }
   remove(element){
      let current = this.head
      let pre
      while (current !== null) {
         if(current.element === element){
            if(pre){
               pre.next = current.next
            }else{
               this.head = current.next
            }
            this.length--
            return true
         }
         pre = current
         current = current.next
      }
      return -1;
   }
   print(){
      let res = []
      let current = this.head
      while(current !== null){
         res.push(current.element)
         current = current.next
      }
      console.log(res);
   }
}


const link = new linkedList()
link.push(1);
link.print()
link.push(2);
link.print()

link.push(3); 
link.print()


console.log(link.getElementAt(0));

link.insert(2,2)
link.print()
link.remove(2)
link.print()
link.indexOf(2)
console.log(link.getElementAt(2));



