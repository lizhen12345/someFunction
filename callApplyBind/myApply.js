//手动实现apply函数
//和call大致类似，第二个参数接收的是一个数组而已
Function.prototype.myApply = function myCall(){
    let [thisObj,args] = Array.from(arguments)//解析赋值，吧args改成一个数组
    // console.log(thisObj,args);
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
hh.myApply(obj,[1,2])