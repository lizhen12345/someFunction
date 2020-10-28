///输入为一个数组，输出为这个数组中连续子数组中的最大和


function maxsumofSubarray(arr) {
    let currentSum = arr[0] //当前的加和
    let greatSum = arr[0]  //最好的和
    for (let i = 1; i < arr.length; i++) {
        if (currentSum <= 0) {//如果当前的和小于0，从当前循环元素重新开始
            currentSum = arr[i]
        } else {//否则加和
            currentSum += arr[i]
        }
        if (currentSum > greatSum) {//更新最好的和
            greatSum = currentSum
        }
    }
    return greatSum
}

let arr = [1, -2, 3, 10, -4, 7, 2, -5]
console.log(maxsumofSubarray(arr));

