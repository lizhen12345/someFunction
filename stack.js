
// 利用js实现栈的功能，这主要是利用了es6中类的形式，如果用es5要用到构造函数的形式
//实现队列的功能类似

class Stack{
    constructor(){
        this.stacks = []
        this.length = 0
    }
    Top(){
        return this.stacks[this.length-1]
    }
    Pop(){
        let yuan = this.stacks.pop()
        this.length--
        return yuan
    }
    Push(val){
        this.stacks.push(val)
        this.length++
    }
    isEmpty(){
        return this.length === 0
    }
}

let stack = new Stack()
console.log(stack.isEmpty());
stack.Push(1)
stack.Push(2)
console.log(stack.isEmpty());
console.log(stack.Top());