//快速排序

function kuaipai(arr){
    if(arr.length<=1) return arr
    // var pivotIndex = Math.floor(arr.length/2);
    var flag = arr[0];
    arr.shift()
    let left = []
    let right = []
    for(let i=0;i<arr.length;i++){
        let one = arr[i]
        // console.log(one);
        if(one<flag) left.push(one)
        else right.push(one)
    }
    return kuaipai(left).concat([flag],kuaipai(right))
    // return right
}
var arr = [4,5,2,3,6,2]
console.log(kuaipai(arr))