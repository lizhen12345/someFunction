//选择排序，
//依次找到剩余元素最小值，放置排好序的末尾（第一个放在开头）

function xuanze(arr){
    for(let i=0;i<arr.length-1;i++){
        var minIndex = i
        for(let j=i+1;j<arr.length;j++){
            minIndex = arr[j]<arr[minIndex]? j:minIndex
        }
        var tem = arr[i]
        arr[i] = arr[minIndex]
        arr[minIndex] = tem
    }
    return arr
}
var arr=[4,1,5,8,3]
console.log(xuanze(arr))