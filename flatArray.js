//记录数组扁平化的一些方法

//首先，常规方法

function flatArray(target){
    var res = []
    for(let oneItem of target){
        if(typeof oneItem==='object'){
            res.push(...flatArray(oneItem))
        }else{
            res.push(oneItem)
        }
    }
    return res
  
}
var a = [1,2,[3,4,[5,6]]]
console.log(flatArray(a));