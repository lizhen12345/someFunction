//手动实现一个promise。all函数
//首先确定的是Promise.all返回的是一个是一个Promise实例，
// 此实例在 传入promise。all的数组参数内所有的 promise 都“完成（resolved）”或参数中不包含 promise 时回调完成（resolve）；
// 如果参数中  promise 有一个失败（rejected），此实例回调失败（reject），失败原因的是第一个失败 promise 的结果


Promise.all = function(promises){
    return new Promise((resolve,reject)=>{
        let arr= []//存储每个promise执行后的结果
        let index = 0//用来计算promise的执行个数
        for(let i=0;i<promises.length;i++){
            const onePromise = promises[i]
            if(isPromise(onePromise)){//让其中的每一个promise执行
                onePromise.then(data=>{//执行成功的回调
                   arr[i] = data
                    if(++index===promises.length){
                        resolve(arr)//所有的全部执行成功，把所有结果返回
                    }
                },err=>reject(`第${i+1}个失败了`))//若一个失败，就终止了
            }
        }
    })
}
const isPromise=(val)=>{//判断其是一个promise的方法
    return typeof val.then === 'function';
}
let a = new Promise(resolve=>resolve(1))
let b = new Promise((resolve,reject)=>reject(2))
b.then(data=>{console.log(1);},err=>console.log(err))
Promise.all([a,b]).then(data=>console.log(0),err=>{console.log(err)})
 