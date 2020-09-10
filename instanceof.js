//手动实现一个intanceof函数
//instanceof 是和typeof有区别的
//typeof返回的有四种结果，原始数据类型，function，undefined以及object，只能判断数据是否为原始数据类型，针对引用数据类型无法判断
//然而instanceof是利用原型连进行判断，判断变量是否为某个对象的实例,其可以区分对象和数组
// var a = [1,2]
//instanceof实现原理
function instanceofFlag(res,target){
    var pro = target.prototype
    // console.log(pro);
    var respro = res.__proto__
    while(true){
        if(respro===null){
            return false
        }
        if(respro === pro){
            return true
        }
        respro = respro.__proto__

    }
}
// console.log(instanceofFlag(a,String));
