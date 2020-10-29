

//利用promise实现一个jsonp

function jsonp(url){
    return new Promise((resolve,reject)=>{
        const random = "JSONcallBack" + Math.random() 
        window[random] = (data) =>{
            resolve(data)
        }
        const script =document.createElement('script')//创建script标签
        script.src = `${url}?callback=${random}`
        script.onload = () => {
            script.remove()
        }
        script.onerror = () => {
            reject()
        }
        document.body.appendChild(script)
    })
}

let url = "https://blog.csdn.net/kahhy/article/details/81563063"
jsonp(url).then((data) => {
    console.log(data);
})


