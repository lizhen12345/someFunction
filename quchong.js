//记录去重的一些方法

//第一种循环
//创建一个新数组，复杂度最大为o（n方）？

function quchong1(target){
    const res = []
    for(let oneItem of target){
        if(res.indexOf(oneItem)===-1){
            res.push(oneItem)
        }
    }
    return res
}
var a = [1,1,2]
console.log(quchong1(a));
console.log(quchong2(a));

//利用es6中的set结构去重，因为set存储值结构采用的是hash结构，其复杂度可以到o（n）？

function quchong2(target){
    const res = new Set(target)
    return Array.from(res)
}