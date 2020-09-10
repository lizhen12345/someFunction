//promise。race的简化实现
// Promise.race(iterable) 方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。

//实现
Promise.race=function(promises){
    return new Promise((resolve,reject)=>{
        for(const onePromise of promises){
            onePromise.then(data=>resolve(data),err=>reject(err))
        }
    })
}
Promise.race([a,b]).then(data=>console.log(data),err=>{console.log(err)})