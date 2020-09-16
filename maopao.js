//冒泡排序,其属于比较类排序，交换类排序
//复杂度o(n方)，稳定排序算法

function maopao(arr){
    let len = arr.length
    let temp 
    for(let i=0;i<len-1;i++){
        for(let j=0;j<len-i-1;j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j]
                arr[j]=arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

let arr = [4,5,1,2]
console.log(maopao(arr));