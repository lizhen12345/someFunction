

//new一个新的实例经历了什么

function newFlag(Fnc){
    //创建控对象
    let obj = {}
    //设置原型连
    obj.__proto__ = Fnc.prototype
    //改变this指向，并执行函数
    let result = Fnc.apply(obj,arguments)
    //判断函数返回值类型
    if(typeof result==='object'){
        return result
    }
    return obj
}
