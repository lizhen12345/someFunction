
///给大写数字A-Z编码为0-25，
// 输入一个字符串，首先编码为数字，然后找出和字符串相同编码的字符串的个数



let a ='BCDBCE'
console.log(a.slice(0));
function find(str){
  let strNum = ''
  for(let i=0;i<str.length;i++){
    strNum = strNum + (str[i].charCodeAt()-65) //首先给这个字符串 
  }
  let main = (strNum) =>{//创建函数
     if(strNum.length <= 2){//判断输入字符串的长度是否已经小于等于2，这个时候他所代表的字符串的个数为1或者2
       return strNum.length
     }
     if(strNum[0] === '1'){//如果当前字符为1 ，可能性有两种：一种是和后面数字组成编号为十几的字母，另一种是自己本身是'B'
       return main(strNum.slice(1)) + main(strNum.slice(2))
     }
     if(strNum[0] === '2' && strNum[1]<6 ){//如果当前字符是2，首先要判断后面的字符是否小于6，如果小于6,此时和1一样
       return main(strNum.slice(1)) + main(strNum.slice(2))
     }
    return main(strNum.slice(1))
    
  }
  return main(strNum)-1
}

console.log(find(a));



