//实现节流函数
//节流，如其名，节省资源，即使再触发一个函数，在一定的时间内只执行一次
//适用于长页面，分批向服务端作出请求

//定时器版本
function throttle(fn,wait){
    let timer =null
    return function(){
        if(!timer){
            timer = setTimeout(()=>{
                timer = null
                fn.apply(this,arguments)
            },wait)
        }
    }
  }
  
  //时间戳版本
  
  function throttle(fn,wait){
      let pre = Date.now()
      return function(){
         let nowTime = Date.now()
         if(nowTime-pre>=wait){
             fn.apply(this)
             nowTime=Date.now()
         }
      }
  }