//将类数组转化为数组，类数组是具有length属性，常见的有arguments和dom操作方法返回的结果

//1 使用Array.from
Array.from(document.querySelectorAll('div'))


//2 使用Array.prototype.slice.call()
Array.prototype.slice.call(document.querySelectorAll('div'))


//3使用扩展云算符

let a= [...document.querySelectorAll('div')]

//使用concat

Array.prototype.concat.apply([], document.querySelectorAll('div'));
