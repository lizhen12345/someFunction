//sleep函数
//用于使进程进入休眠一段时间
function sleep(wait){
    return new Promise(resolve=>setTimeout(()=>resolve()),wait)
}

//如何使用
async function main(){
    await sleep(3000)//sleep3秒
    //TODO
}
