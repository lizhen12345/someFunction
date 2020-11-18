// //实现发布订阅模式
// 首先，发布订阅模式和观察者模式的区别是：
// 观察者模式是面向目标和观察者编程的，而发布订阅模式则是面向调度中心编程

// 上一个微信公众号用的是观察者模式，如果这边用发布订阅模式实现的话，是这样的\


// 观察者模式介绍网址：https://github.com/lizhen12345/someFunction/blob/master/observer.js

// 发布订阅模式里多了一个消息队列或代理PubSub的角色。

// 由于这个角色的加入，发布者和订阅者不需要相互了解，它们只是在调度中心的帮助下进行通信。
// 发布者和订阅者之间完全不存在直接联系，实现了解耦合。
// 观察者模式主要以同步的方式实现，即当某些事件发生时
// ，主体调用其所有观察者的适当方法。发布者/订阅者模式则主要通过使用消息队列以异步方式实现。
class PubSub{//调度中心
    constructor(){
        this.handles = new Map()
    }
    subscribe(event,ob){
        if(this.handles.has(event)){
            this.handles.get(event).push(ob)
            console.log(`${ob.name}关注公众号${event}`);
        }else{
            this.handles.set(event,[ob])
            console.log(`${ob.name}关注公众号${event}`);
        }
    }
    unsubscribe(event,ob){
        if(this.handles.has(event) && (this.handles.get(event).indexOf(ob) !== -1)){
            let index = this.handles.get(event).indexOf(ob)
            this.handles.get(event).splice(index,1)
            console.log(`${ob.name}取消关注公众号${event}`);
        }else{
            console.log('没有这个公众号或者此用户没有关注此公众号');
        }
    }
    pushArticle(event,article){//发布事件,即某一个公众号发布消息
        if(this.handles.has(event)){
            for(let ob of this.handles.get(event)){
                ob.update(event,article)
            }
        }else{
            console.log(`无人订阅${event}公众号或者当前公众号不存在`);
        }
       
    }
}

class wxBar{//是微信公众号
    constructor(){
    }

    pushArticle(pubsub,event,article){//发布事件,即某一个公众号发布消息
        pubsub.pushArticle(event,article)
    }
}
class wxUser{
    constructor(name){
        this.name = name
    }
    update(topic,article){
        console.log(`${this.name}从${topic}处接收到了文章,内容是${article}`);
    }
}

let pubsub = new PubSub()

let wxgzh = new wxBar()
let user1 = new wxUser('用户1')
let user2 = new wxUser('用户2')
let user3 = new wxUser('用户3')

pubsub.subscribe('游戏',user1)//用户1订阅了游戏
pubsub.subscribe('体育',user2)//用户2订阅了体育
pubsub.subscribe('游戏',user3)//用户3订阅了游戏


wxgzh.pushArticle(pubsub,'游戏','英雄联盟')//游戏公众号发布了动态，此时应该用户1和用户3收到消息

wxgzh.pushArticle(pubsub,'体育','科比')//体育公众号发布了动态，此时应该用户2收到消息

pubsub.unsubscribe('游戏',user1) //用户1取消订阅公众号