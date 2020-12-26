//最后的api封装

import request from './request'
import baseApi from './base'

export function getYiQing(opt={}){
    console.log(1111,opt);
    return request(Object.assign({url:baseApi.baseUrl+baseApi.newdata},opt))
}



