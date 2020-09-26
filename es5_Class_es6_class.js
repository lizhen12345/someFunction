//es5和es6的类


//es5中如何定义的类
//用构造函数来定义类
function Person(name,age){
    this.name = name
    this.age = age
}
//在构造函数的原型上定义不同的函数
Person.prototype.getName = function(){
    console.log(this.name);
}
//实例化一个对象
let person1 = new Person('lin',18)
person1.getName()

//es6 中定义类，有了class,class是一个语法糖，其底层还是通过 构造函数 去创建的

class Person_es6{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    getName(){//会被实例继承，
        console.log(this.name);
    }
    static getage(){//静态方法，不会被实例继承，但是直接可以被类调用，this指向的是类不是实例
        console.log('1');
    }
}

let person2 = new Person_es6('林振',15)
person2.getName()
// person2.getage()//报错
Person_es6.getage()
console.log(Person_es6 === person2.__proto__.constructor);

//es6继承
class Person_es6_1 extends Person_es6 {
    constructor(name,age,sex){
        super(name,age) //继承
        this.sex = sex
    }
    getsex(){
        super.getName()//继承父类的方法,父类的静态方法也会被子类继承
    }
}

let ass = new Person_es6_1('lin',18,'男')
Person_es6_1.getage()//父类的静态方法也会被子类继承
//class是一个语法糖，其底层还是通过 构造函数 去创建的。


// 总结
// 类的所有方法都定义在类的prototype属性上面。
// 静态方法：在方法前加static，表示该方法不会被实例继承，而是直接通过类来调用。
// 静态属性：在属性前加static，指的是 Class 本身的属性，而不是定义在实例对象（this）上的属性。
// es5 的构造函数在调用父构造函数前可以访问 this, 但 es6 的构造函数在调用父构造函数(即 super)前不能访问 this。
// super

// 作为函数调用，代表父类的构造函数
// 作为对象调用，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。
