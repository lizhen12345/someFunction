//利用map实现字符串最长的无重复子串长度


function zuichang(str){
    let head = 0
    let wei = 0;
    let map_res = new Map()
    let maxLen = 0
    let res 
    while(wei<str.length){
        if(!map_res.has(str[wei])){
            map_res.set(str[wei],1)
            wei++
            maxLen = Math.max(maxLen,wei-head)
        }else{
            map_res.delete(str[head])
            head++
        }
    }
    return maxLen

}
let str = 'bcccddsdasdfghjklfaasdfb'

console.log(zuichang(str));