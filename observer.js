// 实现观察者模式，所谓观察者模式主要包括观察者和被观察者，
// 当被观察者状态发生变化时，自动通知观察者，

// 发布订阅模式介绍：https://github.com/lizhen12345/someFunction/blob/master/publish_subscribe.js

//微信公众号订阅就是一个典型的观察者模式，订阅了公众号，公众号会给用户推送信息
//简单实现
//大概实现了 一个公众号的综合管理，用户可以任意关注公众号和取消关注公众号
// 当公众号发布消息时通知所有订阅此公众号的用户
class wxBar{//是微信公众号
    constructor(){
        this.handles = new Map() //缓存列表
    }
    addObserver(event,ob){//订阅事件,event是一个微信公众号,也就是被观察者，ob是观察者
        if(this.handles.has(event)){
            this.handles.get(event).push(ob)
            console.log(`${ob.name}关注公众号${event}`);
        }else{
            this.handles.set(event,[ob])
            console.log(`${ob.name}关注公众号${event}`);
        }
    }
    removeObserver(event,ob){//取消关注公众号
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


class wxUser{
    constructor(name){
        this.name = name
    }
    update(topic,article){
        console.log(`${this.name}从${topic}处接收到了文章,内容是${article}`);
    }
}


let wxgzh = new wxBar()
let user1 = new wxUser('用户1')
let user2 = new wxUser('用户2')
let user3 = new wxUser('用户3')


wxgzh.addObserver('游戏',user1)//用户1订阅了游戏
// wxgzh.addObserver('体育',user2)//用户2订阅了体育
wxgzh.addObserver('游戏',user3)//用户3订阅了游戏


wxgzh.pushArticle('游戏','英雄联盟')//游戏公众号发布了动态，此时应该用户1和用户3收到消息

wxgzh.pushArticle('体育','科比')//体育公众号发布了动态，此时应该用户2收到消息


wxgzh.removeObserver('游戏',user1) //用户1取消订阅公众号












