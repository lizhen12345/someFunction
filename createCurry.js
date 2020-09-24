//函数的柯里化。，一个函数他接收函数A作为参数，运行后能够返回一个新的函数。并且这个新的函数能够处理函数A的剩余参数


function creatCurry(fn,args){
    // console.log(Object.prototype.toString.call(fn),fn.length);
    let len = fn.length//获取fn的形参个数
    var args = args || []
    return function(){
        newArgs = args.concat(Array.from(arguments))//进行参数的拼接
        // console.log(Array.isArray(Array.from(arguments)),fn,fn.length);
        if(newArgs.length<len){
            return creatCurry.call(this,fn,newArgs)//如何全部形参还没拼接完毕，继续调用函数
        }else{
            return fn.apply(this,newArgs)//若全部拼接，执行函数
        }
    }
}

function fun1(a,b,c,d){
    return a+b+c+d
}

fun2=creatCurry(fun1)
console.log(fun2(1,2,3,4));
console.log(fun2(1)(2,3,4));
console.log(fun2(1,2,3,4));