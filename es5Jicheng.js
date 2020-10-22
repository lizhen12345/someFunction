
function Parent(){
    this.name = ['林振']
}

Parent.prototype.getName = function(){
    console.log(this.name);
}

//原型链继承，直接让子类的原型对象指向父类的实例，当子类实例找不到对应的属性和方法时，就会往它的原型对象，也就是父类实例上找，从而实现对父类的属性和方法的继承
//但是其缺点是一个子类的实例改变父类的引用数据类型会导致其他实例数据的改变,
//由于所有Child实例原型都指向同一个Parent实例, 因此对某个Child实例的父类引用类型变量修改会影响所有的Child实例

function Child1(){}

Child1.prototype = new Parent()
Child1.prototype.constructor = Child1

const test1 = new Child1()
const test2 = new Child1()
test1.getName()
test2.getName()
test1.name[0] = 'wangqian'//注意必须是引用数据类型
console.log(test1.name);//wangqian
console.log(test2.name); //wangqian 这里也发生改变了

//构造函数继承，构造函数继承，即在子类的构造函数中执行父类的构造函数，
//并为其绑定子类的this，让父类的构造函数把成员属性和方法都挂到子类的this上去，这样既能避免实例之间共享一个原型实例，又能向父类构造方法传参

//缺点：继承不到父类原型上的属性和方法

function Child2(){
    Parent.call(this)
}

const test3 = new Child2()
// test3.getName()///报错

/// 组合继承：原型链继承和构造函数继承结合
// 缺点：每次创建子类实例都执行了两次构造函数(Parent.call()和new Parent())，
//虽然这并不影响对父类的继承，但子类创建实例时，原型中会存在两份相同的属性和方法，这并不优雅
function Child3(){
    Parent.call(this)
}

Child3.prototype = new Parent()
Child3.prototype.constructor = Child3

const test4 = new Child3()
const test5 = new Child3()
test4.name[0] = 'wangqian'
test4.getName()//[wangqian]
test5.getName()//[林振]  、、这里并没有改变 成功了
console.log(test5.__proto__);

// 寄生组合继承
//为了解决构造函数被执行两次的问题, 我们将指向父类实例改为指向父类原型, 减去一次构造函数的执行

function Child4(){
    Parent.call()
}

Child4.prototype = Object.create(Parent.prototype)
Child4.prototype.consturctor = Child4
