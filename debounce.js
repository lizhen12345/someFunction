//实现防抖函数
//防抖函数有两种，一种是需要立即出发效果的，例如点赞这种，立即版防抖
//另一种是需要最后看到效果，例如搜索框这种，非立即版防抖

/*
*fn，要执行的函数
*wait，触发效果的延迟时间
*immediate，是否是立即版防抖
*/
//时间戳实现方式
function debounce(fn,wait,immediate){
    let timer = null
    return function(){
        if(timer) clearTimeout(timer)
        if(immediate){
            let doNow = !timer
            timer=setTimeout(()=>{
                timer = null
            },wait)
            if(doNow){
                fn.apply(this,arguments)
            }
        }else{
            timer = setTimeout(()=>{
                timer = null 
                fn.apply(this,arguments)
            },wait)
        }
    }
}