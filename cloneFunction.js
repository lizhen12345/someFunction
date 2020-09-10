//实现一个浅拷贝
//只能拷贝引用数据类型的第一层
function shallClone(target){
    if(typeof(target) ==='object'&& target!==null){
        const cloneTarget = Array.isArray(target)?[]:{}
       for(let oneItem in target){
           if(target.hasOwnProperty(oneItem)){//防止其遍历原型上的属性
                cloneTarget[oneItem] = target[oneItem]
           }
       } 
       return cloneTarget
    }else{
        return target
    }
}
// Object.prototype.lin = 4
// var a = [1,[2,3]]

// b = shallClone(a)
// b[0]=3
// console.log(b,a,a.lin,b.lin);

//实现一个简易的深拷贝
// var res = {'a':1,{'b':2,em}}
function deepClone(target){
    if(target===null) return null;
    if(typeof target!=='object') return target
    const cloneTarget = Array.isArray(target)? []:{}
  

    for(let oneItem in target){
        if(target.hasOwnProperty(oneItem)){
            cloneTarget[oneItem] = deepClone(target[oneItem])
        }
    }
    // console.log(cloneTarget);
    return cloneTarget
}

// var res = {'a':1,'b':{'c':2}}
// resclone = deepClone(res)
// resclone['b']['c'] =3
// console.log(res,resclone);
