//关于对象的遍历

//首先需要明确两个事情，一是对象的不可枚举属性，二是原型链上的属性

let obj = {a:1}
obj.b = 2

Object.defineProperty(obj,'c',{enumerable:false,value:3})//在obj对象上添加一个不可枚举属性

Object.prototype.d = 4 //添加一个原型链属性

//关于判断某个属性是否在对象中

//1 通过in  不止能判断其是否在对象中还能判断其是否在原型链中
console.log( 'a' in obj);//true
console.log( 'b' in obj);//true
console.log( 'c' in obj);//true
console.log( 'd' in obj);//true

//2 hasOwnProperty 只能判断其是否在对象中，不能识别出原型链上的属性 //可以结合in来锁定某一个属性在原型链中
console.log(obj.hasOwnProperty('a'));//true
console.log(obj.hasOwnProperty('b'));//true
console.log(obj.hasOwnProperty('c'));//true
console.log(obj.hasOwnProperty('d'));//false


//对象遍历

//1 for in

for(let one in obj){//打印a，b，d、、  由此证明可以遍历原型链上的属性，但是不可遍历不可枚举属性，
    //可以结合hasOwnProperty来遍历,
    console.log(one);
}

//2 Object.keys 

Object.keys(obj).map(one=>console.log(one))//输出a，b
console.log(Object.keys(obj));//['a','b']

//只会遍历本身的可枚举的属性，不会遍历原型链上的属性


//3 getOwnPropertyNames

console.log(Object.getOwnPropertyNames(obj));//['a','b','c']

//遍历对象本身的属性，包括不可枚举属性，不会遍历原型链上的属性





