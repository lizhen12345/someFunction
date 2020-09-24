//手动实现call方法

Function.prototype.myCall = function myCall(){
    let [thisObj,...args] = Array.from(arguments)//解析赋值
    // console.log(thisObj);
    thisObj = thisObj || window
    thisObj.func = this //为thisObj添加func方法，func方法指向myCall，所以在func中的this指向thisObj
    thisObj.func(...args)//执行函数
    delete thisObj.func//thisObj上无func属性需要删除

    // console.log(thisObj,...args);
}
  
let o={
    name : 'lin',
    fn:function(){
        console.log(this.name);
    }
}
let obj = {
    name:'zhen'
}
let hh = o.fn
hh.myCall(obj)
// var name = 'wang'
// let hh = o.fn
// hh()
// function show(){
//     // 'use strict'
//     console.log(this.name);
// }
// show()
