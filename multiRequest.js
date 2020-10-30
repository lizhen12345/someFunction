
// 实现一个批量请求函数 multiRequest(urls, maxNum)，要求最大并发数 maxNum，
// 每当有一个请求返回，就留下一个空位，可以增加新的请求，所有请求完成后，结果按照 urls 里面的顺序依次打出。
//请求函数可用fetch模拟

function multiRequest(urls,maxNum){
    const gUrls= [] //被分离出来的url数组
    const res = [] // 存储promise结果
    let index = 0//记录gUrls是否运行完毕
    for(let i=0;i<urls.length;i=i+maxNum){//url分割
        gUrls.push(urls.slice(i,i+maxNum))
    }
    return new Promise((resolve,reject)=>{
        const Request = (resolve,reject) =>{
            if(gUrls.length>index){
                let promiseArr = []// 记录每个promse数组
                gUrls[index].map((ele)=>promiseArr.push(loadImg(ele)))
                Promise.all(promiseArr).then(data=>{
                    res.push(...[data])
                    index++
                    Request(resolve,reject)//接着去执行下面的
                }).catch(err=>{
                    reject(err)//如果某一步失败了就直接返回
                })
            }else{
                resolve(res)
            }
        }
        Request(resolve,reject)
    })
}

function loadImg(url){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const k = Math.random()*10
            if(k>0.1){
                resolve(`${url}成功`)
            }else{
                reject(`${url}失败`)
            }
        })
    })
}

const urls=['1','2','3','1','2','3','1','2','3','1','2','3','1','2','3','1','2','3','1','2','3'];
    multiRequest(urls,4).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err)
    });


