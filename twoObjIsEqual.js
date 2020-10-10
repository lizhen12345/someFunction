//判断两个对象是否相等


//1，通过JSON.stringify(obj)来判断两个对象转为字符串后是否相等
let obj1={a:1,b:[1,2,3]};
let obj2 = {b:[1,2,3],a:1};
//缺点，当两个对象的键值顺序不同时就会出错，太垃圾了
console.log(JSON.stringify(obj1)==JSON.stringify(obj2));


//自己写递归

function diff(obj1,obj2){
    let flag1 = obj1 instanceof Object
    let flag2 = obj2 instanceof Object
    if(!flag1 || !flag2){
        return obj1 === obj2
    }
    if(Object.keys(obj1).length!==Object.keys(obj2).length) return false
    for(let oneItem in obj1){//此处循环对象
        if(!diff(obj1[oneItem],obj2[oneItem])) return false//重新调用diff函数，如果diff函数返回false 直接返回false
    }
    return true//如果上面都没返回true，恭喜 全部一样
}
console.log(diff(obj2,obj1));
