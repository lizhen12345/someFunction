//判断是否是一个数组的方法

//1 instanceof，此方法是从原型链上进行判断

var arr = [1,2,3]
var obj = {}
console.log(arr instanceof Array); //true
console.log(obj instanceof Array); //false
//但是有个缺点，
console.log(arr instanceof Object);//true,就是数组也是一个object

//2 toString(),返回对象的字符串
console.log(Object.prototype.toString.call(arr))//[object Array]

console.log(Object.prototype.toString.call(obj))//[object Object]

//3 es6中，isArray
console.log(Array.isArray(arr));//true
console.log(Array.isArray(obj));//false

//原型constructor链方法
console.log(arr.__proto__.constructor);//[Function: Array]

console.log(obj.__proto__.constructor);//[Function: Object]



