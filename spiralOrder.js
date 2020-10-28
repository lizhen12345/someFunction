//将一个二维数组(矩阵)顺时针打印出来



///循环操作



function spiralOrder(arr){
    let res = []//放一个空数组
    if(arr.length === 0){
        return res
    }else if(arr[0].length === 0){
        return res
    }
    let up = 0
    let down = arr.length-1
    let left = 0
    let right = arr[0].length-1
    while(true){
        if(left>right){
            return res
        }
        for(let i=left;i<=right;i++){
            res.push(arr[up][i])
        }
        up++
        if(up>down){
            return res
        }
        for(let i=up;i<=down;i++){
            res.push(arr[i][right])
        }
        right--

        if(right<left){
            return res
        }
        for(let i=right;i>=left;i--){
            res.push(arr[down][i])
        }   
        down--

        if(down<up){
            return res
        }
        console.log(down,up);
        for(let i = down;i>=up;down--){
            res.push(arr[i][left])
        }
        left++

    }
}
let arr = [[1,2,3],[4,5,6],[7,8,9]]
console.log(spiralOrder(arr));