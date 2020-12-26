//关于axios的封装部分 
//请求拦截和响应拦截
import axios from 'axios'
import qs from 'querystring'

const instance = axios.create({
    timeout:'30000'//请求超时时间30s
})

//请求前拦截，做操作。

instance.interceptors.request.use(config =>{
    //
    config.headers = Object.assign(config.method === 'get'? {//这一步主要是为了如果其请求时没设置headers，这里设置一下默认的请求头
        'Accept':'application/json',
        'Content-Type':'application/json; charset=UTF-8'
    }:{
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },config.headers)

    if(config.method === 'post'){
        const contentType = config.headers['Content-Type']
        //根据contentType 转换数据格式
        if(contentType){
            if(contentType.includes('json')){//json格式
                config.data = JSON.stringify(config.data)
            }else{
                config.data = qs.stringify(config.data)//字符串格式
            }
        }
    }
    return Promise.resolve(config)
},err=>{
    return Promise.reject(err)
})


///响应后做拦截


instance.interceptors.response.use(response=>{
    return Promise.resolve(checkStatus(response))
},err=>{
    if(err.response){
        return Promise.reject(checkStatus(err.response))
    }else if( err.code == "ECONNABORTED" &&err.message.indexOf("timeout") != -1){
                //请求超时
                return Promise.reject('请求超时')
    }else{
        return Promise.reject('请求失败')
    }
})


function checkStatus(response){///对请求回来的数据进行解析分析
    const status = response.status || -1000
    if((status>=200 && status<300) || status === 304 ){//如若请求成功，
        return response //请求成功
    }else{//如若请求不成功，分情况讨论
        let errInfo = ''
        switch(status){
            case -1:
                errInfo = '远程服务响应失败,请稍后重试';
                break;
              case 400:
                errInfo = '400：错误请求';
                break;
              case 401:
                errInfo = '401：访问令牌无效或已过期';
                break;
              case 403:
                errInfo = '403：拒绝访问';
                break;
              case 404:
                errInfo = '404：资源不存在';
                break;
              case 405:
                errInfo = '405：请求方法未允许'
                break;
              case 408:
                errInfo = '408：请求超时'
                break;
              case 500:
                errInfo = '500：访问服务失败';
                break;
              case 501:
                errInfo = '501：未实现';
                break;
              case 502:
                errInfo = '502：无效网关';
                break;
              case 503:
                errInfo = '503：服务不可用'
                break;
              default:
                errInfo = `连接错误`
        }
        return {
            status:status,
            msg:errInfo
        }
    }
}

export default instance
