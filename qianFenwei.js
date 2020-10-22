
///将一个数字转换为千分位

function formatNumber(num) { 
    if (isNaN(num)) { 
      throw new TypeError("num is not a number"); 
    } 
    
    return ("" + num).replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1,");  
  } 

console.log(formatNumber(1234567777));
console.log(('2525235235235325').toLocaleString());

function formatNumber1(num){
    let res = ''
    let count = 0
    num = (num || 0).toString()
    for(let i = num.length-1;i>=0;i--){
        count++
        res = num.charAt(i) + res
        if(!(count%3) && i != 0) res = ',' + res
    }
    return res
}

console.log(formatNumber1(1234567777));

