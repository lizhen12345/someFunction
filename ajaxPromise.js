//基于promise封装ajax
// 返回一个新的Promise实例


// 创建HMLHttpRequest异步对象


// 调用open方法，打开url，与服务器建立链接（发送前的一些处理）

// 监听Ajax状态信息

// 如果xhr.readyState == 4（表示服务器响应完成，可以获取使用服务器的响应了）

// xhr.status == 200，返回resolve状态
// xhr.status == 404，返回reject状态

// xhr.readyState !== 4，把请求主体的信息基于send发送给服务器

function ajax(url,method,data){
    return new Promise((resolve,reject)=>{
        let xhr = new XMLHttpRequest
        xhr.open(url,method)
        xhr.send(data)
        xhr.onreadystatechange=()=>{
            if(xhr.readyState&&xhr.status==200){
                resolve(xhr.responseText)
            }else{
                reject(xhr.status)
            }
        }
    })
}