import { message } from 'antd'
import instance from '../utils/http.js'
import base from './base.js'
//封装一个通用的request请求
export default async function request(opt) {
   console.log(opt);
    try {//这里利用try catch来捕获async的异常，当然你用promise也行
        const options = Object.assign({
           method: 'get',
         },opt)
         const res = await instance(options)
        return res
    } catch(err) {
       console.log(err);
       return err
    }
    
}
